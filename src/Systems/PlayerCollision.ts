import { Collider } from "../Components/Collider";
import { Position } from "../Components/Position";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class PlayerCollision extends System {
  componentsRequired = new Set<Function>([Collider]);

  update(game: Game, entities: Set<Entity>): void {
    const playerID = this.ecs.getBB('player id');
    const playerPos = this.ecs.getComponents(playerID).get(Position);

    for(let id of entities) {
        const pos = this.ecs.getComponents(id).get(Position);
        if (pos.equals(playerPos)) {
            playerPos.x = playerPos.oldX;
            playerPos.y = playerPos.oldY;
        }
    }

    playerPos.updateOld();
  }
}