import { Engine, System, Entity, CommonComponents } from "../WorldEngine";
import { C } from "../Components";

const Position2d = CommonComponents.Position2d;

export class EnemyCollision extends System {
  componentsRequired = new Set<Function>([C.Enemy]);

  update(engine: Engine, entities: Set<Entity>): void {
     // only run if the player just made a turn
    if(this.ecs.getBB('player turn')) return;
    this.ecs.setBB('player turn', true);

    
    // const playerID = this.ecs.blackBoard.get('player id');
    // const playerID = this.ecs.getBB('player id');
    // const playerPos = this.ecs.getComponents(playerID).get(Position2d);
    
    // for(let id of entities) {
    //     const pos = this.ecs.getComponents(id).get(Position2d);
    //     if(pos.equals(playerPos)) {
    //         this.ecs.setBB('game over', -1);
    //         break;
    //     }
    // }
  }
}