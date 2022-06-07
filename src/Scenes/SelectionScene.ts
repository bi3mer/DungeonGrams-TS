import { Game } from "../Engine/Game";
import { Key } from "../Engine/Key";
import { ECSScene } from "../Engine/ECSScene";
import { LEVELS } from "../levels"; 

export class SelectionScene extends ECSScene {
  public sceneIndex: number = 0;
  
  constructor() {
    super();
  }
  
  public onExit(): void { }
  
  public onEnter(): void {
    for(let key in LEVELS) {
      
    }
  }
  
  public customUpdate(game: Game): number {
    return -1;
  }
  
  // public update(game: Game): number {
  //   if (game.keyDown.has(Key.SPACE)) {
  //     return this.sceneIndex;
  //   } else {
  //     game.ctx.font = '40px Arial';
  //     game.ctx.fillStyle = 'white'
  //     game.ctx.fillText('Press Space to Play', game.width/3.5, game.height/2);
  //     return -1;
  //   }
  // }
}