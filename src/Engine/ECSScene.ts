import { Game } from "./Game";
import { Scene } from "./Scene";

import { Component, ComponentContainer } from "./Component";
import { Entity } from "./Entity";
import { System } from "./System";

export abstract class ECSScene extends Scene {

  // Main state
  private entities = new Map<Entity, ComponentContainer>()
  private priorityToSystem = new Map<number, System>()
  private priorityToComponents = new Map<number, Set<Entity>>();
  private priorities = new Array<number>();

  // Bookkeeping for entities.
  private nextEntityID = 0
  private entitiesToDestroy = new Array<Entity>()

  public abstract customUpdate(game: Game): number;

  /**
   * Default return -1. Any other numbers will tell the game engine to change 
   * the scene to whatever index is returned.
   * @param canvas 
   * @param keyPresses 
   */
  public update(game: Game): number {
    // Update all systems. (Later, we'll add a way to specify the
    // update order.)
    for (let [system, entities] of this.systems.entries()) {
      system.update(game, entities)
    }

    // Remove any entities that were marked for deletion during the
    // update.
    while (this.entitiesToDestroy.length > 0) {
      this.destroyEntity(this.entitiesToDestroy.pop()!);
    }

    return this.customUpdate(game);
  }

  

  // API: Entities

  public addEntity(): Entity {
    let entity = this.nextEntityID;
    this.nextEntityID++;
    this.entities.set(entity, new ComponentContainer());
    return entity;
  }

  /**
   * Marks `entity` for removal. The actual removal happens at the end
   * of the next `update()`. This way we avoid subtle bugs where an
   * Entity is removed mid-`update()`, with some Systems seeing it and
   * others not.
   */
  public removeEntity(entity: Entity): void {
    this.entitiesToDestroy.push(entity);
  }

  public addComponent(entity: Entity, component: Component): void {
    this.entities.get(entity)!.add(component);
    this.checkE(entity);
  }

  public getComponents(entity: Entity): ComponentContainer  {
    return this.entities.get(entity)!;
  }

  public removeComponent(entity: Entity, componentClass: Function): void {
    this.entities.get(entity)?.delete(componentClass);
    this.checkE(entity);
  }

  // API: Systems
  /**
   * Add a system where the priority defines in what order it will be run when
   * compared to other systems
   * @param priority - lower value is run first
   * @param system 
   */
  public addSystem(priority: number, system: System): void {
    // System must require at least one component    
    if (system.componentsRequired.size == 0) {
      console.error('System not added: empty Components list.' + system);
      return;
    }

    if(this.priorities.includes(priority)) {
      console.error(`${system} can not be used since priority ${priority} already in use.`);
      return;
    }

    // Give system a reference to the ECS so it can actually do
    // anything.
    system.ecs = this;
    
    this.priorityToSystem.set(priority, system);
    this.priorityToComponents.set(priority, new Set());
    this.priorities.push(priority);
    this.priorities.sort();

    // Save system and set who it should track immediately.
    for (let entity of this.entities.keys()) {
      this.checkES(entity, system);
    }
  }

  protected clear(): void {
    this.entities.clear();
    this.priorityToComponents.clear();
    this.priorityToSystem.clear();
    this.priorities.length = 0;
  }

  private destroyEntity(entity: Entity): void {
    this.entities.delete(entity);
    for (let entities of this.systems.values()) {
      entities.delete(entity);  // no-op if doesn't have it
    }
  }

  // @TODO: can I remove this?
  private checkE(entity: Entity): void {
    for (let system of this.systems.keys()) {
      this.checkES(entity, system);
    }
  }

  /**
   * I think this can be removed but I'm going to leave it in for now.
   * @param entity 
   * @param system 
   */
  private checkES(entity: Entity, system: System): void {
    let have = this.entities.get(entity);
    let need = system.componentsRequired;
    if (have!.hasAll(need)) {
      // should be in system
      this.systems.get(system)!.add(entity); // no-op if in
    } else {
      // should not be in system
      this.systems.get(system)!.delete(entity); // no-op if out
    }
  }
};