import { Key, keyCodeToKey } from "./Key";
import { Scene } from "./Scene";

export class Engine {
  public readonly keyDown = new Set<Key>();
  public readonly keyPress = new Set<Key>();
  public readonly width: number;
  public readonly height: number;
  public delta: number;
  public clearBackground = true;
  public displayFPS = true;

  private scenes = new Array<Scene>();
  private sceneIndex: number = 0;
  private ctx: CanvasRenderingContext2D;
  private blackBoard: Map<string, any> = new Map<string, any>();
  private fontSize = 20;
  private font = 'Courier New'

  constructor() {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      const k = keyCodeToKey(e.key);
      if(k == Key.DOWN || k == Key.UP || k == Key.LEFT || k == Key.RIGHT) {
        e.preventDefault();
      }
      if(!this.keyDown.has(k)) {
        this.keyDown.add(k)
      }

      this.setFont();
    });

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      const k = keyCodeToKey(e.key);
      this.keyDown.delete(k);

      this.keyPress.add(k);
    });


    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = canvas.getContext("2d")!;

    this.width = canvas.width;
    this.height = canvas.height;
    this.delta = 0;
  }

  public setBB(key: string, val: any): void {
    this.blackBoard.set(key, val);
  }

  public getBB(key: string): any {
    return this.blackBoard.get(key);
  }

  public addScene(scene: Scene): number {
    this.scenes.push(scene);
    return this.scenes.length - 1;
  }

  public start(): void {
    let oldTimeStamp : number;
    let fps : number;

    this.scenes[this.sceneIndex].onEnter(this);

    const gameLoop = (timeStamp : number) => {
      // Calculate the number of seconds passed since the last frame
      this.delta = (timeStamp - oldTimeStamp) / 1000;
      oldTimeStamp = timeStamp;
      fps = Math.round(1 / this.delta);

      // reset background
      if (this.clearBackground) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);
      }

      // game engine operations
      this.update();

      // Draw FPS
      if (this.displayFPS && this.clearBackground) {
        const tempSize = this.fontSize;
        const tempFont = this.font;

        this.setFont(8, 'Courier New');
        this.drawText(this.width - 60, 15, `FPS: ${fps}`, 'red');
        this.setFont(tempSize, tempFont);
      }

      this.keyPress.clear();
      window.requestAnimationFrame(gameLoop);
    }

    window.requestAnimationFrame(gameLoop);
  }

  private update(): void {
    const i = this.scenes[this.sceneIndex].update(this);
    if (i !== -1) {
      this.scenes[this.sceneIndex].onExit(this);
      this.sceneIndex = i
      this.scenes[this.sceneIndex].onEnter(this);
    }
  }

  public setFont(size: number|undefined = undefined, font: string|undefined = undefined) {
    if (size != undefined) {
      this.fontSize = size;
    }

    if (font != undefined) {
      this.font = font;
    }

    this.ctx.font = `${this.fontSize}px ${this.font}`;
  }

  public drawText(
    x: number, 
    y: number, 
    char: string, 
    fontColor='white',
    background=false,
    backgroundColor="white"): void {
    // background
    if (background) {
      const txtMeasure = this.ctx.measureText(char);
      this.ctx.fillStyle = backgroundColor;
      this.ctx.fillRect(
        x-1.0, 
        y - this.fontSize*0.7,
        txtMeasure.width*1.1, 
        this.fontSize*1.2);
    }

    // text
    this.ctx.fillStyle = fontColor;
    this.ctx.fillText(char, x, y);
  }
}