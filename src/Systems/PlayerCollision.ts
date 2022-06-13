import { Engine, System, Entity, CommonComponents } from "../WorldEngine";
import { GridCollisions } from "../WorldEngine/src/Utility/GridCollisions";
import { C } from "../Components";

const Position2d = CommonComponents.Position2d;

export class PlayerCollision extends System {
  componentsRequired = new Set<Function>([]);

  update(engine: Engine, entities: Set<Entity>): void {
    const id = this.ecs.getBB('player id');
    const components = this.ecs.getComponents(id);
    const pos = components.get(Position2d);
    if (!pos.updated()) {
      return;
    }

    const gc: GridCollisions = this.ecs.getBB('grid collisions');
    const locID = gc.get(pos);
    
    // if no collision was found, the player can move
    if (locID == undefined) {
      gc.acceptChange(pos, id);
      return;
    }

    // if the player ran into a switch
    const locComponents = this.ecs.getComponents(locID);
    if (locComponents.has(C.Switch)) {
      const switchCount = this.ecs.getBB('switch count') - 1;
      this.ecs.setBB('switch count', switchCount);
      this.ecs.removeEntity(locID);
      gc.acceptChange(pos, id);
      return;
    }
    
    // if the player ran into an enemy... uh oh!
    if (locComponents.has(C.Enemy)) {
      this.ecs.setBB('game over', -1);
      return;
    }

    // player ran into the portal.
    if (locComponents.has(C.Portal)) {
      if (this.ecs.getBB('switch count') == 0) {
      this.ecs.setBB('game over', 1);
      } else {
        pos.rejectChange();
      }

      return;
    }

    // player has ran into food
    if (locComponents.has(C.Food)) {
      components.get(C.Player).stamina += 25;
      this.ecs.removeEntity(locID);
      gc.acceptChange(pos, id);
      this.ecs.setBB('change', true);
      return;
    }

    // otherwise, we've run into a collider and we reject the change
    pos.rejectChange();
  }
}