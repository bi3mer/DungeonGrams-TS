import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Engine, System, Entity } from "../WorldEngine";


export class RenderSystem extends System {
  componentsRequired = new Set<Function>([Position, Render]);
  private charToColor: {[id: string]: string}= {
    '@': 'white',
    '-': '#d9d1d0',
    'X': '#636363',
    '*': '#0ccef0',
    '\\': '#c300d1',
    '/': '#c300d1',
    'o': '#414d42',
    'O': '#19f00a',
    '#': 'red',
    '^': '#f0cd0a',
    '&': '#259c2b',
  };


  update(engine: Engine, entities: Set<Entity>): void {
    const xMod: number = this.ecs.getBB('x mod');
    const yMod: number = this.ecs.getBB('y mod');

    engine.ctx.font = '20px Arial';
    for(let entity of entities.values()) {
      // get components
      const render = this.ecs.getComponents(entity).get(Render)
      const pos = this.ecs.getComponents(entity).get(Position);

      // render
      engine.ctx.fillStyle = this.charToColor[render.character];
      engine.ctx.fillText(render.character, pos.x*xMod, pos.y*yMod);
    }
  }
}