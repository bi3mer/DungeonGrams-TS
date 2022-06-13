import { Engine, System, Entity, CommonComponents } from "../WorldEngine";
import { C } from "../Components";

const Position2d = CommonComponents.Position2d;


export class EnemyAISystem extends System {
  componentsRequired = new Set<Function>([Position2d, C.Render]);

  update(engine: Engine, entities: Set<Entity>): void {
    // enemy can only move during their turn
    if(this.ecs.getBB('player turn')) return;

  }
}