import { Entity } from "../../Engine/Entity";
import { Game } from "../../Engine/Game";
import { System } from "../../Engine/System";
import { MenuText } from "../../Components/SelectionScene/MenuText";

export class UpdateSelected extends System {
  componentsRequired = new Set<Function>([MenuText]);

  update(game: Game, entities: Set<Entity>): void {
    // for(let entity of entities.values()) {
    //     const m = this.ecs.getComponents(entity).get(MenuText);
    // }

    // const xMod = game.width/20;
    // const yMod = game.height/20;

    // for(let entity of entities.values()) {
    //   const render = this.ecs.getComponents(entity).get(Render)
    //   const pos = this.ecs.getComponents(entity).get(Position);
    //   game.ctx.fillStyle = render.color;
    //   game.ctx.fillRect(
    //     pos.x*xMod + xMod*render.offset, 
    //     pos.y*yMod + yMod*render.offset, 
    //     xMod*render.size, 
    //     yMod*render.size);
    // }
  }
}