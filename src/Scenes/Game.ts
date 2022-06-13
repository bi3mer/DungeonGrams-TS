import { C } from "../Components";
import { S } from "../Systems";
import { LEVELS } from "../levels";


import { Engine, ECSScene, Key, CommonComponents, Utility } from "../WorldEngine";
import { Collider } from "../Components/Collider";
const Position2d = CommonComponents.Position2d;
const GridCollisions = Utility.GridCollisions;

export class Game extends ECSScene {
  public playerWonIndex = 0;
  public playerLostIndex= 0;
  public selfIndex = 0;
  public mainMenuIndex = 0;

  constructor() {
    super();
    this.setBB('game over', 0);
    this.setBB('restart', false)
  }

  public onEnter(engine: Engine): void {
    const xMod = 20;
    const yMod = 20;
    const offsetX = 8;
    const offsetY = 7;
    let xMin = 1000;
    let xMax = 0;
    let yMin = 1000;
    let yMax = 0;

    const gc = new GridCollisions();

    let switchCount = 0;
    const lvlKey = engine.getBB('level') as string;
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
        
        this.addComponent(id, new C.Render(char));
        const pos = new Position2d(xPos, yPos);
        this.addComponent(id, pos);
        gc.set(pos, id);
        
        if (char == 'O') {
          this.addComponent(id, new C.Portal());
          this.setBB('portal id', id);
        } else if (char == '@') {
          this.addComponent(id, new C.Player(30));
          this.addComponent(id, new C.Movable());
          this.setBB('player id', id);
        } else if (char == '*') {
          this.addComponent(id, new C.Switch());
          switchCount += 1;
        } else if (char == '#') {
          this.addComponent(id, new C.Movable());
          this.addComponent(id, new C.Enemy(new Position2d(xPos, yPos)));
        } else if (char == '^') {
          this.addComponent(id, new C.Enemy(new Position2d(xPos, yPos)));
        } else if (char == '/' || char == '\\' || char == 'X') {
          this.addComponent(id, new Collider());
        } else if (char == '&') {
          this.addComponent(id, new C.Food());
        }
      }
    }

    for(let y = 3; y < engine.height/yMod -1; ++y) {
      for(let x = 1; x < engine.width/xMod -1; ++x) {
        if (x < xMin || x > xMax || y < yMin || y > yMax) {
          const id = this.addEntity();
          this.addComponent(id, new C.Render('X'));
          const pos = new Position2d(x, y);
          this.addComponent(id, pos);

          if (x == xMin - 1 || y == yMin - 1 || x == xMax + 1 || y == yMax + 1) {
            gc.set(pos, id);
            this.addComponent(id, new C.Collider());
          }
        }
      }
    }

    this.setBB('switch count', switchCount);
    this.setBB('offset x', offsetX);
    this.setBB('offset y', offsetY);
    this.setBB('x mod', xMod);
    this.setBB('y mod', yMod); 
    this.setBB('grid collisions', gc);
    this.setBB('time step', 0);

    this.addSystem(0,   new S.PlayerMovement());
    this.addSystem(10,  new S.PlayerCollision()); 
    this.addSystem(20,  new S.EnemyAI());
    this.addSystem(90,  new S.PortalSystem());   
    this.addSystem(100, new S.RenderSystem());
    this.addSystem(110, new S.RenderGameInfo());
    this.addSystem(120, new S.RenderLevel());
    this.addSystem(900, new S.UpdatePlayerTurn());
  }
  
  public onExit(engine: Engine): void {
    this.clear();
  }

  public customUpdate(engine: Engine): number {
    const gameOver = this.getBB('game over')
    if (gameOver == -1) {
      return this.playerLostIndex;
    } else if (gameOver == 1) {
      return this.playerWonIndex;
    } else if (engine.keyDown.has(Key.R)) {
      return this.selfIndex;
    } else if (engine.keyDown.has(Key.Q)) {
      return this.mainMenuIndex;
    }

    return -1;
  }
}