import { ECSScene } from "../Engine/ECSScene";
import { Game } from "../Engine/Game";
import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Player } from "../Components/Player";
import { LEVELS } from "../levels";
import { RenderSystem } from "../Systems/RenderSystem";
import { Portal } from "../Components/Portal";
import { PortalSystem } from "../Systems/PortalSystem";
import { PlayerSystem } from "../Systems/PlayerSystem";

export class GameScene extends ECSScene {
  public scenePlayerWonIndex: number = 0;
  public scenePlayerLostIndex: number = 0;

  constructor() {
    super();
    this.blackBoard.set('game over', 0);
  }

  public onEnter(game: Game): void {
    const xMod = 20;
    const yMod = 20;
    const offsetX = 8;
    const offsetY = 7;
    let xMin = 1000;
    let xMax = 0;
    let yMin = 1000;
    let yMax = 0;

    let switchCount = 0;
    const lvlKey = game.blackBoard.get('level') as string;
    const lvl = LEVELS[lvlKey as keyof typeof LEVELS];
    for (let y = 0; y < lvl.length; ++y) {
      for (let x = 0; x < lvl[y].length; ++x) {
        const char = lvl[y][x];
        const id = this.addEntity();

        const xPos = offsetX + x;
        const yPos = offsetY + y;
        xMin = Math.min(xMin, xPos);
        xMax = Math.max(xMax, xPos);
        yMin = Math.min(yMin, yPos);
        yMax = Math.max(yMax, yPos);

        if (char == '-') {
          continue;
        }
        
        this.addComponent(id, new Render(char));
        this.addComponent(id, new Position(xPos, yPos));
        
        if (char == 'O') {
          this.addComponent(id, new Portal());
        } else if (char == '@') {
          this.addComponent(id, new Player());
          this.blackBoard.set('player id', id);
        } else if (char == '*') {
          switchCount += 1;
        }
      }
    }

    for(let y = 3; y < game.height/yMod -1; ++y) {
      for(let x = 1; x < game.width/xMod -1; ++x) {
        if (x < xMin || x > xMax || y < yMin || y > yMax) {
            const id = this.addEntity();
          this.addComponent(id, new Render('X'));
          this.addComponent(id, new Position(x, y));
        }
      }
    }

    this.blackBoard.set('switch count', switchCount);
    this.blackBoard.set('offset x', offsetX);
    this.blackBoard.set('offset y', offsetY);
    this.blackBoard.set('x mod', xMod);
    this.blackBoard.set('y mod', yMod); 

    this.addSystem(0, new PlayerSystem());
    this.addSystem(90, new PortalSystem());
    this.addSystem(100, new RenderSystem());
  }
  
  public onExit(game: Game): void {
    this.clear();
  }

  public customUpdate(game: Game): number {
    const gameOver = this.blackBoard.get('game over')
    if (gameOver == -1) {
      return this.scenePlayerLostIndex;
    } else if (gameOver == 1) {
      return this.scenePlayerWonIndex;
    }

    return -1;
  }
}