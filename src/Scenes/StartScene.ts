import { Game } from "../Engine/Game";
import { Key } from "../Engine/Key";
import { Scene } from "../Engine/Scene";

export class StartScene extends Scene {
  public sceneIndex: number = 0;
  public timer: number = 0;

  constructor() {
    super();
  }

  public onEnter(): void { }
  
  public onExit(): void { }

  public update(game: Game): number {
    if(game.keyDown.has(Key.ENTER)) {
      game.keyDown.clear();
      return this.sceneIndex;
    } else {
      game.ctx.font = '40px Arial';
      game.ctx.fillStyle = 'white'
      game.ctx.fillText('DungeonGrams', game.width/3.5, game.height/2);

      game.ctx.font = '20px Arial';
      game.ctx.fillStyle = 'white'
      game.ctx.fillText('Press Enter key to start', game.width/2.9, game.height - game.height/3);
      return -1;
    }
  }
}