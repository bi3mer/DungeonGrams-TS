import { Collider } from "../Components/Collider";
import { Player } from "../Components/Player";
import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class CollisionSystem extends System {
  componentsRequired = new Set<Function>([Position, Render, Collider]);

  update(game: Game, entities: Set<Entity>): void {
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