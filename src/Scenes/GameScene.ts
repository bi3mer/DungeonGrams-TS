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
import { Key } from "../Engine/Key";
import { EnemyAISystem } from "../Systems/EnemyAISystem";
import { Movable } from "../Components/Movable";
import { Switch } from "../Components/Switch";
import { SwitchCollision } from "../Systems/SwitchCollision";
import { Enemy } from "../Components/Enemy";
import { EnemyCollision } from "../Systems/EnemyCollision";

export class GameScene extends ECSScene {
  public playerWonIndex = 0;
  public playerLostIndex= 0;
  public selfIndex = 0;
  public mainMenuIndex = 0;

  constructor() {
    super();
    this.setBB('game over', 0);
    this.setBB('restart', false)
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
    const lvlKey = game.getBB('level') as string;
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
          this.setBB('portal id', id);
        } else if (char == '@') {
          this.addComponent(id, new Player());
          this.addComponent(id, new Movable());
          this.setBB('player id', id);
        } else if (char == '*') {
          this.addComponent(id, new Switch());
          switchCount += 1;
        } else if (char == '#') {
          this.addComponent(id, new Movable());
          this.addComponent(id, new Enemy());
        } else if (char == '^') {
          this.addComponent(id, new Enemy());
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

    this.setBB('switch count', switchCount);
    this.setBB('offset x', offsetX);
    this.setBB('offset y', offsetY);
    this.setBB('x mod', xMod);
    this.setBB('y mod', yMod); 

    this.addSystem(0,   new PlayerSystem());
    this.addSystem(10,  new EnemyAISystem());
    this.addSystem(40,  new EnemyCollision());
    this.addSystem(50,  new SwitchCollision());
    this.addSystem(90,  new PortalSystem());
    this.addSystem(100, new RenderSystem());
  }
  
  public onExit(game: Game): void {
    this.clear();
  }

  public customUpdate(game: Game): number {
    const gameOver = this.getBB('game over')
    if (gameOver == -1) {
      return this.playerLostIndex;
    } else if (gameOver == 1) {
      return this.playerWonIndex;
    } else if (game.keyDown.has(Key.R)) {
      return this.selfIndex;
    } else if (game.keyDown.has(Key.Q)) {
      return this.mainMenuIndex;
    }

    return -1;
  }
}