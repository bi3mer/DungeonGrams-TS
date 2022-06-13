import { Engine, Key, Scene } from "../WorldEngine";

export class StartMenu extends Scene {
  public sceneIndex: number = 0;
  public timer: number = 0;

  constructor() {
    super();
  }

  public onEnter(engine: Engine): void { }
  
  public onExit(engine: Engine): void { }

  public update(engine: Engine): number {
    if(engine.keyDown.has(Key.ENTER)) {
      engine.keyDown.clear();
      return this.sceneIndex;
    } else {
      engine.ctx.font = '40px Arial';
      engine.ctx.fillStyle = 'white';
      engine.ctx.fillText('DungeonGrams', 220, 100);

      engine.ctx.font = '20px Arial';
      engine.ctx.fillText('Press Enter to start', 275, 150);

      engine.ctx.fillStyle = 'yellow';
      engine.ctx.fillText('& gives you stamina', 40, 200);
      engine.ctx.fillText('Collect all * to open the portal.', 40, 222);
      engine.ctx.fillText('Step through the portal O to win!', 40, 244);
      engine.ctx.fillText('But make sure to avoid the enemies # and traps ^', 40, 266);

      engine.ctx.fillStyle = 'green';
      engine.ctx.fillText('WASD to move', 40, 350);
      engine.ctx.fillText('Space to do nothing for a turn', 40, 375);
      engine.ctx.fillText('R to restart', 40, 400);
      engine.ctx.fillText('Q to quit', 40, 425);


      return -1;
    }
  }
}