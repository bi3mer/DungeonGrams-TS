import { Switch } from "../Components/Switch";
import { Engine, System, Entity, CommonComponents } from "../WorldEngine";

const Position2d = CommonComponents.Position2d;

export class FoodCollision extends System {
  componentsRequired = new Set<Function>([Switch]);

  update(engine: Engine, entities: Set<Entity>): void {
    // const playerID = this.ecs.getBB('player id');
    // const playerPos = this.ecs.getComponents(playerID).get(Position);
    
    // for(let id of entities) {
    //     const switchPos = this.ecs.getComponents(id).get(Position);
    //     if(switchPos.equals(playerPos)) {
    //         const switchCount = this.ecs.getBB('switch count') - 1;
    //         this.ecs.setBB('switch count', switchCount);
    //         this.ecs.removeEntity(id);
    //         break;
    //     }
    // }
  }
}