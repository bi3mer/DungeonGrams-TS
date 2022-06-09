import { ECSScene } from "../Engine/ECSScene";
import { Game } from "../Engine/Game";
import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Player } from "../Components/Player";
import { LEVELS } from "../levels";
import { RenderSystem } from "../Systems/RenderSystem";

export class GameScene extends ECSScene {
  public scenePlayerWonIndex: number = 0;
  public scenePlayerLostIndex: number = 0;
  private size: number = 20;
  private playerID: number = 0;
  

  constructor() {
    super();
  }

  public onEnter(game: Game): void {
    const lvlKey = game.blackBoard.get('level') as string;
    const lvl = LEVELS[lvlKey as keyof typeof LEVELS];
    for (let y = 0; y < lvl.length; ++y) {
      for (let x = 0; x < lvl[y].length; ++x) {
        const char = lvl[y][x];
        const id = this.addEntity();
        this.addComponent(id, new Render(char));
        this.addComponent(id, new Position(x, y));
      }
    }

    this.addSystem(100, new RenderSystem());
  }
  
  public onExit(game: Game): void {
    this.clear();
  }

  public customUpdate(game: Game): number {
    // const playerPos = this.getComponents(this.playerID).get(Position);
    // if (playerPos.x == this.size - 1 && playerPos.y == this.size - 1) {
    //   return -1;
    // }
    return -1;
  }
}