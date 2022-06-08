import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class RenderSystem extends System {
  componentsRequired = new Set<Function>([Position, Render]);

  update(game: Game, entities: Set<Entity>): void {
    const xMod = 20;
    const yMod = 20;
    const x = 150;
    const y = 150;

    game.ctx.font = '20px Arial';
    for(let entity of entities.values()) {
      const render = this.ecs.getComponents(entity).get(Render)
      const pos = this.ecs.getComponents(entity).get(Position);
      game.ctx.fillStyle = render.color;
      game.ctx.fillText(render.character, x + pos.x*xMod, y + pos.y*yMod);
    }
  }
}