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
      color = '#8B8000';
    } else {
      color= 'red';
    }

    engine.drawRect(20, 20, stamina*4, 20, color);

    const maxStamina = 30*4;
    engine.drawRectOutline(19, 18, maxStamina + 2, 22, 2, 'gray');
    // engine.drawText(35, 35, 'Stamina', 'white')

    // turn index
    const time = this.ecs.getBB('time step');
    let x = time < 10 ? 610 : 595;
    engine.drawText(x, 30, `Turn: ${time}`);
  }
}