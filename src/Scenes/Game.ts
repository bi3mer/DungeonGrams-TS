import { C } from "../Components";
import { S } from "../Systems";
import { LEVELS } from "../levels";


import { Engine, ECSScene, Key, CommonComponents } from "../WorldEngine";
const Position2d = CommonComponents.Position2d;


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
        this.addComponent(id, new Position2d(xPos, yPos));
        
        if (char == 'O') {
          this.addComponent(id, new C.Portal());
          this.setBB('portal id', id);
        } else if (char == '@') {
          this.addComponent(id, new C.Player());
          this.addComponent(id, new C.Movable());
          this.setBB('player id', id);
        } else if (char == '*') {
          this.addComponent(id, new C.Switch());
          switchCount += 1;
        } else if (char == '#') {
          this.addComponent(id, new C.Movable());
          this.addComponent(id, new C.Enemy());
        } else if (char == '^') {
          this.addComponent(id, new C.Enemy());
        } else if (char == 'X' || char == '\\' || char == '/') {
          this.addComponent(id, new C.Collider());
        }
      }
    }

    console.log(yMin);
    for(let y = 3; y < engine.height/yMod -1; ++y) {
      for(let x = 1; x < engine.width/xMod -1; ++x) {
        if (x < xMin || x > xMax || y < yMin || y > yMax) {
            const id = this.addEntity();
            this.addComponent(id, new C.Render('X'));
            this.addComponent(id, new Position2d(x, y));

            if (x == xMin - 1 || y == yMin - 1 || x == xMax + 1 || y == yMax + 1) {
              this.addComponent(id, new C.Collider());
            }
            // this.addComponent(id, new Collider());
        }
      }
    }

    this.setBB('switch count', switchCount);
    this.setBB('offset x', offsetX);
    this.setBB('offset y', offsetY);
    this.setBB('x mod', xMod);
    this.setBB('y mod', yMod); 

    this.addSystem(0,   new S.PlayerSystem());
    this.addSystem(10,  new S.PlayerCollision());
    this.addSystem(20,  new S.EnemyAISystem());
    this.addSystem(40,  new S.EnemyCollision());
    this.addSystem(50,  new S.SwitchCollision());
    this.addSystem(90,  new S.PortalSystem());
    this.addSystem(100, new S.RenderSystem());
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