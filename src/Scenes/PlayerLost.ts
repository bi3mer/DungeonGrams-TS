import { Engine, Scene } from "../WorldEngine";

export class PlayerLost extends Scene {
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
    if(this.timer > 2) {
      return this.sceneIndex;
    } else {
      engine.ctx.font = '40px Arial';
      engine.ctx.fillStyle = 'green'
      engine.ctx.fillText('You Lost! :/', engine.width/3.5, engine.height/2);
      return -1;
    }
  }
}