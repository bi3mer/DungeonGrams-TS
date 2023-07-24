import { Engine, Entity, System } from "../../WorldEngine";
import { C } from "../../Components";

export class RenderMenuTextSystem extends System {
  componentsRequired = new Set<Function>([C.MenuText]);

  update(engine: Engine, entities: Set<Entity>): void {
    const minY = 100;
    const maxY = engine.height - 40;
    const yMod = 20;
    const maxOrder = (maxY - minY) / yMod;

    for(let entity of entities.values()) {
      const m = this.ecs.getComponents(entity).get(C.MenuText);
      let x = 20;
      let o = m.order;

      while (o > maxOrder) {
        o -= maxOrder + 1;
        x += 60;
      }

      let y = minY + yMod * o;
      let fillColor: string;
      if(m.selected) {
        fillColor = 'blue'
      } else if (m.beaten) {
        fillColor = 'green'
      }else {
        fillColor = 'red';
      }

      engine.drawText(x, y, m.name, 'white', true, fillColor);
    }

    engine.drawText(engine.width/2.5, 45, 'Level Select', 'white')
  }
}