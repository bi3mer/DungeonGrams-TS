import { Engine, System, Entity, CommonComponents } from "../WorldEngine";
import { C } from "../Components";

export class RenderStamina extends System {
  componentsRequired = new Set<Function>([C.Player]);

  update(engine: Engine, entities: Set<Entity>): void {
    const [id] = entities;
    const stamina = this.ecs.getComponents(id).get(C.Player).stamina;

    if (stamina > 20) {
      engine.ctx.fillStyle = 'green';
    } else if (stamina > 10) {
      engine.ctx.fillStyle = 'yellow';
    } else {
      engine.ctx.fillStyle = 'red';
    }

    engine.ctx.font = '20px Arial';
    engine.ctx.fillText(
      `Stamina: ${stamina}`, 
      20, 
      30);
  }
}