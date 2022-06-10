import { Enemy } from "../Components/Enemy";
import { Engine, System, Entity, CommonComponents } from "../WorldEngine";

const Position2d = CommonComponents.Position2d;

export class EnemyCollision extends System {
  componentsRequired = new Set<Function>([Enemy]);

  update(engine: Engine, entities: Set<Entity>): void {
    // const playerID = this.ecs.blackBoard.get('player id');
    const playerID = this.ecs.getBB('player id');
    const playerPos = this.ecs.getComponents(playerID).get(Position2d);
    
    for(let id of entities) {
        const pos = this.ecs.getComponents(id).get(Position2d);
        if(pos.equals(playerPos)) {
            this.ecs.setBB('game over', -1);
            break;
        }
    }
  }
}