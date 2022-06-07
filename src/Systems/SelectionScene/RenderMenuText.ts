import { Entity } from "../../Engine/Entity";
import { Game } from "../../Engine/Game";
import { System } from "../../Engine/System";
import { MenuText } from "../../Components/SelectionScene/MenuText";

export class RenderMenuTextSystem extends System {
  componentsRequired = new Set<Function>([MenuText]);

  update(game: Game, entities: Set<Entity>): void {
    const minY = 100;
    const maxY = game.height - 40;
    const yMod = 20;
    const maxOrder = (maxY - minY) / yMod;


    game.ctx.font="15px Arial";
    for(let entity of entities.values()) {
      const m = this.ecs.getComponents(entity).get(MenuText);
      let x = 20;
      let o = m.order;

      while (o > maxOrder) {
        o -= maxOrder + 1;
        x += 60;
      }

      let y = minY + yMod * o;
      
      if(m.selected) {
        const txtMeasure = game.ctx.measureText(m.name);
        game.ctx.fillStyle = 'white'
        game.ctx.fillRect(
          x-1.0, 
          y - yMod*0.7,
          txtMeasure.width*1.1, 
          yMod);

        game.ctx.fillStyle = 'black'
        game.ctx.fillText(m.name, x, y);
      } else {
        game.ctx.fillStyle = 'white'
        game.ctx.fillText(m.name, x, y);
      }
    }

    game.ctx.font="30px Arial";
    game.ctx.fillText('Level Select', game.width/2.5, 35);
  }
}