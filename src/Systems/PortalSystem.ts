import { Portal } from "../Components/Portal";
import { Render } from "../Components/Render";
import { Engine, System, Entity, CommonComponents } from "../WorldEngine";

const Position2d = CommonComponents.Position2d;


export class PortalSystem extends System {
  componentsRequired = new Set<Function>([Portal, Render]);

  update(engine: Engine, entities: Set<Entity>): void {
    const [id] = entities; // there can only be one portal
    if(this.ecs.getBB('switch count') == 0) {
      this.ecs.getComponents(id).get(Render).character = 'O';

      const playerID = this.ecs.getBB('player id');
      const playerPos = this.ecs.getComponents(playerID).get(Position2d);
      const portalPos = this.ecs.getComponents(id).get(Position2d);

      if(playerPos.equals(portalPos)) {
        this.ecs.setBB('game over', 1); // player won
      }
    } else {
      this.ecs.getComponents(id).get(Render).character = 'o';
    }
  }
}