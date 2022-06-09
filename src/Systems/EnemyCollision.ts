import { Enemy } from "../Components/Enemy";
import { Position } from "../Components/Position";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class EnemyCollision extends System {
  componentsRequired = new Set<Function>([Enemy]);

  update(game: Game, entities: Set<Entity>): void {
    // const playerID = this.ecs.blackBoard.get('player id');
    const playerID = this.ecs.getBB('player id');
    const playerPos = this.ecs.getComponents(playerID).get(Position);
    
    for(let id of entities) {
        const pos = this.ecs.getComponents(id).get(Position);
        if(pos.equals(playerPos)) {
            this.ecs.setBB('game over', -1);
            break;
        }
    }
  }
}