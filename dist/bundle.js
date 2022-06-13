/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Collider.ts":
/*!************************************!*\
  !*** ./src/Components/Collider.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collider = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Collider extends WorldEngine_1.Component {
    constructor() {
        super();
    }
}
exports.Collider = Collider;


/***/ }),

/***/ "./src/Components/Enemy.ts":
/*!*********************************!*\
  !*** ./src/Components/Enemy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Enemy extends WorldEngine_1.Component {
    constructor(startPosition) {
        super();
        this.startPosition = startPosition;
    }
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/Components/Food.ts":
/*!********************************!*\
  !*** ./src/Components/Food.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Food = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Food extends WorldEngine_1.Component {
    constructor() {
        super();
    }
}
exports.Food = Food;


/***/ }),

/***/ "./src/Components/MenuText.ts":
/*!************************************!*\
  !*** ./src/Components/MenuText.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuText = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class MenuText extends WorldEngine_1.Component {
    constructor(name, order, selected, beaten) {
        super();
        this.name = name;
        this.order = order;
        this.selected = selected;
        this.beaten = beaten;
    }
}
exports.MenuText = MenuText;


/***/ }),

/***/ "./src/Components/Movable.ts":
/*!***********************************!*\
  !*** ./src/Components/Movable.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Movable = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Movable extends WorldEngine_1.Component {
    constructor() {
        super();
    }
}
exports.Movable = Movable;


/***/ }),

/***/ "./src/Components/Player.ts":
/*!**********************************!*\
  !*** ./src/Components/Player.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Player extends WorldEngine_1.Component {
    constructor(stamina) {
        super();
        this.stamina = stamina;
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/Components/Portal.ts":
/*!**********************************!*\
  !*** ./src/Components/Portal.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Portal = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Portal extends WorldEngine_1.Component {
    constructor() {
        super();
    }
}
exports.Portal = Portal;


/***/ }),

/***/ "./src/Components/Render.ts":
/*!**********************************!*\
  !*** ./src/Components/Render.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Render = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Render extends WorldEngine_1.Component {
    constructor(character) {
        super();
        this.character = character;
    }
}
exports.Render = Render;


/***/ }),

/***/ "./src/Components/Switch.ts":
/*!**********************************!*\
  !*** ./src/Components/Switch.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Switch = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine/ */ "./src/WorldEngine/index.ts");
class Switch extends WorldEngine_1.Component {
    constructor() {
        super();
    }
}
exports.Switch = Switch;


/***/ }),

/***/ "./src/Components/index.ts":
/*!*********************************!*\
  !*** ./src/Components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C = void 0;
const Collider_1 = __webpack_require__(/*! ./Collider */ "./src/Components/Collider.ts");
const Enemy_1 = __webpack_require__(/*! ./Enemy */ "./src/Components/Enemy.ts");
const Food_1 = __webpack_require__(/*! ./Food */ "./src/Components/Food.ts");
const MenuText_1 = __webpack_require__(/*! ./MenuText */ "./src/Components/MenuText.ts");
const Movable_1 = __webpack_require__(/*! ./Movable */ "./src/Components/Movable.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Components/Player.ts");
const Portal_1 = __webpack_require__(/*! ./Portal */ "./src/Components/Portal.ts");
const Render_1 = __webpack_require__(/*! ./Render */ "./src/Components/Render.ts");
const Switch_1 = __webpack_require__(/*! ./Switch */ "./src/Components/Switch.ts");
exports.C = {
    Collider: Collider_1.Collider,
    Enemy: Enemy_1.Enemy,
    MenuText: MenuText_1.MenuText,
    Movable: Movable_1.Movable,
    Player: Player_1.Player,
    Portal: Portal_1.Portal,
    Render: Render_1.Render,
    Switch: Switch_1.Switch,
    Food: Food_1.Food,
};


/***/ }),

/***/ "./src/Scenes/Game.ts":
/*!****************************!*\
  !*** ./src/Scenes/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Systems_1 = __webpack_require__(/*! ../Systems */ "./src/Systems/index.ts");
const levels_1 = __webpack_require__(/*! ../levels */ "./src/levels.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Collider_1 = __webpack_require__(/*! ../Components/Collider */ "./src/Components/Collider.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
const GridCollisions = WorldEngine_1.Utility.GridCollisions;
class Game extends WorldEngine_1.ECSScene {
    constructor() {
        super();
        this.playerWonIndex = 0;
        this.playerLostIndex = 0;
        this.selfIndex = 0;
        this.mainMenuIndex = 0;
        this.setBB('game over', 0);
        this.setBB('restart', false);
    }
    onEnter(engine) {
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
        const lvlKey = engine.getBB('level');
        const lvl = levels_1.LEVELS[lvlKey];
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
                this.addComponent(id, new Components_1.C.Render(char));
                const pos = new Position2d(xPos, yPos);
                this.addComponent(id, pos);
                gc.set(pos, id);
                if (char == 'O') {
                    this.addComponent(id, new Components_1.C.Portal());
                    this.setBB('portal id', id);
                }
                else if (char == '@') {
                    this.addComponent(id, new Components_1.C.Player(30));
                    this.addComponent(id, new Components_1.C.Movable());
                    this.setBB('player id', id);
                }
                else if (char == '*') {
                    this.addComponent(id, new Components_1.C.Switch());
                    switchCount += 1;
                }
                else if (char == '#') {
                    this.addComponent(id, new Components_1.C.Movable());
                    this.addComponent(id, new Components_1.C.Enemy(new Position2d(xPos, yPos)));
                }
                else if (char == '^') {
                    this.addComponent(id, new Components_1.C.Enemy(new Position2d(xPos, yPos)));
                }
                else if (char == '/' || char == '\\' || char == 'X') {
                    this.addComponent(id, new Collider_1.Collider());
                }
                else if (char == '&') {
                    this.addComponent(id, new Components_1.C.Food());
                }
            }
        }
        for (let y = 3; y < engine.height / yMod - 1; ++y) {
            for (let x = 1; x < engine.width / xMod - 1; ++x) {
                if (x < xMin || x > xMax || y < yMin || y > yMax) {
                    const id = this.addEntity();
                    this.addComponent(id, new Components_1.C.Render('X'));
                    const pos = new Position2d(x, y);
                    this.addComponent(id, pos);
                    if (x == xMin - 1 || y == yMin - 1 || x == xMax + 1 || y == yMax + 1) {
                        gc.set(pos, id);
                        this.addComponent(id, new Components_1.C.Collider());
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
        this.setBB('change', true);
        this.addSystem(0, new Systems_1.S.PlayerMovement());
        this.addSystem(10, new Systems_1.S.PlayerCollision());
        this.addSystem(20, new Systems_1.S.EnemyAI());
        this.addSystem(90, new Systems_1.S.PortalSystem());
        this.addSystem(100, new Systems_1.S.RenderSystem());
        this.addSystem(110, new Systems_1.S.RenderStamina());
        this.addSystem(120, new Systems_1.S.RenderLevel());
        this.addSystem(900, new Systems_1.S.UpdatePlayerTurn());
    }
    onExit(engine) {
        this.clear();
    }
    customUpdate(engine) {
        const gameOver = this.getBB('game over');
        if (gameOver == -1) {
            return this.playerLostIndex;
        }
        else if (gameOver == 1) {
            return this.playerWonIndex;
        }
        else if (engine.keyDown.has(WorldEngine_1.Key.R)) {
            return this.selfIndex;
        }
        else if (engine.keyDown.has(WorldEngine_1.Key.Q)) {
            return this.mainMenuIndex;
        }
        return -1;
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/Scenes/PlayerLost.ts":
/*!**********************************!*\
  !*** ./src/Scenes/PlayerLost.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerLost = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class PlayerLost extends WorldEngine_1.Scene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.timer = 0;
    }
    onEnter(engine) {
        this.timer = 0;
    }
    onExit(engine) { }
    update(engine) {
        this.timer += engine.delta;
        if (this.timer > 2 || engine.keyDown.has(WorldEngine_1.Key.ENTER)) {
            return this.sceneIndex;
        }
        else {
            engine.ctx.font = '40px Arial';
            engine.ctx.fillStyle = 'green';
            engine.ctx.fillText('You Lost! :/', engine.width / 3.5, engine.height / 2);
            return -1;
        }
    }
}
exports.PlayerLost = PlayerLost;


/***/ }),

/***/ "./src/Scenes/PlayerWon.ts":
/*!*********************************!*\
  !*** ./src/Scenes/PlayerWon.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerWon = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class PlayerWon extends WorldEngine_1.Scene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.timer = 0;
    }
    onEnter(engine) {
        this.timer = 0;
    }
    onExit(engine) { }
    update(engine) {
        this.timer += engine.delta;
        if (this.timer > 2 || engine.keyDown.has(WorldEngine_1.Key.ENTER)) {
            engine.setCookie(engine.getBB('level'), 'b');
            return this.sceneIndex;
        }
        else {
            engine.ctx.font = '40px Arial';
            engine.ctx.fillStyle = 'green';
            engine.ctx.fillText('You Won! Nice!', engine.width / 3.5, engine.height / 2);
            return -1;
        }
    }
}
exports.PlayerWon = PlayerWon;


/***/ }),

/***/ "./src/Scenes/SelectLevel.ts":
/*!***********************************!*\
  !*** ./src/Scenes/SelectLevel.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectLevel = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const RenderMenuText_1 = __webpack_require__(/*! ../Systems/SelectionScene/RenderMenuText */ "./src/Systems/SelectionScene/RenderMenuText.ts");
const UpdateSelected_1 = __webpack_require__(/*! ../Systems/SelectionScene/UpdateSelected */ "./src/Systems/SelectionScene/UpdateSelected.ts");
const levels_1 = __webpack_require__(/*! ../levels */ "./src/levels.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
class SelectLevel extends WorldEngine_1.ECSScene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.sortedLevels = [];
        for (let key in levels_1.LEVELS) {
            this.sortedLevels.push(key);
        }
        this.sortedLevels.sort();
    }
    onEnter(engine) {
        for (let i = 0; i < this.sortedLevels.length; ++i) {
            const id = this.addEntity();
            const selected = i == 0;
            this.addComponent(id, new Components_1.C.MenuText(this.sortedLevels[i], i, selected, engine.getCookie(this.sortedLevels[i]) != undefined));
        }
        this.setBB('selected', 0);
        this.addSystem(0, new UpdateSelected_1.UpdateSelected());
        this.addSystem(10, new RenderMenuText_1.RenderMenuTextSystem());
    }
    onExit(engine) {
        this.clear();
    }
    customUpdate(engine) {
        if (engine.keyDown.has(WorldEngine_1.Key.ENTER)) {
            const selected = this.getBB('selected');
            engine.setBB('level', this.getComponents(selected).get(Components_1.C.MenuText).name);
            return this.sceneIndex;
        }
        return -1;
    }
}
exports.SelectLevel = SelectLevel;


/***/ }),

/***/ "./src/Scenes/StartMenu.ts":
/*!*********************************!*\
  !*** ./src/Scenes/StartMenu.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartMenu = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class StartMenu extends WorldEngine_1.Scene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.timer = 0;
    }
    onEnter(engine) { }
    onExit(engine) { }
    update(engine) {
        if (engine.keyDown.has(WorldEngine_1.Key.ENTER)) {
            engine.keyDown.clear();
            return this.sceneIndex;
        }
        else {
            engine.ctx.font = '40px Arial';
            engine.ctx.fillStyle = 'white';
            engine.ctx.fillText('DungeonGrams', 220, 100);
            engine.ctx.font = '20px Arial';
            engine.ctx.fillText('Press Enter to start', 275, 150);
            engine.ctx.fillStyle = 'yellow';
            engine.ctx.fillText('& gives you stamina', 40, 200);
            engine.ctx.fillText('Collect all * to open the portal.', 40, 222);
            engine.ctx.fillText('Step through the portal O to win!', 40, 244);
            engine.ctx.fillText('But make sure to avoid the enemies # and traps ^', 40, 266);
            engine.ctx.fillStyle = 'green';
            engine.ctx.fillText('WASD to move', 40, 350);
            engine.ctx.fillText('Space to do nothing for a turn', 40, 375);
            engine.ctx.fillText('R to restart', 40, 400);
            engine.ctx.fillText('Q to quit', 40, 425);
            return -1;
        }
    }
}
exports.StartMenu = StartMenu;


/***/ }),

/***/ "./src/Scenes/index.ts":
/*!*****************************!*\
  !*** ./src/Scenes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Scenes/Game.ts");
const PlayerLost_1 = __webpack_require__(/*! ./PlayerLost */ "./src/Scenes/PlayerLost.ts");
const PlayerWon_1 = __webpack_require__(/*! ./PlayerWon */ "./src/Scenes/PlayerWon.ts");
const SelectLevel_1 = __webpack_require__(/*! ./SelectLevel */ "./src/Scenes/SelectLevel.ts");
const StartMenu_1 = __webpack_require__(/*! ./StartMenu */ "./src/Scenes/StartMenu.ts");
exports.Scene = {
    Game: Game_1.Game,
    PlayerLost: PlayerLost_1.PlayerLost,
    PlayerWon: PlayerWon_1.PlayerWon,
    SelectLevel: SelectLevel_1.SelectLevel,
    StartMenu: StartMenu_1.StartMenu
};


/***/ }),

/***/ "./src/Systems/EnemyAI.ts":
/*!********************************!*\
  !*** ./src/Systems/EnemyAI.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnemyAI = void 0;
const Position2d_1 = __webpack_require__(/*! ../WorldEngine/src/Components/Position2d */ "./src/WorldEngine/src/Components/Position2d.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Enemy_1 = __webpack_require__(/*! ../Components/Enemy */ "./src/Components/Enemy.ts");
class EnemyAI extends WorldEngine_1.System {
    constructor() {
        super();
        this.componentsRequired = new Set([Position2d_1.Position2d, Components_1.C.Enemy, Components_1.C.Movable]);
    }
    update(engine, entities) {
        // enemy can only move during their turn
        if (this.ecs.getBB('time step') % 3 != 0)
            return;
        // get the player position and grid collision tool
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position2d_1.Position2d);
        const gc = this.ecs.getBB('grid collisions');
        for (let id of entities) {
            const components = this.ecs.getComponents(id);
            const currentPos = components.get(Position2d_1.Position2d);
            const startPos = components.get(Enemy_1.Enemy).startPosition;
            let target;
            if (currentPos.euclideanDistance(playerPos) <= 3 &&
                currentPos.euclideanDistance(startPos) <= 3) {
                target = playerPos; // go towards the player
            }
            else {
                target = startPos; // go towards start position
            }
            // move the enemy towards the player if the player is in range
            const moves = this.getMoves(gc, currentPos, target);
            if (moves.length == 0) {
                continue;
            }
            let closestVal = 1000;
            let closestIndex = -1;
            for (let i = 0; i < moves.length; ++i) {
                const pos = currentPos.add(moves[i]);
                const id = gc.get(pos);
                if (id == undefined || this.ecs.getComponents(id).has(Components_1.C.Player)) {
                    const val = pos.euclideanDistance(target);
                    if (val < closestVal) {
                        closestVal = val;
                        closestIndex = i;
                    }
                }
            }
            if (closestIndex != -1) {
                currentPos.setPos(currentPos.add(moves[closestIndex]));
                gc.acceptChange(currentPos, id);
                if (currentPos.equals(playerPos)) {
                    this.ecs.setBB('game over', -1);
                }
            }
        }
        const time = this.ecs.getBB('time step');
        this.ecs.setBB('time step', time + 1);
    }
    getMoves(gc, currentPos, target) {
        let moves = new Array();
        const diff_x = currentPos.getX() - target.getX();
        const diff_y = currentPos.getY() - target.getY();
        if (diff_x == 0 && diff_y == 0) {
            return moves;
        }
        if (Math.abs(diff_y) > Math.abs(diff_x)) {
            if (diff_y > 0)
                moves.push(new Position2d_1.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new Position2d_1.Position2d(0, 1));
            if (diff_x > 0)
                moves.push(new Position2d_1.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new Position2d_1.Position2d(1, 0));
        }
        else if (Math.abs(diff_x) > Math.abs(diff_y)) {
            if (diff_x > 0)
                moves.push(new Position2d_1.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new Position2d_1.Position2d(1, 0));
            if (diff_y > 0)
                moves.push(new Position2d_1.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new Position2d_1.Position2d(0, 1));
        }
        else if ((diff_x + diff_y) % 2 == 0) {
            if (diff_x > 0)
                moves.push(new Position2d_1.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new Position2d_1.Position2d(1, 0));
            if (diff_y > 0)
                moves.push(new Position2d_1.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new Position2d_1.Position2d(0, 1));
        }
        else {
            if (diff_x > 0)
                moves.push(new Position2d_1.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new Position2d_1.Position2d(1, 0));
            if (diff_y > 0)
                moves.push(new Position2d_1.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new Position2d_1.Position2d(0, 1));
        }
        return moves;
        // NOTE: I like this implementation more but I'm reimplementing dungeongrams
        // const validNewPositions = new Array<Position2d>();
        // validNewPositions.push(currentPos);
        // for(let m of this.getMoves(currentPos, target)) {
        //   let newPos = currentPos.add(m);
        //   const atPos = gc.get(newPos);
        //   // the enemy can go to the new position if it is empty or the player is
        //   // already there
        //   if (atPos == undefined || this.ecs.getComponents(atPos).has(C.Player)) {
        //     validNewPositions.push(newPos);
        //   }
        // }
        // return validNewPositions;
    }
}
exports.EnemyAI = EnemyAI;


/***/ }),

/***/ "./src/Systems/PlayerCollision.ts":
/*!****************************************!*\
  !*** ./src/Systems/PlayerCollision.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerCollision = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class PlayerCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([]);
    }
    update(engine, entities) {
        const id = this.ecs.getBB('player id');
        const components = this.ecs.getComponents(id);
        const pos = components.get(Position2d);
        if (!pos.updated()) {
            return;
        }
        const gc = this.ecs.getBB('grid collisions');
        const locID = gc.get(pos);
        // if no collision was found, the player can move
        if (locID == undefined) {
            gc.acceptChange(pos, id);
            return;
        }
        // if the player ran into a switch
        const locComponents = this.ecs.getComponents(locID);
        if (locComponents.has(Components_1.C.Switch)) {
            const switchCount = this.ecs.getBB('switch count') - 1;
            this.ecs.setBB('switch count', switchCount);
            this.ecs.removeEntity(locID);
            gc.acceptChange(pos, id);
            return;
        }
        // if the player ran into an enemy... uh oh!
        if (locComponents.has(Components_1.C.Enemy)) {
            this.ecs.setBB('game over', -1);
            return;
        }
        // player ran into the portal.
        if (locComponents.has(Components_1.C.Portal)) {
            if (this.ecs.getBB('switch count') == 0) {
                this.ecs.setBB('game over', 1);
            }
            else {
                pos.rejectChange();
            }
            return;
        }
        // player has ran into food
        if (locComponents.has(Components_1.C.Food)) {
            const player = components.get(Components_1.C.Player);
            player.stamina += 30;
            this.ecs.removeEntity(locID);
            gc.acceptChange(pos, id);
            this.ecs.setBB('change', true);
            return;
        }
        // otherwise, we've run into a collider and we reject the change
        pos.rejectChange();
    }
}
exports.PlayerCollision = PlayerCollision;


/***/ }),

/***/ "./src/Systems/PlayerMovement.ts":
/*!***************************************!*\
  !*** ./src/Systems/PlayerMovement.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerMovement = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class PlayerMovement extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position2d, Components_1.C.Render, Components_1.C.Player]);
        this.timeSinceLastMove = 5;
    }
    updateTimeStep() {
        const timeStep = this.ecs.getBB('time step');
        this.ecs.setBB('time step', timeStep + 1);
    }
    update(engine, entities) {
        this.timeSinceLastMove += engine.delta;
        if (this.timeSinceLastMove < 0.08) {
            return;
        }
        this.timeSinceLastMove = 0;
        let playerID = entities.values().next().value;
        const components = this.ecs.getComponents(playerID);
        const player = components.get(Components_1.C.Player);
        let pos = components.get(Position2d);
        const x = pos.getX();
        const y = pos.getY();
        for (let key of engine.keyDown) {
            let playerMoved = false;
            switch (key) {
                case WorldEngine_1.Key.A:
                case WorldEngine_1.Key.LEFT:
                    this.updateTimeStep();
                    playerMoved = true;
                    player.stamina -= 1;
                    pos.setX(x - 1);
                    break;
                case WorldEngine_1.Key.S:
                case WorldEngine_1.Key.DOWN:
                    this.updateTimeStep();
                    playerMoved = true;
                    pos.setY(y + 1);
                    player.stamina -= 1;
                    break;
                case WorldEngine_1.Key.D:
                case WorldEngine_1.Key.RIGHT:
                    this.updateTimeStep();
                    playerMoved = true;
                    pos.setX(x + 1);
                    player.stamina -= 1;
                    break;
                case WorldEngine_1.Key.W:
                case WorldEngine_1.Key.UP:
                    this.updateTimeStep();
                    playerMoved = true;
                    pos.setY(y - 1);
                    player.stamina -= 1;
                    break;
                case WorldEngine_1.Key.SPACE:
                    player.stamina -= 1;
                    playerMoved = true;
                    this.updateTimeStep();
                    break;
                // nothing to do in the default case
            }
            if (playerMoved)
                break;
        }
        if (player.stamina <= 0) {
            this.ecs.setBB('game over', -1);
        }
    }
}
exports.PlayerMovement = PlayerMovement;


/***/ }),

/***/ "./src/Systems/PortalSystem.ts":
/*!*************************************!*\
  !*** ./src/Systems/PortalSystem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PortalSystem = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class PortalSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Components_1.C.Portal, Components_1.C.Render]);
    }
    update(engine, entities) {
        const [id] = entities; // there can only be one portal
        if (this.ecs.getBB('switch count') == 0) {
            this.ecs.getComponents(id).get(Components_1.C.Render).character = 'O';
        }
        else {
            this.ecs.getComponents(id).get(Components_1.C.Render).character = 'o';
        }
    }
}
exports.PortalSystem = PortalSystem;


/***/ }),

/***/ "./src/Systems/RenderLevel.ts":
/*!************************************!*\
  !*** ./src/Systems/RenderLevel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderLevel = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class RenderLevel extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([]);
    }
    update(engine, entities) {
        const level = engine.getBB('level');
        engine.ctx.font = '20px Arial';
        engine.ctx.fillStyle = 'white';
        engine.ctx.fillText(level, engine.width / 2, 30);
    }
}
exports.RenderLevel = RenderLevel;


/***/ }),

/***/ "./src/Systems/RenderStamina.ts":
/*!**************************************!*\
  !*** ./src/Systems/RenderStamina.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderStamina = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
class RenderStamina extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Components_1.C.Player]);
    }
    update(engine, entities) {
        const [id] = entities;
        const stamina = this.ecs.getComponents(id).get(Components_1.C.Player).stamina;
        if (stamina > 20) {
            engine.ctx.fillStyle = 'green';
        }
        else if (stamina > 10) {
            engine.ctx.fillStyle = 'yellow';
        }
        else {
            engine.ctx.fillStyle = 'red';
        }
        engine.ctx.font = '20px Arial';
        engine.ctx.fillText(`Stamina: ${stamina}`, 20, 30);
    }
}
exports.RenderStamina = RenderStamina;


/***/ }),

/***/ "./src/Systems/RenderSystem.ts":
/*!*************************************!*\
  !*** ./src/Systems/RenderSystem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderSystem = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class RenderSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position2d, Components_1.C.Render]);
        this.charToColor = {
            '@': 'white',
            '-': '#d9d1d0',
            'X': '#636363',
            '*': '#0ccef0',
            '\\': '#c300d1',
            '/': '#c300d1',
            'o': '#414d42',
            'O': '#19f00a',
            '#': 'red',
            '^': '#f0cd0a',
            '&': '#259c2b',
        };
    }
    update(engine, entities) {
        const xMod = this.ecs.getBB('x mod');
        const yMod = this.ecs.getBB('y mod');
        engine.ctx.font = '20px Arial';
        for (let entity of entities.values()) {
            // get components
            const render = this.ecs.getComponents(entity).get(Components_1.C.Render);
            const pos = this.ecs.getComponents(entity).get(Position2d);
            // render
            engine.ctx.fillStyle = this.charToColor[render.character];
            engine.ctx.fillText(render.character, pos.getX() * xMod, pos.getY() * yMod);
        }
    }
}
exports.RenderSystem = RenderSystem;


/***/ }),

/***/ "./src/Systems/SelectionScene/RenderMenuText.ts":
/*!******************************************************!*\
  !*** ./src/Systems/SelectionScene/RenderMenuText.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderMenuTextSystem = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../../Components */ "./src/Components/index.ts");
class RenderMenuTextSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Components_1.C.MenuText]);
    }
    update(engine, entities) {
        const minY = 100;
        const maxY = engine.height - 40;
        const yMod = 20;
        const maxOrder = (maxY - minY) / yMod;
        engine.ctx.font = "15px Arial";
        for (let entity of entities.values()) {
            const m = this.ecs.getComponents(entity).get(Components_1.C.MenuText);
            let x = 20;
            let o = m.order;
            while (o > maxOrder) {
                o -= maxOrder + 1;
                x += 60;
            }
            let y = minY + yMod * o;
            let fillColor;
            if (m.selected) {
                fillColor = 'yellow';
            }
            else if (m.beaten) {
                fillColor = 'green';
            }
            else {
                fillColor = 'red';
            }
            const txtMeasure = engine.ctx.measureText(m.name);
            engine.ctx.fillStyle = fillColor;
            engine.ctx.fillRect(x - 1.0, y - yMod * 0.7, txtMeasure.width * 1.1, yMod);
            engine.ctx.fillStyle = 'white';
            engine.ctx.fillText(m.name, x, y);
        }
        engine.ctx.font = "30px Arial";
        engine.ctx.fillStyle = 'white';
        engine.ctx.fillText('Level Select', engine.width / 2.5, 45);
    }
}
exports.RenderMenuTextSystem = RenderMenuTextSystem;


/***/ }),

/***/ "./src/Systems/SelectionScene/UpdateSelected.ts":
/*!******************************************************!*\
  !*** ./src/Systems/SelectionScene/UpdateSelected.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSelected = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../../Components */ "./src/Components/index.ts");
class UpdateSelected extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Components_1.C.MenuText]);
        this.lastUpdate = 10;
    }
    update(engine, entities) {
        this.lastUpdate += engine.delta;
        if (this.lastUpdate < 0.2) {
            return;
        }
        let keyPress = WorldEngine_1.Key.INVALID;
        for (let key of engine.keyDown) {
            if (key == WorldEngine_1.Key.DOWN || key == WorldEngine_1.Key.UP || WorldEngine_1.Key.RIGHT || WorldEngine_1.Key.LEFT) {
                keyPress = key;
                break;
            }
        }
        if (keyPress == WorldEngine_1.Key.INVALID) {
            return;
        }
        // get selected entity and new entity index
        let selectedEntity = this.ecs.getBB('selected');
        const lvlsPerColumn = 18;
        let newEntity;
        if (keyPress == WorldEngine_1.Key.UP || keyPress == WorldEngine_1.Key.W) {
            newEntity = selectedEntity - 1;
        }
        else if (keyPress == WorldEngine_1.Key.DOWN || keyPress == WorldEngine_1.Key.S) {
            newEntity = selectedEntity + 1;
        }
        else if (keyPress == WorldEngine_1.Key.RIGHT || keyPress == WorldEngine_1.Key.D) {
            newEntity = selectedEntity + lvlsPerColumn;
        }
        else if (keyPress == WorldEngine_1.Key.LEFT || keyPress == WorldEngine_1.Key.A) {
            newEntity = selectedEntity - lvlsPerColumn;
        }
        else {
            newEntity = selectedEntity;
        }
        if (!entities.has(newEntity)) {
            newEntity = selectedEntity;
        }
        // updated selected
        this.ecs.setBB('selected', newEntity);
        this.ecs.getComponents(selectedEntity).get(Components_1.C.MenuText).selected = false;
        this.ecs.getComponents(newEntity).get(Components_1.C.MenuText).selected = true;
        this.lastUpdate = 0;
    }
}
exports.UpdateSelected = UpdateSelected;


/***/ }),

/***/ "./src/Systems/UpdatePlayerTurn.ts":
/*!*****************************************!*\
  !*** ./src/Systems/UpdatePlayerTurn.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePlayerTurn = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class UpdatePlayerTurn extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([]);
    }
    update(engine, entities) {
        this.ecs.setBB('player turn', true);
    }
}
exports.UpdatePlayerTurn = UpdatePlayerTurn;


/***/ }),

/***/ "./src/Systems/index.ts":
/*!******************************!*\
  !*** ./src/Systems/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.S = void 0;
const EnemyAI_1 = __webpack_require__(/*! ./EnemyAI */ "./src/Systems/EnemyAI.ts");
const PlayerCollision_1 = __webpack_require__(/*! ./PlayerCollision */ "./src/Systems/PlayerCollision.ts");
const PlayerMovement_1 = __webpack_require__(/*! ./PlayerMovement */ "./src/Systems/PlayerMovement.ts");
const PortalSystem_1 = __webpack_require__(/*! ./PortalSystem */ "./src/Systems/PortalSystem.ts");
const RenderLevel_1 = __webpack_require__(/*! ./RenderLevel */ "./src/Systems/RenderLevel.ts");
const RenderStamina_1 = __webpack_require__(/*! ./RenderStamina */ "./src/Systems/RenderStamina.ts");
const RenderSystem_1 = __webpack_require__(/*! ./RenderSystem */ "./src/Systems/RenderSystem.ts");
const UpdatePlayerTurn_1 = __webpack_require__(/*! ./UpdatePlayerTurn */ "./src/Systems/UpdatePlayerTurn.ts");
// Systems
exports.S = {
    EnemyAI: EnemyAI_1.EnemyAI,
    PlayerCollision: PlayerCollision_1.PlayerCollision,
    PlayerMovement: PlayerMovement_1.PlayerMovement,
    PortalSystem: PortalSystem_1.PortalSystem,
    RenderSystem: RenderSystem_1.RenderSystem,
    UpdatePlayerTurn: UpdatePlayerTurn_1.UpdatePlayerTurn,
    RenderStamina: RenderStamina_1.RenderStamina,
    RenderLevel: RenderLevel_1.RenderLevel
};


/***/ }),

/***/ "./src/WorldEngine/index.ts":
/*!**********************************!*\
  !*** ./src/WorldEngine/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Utility = exports.CommonComponents = exports.Key = exports.ECSScene = exports.Scene = exports.System = exports.Component = exports.Engine = void 0;
var Engine_1 = __webpack_require__(/*! ./src/Engine */ "./src/WorldEngine/src/Engine.ts");
Object.defineProperty(exports, "Engine", ({ enumerable: true, get: function () { return Engine_1.Engine; } }));
var Component_1 = __webpack_require__(/*! ./src/Component */ "./src/WorldEngine/src/Component.ts");
Object.defineProperty(exports, "Component", ({ enumerable: true, get: function () { return Component_1.Component; } }));
var System_1 = __webpack_require__(/*! ./src/System */ "./src/WorldEngine/src/System.ts");
Object.defineProperty(exports, "System", ({ enumerable: true, get: function () { return System_1.System; } }));
var Scene_1 = __webpack_require__(/*! ./src/Scene */ "./src/WorldEngine/src/Scene.ts");
Object.defineProperty(exports, "Scene", ({ enumerable: true, get: function () { return Scene_1.Scene; } }));
var ECSScene_1 = __webpack_require__(/*! ./src/ECSScene */ "./src/WorldEngine/src/ECSScene.ts");
Object.defineProperty(exports, "ECSScene", ({ enumerable: true, get: function () { return ECSScene_1.ECSScene; } }));
var Key_1 = __webpack_require__(/*! ./src/Key */ "./src/WorldEngine/src/Key.ts");
Object.defineProperty(exports, "Key", ({ enumerable: true, get: function () { return Key_1.Key; } }));
const Position2d_1 = __webpack_require__(/*! ./src/Components/Position2d */ "./src/WorldEngine/src/Components/Position2d.ts");
exports.CommonComponents = {
    Position2d: Position2d_1.Position2d
};
const GridCollisions_1 = __webpack_require__(/*! ./src/Utility/GridCollisions */ "./src/WorldEngine/src/Utility/GridCollisions.ts");
exports.Utility = {
    GridCollisions: GridCollisions_1.GridCollisions
};


/***/ }),

/***/ "./src/WorldEngine/src/Component.ts":
/*!******************************************!*\
  !*** ./src/WorldEngine/src/Component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComponentContainer = exports.Component = void 0;
class Component {
}
exports.Component = Component;
class ComponentContainer {
    constructor() {
        this.map = new Map();
    }
    add(component) {
        this.map.set(component.constructor, component);
    }
    get(componentClass) {
        return this.map.get(componentClass);
    }
    has(componentClass) {
        return this.map.has(componentClass);
    }
    hasAll(componentClasses) {
        for (let cls of componentClasses) {
            if (!this.map.has(cls)) {
                return false;
            }
        }
        return true;
    }
    delete(componentClass) {
        this.map.delete(componentClass);
    }
}
exports.ComponentContainer = ComponentContainer;


/***/ }),

/***/ "./src/WorldEngine/src/Components/Position2d.ts":
/*!******************************************************!*\
  !*** ./src/WorldEngine/src/Components/Position2d.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Position2d = void 0;
const Component_1 = __webpack_require__(/*! ../Component */ "./src/WorldEngine/src/Component.ts");
class Position2d extends Component_1.Component {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.changed = false;
        this.oldX = x;
        this.oldY = y;
    }
    equals(other) {
        return this.x == other.x && this.y == other.y;
    }
    // Cantor pairing function
    hash() {
        return ((this.x + this.y) * (this.x + this.y + 1) / 2) + this.y;
    }
    // Cantor pairing function
    oldHash() {
        return ((this.oldX + this.oldY) * (this.oldX + this.oldY + 1) / 2) + this.oldY;
    }
    updated() {
        return this.changed;
    }
    set(x, y) {
        this.changed = true;
        this.x = x;
        this.y = y;
    }
    setPos(pos) {
        this.changed = true;
        this.x = pos.x;
        this.y = pos.y;
    }
    setX(x) {
        this.changed = true;
        this.x = x;
    }
    setY(y) {
        this.changed = true;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    acceptChange() {
        this.changed = false;
        this.oldX = this.x;
        this.oldY = this.y;
    }
    rejectChange() {
        this.changed = false;
        this.x = this.oldX;
        this.y = this.oldY;
    }
    euclideanDistance(pos) {
        const x = Math.pow(this.x - pos.x, 2);
        const y = Math.pow(this.y - pos.y, 2);
        return Math.sqrt(x + y);
    }
    add(pos) {
        return new Position2d(this.x + pos.x, this.y + pos.y);
    }
}
exports.Position2d = Position2d;


/***/ }),

/***/ "./src/WorldEngine/src/ECSScene.ts":
/*!*****************************************!*\
  !*** ./src/WorldEngine/src/ECSScene.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECSScene = void 0;
const Scene_1 = __webpack_require__(/*! ./Scene */ "./src/WorldEngine/src/Scene.ts");
const Component_1 = __webpack_require__(/*! ./Component */ "./src/WorldEngine/src/Component.ts");
// https://maxwellforbes.com/posts/typescript-ecs-implementation/ is what this
// implementation is based off of.
class ECSScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        // Main state
        this.entities = new Map();
        this.priorityToSystem = new Map();
        this.priorityToComponents = new Map();
        this.priorities = new Array();
        this.blackBoard = new Map();
        // Bookkeeping for entities.
        this.nextEntityID = 0;
        this.entitiesToDestroy = new Array();
    }
    /**
     * Default return -1. Any other numbers will tell the game engine to change
     * the scene to whatever index is returned.
     * @param canvas
     * @param keyPresses
     */
    update(engine) {
        // Update all systems. (Later, we'll add a way to specify the
        // update order.)
        for (let priority of this.priorities) {
            const system = this.priorityToSystem.get(priority);
            const components = this.priorityToComponents.get(priority);
            system.update(engine, components);
        }
        // Remove any entities that were marked for deletion during the
        // update.
        while (this.entitiesToDestroy.length > 0) {
            this.destroyEntity(this.entitiesToDestroy.pop());
        }
        return this.customUpdate(engine);
    }
    // API: Entities
    addEntity() {
        let entity = this.nextEntityID;
        this.nextEntityID++;
        this.entities.set(entity, new Component_1.ComponentContainer());
        return entity;
    }
    /**
     * Marks `entity` for removal. The actual removal happens at the end
     * of the next `update()`. This way we avoid subtle bugs where an
     * Entity is removed mid-`update()`, with some Systems seeing it and
     * others not.
     */
    removeEntity(entity) {
        this.entitiesToDestroy.push(entity);
    }
    addComponent(entity, component) {
        this.entities.get(entity).add(component);
        this.checkE(entity);
    }
    getComponents(entity) {
        return this.entities.get(entity);
    }
    removeComponent(entity, componentClass) {
        var _a;
        (_a = this.entities.get(entity)) === null || _a === void 0 ? void 0 : _a.delete(componentClass);
        this.checkE(entity);
    }
    setBB(key, val) {
        this.blackBoard.set(key, val);
    }
    getBB(key) {
        return this.blackBoard.get(key);
    }
    // API: Systems
    /**
     * Add a system where the priority defines in what order it will be run when
     * compared to other systems
     * @param priority - lower value is run first
     * @param system
     */
    addSystem(priority, system) {
        if (this.priorities.includes(priority)) {
            alert('Fatal error. Check the console.');
            console.error(`${system} can not be used since priority ${priority} already in use.`);
            return;
        }
        // Give system a reference to the ECS so it can actually do
        // anything.
        system.ecs = this;
        this.priorityToSystem.set(priority, system);
        this.priorityToComponents.set(priority, new Set());
        this.priorities.push(priority);
        this.priorities.sort();
        // Save system and set who it should track immediately.
        for (let entity of this.entities.keys()) {
            this.checkES(entity, priority);
        }
    }
    clear() {
        this.entities.clear();
        this.priorityToComponents.clear();
        this.priorityToSystem.clear();
        this.blackBoard.clear();
        this.priorities.length = 0;
        this.nextEntityID = 0;
    }
    destroyEntity(entity) {
        var _a;
        this.entities.delete(entity);
        for (let priority of this.priorities) {
            (_a = this.priorityToComponents.get(priority)) === null || _a === void 0 ? void 0 : _a.delete(entity);
        }
    }
    // @TODO: can I remove this?
    checkE(entity) {
        for (let priority of this.priorities) {
            this.checkES(entity, priority);
        }
    }
    /**
     * I think this can be removed but I'm going to leave it in for now.
     * @param entity
     * @param system
     */
    checkES(entity, priority) {
        let have = this.entities.get(entity);
        let need = this.priorityToSystem.get(priority).componentsRequired;
        if (have.hasAll(need)) {
            // should be in system
            this.priorityToComponents.get(priority).add(entity);
        }
        else {
            // should not be in system
            this.priorityToComponents.get(priority).delete(entity);
        }
    }
}
exports.ECSScene = ECSScene;
;


/***/ }),

/***/ "./src/WorldEngine/src/Engine.ts":
/*!***************************************!*\
  !*** ./src/WorldEngine/src/Engine.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Engine = void 0;
const Key_1 = __webpack_require__(/*! ./Key */ "./src/WorldEngine/src/Key.ts");
class Engine {
    constructor() {
        this.scenes = new Array();
        this.sceneIndex = 0;
        this.keyDown = new Set();
        this.keyPress = new Set();
        this.clearBackground = true;
        this.displayFPS = true;
        this.blackBoard = new Map();
        window.addEventListener('keydown', (e) => {
            const k = (0, Key_1.keyCodeToKey)(e.key);
            if (k == Key_1.Key.DOWN || k == Key_1.Key.UP || k == Key_1.Key.LEFT || k == Key_1.Key.RIGHT) {
                e.preventDefault();
            }
            if (!this.keyDown.has(k)) {
                this.keyDown.add(k);
            }
        });
        window.addEventListener('keyup', (e) => {
            const k = (0, Key_1.keyCodeToKey)(e.key);
            this.keyDown.delete(k);
        });
        window.addEventListener('keypress', (e) => {
            this.keyPress.add((0, Key_1.keyCodeToKey)(e.key));
        });
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.delta = 0;
    }
    ;
    setBB(key, val) {
        this.blackBoard.set(key, val);
    }
    getBB(key) {
        return this.blackBoard.get(key);
    }
    addScene(scene) {
        this.scenes.push(scene);
        return this.scenes.length - 1;
    }
    start() {
        let oldTimeStamp;
        let fps;
        this.scenes[this.sceneIndex].onEnter(this);
        const gameLoop = (timeStamp) => {
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
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = 'red';
                this.ctx.fillText("FPS: " + fps, this.width - 60, 30);
            }
            window.requestAnimationFrame(gameLoop);
        };
        window.requestAnimationFrame(gameLoop);
    }
    update() {
        const i = this.scenes[this.sceneIndex].update(this);
        if (i !== -1) {
            this.scenes[this.sceneIndex].onExit(this);
            this.sceneIndex = i;
            this.scenes[this.sceneIndex].onEnter(this);
        }
        this.keyPress.clear();
    }
    setCookie(name, val) {
        const date = new Date();
        date.setTime(date.getTime() + (31 * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + val + "; expires=" + date.toUTCString() + "; path=/";
        console.log('set cookie!!!!!');
    }
    getCookie(name) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");
        if (parts != undefined && parts.length == 2) {
            return parts.pop().split(";").shift();
        }
        return undefined;
    }
}
exports.Engine = Engine;


/***/ }),

/***/ "./src/WorldEngine/src/Key.ts":
/*!************************************!*\
  !*** ./src/WorldEngine/src/Key.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keyCodeToKey = exports.Key = void 0;
var Key;
(function (Key) {
    Key[Key["LEFT"] = 0] = "LEFT";
    Key[Key["RIGHT"] = 1] = "RIGHT";
    Key[Key["DOWN"] = 2] = "DOWN";
    Key[Key["UP"] = 3] = "UP";
    Key[Key["W"] = 4] = "W";
    Key[Key["A"] = 5] = "A";
    Key[Key["S"] = 6] = "S";
    Key[Key["D"] = 7] = "D";
    Key[Key["Q"] = 8] = "Q";
    Key[Key["R"] = 9] = "R";
    Key[Key["SPACE"] = 10] = "SPACE";
    Key[Key["ESCAPE"] = 11] = "ESCAPE";
    Key[Key["ENTER"] = 12] = "ENTER";
    Key[Key["INVALID"] = 13] = "INVALID";
})(Key = exports.Key || (exports.Key = {}));
function keyCodeToKey(key) {
    switch (key) {
        case 'Down':
        case 'ArrowDown':
            return Key.DOWN;
        case 'Up':
        case 'ArrowUp':
            return Key.UP;
        case 'Right':
        case 'ArrowRight':
            return Key.RIGHT;
        case 'Left':
        case 'ArrowLeft':
            return Key.LEFT;
        case ' ':
        case 'Space':
            return Key.SPACE;
        case 'Escape':
            return Key.ESCAPE;
        case 'a':
            return Key.A;
        case 's':
            return Key.S;
        case 'd':
            return Key.D;
        case 'w':
            return Key.W;
        case 'r':
            return Key.R;
        case 'q':
            return Key.Q;
        case 'Enter':
            return Key.ENTER;
        default:
            console.warn(`Unhandled key: ${key}.`);
            return Key.INVALID;
    }
}
exports.keyCodeToKey = keyCodeToKey;


/***/ }),

/***/ "./src/WorldEngine/src/Scene.ts":
/*!**************************************!*\
  !*** ./src/WorldEngine/src/Scene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
class Scene {
}
exports.Scene = Scene;
;


/***/ }),

/***/ "./src/WorldEngine/src/System.ts":
/*!***************************************!*\
  !*** ./src/WorldEngine/src/System.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.System = void 0;
class System {
}
exports.System = System;


/***/ }),

/***/ "./src/WorldEngine/src/Utility/GridCollisions.ts":
/*!*******************************************************!*\
  !*** ./src/WorldEngine/src/Utility/GridCollisions.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridCollisions = void 0;
class GridCollisions {
    constructor() {
        this.grid = new Map();
    }
    get(pos) {
        return this.grid.get(pos.hash());
    }
    set(pos, val) {
        const hash = pos.hash();
        if (this.grid.has(hash)) {
            return false;
        }
        this.grid.set(hash, val);
        return true;
    }
    remove(pos, useNew) {
        if (useNew) {
            this.grid.delete(pos.hash());
        }
        else {
            this.grid.delete(pos.oldHash());
        }
    }
    acceptChange(pos, val) {
        this.grid.delete(pos.oldHash());
        pos.acceptChange();
        this.grid.set(pos.hash(), val);
    }
}
exports.GridCollisions = GridCollisions;
;


/***/ }),

/***/ "./src/levels.ts":
/*!***********************!*\
  !*** ./src/levels.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LEVELS = void 0;
exports.LEVELS = { "11_4": ["@-----^^^^^^^^^^^--", "--\\\\----X-------X--", "--//----X----X--X--", "--------X---XX--X--", "--------X--XXX--X--", "--------X--X#*--X--", "--------X--XXX--X--", "--------X---XX--X--", "--&-----X----X--X--", "-------------------", "------^^^^^^^^^^^-O"], "3_9": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-------------------", "-----#-------&-----", "----------#-----#--", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "15_0": ["@-^^^^^^^^^^^^^^^--", "--&--------*----*--", "-------------------", "--^^------^^^--^^--", "--^^^^--^^^^^^^^^--", "-----------&----&--", "--^^^^--^^^^^^^^^--", "--^^------^^^--^^--", "-------------------", "--&--------*----*--", "--^^^^^^^^^^^^^^^-O"], "9_2": ["@----------^^^^^^--", "-------------X--X--", "-------------X--X--", "-------------X--X--", "-------------X--X--", "-----#--#----X-#X--", "-------------X--X--", "--/\\\\--------X--X--", "--\\//--------X--X--", "-------------------", "--*-----*--^^^^^^-O"], "1_12": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------#XXXX---", "--------&---XXXX---", "-------------*-----", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "1_13": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXX--#XXXX--", "------XXXX---XXXX--", "--------------*----", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "9_3": ["@-------^^^^^^^^^--", "----------X--X--X--", "----------X--X--X--", "----------X-----X--", "----------X--------", "-----#----X--------", "----------X--------", "--/\\\\-----X---//\\--", "--\\//-----X---\\\\/--", "-------------------", "--*-----^^^^^^^^^-O"], "15_1": ["@--^^^^^^^^^^^^^^--", "---^^-----------*--", "---^^-----X--------", "---^^----XX----^^--", "--------XXX--^^^^--", "---^^---X#*-----&--", "--------XXX--^^^^--", "---^^----XX----^^--", "---^^-----X--------", "---^^-----------*--", "---^^^^^^^^^^^^^^-O"], "17_3": ["@-^^^^^^^^^^^^^^^--", "--#X-------^-------", "--XX----X--^----X--", "--X----XX--^---XX--", "------XXX--^--XXX--", "------X#*-----X#*--", "------XXX--&--XXX--", "-------XX------XX--", "--------X-------X--", "-------------------", "--^^^^^^^^^^^^^^^-O"], "3_8": ["@-XX--------XXX----", "--XX--------XXX----", "--XX---XX---XXX----", "--XX-#-XX-#-XXX----", "--XX--------XXX----", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--*XXX----XXXXXXX--", "-------------------", "--#----------&----O"], "11_5": ["@-XXX--^^^^^^^^^^--", "--#XX-----X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX--------------", "--XXX--^^^^^^^^^^-O"], "3_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "------#XXXX--#XXX--", "---&---XXXX---XXX--", "--------*------*---", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "13_5": ["@-XXX--^^^^^^^^^^--", "--#XX---------*#X--", "---XX------X--XXX--", "---XX-----XX--XX---", "---------XXX--X----", "---------X#*--X----", "---------XXX--X----", "---XX-----XX--X----", "---XX------X--X----", "---XX--------------", "--XXX--^^^^^^^^^^-O"], "3_14": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "------#XXXX--#XXX--", "-------XXXX---XXX--", "--------*------*---", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "1_8": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX---XX-----", "--XX--XXX----------", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--*XXXXXXXX----XX--", "-------------------", "--#----&----------O"], "11_7": ["@-^^^^^^^^^^--XXX--", "--------------XXX--", "---------X----XXX--", "--XXX---XX----XXX--", "--X*X--XXX----XX---", "--X&---X#*----XX---", "--X*X--XXX---------", "--XXX---XX----XXX--", "--/\\\\----X----XXX--", "--\\//---------XXX--", "--^^^^^^^^^^--XXX-O"], "15_3": ["@---^^^^^^^^^^^^^--", "-----------^-------", "--------X--^----X--", "-------XX--^---XX--", "------XXX--^--XXX--", "------X#*-----X#*--", "------XXX--&--XXX--", "-------XX------XX--", "--------X-------X--", "-------------------", "----^^^^^^^^^^^^^-O"], "1_11": ["@-XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--*XXXXXXXXXXXXX---", "-------------------", "--#----&----&-----O"], "9_1": ["@----------^^^^^^--", "--------------X----", "--------------X----", "--------------X----", "--------------X----", "-----#--#-----X-#--", "--------------X----", "--/\\\\---------X----", "--\\//---------X----", "-------------------", "--*-----*--^^^^^^-O"], "9_0": ["@--------^^^^^^^^--", "---------------*---", "-------------------", "--------------^^^--", "------------^^^^^--", "-----#---------&---", "------------^^^^^--", "--/\\\\---------^^^--", "--\\//--------------", "---------------*---", "--*------^^^^^^^^-O"], "1_10": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-------------------", "-----#----&--XXX---", "-------------XXX---", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "15_2": ["@--^^^--^^^^^^^^^--", "---^^^---------*#--", "---^^^------X--XX--", "---^^^-----XX--XX--", "----*-----XXX--X---", "---^^^----X#*--X---", "----&-----XXX--X---", "---^^^-----XX--X---", "---^^^------X--X---", "---^^^-------------", "---^^^--^^^^^^^^^-O"], "11_6": ["@-^^^^^^^^^^--XXX--", "------X--X----XXX--", "---X--X--X----XXX--", "---X--X--X----XXX--", "---X--X--X----XXX--", "--#X-#X-#X----XXX--", "---X--X--X----XXX--", "---X--X--X---------", "---X--X--X---------", "---X----------XX---", "--^^^^^^^^^^--XXX-O"], "1_9": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX---XXXX---", "--XX--XXX-----XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--*XXXXXXXX---XX---", "--------------XX---", "--#----&------XX--O"], "3_15": ["@--XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "------#XXXX--#XXX--", "-------XXXX---XXX--", "--------*------*---", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX-O"], "13_4": ["@--^^^^^^^^^^^^^^--", "---^^--------------", "---^^--------------", "---^^--X--X----XX--", "-------X--X^---X*--", "---^^--XXXX^^--X&--", "-------X--X^---X*--", "---^^--X--X----XX--", "---^^-----//\\\\//\\--", "---^^-----\\\\//\\\\/--", "---^^^^^^^^^^^^^^-O"], "3_11": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "--------------#XX--", "---------------XX--", "--------#--#----*--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "13_0": ["@----^^^^^^^^^^^^--", "-----------*----*--", "-------------------", "----------^^^--^^--", "--------^^^^^^^^^--", "--#--------&----&--", "--------^^^^^^^^^--", "----------^^^--^^--", "-------------------", "-----------*----*--", "-----^^^^^^^^^^^^-O"], "11_2": ["@-------^^^^^^^^^--", "----------^--------", "----------^-----X--", "----------^----XX--", "----------^---XXX--", "-----#--------X#*--", "----------&---XXX--", "--/\\\\----------XX--", "--\\//-----------X--", "-------------------", "--*-----^^^^^^^^^-O"], "17_4": ["@-^^^^^^^^^^^^^^^--", "------X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "--#X-#X-#X-#X-#X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "---X---------------", "--^^^^^^^^^^^^^^^-O"], "5_9": ["@----^--XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "----------*---#XX--", "--#------------XX--", "-----------#----*--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-----^--XXXXXXXXX-O"], "1_14": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "------#XXXXXX--&---", "-------XXXXXX------", "--------*----------", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "9_4": ["@-----^^^^^^^^^^^--", "--\\\\---------------", "--//---------------", "--------X--X----X--", "--------X--X^---X--", "--------XXXX^^--X--", "--------X--X^---X--", "--------X--X----X--", "--&--------//\\\\//--", "-----------\\\\//\\\\--", "------^^^^^^^^^^^-O"], "15_6": ["@-^^^^^^^^^^^^^^^--", "-------------------", "-------------------", "--XXX--X--X----XX--", "--X*X--X--X^---X*--", "--X&---XXXX^^--X&--", "--X*X--X--X^---X*--", "--XXX--X--X----XX--", "--/\\\\-----//\\\\//\\--", "--\\//-----\\\\//\\\\/--", "--^^^^^^^^^^^^^^^-O"], "9_5": ["@--------^^^^^^^^--", "--/\\\\-X---------*--", "--\\//-X------X--X--", "------X-----XX--X--", "--&---X----XXX--X--", "--XXXXX----X#*--X--", "--&---X----XXX--X--", "------X-----XX--X--", "--/\\\\-X------X--X--", "--\\//-X------------", "---------^^^^^^^^-O"], "1_15": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXX--#XXXX--", "----XXXXXX---XXXX--", "--------------*----", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "5_8": ["@--------XXXXXXXX--", "--\\\\-----XXXXXXXX--", "--//-----XXXXXXXX--", "---------XXXXXXXX--", "-----------*---*---", "------#------------", "------------#---#--", "---------XXXXXXXX--", "--&------XXXXXXXX--", "---------XXXXXXXX--", "------*--XXXXXXXX-O"], "17_5": ["@-^^^^^^^^^^^^^^^--", "----------------X--", "--------X----X--X--", "--XX---XX---XX--X--", "--*X--XXX--XXX--X--", "--&---X#*--X#*--X--", "--*X--XXX--XXX--X--", "--XX---XX---XX--X--", "--\\\\----X----X--X--", "--//---------------", "--^^^^^^^^^^^^^^^-O"], "11_3": ["@-------^^^^^^^^^--", "-----------&-------", "-----------X----X--", "-----------X---XX--", "-----------X--XXX--", "-----#-----X--X#*--", "-----------X--XXX--", "--/\\\\------X---XX--", "--\\//------X----X--", "-----------X-------", "--*-----^^^^^^^^^-O"], "13_1": ["@-----^^^^^^^^^^^--", "----------------*--", "----------X--------", "---------XX----^^--", "--------XXX--^^^^--", "--#-----X#*-----&--", "--------XXX--^^^^--", "---------XX----^^--", "----------X--------", "----------------*--", "------^^^^^^^^^^^-O"], "3_10": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-------------#XXX--", "-----#----&---XXX--", "---------------*---", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "3_12": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "--------#XXXX--*---", "---------XXXX------", "----------*-----#--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "13_3": ["@-----^^^^^^^^^^^--", "--\\\\-----------*#--", "--//--------X--XX--", "-----------XX--XX--", "----------XXX--X---", "----------X#*--X---", "----------XXX--X---", "-----------XX--X---", "--&---------X--X---", "-------------------", "------^^^^^^^^^^^-O"], "11_1": ["@-----^^^^^^^^^^^--", "--\\\\---------------", "--//-----------X---", "---------------XX--", "---------------XX--", "---------------*#--", "---------------XX--", "------------^--XX--", "--&---------^--X---", "------------^------", "------^^^^^^^^^^^-O"], "9_7": ["@-XXXXX--^^^^^^^^--", "--XXXXX---------*--", "--XXXXX------X--X--", "---XXXX-----XX--X--", "-----------XXX--X--", "----&------X#*--X--", "-----------XXX--X--", "---XXXX-----XX--X--", "--XXXXX------X--X--", "--XXXXX------------", "--XXXXX--^^^^^^^^-O"], "1_17": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-----------#XXXX---", "--XXXXXXX---XXXX---", "--XXXXXXX----*-----", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "15_5": ["@-^^^^^^^^^^^^^^^--", "--#X---------------", "--XX---------------", "--X---X--X----XXX--", "------X--X^---X*X--", "------XXXX^^--X&---", "------X--X^---X*X--", "------X--X----XXX--", "---------//\\\\//\\\\--", "---------\\\\//\\\\//--", "--^^^^^^^^^^^^^^^-O"], "7_8": ["@--^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "----*-----*---*----", "---^^^-------------", "----&------#---#---", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX-O"], "7_9": ["@--^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "----*-----*---#XX--", "---^^^---------XX--", "----&------#----*--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX-O"], "15_4": ["@---^^^^^^^^^^^^^--", "----------------&--", "--------X----X--X--", "-------XX---XX--X--", "------XXX--XXX--X--", "------X#*--X#*--X--", "------XXX--XXX--X--", "-------XX---XX--X--", "--------X----X--X--", "----------------X--", "----^^^^^^^^^^^^^-O"], "1_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "------------#XXXX--", "----&--XXX---XXXX--", "-------XXX----*----", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "9_6": ["@-XXXXX--^^^^^^^^--", "--#XXXX----X--X----", "---XXXX----X--X----", "---XXXX----X--X----", "-----------X--X----", "-----------X-#X-#--", "-----------X--X----", "---XXXX----X--X----", "---XXXX----X--X----", "---XXXX------------", "--XXXXX--^^^^^^^^-O"], "11_0": ["@-----^^^^^^^^^^^--", "--\\\\-------*----*--", "--//---------------", "----------^^^--^^--", "--------^^^^^^^^^--", "-----------&----&--", "--------^^^^^^^^^--", "----------^^^--^^--", "--&----------------", "-----------*----*--", "------^^^^^^^^^^^-O"], "13_2": ["@-----^^^^^^^^^^^--", "-------------------", "------------X------", "-----------XX---X--", "----------XXX--XX--", "--#-------X#*--X#--", "----------XXX--XX--", "-----------XX---X--", "------------X------", "-------------------", "------^^^^^^^^^^^-O"], "3_13": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XX-----#XXXX--", "--#--XX------XXXX--", "---------*----*----", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "14_3": ["@----^^^^^^^^^^^^--", "-------------X--X--", "----------X--X--X--", "---------XX--X--X--", "--------XXX--X--X--", "--#-----X#*--X-#X--", "--------XXX--X--X--", "---------XX--X--X--", "----------X--X--X--", "-------------------", "-----^^^^^^^^^^^^-O"], "8_1": ["@------------^^^^--", "-------------------", "-------------------", "----------------X--", "---------------XX--", "-----#--#------X#--", "---------------XX--", "--/\\\\-----------X--", "--\\//--------------", "-------------------", "--*-----*----^^^^-O"], "7_10": ["@-^^^^--XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--XX----XXXXXXXXX--", "--*X---------#XXX--", "--&-----------XXX--", "--*X------#----*---", "--XX----XXXXXXXXX--", "--\\\\----XXXXXXXXX--", "--//----XXXXXXXXX--", "--^^^^--XXXXXXXXX-O"], "10_7": ["@-^^^^^^^^^--XXXX--", "-------------XXXX--", "--------X----XXXX--", "--XX---XX----XXXX--", "--*X--XXX----XXXX--", "--&---X#*----XXXX--", "--*X--XXX----XXXX--", "--XX---XX------XX--", "--\\\\----X----------", "--//---------XX----", "--^^^^^^^^^--XXXX-O"], "5_15": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-------*---*---*---", "--XX---------------", "--XX----#---#---#--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "12_5": ["@-^^^^^^^^^^^--XX--", "------X--X-----XX--", "---X--X--X-----XX--", "---X--X--X-----XX--", "---X--X--X-----XX--", "--#X-#X-#X-----XX--", "---X--X--X-----XX--", "---X--X--X---------", "---X--X--X---------", "---X-----------XX--", "--^^^^^^^^^^^--XX-O"], "0_8": ["@-----#---X--XXXX--", "--\\\\--XX--X--XXXX--", "--//--XX--X--XXXX--", "------XX--X--XXXX--", "------XX--X--XXXX--", "----------X--XXXX--", "------XX--X--XXX---", "------XX--X--------", "--&---XX--X-----X--", "------XX--X--XXXX--", "------#---&--XXXX-O"], "0_9": ["@-----#----XXXXXX--", "--\\\\--XX---XXXXXX--", "--//--XX---XXXXXX--", "------XX---XXXXXX--", "------XX-----------", "-------------XXXX--", "------XX-----XXXX--", "------XX---XXXXXX--", "--&---XX---XXXXXX--", "------XX---XXXXXX--", "------#----XXXXXX-O"], "12_4": ["@-----^^^^^^^^^^^--", "--\\\\---------X--X--", "--//------X--X--X--", "---------XX--X--X--", "--------XXX--X--X--", "--------X#*--X-#X--", "--------XXX--X--X--", "---------XX--X--X--", "--&-------X--X--X--", "-------------------", "------^^^^^^^^^^^-O"], "5_14": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-------*------#XX--", "---------------XX--", "--------#--#----*--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "10_6": ["@-XXXX--^^^^^^^^^--", "--#XXX----X--X--X--", "---XXX----X--X--X--", "---XXX----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XXX----X--X--X--", "---XXX----X--X--X--", "---XXX-------------", "--XXXX--^^^^^^^^^-O"], "7_11": ["@-^^^^^--XXXXXXXX--", "---------XXXXXXXX--", "---------XXXXXXXX--", "--XXX----XXXXXXXX--", "--X*X------#XXXXX--", "--X&--------XXXXX--", "--X*X--------*-----", "--XXX----XXXXXXXX--", "--/\\\\----XXXXXXXX--", "--\\//----XXXXXXXX--", "--^^^^^--XXXXXXXX-O"], "0_18": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-------------------", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "8_0": ["@-----------^^^^^--", "--------------^----", "--------------^----", "--------------^----", "--------------^----", "-----#--#----------", "--------------&----", "--/\\\\--------------", "--\\//--------------", "-------------------", "--*-----*---^^^^^-O"], "14_2": ["@----^^^^^^^^^^^^--", "-------------------", "------------X------", "-----------XX---X--", "----------XXX--XX--", "--#-------X#*--X#--", "----------XXX--XX--", "-----------XX---X--", "------------X------", "-------------------", "-----^^^^^^^^^^^^-O"], "14_0": ["@--^^^^^^^^^^^^^^--", "---^^------*----*--", "---^^--------------", "---^^-----^^^--^^--", "--------^^^^^^^^^--", "---^^------&----&--", "--------^^^^^^^^^--", "---^^-----^^^--^^--", "---^^--------------", "---^^------*----*--", "---^^^^^^^^^^^^^^-O"], "8_2": ["@----------^^^^^^--", "-------------X--X--", "-------------X--X--", "----------------X--", "-------------------", "-----#--#----------", "-------------------", "--/\\\\---------//\\--", "--\\//---------\\\\/--", "-------------------", "--*-----*--^^^^^^-O"], "16_2": ["@-^^^^^^^^^^^^^^^--", "------X--X-----*---", "---X--X--X---------", "---X--X--X----^^^--", "---X--X--X--^^^^^--", "--#X-#X-#X-----&---", "---X--X--X--^^^^^--", "---X--X--X----^^^--", "---X--X--X---------", "---X-----------*---", "--^^^^^^^^^^^^^^^-O"], "10_4": ["@--XX--^^^^^^^^^^--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX--------------", "---XX--^^^^^^^^^^-O"], "5_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "---#XXXX--*---#XX--", "----XXXX-------XX--", "-----*-----#----*--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "2_9": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX-#-XXXX---", "--XX--XXX-----XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--*XXXXXXXX---XX---", "--------------XX---", "--#----&------XX--O"], "12_6": ["@-^^^^^^^^^--XXXX--", "-------------XXXX--", "--------X----XXXX--", "--XX---XX----XXXX--", "--*X--XXX------*---", "--&---X#*----------", "--*X--XXX-------#--", "--XX---XX----XXXX--", "--\\\\----X----XXXX--", "--//---------XXXX--", "--^^^^^^^^^--XXXX-O"], "2_8": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX---XX-#---", "--XX--XXX----------", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--*XXXXXXXX----XX--", "-------------------", "--#----&----------O"], "10_5": ["@-XXX---^^^^^^^^^--", "--#XX-----X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX--------------", "--XXX---^^^^^^^^^-O"], "7_12": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--X--XX*#XX*#XX----", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "-------------------", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "--X*#XX--XX--XX*#--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "16_3": ["@-^^^^^^^^^^^^^^^--", "--&----------------", "-----------X----X--", "--^^------XX---XX--", "--^^^^---XXX--XXX--", "---------X#*--X#*--", "--^^^^---XXX--XXX--", "--^^------XX---XX--", "-----------X----X--", "--&----------------", "--^^^^^^^^^^^^^^^-O"], "8_3": ["@---------X--^^^^--", "---------------*#--", "----------X----XX--", "---------XX----XX--", "--------XXX----X---", "-----#--X#&----X---", "--------XXX----X---", "--/\\\\----XX----X---", "--\\//-----X----X---", "-------------------", "--*-------X--^^^^-O"], "14_1": ["@----^^^^^^^^^^^^--", "----------------*--", "----------X--------", "---------XX----^^--", "--------XXX--^^^^--", "--#-----X#*-----&--", "--------XXX--^^^^--", "---------XX----^^--", "----------X--------", "----------------*--", "-----^^^^^^^^^^^^-O"], "8_7": ["@-XXXXXX--^^^^^^^--", "--#XXXXX-----X--X--", "---XXXXX-----X--X--", "---XXXXX-----X--X--", "-------------X--X--", "-----&-------X-#X--", "-------------X--X--", "---XXXXX-----X--X--", "---XXXXX-----X--X--", "---XXXXX-----------", "--XXXXXX--^^^^^^^-O"], "14_5": ["@-^^^^^^^^^^^^^^^--", "----------------X--", "----------------X--", "------X----XXX--X--", "------X^---X*X--X--", "--XXXXX^^--X&---X--", "------X^---X*X--X--", "------X----XXX--X--", "------//\\\\//\\\\--X--", "------\\\\//\\\\//-----", "--^^^^^^^^^^^^^^^-O"], "6_8": ["@---^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "-----*--------#XX--", "----^^^--------XX--", "-----&-----#----*--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX-O"], "5_13": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-----------*---*---", "-----&-------------", "--------#---#---#--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "10_1": ["@-------^^^^^^^^^--", "----------^---X----", "----------^---X----", "----------^---X----", "----------^---X----", "-----#--------X-#--", "----------&---X----", "--/\\\\---------X----", "--\\//---------X----", "-------------------", "--*-----^^^^^^^^^-O"], "12_3": ["@------^^^^^^^^^^--", "--\\\\-----------*#--", "--//-------X---XX--", "----------XX---XX--", "---------XXX---X---", "---------X#*---X---", "---------XXX---X---", "----------XX---X---", "--&--------X---X---", "-------------------", "-------^^^^^^^^^^-O"], "12_2": ["@-----^^^^^^^^^^^--", "--\\\\------------*--", "--//---------X--X--", "------------XX--X--", "-----------XXX--X--", "-----------X#*--X--", "-----------XXX--X--", "------------XX--X--", "--&----------X--X--", "-------------------", "------^^^^^^^^^^^-O"], "10_0": ["@-------^^^^^^^^^--", "----------^-----*--", "----------^--------", "----------^----^^--", "----------^--^^^^--", "-----#----------&--", "----------&--^^^^--", "--/\\\\----------^^--", "--\\//--------------", "----------------*--", "--*-----^^^^^^^^^-O"], "5_12": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*------#XX--", "--#------------XX--", "--------#--#----*--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "6_9": ["@--^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "----*--------#XXX--", "---^^^--------XXX--", "----&-----#----*---", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX-O"], "14_4": ["@-^^^^^^^^^^^^--X--", "------X---------X--", "---X--X----X----X--", "---X--X---XX----X--", "---X--X--XXX----X--", "--#X-#X--X#*----X--", "---X--X--XXX----X--", "---X--X---XX----X--", "---X--X----X----X--", "---X------------X--", "--^^^^^^^^^^^^--&-O"], "8_6": ["@---^^^^^^^--XXXX--", "-------------XXXX--", "--------X----XXXX--", "-------XX----XXXX--", "------XXX----XXX---", "------X#*----XX----", "------XXX----------", "-------XX----XXXX--", "--------X----XXXX--", "-------------XXXX--", "----^^^^^^^--XXXX-O"], "8_4": ["@-----#----^^^^^^--", "--\\\\--XX-----------", "--//--XX--------X--", "------XX-------XX--", "------XX------XXX--", "--------------X#*--", "------XX------XXX--", "------XX-------XX--", "--&---XX--------X--", "------XX-----------", "------#----^^^^^^-O"], "16_4": ["@-^^^^^^^^^^^^^^^--", "------X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X------", "---X--X--X--X------", "--#X-#X-#X-#X------", "---X--X--X--X------", "---X--X--X--X---/--", "---X--X--X--X---\\--", "---X---------------", "--^^^^^^^^^^^^^^^-O"], "4_9": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "----------*---#XX--", "--#------------XX--", "-----------#----*--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX-O"], "5_10": ["@-----XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------*---*---", "--#----------------", "--------#---#---#--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "10_2": ["@--------^^^^^^^^--", "-----------^-------", "-----------^----X--", "-----------^---XX--", "-----------^--XXX--", "-----#--------X#*--", "-----------&--XXX--", "--/\\\\----------XX--", "--\\//-----------X--", "-------------------", "--*------^^^^^^^^-O"], "12_0": ["@-----^^^^^^^^^^^--", "-----------*----*--", "-------------------", "----------^^^--^^--", "--------^^^^^^^^^--", "--#--------&----&--", "--------^^^^^^^^^--", "----------^^^--^^--", "-------------------", "-----------*----*--", "------^^^^^^^^^^^-O"], "12_1": ["@-----^^^^^^^^^^^--", "----------^--------", "----------^-----X--", "----------^----XX--", "----------^---XXX--", "--#-----------X#*--", "----------&---XXX--", "---------------XX--", "----------------X--", "-------------------", "------^^^^^^^^^^^-O"], "10_3": ["@--------^^^^^^^^--", "-----------&-------", "-----------X----X--", "-----------X---XX--", "-----------X--XXX--", "-----#-----X--X#*--", "-----------X--XXX--", "--/\\\\------X---XX--", "--\\//------X----X--", "-----------X-------", "--*------^^^^^^^^-O"], "5_11": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*---*---#X--", "--#-------------X--", "--------#---#------", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "4_8": ["@-XX--------XXX----", "--XX--------XXX----", "--XX---XX---XXX----", "--XX-#-XX-#-XXX-#--", "--XX--------XXX----", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--*XXX----XXXXXXX--", "-------------------", "--#----------&----O"], "16_5": ["@-^^^^^^^^^^^^^^^--", "------X--X--X--X---", "------X--X--X--X---", "--XX--X--X--X--X---", "--*X--X--X--X--X---", "--&---X-#X-#X-#X---", "--*X--X--X--X--X---", "--XX--X--X--X--X---", "--\\\\--X--X--X--X---", "--//---------------", "--^^^^^^^^^^^^^^^-O"], "8_5": ["@----XXXXXXXXXXXX--", "-----XX--^^^^^^^^--", "-----XX----^^^-----", "-----XX------------", "-------------//\\\\--", "--#----------\\\\//--", "-------------------", "-----XX------------", "-----XX----^^^-----", "-----XX--^^^^^^^^--", "-----XXXXXXXXXXXX-O"], "8_8": ["@-XXXXXX--^^^^^^^--", "--XXXXXX-----X--X--", "--XXXXXX-----X--X--", "--XXXXXX-----X--X--", "--XXXX-------X--X--", "--XXXX-------X-#X--", "---*---------X--X--", "--XXXXXX-----X--X--", "--XXXXXX-----X--X--", "--XXXXXX-----------", "--XXXXXX--^^^^^^^-O"], "6_7": ["@----XXXXXXXXXXXX--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX--------", "-------*-----^^^^--", "--#----------------", "--------#----^^^^--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXXXXXXXX-O"], "0_10": ["@-----#---XXXXXXX--", "--\\\\--XX--XXXXXXX--", "--//--XX--XXXXXXX--", "------XX--XXXXXXX--", "------XX--XXXXXXX--", "----------XXXX-----", "------XX-----------", "------XX------XXX--", "--&---XX--XXXXXXX--", "------XX--XXXXXXX--", "------#---XXXXXXX-O"], "4_5": ["@-------#---XXXXX--", "--------XX---------", "--------XX-----X---", "--------XX-----XX--", "--------XX-----XX--", "-----#--------&*#--", "--------XX-----XX--", "--/\\\\---XX-----XX--", "--\\//---XX-----X---", "--------XX---------", "--*-----#---XXXXX-O"], "2_15": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--------#XXXX------", "-----&---XXXX---X--", "----------*-----X--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "2_3": ["@-------#---X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X--&---", "--\\//---XX--X------", "--------XX--X------", "--*-----#---&-----O"], "0_1": ["@-----------X------", "--\\\\--------X------", "--//--------X------", "------------X------", "------------X------", "------#--&--X------", "------------X------", "------------X--&---", "--&---------X------", "------------X------", "------------&-----O"], "0_0": ["@------------------", "--\\\\---------------", "--//---------------", "-------------------", "-------------------", "------#--&--&------", "-------------------", "-------------------", "--&----------------", "-------------------", "------------------O"], "2_2": ["@-------#----------", "--------XX---------", "--------XX---------", "--------XX---------", "--------XX---------", "-----#------&------", "--------XX---------", "--/\\\\---XX-----&---", "--\\//---XX---------", "--------XX---------", "--*-----#---------O"], "2_14": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XX-----#XXXX---", "----XX------XXXX---", "--------*----*-----", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "4_4": ["@----------X--XX---", "-----------X--XX---", "-----------X--XX---", "-----------X--XX---", "-----------X-------", "-----#--#--X-------", "-----------X----X--", "--/\\\\------X--XXX--", "--\\//------X--XX---", "-----------X--XX*--", "--*-----*--&--XX--O"], "0_11": ["@------XXXXXXXXXX--", "--\\\\---XXXXXXXXXX--", "--//---XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------------------", "------------XXXXX--", "---------#--XXXXX--", "-------XXXXXXXXXX--", "--&----XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------XXXXXXXXXX-O"], "6_6": ["@-----XXXXX--^^^^--", "--\\\\--XXXXX----*#--", "--//--XXXXX----XX--", "------XXXXX----XX--", "---------------X---", "---------------X---", "--------#------X---", "------XXXXX----X---", "--&---XXXXX----X---", "------XXXXX--------", "------XXXXX--^^^^-O"], "8_9": ["@-^^^^--XXXXXXXXX--", "--#X----XXXXXXXXX--", "--XX----XXXXXXXXX--", "--X-----XXXXXXXXX--", "----------*---#XX--", "---------------XX--", "-----------#----*--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--^^^^--XXXXXXXXX-O"], "6_4": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "---------&---XXXX--", "--------^^^--XXXX--", "--------^^^--------", "-----#--^^^--------", "--------^^^----#---", "--/\\\\---^^^--XXXX--", "--\\//----*---XXXX--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "0_13": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-------------------", "---------XXXXXXXX--", "---------XXXXXXXX--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "4_6": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-------------------", "-----#--#----&-----", "----------------#--", "--/\\\\------XXXXXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*-----*--XXXXXX-O"], "18_4": ["@-^^^^^^^^^^^^^^^--", "---------------*#--", "------X----X---XX--", "-----XX---XX---XX--", "----XXX--XXX---X---", "----X#*--X#*---X---", "----XXX--XXX---X---", "-----XX---XX---X---", "------X----X---X---", "-------------------", "--^^^^^^^^^^^^^^^-O"], "2_16": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "------------#XXXX--", "-----XXXXX---XXXX--", "-----XXXXX----*----", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "2_0": ["@------------------", "-------------------", "-------------------", "-------------------", "-------------------", "-----#-----&--&----", "-------------------", "--/\\\\--------------", "--\\//--------------", "--------*----------", "--*---------------O"], "0_2": ["@-----#------------", "--\\\\--XX-----------", "--//--XX-----------", "------XX-----------", "------XX-----------", "----------&--&--&--", "------XX-----------", "------XX-----------", "--&---XX-----------", "------XX-----------", "------#-----------O"], "0_3": ["@-----#---X--------", "--\\\\--XX--X--------", "--//--XX--X--------", "------XX--X--------", "------XX--X--------", "----------X--&--&--", "------XX--X--------", "------XX--X--------", "--&---XX--X--------", "------XX--X--------", "------#---&-------O"], "2_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#-----X-------", "-----------X-------", "--/\\\\------X--&----", "--\\//------X-------", "--------*--X-------", "--*--------&------O"], "2_17": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXX--#XXXX---", "--XXXXXXX---XXXX---", "---*---------*-----", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "18_5": ["@-^^^^^^^^^^^^^^^--", "----------------*--", "--------X----X--X--", "--XX---XX---XX--X--", "--*X--XXX--XXX--X--", "--&---X#*--X#*--X--", "--*X--XXX--XXX--X--", "--XX---XX---XX--X--", "--\\\\----X----X--X--", "--//---------------", "--^^^^^^^^^^^^^^^-O"], "4_7": ["@-----XXXXXX--^^^--", "--\\\\--XXXXXX----X--", "--//--XXXXXX----X--", "------XXXXXX----X--", "----------------X--", "----------------X--", "--------#-------X--", "------XXXXXX----X--", "--&---XXXXXX----X--", "------XXXXXX----#--", "------XXXXXX--^^^-O"], "0_12": ["@------XXXXXXXXXX--", "--\\\\---XXXXXXXXXX--", "--//---XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------------------", "---------XXXXXXXX--", "---------XXXXXXXX--", "-------XXXXXXXXXX--", "--&----XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------XXXXXXXXXX-O"], "6_5": ["@-----XXX--^^^^^^--", "--\\\\--XXX----X--X--", "--//--XXX----X--X--", "------XXX----X--X--", "------XXX----X--X--", "------XXX----X-#X--", "-------------X--X--", "-------------X--X--", "--&---XXX----X--X--", "------XXX----------", "------XXX--^^^^^^-O"], "6_1": ["@----------X--^^^--", "-----------X----^--", "-----------X----^--", "-----------X----^--", "-----------X----^--", "-----#--#--X-------", "-----------X----&--", "--/\\\\------X-------", "--\\//------X-------", "-----------X-------", "--*-----*--&--^^^-O"], "0_16": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-------------------", "-----&--XXXXXXXXX--", "--------XXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "4_3": ["@-------#---X--^^--", "--------XX--X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X------", "--\\//---XX--X------", "--------XX--X------", "--*-----#---&--^^-O"], "2_13": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*-----------", "--#--------XXXXXX--", "--------#--XXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "2_5": ["@-------#---X--X---", "--------XX--X--X---", "--------XX--X--X---", "--------XX--X--X---", "--------XX--X--X---", "-----#------X--X---", "--------XX--X--X---", "--/\\\\---XX--X--X---", "--\\//---XX--X--X---", "--------XX--X--X---", "--*-----#---&--&--O"], "0_7": ["@-----#---X--XXXX--", "--\\\\--XX--X--XXXX--", "--//--XX--X--XXXX--", "------XX--X--XXXX--", "------XX--X--XXXX--", "----------X--XXXX--", "------XX--X--XXXX--", "------XX--X--------", "--&---XX--X--------", "------XX--X--XX----", "------#---&--XXXX-O"], "0_6": ["@-----#---X--X--X--", "--\\\\--XX--X--X--X--", "--//--XX--X--X--X--", "------XX--X--X--X--", "------XX--X--X--X--", "----------X--X--X--", "------XX--X--X--X--", "------XX--X--X--X--", "--&---XX--X--X--X--", "------XX--X--X--X--", "------#---&--&--&-O"], "2_4": ["@-------#---X---X--", "--------XX--X---X--", "--------XX--X---X--", "--------XX--X---X--", "--------XX--X---X--", "-----#------X---X--", "--------XX--X---X--", "--/\\\\---XX--X---X--", "--\\//---XX--X------", "--------XX--X------", "--*-----#---&-----O"], "2_12": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------#XXXX---", "------------XXXX---", "--------#----*-----", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "4_2": ["@-------#------^^--", "--------XX-----^^--", "--------XX-----^^--", "--------XX-----^^--", "--------XX---------", "-----#------&------", "--------XX-----^^--", "--/\\\\---XX-----^^--", "--\\//---XX-----^^--", "--------XX-----^^--", "--*-----#------^^-O"], "0_17": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-------------------", "--XX----XXXXXXXXX--", "--XX----XXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "6_0": ["@-------------^^^--", "----------------^--", "----------------^--", "----------------^--", "----------------^--", "-----#--#--&-------", "----------------&--", "--/\\\\--------------", "--\\//--------------", "-------------------", "--*-----*-----^^^-O"], "6_2": ["@----------X--^^^--", "-----------X----X--", "-----------X----X--", "-----------X-------", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X-------", "-----------X-------", "--*-----*--&--^^^-O"], "0_15": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "-------------------", "-------XXXXXXXXXX--", "-------XXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "4_0": ["@------------------", "-------------------", "---------------#---", "-------------------", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\--------------", "--\\//--------------", "----------------/--", "--*-----*-------\\-O"], "2_10": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXX--------", "-----#--XXX--&-----", "----------------#--", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "2_6": ["@-------#---X--XX--", "--------XX--X--XX--", "--------XX--X--XX--", "--------XX--X--XX--", "--------XX--X--XX--", "-----#------X--XX--", "--------XX--X--XX--", "--/\\\\---XX--X------", "--\\//---XX--X------", "--------XX--X--XX--", "--*-----#---&--XX-O"], "0_4": ["@-----#---X--X-----", "--\\\\--XX--X--X-----", "--//--XX--X--X-----", "------XX--X--X-----", "------XX--X--X-----", "----------X--X-----", "------XX--X--X-----", "------XX--X--X--&--", "--&---XX--X--X-----", "------XX--X--X-----", "------#---&--&----O"], "0_5": ["@-----#---X--X-----", "--\\\\--XX--X--X--/--", "--//--XX--X--X--\\--", "------XX--X--X-----", "------XX--X--X-----", "----------X--X-----", "------XX--X--X-----", "------XX--X--X-----", "--&---XX--X--X-----", "------XX--X--X-----", "------#---&--&----O"], "2_7": ["@-------#---XXXXX--", "--------XX--XXXXX--", "--------XX--XXXXX--", "--------XX--XXXXX--", "--------XX---------", "-----#--------&----", "--------XX---------", "--/\\\\---XX--XXXXX--", "--\\//---XX--XXXXX--", "--------XX--XXXXX--", "--*-----#---XXXXX-O"], "2_11": ["@-XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-#---", "--XX--XXX--XXX-----", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--*XXXXXXXXXXXXX---", "-------------------", "--#----&----&-----O"], "4_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X-------", "-----------X--*----", "--*-----*--&------O"], "0_14": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------------------", "--#----XXXXXXXXXX--", "-------XXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "6_3": ["@---------X---^^^--", "----------------X--", "----------X-----X--", "---------XX-----X--", "--------XXX-----X--", "-----#--X#&-----X--", "--------XXX-----X--", "--/\\\\----XX-----X--", "--\\//-----X-----X--", "----------------#--", "--*-------X---^^^-O"], "1_2": ["@----------X-------", "-----------X--//\\--", "-----------X--\\\\/--", "-----------X-------", "-----------X-------", "-----#--&--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X----&--", "-----------X-------", "--*--------&------O"], "3_0": ["@------------------", "-------------------", "-------------------", "-------------------", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\---------&----", "--\\//--------------", "-------------------", "--*-----*---------O"], "5_6": ["@-----XXXXX--^^^^--", "--\\\\--XXXXX-----*--", "--//--XXXXX-----X--", "------XXXXX-----X--", "----------------X--", "----------------X--", "--------#-------X--", "------XXXXX-----X--", "--&---XXXXX-----X--", "------XXXXX--------", "------XXXXX--^^^^-O"], "6_12": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--X--XX--XX*#XX----", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "-------------------", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "--X*&XX*#XX--XX*#--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "7_4": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "--------^^^--XXXX--", "--------^^^--XXXX--", "---------*-----*---", "-----#--^^^--------", "---------&------#--", "--/\\\\---^^^--XXXX--", "--\\//---^^^--XXXX--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "7_5": ["@-----XXX--^^^^^^--", "--\\\\--XXX----------", "--//--XXX-------X--", "------XXX------XX--", "------XXX-----XXX--", "------XXX-----X#*--", "--------------XXX--", "---------------XX--", "--&---XXX-------X--", "------XXX----------", "------XXX--^^^^^^-O"], "6_13": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-------*---*---*---", "-------------------", "--------#---#---#--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "5_7": ["@-----XXXXXX--^^^--", "--\\\\--XXXXXX----X--", "--//--XXXXXX----X--", "------XXXXXX----X--", "--------*-------X--", "----------------X--", "---------#------X--", "------XXXXXX----X--", "--&---XXXXXX----X--", "------XXXXXX----#--", "------XXXXXX--^^^-O"], "3_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X--&----", "--\\//------X-------", "-----------X-------", "--*-----*--&------O"], "1_3": ["@----------X--X----", "-----------X--X----", "-----------X--X----", "-----------X--X----", "-----------X--X----", "-----#--&--X--X----", "-----------X--X----", "--/\\\\------X--X----", "--\\//------X--X----", "-----------X--X----", "--*--------&--&---O"], "4_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "---#XXXX-----#XXX--", "----XXXX------XXX--", "-----*----*----*---", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "4_14": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--------------#XX--", "-----&---------XX--", "--------#--#----*--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "1_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#--&--X-------", "-----------X-------", "--/\\\\------X--&----", "--\\//------X-------", "-----------X-------", "--*--------&------O"], "3_3": ["@-------#---X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X------", "--\\//---XX--X------", "--------XX--X--*---", "--*-----#---&-----O"], "5_5": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "---------&---XXXX--", "--------^^^--XXXX--", "--------^^^--XXXX--", "-----#--^^^--XXXX--", "--------^^^--XXX---", "--/\\\\---^^^--------", "--\\//----*------X--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "9_8": ["@-^^^^^^^--XXXXXX--", "-----------XXXXXX--", "------X----XXXXXX--", "-----XX----XXXXXX--", "----XXX------#XXX--", "----X#*-------XXX--", "----XXX--------*---", "-----XX----XXXXXX--", "------X----XXXXXX--", "-----------XXXXXX--", "--^^^^^^^--XXXXXX-O"], "6_11": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*---*---*---", "--#----------------", "--------#---#---#--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "7_7": ["@---^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "-----*-----*---*---", "----^^^------------", "-----&------#---#--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX-O"], "7_6": ["@----XXXXXX--^^^^--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX-----X--", "-------*-------XX--", "--#------------X#--", "--------#------XX--", "-----XXXXXX-----X--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX--^^^^-O"], "6_10": ["@-----XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "--^--------*---*---", "--^^---------------", "--^-----#---#---#--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "5_4": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "---------&---XXXX--", "--------^^^--XXXX--", "--------^^^--------", "-----#--^^^----&---", "--------^^^--------", "--/\\\\---^^^--XXXX--", "--\\//----*---XXXX--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "3_2": ["@-------#------^---", "--------XX---------", "--------XX---------", "--------XX---------", "--------XX---------", "-----#------&------", "--------XX---------", "--/\\\\---XX---------", "--\\//---XX---------", "--------XX---------", "--*-----#------^--O"], "1_0": ["@------------------", "-------------------", "-------------------", "-------------------", "-------------------", "-----#--&--&--&----", "-------------------", "--/\\\\--------------", "--\\//--------------", "-------------------", "--*---------------O"], "4_15": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-----#XXXX-----#X--", "------XXXX------X--", "-------*----*------", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "4_11": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------*---*---", "-------------------", "--------#---#---#--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "1_4": ["@----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----#--&--X---XX--", "-----------X---XX--", "--/\\\\------X-------", "--\\//------X-------", "-----------X---XX--", "--*--------&---XX-O"], "3_6": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-------------------", "-----#--#----&--&--", "-------------------", "--/\\\\------XXXXXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*-----*--XXXXXX-O"], "5_0": ["@-------------^-^--", "----------------^--", "-------------------", "-------------------", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\--------------", "--\\//--------------", "----------------^--", "--*-----*-----^-^-O"], "7_2": ["@-------#---^^^^^--", "--------XX----^----", "--------XX----^----", "--------XX----^----", "--------XX----^----", "-----#-------------", "--------XX----&----", "--/\\\\---XX---------", "--\\//---XX---------", "--------XX---------", "--*-----#---^^^^^-O"], "7_3": ["@---------X--^^^^--", "---------------X---", "----------X----X---", "---------XX----X---", "--------XXX----X---", "-----#--X#&----X---", "--------XXX----X---", "--/\\\\----XX----X---", "--\\//-----X----X---", "---------------#---", "--*-------X--^^^^-O"], "8_10": ["@-^^^^--XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--XX----XXXXXXXXX--", "--*X------*---#XX--", "--&------------XX--", "--*X-------#----*--", "--XX----XXXXXXXXX--", "--\\\\----XXXXXXXXX--", "--//----XXXXXXXXX--", "--^^^^--XXXXXXXXX-O"], "5_1": ["@----------X---^^--", "-----------X---^^--", "-----------X---^^--", "-----------X---^^--", "-----------X---^^--", "-----#--#--X---^^--", "-----------X---^^--", "--/\\\\------X---^^--", "--\\//------X-------", "-----------X-------", "--*-----*--&---^^-O"], "3_7": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XX------", "-----#--#--XX--&---", "-------------------", "--/\\\\------XXXXXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*-----*--XXXXXX-O"], "1_5": ["@----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----#--&--X--XXX--", "-----------X--XXX--", "--/\\\\------X-------", "--\\//------X-------", "-----------X--XX---", "--*--------&--XXX-O"], "4_10": ["@-----XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------*---#X--", "--#-------------X--", "--------#---#------", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "4_12": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*------#XX--", "--#--------&---XX--", "--------#-------*--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "1_7": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----#--&--XXX-----", "-------------------", "--/\\\\---------XXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*--------XXXXXX-O"], "3_5": ["@----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----#--#--X--XXX--", "-----------X--XXX--", "--/\\\\------X-------", "--\\//------X-------", "-----------X--XX---", "--*-----*--&--XXX-O"], "5_3": ["@-------#---X--^---", "--------XX--X--^---", "--------XX--X--^---", "--------XX--X--^^--", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X------", "--\\//---XX--X---#--", "--------XX--X------", "--*-----#---&-----O"], "7_1": ["@----------X--^----", "-----------X--^----", "-----------X--^----", "-----------X--^^^--", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X---#---", "-----------X-------", "--*-----*--&------O"], "7_0": ["@-------------^----", "--------------^----", "--------------^----", "--------------^^^--", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\--------------", "--\\//----------#---", "-------------------", "--*-----*---------O"], "5_2": ["@-------#------^---", "--------XX-----^---", "--------XX-----^---", "--------XX-----^^--", "--------XX---------", "-----#------&------", "--------XX---------", "--/\\\\---XX---------", "--\\//---XX------#--", "--------XX---------", "--*-----#---------O"], "3_4": ["@----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----#--#--X---XX--", "-----------X-------", "--/\\\\------X-------", "--\\//------X---XX--", "-----------X---XX--", "--*-----*--&---XX-O"], "1_6": ["@-----------XXXXX--", "------------XXXXX--", "------------XXXXX--", "------------XXXXX--", "------------XXXXX--", "-----#--&---XXXXX--", "------------XXX----", "--/\\\\--------------", "--\\//----------XX--", "------------XXXXX--", "--*---------XXXXX-O"], "4_13": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------#XXXX--#XX--", "--#-----XXXX---XX--", "---------*------*--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"] };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const WorldEngine_1 = __webpack_require__(/*! ./WorldEngine */ "./src/WorldEngine/index.ts");
const Scenes_1 = __webpack_require__(/*! ./Scenes */ "./src/Scenes/index.ts");
const engine = new WorldEngine_1.Engine();
engine.displayFPS = false;
const startScene = new Scenes_1.Scene.StartMenu();
const selectionScene = new Scenes_1.Scene.SelectLevel();
const gameScene = new Scenes_1.Scene.Game();
const playerLostScene = new Scenes_1.Scene.PlayerLost();
const playerWonScene = new Scenes_1.Scene.PlayerWon();
const startIndex = engine.addScene(startScene);
const selectionIndex = engine.addScene(selectionScene);
const gameIndex = engine.addScene(gameScene);
const lostIndex = engine.addScene(playerLostScene);
const wonIndex = engine.addScene(playerWonScene);
startScene.sceneIndex = selectionIndex;
selectionScene.sceneIndex = gameIndex;
gameScene.playerLostIndex = lostIndex;
gameScene.playerWonIndex = wonIndex;
gameScene.selfIndex = gameIndex;
gameScene.mainMenuIndex = startIndex;
playerLostScene.sceneIndex = gameIndex;
playerWonScene.sceneIndex = startIndex;
engine.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7O0FDTEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWM7QUFDZCxjQUFjLEtBQUs7Ozs7Ozs7VUNIbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxpREFBZTtBQUM3QyxpQkFBaUIsbUJBQU8sQ0FBQyx1Q0FBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9FbmVteS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Gb29kLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL01lbnVUZXh0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL01vdmFibGUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUGxheWVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1BvcnRhbC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9SZW5kZXIudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvU3dpdGNoLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvR2FtZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1BsYXllckxvc3QudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9QbGF5ZXJXb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9TZWxlY3RMZXZlbC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1N0YXJ0TWVudS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL0VuZW15QUkudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUGxheWVyQ29sbGlzaW9uLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1BsYXllck1vdmVtZW50LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1BvcnRhbFN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9SZW5kZXJMZXZlbC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9SZW5kZXJTdGFtaW5hLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1JlbmRlclN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9TZWxlY3Rpb25TY2VuZS9SZW5kZXJNZW51VGV4dC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9TZWxlY3Rpb25TY2VuZS9VcGRhdGVTZWxlY3RlZC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9VcGRhdGVQbGF5ZXJUdXJuLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL2luZGV4LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0NvbXBvbmVudHMvUG9zaXRpb24yZC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0VDU1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvS2V5LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9TeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9VdGlsaXR5L0dyaWRDb2xsaXNpb25zLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29sbGlkZXIgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIENvbGxpZGVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29sbGlkZXIgPSBDb2xsaWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgRW5lbXkgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgIH1cbn1cbmV4cG9ydHMuRW5lbXkgPSBFbmVteTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb29kID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBGb29kIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuRm9vZCA9IEZvb2Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVudVRleHQgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgTWVudVRleHQgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgb3JkZXIsIHNlbGVjdGVkLCBiZWF0ZW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuYmVhdGVuID0gYmVhdGVuO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVudVRleHQgPSBNZW51VGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Nb3ZhYmxlID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBNb3ZhYmxlIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuTW92YWJsZSA9IE1vdmFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc3RhbWluYSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YW1pbmEgPSBzdGFtaW5hO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvcnRhbCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUG9ydGFsIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlciA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUmVuZGVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlciA9IFJlbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Td2l0Y2ggPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIFN3aXRjaCBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlN3aXRjaCA9IFN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuL0NvbGxpZGVyXCIpO1xuY29uc3QgRW5lbXlfMSA9IHJlcXVpcmUoXCIuL0VuZW15XCIpO1xuY29uc3QgRm9vZF8xID0gcmVxdWlyZShcIi4vRm9vZFwiKTtcbmNvbnN0IE1lbnVUZXh0XzEgPSByZXF1aXJlKFwiLi9NZW51VGV4dFwiKTtcbmNvbnN0IE1vdmFibGVfMSA9IHJlcXVpcmUoXCIuL01vdmFibGVcIik7XG5jb25zdCBQbGF5ZXJfMSA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IFBvcnRhbF8xID0gcmVxdWlyZShcIi4vUG9ydGFsXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5jb25zdCBTd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL1N3aXRjaFwiKTtcbmV4cG9ydHMuQyA9IHtcbiAgICBDb2xsaWRlcjogQ29sbGlkZXJfMS5Db2xsaWRlcixcbiAgICBFbmVteTogRW5lbXlfMS5FbmVteSxcbiAgICBNZW51VGV4dDogTWVudVRleHRfMS5NZW51VGV4dCxcbiAgICBNb3ZhYmxlOiBNb3ZhYmxlXzEuTW92YWJsZSxcbiAgICBQbGF5ZXI6IFBsYXllcl8xLlBsYXllcixcbiAgICBQb3J0YWw6IFBvcnRhbF8xLlBvcnRhbCxcbiAgICBSZW5kZXI6IFJlbmRlcl8xLlJlbmRlcixcbiAgICBTd2l0Y2g6IFN3aXRjaF8xLlN3aXRjaCxcbiAgICBGb29kOiBGb29kXzEuRm9vZCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZSA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzXCIpO1xuY29uc3QgU3lzdGVtc18xID0gcmVxdWlyZShcIi4uL1N5c3RlbXNcIik7XG5jb25zdCBsZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9sZXZlbHNcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgUG9zaXRpb24yZCA9IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkO1xuY29uc3QgR3JpZENvbGxpc2lvbnMgPSBXb3JsZEVuZ2luZV8xLlV0aWxpdHkuR3JpZENvbGxpc2lvbnM7XG5jbGFzcyBHYW1lIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyV29uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnBsYXllckxvc3RJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VsZkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5tYWluTWVudUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZXRCQignZ2FtZSBvdmVyJywgMCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3Jlc3RhcnQnLCBmYWxzZSk7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHhNb2QgPSAyMDtcbiAgICAgICAgY29uc3QgeU1vZCA9IDIwO1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gODtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IDc7XG4gICAgICAgIGxldCB4TWluID0gMTAwMDtcbiAgICAgICAgbGV0IHhNYXggPSAwO1xuICAgICAgICBsZXQgeU1pbiA9IDEwMDA7XG4gICAgICAgIGxldCB5TWF4ID0gMDtcbiAgICAgICAgY29uc3QgZ2MgPSBuZXcgR3JpZENvbGxpc2lvbnMoKTtcbiAgICAgICAgbGV0IHN3aXRjaENvdW50ID0gMDtcbiAgICAgICAgY29uc3QgbHZsS2V5ID0gZW5naW5lLmdldEJCKCdsZXZlbCcpO1xuICAgICAgICBjb25zdCBsdmwgPSBsZXZlbHNfMS5MRVZFTFNbbHZsS2V5XTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsdmwubGVuZ3RoOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbHZsW3ldLmxlbmd0aDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IGx2bFt5XVt4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkRW50aXR5KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeFBvcyA9IG9mZnNldFggKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHlQb3MgPSBvZmZzZXRZICsgeTtcbiAgICAgICAgICAgICAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgeFBvcyk7XG4gICAgICAgICAgICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHhQb3MpO1xuICAgICAgICAgICAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCB5UG9zKTtcbiAgICAgICAgICAgICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCwgeVBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLlJlbmRlcihjaGFyKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gbmV3IFBvc2l0aW9uMmQoeFBvcywgeVBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIHBvcyk7XG4gICAgICAgICAgICAgICAgZ2Muc2V0KHBvcywgaWQpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09ICdPJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLlBvcnRhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCQigncG9ydGFsIGlkJywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLlBsYXllcigzMCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLk1vdmFibGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QkIoJ3BsYXllciBpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5Td2l0Y2goKSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29tcG9uZW50c18xLkMuTW92YWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5FbmVteShuZXcgUG9zaXRpb24yZCh4UG9zLCB5UG9zKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdeJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLkVuZW15KG5ldyBQb3NpdGlvbjJkKHhQb3MsIHlQb3MpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJy8nIHx8IGNoYXIgPT0gJ1xcXFwnIHx8IGNoYXIgPT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29sbGlkZXJfMS5Db2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnJicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5Gb29kKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB5ID0gMzsgeSA8IGVuZ2luZS5oZWlnaHQgLyB5TW9kIC0gMTsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IGVuZ2luZS53aWR0aCAvIHhNb2QgLSAxOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IHhNaW4gfHwgeCA+IHhNYXggfHwgeSA8IHlNaW4gfHwgeSA+IHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEVudGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLlJlbmRlcignWCcpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0gbmV3IFBvc2l0aW9uMmQoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PSB4TWluIC0gMSB8fCB5ID09IHlNaW4gLSAxIHx8IHggPT0geE1heCArIDEgfHwgeSA9PSB5TWF4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2Muc2V0KHBvcywgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5Db2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJCKCdzd2l0Y2ggY291bnQnLCBzd2l0Y2hDb3VudCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ29mZnNldCB4Jywgb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ29mZnNldCB5Jywgb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3ggbW9kJywgeE1vZCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3kgbW9kJywgeU1vZCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ2dyaWQgY29sbGlzaW9ucycsIGdjKTtcbiAgICAgICAgdGhpcy5zZXRCQigndGltZSBzdGVwJywgMCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ2NoYW5nZScsIHRydWUpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgU3lzdGVtc18xLlMuUGxheWVyTW92ZW1lbnQoKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwLCBuZXcgU3lzdGVtc18xLlMuUGxheWVyQ29sbGlzaW9uKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgyMCwgbmV3IFN5c3RlbXNfMS5TLkVuZW15QUkoKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDkwLCBuZXcgU3lzdGVtc18xLlMuUG9ydGFsU3lzdGVtKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgxMDAsIG5ldyBTeXN0ZW1zXzEuUy5SZW5kZXJTeXN0ZW0oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDExMCwgbmV3IFN5c3RlbXNfMS5TLlJlbmRlclN0YW1pbmEoKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEyMCwgbmV3IFN5c3RlbXNfMS5TLlJlbmRlckxldmVsKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg5MDAsIG5ldyBTeXN0ZW1zXzEuUy5VcGRhdGVQbGF5ZXJUdXJuKCkpO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gICAgY3VzdG9tVXBkYXRlKGVuZ2luZSkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IHRoaXMuZ2V0QkIoJ2dhbWUgb3ZlcicpO1xuICAgICAgICBpZiAoZ2FtZU92ZXIgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllckxvc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lT3ZlciA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJXb25JbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGZJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuUSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW5NZW51SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyTG9zdCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBQbGF5ZXJMb3N0IGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FeGl0KGVuZ2luZSkgeyB9XG4gICAgdXBkYXRlKGVuZ2luZSkge1xuICAgICAgICB0aGlzLnRpbWVyICs9IGVuZ2luZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiAyIHx8IGVuZ2luZS5rZXlEb3duLmhhcyhXb3JsZEVuZ2luZV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdZb3UgTG9zdCEgOi8nLCBlbmdpbmUud2lkdGggLyAzLjUsIGVuZ2luZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyTG9zdCA9IFBsYXllckxvc3Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyV29uID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIFBsYXllcldvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FbnRlcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRXhpdChlbmdpbmUpIHsgfVxuICAgIHVwZGF0ZShlbmdpbmUpIHtcbiAgICAgICAgdGhpcy50aW1lciArPSBlbmdpbmUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMiB8fCBlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuRU5URVIpKSB7XG4gICAgICAgICAgICBlbmdpbmUuc2V0Q29va2llKGVuZ2luZS5nZXRCQignbGV2ZWwnKSwgJ2InKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdZb3UgV29uISBOaWNlIScsIGVuZ2luZS53aWR0aCAvIDMuNSwgZW5naW5lLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXJXb24gPSBQbGF5ZXJXb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VsZWN0TGV2ZWwgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgUmVuZGVyTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1JlbmRlck1lbnVUZXh0XCIpO1xuY29uc3QgVXBkYXRlU2VsZWN0ZWRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1VwZGF0ZVNlbGVjdGVkXCIpO1xuY29uc3QgbGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vbGV2ZWxzXCIpO1xuY29uc3QgQ29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHNcIik7XG5jbGFzcyBTZWxlY3RMZXZlbCBleHRlbmRzIFdvcmxkRW5naW5lXzEuRUNTU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNvcnRlZExldmVscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbGV2ZWxzXzEuTEVWRUxTKSB7XG4gICAgICAgICAgICB0aGlzLnNvcnRlZExldmVscy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zb3J0ZWRMZXZlbHMuc29ydCgpO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydGVkTGV2ZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkRW50aXR5KCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGkgPT0gMDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29tcG9uZW50c18xLkMuTWVudVRleHQodGhpcy5zb3J0ZWRMZXZlbHNbaV0sIGksIHNlbGVjdGVkLCBlbmdpbmUuZ2V0Q29va2llKHRoaXMuc29ydGVkTGV2ZWxzW2ldKSAhPSB1bmRlZmluZWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJCKCdzZWxlY3RlZCcsIDApO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgVXBkYXRlU2VsZWN0ZWRfMS5VcGRhdGVTZWxlY3RlZCgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMTAsIG5ldyBSZW5kZXJNZW51VGV4dF8xLlJlbmRlck1lbnVUZXh0U3lzdGVtKCkpO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gICAgY3VzdG9tVXBkYXRlKGVuZ2luZSkge1xuICAgICAgICBpZiAoZW5naW5lLmtleURvd24uaGFzKFdvcmxkRW5naW5lXzEuS2V5LkVOVEVSKSkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmdldEJCKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgZW5naW5lLnNldEJCKCdsZXZlbCcsIHRoaXMuZ2V0Q29tcG9uZW50cyhzZWxlY3RlZCkuZ2V0KENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbmV4cG9ydHMuU2VsZWN0TGV2ZWwgPSBTZWxlY3RMZXZlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGFydE1lbnUgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgU3RhcnRNZW51IGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkgeyB9XG4gICAgb25FeGl0KGVuZ2luZSkgeyB9XG4gICAgdXBkYXRlKGVuZ2luZSkge1xuICAgICAgICBpZiAoZW5naW5lLmtleURvd24uaGFzKFdvcmxkRW5naW5lXzEuS2V5LkVOVEVSKSkge1xuICAgICAgICAgICAgZW5naW5lLmtleURvd24uY2xlYXIoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdEdW5nZW9uR3JhbXMnLCAyMjAsIDEwMCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSAnMjBweCBBcmlhbCc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdQcmVzcyBFbnRlciB0byBzdGFydCcsIDI3NSwgMTUwKTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3llbGxvdyc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCcmIGdpdmVzIHlvdSBzdGFtaW5hJywgNDAsIDIwMCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdDb2xsZWN0IGFsbCAqIHRvIG9wZW4gdGhlIHBvcnRhbC4nLCA0MCwgMjIyKTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ1N0ZXAgdGhyb3VnaCB0aGUgcG9ydGFsIE8gdG8gd2luIScsIDQwLCAyNDQpO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnQnV0IG1ha2Ugc3VyZSB0byBhdm9pZCB0aGUgZW5lbWllcyAjIGFuZCB0cmFwcyBeJywgNDAsIDI2Nik7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdXQVNEIHRvIG1vdmUnLCA0MCwgMzUwKTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ1NwYWNlIHRvIGRvIG5vdGhpbmcgZm9yIGEgdHVybicsIDQwLCAzNzUpO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnUiB0byByZXN0YXJ0JywgNDAsIDQwMCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdRIHRvIHF1aXQnLCA0MCwgNDI1KTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuU3RhcnRNZW51ID0gU3RhcnRNZW51O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjZW5lID0gdm9pZCAwO1xuY29uc3QgR2FtZV8xID0gcmVxdWlyZShcIi4vR2FtZVwiKTtcbmNvbnN0IFBsYXllckxvc3RfMSA9IHJlcXVpcmUoXCIuL1BsYXllckxvc3RcIik7XG5jb25zdCBQbGF5ZXJXb25fMSA9IHJlcXVpcmUoXCIuL1BsYXllcldvblwiKTtcbmNvbnN0IFNlbGVjdExldmVsXzEgPSByZXF1aXJlKFwiLi9TZWxlY3RMZXZlbFwiKTtcbmNvbnN0IFN0YXJ0TWVudV8xID0gcmVxdWlyZShcIi4vU3RhcnRNZW51XCIpO1xuZXhwb3J0cy5TY2VuZSA9IHtcbiAgICBHYW1lOiBHYW1lXzEuR2FtZSxcbiAgICBQbGF5ZXJMb3N0OiBQbGF5ZXJMb3N0XzEuUGxheWVyTG9zdCxcbiAgICBQbGF5ZXJXb246IFBsYXllcldvbl8xLlBsYXllcldvbixcbiAgICBTZWxlY3RMZXZlbDogU2VsZWN0TGV2ZWxfMS5TZWxlY3RMZXZlbCxcbiAgICBTdGFydE1lbnU6IFN0YXJ0TWVudV8xLlN0YXJ0TWVudVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteUFJID0gdm9pZCAwO1xuY29uc3QgUG9zaXRpb24yZF8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL3NyYy9Db21wb25lbnRzL1Bvc2l0aW9uMmRcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgQ29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHNcIik7XG5jb25zdCBFbmVteV8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvRW5lbXlcIik7XG5jbGFzcyBFbmVteUFJIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1Bvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkLCBDb21wb25lbnRzXzEuQy5FbmVteSwgQ29tcG9uZW50c18xLkMuTW92YWJsZV0pO1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICAvLyBlbmVteSBjYW4gb25seSBtb3ZlIGR1cmluZyB0aGVpciB0dXJuXG4gICAgICAgIGlmICh0aGlzLmVjcy5nZXRCQigndGltZSBzdGVwJykgJSAzICE9IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGdldCB0aGUgcGxheWVyIHBvc2l0aW9uIGFuZCBncmlkIGNvbGxpc2lvbiB0b29sXG4gICAgICAgIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuZ2V0QkIoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQpO1xuICAgICAgICBjb25zdCBnYyA9IHRoaXMuZWNzLmdldEJCKCdncmlkIGNvbGxpc2lvbnMnKTtcbiAgICAgICAgZm9yIChsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSBjb21wb25lbnRzLmdldChQb3NpdGlvbjJkXzEuUG9zaXRpb24yZCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IGNvbXBvbmVudHMuZ2V0KEVuZW15XzEuRW5lbXkpLnN0YXJ0UG9zaXRpb247XG4gICAgICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MuZXVjbGlkZWFuRGlzdGFuY2UocGxheWVyUG9zKSA8PSAzICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFBvcy5ldWNsaWRlYW5EaXN0YW5jZShzdGFydFBvcykgPD0gMykge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHBsYXllclBvczsgLy8gZ28gdG93YXJkcyB0aGUgcGxheWVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzdGFydFBvczsgLy8gZ28gdG93YXJkcyBzdGFydCBwb3NpdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgZW5lbXkgdG93YXJkcyB0aGUgcGxheWVyIGlmIHRoZSBwbGF5ZXIgaXMgaW4gcmFuZ2VcbiAgICAgICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZXRNb3ZlcyhnYywgY3VycmVudFBvcywgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChtb3Zlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNsb3Nlc3RWYWwgPSAxMDAwO1xuICAgICAgICAgICAgbGV0IGNsb3Nlc3RJbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGN1cnJlbnRQb3MuYWRkKG1vdmVzW2ldKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdjLmdldChwb3MpO1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB1bmRlZmluZWQgfHwgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuaGFzKENvbXBvbmVudHNfMS5DLlBsYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcG9zLmV1Y2xpZGVhbkRpc3RhbmNlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPCBjbG9zZXN0VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0VmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbG9zZXN0SW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zLnNldFBvcyhjdXJyZW50UG9zLmFkZChtb3Zlc1tjbG9zZXN0SW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgZ2MuYWNjZXB0Q2hhbmdlKGN1cnJlbnRQb3MsIGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcy5lcXVhbHMocGxheWVyUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVjcy5zZXRCQignZ2FtZSBvdmVyJywgLTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gdGhpcy5lY3MuZ2V0QkIoJ3RpbWUgc3RlcCcpO1xuICAgICAgICB0aGlzLmVjcy5zZXRCQigndGltZSBzdGVwJywgdGltZSArIDEpO1xuICAgIH1cbiAgICBnZXRNb3ZlcyhnYywgY3VycmVudFBvcywgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBtb3ZlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBjb25zdCBkaWZmX3ggPSBjdXJyZW50UG9zLmdldFgoKSAtIHRhcmdldC5nZXRYKCk7XG4gICAgICAgIGNvbnN0IGRpZmZfeSA9IGN1cnJlbnRQb3MuZ2V0WSgpIC0gdGFyZ2V0LmdldFkoKTtcbiAgICAgICAgaWYgKGRpZmZfeCA9PSAwICYmIGRpZmZfeSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZfeSkgPiBNYXRoLmFicyhkaWZmX3gpKSB7XG4gICAgICAgICAgICBpZiAoZGlmZl95ID4gMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBQb3NpdGlvbjJkXzEuUG9zaXRpb24yZCgwLCAtMSkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZl95IDwgMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBQb3NpdGlvbjJkXzEuUG9zaXRpb24yZCgwLCAxKSk7XG4gICAgICAgICAgICBpZiAoZGlmZl94ID4gMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBQb3NpdGlvbjJkXzEuUG9zaXRpb24yZCgtMSwgMCkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZl94IDwgMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBQb3NpdGlvbjJkXzEuUG9zaXRpb24yZCgxLCAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoZGlmZl94KSA+IE1hdGguYWJzKGRpZmZfeSkpIHtcbiAgICAgICAgICAgIGlmIChkaWZmX3ggPiAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFBvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkKC0xLCAwKSk7XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmX3ggPCAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFBvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkKDEsIDApKTtcbiAgICAgICAgICAgIGlmIChkaWZmX3kgPiAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFBvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkKDAsIC0xKSk7XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmX3kgPCAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFBvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkKDAsIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoZGlmZl94ICsgZGlmZl95KSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgaWYgKGRpZmZfeCA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoLTEsIDApKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeCA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoMSwgMCkpO1xuICAgICAgICAgICAgaWYgKGRpZmZfeSA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoMCwgLTEpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeSA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoMCwgMSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpZmZfeCA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoLTEsIDApKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeCA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoMSwgMCkpO1xuICAgICAgICAgICAgaWYgKGRpZmZfeSA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoMCwgLTEpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeSA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQoMCwgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICAgICAgLy8gTk9URTogSSBsaWtlIHRoaXMgaW1wbGVtZW50YXRpb24gbW9yZSBidXQgSSdtIHJlaW1wbGVtZW50aW5nIGR1bmdlb25ncmFtc1xuICAgICAgICAvLyBjb25zdCB2YWxpZE5ld1Bvc2l0aW9ucyA9IG5ldyBBcnJheTxQb3NpdGlvbjJkPigpO1xuICAgICAgICAvLyB2YWxpZE5ld1Bvc2l0aW9ucy5wdXNoKGN1cnJlbnRQb3MpO1xuICAgICAgICAvLyBmb3IobGV0IG0gb2YgdGhpcy5nZXRNb3ZlcyhjdXJyZW50UG9zLCB0YXJnZXQpKSB7XG4gICAgICAgIC8vICAgbGV0IG5ld1BvcyA9IGN1cnJlbnRQb3MuYWRkKG0pO1xuICAgICAgICAvLyAgIGNvbnN0IGF0UG9zID0gZ2MuZ2V0KG5ld1Bvcyk7XG4gICAgICAgIC8vICAgLy8gdGhlIGVuZW15IGNhbiBnbyB0byB0aGUgbmV3IHBvc2l0aW9uIGlmIGl0IGlzIGVtcHR5IG9yIHRoZSBwbGF5ZXIgaXNcbiAgICAgICAgLy8gICAvLyBhbHJlYWR5IHRoZXJlXG4gICAgICAgIC8vICAgaWYgKGF0UG9zID09IHVuZGVmaW5lZCB8fCB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGF0UG9zKS5oYXMoQy5QbGF5ZXIpKSB7XG4gICAgICAgIC8vICAgICB2YWxpZE5ld1Bvc2l0aW9ucy5wdXNoKG5ld1Bvcyk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHJldHVybiB2YWxpZE5ld1Bvc2l0aW9ucztcbiAgICB9XG59XG5leHBvcnRzLkVuZW15QUkgPSBFbmVteUFJO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllckNvbGxpc2lvbiA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50c1wiKTtcbmNvbnN0IFBvc2l0aW9uMmQgPSBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZDtcbmNsYXNzIFBsYXllckNvbGxpc2lvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKTtcbiAgICAgICAgY29uc3QgcG9zID0gY29tcG9uZW50cy5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgIGlmICghcG9zLnVwZGF0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdjID0gdGhpcy5lY3MuZ2V0QkIoJ2dyaWQgY29sbGlzaW9ucycpO1xuICAgICAgICBjb25zdCBsb2NJRCA9IGdjLmdldChwb3MpO1xuICAgICAgICAvLyBpZiBubyBjb2xsaXNpb24gd2FzIGZvdW5kLCB0aGUgcGxheWVyIGNhbiBtb3ZlXG4gICAgICAgIGlmIChsb2NJRCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGdjLmFjY2VwdENoYW5nZShwb3MsIGlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcGxheWVyIHJhbiBpbnRvIGEgc3dpdGNoXG4gICAgICAgIGNvbnN0IGxvY0NvbXBvbmVudHMgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGxvY0lEKTtcbiAgICAgICAgaWYgKGxvY0NvbXBvbmVudHMuaGFzKENvbXBvbmVudHNfMS5DLlN3aXRjaCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXRjaENvdW50ID0gdGhpcy5lY3MuZ2V0QkIoJ3N3aXRjaCBjb3VudCcpIC0gMTtcbiAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdzd2l0Y2ggY291bnQnLCBzd2l0Y2hDb3VudCk7XG4gICAgICAgICAgICB0aGlzLmVjcy5yZW1vdmVFbnRpdHkobG9jSUQpO1xuICAgICAgICAgICAgZ2MuYWNjZXB0Q2hhbmdlKHBvcywgaWQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBwbGF5ZXIgcmFuIGludG8gYW4gZW5lbXkuLi4gdWggb2ghXG4gICAgICAgIGlmIChsb2NDb21wb25lbnRzLmhhcyhDb21wb25lbnRzXzEuQy5FbmVteSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdnYW1lIG92ZXInLCAtMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGxheWVyIHJhbiBpbnRvIHRoZSBwb3J0YWwuXG4gICAgICAgIGlmIChsb2NDb21wb25lbnRzLmhhcyhDb21wb25lbnRzXzEuQy5Qb3J0YWwpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5lY3MuZ2V0QkIoJ3N3aXRjaCBjb3VudCcpID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVjcy5zZXRCQignZ2FtZSBvdmVyJywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MucmVqZWN0Q2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gcGxheWVyIGhhcyByYW4gaW50byBmb29kXG4gICAgICAgIGlmIChsb2NDb21wb25lbnRzLmhhcyhDb21wb25lbnRzXzEuQy5Gb29kKSkge1xuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gY29tcG9uZW50cy5nZXQoQ29tcG9uZW50c18xLkMuUGxheWVyKTtcbiAgICAgICAgICAgIHBsYXllci5zdGFtaW5hICs9IDMwO1xuICAgICAgICAgICAgdGhpcy5lY3MucmVtb3ZlRW50aXR5KGxvY0lEKTtcbiAgICAgICAgICAgIGdjLmFjY2VwdENoYW5nZShwb3MsIGlkKTtcbiAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdjaGFuZ2UnLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UsIHdlJ3ZlIHJ1biBpbnRvIGEgY29sbGlkZXIgYW5kIHdlIHJlamVjdCB0aGUgY2hhbmdlXG4gICAgICAgIHBvcy5yZWplY3RDaGFuZ2UoKTtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllckNvbGxpc2lvbiA9IFBsYXllckNvbGxpc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJNb3ZlbWVudCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50c1wiKTtcbmNvbnN0IFBvc2l0aW9uMmQgPSBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZDtcbmNsYXNzIFBsYXllck1vdmVtZW50IGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1Bvc2l0aW9uMmQsIENvbXBvbmVudHNfMS5DLlJlbmRlciwgQ29tcG9uZW50c18xLkMuUGxheWVyXSk7XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPSA1O1xuICAgIH1cbiAgICB1cGRhdGVUaW1lU3RlcCgpIHtcbiAgICAgICAgY29uc3QgdGltZVN0ZXAgPSB0aGlzLmVjcy5nZXRCQigndGltZSBzdGVwJyk7XG4gICAgICAgIHRoaXMuZWNzLnNldEJCKCd0aW1lIHN0ZXAnLCB0aW1lU3RlcCArIDEpO1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlICs9IGVuZ2luZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPCAwLjA4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0TW92ZSA9IDA7XG4gICAgICAgIGxldCBwbGF5ZXJJRCA9IGVudGl0aWVzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpO1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSBjb21wb25lbnRzLmdldChDb21wb25lbnRzXzEuQy5QbGF5ZXIpO1xuICAgICAgICBsZXQgcG9zID0gY29tcG9uZW50cy5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgIGNvbnN0IHggPSBwb3MuZ2V0WCgpO1xuICAgICAgICBjb25zdCB5ID0gcG9zLmdldFkoKTtcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGVuZ2luZS5rZXlEb3duKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5BOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lU3RlcCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zdGFtaW5hIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHBvcy5zZXRYKHggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5TOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lU3RlcCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBvcy5zZXRZKHkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnN0YW1pbmEgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5EOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZVN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwb3Muc2V0WCh4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zdGFtaW5hIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuVzpcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LlVQOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVTdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnNldFkoeSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhbWluYSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LlNQQUNFOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhbWluYSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZVN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbyBpbiB0aGUgZGVmYXVsdCBjYXNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyTW92ZWQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllci5zdGFtaW5hIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdnYW1lIG92ZXInLCAtMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBsYXllck1vdmVtZW50ID0gUGxheWVyTW92ZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9ydGFsU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzXCIpO1xuY29uc3QgUG9zaXRpb24yZCA9IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkO1xuY2xhc3MgUG9ydGFsU3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW0NvbXBvbmVudHNfMS5DLlBvcnRhbCwgQ29tcG9uZW50c18xLkMuUmVuZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IFtpZF0gPSBlbnRpdGllczsgLy8gdGhlcmUgY2FuIG9ubHkgYmUgb25lIHBvcnRhbFxuICAgICAgICBpZiAodGhpcy5lY3MuZ2V0QkIoJ3N3aXRjaCBjb3VudCcpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChDb21wb25lbnRzXzEuQy5SZW5kZXIpLmNoYXJhY3RlciA9ICdPJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChDb21wb25lbnRzXzEuQy5SZW5kZXIpLmNoYXJhY3RlciA9ICdvJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9ydGFsU3lzdGVtID0gUG9ydGFsU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlckxldmVsID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIFJlbmRlckxldmVsIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW10pO1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRCQignbGV2ZWwnKTtcbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQobGV2ZWwsIGVuZ2luZS53aWR0aCAvIDIsIDMwKTtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlckxldmVsID0gUmVuZGVyTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVuZGVyU3RhbWluYSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50c1wiKTtcbmNsYXNzIFJlbmRlclN0YW1pbmEgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbQ29tcG9uZW50c18xLkMuUGxheWVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IFtpZF0gPSBlbnRpdGllcztcbiAgICAgICAgY29uc3Qgc3RhbWluYSA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChDb21wb25lbnRzXzEuQy5QbGF5ZXIpLnN0YW1pbmE7XG4gICAgICAgIGlmIChzdGFtaW5hID4gMjApIHtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGFtaW5hID4gMTApIHtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3llbGxvdyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZS5jdHguZm9udCA9ICcyMHB4IEFyaWFsJztcbiAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dChgU3RhbWluYTogJHtzdGFtaW5hfWAsIDIwLCAzMCk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJTdGFtaW5hID0gUmVuZGVyU3RhbWluYTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgQ29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHNcIik7XG5jb25zdCBQb3NpdGlvbjJkID0gV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQ7XG5jbGFzcyBSZW5kZXJTeXN0ZW0gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9zaXRpb24yZCwgQ29tcG9uZW50c18xLkMuUmVuZGVyXSk7XG4gICAgICAgIHRoaXMuY2hhclRvQ29sb3IgPSB7XG4gICAgICAgICAgICAnQCc6ICd3aGl0ZScsXG4gICAgICAgICAgICAnLSc6ICcjZDlkMWQwJyxcbiAgICAgICAgICAgICdYJzogJyM2MzYzNjMnLFxuICAgICAgICAgICAgJyonOiAnIzBjY2VmMCcsXG4gICAgICAgICAgICAnXFxcXCc6ICcjYzMwMGQxJyxcbiAgICAgICAgICAgICcvJzogJyNjMzAwZDEnLFxuICAgICAgICAgICAgJ28nOiAnIzQxNGQ0MicsXG4gICAgICAgICAgICAnTyc6ICcjMTlmMDBhJyxcbiAgICAgICAgICAgICcjJzogJ3JlZCcsXG4gICAgICAgICAgICAnXic6ICcjZjBjZDBhJyxcbiAgICAgICAgICAgICcmJzogJyMyNTljMmInLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICBjb25zdCB4TW9kID0gdGhpcy5lY3MuZ2V0QkIoJ3ggbW9kJyk7XG4gICAgICAgIGNvbnN0IHlNb2QgPSB0aGlzLmVjcy5nZXRCQigneSBtb2QnKTtcbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb21wb25lbnRzXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KENvbXBvbmVudHNfMS5DLlJlbmRlcik7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFBvc2l0aW9uMmQpO1xuICAgICAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2hhclRvQ29sb3JbcmVuZGVyLmNoYXJhY3Rlcl07XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KHJlbmRlci5jaGFyYWN0ZXIsIHBvcy5nZXRYKCkgKiB4TW9kLCBwb3MuZ2V0WSgpICogeU1vZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlbmRlclN5c3RlbSA9IFJlbmRlclN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJNZW51VGV4dFN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50c1wiKTtcbmNsYXNzIFJlbmRlck1lbnVUZXh0U3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW0NvbXBvbmVudHNfMS5DLk1lbnVUZXh0XSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IG1pblkgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFkgPSBlbmdpbmUuaGVpZ2h0IC0gNDA7XG4gICAgICAgIGNvbnN0IHlNb2QgPSAyMDtcbiAgICAgICAgY29uc3QgbWF4T3JkZXIgPSAobWF4WSAtIG1pblkpIC8geU1vZDtcbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gXCIxNXB4IEFyaWFsXCI7XG4gICAgICAgIGZvciAobGV0IGVudGl0eSBvZiBlbnRpdGllcy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgY29uc3QgbSA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoZW50aXR5KS5nZXQoQ29tcG9uZW50c18xLkMuTWVudVRleHQpO1xuICAgICAgICAgICAgbGV0IHggPSAyMDtcbiAgICAgICAgICAgIGxldCBvID0gbS5vcmRlcjtcbiAgICAgICAgICAgIHdoaWxlIChvID4gbWF4T3JkZXIpIHtcbiAgICAgICAgICAgICAgICBvIC09IG1heE9yZGVyICsgMTtcbiAgICAgICAgICAgICAgICB4ICs9IDYwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHkgPSBtaW5ZICsgeU1vZCAqIG87XG4gICAgICAgICAgICBsZXQgZmlsbENvbG9yO1xuICAgICAgICAgICAgaWYgKG0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSAneWVsbG93JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG0uYmVhdGVuKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvciA9ICdyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdHh0TWVhc3VyZSA9IGVuZ2luZS5jdHgubWVhc3VyZVRleHQobS5uYW1lKTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gZmlsbENvbG9yO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsUmVjdCh4IC0gMS4wLCB5IC0geU1vZCAqIDAuNywgdHh0TWVhc3VyZS53aWR0aCAqIDEuMSwgeU1vZCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KG0ubmFtZSwgeCwgeSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnTGV2ZWwgU2VsZWN0JywgZW5naW5lLndpZHRoIC8gMi41LCA0NSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJNZW51VGV4dFN5c3RlbSA9IFJlbmRlck1lbnVUZXh0U3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVwZGF0ZVNlbGVjdGVkID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzXCIpO1xuY2xhc3MgVXBkYXRlU2VsZWN0ZWQgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbQ29tcG9uZW50c18xLkMuTWVudVRleHRdKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gMTA7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSArPSBlbmdpbmUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLmxhc3RVcGRhdGUgPCAwLjIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5UHJlc3MgPSBXb3JsZEVuZ2luZV8xLktleS5JTlZBTElEO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZW5naW5lLmtleURvd24pIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gV29ybGRFbmdpbmVfMS5LZXkuRE9XTiB8fCBrZXkgPT0gV29ybGRFbmdpbmVfMS5LZXkuVVAgfHwgV29ybGRFbmdpbmVfMS5LZXkuUklHSFQgfHwgV29ybGRFbmdpbmVfMS5LZXkuTEVGVCkge1xuICAgICAgICAgICAgICAgIGtleVByZXNzID0ga2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5JTlZBTElEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGVudGl0eSBhbmQgbmV3IGVudGl0eSBpbmRleFxuICAgICAgICBsZXQgc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmVjcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgY29uc3QgbHZsc1BlckNvbHVtbiA9IDE4O1xuICAgICAgICBsZXQgbmV3RW50aXR5O1xuICAgICAgICBpZiAoa2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuVVAgfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuVykge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkRPV04gfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuUykge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LlJJR0hUIHx8IGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkQpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5MRUZUIHx8IGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkEpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5IC0gbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZW50aXRpZXMuaGFzKG5ld0VudGl0eSkpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZWQgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3NlbGVjdGVkJywgbmV3RW50aXR5KTtcbiAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhzZWxlY3RlZEVudGl0eSkuZ2V0KENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKG5ld0VudGl0eSkuZ2V0KENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IFVwZGF0ZVNlbGVjdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVwZGF0ZVBsYXllclR1cm4gPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgVXBkYXRlUGxheWVyVHVybiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3BsYXllciB0dXJuJywgdHJ1ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVQbGF5ZXJUdXJuID0gVXBkYXRlUGxheWVyVHVybjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TID0gdm9pZCAwO1xuY29uc3QgRW5lbXlBSV8xID0gcmVxdWlyZShcIi4vRW5lbXlBSVwiKTtcbmNvbnN0IFBsYXllckNvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4vUGxheWVyQ29sbGlzaW9uXCIpO1xuY29uc3QgUGxheWVyTW92ZW1lbnRfMSA9IHJlcXVpcmUoXCIuL1BsYXllck1vdmVtZW50XCIpO1xuY29uc3QgUG9ydGFsU3lzdGVtXzEgPSByZXF1aXJlKFwiLi9Qb3J0YWxTeXN0ZW1cIik7XG5jb25zdCBSZW5kZXJMZXZlbF8xID0gcmVxdWlyZShcIi4vUmVuZGVyTGV2ZWxcIik7XG5jb25zdCBSZW5kZXJTdGFtaW5hXzEgPSByZXF1aXJlKFwiLi9SZW5kZXJTdGFtaW5hXCIpO1xuY29uc3QgUmVuZGVyU3lzdGVtXzEgPSByZXF1aXJlKFwiLi9SZW5kZXJTeXN0ZW1cIik7XG5jb25zdCBVcGRhdGVQbGF5ZXJUdXJuXzEgPSByZXF1aXJlKFwiLi9VcGRhdGVQbGF5ZXJUdXJuXCIpO1xuLy8gU3lzdGVtc1xuZXhwb3J0cy5TID0ge1xuICAgIEVuZW15QUk6IEVuZW15QUlfMS5FbmVteUFJLFxuICAgIFBsYXllckNvbGxpc2lvbjogUGxheWVyQ29sbGlzaW9uXzEuUGxheWVyQ29sbGlzaW9uLFxuICAgIFBsYXllck1vdmVtZW50OiBQbGF5ZXJNb3ZlbWVudF8xLlBsYXllck1vdmVtZW50LFxuICAgIFBvcnRhbFN5c3RlbTogUG9ydGFsU3lzdGVtXzEuUG9ydGFsU3lzdGVtLFxuICAgIFJlbmRlclN5c3RlbTogUmVuZGVyU3lzdGVtXzEuUmVuZGVyU3lzdGVtLFxuICAgIFVwZGF0ZVBsYXllclR1cm46IFVwZGF0ZVBsYXllclR1cm5fMS5VcGRhdGVQbGF5ZXJUdXJuLFxuICAgIFJlbmRlclN0YW1pbmE6IFJlbmRlclN0YW1pbmFfMS5SZW5kZXJTdGFtaW5hLFxuICAgIFJlbmRlckxldmVsOiBSZW5kZXJMZXZlbF8xLlJlbmRlckxldmVsXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlV0aWxpdHkgPSBleHBvcnRzLkNvbW1vbkNvbXBvbmVudHMgPSBleHBvcnRzLktleSA9IGV4cG9ydHMuRUNTU2NlbmUgPSBleHBvcnRzLlNjZW5lID0gZXhwb3J0cy5TeXN0ZW0gPSBleHBvcnRzLkNvbXBvbmVudCA9IGV4cG9ydHMuRW5naW5lID0gdm9pZCAwO1xudmFyIEVuZ2luZV8xID0gcmVxdWlyZShcIi4vc3JjL0VuZ2luZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVuZ2luZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRW5naW5lXzEuRW5naW5lOyB9IH0pO1xudmFyIENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vc3JjL0NvbXBvbmVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbXBvbmVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ29tcG9uZW50XzEuQ29tcG9uZW50OyB9IH0pO1xudmFyIFN5c3RlbV8xID0gcmVxdWlyZShcIi4vc3JjL1N5c3RlbVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN5c3RlbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3lzdGVtXzEuU3lzdGVtOyB9IH0pO1xudmFyIFNjZW5lXzEgPSByZXF1aXJlKFwiLi9zcmMvU2NlbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTY2VuZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2NlbmVfMS5TY2VuZTsgfSB9KTtcbnZhciBFQ1NTY2VuZV8xID0gcmVxdWlyZShcIi4vc3JjL0VDU1NjZW5lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRUNTU2NlbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVDU1NjZW5lXzEuRUNTU2NlbmU7IH0gfSk7XG52YXIgS2V5XzEgPSByZXF1aXJlKFwiLi9zcmMvS2V5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiS2V5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBLZXlfMS5LZXk7IH0gfSk7XG5jb25zdCBQb3NpdGlvbjJkXzEgPSByZXF1aXJlKFwiLi9zcmMvQ29tcG9uZW50cy9Qb3NpdGlvbjJkXCIpO1xuZXhwb3J0cy5Db21tb25Db21wb25lbnRzID0ge1xuICAgIFBvc2l0aW9uMmQ6IFBvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkXG59O1xuY29uc3QgR3JpZENvbGxpc2lvbnNfMSA9IHJlcXVpcmUoXCIuL3NyYy9VdGlsaXR5L0dyaWRDb2xsaXNpb25zXCIpO1xuZXhwb3J0cy5VdGlsaXR5ID0ge1xuICAgIEdyaWRDb2xsaXNpb25zOiBHcmlkQ29sbGlzaW9uc18xLkdyaWRDb2xsaXNpb25zXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBvbmVudENvbnRhaW5lciA9IGV4cG9ydHMuQ29tcG9uZW50ID0gdm9pZCAwO1xuY2xhc3MgQ29tcG9uZW50IHtcbn1cbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuY2xhc3MgQ29tcG9uZW50Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0KGNvbXBvbmVudC5jb25zdHJ1Y3RvciwgY29tcG9uZW50KTtcbiAgICB9XG4gICAgZ2V0KGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgICBoYXMoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICAgIGhhc0FsbChjb21wb25lbnRDbGFzc2VzKSB7XG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjb21wb25lbnRDbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFwLmhhcyhjbHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkZWxldGUoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5tYXAuZGVsZXRlKGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbXBvbmVudENvbnRhaW5lciA9IENvbXBvbmVudENvbnRhaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3NpdGlvbjJkID0gdm9pZCAwO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgUG9zaXRpb24yZCBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbGRYID0geDtcbiAgICAgICAgdGhpcy5vbGRZID0geTtcbiAgICB9XG4gICAgZXF1YWxzKG90aGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnggPT0gb3RoZXIueCAmJiB0aGlzLnkgPT0gb3RoZXIueTtcbiAgICB9XG4gICAgLy8gQ2FudG9yIHBhaXJpbmcgZnVuY3Rpb25cbiAgICBoYXNoKCkge1xuICAgICAgICByZXR1cm4gKCh0aGlzLnggKyB0aGlzLnkpICogKHRoaXMueCArIHRoaXMueSArIDEpIC8gMikgKyB0aGlzLnk7XG4gICAgfVxuICAgIC8vIENhbnRvciBwYWlyaW5nIGZ1bmN0aW9uXG4gICAgb2xkSGFzaCgpIHtcbiAgICAgICAgcmV0dXJuICgodGhpcy5vbGRYICsgdGhpcy5vbGRZKSAqICh0aGlzLm9sZFggKyB0aGlzLm9sZFkgKyAxKSAvIDIpICsgdGhpcy5vbGRZO1xuICAgIH1cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkO1xuICAgIH1cbiAgICBzZXQoeCwgeSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBzZXRQb3MocG9zKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMueCA9IHBvcy54O1xuICAgICAgICB0aGlzLnkgPSBwb3MueTtcbiAgICB9XG4gICAgc2V0WCh4KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgfVxuICAgIHNldFkoeSkge1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICBnZXRYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy54O1xuICAgIH1cbiAgICBnZXRZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55O1xuICAgIH1cbiAgICBhY2NlcHRDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9sZFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMub2xkWSA9IHRoaXMueTtcbiAgICB9XG4gICAgcmVqZWN0Q2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5vbGRYO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLm9sZFk7XG4gICAgfVxuICAgIGV1Y2xpZGVhbkRpc3RhbmNlKHBvcykge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5wb3codGhpcy54IC0gcG9zLngsIDIpO1xuICAgICAgICBjb25zdCB5ID0gTWF0aC5wb3codGhpcy55IC0gcG9zLnksIDIpO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKyB5KTtcbiAgICB9XG4gICAgYWRkKHBvcykge1xuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uMmQodGhpcy54ICsgcG9zLngsIHRoaXMueSArIHBvcy55KTtcbiAgICB9XG59XG5leHBvcnRzLlBvc2l0aW9uMmQgPSBQb3NpdGlvbjJkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVDU1NjZW5lID0gdm9pZCAwO1xuY29uc3QgU2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lXCIpO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9Db21wb25lbnRcIik7XG4vLyBodHRwczovL21heHdlbGxmb3JiZXMuY29tL3Bvc3RzL3R5cGVzY3JpcHQtZWNzLWltcGxlbWVudGF0aW9uLyBpcyB3aGF0IHRoaXNcbi8vIGltcGxlbWVudGF0aW9uIGlzIGJhc2VkIG9mZiBvZi5cbmNsYXNzIEVDU1NjZW5lIGV4dGVuZHMgU2NlbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8vIE1haW4gc3RhdGVcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvU3lzdGVtID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByaW9yaXRpZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBCb29ra2VlcGluZyBmb3IgZW50aXRpZXMuXG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEID0gMDtcbiAgICAgICAgdGhpcy5lbnRpdGllc1RvRGVzdHJveSA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IHJldHVybiAtMS4gQW55IG90aGVyIG51bWJlcnMgd2lsbCB0ZWxsIHRoZSBnYW1lIGVuZ2luZSB0byBjaGFuZ2VcbiAgICAgKiB0aGUgc2NlbmUgdG8gd2hhdGV2ZXIgaW5kZXggaXMgcmV0dXJuZWQuXG4gICAgICogQHBhcmFtIGNhbnZhc1xuICAgICAqIEBwYXJhbSBrZXlQcmVzc2VzXG4gICAgICovXG4gICAgdXBkYXRlKGVuZ2luZSkge1xuICAgICAgICAvLyBVcGRhdGUgYWxsIHN5c3RlbXMuIChMYXRlciwgd2UnbGwgYWRkIGEgd2F5IHRvIHNwZWNpZnkgdGhlXG4gICAgICAgIC8vIHVwZGF0ZSBvcmRlci4pXG4gICAgICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHRoaXMucHJpb3JpdGllcykge1xuICAgICAgICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5wcmlvcml0eVRvU3lzdGVtLmdldChwcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpO1xuICAgICAgICAgICAgc3lzdGVtLnVwZGF0ZShlbmdpbmUsIGNvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBhbnkgZW50aXRpZXMgdGhhdCB3ZXJlIG1hcmtlZCBmb3IgZGVsZXRpb24gZHVyaW5nIHRoZVxuICAgICAgICAvLyB1cGRhdGUuXG4gICAgICAgIHdoaWxlICh0aGlzLmVudGl0aWVzVG9EZXN0cm95Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveUVudGl0eSh0aGlzLmVudGl0aWVzVG9EZXN0cm95LnBvcCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jdXN0b21VcGRhdGUoZW5naW5lKTtcbiAgICB9XG4gICAgLy8gQVBJOiBFbnRpdGllc1xuICAgIGFkZEVudGl0eSgpIHtcbiAgICAgICAgbGV0IGVudGl0eSA9IHRoaXMubmV4dEVudGl0eUlEO1xuICAgICAgICB0aGlzLm5leHRFbnRpdHlJRCsrO1xuICAgICAgICB0aGlzLmVudGl0aWVzLnNldChlbnRpdHksIG5ldyBDb21wb25lbnRfMS5Db21wb25lbnRDb250YWluZXIoKSk7XG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1hcmtzIGBlbnRpdHlgIGZvciByZW1vdmFsLiBUaGUgYWN0dWFsIHJlbW92YWwgaGFwcGVucyBhdCB0aGUgZW5kXG4gICAgICogb2YgdGhlIG5leHQgYHVwZGF0ZSgpYC4gVGhpcyB3YXkgd2UgYXZvaWQgc3VidGxlIGJ1Z3Mgd2hlcmUgYW5cbiAgICAgKiBFbnRpdHkgaXMgcmVtb3ZlZCBtaWQtYHVwZGF0ZSgpYCwgd2l0aCBzb21lIFN5c3RlbXMgc2VlaW5nIGl0IGFuZFxuICAgICAqIG90aGVycyBub3QuXG4gICAgICovXG4gICAgcmVtb3ZlRW50aXR5KGVudGl0eSkge1xuICAgICAgICB0aGlzLmVudGl0aWVzVG9EZXN0cm95LnB1c2goZW50aXR5KTtcbiAgICB9XG4gICAgYWRkQ29tcG9uZW50KGVudGl0eSwgY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuZ2V0KGVudGl0eSkuYWRkKGNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY2hlY2tFKGVudGl0eSk7XG4gICAgfVxuICAgIGdldENvbXBvbmVudHMoZW50aXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0aWVzLmdldChlbnRpdHkpO1xuICAgIH1cbiAgICByZW1vdmVDb21wb25lbnQoZW50aXR5LCBjb21wb25lbnRDbGFzcykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIChfYSA9IHRoaXMuZW50aXRpZXMuZ2V0KGVudGl0eSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWxldGUoY29tcG9uZW50Q2xhc3MpO1xuICAgICAgICB0aGlzLmNoZWNrRShlbnRpdHkpO1xuICAgIH1cbiAgICBzZXRCQihrZXksIHZhbCkge1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQuc2V0KGtleSwgdmFsKTtcbiAgICB9XG4gICAgZ2V0QkIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsYWNrQm9hcmQuZ2V0KGtleSk7XG4gICAgfVxuICAgIC8vIEFQSTogU3lzdGVtc1xuICAgIC8qKlxuICAgICAqIEFkZCBhIHN5c3RlbSB3aGVyZSB0aGUgcHJpb3JpdHkgZGVmaW5lcyBpbiB3aGF0IG9yZGVyIGl0IHdpbGwgYmUgcnVuIHdoZW5cbiAgICAgKiBjb21wYXJlZCB0byBvdGhlciBzeXN0ZW1zXG4gICAgICogQHBhcmFtIHByaW9yaXR5IC0gbG93ZXIgdmFsdWUgaXMgcnVuIGZpcnN0XG4gICAgICogQHBhcmFtIHN5c3RlbVxuICAgICAqL1xuICAgIGFkZFN5c3RlbShwcmlvcml0eSwgc3lzdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLnByaW9yaXRpZXMuaW5jbHVkZXMocHJpb3JpdHkpKSB7XG4gICAgICAgICAgICBhbGVydCgnRmF0YWwgZXJyb3IuIENoZWNrIHRoZSBjb25zb2xlLicpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtzeXN0ZW19IGNhbiBub3QgYmUgdXNlZCBzaW5jZSBwcmlvcml0eSAke3ByaW9yaXR5fSBhbHJlYWR5IGluIHVzZS5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBHaXZlIHN5c3RlbSBhIHJlZmVyZW5jZSB0byB0aGUgRUNTIHNvIGl0IGNhbiBhY3R1YWxseSBkb1xuICAgICAgICAvLyBhbnl0aGluZy5cbiAgICAgICAgc3lzdGVtLmVjcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbS5zZXQocHJpb3JpdHksIHN5c3RlbSk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuc2V0KHByaW9yaXR5LCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLnByaW9yaXRpZXMucHVzaChwcmlvcml0eSk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5zb3J0KCk7XG4gICAgICAgIC8vIFNhdmUgc3lzdGVtIGFuZCBzZXQgd2hvIGl0IHNob3VsZCB0cmFjayBpbW1lZGlhdGVseS5cbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMua2V5cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRVMoZW50aXR5LCBwcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLm5leHRFbnRpdHlJRCA9IDA7XG4gICAgfVxuICAgIGRlc3Ryb3lFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgdGhpcy5wcmlvcml0aWVzKSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAVE9ETzogY2FuIEkgcmVtb3ZlIHRoaXM/XG4gICAgY2hlY2tFKGVudGl0eSkge1xuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJIHRoaW5rIHRoaXMgY2FuIGJlIHJlbW92ZWQgYnV0IEknbSBnb2luZyB0byBsZWF2ZSBpdCBpbiBmb3Igbm93LlxuICAgICAqIEBwYXJhbSBlbnRpdHlcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBoYXZlID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KTtcbiAgICAgICAgbGV0IG5lZWQgPSB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uZ2V0KHByaW9yaXR5KS5jb21wb25lbnRzUmVxdWlyZWQ7XG4gICAgICAgIGlmIChoYXZlLmhhc0FsbChuZWVkKSkge1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGluIHN5c3RlbVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpLmFkZChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBpbiBzeXN0ZW1cbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KS5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRUNTU2NlbmUgPSBFQ1NTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmdpbmUgPSB2b2lkIDA7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuL0tleVwiKTtcbmNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NlbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMua2V5RG93biA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5rZXlQcmVzcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5jbGVhckJhY2tncm91bmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3BsYXlGUFMgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSk7XG4gICAgICAgICAgICBpZiAoayA9PSBLZXlfMS5LZXkuRE9XTiB8fCBrID09IEtleV8xLktleS5VUCB8fCBrID09IEtleV8xLktleS5MRUZUIHx8IGsgPT0gS2V5XzEuS2V5LlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmtleURvd24uaGFzKGspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duLmFkZChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5rZXlEb3duLmRlbGV0ZShrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleVByZXNzLmFkZCgoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgfVxuICAgIDtcbiAgICBzZXRCQihrZXksIHZhbCkge1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQuc2V0KGtleSwgdmFsKTtcbiAgICB9XG4gICAgZ2V0QkIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsYWNrQm9hcmQuZ2V0KGtleSk7XG4gICAgfVxuICAgIGFkZFNjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmVzLnB1c2goc2NlbmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBvbGRUaW1lU3RhbXA7XG4gICAgICAgIGxldCBmcHM7XG4gICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FbnRlcih0aGlzKTtcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9ICh0aW1lU3RhbXAgLSBvbGRUaW1lU3RhbXApIC8gMTAwMDtcbiAgICAgICAgICAgIG9sZFRpbWVTdGFtcCA9IHRpbWVTdGFtcDtcbiAgICAgICAgICAgIGZwcyA9IE1hdGgucm91bmQoMSAvIHRoaXMuZGVsdGEpO1xuICAgICAgICAgICAgLy8gcmVzZXQgYmFja2dyb3VuZFxuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJCYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBnYW1lIGVuZ2luZSBvcGVyYXRpb25zXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gRHJhdyBGUFNcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3BsYXlGUFMgJiYgdGhpcy5jbGVhckJhY2tncm91bmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiRlBTOiBcIiArIGZwcywgdGhpcy53aWR0aCAtIDYwLCAzMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0udXBkYXRlKHRoaXMpO1xuICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FeGl0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FbnRlcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleVByZXNzLmNsZWFyKCk7XG4gICAgfVxuICAgIHNldENvb2tpZShuYW1lLCB2YWwpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArICgzMSAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsICsgXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCkgKyBcIjsgcGF0aD0vXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgY29va2llISEhISEnKTtcbiAgICB9XG4gICAgZ2V0Q29va2llKG5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBcIjsgXCIgKyBkb2N1bWVudC5jb29raWU7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoXCI7IFwiICsgbmFtZSArIFwiPVwiKTtcbiAgICAgICAgaWYgKHBhcnRzICE9IHVuZGVmaW5lZCAmJiBwYXJ0cy5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KFwiO1wiKS5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuZXhwb3J0cy5FbmdpbmUgPSBFbmdpbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5Q29kZVRvS2V5ID0gZXhwb3J0cy5LZXkgPSB2b2lkIDA7XG52YXIgS2V5O1xuKGZ1bmN0aW9uIChLZXkpIHtcbiAgICBLZXlbS2V5W1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgS2V5W0tleVtcIlJJR0hUXCJdID0gMV0gPSBcIlJJR0hUXCI7XG4gICAgS2V5W0tleVtcIkRPV05cIl0gPSAyXSA9IFwiRE9XTlwiO1xuICAgIEtleVtLZXlbXCJVUFwiXSA9IDNdID0gXCJVUFwiO1xuICAgIEtleVtLZXlbXCJXXCJdID0gNF0gPSBcIldcIjtcbiAgICBLZXlbS2V5W1wiQVwiXSA9IDVdID0gXCJBXCI7XG4gICAgS2V5W0tleVtcIlNcIl0gPSA2XSA9IFwiU1wiO1xuICAgIEtleVtLZXlbXCJEXCJdID0gN10gPSBcIkRcIjtcbiAgICBLZXlbS2V5W1wiUVwiXSA9IDhdID0gXCJRXCI7XG4gICAgS2V5W0tleVtcIlJcIl0gPSA5XSA9IFwiUlwiO1xuICAgIEtleVtLZXlbXCJTUEFDRVwiXSA9IDEwXSA9IFwiU1BBQ0VcIjtcbiAgICBLZXlbS2V5W1wiRVNDQVBFXCJdID0gMTFdID0gXCJFU0NBUEVcIjtcbiAgICBLZXlbS2V5W1wiRU5URVJcIl0gPSAxMl0gPSBcIkVOVEVSXCI7XG4gICAgS2V5W0tleVtcIklOVkFMSURcIl0gPSAxM10gPSBcIklOVkFMSURcIjtcbn0pKEtleSA9IGV4cG9ydHMuS2V5IHx8IChleHBvcnRzLktleSA9IHt9KSk7XG5mdW5jdGlvbiBrZXlDb2RlVG9LZXkoa2V5KSB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnRG93bic6XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkRPV047XG4gICAgICAgIGNhc2UgJ1VwJzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlVQO1xuICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5SSUdIVDtcbiAgICAgICAgY2FzZSAnTGVmdCc6XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkxFRlQ7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlNQQUNFO1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5FU0NBUEU7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5BO1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUztcbiAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkQ7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5XO1xuICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUjtcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlE7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRU5URVI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVuaGFuZGxlZCBrZXk6ICR7a2V5fS5gKTtcbiAgICAgICAgICAgIHJldHVybiBLZXkuSU5WQUxJRDtcbiAgICB9XG59XG5leHBvcnRzLmtleUNvZGVUb0tleSA9IGtleUNvZGVUb0tleTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2VuZSA9IHZvaWQgMDtcbmNsYXNzIFNjZW5lIHtcbn1cbmV4cG9ydHMuU2NlbmUgPSBTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeXN0ZW0gPSB2b2lkIDA7XG5jbGFzcyBTeXN0ZW0ge1xufVxuZXhwb3J0cy5TeXN0ZW0gPSBTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR3JpZENvbGxpc2lvbnMgPSB2b2lkIDA7XG5jbGFzcyBHcmlkQ29sbGlzaW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgZ2V0KHBvcykge1xuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLmdldChwb3MuaGFzaCgpKTtcbiAgICB9XG4gICAgc2V0KHBvcywgdmFsKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBwb3MuaGFzaCgpO1xuICAgICAgICBpZiAodGhpcy5ncmlkLmhhcyhoYXNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ3JpZC5zZXQoaGFzaCwgdmFsKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJlbW92ZShwb3MsIHVzZU5ldykge1xuICAgICAgICBpZiAodXNlTmV3KSB7XG4gICAgICAgICAgICB0aGlzLmdyaWQuZGVsZXRlKHBvcy5oYXNoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZShwb3Mub2xkSGFzaCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY2NlcHRDaGFuZ2UocG9zLCB2YWwpIHtcbiAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZShwb3Mub2xkSGFzaCgpKTtcbiAgICAgICAgcG9zLmFjY2VwdENoYW5nZSgpO1xuICAgICAgICB0aGlzLmdyaWQuc2V0KHBvcy5oYXNoKCksIHZhbCk7XG4gICAgfVxufVxuZXhwb3J0cy5HcmlkQ29sbGlzaW9ucyA9IEdyaWRDb2xsaXNpb25zO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxFVkVMUyA9IHZvaWQgMDtcbmV4cG9ydHMuTEVWRUxTID0geyBcIjExXzRcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS0tLS1YLS1cIiwgXCItLS8vLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLVgjKi0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tLVhYLS1YLS1cIiwgXCItLSYtLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiM185XCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tLSYtLS0tLVwiLCBcIi0tLS0tLS0tLS0jLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzBcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tJi0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXi0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tXl5eXi0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS1eXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tXl4tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0mLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOV8yXCI6IFtcIkAtLS0tLS0tLS0tXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0jLS0jLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tWC0tWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLV5eXl5eXi1PXCJdLCBcIjFfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLS0tLS0tLSYtLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLSotLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMV8xM1wiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWC0tI1hYWFgtLVwiLCBcIi0tLS0tLVhYWFgtLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSotLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI5XzNcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS1YLS0tLy9cXFxcLS1cIiwgXCItLVxcXFwvLy0tLS0tWC0tLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTVfMVwiOiBbXCJALS1eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLSotLVwiLCBcIi0tLV5eLS0tLS1YLS0tLS0tLS1cIiwgXCItLS1eXi0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLV5eLS0tWCMqLS0tLS0mLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tXl4tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLV5eLS0tLS1YLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxN18zXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSNYLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS1YWC0tLS1YLS1eLS0tLVgtLVwiLCBcIi0tWC0tLS1YWC0tXi0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLV4tLVhYWC0tXCIsIFwiLS0tLS0tWCMqLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYWC0tJi0tWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjNfOFwiOiBbXCJALVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS1YWC0tLVhYWC0tLS1cIiwgXCItLVhYLSMtWFgtIy1YWFgtLS0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tKlhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLS0tLS0tLSYtLS0tT1wiXSwgXCIxMV81XCI6IFtcIkAtWFhYLS1eXl5eXl5eXl5eLS1cIiwgXCItLSNYWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWC0tXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYLS0jWFhYLS1cIiwgXCItLS0mLS0tWFhYWC0tLVhYWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tKi0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfNVwiOiBbXCJALVhYWC0tXl5eXl5eXl5eXi0tXCIsIFwiLS0jWFgtLS0tLS0tLS0qI1gtLVwiLCBcIi0tLVhYLS0tLS0tWC0tWFhYLS1cIiwgXCItLS1YWC0tLS0tWFgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tWFhYLS1YLS0tLVwiLCBcIi0tLS0tLS0tLVgjKi0tWC0tLS1cIiwgXCItLS0tLS0tLS1YWFgtLVgtLS0tXCIsIFwiLS0tWFgtLS0tLVhYLS1YLS0tLVwiLCBcIi0tLVhYLS0tLS0tWC0tWC0tLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLV5eXl5eXl5eXl4tT1wiXSwgXCIzXzE0XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0jWFhYWC0tI1hYWC0tXCIsIFwiLS0tLS0tLVhYWFgtLS1YWFgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLSotLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjFfOFwiOiBbXCJALVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tKlhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLSYtLS0tLS0tLS0tT1wiXSwgXCIxMV83XCI6IFtcIkAtXl5eXl5eXl5eXi0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tWC0tLS1YWFgtLVwiLCBcIi0tWFhYLS0tWFgtLS0tWFhYLS1cIiwgXCItLVgqWC0tWFhYLS0tLVhYLS0tXCIsIFwiLS1YJi0tLVgjKi0tLS1YWC0tLVwiLCBcIi0tWCpYLS1YWFgtLS0tLS0tLS1cIiwgXCItLVhYWC0tLVhYLS0tLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWC0tLS1YWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tWFhYLS1cIiwgXCItLV5eXl5eXl5eXl4tLVhYWC1PXCJdLCBcIjE1XzNcIjogW1wiQC0tLV5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tXi0tLS0tLS1cIiwgXCItLS0tLS0tLVgtLV4tLS0tWC0tXCIsIFwiLS0tLS0tLVhYLS1eLS0tWFgtLVwiLCBcIi0tLS0tLVhYWC0tXi0tWFhYLS1cIiwgXCItLS0tLS1YIyotLS0tLVgjKi0tXCIsIFwiLS0tLS0tWFhYLS0mLS1YWFgtLVwiLCBcIi0tLS0tLS1YWC0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLVgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS1eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMV8xMVwiOiBbXCJALVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tKlhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLSYtLS0tJi0tLS0tT1wiXSwgXCI5XzFcIjogW1wiQC0tLS0tLS0tLS1eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLSMtLSMtLS0tLVgtIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tWC0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tXl5eXl5eLU9cIl0sIFwiOV8wXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS1eXl5eXi0tXCIsIFwiLS0tLS0jLS0tLS0tLS0tJi0tLVwiLCBcIi0tLS0tLS0tLS0tLV5eXl5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLV5eXi0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSotLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTBcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tJi0tWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiMTVfMlwiOiBbXCJALS1eXl4tLV5eXl5eXl5eXi0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tKiMtLVwiLCBcIi0tLV5eXi0tLS0tLVgtLVhYLS1cIiwgXCItLS1eXl4tLS0tLVhYLS1YWC0tXCIsIFwiLS0tLSotLS0tLVhYWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS1YIyotLVgtLS1cIiwgXCItLS0tJi0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tXl5eLS0tLS1YWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS0tLVgtLVgtLS1cIiwgXCItLS1eXl4tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl5eLS1eXl5eXl5eXl4tT1wiXSwgXCIxMV82XCI6IFtcIkAtXl5eXl5eXl5eXi0tWFhYLS1cIiwgXCItLS0tLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0jWC0jWC0jWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tWFgtLS1cIiwgXCItLV5eXl5eXl5eXl4tLVhYWC1PXCJdLCBcIjFfOVwiOiBbXCJALVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWFhYLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tKlhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLVhYLS0tXCIsIFwiLS0jLS0tLSYtLS0tLS1YWC0tT1wiXSwgXCIzXzE1XCI6IFtcIkAtLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0jWFhYWC0tI1hYWC0tXCIsIFwiLS0tLS0tLVhYWFgtLS1YWFgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLSotLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEzXzRcIjogW1wiQC0tXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl4tLVgtLVgtLS0tWFgtLVwiLCBcIi0tLS0tLS1YLS1YXi0tLVgqLS1cIiwgXCItLS1eXi0tWFhYWF5eLS1YJi0tXCIsIFwiLS0tLS0tLVgtLVheLS0tWCotLVwiLCBcIi0tLV5eLS1YLS1YLS0tLVhYLS1cIiwgXCItLS1eXi0tLS0tLy9cXFxcXFxcXC8vXFxcXC0tXCIsIFwiLS0tXl4tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8tLVwiLCBcIi0tLV5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiM18xMVwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0jWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxM18wXCI6IFtcIkAtLS0tXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0jLS0tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLV5eXl5eXl5eXl5eXi1PXCJdLCBcIjExXzJcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tWFhYLS1cIiwgXCItLS0tLSMtLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLSYtLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTdfNFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tI1gtI1gtI1gtI1gtI1gtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI1XzlcIjogW1wiQC0tLS1eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0qLS0tI1hYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0jLS0tLSotLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tXi0tWFhYWFhYWFhYLU9cIl0sIFwiMV8xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFhYWC0tJi0tLVwiLCBcIi0tLS0tLS1YWFhYWFgtLS0tLS1cIiwgXCItLS0tLS0tLSotLS0tLS0tLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI5XzRcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tWC0tWF4tLS1YLS1cIiwgXCItLS0tLS0tLVhYWFheXi0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YXi0tLVgtLVwiLCBcIi0tLS0tLS0tWC0tWC0tLS1YLS1cIiwgXCItLSYtLS0tLS0tLS8vXFxcXFxcXFwvLy0tXCIsIFwiLS0tLS0tLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwtLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTVfNlwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWC0tWC0tWC0tLS1YWC0tXCIsIFwiLS1YKlgtLVgtLVheLS0tWCotLVwiLCBcIi0tWCYtLS1YWFhYXl4tLVgmLS1cIiwgXCItLVgqWC0tWC0tWF4tLS1YKi0tXCIsIFwiLS1YWFgtLVgtLVgtLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0vL1xcXFxcXFxcLy9cXFxcLS1cIiwgXCItLVxcXFwvLy0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI5XzVcIjogW1wiQC0tLS0tLS0tXl5eXl5eXl4tLVwiLCBcIi0tL1xcXFxcXFxcLVgtLS0tLS0tLS0qLS1cIiwgXCItLVxcXFwvLy1YLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tWC0tLS0tWFgtLVgtLVwiLCBcIi0tJi0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLVhYWFhYLS0tLVgjKi0tWC0tXCIsIFwiLS0mLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tLVhYLS1YLS1cIiwgXCItLS9cXFxcXFxcXC1YLS0tLS0tWC0tWC0tXCIsIFwiLS1cXFxcLy8tWC0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLV5eXl5eXl5eLU9cIl0sIFwiMV8xNVwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWC0tI1hYWFgtLVwiLCBcIi0tLS1YWFhYWFgtLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSotLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI1XzhcIjogW1wiQC0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tLVhYWFhYWFhYLS1cIiwgXCItLS8vLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLS0tLS0jLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tIy0tLSMtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLSYtLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSotLVhYWFhYWFhYLU9cIl0sIFwiMTdfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tJi0tLVgjKi0tWCMqLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxMV8zXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS1YLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjEzXzFcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLSMtLS0tLVgjKi0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiM18xMFwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLSNYWFgtLVwiLCBcIi0tLS0tIy0tLS0mLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIzXzEyXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLSNYWFhYLS0qLS0tXCIsIFwiLS0tLS0tLS0tWFhYWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0qLS0tLS0jLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjEzXzNcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLSojLS1cIiwgXCItLS8vLS0tLS0tLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVgtLS1cIiwgXCItLS0tLS0tLS0tWCMqLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tWFgtLVgtLS1cIiwgXCItLSYtLS0tLS0tLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTFfMVwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSojLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tXi0tWFgtLVwiLCBcIi0tJi0tLS0tLS0tLV4tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS1eLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCI5XzdcIjogW1wiQC1YWFhYWC0tXl5eXl5eXl4tLVwiLCBcIi0tWFhYWFgtLS0tLS0tLS0qLS1cIiwgXCItLVhYWFhYLS0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWC0tLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS0tJi0tLS0tLVgjKi0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLVhYWFgtLS0tLVhYLS1YLS1cIiwgXCItLVhYWFhYLS0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFgtLV5eXl5eXl5eLU9cIl0sIFwiMV8xN1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0jWFhYWC0tLVwiLCBcIi0tWFhYWFhYWC0tLVhYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS0tKi0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxNV81XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSNYLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tLVgtLVgtLS0tWFhYLS1cIiwgXCItLS0tLS1YLS1YXi0tLVgqWC0tXCIsIFwiLS0tLS0tWFhYWF5eLS1YJi0tLVwiLCBcIi0tLS0tLVgtLVheLS0tWCpYLS1cIiwgXCItLS0tLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLy9cXFxcXFxcXC8vXFxcXFxcXFwtLVwiLCBcIi0tLS0tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8vLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjdfOFwiOiBbXCJALS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLSotLS0tLSotLS0qLS0tLVwiLCBcIi0tLV5eXi0tLS0tLS0tLS0tLS1cIiwgXCItLS0tJi0tLS0tLSMtLS0jLS0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCI3XzlcIjogW1wiQC0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0qLS0tLS0qLS0tI1hYLS1cIiwgXCItLS1eXl4tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLSYtLS0tLS0jLS0tLSotLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiMTVfNFwiOiBbXCJALS0tXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSYtLVwiLCBcIi0tLS0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLS0tLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tLS0tLVgjKi0tWCMqLS1YLS1cIiwgXCItLS0tLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLV5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0jWFhYWC0tXCIsIFwiLS0tLSYtLVhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tLS1YWFgtLS0tKi0tLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjlfNlwiOiBbXCJALVhYWFhYLS1eXl5eXl5eXi0tXCIsIFwiLS0jWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0jWC0jLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWC0tXl5eXl5eXl4tT1wiXSwgXCIxMV8wXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjEzXzJcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLSMtLS0tLS0tWCMqLS1YIy0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiM18xM1wiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWC0tLS0tI1hYWFgtLVwiLCBcIi0tIy0tWFgtLS0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0qLS0tLSotLS0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCIxNF8zXCI6IFtcIkAtLS0tXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0jLS0tLS1YIyotLVgtI1gtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLV5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfMVwiOiBbXCJALS0tLS0tLS0tLS0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tIy0tIy0tLS0tLVgjLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLVgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tLV5eXl4tT1wiXSwgXCI3XzEwXCI6IFtcIkAtXl5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLSpYLS0tLS0tLS0tI1hYWC0tXCIsIFwiLS0mLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tKlgtLS0tLS0jLS0tLSotLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS0tWFhYWFhYWFhYLS1cIiwgXCItLV5eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjEwXzdcIjogW1wiQC1eXl5eXl5eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS1YWC0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tKlgtLVhYWC0tLS1YWFhYLS1cIiwgXCItLSYtLS1YIyotLS0tWFhYWC0tXCIsIFwiLS0qWC0tWFhYLS0tLVhYWFgtLVwiLCBcIi0tWFgtLS1YWC0tLS0tLVhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLVhYLS0tLVwiLCBcIi0tXl5eXl5eXl5eLS1YWFhYLU9cIl0sIFwiNV8xNVwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0qLS0tKi0tLVwiLCBcIi0tWFgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxMl81XCI6IFtcIkAtXl5eXl5eXl5eXl4tLVhYLS1cIiwgXCItLS0tLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0jWC0jWC0jWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tLVhYLS1cIiwgXCItLV5eXl5eXl5eXl5eLS1YWC1PXCJdLCBcIjBfOFwiOiBbXCJALS0tLS0jLS0tWC0tWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS0tLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tIy0tLSYtLVhYWFgtT1wiXSwgXCIwXzlcIjogW1wiQC0tLS0tIy0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS0tWFhYWFhYLS1cIiwgXCItLS8vLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS0tLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLSYtLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLSMtLS0tWFhYWFhYLU9cIl0sIFwiMTJfNFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLy8tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tWCMqLS1YLSNYLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tJi0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCI1XzE0XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEwXzZcIjogW1wiQC1YWFhYLS1eXl5eXl5eXl4tLVwiLCBcIi0tI1hYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWC0tXl5eXl5eXl5eLU9cIl0sIFwiN18xMVwiOiBbXCJALV5eXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLVhYWC0tLS1YWFhYWFhYWC0tXCIsIFwiLS1YKlgtLS0tLS0jWFhYWFgtLVwiLCBcIi0tWCYtLS0tLS0tLVhYWFhYLS1cIiwgXCItLVgqWC0tLS0tLS0tKi0tLS0tXCIsIFwiLS1YWFgtLS0tWFhYWFhYWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLS1YWFhYWFhYWC0tXCIsIFwiLS1eXl5eXi0tWFhYWFhYWFgtT1wiXSwgXCIwXzE4XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjhfMFwiOiBbXCJALS0tLS0tLS0tLS1eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLSYtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tXl5eXl4tT1wiXSwgXCIxNF8yXCI6IFtcIkAtLS0tXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0jLS0tLS0tLVgjKi0tWCMtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLV5eXl5eXl5eXl5eXi1PXCJdLCBcIjE0XzBcIjogW1wiQC0tXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS0tKi0tLS0qLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS1eXl4tLV5eLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLS0qLS0tLSotLVwiLCBcIi0tLV5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF8yXCI6IFtcIkAtLS0tLS0tLS0tXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS8vXFxcXC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1cXFxcXFxcXC8tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLV5eXl5eXi1PXCJdLCBcIjE2XzJcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLS0tLSotLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tLS1eXl4tLVwiLCBcIi0tLVgtLVgtLVgtLV5eXl5eLS1cIiwgXCItLSNYLSNYLSNYLS0tLS0mLS0tXCIsIFwiLS0tWC0tWC0tWC0tXl5eXl4tLVwiLCBcIi0tLVgtLVgtLVgtLS0tXl5eLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTBfNFwiOiBbXCJALS1YWC0tXl5eXl5eXl5eXi0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tWFgtLV5eXl5eXl5eXl4tT1wiXSwgXCI1XzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0jWFhYWC0tKi0tLSNYWC0tXCIsIFwiLS0tLVhYWFgtLS0tLS0tWFgtLVwiLCBcIi0tLS0tKi0tLS0tIy0tLS0qLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjJfOVwiOiBbXCJALVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLS0tLS1cIiwgXCItLVhYLS1YWFgtIy1YWFhYLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tKlhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLVhYLS0tXCIsIFwiLS0jLS0tLSYtLS0tLS1YWC0tT1wiXSwgXCIxMl82XCI6IFtcIkAtXl5eXl5eXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tWFgtLS1YWC0tLS1YWFhYLS1cIiwgXCItLSpYLS1YWFgtLS0tLS0qLS0tXCIsIFwiLS0mLS0tWCMqLS0tLS0tLS0tLVwiLCBcIi0tKlgtLVhYWC0tLS0tLS0jLS1cIiwgXCItLVhYLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tLy8tLS0tLS0tLS1YWFhYLS1cIiwgXCItLV5eXl5eXl5eXi0tWFhYWC1PXCJdLCBcIjJfOFwiOiBbXCJALVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0jLS0tXCIsIFwiLS1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tKlhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLSYtLS0tLS0tLS0tT1wiXSwgXCIxMF81XCI6IFtcIkAtWFhYLS0tXl5eXl5eXl5eLS1cIiwgXCItLSNYWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWC0tLV5eXl5eXl5eXi1PXCJdLCBcIjdfMTJcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVgtLVhYKiNYWCojWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgqI1hYLS1YWC0tWFgqIy0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTZfM1wiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLV5eLS0tLS0tWFgtLS1YWC0tXCIsIFwiLS1eXl5eLS0tWFhYLS1YWFgtLVwiLCBcIi0tLS0tLS0tLVgjKi0tWCMqLS1cIiwgXCItLV5eXl4tLS1YWFgtLVhYWC0tXCIsIFwiLS1eXi0tLS0tLVhYLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzNcIjogW1wiQC0tLS0tLS0tLVgtLV5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSojLS1cIiwgXCItLS0tLS0tLS0tWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS0tLSMtLVgjJi0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVhYLS0tLVgtLS1cIiwgXCItLVxcXFwvLy0tLS0tWC0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS1YLS1eXl5eLU9cIl0sIFwiMTRfMVwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tIy0tLS0tWCMqLS0tLS0mLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzdcIjogW1wiQC1YWFhYWFgtLV5eXl5eXl4tLVwiLCBcIi0tI1hYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLSYtLS0tLS0tWC0jWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYLS1eXl5eXl5eLU9cIl0sIFwiMTRfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tWF4tLS1YKlgtLVgtLVwiLCBcIi0tWFhYWFheXi0tWCYtLS1YLS1cIiwgXCItLS0tLS1YXi0tLVgqWC0tWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS8vXFxcXFxcXFwvL1xcXFxcXFxcLS1YLS1cIiwgXCItLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLy0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI2XzhcIjogW1wiQC0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tKi0tLS0tLS0tI1hYLS1cIiwgXCItLS0tXl5eLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0mLS0tLS0jLS0tLSotLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLU9cIl0sIFwiNV8xM1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS0tJi0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF8xXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YLSMtLVwiLCBcIi0tLS0tLS0tLS0mLS0tWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLVgtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjEyXzNcIjogW1wiQC0tLS0tLV5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLSojLS1cIiwgXCItLS8vLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLVhYLS0tWFgtLVwiLCBcIi0tLS0tLS0tLVhYWC0tLVgtLS1cIiwgXCItLS0tLS0tLS1YIyotLS1YLS0tXCIsIFwiLS0tLS0tLS0tWFhYLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YWC0tLVgtLS1cIiwgXCItLSYtLS0tLS0tLVgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS1eXl5eXl5eXl5eLU9cIl0sIFwiMTJfMlwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLy8tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tWCMqLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFgtLVgtLVwiLCBcIi0tJi0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMF8wXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tKi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLV5eLS1cIiwgXCItLS0tLS0tLS0tXi0tXl5eXi0tXCIsIFwiLS0tLS0jLS0tLS0tLS0tLSYtLVwiLCBcIi0tLS0tLS0tLS0mLS1eXl5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjVfMTJcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tI1hYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiNl85XCI6IFtcIkAtLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tKi0tLS0tLS0tI1hYWC0tXCIsIFwiLS0tXl5eLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0mLS0tLS0jLS0tLSotLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjE0XzRcIjogW1wiQC1eXl5eXl5eXl5eXl4tLVgtLVwiLCBcIi0tLS0tLVgtLS0tLS0tLS1YLS1cIiwgXCItLS1YLS1YLS0tLVgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tLVhYLS0tLVgtLVwiLCBcIi0tLVgtLVgtLVhYWC0tLS1YLS1cIiwgXCItLSNYLSNYLS1YIyotLS0tWC0tXCIsIFwiLS0tWC0tWC0tWFhYLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS1YWC0tLS1YLS1cIiwgXCItLS1YLS1YLS0tLVgtLS0tWC0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tXl5eXl5eXl5eXl5eLS0mLU9cIl0sIFwiOF82XCI6IFtcIkAtLS1eXl5eXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS1YWC0tLS1YWFhYLS1cIiwgXCItLS0tLS1YWFgtLS0tWFhYLS0tXCIsIFwiLS0tLS0tWCMqLS0tLVhYLS0tLVwiLCBcIi0tLS0tLVhYWC0tLS0tLS0tLS1cIiwgXCItLS0tLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tXl5eXl5eXi0tWFhYWC1PXCJdLCBcIjhfNFwiOiBbXCJALS0tLS0jLS0tLV5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLy8tLVhYLS0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWC0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS1YWC0tLS0tLVhYWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tWFgtLVwiLCBcIi0tJi0tLVhYLS0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tIy0tLS1eXl5eXl4tT1wiXSwgXCIxNl80XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS0tLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0jWC0jWC0jWC0jWC0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS0tLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLy0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLVxcXFwtLVwiLCBcIi0tLVgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjRfOVwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCI1XzEwXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjEwXzJcIjogW1wiQC0tLS0tLS0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tXi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tXi0tWFhYLS1cIiwgXCItLS0tLSMtLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS0mLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tLV5eXl5eXl5eLU9cIl0sIFwiMTJfMFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tIy0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMl8xXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tXi0tLVhYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0mLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjEwXzNcIjogW1wiQC0tLS0tLS0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLS0tLVgtLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tLV5eXl5eXl5eLU9cIl0sIFwiNV8xMVwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0qLS0tI1gtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzhcIjogW1wiQC1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tWFgtLS1YWFgtLS0tXCIsIFwiLS1YWC0jLVhYLSMtWFhYLSMtLVwiLCBcIi0tWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLSpYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0tLS0tLS0mLS0tLU9cIl0sIFwiMTZfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLVhYLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0qWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tJi0tLVgtI1gtI1gtI1gtLS1cIiwgXCItLSpYLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS1YWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tXFxcXFxcXFwtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzVcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFgtLV5eXl5eXl5eLS1cIiwgXCItLS0tLVhYLS0tLV5eXi0tLS0tXCIsIFwiLS0tLS1YWC0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0vL1xcXFxcXFxcLS1cIiwgXCItLSMtLS0tLS0tLS0tXFxcXFxcXFwvLy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tWFgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLVhYLS0tLV5eXi0tLS0tXCIsIFwiLS0tLS1YWC0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiOF84XCI6IFtcIkAtWFhYWFhYLS1eXl5eXl5eLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFgtLS0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYLS0tLS0tLVgtI1gtLVwiLCBcIi0tLSotLS0tLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWC0tXl5eXl5eXi1PXCJdLCBcIjZfN1wiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS0tLSotLS0tLV5eXl4tLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0tXl5eXi0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCIwXzEwXCI6IFtcIkAtLS0tLSMtLS1YWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLVhYWFgtLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLVhYWC0tXCIsIFwiLS0mLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0jLS0tWFhYWFhYWC1PXCJdLCBcIjRfNVwiOiBbXCJALS0tLS0tLSMtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tLS0tIy0tLS0tLS0tJiojLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tWFhYWFgtT1wiXSwgXCIyXzE1XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLSNYWFhYLS0tLS0tXCIsIFwiLS0tLS0mLS0tWFhYWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS0qLS0tLS1YLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjJfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tJi0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCIwXzFcIjogW1wiQC0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLVgtLS0tLS1cIiwgXCItLS8vLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0jLS0mLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLSYtLS1cIiwgXCItLSYtLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLSYtLS0tLU9cIl0sIFwiMF8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tIy0tJi0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjJfMlwiOiBbXCJALS0tLS0tLSMtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLSYtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tJi0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tLS0tLS0tT1wiXSwgXCIyXzE0XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFgtLS0tLSNYWFhYLS0tXCIsIFwiLS0tLVhYLS0tLS0tWFhYWC0tLVwiLCBcIi0tLS0tLS0tKi0tLS0qLS0tLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfNFwiOiBbXCJALS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS1YWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYKi0tXCIsIFwiLS0qLS0tLS0qLS0mLS1YWC0tT1wiXSwgXCIwXzExXCI6IFtcIkAtLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLSMtLVhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC1PXCJdLCBcIjZfNlwiOiBbXCJALS0tLS1YWFhYWC0tXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFgtLS0tKiMtLVwiLCBcIi0tLy8tLVhYWFhYLS0tLVhYLS1cIiwgXCItLS0tLS1YWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVgtLS1cIiwgXCItLS0tLS0tLSMtLS0tLS1YLS0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tWC0tLVwiLCBcIi0tJi0tLVhYWFhYLS0tLVgtLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFgtLV5eXl4tT1wiXSwgXCI4XzlcIjogW1wiQC1eXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tI1gtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0qLS0tI1hYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0jLS0tLSotLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXl5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiNl80XCI6IFtcIkAtLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tJi0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0tLS0tXCIsIFwiLS0tLS0jLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tXl5eLS0tLSMtLS1cIiwgXCItLS9cXFxcXFxcXC0tLV5eXi0tWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tKi0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLSotLS0tLV5eXi0tWFhYWC1PXCJdLCBcIjBfMTNcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNF82XCI6IFtcIkAtLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLSYtLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLSotLS0tLSotLVhYWFhYWC1PXCJdLCBcIjE4XzRcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSojLS1cIiwgXCItLS0tLS1YLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS1YWC0tLVhYLS0tWFgtLVwiLCBcIi0tLS1YWFgtLVhYWC0tLVgtLS1cIiwgXCItLS0tWCMqLS1YIyotLS1YLS0tXCIsIFwiLS0tLVhYWC0tWFhYLS0tWC0tLVwiLCBcIi0tLS0tWFgtLS1YWC0tLVgtLS1cIiwgXCItLS0tLS1YLS0tLVgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMl8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tI1hYWFgtLVwiLCBcIi0tLS0tWFhYWFgtLS1YWFhYLS1cIiwgXCItLS0tLVhYWFhYLS0tLSotLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLSYtLSYtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tLS0tLS0tLU9cIl0sIFwiMF8yXCI6IFtcIkAtLS0tLSMtLS0tLS0tLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLSYtLSYtLSYtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0mLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0tLS0tLS0tLS1PXCJdLCBcIjBfM1wiOiBbXCJALS0tLS0jLS0tWC0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLy8tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1YLS0mLS0mLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tIy0tLSYtLS0tLS0tT1wiXSwgXCIyXzFcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tJi0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0qLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tLS0tLU9cIl0sIFwiMl8xN1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYLS0jWFhYWC0tLVwiLCBcIi0tWFhYWFhYWC0tLVhYWFgtLS1cIiwgXCItLS0qLS0tLS0tLS0tKi0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxOF81XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS0mLS0tWCMqLS1YIyotLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjRfN1wiOiBbXCJALS0tLS1YWFhYWFgtLV5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLy8tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tJi0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYLS1eXl4tT1wiXSwgXCIwXzEyXCI6IFtcIkAtLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC1PXCJdLCBcIjZfNVwiOiBbXCJALS0tLS1YWFgtLV5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLy8tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YLSNYLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tJi0tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFhYLS1eXl5eXl4tT1wiXSwgXCI2XzFcIjogW1wiQC0tLS0tLS0tLS1YLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLSYtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tXl5eLU9cIl0sIFwiMF8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tJi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLV5eLU9cIl0sIFwiMl8xM1wiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLSMtLVhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzVcIjogW1wiQC0tLS0tLS0jLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLSMtLS0tLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLVgtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLSYtLU9cIl0sIFwiMF83XCI6IFtcIkAtLS0tLSMtLS1YLS1YWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0vLy0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YWC0tLS1cIiwgXCItLS0tLS0jLS0tJi0tWFhYWC1PXCJdLCBcIjBfNlwiOiBbXCJALS0tLS0jLS0tWC0tWC0tWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLy8tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tJi0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tIy0tLSYtLSYtLSYtT1wiXSwgXCIyXzRcIjogW1wiQC0tLS0tLS0jLS0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS1YLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiMl8xMlwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0jWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFgtLS1cIiwgXCItLS0tLS0tLSMtLS0tKi0tLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLV5eLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLV5eLU9cIl0sIFwiMF8xN1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI2XzBcIjogW1wiQC0tLS0tLS0tLS0tLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSYtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS0tXl5eLU9cIl0sIFwiNl8yXCI6IFtcIkAtLS0tLS0tLS0tWC0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLV5eXi1PXCJdLCBcIjBfMTVcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tIy0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0vLS1cIiwgXCItLSotLS0tLSotLS0tLS0tXFxcXC1PXCJdLCBcIjJfMTBcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYLS0tLS0tLS1cIiwgXCItLS0tLSMtLVhYWC0tJi0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiMl82XCI6IFtcIkAtLS0tLS0tIy0tLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLSotLS0tLSMtLS0mLS1YWC1PXCJdLCBcIjBfNFwiOiBbXCJALS0tLS0jLS0tWC0tWC0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLy8tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLSYtLVwiLCBcIi0tJi0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tIy0tLSYtLSYtLS0tT1wiXSwgXCIwXzVcIjogW1wiQC0tLS0tIy0tLVgtLVgtLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS0vLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tXFxcXC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0tLU9cIl0sIFwiMl83XCI6IFtcIkAtLS0tLS0tIy0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tLS0mLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLSotLS0tLSMtLS1YWFhYWC1PXCJdLCBcIjJfMTFcIjogW1wiQC1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtIy0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLSpYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLSYtLS0tLU9cIl0sIFwiNF8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tKi0tLS1cIiwgXCItLSotLS0tLSotLSYtLS0tLS1PXCJdLCBcIjBfMTRcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiNl8zXCI6IFtcIkAtLS0tLS0tLS1YLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS0tLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tWC0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS0tLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS0tWC0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0jLS1cIiwgXCItLSotLS0tLS0tWC0tLV5eXi1PXCJdLCBcIjFfMlwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0vL1xcXFwtLVwiLCBcIi0tLS0tLS0tLS0tWC0tXFxcXFxcXFwvLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tJi0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0mLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0tLS0tT1wiXSwgXCIzXzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tJi0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS0tLS0tLU9cIl0sIFwiNV82XCI6IFtcIkAtLS0tLVhYWFhYLS1eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWC0tLS0tKi0tXCIsIFwiLS0vLy0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0mLS0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLS1YWFhYWC0tXl5eXi1PXCJdLCBcIjZfMTJcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVgtLVhYLS1YWCojWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgqJlhYKiNYWC0tWFgqIy0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiN180XCI6IFtcIkAtLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0qLS0tLS0qLS0tXCIsIFwiLS0tLS0jLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLSYtLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLV5eXi0tWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLSotLS0tLV5eXi0tWFhYWC1PXCJdLCBcIjdfNVwiOiBbXCJALS0tLS1YWFgtLV5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLy8tLVhYWC0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tLS1YWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS1YWFgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLS0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tJi0tLVhYWC0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFhYLS1eXl5eXl4tT1wiXSwgXCI2XzEzXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0qLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjVfN1wiOiBbXCJALS0tLS1YWFhYWFgtLV5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLy8tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0jLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tJi0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYLS1eXl4tT1wiXSwgXCIzXzFcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tJi0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tLS0tLU9cIl0sIFwiMV8zXCI6IFtcIkAtLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0jLS0mLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLVgtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLSotLS0tLS0tLSYtLSYtLS1PXCJdLCBcIjRfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLSNYWFhYLS0tLS0jWFhYLS1cIiwgXCItLS0tWFhYWC0tLS0tLVhYWC0tXCIsIFwiLS0tLS0qLS0tLSotLS0tKi0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8xNFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0jWFgtLVwiLCBcIi0tLS0tJi0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzFcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSYtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tJi0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tLS0tLU9cIl0sIFwiM18zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLSotLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjVfNVwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tIy0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLSotLS0tLS1YLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCI5XzhcIjogW1wiQC1eXl5eXl5eLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS1YWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS1YWFgtLS0tLS0jWFhYLS1cIiwgXCItLS0tWCMqLS0tLS0tLVhYWC0tXCIsIFwiLS0tLVhYWC0tLS0tLS0tKi0tLVwiLCBcIi0tLS0tWFgtLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tXl5eXl5eXi0tWFhYWFhYLU9cIl0sIFwiNl8xMVwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0qLS0tKi0tLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI3XzdcIjogW1wiQC0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tKi0tLS0tKi0tLSotLS1cIiwgXCItLS0tXl5eLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0mLS0tLS0tIy0tLSMtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLU9cIl0sIFwiN182XCI6IFtcIkAtLS0tWFhYWFhYLS1eXl5eLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS0tKi0tLS0tLS1YWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWCMtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLVhYLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tXl5eXi1PXCJdLCBcIjZfMTBcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXi0tLS0tLS0tKi0tLSotLS1cIiwgXCItLV5eLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNV80XCI6IFtcIkAtLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tJi0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0tLS0tXCIsIFwiLS0tLS0jLS1eXl4tLS0tJi0tLVwiLCBcIi0tLS0tLS0tXl5eLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLV5eXi0tWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tKi0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLSotLS0tLV5eXi0tWFhYWC1PXCJdLCBcIjNfMlwiOiBbXCJALS0tLS0tLSMtLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLSYtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tLS0tXi0tT1wiXSwgXCIxXzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSYtLSYtLSYtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tLS0tLS0tLU9cIl0sIFwiNF8xNVwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0jWFhYWC0tLS0tI1gtLVwiLCBcIi0tLS0tLVhYWFgtLS0tLS1YLS1cIiwgXCItLS0tLS0tKi0tLS0qLS0tLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzExXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjFfNFwiOiBbXCJALS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tIy0tJi0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0qLS0tLS0tLS0mLS0tWFgtT1wiXSwgXCIzXzZcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLS0tJi0tJi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tKi0tWFhYWFhYLU9cIl0sIFwiNV8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tXi1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLSotLS0tLSotLS0tLV4tXi1PXCJdLCBcIjdfMlwiOiBbXCJALS0tLS0tLSMtLS1eXl5eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLSYtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tXl5eXl4tT1wiXSwgXCI3XzNcIjogW1wiQC0tLS0tLS0tLVgtLV5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tWC0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS0tLSMtLVgjJi0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVhYLS0tLVgtLS1cIiwgXCItLVxcXFwvLy0tLS0tWC0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tIy0tLVwiLCBcIi0tKi0tLS0tLS1YLS1eXl5eLU9cIl0sIFwiOF8xMFwiOiBbXCJALV5eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qWC0tLS0tLSotLS0jWFgtLVwiLCBcIi0tJi0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLSpYLS0tLS0tLSMtLS0tKi0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1eXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCI1XzFcIjogW1wiQC0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLSMtLSMtLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLV5eLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tLV5eLU9cIl0sIFwiM183XCI6IFtcIkAtLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YWC0tJi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLSotLS0tLSotLVhYWFhYWC1PXCJdLCBcIjFfNVwiOiBbXCJALS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tJi0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS1YWFgtT1wiXSwgXCI0XzEwXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0jWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjRfMTJcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tI1hYLS1cIiwgXCItLSMtLS0tLS0tLSYtLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tLSotLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMV83XCI6IFtcIkAtLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0jLS0mLS1YWFgtLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLVhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLSotLS0tLS0tLVhYWFhYWC1PXCJdLCBcIjNfNVwiOiBbXCJALS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tIy0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS1YWFgtT1wiXSwgXCI1XzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLV4tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tIy0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiN18xXCI6IFtcIkAtLS0tLS0tLS0tWC0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tIy0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS0tLS1PXCJdLCBcIjdfMFwiOiBbXCJALS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tLS0tLS0tT1wiXSwgXCI1XzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tIy0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLS0tLU9cIl0sIFwiM180XCI6IFtcIkAtLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLSotLS0tLSotLSYtLS1YWC1PXCJdLCBcIjFfNlwiOiBbXCJALS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tIy0tJi0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0qLS0tLS0tLS0tWFhYWFgtT1wiXSwgXCI0XzEzXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tI1hYWFgtLSNYWC0tXCIsIFwiLS0jLS0tLS1YWFhYLS0tWFgtLVwiLCBcIi0tLS0tLS0tLSotLS0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBTY2VuZXNfMSA9IHJlcXVpcmUoXCIuL1NjZW5lc1wiKTtcbmNvbnN0IGVuZ2luZSA9IG5ldyBXb3JsZEVuZ2luZV8xLkVuZ2luZSgpO1xuZW5naW5lLmRpc3BsYXlGUFMgPSBmYWxzZTtcbmNvbnN0IHN0YXJ0U2NlbmUgPSBuZXcgU2NlbmVzXzEuU2NlbmUuU3RhcnRNZW51KCk7XG5jb25zdCBzZWxlY3Rpb25TY2VuZSA9IG5ldyBTY2VuZXNfMS5TY2VuZS5TZWxlY3RMZXZlbCgpO1xuY29uc3QgZ2FtZVNjZW5lID0gbmV3IFNjZW5lc18xLlNjZW5lLkdhbWUoKTtcbmNvbnN0IHBsYXllckxvc3RTY2VuZSA9IG5ldyBTY2VuZXNfMS5TY2VuZS5QbGF5ZXJMb3N0KCk7XG5jb25zdCBwbGF5ZXJXb25TY2VuZSA9IG5ldyBTY2VuZXNfMS5TY2VuZS5QbGF5ZXJXb24oKTtcbmNvbnN0IHN0YXJ0SW5kZXggPSBlbmdpbmUuYWRkU2NlbmUoc3RhcnRTY2VuZSk7XG5jb25zdCBzZWxlY3Rpb25JbmRleCA9IGVuZ2luZS5hZGRTY2VuZShzZWxlY3Rpb25TY2VuZSk7XG5jb25zdCBnYW1lSW5kZXggPSBlbmdpbmUuYWRkU2NlbmUoZ2FtZVNjZW5lKTtcbmNvbnN0IGxvc3RJbmRleCA9IGVuZ2luZS5hZGRTY2VuZShwbGF5ZXJMb3N0U2NlbmUpO1xuY29uc3Qgd29uSW5kZXggPSBlbmdpbmUuYWRkU2NlbmUocGxheWVyV29uU2NlbmUpO1xuc3RhcnRTY2VuZS5zY2VuZUluZGV4ID0gc2VsZWN0aW9uSW5kZXg7XG5zZWxlY3Rpb25TY2VuZS5zY2VuZUluZGV4ID0gZ2FtZUluZGV4O1xuZ2FtZVNjZW5lLnBsYXllckxvc3RJbmRleCA9IGxvc3RJbmRleDtcbmdhbWVTY2VuZS5wbGF5ZXJXb25JbmRleCA9IHdvbkluZGV4O1xuZ2FtZVNjZW5lLnNlbGZJbmRleCA9IGdhbWVJbmRleDtcbmdhbWVTY2VuZS5tYWluTWVudUluZGV4ID0gc3RhcnRJbmRleDtcbnBsYXllckxvc3RTY2VuZS5zY2VuZUluZGV4ID0gZ2FtZUluZGV4O1xucGxheWVyV29uU2NlbmUuc2NlbmVJbmRleCA9IHN0YXJ0SW5kZXg7XG5lbmdpbmUuc3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==