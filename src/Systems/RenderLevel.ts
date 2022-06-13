import { Engine, System, Entity, CommonComponents } from "../WorldEngine";

export class RenderLevel extends System {
  componentsRequired = new Set<Function>([]);

  update(engine: Engine, entities: Set<Entity>): void {
    const level: string = engine.getBB('level');
    engine.ctx.font = '20px Arial';
    engine.ctx.fillStyle = 'white';
    engine.ctx.fillText(
      level, 
      engine.width/2, 
      30);
  }
}