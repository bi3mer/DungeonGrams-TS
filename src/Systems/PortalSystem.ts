import { Portal } from "../Components/Portal";
import { Render } from "../Components/Render";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class PortalSystem extends System {
  componentsRequired = new Set<Function>([Portal, Render]);

  update(game: Game, entities: Set<Entity>): void {
    const [id] = entities; // there can only be one portal
    if(this.ecs.getBB('switch count') == 0) {
      this.ecs.getComponents(id).get(Render).character = 'O';
    } else {
      this.ecs.getComponents(id).get(Render).character = 'o';
    }
  }
}