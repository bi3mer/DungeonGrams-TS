import { Engine, Scene, Key } from "../WorldEngine";

export class PlayerWon extends Scene {
  public sceneIndex: number = 0;
  public timer: number = 0;

  constructor() {
    super();
  }

  public onEnter(engine: Engine): void { 
    this.timer = 0;
  }
  
  public onExit(engine: Engine): void { }

  public update(engine: Engine): number {
    this.timer += engine.delta
    if (this.timer > 2 || engine.keyDown.has(Key.ENTER)) {
      engine.setCookie(engine.getBB('level'), 'b');
      return this.sceneIndex;
    } else {
      engine.ctx.font = '40px Arial';
      engine.ctx.fillStyle = 'green'
      engine.ctx.fillText('You Won! Nice!', engine.width/3.5, engine.height/2);
      return -1;
    }
  }
}