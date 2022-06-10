import { Collider } from "../Components/Collider";
import { Render } from "../Components/Render";
import { Engine, System, Entity, CommonComponents } from "../WorldEngine";

const Position2d = CommonComponents.Position2d;


export class EnemyAISystem extends System {
  componentsRequired = new Set<Function>([Position2d, Render, Collider]);

  update(engine: Engine, entities: Set<Entity>): void {
    // const playerPos = this.ecs.getComponents(playerID).get(Position);
    // let collisionFound = false;
    // for(let id of entities) {
    //   const blockPos = this.ecs.getComponents(id).get(Position);
    //   if(playerPos.equals(blockPos)) {
    //     playerPos.x = playerPos.oldX;
    //     playerPos.y = playerPos.oldY;
    //     collisionFound = true;
    //     break;
    //   }
    // }

    // if (!collisionFound) {
    //   playerPos.oldX = playerPos.x;
    //   playerPos.oldY = playerPos.y;
    // }
    
  }
}