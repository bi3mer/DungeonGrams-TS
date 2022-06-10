import { Engine, Entity, System } from "../../WorldEngine";
import { C } from "../../Components";

export class RenderMenuTextSystem extends System {
  componentsRequired = new Set<Function>([C.MenuText]);

  update(engine: Engine, entities: Set<Entity>): void {
    const minY = 100;
    const maxY = engine.height - 40;
    const yMod = 20;
    const maxOrder = (maxY - minY) / yMod;

    engine.ctx.font="15px Arial";
    for(let entity of entities.values()) {
      const m = this.ecs.getComponents(entity).get(C.MenuText);
      let x = 20;
      let o = m.order;

      while (o > maxOrder) {
        o -= maxOrder + 1;
        x += 60;
      }

      let y = minY + yMod * o;
      
      if(m.selected) {
        const txtMeasure = engine.ctx.measureText(m.name);
        engine.ctx.fillStyle = 'white'
        engine.ctx.fillRect(
          x-1.0, 
          y - yMod*0.7,
          txtMeasure.width*1.1, 
          yMod);

        engine.ctx.fillStyle = 'black'
        engine.ctx.fillText(m.name, x, y);
      } else {
        engine.ctx.fillStyle = 'white'
        engine.ctx.fillText(m.name, x, y);
      }
    }

    engine.ctx.font="30px Arial";
    engine.ctx.fillStyle = 'white'
    engine.ctx.fillText('Level Select', engine.width/2.5, 45);
  }
}