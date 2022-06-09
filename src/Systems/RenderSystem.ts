import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class RenderSystem extends System {
  componentsRequired = new Set<Function>([Position, Render]);
  private charToColor: {[id: string]: string}= {
    '@': 'white',
    '-': '#d9d1d0',
    'X': '#636363',
    '&': '#0ccef0',
    '\\': '#c300d1',
    '/': '#c300d1',
    'o': '#203822',
    'O': '#19f00a',
    '#': 'red',
    '^': '#f0cd0a'
  };

  update(game: Game, entities: Set<Entity>): void {
    const xMod = 20;
    const yMod = 20;
    const x = 150;
    const y = 150;

    game.ctx.font = '20px Arial';
    for(let entity of entities.values()) {
      const render = this.ecs.getComponents(entity).get(Render)
      const pos = this.ecs.getComponents(entity).get(Position);
      game.ctx.fillStyle = this.charToColor[render.character];
      game.ctx.fillText(render.character, x + pos.x*xMod, y + pos.y*yMod);
    }
  }
}