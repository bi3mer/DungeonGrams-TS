import { ECSScene } from "../Engine/ECSScene";
import { Game } from "../Engine/Game";
import { Position } from "../Components/Position";
import { RenderSystem } from "../Systems/RenderSystem";
import { Render } from "../Components/Render";
import { Player } from "../Components/Player";
import { PlayerSystem } from "../Systems/PlayerSystem";
import { PlayerColliderSystem } from "../Systems/PlayerColliderSystem";

export class MazeGameScene extends ECSScene {
  public sceneIndex: number = 0;
  private size: number = 20;
  private playerID: number = 0;

  constructor() {
    super();
  }

  public onEnter(): void {
    this.playerID = this.addEntity();
    this.addComponent(this.playerID, new Position(0,0));
    this.addComponent(this.playerID, new Render('white', '@'));
    this.addComponent(this.playerID, new Player());

    this.addSystem(new PlayerSystem(this.size));
    this.addSystem(new PlayerColliderSystem(this.playerID));
    this.addSystem(new RenderSystem());
  }
  
  public onExit(): void {
    this.clear();
  }

  public customUpdate(game: Game): number {
    const playerPos = this.getComponents(this.playerID).get(Position);
    if (playerPos.x == this.size - 1 && playerPos.y == this.size - 1) {
      return this.sceneIndex;
    }
    return -1;
  }
}