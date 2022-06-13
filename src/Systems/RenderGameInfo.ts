import { Engine, System, Entity, CommonComponents } from "../WorldEngine";
import { C } from "../Components";

export class RenderGameInfo extends System {
  componentsRequired = new Set<Function>([C.Player]);

  update(engine: Engine, entities: Set<Entity>): void {
    const [id] = entities;
    const stamina = this.ecs.getComponents(id).get(C.Player).stamina;

    // stamina
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

    // turn index
    engine.ctx.fillStyle = 'white';
    const time = this.ecs.getBB('time step');
    let x = time < 10 ? 630 : 620;
    engine.ctx.fillText(`Turn: ${time}`, x, 30);
  }
}