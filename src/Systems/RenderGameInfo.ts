import { Engine, System, Entity, CommonComponents } from "../WorldEngine";
import { C } from "../Components";

export class RenderGameInfo extends System {
  componentsRequired = new Set<Function>([C.Player]);

  update(engine: Engine, entities: Set<Entity>): void {
    const [id] = entities;
    const stamina = this.ecs.getComponents(id).get(C.Player).stamina;

    // stamina
    let color: string;
    if (stamina > 20) {
      color = 'green';
    } else if (stamina > 10) {
      color = 'yellow';
    } else {
      color= 'red';
    }

    engine.drawText(20, 30, `Stamina: ${stamina}`, color);

    // turn index
    const time = this.ecs.getBB('time step');
    let x = time < 10 ? 610 : 595;
    engine.drawText(x, 30, `Turn: ${time}`);
  }
}