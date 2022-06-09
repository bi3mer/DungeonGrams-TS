import { Game } from "../Engine/Game";
import { Key } from "../Engine/Key";
import { Scene } from "../Engine/Scene";

export class StartScene extends Scene {
  public sceneIndex: number = 0;
  public timer: number = 0;

  constructor() {
    super();
  }

  public onEnter(game: Game): void { }
  
  public onExit(game: Game): void { }

  public update(game: Game): number {
    if(game.keyDown.has(Key.ENTER)) {
      game.keyDown.clear();
      return this.sceneIndex;
    } else {
      game.ctx.font = '40px Arial';
      game.ctx.fillStyle = 'white';
      game.ctx.fillText('DungeonGrams', 220, 100);

      game.ctx.font = '20px Arial';
      game.ctx.fillText('Press Enter to start', 275, 150);


      game.ctx.fillStyle = 'yellow';
      game.ctx.fillText('& gives you stamina', 40, 200);
      game.ctx.fillText('Collect all * to open the portal.', 40, 222);
      game.ctx.fillText('Step through the portal O to win!', 40, 244);
      game.ctx.fillText('But make sure to avoid the enemies # and traps ^', 40, 266);

      game.ctx.fillStyle = 'green';
      game.ctx.fillText('WASD to move', 40, 350);
      game.ctx.fillText('R to restart', 40, 375);
      game.ctx.fillText('Q to quit', 40, 400);


      return -1;
    }
  }
}