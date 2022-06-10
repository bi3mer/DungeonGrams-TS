import { Portal } from "../Components/Portal";
import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Engine, System, Entity } from "../WorldEngine";

export class PortalSystem extends System {
  componentsRequired = new Set<Function>([Portal, Render]);

  update(engine: Engine, entities: Set<Entity>): void {
    const [id] = entities; // there can only be one portal
    if(this.ecs.getBB('switch count') == 0) {
      this.ecs.getComponents(id).get(Render).character = 'O';

      const playerID = this.ecs.getBB('player id');
      const playerPos = this.ecs.getComponents(playerID).get(Position);
      const portalPos = this.ecs.getComponents(id).get(Position);

      if(playerPos.equals(portalPos)) {
        this.ecs.setBB('game over', 1); // player won
      }
    } else {
      this.ecs.getComponents(id).get(Render).character = 'o';
    }
  }
}