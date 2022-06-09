import { ECSScene } from "../Engine/ECSScene";
import { Game } from "../Engine/Game";
import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Player } from "../Components/Player";
import { LEVELS } from "../levels";
import { RenderSystem } from "../Systems/RenderSystem";
import { Portal } from "../Components/Portal";
import { PortalSystem } from "../Systems/PortalSystem";

export class GameScene extends ECSScene {
  public scenePlayerWonIndex: number = 0;
  public scenePlayerLostIndex: number = 0;
  private size: number = 20;
  private playerID: number = 0;

  constructor() {
    super();
    this.blackBoard.set('game over', 0);
  }

  public onEnter(game: Game): void {
    let switchCount = 0;
    const lvlKey = game.blackBoard.get('level') as string;
    const lvl = LEVELS[lvlKey as keyof typeof LEVELS];
    for (let y = 0; y < lvl.length; ++y) {
      for (let x = 0; x < lvl[y].length; ++x) {
        const char = lvl[y][x];
        const id = this.addEntity();
        
        this.addComponent(id, new Render(char));
        this.addComponent(id, new Position(x, y));
        
        if (char == 'O') {
          this.addComponent(id, new Portal());
        } else if (char == '@') {
          this.addComponent(id, new Player());
        } else if (char == '*') {
          switchCount += 1;
        }
      }
    }

    this.blackBoard.set('switch count', switchCount);

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