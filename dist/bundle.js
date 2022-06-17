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
        const gc = new WorldEngine_1.Utility.GridCollisions();
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
                const pos = new WorldEngine_1.CommonComponents.Position2d(xPos, yPos);
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
                    this.addComponent(id, new Components_1.C.Enemy(new WorldEngine_1.CommonComponents.Position2d(xPos, yPos)));
                }
                else if (char == '^') {
                    this.addComponent(id, new Components_1.C.Enemy(new WorldEngine_1.CommonComponents.Position2d(xPos, yPos)));
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
                    const pos = new WorldEngine_1.CommonComponents.Position2d(x, y);
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
        this.addSystem(0, new Systems_1.S.PlayerMovement());
        this.addSystem(10, new Systems_1.S.PlayerCollision());
        this.addSystem(20, new Systems_1.S.EnemyAI());
        this.addSystem(90, new Systems_1.S.PortalSystem());
        this.addSystem(100, new Systems_1.S.RenderSystem());
        this.addSystem(110, new Systems_1.S.RenderGameInfo());
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
            engine.setFont(40);
            engine.drawText(200, 240, 'You lost! :/', 'red');
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
            WorldEngine_1.Utility.Cookie.set(engine.getBB('level'), 'b');
            return this.sceneIndex;
        }
        else {
            engine.setFont(40);
            engine.drawText(200, 240, 'You won!', 'green');
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
        engine.setFont(20);
        for (let i = 0; i < this.sortedLevels.length; ++i) {
            const id = this.addEntity();
            const selected = i == 0;
            this.addComponent(id, new Components_1.C.MenuText(this.sortedLevels[i], i, selected, WorldEngine_1.Utility.Cookie.get(this.sortedLevels[i]) != undefined));
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
            engine.setFont(40);
            engine.drawText(220, 100, 'DungeonGrams');
            engine.setFont(20);
            engine.drawText(245, 150, 'Press Enter to Start');
            engine.drawText(40, 200, '& gives you stamina', 'yellow');
            engine.drawText(40, 222, 'Collect all * to open the portal.', 'yellow');
            engine.drawText(40, 244, 'Step through the portal O to win!', 'yellow');
            engine.drawText(40, 266, 'But make sure to avoid the enemies # and traps ^', 'yellow');
            engine.drawText(40, 350, 'WASD or Arrows to move', 'green');
            engine.drawText(40, 375, 'Space to do nothing for a turn', 'green');
            engine.drawText(40, 400, 'R to restart', 'green');
            engine.drawText(40, 425, 'Q to quit', 'green');
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
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
const Enemy_1 = __webpack_require__(/*! ../Components/Enemy */ "./src/Components/Enemy.ts");
class EnemyAI extends WorldEngine_1.System {
    constructor() {
        super();
        this.componentsRequired = new Set([WorldEngine_1.CommonComponents.Position2d, Components_1.C.Enemy, Components_1.C.Movable]);
    }
    update(engine, entities) {
        // enemy can only move during their turn
        if (this.ecs.getBB('time step') % 3 != 0)
            return;
        // get the player position and grid collision tool
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(WorldEngine_1.CommonComponents.Position2d);
        const gc = this.ecs.getBB('grid collisions');
        for (let id of entities) {
            const components = this.ecs.getComponents(id);
            const currentPos = components.get(WorldEngine_1.CommonComponents.Position2d);
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
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, 1));
            if (diff_x > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(1, 0));
        }
        else if (Math.abs(diff_x) > Math.abs(diff_y)) {
            if (diff_x > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(1, 0));
            if (diff_y > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, 1));
        }
        else if ((diff_x + diff_y) % 2 == 0) {
            if (diff_y > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, 1));
            if (diff_x > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(1, 0));
        }
        else {
            if (diff_x > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(-1, 0));
            else if (diff_x < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(1, 0));
            if (diff_y > 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, -1));
            else if (diff_y < 0)
                moves.push(new WorldEngine_1.CommonComponents.Position2d(0, 1));
        }
        return moves;
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
class PlayerCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([]);
    }
    update(engine, entities) {
        const id = this.ecs.getBB('player id');
        const components = this.ecs.getComponents(id);
        const pos = components.get(WorldEngine_1.CommonComponents.Position2d);
        if (!pos.updated()) {
            return;
        }
        // if the player is out of stamina, they've lost unless the player
        // has hit a portal or food, which is handled below.
        const player = components.get(Components_1.C.Player);
        if (player.stamina <= 0) {
            this.ecs.setBB('game over', -1);
        }
        // if no collision was found, the player can move
        const gc = this.ecs.getBB('grid collisions');
        const locID = gc.get(pos);
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
            player.stamina = Math.min(player.stamina + 25, 30);
            this.ecs.removeEntity(locID);
            gc.acceptChange(pos, id);
            this.ecs.setBB('game over', 0);
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
class PlayerMovement extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([WorldEngine_1.CommonComponents.Position2d, Components_1.C.Render, Components_1.C.Player]);
    }
    updateTimeStep() {
        const timeStep = this.ecs.getBB('time step');
        this.ecs.setBB('time step', timeStep + 1);
    }
    update(engine, entities) {
        let playerID = entities.values().next().value;
        const components = this.ecs.getComponents(playerID);
        const player = components.get(Components_1.C.Player);
        let pos = components.get(WorldEngine_1.CommonComponents.Position2d);
        const x = pos.getX();
        const y = pos.getY();
        for (let key of engine.keyPress) {
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

/***/ "./src/Systems/RenderGameInfo.ts":
/*!***************************************!*\
  !*** ./src/Systems/RenderGameInfo.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderGameInfo = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Components_1 = __webpack_require__(/*! ../Components */ "./src/Components/index.ts");
class RenderGameInfo extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Components_1.C.Player]);
    }
    update(engine, entities) {
        const [id] = entities;
        const stamina = this.ecs.getComponents(id).get(Components_1.C.Player).stamina;
        // stamina
        let color;
        if (stamina > 20) {
            color = 'green';
        }
        else if (stamina > 10) {
            color = '#8B8000';
        }
        else {
            color = 'red';
        }
        engine.drawRect(20, 20, stamina * 8, 20, color);
        const maxStamina = 30 * 8;
        engine.drawRectOutline(19, 18, maxStamina + 2, 22, 2, 'gray');
        engine.drawText(30 * 4, 35, `${stamina}`, 'white');
        // turn index
        const time = this.ecs.getBB('time step');
        let x = time < 10 ? 610 : 595;
        engine.drawText(x, 30, `Turn: ${time}`);
    }
}
exports.RenderGameInfo = RenderGameInfo;


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
        engine.setFont(20);
        engine.drawText(300, 30, `Level: ${level}`, 'white');
    }
}
exports.RenderLevel = RenderLevel;


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
class RenderSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([WorldEngine_1.CommonComponents.Position2d, Components_1.C.Render]);
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
        for (let entity of entities.values()) {
            // get components
            const render = this.ecs.getComponents(entity).get(Components_1.C.Render);
            const pos = this.ecs.getComponents(entity).get(WorldEngine_1.CommonComponents.Position2d);
            // render
            const char = render.character;
            const color = this.charToColor[char];
            engine.drawText(pos.getX() * xMod, pos.getY() * yMod, char, color);
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
                fillColor = 'blue';
            }
            else if (m.beaten) {
                fillColor = 'green';
            }
            else {
                fillColor = 'red';
            }
            engine.drawText(x, y, m.name, 'white', true, fillColor);
        }
        engine.drawText(engine.width / 2.5, 45, 'Level Select', 'white');
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
const RenderGameInfo_1 = __webpack_require__(/*! ./RenderGameInfo */ "./src/Systems/RenderGameInfo.ts");
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
    RenderGameInfo: RenderGameInfo_1.RenderGameInfo,
    RenderLevel: RenderLevel_1.RenderLevel
};


/***/ }),

/***/ "./src/WorldEngine/index.ts":
/*!**********************************!*\
  !*** ./src/WorldEngine/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.CommonComponents = __importStar(__webpack_require__(/*! ./src/Components */ "./src/WorldEngine/src/Components/index.ts"));
exports.Utility = __importStar(__webpack_require__(/*! ./src/Utility */ "./src/WorldEngine/src/Utility/index.ts"));


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

/***/ "./src/WorldEngine/src/Components/index.ts":
/*!*************************************************!*\
  !*** ./src/WorldEngine/src/Components/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Position2d = void 0;
var Position2d_1 = __webpack_require__(/*! ./Position2d */ "./src/WorldEngine/src/Components/Position2d.ts");
Object.defineProperty(exports, "Position2d", ({ enumerable: true, get: function () { return Position2d_1.Position2d; } }));


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
        this.keyDown = new Set();
        this.keyPress = new Set();
        this.clearBackground = true;
        this.displayFPS = true;
        this.scenes = new Array();
        this.sceneIndex = 0;
        this.blackBoard = new Map();
        this.fontSize = 20;
        this.font = 'Courier New';
        window.addEventListener('keydown', (e) => {
            const k = (0, Key_1.keyCodeToKey)(e.key);
            if (k == Key_1.Key.DOWN || k == Key_1.Key.UP || k == Key_1.Key.LEFT || k == Key_1.Key.RIGHT) {
                e.preventDefault();
            }
            if (!this.keyDown.has(k)) {
                this.keyDown.add(k);
            }
            this.keyPress.add(k);
        });
        window.addEventListener('keyup', (e) => {
            const k = (0, Key_1.keyCodeToKey)(e.key);
            this.keyDown.delete(k);
        });
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext("2d");
        this.setFont();
        this.width = canvas.width;
        this.height = canvas.height;
        this.delta = 0;
    }
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
                const tempSize = this.fontSize;
                const tempFont = this.font;
                this.setFont(8, 'Courier New');
                this.drawText(this.width - 60, 15, `FPS: ${fps}`, 'red');
                this.setFont(tempSize, tempFont);
            }
            this.keyPress.clear();
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
    }
    setFont(size = undefined, font = undefined) {
        if (size != undefined) {
            this.fontSize = size;
        }
        if (font != undefined) {
            this.font = font;
        }
        this.ctx.font = `${this.fontSize}px ${this.font}`;
    }
    drawRectOutline(x, y, width, height, strokeWidth, color) {
        this.ctx.lineWidth = strokeWidth;
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(x, y, width, height);
    }
    drawRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }
    drawText(x, y, char, fontColor = 'white', background = false, backgroundColor = "white") {
        // background
        if (background) {
            const txtMeasure = this.ctx.measureText(char);
            // this.ctx.fillRect(
            //  
            this.drawRect(x - 1.0, y - this.fontSize * 0.7, txtMeasure.width * 1.1, this.fontSize * 1.2, backgroundColor);
        }
        // text
        this.ctx.fillStyle = fontColor;
        this.ctx.fillText(char, x, y);
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

/***/ "./src/WorldEngine/src/Utility/Cookie.ts":
/*!***********************************************!*\
  !*** ./src/WorldEngine/src/Utility/Cookie.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.get = exports.set = void 0;
function set(name, val) {
    const date = new Date();
    date.setTime(date.getTime() + (31 * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + val + "; expires=" + date.toUTCString() + "; path=/";
}
exports.set = set;
function get(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts != undefined && parts.length == 2) {
        return parts.pop().split(";").shift();
    }
    return undefined;
}
exports.get = get;


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

/***/ "./src/WorldEngine/src/Utility/index.ts":
/*!**********************************************!*\
  !*** ./src/WorldEngine/src/Utility/index.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cookie = exports.GridCollisions = void 0;
var GridCollisions_1 = __webpack_require__(/*! ./GridCollisions */ "./src/WorldEngine/src/Utility/GridCollisions.ts");
Object.defineProperty(exports, "GridCollisions", ({ enumerable: true, get: function () { return GridCollisions_1.GridCollisions; } }));
exports.Cookie = __importStar(__webpack_require__(/*! ./Cookie */ "./src/WorldEngine/src/Utility/Cookie.ts"));


/***/ }),

/***/ "./src/levels.ts":
/*!***********************!*\
  !*** ./src/levels.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LEVELS = void 0;
exports.LEVELS = { "11_4": ["@-----^^^^^^^^^^^--", "--\\\\----X-------X--", "--//----X----X--X--", "--------X---XX--X--", "--------X--XXX--X--", "--------X--X#*--X--", "--------X--XXX--X--", "--------X---XX--X--", "--&-----X----X--X--", "-------------------", "------^^^^^^^^^^^-O"], "3_9": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-------------------", "-----#-------&-----", "----------#-----#--", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "15_0": ["@-^^^^^^^^^^^^^^^--", "--&--------*----*--", "-------------------", "--^^------^^^--^^--", "--^^^^--^^^^^^^^^--", "-----------&----&--", "--^^^^--^^^^^^^^^--", "--^^------^^^--^^--", "-------------------", "--&--------*----*--", "--^^^^^^^^^^^^^^^-O"], "9_2": ["@----------^^^^^^--", "-------------X--X--", "-------------X--X--", "-------------X--X--", "-------------X--X--", "-----#--#----X-#X--", "-------------X--X--", "--/\\\\--------X--X--", "--\\//--------X--X--", "-------------------", "--*-----*--^^^^^^-O"], "1_12": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------#XXXX---", "--------&---XXXX---", "-------------*-----", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "1_13": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXX--#XXXX--", "------XXXX---XXXX--", "--------------*----", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "9_3": ["@-------^^^^^^^^^--", "----------X--X--X--", "----------X--X--X--", "----------X-----X--", "----------X--------", "-----#----X--------", "----------X--------", "--/\\\\-----X---//\\--", "--\\//-----X---\\\\/--", "-------------------", "--*-----^^^^^^^^^-O"], "15_1": ["@--^^^^^^^^^^^^^^--", "---^^-----------*--", "---^^-----X--------", "---^^----XX----^^--", "--------XXX--^^^^--", "---^^---X#*-----&--", "--------XXX--^^^^--", "---^^----XX----^^--", "---^^-----X--------", "---^^-----------*--", "---^^^^^^^^^^^^^^-O"], "17_3": ["@-^^^^^^^^^^^^^^^--", "--#X-------^-------", "--XX----X--^----X--", "--X----XX--^---XX--", "------XXX--^--XXX--", "------X#*-----X#*--", "------XXX--&--XXX--", "-------XX------XX--", "--------X-------X--", "-------------------", "--^^^^^^^^^^^^^^^-O"], "3_8": ["@-XX--------XXX----", "--XX--------XXX----", "--XX---XX---XXX----", "--XX-#-XX-#-XXX----", "--XX--------XXX----", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--*XXX----XXXXXXX--", "-------------------", "--#----------&----O"], "11_5": ["@-XXX--^^^^^^^^^^--", "--#XX-----X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX--------------", "--XXX--^^^^^^^^^^-O"], "3_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "------#XXXX--#XXX--", "---&---XXXX---XXX--", "--------*------*---", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "3_14": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "------#XXXX--#XXX--", "-------XXXX---XXX--", "--------*------*---", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "1_8": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX---XX-----", "--XX--XXX----------", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--*XXXXXXXX----XX--", "-------------------", "--#----&----------O"], "11_7": ["@-^^^^^^^^^^--XXX--", "--------------XXX--", "---------X----XXX--", "--XXX---XX----XXX--", "--X*X--XXX----XX---", "--X&---X#*----XX---", "--X*X--XXX---------", "--XXX---XX----XXX--", "--/\\\\----X----XXX--", "--\\//---------XXX--", "--^^^^^^^^^^--XXX-O"], "15_3": ["@---^^^^^^^^^^^^^--", "-----------^-------", "--------X--^----X--", "-------XX--^---XX--", "------XXX--^--XXX--", "------X#*-----X#*--", "------XXX--&--XXX--", "-------XX------XX--", "--------X-------X--", "-------------------", "----^^^^^^^^^^^^^-O"], "1_11": ["@-XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--*XXXXXXXXXXXXX---", "-------------------", "--#----&----&-----O"], "9_1": ["@----------^^^^^^--", "--------------X----", "--------------X----", "--------------X----", "--------------X----", "-----#--#-----X-#--", "--------------X----", "--/\\\\---------X----", "--\\//---------X----", "-------------------", "--*-----*--^^^^^^-O"], "9_0": ["@--------^^^^^^^^--", "---------------*---", "-------------------", "--------------^^^--", "------------^^^^^--", "-----#---------&---", "------------^^^^^--", "--/\\\\---------^^^--", "--\\//--------------", "---------------*---", "--*------^^^^^^^^-O"], "1_10": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-------------------", "-----#----&--XXX---", "-------------XXX---", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "15_2": ["@--^^^--^^^^^^^^^--", "---^^^---------*#--", "---^^^------X--XX--", "---^^^-----XX--XX--", "----*-----XXX--X---", "---^^^----X#*--X---", "----&-----XXX--X---", "---^^^-----XX--X---", "---^^^------X--X---", "---^^^-------------", "---^^^--^^^^^^^^^-O"], "11_6": ["@-^^^^^^^^^^--XXX--", "------X--X----XXX--", "---X--X--X----XXX--", "---X--X--X----XXX--", "---X--X--X----XXX--", "--#X-#X-#X----XXX--", "---X--X--X----XXX--", "---X--X--X---------", "---X--X--X---------", "---X----------XX---", "--^^^^^^^^^^--XXX-O"], "1_9": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX---XXXX---", "--XX--XXX-----XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--*XXXXXXXX---XX---", "--------------XX---", "--#----&------XX--O"], "3_15": ["@--XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "------#XXXX--#XXX--", "-------XXXX---XXX--", "--------*------*---", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX-O"], "13_4": ["@--^^^^^^^^^^^^^^--", "---^^--------------", "---^^--------------", "---^^--X--X----XX--", "-------X--X^---X*--", "---^^--XXXX^^--X&--", "-------X--X^---X*--", "---^^--X--X----XX--", "---^^-----//\\\\//\\--", "---^^-----\\\\//\\\\/--", "---^^^^^^^^^^^^^^-O"], "3_11": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "--------------#XX--", "---------------XX--", "--------#--#----*--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "13_0": ["@----^^^^^^^^^^^^--", "-----------*----*--", "-------------------", "----------^^^--^^--", "--------^^^^^^^^^--", "--#--------&----&--", "--------^^^^^^^^^--", "----------^^^--^^--", "-------------------", "-----------*----*--", "-----^^^^^^^^^^^^-O"], "11_2": ["@-------^^^^^^^^^--", "----------^--------", "----------^-----X--", "----------^----XX--", "----------^---XXX--", "-----#--------X#*--", "----------&---XXX--", "--/\\\\----------XX--", "--\\//-----------X--", "-------------------", "--*-----^^^^^^^^^-O"], "17_4": ["@-^^^^^^^^^^^^^^^--", "------X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "--#X-#X-#X-#X-#X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X--X---", "---X---------------", "--^^^^^^^^^^^^^^^-O"], "5_9": ["@----^--XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "----------*---#XX--", "--#------------XX--", "-----------#----*--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-----^--XXXXXXXXX-O"], "1_14": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "------#XXXXXX--&---", "-------XXXXXX------", "--------*----------", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "9_4": ["@-----^^^^^^^^^^^--", "--\\\\---------------", "--//---------------", "--------X--X----X--", "--------X--X^---X--", "--------XXXX^^--X--", "--------X--X^---X--", "--------X--X----X--", "--&--------//\\\\//--", "-----------\\\\//\\\\--", "------^^^^^^^^^^^-O"], "15_6": ["@-^^^^^^^^^^^^^^^--", "-------------------", "-------------------", "--XXX--X--X----XX--", "--X*X--X--X^---X*--", "--X&---XXXX^^--X&--", "--X*X--X--X^---X*--", "--XXX--X--X----XX--", "--/\\\\-----//\\\\//\\--", "--\\//-----\\\\//\\\\/--", "--^^^^^^^^^^^^^^^-O"], "9_5": ["@--------^^^^^^^^--", "--/\\\\-X---------*--", "--\\//-X------X--X--", "------X-----XX--X--", "--&---X----XXX--X--", "--XXXXX----X#*--X--", "--&---X----XXX--X--", "------X-----XX--X--", "--/\\\\-X------X--X--", "--\\//-X------------", "---------^^^^^^^^-O"], "1_15": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXX--#XXXX--", "----XXXXXX---XXXX--", "--------------*----", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "5_8": ["@--------XXXXXXXX--", "--\\\\-----XXXXXXXX--", "--//-----XXXXXXXX--", "---------XXXXXXXX--", "-----------*---*---", "------#------------", "------------#---#--", "---------XXXXXXXX--", "--&------XXXXXXXX--", "---------XXXXXXXX--", "------*--XXXXXXXX-O"], "17_5": ["@-^^^^^^^^^^^^^^^--", "----------------X--", "--------X----X--X--", "--XX---XX---XX--X--", "--*X--XXX--XXX--X--", "--&---X#*--X#*--X--", "--*X--XXX--XXX--X--", "--XX---XX---XX--X--", "--\\\\----X----X--X--", "--//---------------", "--^^^^^^^^^^^^^^^-O"], "11_3": ["@-------^^^^^^^^^--", "-----------&-------", "-----------X----X--", "-----------X---XX--", "-----------X--XXX--", "-----#-----X--X#*--", "-----------X--XXX--", "--/\\\\------X---XX--", "--\\//------X----X--", "-----------X-------", "--*-----^^^^^^^^^-O"], "13_1": ["@-----^^^^^^^^^^^--", "----------------*--", "----------X--------", "---------XX----^^--", "--------XXX--^^^^--", "--#-----X#*-----&--", "--------XXX--^^^^--", "---------XX----^^--", "----------X--------", "----------------*--", "------^^^^^^^^^^^-O"], "3_10": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "-------------#XXX--", "-----#----&---XXX--", "---------------*---", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "3_12": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "--------#XXXX--*---", "---------XXXX------", "----------*-----#--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "13_3": ["@-----^^^^^^^^^^^--", "--\\\\-----------*#--", "--//--------X--XX--", "-----------XX--XX--", "----------XXX--X---", "----------X#*--X---", "----------XXX--X---", "-----------XX--X---", "--&---------X--X---", "-------------------", "------^^^^^^^^^^^-O"], "11_1": ["@-----^^^^^^^^^^^--", "--\\\\---------------", "--//-----------X---", "---------------XX--", "---------------XX--", "---------------*#--", "---------------XX--", "------------^--XX--", "--&---------^--X---", "------------^------", "------^^^^^^^^^^^-O"], "9_7": ["@-XXXXX--^^^^^^^^--", "--XXXXX---------*--", "--XXXXX------X--X--", "---XXXX-----XX--X--", "-----------XXX--X--", "----&------X#*--X--", "-----------XXX--X--", "---XXXX-----XX--X--", "--XXXXX------X--X--", "--XXXXX------------", "--XXXXX--^^^^^^^^-O"], "1_17": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-----------#XXXX---", "--XXXXXXX---XXXX---", "--XXXXXXX----*-----", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "15_5": ["@-^^^^^^^^^^^^^^^--", "--#X---------------", "--XX---------------", "--X---X--X----XXX--", "------X--X^---X*X--", "------XXXX^^--X&---", "------X--X^---X*X--", "------X--X----XXX--", "---------//\\\\//\\\\--", "---------\\\\//\\\\//--", "--^^^^^^^^^^^^^^^-O"], "7_8": ["@--^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "----*-----*---*----", "---^^^-------------", "----&------#---#---", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX-O"], "7_9": ["@--^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "----*-----*---#XX--", "---^^^---------XX--", "----&------#----*--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX-O"], "15_4": ["@---^^^^^^^^^^^^^--", "----------------&--", "--------X----X--X--", "-------XX---XX--X--", "------XXX--XXX--X--", "------X#*--X#*--X--", "------XXX--XXX--X--", "-------XX---XX--X--", "--------X----X--X--", "----------------X--", "----^^^^^^^^^^^^^-O"], "1_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "------------#XXXX--", "----&--XXX---XXXX--", "-------XXX----*----", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "9_6": ["@-XXXXX--^^^^^^^^--", "--#XXXX----X--X----", "---XXXX----X--X----", "---XXXX----X--X----", "-----------X--X----", "-----------X-#X-#--", "-----------X--X----", "---XXXX----X--X----", "---XXXX----X--X----", "---XXXX------------", "--XXXXX--^^^^^^^^-O"], "11_0": ["@-----^^^^^^^^^^^--", "--\\\\-------*----*--", "--//---------------", "----------^^^--^^--", "--------^^^^^^^^^--", "-----------&----&--", "--------^^^^^^^^^--", "----------^^^--^^--", "--&----------------", "-----------*----*--", "------^^^^^^^^^^^-O"], "13_2": ["@-----^^^^^^^^^^^--", "-------------------", "------------X------", "-----------XX---X--", "----------XXX--XX--", "--#-------X#*--X#--", "----------XXX--XX--", "-----------XX---X--", "------------X------", "-------------------", "------^^^^^^^^^^^-O"], "3_13": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XX-----#XXXX--", "--#--XX------XXXX--", "---------*----*----", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "14_3": ["@----^^^^^^^^^^^^--", "-------------X--X--", "----------X--X--X--", "---------XX--X--X--", "--------XXX--X--X--", "--#-----X#*--X-#X--", "--------XXX--X--X--", "---------XX--X--X--", "----------X--X--X--", "-------------------", "-----^^^^^^^^^^^^-O"], "8_1": ["@------------^^^^--", "-------------------", "-------------------", "----------------X--", "---------------XX--", "-----#--#------X#--", "---------------XX--", "--/\\\\-----------X--", "--\\//--------------", "-------------------", "--*-----*----^^^^-O"], "7_10": ["@-^^^^--XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--XX----XXXXXXXXX--", "--*X---------#XXX--", "--&-----------XXX--", "--*X------#----*---", "--XX----XXXXXXXXX--", "--\\\\----XXXXXXXXX--", "--//----XXXXXXXXX--", "--^^^^--XXXXXXXXX-O"], "10_7": ["@-^^^^^^^^^--XXXX--", "-------------XXXX--", "--------X----XXXX--", "--XX---XX----XXXX--", "--*X--XXX----XXXX--", "--&---X#*----XXXX--", "--*X--XXX----XXXX--", "--XX---XX------XX--", "--\\\\----X----------", "--//---------XX----", "--^^^^^^^^^--XXXX-O"], "5_15": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-------*---*---*---", "--XX---------------", "--XX----#---#---#--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "12_5": ["@-^^^^^^^^^^^--XX--", "------X--X-----XX--", "---X--X--X-----XX--", "---X--X--X-----XX--", "---X--X--X-----XX--", "--#X-#X-#X-----XX--", "---X--X--X-----XX--", "---X--X--X---------", "---X--X--X---------", "---X-----------XX--", "--^^^^^^^^^^^--XX-O"], "0_8": ["@-----#---X--XXXX--", "--\\\\--XX--X--XXXX--", "--//--XX--X--XXXX--", "------XX--X--XXXX--", "------XX--X--XXXX--", "----------X--XXXX--", "------XX--X--XXX---", "------XX--X--------", "--&---XX--X-----X--", "------XX--X--XXXX--", "------#---&--XXXX-O"], "0_9": ["@-----#----XXXXXX--", "--\\\\--XX---XXXXXX--", "--//--XX---XXXXXX--", "------XX---XXXXXX--", "------XX-----------", "-------------XXXX--", "------XX-----XXXX--", "------XX---XXXXXX--", "--&---XX---XXXXXX--", "------XX---XXXXXX--", "------#----XXXXXX-O"], "12_4": ["@-----^^^^^^^^^^^--", "--\\\\---------X--X--", "--//------X--X--X--", "---------XX--X--X--", "--------XXX--X--X--", "--------X#*--X-#X--", "--------XXX--X--X--", "---------XX--X--X--", "--&-------X--X--X--", "-------------------", "------^^^^^^^^^^^-O"], "5_14": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-------*------#XX--", "---------------XX--", "--------#--#----*--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "10_6": ["@-XXXX--^^^^^^^^^--", "--#XXX----X--X--X--", "---XXX----X--X--X--", "---XXX----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XXX----X--X--X--", "---XXX----X--X--X--", "---XXX-------------", "--XXXX--^^^^^^^^^-O"], "7_11": ["@-^^^^^--XXXXXXXX--", "---------XXXXXXXX--", "---------XXXXXXXX--", "--XXX----XXXXXXXX--", "--X*X------#XXXXX--", "--X&--------XXXXX--", "--X*X--------*-----", "--XXX----XXXXXXXX--", "--/\\\\----XXXXXXXX--", "--\\//----XXXXXXXX--", "--^^^^^--XXXXXXXX-O"], "0_18": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-------------------", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "8_0": ["@-----------^^^^^--", "--------------^----", "--------------^----", "--------------^----", "--------------^----", "-----#--#----------", "--------------&----", "--/\\\\--------------", "--\\//--------------", "-------------------", "--*-----*---^^^^^-O"], "14_2": ["@----^^^^^^^^^^^^--", "-------------------", "------------X------", "-----------XX---X--", "----------XXX--XX--", "--#-------X#*--X#--", "----------XXX--XX--", "-----------XX---X--", "------------X------", "-------------------", "-----^^^^^^^^^^^^-O"], "14_0": ["@--^^^^^^^^^^^^^^--", "---^^------*----*--", "---^^--------------", "---^^-----^^^--^^--", "--------^^^^^^^^^--", "---^^------&----&--", "--------^^^^^^^^^--", "---^^-----^^^--^^--", "---^^--------------", "---^^------*----*--", "---^^^^^^^^^^^^^^-O"], "8_2": ["@----------^^^^^^--", "-------------X--X--", "-------------X--X--", "----------------X--", "-------------------", "-----#--#----------", "-------------------", "--/\\\\---------//\\--", "--\\//---------\\\\/--", "-------------------", "--*-----*--^^^^^^-O"], "16_2": ["@-^^^^^^^^^^^^^^^--", "------X--X-----*---", "---X--X--X---------", "---X--X--X----^^^--", "---X--X--X--^^^^^--", "--#X-#X-#X-----&---", "---X--X--X--^^^^^--", "---X--X--X----^^^--", "---X--X--X---------", "---X-----------*---", "--^^^^^^^^^^^^^^^-O"], "10_4": ["@--XX--^^^^^^^^^^--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX--------------", "---XX--^^^^^^^^^^-O"], "5_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "---#XXXX--*---#XX--", "----XXXX-------XX--", "-----*-----#----*--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "2_9": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX-#-XXXX---", "--XX--XXX-----XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--XXXXXXXXX---XX---", "--*XXXXXXXX---XX---", "--------------XX---", "--#----&------XX--O"], "12_6": ["@-^^^^^^^^^--XXXX--", "-------------XXXX--", "--------X----XXXX--", "--XX---XX----XXXX--", "--*X--XXX------*---", "--&---X#*----------", "--*X--XXX-------#--", "--XX---XX----XXXX--", "--\\\\----X----XXXX--", "--//---------XXXX--", "--^^^^^^^^^--XXXX-O"], "2_8": ["@-XX--XXX----------", "--XX--XXX----------", "--XX--XXX---XX-----", "--XX--XXX---XX-#---", "--XX--XXX----------", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--XXXXXXXXX----XX--", "--*XXXXXXXX----XX--", "-------------------", "--#----&----------O"], "10_5": ["@-XXX---^^^^^^^^^--", "--#XX-----X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "----------X--X--X--", "----------X-#X-#X--", "----------X--X--X--", "---XX-----X--X--X--", "---XX-----X--X--X--", "---XX--------------", "--XXX---^^^^^^^^^-O"], "7_12": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--X--XX*#XX*#XX----", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "-------------------", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "--X*#XX--XX--XX*#--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "16_3": ["@-^^^^^^^^^^^^^^^--", "--&----------------", "-----------X----X--", "--^^------XX---XX--", "--^^^^---XXX--XXX--", "---------X#*--X#*--", "--^^^^---XXX--XXX--", "--^^------XX---XX--", "-----------X----X--", "--&----------------", "--^^^^^^^^^^^^^^^-O"], "8_3": ["@---------X--^^^^--", "---------------*#--", "----------X----XX--", "---------XX----XX--", "--------XXX----X---", "-----#--X#&----X---", "--------XXX----X---", "--/\\\\----XX----X---", "--\\//-----X----X---", "-------------------", "--*-------X--^^^^-O"], "14_1": ["@----^^^^^^^^^^^^--", "----------------*--", "----------X--------", "---------XX----^^--", "--------XXX--^^^^--", "--#-----X#*-----&--", "--------XXX--^^^^--", "---------XX----^^--", "----------X--------", "----------------*--", "-----^^^^^^^^^^^^-O"], "8_7": ["@-XXXXXX--^^^^^^^--", "--#XXXXX-----X--X--", "---XXXXX-----X--X--", "---XXXXX-----X--X--", "-------------X--X--", "-----&-------X-#X--", "-------------X--X--", "---XXXXX-----X--X--", "---XXXXX-----X--X--", "---XXXXX-----------", "--XXXXXX--^^^^^^^-O"], "14_5": ["@-^^^^^^^^^^^^^^^--", "----------------X--", "----------------X--", "------X----XXX--X--", "------X^---X*X--X--", "--XXXXX^^--X&---X--", "------X^---X*X--X--", "------X----XXX--X--", "------//\\\\//\\\\--X--", "------\\\\//\\\\//-----", "--^^^^^^^^^^^^^^^-O"], "6_8": ["@---^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "-----*--------#XX--", "----^^^--------XX--", "-----&-----#----*--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX-O"], "5_13": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-----------*---*---", "-----&-------------", "--------#---#---#--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "10_1": ["@-------^^^^^^^^^--", "----------^---X----", "----------^---X----", "----------^---X----", "----------^---X----", "-----#--------X-#--", "----------&---X----", "--/\\\\---------X----", "--\\//---------X----", "-------------------", "--*-----^^^^^^^^^-O"], "12_3": ["@------^^^^^^^^^^--", "--\\\\-----------*#--", "--//-------X---XX--", "----------XX---XX--", "---------XXX---X---", "---------X#*---X---", "---------XXX---X---", "----------XX---X---", "--&--------X---X---", "-------------------", "-------^^^^^^^^^^-O"], "12_2": ["@-----^^^^^^^^^^^--", "--\\\\------------*--", "--//---------X--X--", "------------XX--X--", "-----------XXX--X--", "-----------X#*--X--", "-----------XXX--X--", "------------XX--X--", "--&----------X--X--", "-------------------", "------^^^^^^^^^^^-O"], "10_0": ["@-------^^^^^^^^^--", "----------^-----*--", "----------^--------", "----------^----^^--", "----------^--^^^^--", "-----#----------&--", "----------&--^^^^--", "--/\\\\----------^^--", "--\\//--------------", "----------------*--", "--*-----^^^^^^^^^-O"], "5_12": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*------#XX--", "--#------------XX--", "--------#--#----*--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "6_9": ["@--^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "----*--------#XXX--", "---^^^--------XXX--", "----&-----#----*---", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX--", "---^^^--XXXXXXXXX-O"], "14_4": ["@-^^^^^^^^^^^^--X--", "------X---------X--", "---X--X----X----X--", "---X--X---XX----X--", "---X--X--XXX----X--", "--#X-#X--X#*----X--", "---X--X--XXX----X--", "---X--X---XX----X--", "---X--X----X----X--", "---X------------X--", "--^^^^^^^^^^^^--&-O"], "8_6": ["@---^^^^^^^--XXXX--", "-------------XXXX--", "--------X----XXXX--", "-------XX----XXXX--", "------XXX----XXX---", "------X#*----XX----", "------XXX----------", "-------XX----XXXX--", "--------X----XXXX--", "-------------XXXX--", "----^^^^^^^--XXXX-O"], "8_4": ["@-----#----^^^^^^--", "--\\\\--XX-----------", "--//--XX--------X--", "------XX-------XX--", "------XX------XXX--", "--------------X#*--", "------XX------XXX--", "------XX-------XX--", "--&---XX--------X--", "------XX-----------", "------#----^^^^^^-O"], "16_4": ["@-^^^^^^^^^^^^^^^--", "------X--X--X--X---", "---X--X--X--X--X---", "---X--X--X--X------", "---X--X--X--X------", "--#X-#X-#X-#X------", "---X--X--X--X------", "---X--X--X--X---/--", "---X--X--X--X---\\--", "---X---------------", "--^^^^^^^^^^^^^^^-O"], "4_9": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "----------*---#XX--", "--#------------XX--", "-----------#----*--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX-O"], "5_10": ["@-----XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------*---*---", "--#----------------", "--------#---#---#--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "10_2": ["@--------^^^^^^^^--", "-----------^-------", "-----------^----X--", "-----------^---XX--", "-----------^--XXX--", "-----#--------X#*--", "-----------&--XXX--", "--/\\\\----------XX--", "--\\//-----------X--", "-------------------", "--*------^^^^^^^^-O"], "12_0": ["@-----^^^^^^^^^^^--", "-----------*----*--", "-------------------", "----------^^^--^^--", "--------^^^^^^^^^--", "--#--------&----&--", "--------^^^^^^^^^--", "----------^^^--^^--", "-------------------", "-----------*----*--", "------^^^^^^^^^^^-O"], "12_1": ["@-----^^^^^^^^^^^--", "----------^--------", "----------^-----X--", "----------^----XX--", "----------^---XXX--", "--#-----------X#*--", "----------&---XXX--", "---------------XX--", "----------------X--", "-------------------", "------^^^^^^^^^^^-O"], "10_3": ["@--------^^^^^^^^--", "-----------&-------", "-----------X----X--", "-----------X---XX--", "-----------X--XXX--", "-----#-----X--X#*--", "-----------X--XXX--", "--/\\\\------X---XX--", "--\\//------X----X--", "-----------X-------", "--*------^^^^^^^^-O"], "5_11": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*---*---#X--", "--#-------------X--", "--------#---#------", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "4_8": ["@-XX--------XXX----", "--XX--------XXX----", "--XX---XX---XXX----", "--XX-#-XX-#-XXX-#--", "--XX--------XXX----", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--XXXX----XXXXXXX--", "--*XXX----XXXXXXX--", "-------------------", "--#----------&----O"], "16_5": ["@-^^^^^^^^^^^^^^^--", "------X--X--X--X---", "------X--X--X--X---", "--XX--X--X--X--X---", "--*X--X--X--X--X---", "--&---X-#X-#X-#X---", "--*X--X--X--X--X---", "--XX--X--X--X--X---", "--\\\\--X--X--X--X---", "--//---------------", "--^^^^^^^^^^^^^^^-O"], "8_5": ["@----XXXXXXXXXXXX--", "-----XX--^^^^^^^^--", "-----XX----^^^-----", "-----XX------------", "-------------//\\\\--", "--#----------\\\\//--", "-------------------", "-----XX------------", "-----XX----^^^-----", "-----XX--^^^^^^^^--", "-----XXXXXXXXXXXX-O"], "8_8": ["@-XXXXXX--^^^^^^^--", "--XXXXXX-----X--X--", "--XXXXXX-----X--X--", "--XXXXXX-----X--X--", "--XXXX-------X--X--", "--XXXX-------X-#X--", "---*---------X--X--", "--XXXXXX-----X--X--", "--XXXXXX-----X--X--", "--XXXXXX-----------", "--XXXXXX--^^^^^^^-O"], "6_7": ["@----XXXXXXXXXXXX--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX--------", "-------*-----^^^^--", "--#----------------", "--------#----^^^^--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXXXXXXXX-O"], "0_10": ["@-----#---XXXXXXX--", "--\\\\--XX--XXXXXXX--", "--//--XX--XXXXXXX--", "------XX--XXXXXXX--", "------XX--XXXXXXX--", "----------XXXX-----", "------XX-----------", "------XX------XXX--", "--&---XX--XXXXXXX--", "------XX--XXXXXXX--", "------#---XXXXXXX-O"], "4_5": ["@-------#---XXXXX--", "--------XX---------", "--------XX-----X---", "--------XX-----XX--", "--------XX-----XX--", "-----#--------&*#--", "--------XX-----XX--", "--/\\\\---XX-----XX--", "--\\//---XX-----X---", "--------XX---------", "--*-----#---XXXXX-O"], "2_15": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--------#XXXX------", "-----&---XXXX---X--", "----------*-----X--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "2_3": ["@-------#---X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X--&---", "--\\//---XX--X------", "--------XX--X------", "--*-----#---&-----O"], "0_1": ["@-----------X------", "--\\\\--------X------", "--//--------X------", "------------X------", "------------X------", "------#--&--X------", "------------X------", "------------X--&---", "--&---------X------", "------------X------", "------------&-----O"], "0_0": ["@------------------", "--\\\\---------------", "--//---------------", "-------------------", "-------------------", "------#--&--&------", "-------------------", "-------------------", "--&----------------", "-------------------", "------------------O"], "2_2": ["@-------#----------", "--------XX---------", "--------XX---------", "--------XX---------", "--------XX---------", "-----#------&------", "--------XX---------", "--/\\\\---XX-----&---", "--\\//---XX---------", "--------XX---------", "--*-----#---------O"], "2_14": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XX-----#XXXX---", "----XX------XXXX---", "--------*----*-----", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "4_4": ["@----------X--XX---", "-----------X--XX---", "-----------X--XX---", "-----------X--XX---", "-----------X-------", "-----#--#--X-------", "-----------X----X--", "--/\\\\------X--XXX--", "--\\//------X--XX---", "-----------X--XX*--", "--*-----*--&--XX--O"], "0_11": ["@------XXXXXXXXXX--", "--\\\\---XXXXXXXXXX--", "--//---XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------------------", "------------XXXXX--", "---------#--XXXXX--", "-------XXXXXXXXXX--", "--&----XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------XXXXXXXXXX-O"], "6_6": ["@-----XXXXX--^^^^--", "--\\\\--XXXXX----*#--", "--//--XXXXX----XX--", "------XXXXX----XX--", "---------------X---", "---------------X---", "--------#------X---", "------XXXXX----X---", "--&---XXXXX----X---", "------XXXXX--------", "------XXXXX--^^^^-O"], "8_9": ["@-^^^^--XXXXXXXXX--", "--#X----XXXXXXXXX--", "--XX----XXXXXXXXX--", "--X-----XXXXXXXXX--", "----------*---#XX--", "---------------XX--", "-----------#----*--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--^^^^--XXXXXXXXX-O"], "6_4": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "---------&---XXXX--", "--------^^^--XXXX--", "--------^^^--------", "-----#--^^^--------", "--------^^^----#---", "--/\\\\---^^^--XXXX--", "--\\//----*---XXXX--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "0_13": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-------------------", "---------XXXXXXXX--", "---------XXXXXXXX--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "4_6": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-------------------", "-----#--#----&-----", "----------------#--", "--/\\\\------XXXXXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*-----*--XXXXXX-O"], "18_4": ["@-^^^^^^^^^^^^^^^--", "---------------*#--", "------X----X---XX--", "-----XX---XX---XX--", "----XXX--XXX---X---", "----X#*--X#*---X---", "----XXX--XXX---X---", "-----XX---XX---X---", "------X----X---X---", "-------------------", "--^^^^^^^^^^^^^^^-O"], "2_16": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "------------#XXXX--", "-----XXXXX---XXXX--", "-----XXXXX----*----", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "2_0": ["@------------------", "-------------------", "-------------------", "-------------------", "-------------------", "-----#-----&--&----", "-------------------", "--/\\\\--------------", "--\\//--------------", "--------*----------", "--*---------------O"], "0_2": ["@-----#------------", "--\\\\--XX-----------", "--//--XX-----------", "------XX-----------", "------XX-----------", "----------&--&--&--", "------XX-----------", "------XX-----------", "--&---XX-----------", "------XX-----------", "------#-----------O"], "0_3": ["@-----#---X--------", "--\\\\--XX--X--------", "--//--XX--X--------", "------XX--X--------", "------XX--X--------", "----------X--&--&--", "------XX--X--------", "------XX--X--------", "--&---XX--X--------", "------XX--X--------", "------#---&-------O"], "2_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#-----X-------", "-----------X-------", "--/\\\\------X--&----", "--\\//------X-------", "--------*--X-------", "--*--------&------O"], "2_17": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXX--#XXXX---", "--XXXXXXX---XXXX---", "---*---------*-----", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "18_5": ["@-^^^^^^^^^^^^^^^--", "----------------*--", "--------X----X--X--", "--XX---XX---XX--X--", "--*X--XXX--XXX--X--", "--&---X#*--X#*--X--", "--*X--XXX--XXX--X--", "--XX---XX---XX--X--", "--\\\\----X----X--X--", "--//---------------", "--^^^^^^^^^^^^^^^-O"], "4_7": ["@-----XXXXXX--^^^--", "--\\\\--XXXXXX----X--", "--//--XXXXXX----X--", "------XXXXXX----X--", "----------------X--", "----------------X--", "--------#-------X--", "------XXXXXX----X--", "--&---XXXXXX----X--", "------XXXXXX----#--", "------XXXXXX--^^^-O"], "0_12": ["@------XXXXXXXXXX--", "--\\\\---XXXXXXXXXX--", "--//---XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------------------", "---------XXXXXXXX--", "---------XXXXXXXX--", "-------XXXXXXXXXX--", "--&----XXXXXXXXXX--", "-------XXXXXXXXXX--", "-------XXXXXXXXXX-O"], "6_5": ["@-----XXX--^^^^^^--", "--\\\\--XXX----X--X--", "--//--XXX----X--X--", "------XXX----X--X--", "------XXX----X--X--", "------XXX----X-#X--", "-------------X--X--", "-------------X--X--", "--&---XXX----X--X--", "------XXX----------", "------XXX--^^^^^^-O"], "6_1": ["@----------X--^^^--", "-----------X----^--", "-----------X----^--", "-----------X----^--", "-----------X----^--", "-----#--#--X-------", "-----------X----&--", "--/\\\\------X-------", "--\\//------X-------", "-----------X-------", "--*-----*--&--^^^-O"], "0_16": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-------------------", "-----&--XXXXXXXXX--", "--------XXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "4_3": ["@-------#---X--^^--", "--------XX--X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X------", "--\\//---XX--X------", "--------XX--X------", "--*-----#---&--^^-O"], "2_13": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*-----------", "--#--------XXXXXX--", "--------#--XXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "2_5": ["@-------#---X--X---", "--------XX--X--X---", "--------XX--X--X---", "--------XX--X--X---", "--------XX--X--X---", "-----#------X--X---", "--------XX--X--X---", "--/\\\\---XX--X--X---", "--\\//---XX--X--X---", "--------XX--X--X---", "--*-----#---&--&--O"], "0_7": ["@-----#---X--XXXX--", "--\\\\--XX--X--XXXX--", "--//--XX--X--XXXX--", "------XX--X--XXXX--", "------XX--X--XXXX--", "----------X--XXXX--", "------XX--X--XXXX--", "------XX--X--------", "--&---XX--X--------", "------XX--X--XX----", "------#---&--XXXX-O"], "0_6": ["@-----#---X--X--X--", "--\\\\--XX--X--X--X--", "--//--XX--X--X--X--", "------XX--X--X--X--", "------XX--X--X--X--", "----------X--X--X--", "------XX--X--X--X--", "------XX--X--X--X--", "--&---XX--X--X--X--", "------XX--X--X--X--", "------#---&--&--&-O"], "2_4": ["@-------#---X---X--", "--------XX--X---X--", "--------XX--X---X--", "--------XX--X---X--", "--------XX--X---X--", "-----#------X---X--", "--------XX--X---X--", "--/\\\\---XX--X---X--", "--\\//---XX--X------", "--------XX--X------", "--*-----#---&-----O"], "2_12": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------#XXXX---", "------------XXXX---", "--------#----*-----", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "4_2": ["@-------#------^^--", "--------XX-----^^--", "--------XX-----^^--", "--------XX-----^^--", "--------XX---------", "-----#------&------", "--------XX-----^^--", "--/\\\\---XX-----^^--", "--\\//---XX-----^^--", "--------XX-----^^--", "--*-----#------^^-O"], "0_17": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "-------------------", "--XX----XXXXXXXXX--", "--XX----XXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "6_0": ["@-------------^^^--", "----------------^--", "----------------^--", "----------------^--", "----------------^--", "-----#--#--&-------", "----------------&--", "--/\\\\--------------", "--\\//--------------", "-------------------", "--*-----*-----^^^-O"], "6_2": ["@----------X--^^^--", "-----------X----X--", "-----------X----X--", "-----------X-------", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X-------", "-----------X-------", "--*-----*--&--^^^-O"], "0_15": ["@---XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "-------------------", "-------XXXXXXXXXX--", "-------XXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX--", "----XXXXXXXXXXXXX-O"], "4_0": ["@------------------", "-------------------", "---------------#---", "-------------------", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\--------------", "--\\//--------------", "----------------/--", "--*-----*-------\\-O"], "2_10": ["@-------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXX--------", "-----#--XXX--&-----", "----------------#--", "--/\\\\---XXXXXXXXX--", "--\\//---XXXXXXXXX--", "--------XXXXXXXXX--", "--*-----XXXXXXXXX-O"], "2_6": ["@-------#---X--XX--", "--------XX--X--XX--", "--------XX--X--XX--", "--------XX--X--XX--", "--------XX--X--XX--", "-----#------X--XX--", "--------XX--X--XX--", "--/\\\\---XX--X------", "--\\//---XX--X------", "--------XX--X--XX--", "--*-----#---&--XX-O"], "0_4": ["@-----#---X--X-----", "--\\\\--XX--X--X-----", "--//--XX--X--X-----", "------XX--X--X-----", "------XX--X--X-----", "----------X--X-----", "------XX--X--X-----", "------XX--X--X--&--", "--&---XX--X--X-----", "------XX--X--X-----", "------#---&--&----O"], "0_5": ["@-----#---X--X-----", "--\\\\--XX--X--X--/--", "--//--XX--X--X--\\--", "------XX--X--X-----", "------XX--X--X-----", "----------X--X-----", "------XX--X--X-----", "------XX--X--X-----", "--&---XX--X--X-----", "------XX--X--X-----", "------#---&--&----O"], "2_7": ["@-------#---XXXXX--", "--------XX--XXXXX--", "--------XX--XXXXX--", "--------XX--XXXXX--", "--------XX---------", "-----#--------&----", "--------XX---------", "--/\\\\---XX--XXXXX--", "--\\//---XX--XXXXX--", "--------XX--XXXXX--", "--*-----#---XXXXX-O"], "2_11": ["@-XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-----", "--XX--XXX--XXX-#---", "--XX--XXX--XXX-----", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--XXXXXXXXXXXXXX---", "--*XXXXXXXXXXXXX---", "-------------------", "--#----&----&-----O"], "4_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X-------", "-----------X--*----", "--*-----*--&------O"], "0_14": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------------------", "--#----XXXXXXXXXX--", "-------XXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "6_3": ["@---------X---^^^--", "----------------X--", "----------X-----X--", "---------XX-----X--", "--------XXX-----X--", "-----#--X#&-----X--", "--------XXX-----X--", "--/\\\\----XX-----X--", "--\\//-----X-----X--", "----------------#--", "--*-------X---^^^-O"], "1_2": ["@----------X-------", "-----------X--//\\--", "-----------X--\\\\/--", "-----------X-------", "-----------X-------", "-----#--&--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X----&--", "-----------X-------", "--*--------&------O"], "3_0": ["@------------------", "-------------------", "-------------------", "-------------------", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\---------&----", "--\\//--------------", "-------------------", "--*-----*---------O"], "5_6": ["@-----XXXXX--^^^^--", "--\\\\--XXXXX-----*--", "--//--XXXXX-----X--", "------XXXXX-----X--", "----------------X--", "----------------X--", "--------#-------X--", "------XXXXX-----X--", "--&---XXXXX-----X--", "------XXXXX--------", "------XXXXX--^^^^-O"], "6_12": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--X--XX--XX*#XX----", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "-------------------", "--X--XX--XX--XX----", "--X--XX--XX--XX----", "--X*&XX*#XX--XX*#--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "7_4": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "--------^^^--XXXX--", "--------^^^--XXXX--", "---------*-----*---", "-----#--^^^--------", "---------&------#--", "--/\\\\---^^^--XXXX--", "--\\//---^^^--XXXX--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "7_5": ["@-----XXX--^^^^^^--", "--\\\\--XXX----------", "--//--XXX-------X--", "------XXX------XX--", "------XXX-----XXX--", "------XXX-----X#*--", "--------------XXX--", "---------------XX--", "--&---XXX-------X--", "------XXX----------", "------XXX--^^^^^^-O"], "6_13": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-------*---*---*---", "-------------------", "--------#---#---#--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "5_7": ["@-----XXXXXX--^^^--", "--\\\\--XXXXXX----X--", "--//--XXXXXX----X--", "------XXXXXX----X--", "--------*-------X--", "----------------X--", "---------#------X--", "------XXXXXX----X--", "--&---XXXXXX----X--", "------XXXXXX----#--", "------XXXXXX--^^^-O"], "3_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X--&----", "--\\//------X-------", "-----------X-------", "--*-----*--&------O"], "1_3": ["@----------X--X----", "-----------X--X----", "-----------X--X----", "-----------X--X----", "-----------X--X----", "-----#--&--X--X----", "-----------X--X----", "--/\\\\------X--X----", "--\\//------X--X----", "-----------X--X----", "--*--------&--&---O"], "4_16": ["@-XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "---#XXXX-----#XXX--", "----XXXX------XXX--", "-----*----*----*---", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "4_14": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--------------#XX--", "-----&---------XX--", "--------#--#----*--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "1_1": ["@----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----------X-------", "-----#--&--X-------", "-----------X-------", "--/\\\\------X--&----", "--\\//------X-------", "-----------X-------", "--*--------&------O"], "3_3": ["@-------#---X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X------", "--\\//---XX--X------", "--------XX--X--*---", "--*-----#---&-----O"], "5_5": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "---------&---XXXX--", "--------^^^--XXXX--", "--------^^^--XXXX--", "-----#--^^^--XXXX--", "--------^^^--XXX---", "--/\\\\---^^^--------", "--\\//----*------X--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "9_8": ["@-^^^^^^^--XXXXXX--", "-----------XXXXXX--", "------X----XXXXXX--", "-----XX----XXXXXX--", "----XXX------#XXX--", "----X#*-------XXX--", "----XXX--------*---", "-----XX----XXXXXX--", "------X----XXXXXX--", "-----------XXXXXX--", "--^^^^^^^--XXXXXX-O"], "6_11": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*---*---*---", "--#----------------", "--------#---#---#--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "7_7": ["@---^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "-----*-----*---*---", "----^^^------------", "-----&------#---#--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX--", "----^^^--XXXXXXXX-O"], "7_6": ["@----XXXXXX--^^^^--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX-----X--", "-------*-------XX--", "--#------------X#--", "--------#------XX--", "-----XXXXXX-----X--", "-----XXXXXX--------", "-----XXXXXX--------", "-----XXXXXX--^^^^-O"], "6_10": ["@-----XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "--^--------*---*---", "--^^---------------", "--^-----#---#---#--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "5_4": ["@-------^^^--XXXX--", "--------^^^--XXXX--", "---------&---XXXX--", "--------^^^--XXXX--", "--------^^^--------", "-----#--^^^----&---", "--------^^^--------", "--/\\\\---^^^--XXXX--", "--\\//----*---XXXX--", "--------^^^--XXXX--", "--*-----^^^--XXXX-O"], "3_2": ["@-------#------^---", "--------XX---------", "--------XX---------", "--------XX---------", "--------XX---------", "-----#------&------", "--------XX---------", "--/\\\\---XX---------", "--\\//---XX---------", "--------XX---------", "--*-----#------^--O"], "1_0": ["@------------------", "-------------------", "-------------------", "-------------------", "-------------------", "-----#--&--&--&----", "-------------------", "--/\\\\--------------", "--\\//--------------", "-------------------", "--*---------------O"], "4_15": ["@-XXXXXXXXXXXXXXX--", "--#XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "-----#XXXX-----#X--", "------XXXX------X--", "-------*----*------", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "---XXXXXXXXXXXXXX--", "--XXXXXXXXXXXXXXX-O"], "4_11": ["@-----XXXXXXXXXXX--", "--\\\\--XXXXXXXXXXX--", "--//--XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------*---*---", "-------------------", "--------#---#---#--", "------XXXXXXXXXXX--", "--&---XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "1_4": ["@----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----#--&--X---XX--", "-----------X---XX--", "--/\\\\------X-------", "--\\//------X-------", "-----------X---XX--", "--*--------&---XX-O"], "3_6": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-------------------", "-----#--#----&--&--", "-------------------", "--/\\\\------XXXXXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*-----*--XXXXXX-O"], "5_0": ["@-------------^-^--", "----------------^--", "-------------------", "-------------------", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\--------------", "--\\//--------------", "----------------^--", "--*-----*-----^-^-O"], "7_2": ["@-------#---^^^^^--", "--------XX----^----", "--------XX----^----", "--------XX----^----", "--------XX----^----", "-----#-------------", "--------XX----&----", "--/\\\\---XX---------", "--\\//---XX---------", "--------XX---------", "--*-----#---^^^^^-O"], "7_3": ["@---------X--^^^^--", "---------------X---", "----------X----X---", "---------XX----X---", "--------XXX----X---", "-----#--X#&----X---", "--------XXX----X---", "--/\\\\----XX----X---", "--\\//-----X----X---", "---------------#---", "--*-------X--^^^^-O"], "8_10": ["@-^^^^--XXXXXXXXX--", "--------XXXXXXXXX--", "--------XXXXXXXXX--", "--XX----XXXXXXXXX--", "--*X------*---#XX--", "--&------------XX--", "--*X-------#----*--", "--XX----XXXXXXXXX--", "--\\\\----XXXXXXXXX--", "--//----XXXXXXXXX--", "--^^^^--XXXXXXXXX-O"], "5_1": ["@----------X---^^--", "-----------X---^^--", "-----------X---^^--", "-----------X---^^--", "-----------X---^^--", "-----#--#--X---^^--", "-----------X---^^--", "--/\\\\------X---^^--", "--\\//------X-------", "-----------X-------", "--*-----*--&---^^-O"], "3_7": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XX------", "-----#--#--XX--&---", "-------------------", "--/\\\\------XXXXXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*-----*--XXXXXX-O"], "1_5": ["@----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----#--&--X--XXX--", "-----------X--XXX--", "--/\\\\------X-------", "--\\//------X-------", "-----------X--XX---", "--*--------&--XXX-O"], "4_10": ["@-----XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "-----------*---#X--", "--#-------------X--", "--------#---#------", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX--", "------XXXXXXXXXXX-O"], "4_12": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------*------#XX--", "--#--------&---XX--", "--------#-------*--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"], "1_7": ["@----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----------XXXXXX--", "-----#--&--XXX-----", "-------------------", "--/\\\\---------XXX--", "--\\//------XXXXXX--", "-----------XXXXXX--", "--*--------XXXXXX-O"], "3_5": ["@----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----------X--XXX--", "-----#--#--X--XXX--", "-----------X--XXX--", "--/\\\\------X-------", "--\\//------X-------", "-----------X--XX---", "--*-----*--&--XXX-O"], "5_3": ["@-------#---X--^---", "--------XX--X--^---", "--------XX--X--^---", "--------XX--X--^^--", "--------XX--X------", "-----#------X------", "--------XX--X------", "--/\\\\---XX--X------", "--\\//---XX--X---#--", "--------XX--X------", "--*-----#---&-----O"], "7_1": ["@----------X--^----", "-----------X--^----", "-----------X--^----", "-----------X--^^^--", "-----------X-------", "-----#--#--X-------", "-----------X-------", "--/\\\\------X-------", "--\\//------X---#---", "-----------X-------", "--*-----*--&------O"], "7_0": ["@-------------^----", "--------------^----", "--------------^----", "--------------^^^--", "-------------------", "-----#--#--&-------", "-------------------", "--/\\\\--------------", "--\\//----------#---", "-------------------", "--*-----*---------O"], "5_2": ["@-------#------^---", "--------XX-----^---", "--------XX-----^---", "--------XX-----^^--", "--------XX---------", "-----#------&------", "--------XX---------", "--/\\\\---XX---------", "--\\//---XX------#--", "--------XX---------", "--*-----#---------O"], "3_4": ["@----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----------X---XX--", "-----#--#--X---XX--", "-----------X-------", "--/\\\\------X-------", "--\\//------X---XX--", "-----------X---XX--", "--*-----*--&---XX-O"], "1_6": ["@-----------XXXXX--", "------------XXXXX--", "------------XXXXX--", "------------XXXXX--", "------------XXXXX--", "-----#--&---XXXXX--", "------------XXX----", "--/\\\\--------------", "--\\//----------XX--", "------------XXXXX--", "--*---------XXXXX-O"], "4_13": ["@----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-------#XXXX--#XX--", "--#-----XXXX---XX--", "---------*------*--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX--", "-----XXXXXXXXXXXX-O"] };


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsbUJBQU8sQ0FBQyx5RUFBa0I7QUFDakQsa0RBQWlELEVBQUUscUNBQXFDLDJDQUEyQyxFQUFDO0FBQ3BJLGNBQWMsZ0JBQWdCLG1CQUFPLENBQUMseURBQVU7Ozs7Ozs7Ozs7O0FDNUJuQztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjO0FBQ2QsY0FBYyxLQUFLOzs7Ozs7O1VDSG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCLG1CQUFPLENBQUMsaURBQWU7QUFDN0MsaUJBQWlCLG1CQUFPLENBQUMsdUNBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvRW5lbXkudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvRm9vZC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9NZW51VGV4dC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Nb3ZhYmxlLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1BsYXllci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Qb3J0YWwudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUmVuZGVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1N3aXRjaC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9QbGF5ZXJMb3N0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyV29uLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvU2VsZWN0TGV2ZWwudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9TdGFydE1lbnUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9FbmVteUFJLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1BsYXllckNvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9QbGF5ZXJNb3ZlbWVudC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9Qb3J0YWxTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUmVuZGVyR2FtZUluZm8udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUmVuZGVyTGV2ZWwudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUmVuZGVyU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1JlbmRlck1lbnVUZXh0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1VwZGF0ZVNlbGVjdGVkLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1VwZGF0ZVBsYXllclR1cm4udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL2luZGV4LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvQ29tcG9uZW50LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvQ29tcG9uZW50cy9Qb3NpdGlvbjJkLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvQ29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0VDU1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvS2V5LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9TeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9VdGlsaXR5L0Nvb2tpZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL1V0aWxpdHkvR3JpZENvbGxpc2lvbnMudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9VdGlsaXR5L2luZGV4LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29sbGlkZXIgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIENvbGxpZGVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29sbGlkZXIgPSBDb2xsaWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgRW5lbXkgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc3RhcnRQb3NpdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBzdGFydFBvc2l0aW9uO1xuICAgIH1cbn1cbmV4cG9ydHMuRW5lbXkgPSBFbmVteTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Gb29kID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBGb29kIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuRm9vZCA9IEZvb2Q7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVudVRleHQgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgTWVudVRleHQgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgb3JkZXIsIHNlbGVjdGVkLCBiZWF0ZW4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMuYmVhdGVuID0gYmVhdGVuO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVudVRleHQgPSBNZW51VGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Nb3ZhYmxlID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBNb3ZhYmxlIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuTW92YWJsZSA9IE1vdmFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc3RhbWluYSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YW1pbmEgPSBzdGFtaW5hO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvcnRhbCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUG9ydGFsIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlciA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUmVuZGVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlciA9IFJlbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Td2l0Y2ggPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIFN3aXRjaCBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlN3aXRjaCA9IFN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuL0NvbGxpZGVyXCIpO1xuY29uc3QgRW5lbXlfMSA9IHJlcXVpcmUoXCIuL0VuZW15XCIpO1xuY29uc3QgRm9vZF8xID0gcmVxdWlyZShcIi4vRm9vZFwiKTtcbmNvbnN0IE1lbnVUZXh0XzEgPSByZXF1aXJlKFwiLi9NZW51VGV4dFwiKTtcbmNvbnN0IE1vdmFibGVfMSA9IHJlcXVpcmUoXCIuL01vdmFibGVcIik7XG5jb25zdCBQbGF5ZXJfMSA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IFBvcnRhbF8xID0gcmVxdWlyZShcIi4vUG9ydGFsXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi9SZW5kZXJcIik7XG5jb25zdCBTd2l0Y2hfMSA9IHJlcXVpcmUoXCIuL1N3aXRjaFwiKTtcbmV4cG9ydHMuQyA9IHtcbiAgICBDb2xsaWRlcjogQ29sbGlkZXJfMS5Db2xsaWRlcixcbiAgICBFbmVteTogRW5lbXlfMS5FbmVteSxcbiAgICBNZW51VGV4dDogTWVudVRleHRfMS5NZW51VGV4dCxcbiAgICBNb3ZhYmxlOiBNb3ZhYmxlXzEuTW92YWJsZSxcbiAgICBQbGF5ZXI6IFBsYXllcl8xLlBsYXllcixcbiAgICBQb3J0YWw6IFBvcnRhbF8xLlBvcnRhbCxcbiAgICBSZW5kZXI6IFJlbmRlcl8xLlJlbmRlcixcbiAgICBTd2l0Y2g6IFN3aXRjaF8xLlN3aXRjaCxcbiAgICBGb29kOiBGb29kXzEuRm9vZCxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZSA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzXCIpO1xuY29uc3QgU3lzdGVtc18xID0gcmVxdWlyZShcIi4uL1N5c3RlbXNcIik7XG5jb25zdCBsZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9sZXZlbHNcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY2xhc3MgR2FtZSBleHRlbmRzIFdvcmxkRW5naW5lXzEuRUNTU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBsYXllcldvbkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJMb3N0SW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNlbGZJbmRleCA9IDA7XG4gICAgICAgIHRoaXMubWFpbk1lbnVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2V0QkIoJ2dhbWUgb3ZlcicsIDApO1xuICAgICAgICB0aGlzLnNldEJCKCdyZXN0YXJ0JywgZmFsc2UpO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkge1xuICAgICAgICBjb25zdCB4TW9kID0gMjA7XG4gICAgICAgIGNvbnN0IHlNb2QgPSAyMDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IDg7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSA3O1xuICAgICAgICBsZXQgeE1pbiA9IDEwMDA7XG4gICAgICAgIGxldCB4TWF4ID0gMDtcbiAgICAgICAgbGV0IHlNaW4gPSAxMDAwO1xuICAgICAgICBsZXQgeU1heCA9IDA7XG4gICAgICAgIGNvbnN0IGdjID0gbmV3IFdvcmxkRW5naW5lXzEuVXRpbGl0eS5HcmlkQ29sbGlzaW9ucygpO1xuICAgICAgICBsZXQgc3dpdGNoQ291bnQgPSAwO1xuICAgICAgICBjb25zdCBsdmxLZXkgPSBlbmdpbmUuZ2V0QkIoJ2xldmVsJyk7XG4gICAgICAgIGNvbnN0IGx2bCA9IGxldmVsc18xLkxFVkVMU1tsdmxLZXldO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGx2bC5sZW5ndGg7ICsreSkge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsdmxbeV0ubGVuZ3RoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gbHZsW3ldW3hdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4UG9zID0gb2Zmc2V0WCArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgeVBvcyA9IG9mZnNldFkgKyB5O1xuICAgICAgICAgICAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4UG9zKTtcbiAgICAgICAgICAgICAgICB4TWF4ID0gTWF0aC5tYXgoeE1heCwgeFBvcyk7XG4gICAgICAgICAgICAgICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlQb3MpO1xuICAgICAgICAgICAgICAgIHlNYXggPSBNYXRoLm1heCh5TWF4LCB5UG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29tcG9uZW50c18xLkMuUmVuZGVyKGNoYXIpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoeFBvcywgeVBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIHBvcyk7XG4gICAgICAgICAgICAgICAgZ2Muc2V0KHBvcywgaWQpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09ICdPJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLlBvcnRhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCQigncG9ydGFsIGlkJywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLlBsYXllcigzMCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLk1vdmFibGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QkIoJ3BsYXllciBpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5Td2l0Y2goKSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29tcG9uZW50c18xLkMuTW92YWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5FbmVteShuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoeFBvcywgeVBvcykpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnXicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5FbmVteShuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoeFBvcywgeVBvcykpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnLycgfHwgY2hhciA9PSAnXFxcXCcgfHwgY2hhciA9PSAnWCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb2xsaWRlcl8xLkNvbGxpZGVyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICcmJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLkZvb2QoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHkgPSAzOyB5IDwgZW5naW5lLmhlaWdodCAvIHlNb2QgLSAxOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgZW5naW5lLndpZHRoIC8geE1vZCAtIDE7ICsreCkge1xuICAgICAgICAgICAgICAgIGlmICh4IDwgeE1pbiB8fCB4ID4geE1heCB8fCB5IDwgeU1pbiB8fCB5ID4geU1heCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkRW50aXR5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29tcG9uZW50c18xLkMuUmVuZGVyKCdYJykpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSBuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoeCwgeSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PSB4TWluIC0gMSB8fCB5ID09IHlNaW4gLSAxIHx8IHggPT0geE1heCArIDEgfHwgeSA9PSB5TWF4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2Muc2V0KHBvcywgaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb21wb25lbnRzXzEuQy5Db2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJCKCdzd2l0Y2ggY291bnQnLCBzd2l0Y2hDb3VudCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ29mZnNldCB4Jywgb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ29mZnNldCB5Jywgb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3ggbW9kJywgeE1vZCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3kgbW9kJywgeU1vZCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ2dyaWQgY29sbGlzaW9ucycsIGdjKTtcbiAgICAgICAgdGhpcy5zZXRCQigndGltZSBzdGVwJywgMCk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDAsIG5ldyBTeXN0ZW1zXzEuUy5QbGF5ZXJNb3ZlbWVudCgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMTAsIG5ldyBTeXN0ZW1zXzEuUy5QbGF5ZXJDb2xsaXNpb24oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDIwLCBuZXcgU3lzdGVtc18xLlMuRW5lbXlBSSgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oOTAsIG5ldyBTeXN0ZW1zXzEuUy5Qb3J0YWxTeXN0ZW0oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwMCwgbmV3IFN5c3RlbXNfMS5TLlJlbmRlclN5c3RlbSgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMTEwLCBuZXcgU3lzdGVtc18xLlMuUmVuZGVyR2FtZUluZm8oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEyMCwgbmV3IFN5c3RlbXNfMS5TLlJlbmRlckxldmVsKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg5MDAsIG5ldyBTeXN0ZW1zXzEuUy5VcGRhdGVQbGF5ZXJUdXJuKCkpO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gICAgY3VzdG9tVXBkYXRlKGVuZ2luZSkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IHRoaXMuZ2V0QkIoJ2dhbWUgb3ZlcicpO1xuICAgICAgICBpZiAoZ2FtZU92ZXIgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllckxvc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lT3ZlciA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJXb25JbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGZJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuUSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW5NZW51SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyTG9zdCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBQbGF5ZXJMb3N0IGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FeGl0KGVuZ2luZSkgeyB9XG4gICAgdXBkYXRlKGVuZ2luZSkge1xuICAgICAgICB0aGlzLnRpbWVyICs9IGVuZ2luZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiAyIHx8IGVuZ2luZS5rZXlEb3duLmhhcyhXb3JsZEVuZ2luZV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuc2V0Rm9udCg0MCk7XG4gICAgICAgICAgICBlbmdpbmUuZHJhd1RleHQoMjAwLCAyNDAsICdZb3UgbG9zdCEgOi8nLCAncmVkJyk7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBsYXllckxvc3QgPSBQbGF5ZXJMb3N0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllcldvbiA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBQbGF5ZXJXb24gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7IH1cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIHRoaXMudGltZXIgKz0gZW5naW5lLmRlbHRhO1xuICAgICAgICBpZiAodGhpcy50aW1lciA+IDIgfHwgZW5naW5lLmtleURvd24uaGFzKFdvcmxkRW5naW5lXzEuS2V5LkVOVEVSKSkge1xuICAgICAgICAgICAgV29ybGRFbmdpbmVfMS5VdGlsaXR5LkNvb2tpZS5zZXQoZW5naW5lLmdldEJCKCdsZXZlbCcpLCAnYicpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZ2luZS5zZXRGb250KDQwKTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dCgyMDAsIDI0MCwgJ1lvdSB3b24hJywgJ2dyZWVuJyk7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBsYXllcldvbiA9IFBsYXllcldvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZWxlY3RMZXZlbCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBSZW5kZXJNZW51VGV4dF8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvUmVuZGVyTWVudVRleHRcIik7XG5jb25zdCBVcGRhdGVTZWxlY3RlZF8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvVXBkYXRlU2VsZWN0ZWRcIik7XG5jb25zdCBsZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9sZXZlbHNcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50c1wiKTtcbmNsYXNzIFNlbGVjdExldmVsIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBsZXZlbHNfMS5MRVZFTFMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvcnRlZExldmVscy5zb3J0KCk7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIGVuZ2luZS5zZXRGb250KDIwKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRlZExldmVscy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEVudGl0eSgpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpID09IDA7XG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KHRoaXMuc29ydGVkTGV2ZWxzW2ldLCBpLCBzZWxlY3RlZCwgV29ybGRFbmdpbmVfMS5VdGlsaXR5LkNvb2tpZS5nZXQodGhpcy5zb3J0ZWRMZXZlbHNbaV0pICE9IHVuZGVmaW5lZCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QkIoJ3NlbGVjdGVkJywgMCk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDAsIG5ldyBVcGRhdGVTZWxlY3RlZF8xLlVwZGF0ZVNlbGVjdGVkKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgxMCwgbmV3IFJlbmRlck1lbnVUZXh0XzEuUmVuZGVyTWVudVRleHRTeXN0ZW0oKSk7XG4gICAgfVxuICAgIG9uRXhpdChlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICBjdXN0b21VcGRhdGUoZW5naW5lKSB7XG4gICAgICAgIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuRU5URVIpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0QkIoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBlbmdpbmUuc2V0QkIoJ2xldmVsJywgdGhpcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkKS5nZXQoQ29tcG9uZW50c18xLkMuTWVudVRleHQpLm5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufVxuZXhwb3J0cy5TZWxlY3RMZXZlbCA9IFNlbGVjdExldmVsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN0YXJ0TWVudSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBTdGFydE1lbnUgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7IH1cbiAgICBvbkV4aXQoZW5naW5lKSB7IH1cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuRU5URVIpKSB7XG4gICAgICAgICAgICBlbmdpbmUua2V5RG93bi5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZ2luZS5zZXRGb250KDQwKTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dCgyMjAsIDEwMCwgJ0R1bmdlb25HcmFtcycpO1xuICAgICAgICAgICAgZW5naW5lLnNldEZvbnQoMjApO1xuICAgICAgICAgICAgZW5naW5lLmRyYXdUZXh0KDI0NSwgMTUwLCAnUHJlc3MgRW50ZXIgdG8gU3RhcnQnKTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dCg0MCwgMjAwLCAnJiBnaXZlcyB5b3Ugc3RhbWluYScsICd5ZWxsb3cnKTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dCg0MCwgMjIyLCAnQ29sbGVjdCBhbGwgKiB0byBvcGVuIHRoZSBwb3J0YWwuJywgJ3llbGxvdycpO1xuICAgICAgICAgICAgZW5naW5lLmRyYXdUZXh0KDQwLCAyNDQsICdTdGVwIHRocm91Z2ggdGhlIHBvcnRhbCBPIHRvIHdpbiEnLCAneWVsbG93Jyk7XG4gICAgICAgICAgICBlbmdpbmUuZHJhd1RleHQoNDAsIDI2NiwgJ0J1dCBtYWtlIHN1cmUgdG8gYXZvaWQgdGhlIGVuZW1pZXMgIyBhbmQgdHJhcHMgXicsICd5ZWxsb3cnKTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dCg0MCwgMzUwLCAnV0FTRCBvciBBcnJvd3MgdG8gbW92ZScsICdncmVlbicpO1xuICAgICAgICAgICAgZW5naW5lLmRyYXdUZXh0KDQwLCAzNzUsICdTcGFjZSB0byBkbyBub3RoaW5nIGZvciBhIHR1cm4nLCAnZ3JlZW4nKTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dCg0MCwgNDAwLCAnUiB0byByZXN0YXJ0JywgJ2dyZWVuJyk7XG4gICAgICAgICAgICBlbmdpbmUuZHJhd1RleHQoNDAsIDQyNSwgJ1EgdG8gcXVpdCcsICdncmVlbicpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5TdGFydE1lbnUgPSBTdGFydE1lbnU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBHYW1lXzEgPSByZXF1aXJlKFwiLi9HYW1lXCIpO1xuY29uc3QgUGxheWVyTG9zdF8xID0gcmVxdWlyZShcIi4vUGxheWVyTG9zdFwiKTtcbmNvbnN0IFBsYXllcldvbl8xID0gcmVxdWlyZShcIi4vUGxheWVyV29uXCIpO1xuY29uc3QgU2VsZWN0TGV2ZWxfMSA9IHJlcXVpcmUoXCIuL1NlbGVjdExldmVsXCIpO1xuY29uc3QgU3RhcnRNZW51XzEgPSByZXF1aXJlKFwiLi9TdGFydE1lbnVcIik7XG5leHBvcnRzLlNjZW5lID0ge1xuICAgIEdhbWU6IEdhbWVfMS5HYW1lLFxuICAgIFBsYXllckxvc3Q6IFBsYXllckxvc3RfMS5QbGF5ZXJMb3N0LFxuICAgIFBsYXllcldvbjogUGxheWVyV29uXzEuUGxheWVyV29uLFxuICAgIFNlbGVjdExldmVsOiBTZWxlY3RMZXZlbF8xLlNlbGVjdExldmVsLFxuICAgIFN0YXJ0TWVudTogU3RhcnRNZW51XzEuU3RhcnRNZW51XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVuZW15QUkgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgQ29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHNcIik7XG5jb25zdCBFbmVteV8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvRW5lbXlcIik7XG5jbGFzcyBFbmVteUFJIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1dvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkLCBDb21wb25lbnRzXzEuQy5FbmVteSwgQ29tcG9uZW50c18xLkMuTW92YWJsZV0pO1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICAvLyBlbmVteSBjYW4gb25seSBtb3ZlIGR1cmluZyB0aGVpciB0dXJuXG4gICAgICAgIGlmICh0aGlzLmVjcy5nZXRCQigndGltZSBzdGVwJykgJSAzICE9IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIGdldCB0aGUgcGxheWVyIHBvc2l0aW9uIGFuZCBncmlkIGNvbGxpc2lvbiB0b29sXG4gICAgICAgIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuZ2V0QkIoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQpO1xuICAgICAgICBjb25zdCBnYyA9IHRoaXMuZWNzLmdldEJCKCdncmlkIGNvbGxpc2lvbnMnKTtcbiAgICAgICAgZm9yIChsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3MgPSBjb21wb25lbnRzLmdldChXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZCk7XG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IGNvbXBvbmVudHMuZ2V0KEVuZW15XzEuRW5lbXkpLnN0YXJ0UG9zaXRpb247XG4gICAgICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3MuZXVjbGlkZWFuRGlzdGFuY2UocGxheWVyUG9zKSA8PSAzICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFBvcy5ldWNsaWRlYW5EaXN0YW5jZShzdGFydFBvcykgPD0gMykge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHBsYXllclBvczsgLy8gZ28gdG93YXJkcyB0aGUgcGxheWVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzdGFydFBvczsgLy8gZ28gdG93YXJkcyBzdGFydCBwb3NpdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgZW5lbXkgdG93YXJkcyB0aGUgcGxheWVyIGlmIHRoZSBwbGF5ZXIgaXMgaW4gcmFuZ2VcbiAgICAgICAgICAgIGNvbnN0IG1vdmVzID0gdGhpcy5nZXRNb3ZlcyhnYywgY3VycmVudFBvcywgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChtb3Zlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNsb3Nlc3RWYWwgPSAxMDAwO1xuICAgICAgICAgICAgbGV0IGNsb3Nlc3RJbmRleCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGN1cnJlbnRQb3MuYWRkKG1vdmVzW2ldKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGdjLmdldChwb3MpO1xuICAgICAgICAgICAgICAgIGlmIChpZCA9PSB1bmRlZmluZWQgfHwgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuaGFzKENvbXBvbmVudHNfMS5DLlBsYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gcG9zLmV1Y2xpZGVhbkRpc3RhbmNlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWwgPCBjbG9zZXN0VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0VmFsID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VzdEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjbG9zZXN0SW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zLnNldFBvcyhjdXJyZW50UG9zLmFkZChtb3Zlc1tjbG9zZXN0SW5kZXhdKSk7XG4gICAgICAgICAgICAgICAgZ2MuYWNjZXB0Q2hhbmdlKGN1cnJlbnRQb3MsIGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvcy5lcXVhbHMocGxheWVyUG9zKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVjcy5zZXRCQignZ2FtZSBvdmVyJywgLTEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aW1lID0gdGhpcy5lY3MuZ2V0QkIoJ3RpbWUgc3RlcCcpO1xuICAgICAgICB0aGlzLmVjcy5zZXRCQigndGltZSBzdGVwJywgdGltZSArIDEpO1xuICAgIH1cbiAgICBnZXRNb3ZlcyhnYywgY3VycmVudFBvcywgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBtb3ZlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBjb25zdCBkaWZmX3ggPSBjdXJyZW50UG9zLmdldFgoKSAtIHRhcmdldC5nZXRYKCk7XG4gICAgICAgIGNvbnN0IGRpZmZfeSA9IGN1cnJlbnRQb3MuZ2V0WSgpIC0gdGFyZ2V0LmdldFkoKTtcbiAgICAgICAgaWYgKGRpZmZfeCA9PSAwICYmIGRpZmZfeSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbW92ZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpZmZfeSkgPiBNYXRoLmFicyhkaWZmX3gpKSB7XG4gICAgICAgICAgICBpZiAoZGlmZl95ID4gMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZCgwLCAtMSkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZl95IDwgMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZCgwLCAxKSk7XG4gICAgICAgICAgICBpZiAoZGlmZl94ID4gMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZCgtMSwgMCkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGlmZl94IDwgMClcbiAgICAgICAgICAgICAgICBtb3Zlcy5wdXNoKG5ldyBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZCgxLCAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoTWF0aC5hYnMoZGlmZl94KSA+IE1hdGguYWJzKGRpZmZfeSkpIHtcbiAgICAgICAgICAgIGlmIChkaWZmX3ggPiAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkKC0xLCAwKSk7XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmX3ggPCAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkKDEsIDApKTtcbiAgICAgICAgICAgIGlmIChkaWZmX3kgPiAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkKDAsIC0xKSk7XG4gICAgICAgICAgICBlbHNlIGlmIChkaWZmX3kgPCAwKVxuICAgICAgICAgICAgICAgIG1vdmVzLnB1c2gobmV3IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkKDAsIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoZGlmZl94ICsgZGlmZl95KSAlIDIgPT0gMCkge1xuICAgICAgICAgICAgaWYgKGRpZmZfeSA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoMCwgLTEpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeSA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoMCwgMSkpO1xuICAgICAgICAgICAgaWYgKGRpZmZfeCA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoLTEsIDApKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeCA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoMSwgMCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpZmZfeCA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoLTEsIDApKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeCA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoMSwgMCkpO1xuICAgICAgICAgICAgaWYgKGRpZmZfeSA+IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoMCwgLTEpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpZmZfeSA8IDApXG4gICAgICAgICAgICAgICAgbW92ZXMucHVzaChuZXcgV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQoMCwgMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3ZlcztcbiAgICB9XG59XG5leHBvcnRzLkVuZW15QUkgPSBFbmVteUFJO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllckNvbGxpc2lvbiA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50c1wiKTtcbmNsYXNzIFBsYXllckNvbGxpc2lvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKTtcbiAgICAgICAgY29uc3QgcG9zID0gY29tcG9uZW50cy5nZXQoV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQpO1xuICAgICAgICBpZiAoIXBvcy51cGRhdGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcGxheWVyIGlzIG91dCBvZiBzdGFtaW5hLCB0aGV5J3ZlIGxvc3QgdW5sZXNzIHRoZSBwbGF5ZXJcbiAgICAgICAgLy8gaGFzIGhpdCBhIHBvcnRhbCBvciBmb29kLCB3aGljaCBpcyBoYW5kbGVkIGJlbG93LlxuICAgICAgICBjb25zdCBwbGF5ZXIgPSBjb21wb25lbnRzLmdldChDb21wb25lbnRzXzEuQy5QbGF5ZXIpO1xuICAgICAgICBpZiAocGxheWVyLnN0YW1pbmEgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ2dhbWUgb3ZlcicsIC0xKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBubyBjb2xsaXNpb24gd2FzIGZvdW5kLCB0aGUgcGxheWVyIGNhbiBtb3ZlXG4gICAgICAgIGNvbnN0IGdjID0gdGhpcy5lY3MuZ2V0QkIoJ2dyaWQgY29sbGlzaW9ucycpO1xuICAgICAgICBjb25zdCBsb2NJRCA9IGdjLmdldChwb3MpO1xuICAgICAgICBpZiAobG9jSUQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnYy5hY2NlcHRDaGFuZ2UocG9zLCBpZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIHBsYXllciByYW4gaW50byBhIHN3aXRjaFxuICAgICAgICBjb25zdCBsb2NDb21wb25lbnRzID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhsb2NJRCk7XG4gICAgICAgIGlmIChsb2NDb21wb25lbnRzLmhhcyhDb21wb25lbnRzXzEuQy5Td2l0Y2gpKSB7XG4gICAgICAgICAgICBjb25zdCBzd2l0Y2hDb3VudCA9IHRoaXMuZWNzLmdldEJCKCdzd2l0Y2ggY291bnQnKSAtIDE7XG4gICAgICAgICAgICB0aGlzLmVjcy5zZXRCQignc3dpdGNoIGNvdW50Jywgc3dpdGNoQ291bnQpO1xuICAgICAgICAgICAgdGhpcy5lY3MucmVtb3ZlRW50aXR5KGxvY0lEKTtcbiAgICAgICAgICAgIGdjLmFjY2VwdENoYW5nZShwb3MsIGlkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiB0aGUgcGxheWVyIHJhbiBpbnRvIGFuIGVuZW15Li4uIHVoIG9oIVxuICAgICAgICBpZiAobG9jQ29tcG9uZW50cy5oYXMoQ29tcG9uZW50c18xLkMuRW5lbXkpKSB7XG4gICAgICAgICAgICB0aGlzLmVjcy5zZXRCQignZ2FtZSBvdmVyJywgLTEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBsYXllciByYW4gaW50byB0aGUgcG9ydGFsLlxuICAgICAgICBpZiAobG9jQ29tcG9uZW50cy5oYXMoQ29tcG9uZW50c18xLkMuUG9ydGFsKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWNzLmdldEJCKCdzd2l0Y2ggY291bnQnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ2dhbWUgb3ZlcicsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnJlamVjdENoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHBsYXllciBoYXMgcmFuIGludG8gZm9vZFxuICAgICAgICBpZiAobG9jQ29tcG9uZW50cy5oYXMoQ29tcG9uZW50c18xLkMuRm9vZCkpIHtcbiAgICAgICAgICAgIHBsYXllci5zdGFtaW5hID0gTWF0aC5taW4ocGxheWVyLnN0YW1pbmEgKyAyNSwgMzApO1xuICAgICAgICAgICAgdGhpcy5lY3MucmVtb3ZlRW50aXR5KGxvY0lEKTtcbiAgICAgICAgICAgIGdjLmFjY2VwdENoYW5nZShwb3MsIGlkKTtcbiAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdnYW1lIG92ZXInLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBvdGhlcndpc2UsIHdlJ3ZlIHJ1biBpbnRvIGEgY29sbGlkZXIgYW5kIHdlIHJlamVjdCB0aGUgY2hhbmdlXG4gICAgICAgIHBvcy5yZWplY3RDaGFuZ2UoKTtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllckNvbGxpc2lvbiA9IFBsYXllckNvbGxpc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJNb3ZlbWVudCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBDb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50c1wiKTtcbmNsYXNzIFBsYXllck1vdmVtZW50IGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1dvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkLCBDb21wb25lbnRzXzEuQy5SZW5kZXIsIENvbXBvbmVudHNfMS5DLlBsYXllcl0pO1xuICAgIH1cbiAgICB1cGRhdGVUaW1lU3RlcCgpIHtcbiAgICAgICAgY29uc3QgdGltZVN0ZXAgPSB0aGlzLmVjcy5nZXRCQigndGltZSBzdGVwJyk7XG4gICAgICAgIHRoaXMuZWNzLnNldEJCKCd0aW1lIHN0ZXAnLCB0aW1lU3RlcCArIDEpO1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICBsZXQgcGxheWVySUQgPSBlbnRpdGllcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKTtcbiAgICAgICAgY29uc3QgcGxheWVyID0gY29tcG9uZW50cy5nZXQoQ29tcG9uZW50c18xLkMuUGxheWVyKTtcbiAgICAgICAgbGV0IHBvcyA9IGNvbXBvbmVudHMuZ2V0KFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkKTtcbiAgICAgICAgY29uc3QgeCA9IHBvcy5nZXRYKCk7XG4gICAgICAgIGNvbnN0IHkgPSBwb3MuZ2V0WSgpO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZW5naW5lLmtleVByZXNzKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5BOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lU3RlcCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zdGFtaW5hIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHBvcy5zZXRYKHggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5TOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lU3RlcCgpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHBvcy5zZXRZKHkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnN0YW1pbmEgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5EOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZVN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwb3Muc2V0WCh4ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5zdGFtaW5hIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuVzpcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LlVQOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVTdGVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHBsYXllck1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnNldFkoeSAtIDEpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhbWluYSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LlNQQUNFOlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc3RhbWluYSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZVN0ZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbyBpbiB0aGUgZGVmYXVsdCBjYXNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGxheWVyTW92ZWQpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBsYXllck1vdmVtZW50ID0gUGxheWVyTW92ZW1lbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9ydGFsU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzXCIpO1xuY2xhc3MgUG9ydGFsU3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW0NvbXBvbmVudHNfMS5DLlBvcnRhbCwgQ29tcG9uZW50c18xLkMuUmVuZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IFtpZF0gPSBlbnRpdGllczsgLy8gdGhlcmUgY2FuIG9ubHkgYmUgb25lIHBvcnRhbFxuICAgICAgICBpZiAodGhpcy5lY3MuZ2V0QkIoJ3N3aXRjaCBjb3VudCcpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChDb21wb25lbnRzXzEuQy5SZW5kZXIpLmNoYXJhY3RlciA9ICdPJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChDb21wb25lbnRzXzEuQy5SZW5kZXIpLmNoYXJhY3RlciA9ICdvJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUG9ydGFsU3lzdGVtID0gUG9ydGFsU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlckdhbWVJbmZvID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzXCIpO1xuY2xhc3MgUmVuZGVyR2FtZUluZm8gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbQ29tcG9uZW50c18xLkMuUGxheWVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IFtpZF0gPSBlbnRpdGllcztcbiAgICAgICAgY29uc3Qgc3RhbWluYSA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChDb21wb25lbnRzXzEuQy5QbGF5ZXIpLnN0YW1pbmE7XG4gICAgICAgIC8vIHN0YW1pbmFcbiAgICAgICAgbGV0IGNvbG9yO1xuICAgICAgICBpZiAoc3RhbWluYSA+IDIwKSB7XG4gICAgICAgICAgICBjb2xvciA9ICdncmVlbic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhbWluYSA+IDEwKSB7XG4gICAgICAgICAgICBjb2xvciA9ICcjOEI4MDAwJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9yID0gJ3JlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLmRyYXdSZWN0KDIwLCAyMCwgc3RhbWluYSAqIDgsIDIwLCBjb2xvcik7XG4gICAgICAgIGNvbnN0IG1heFN0YW1pbmEgPSAzMCAqIDg7XG4gICAgICAgIGVuZ2luZS5kcmF3UmVjdE91dGxpbmUoMTksIDE4LCBtYXhTdGFtaW5hICsgMiwgMjIsIDIsICdncmF5Jyk7XG4gICAgICAgIGVuZ2luZS5kcmF3VGV4dCgzMCAqIDQsIDM1LCBgJHtzdGFtaW5hfWAsICd3aGl0ZScpO1xuICAgICAgICAvLyB0dXJuIGluZGV4XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLmVjcy5nZXRCQigndGltZSBzdGVwJyk7XG4gICAgICAgIGxldCB4ID0gdGltZSA8IDEwID8gNjEwIDogNTk1O1xuICAgICAgICBlbmdpbmUuZHJhd1RleHQoeCwgMzAsIGBUdXJuOiAke3RpbWV9YCk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJHYW1lSW5mbyA9IFJlbmRlckdhbWVJbmZvO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlckxldmVsID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIFJlbmRlckxldmVsIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW10pO1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRCQignbGV2ZWwnKTtcbiAgICAgICAgZW5naW5lLnNldEZvbnQoMjApO1xuICAgICAgICBlbmdpbmUuZHJhd1RleHQoMzAwLCAzMCwgYExldmVsOiAke2xldmVsfWAsICd3aGl0ZScpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyTGV2ZWwgPSBSZW5kZXJMZXZlbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgQ29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHNcIik7XG5jbGFzcyBSZW5kZXJTeXN0ZW0gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQsIENvbXBvbmVudHNfMS5DLlJlbmRlcl0pO1xuICAgICAgICB0aGlzLmNoYXJUb0NvbG9yID0ge1xuICAgICAgICAgICAgJ0AnOiAnd2hpdGUnLFxuICAgICAgICAgICAgJy0nOiAnI2Q5ZDFkMCcsXG4gICAgICAgICAgICAnWCc6ICcjNjM2MzYzJyxcbiAgICAgICAgICAgICcqJzogJyMwY2NlZjAnLFxuICAgICAgICAgICAgJ1xcXFwnOiAnI2MzMDBkMScsXG4gICAgICAgICAgICAnLyc6ICcjYzMwMGQxJyxcbiAgICAgICAgICAgICdvJzogJyM0MTRkNDInLFxuICAgICAgICAgICAgJ08nOiAnIzE5ZjAwYScsXG4gICAgICAgICAgICAnIyc6ICdyZWQnLFxuICAgICAgICAgICAgJ14nOiAnI2YwY2QwYScsXG4gICAgICAgICAgICAnJic6ICcjMjU5YzJiJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgeE1vZCA9IHRoaXMuZWNzLmdldEJCKCd4IG1vZCcpO1xuICAgICAgICBjb25zdCB5TW9kID0gdGhpcy5lY3MuZ2V0QkIoJ3kgbW9kJyk7XG4gICAgICAgIGZvciAobGV0IGVudGl0eSBvZiBlbnRpdGllcy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgLy8gZ2V0IGNvbXBvbmVudHNcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlciA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoZW50aXR5KS5nZXQoQ29tcG9uZW50c18xLkMuUmVuZGVyKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoZW50aXR5KS5nZXQoV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQpO1xuICAgICAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgICAgICBjb25zdCBjaGFyID0gcmVuZGVyLmNoYXJhY3RlcjtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5jaGFyVG9Db2xvcltjaGFyXTtcbiAgICAgICAgICAgIGVuZ2luZS5kcmF3VGV4dChwb3MuZ2V0WCgpICogeE1vZCwgcG9zLmdldFkoKSAqIHlNb2QsIGNoYXIsIGNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyU3lzdGVtID0gUmVuZGVyU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlck1lbnVUZXh0U3lzdGVtID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzXCIpO1xuY2xhc3MgUmVuZGVyTWVudVRleHRTeXN0ZW0gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbQ29tcG9uZW50c18xLkMuTWVudVRleHRdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgbWluWSA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4WSA9IGVuZ2luZS5oZWlnaHQgLSA0MDtcbiAgICAgICAgY29uc3QgeU1vZCA9IDIwO1xuICAgICAgICBjb25zdCBtYXhPcmRlciA9IChtYXhZIC0gbWluWSkgLyB5TW9kO1xuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG0gPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KTtcbiAgICAgICAgICAgIGxldCB4ID0gMjA7XG4gICAgICAgICAgICBsZXQgbyA9IG0ub3JkZXI7XG4gICAgICAgICAgICB3aGlsZSAobyA+IG1heE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgbyAtPSBtYXhPcmRlciArIDE7XG4gICAgICAgICAgICAgICAgeCArPSA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5ID0gbWluWSArIHlNb2QgKiBvO1xuICAgICAgICAgICAgbGV0IGZpbGxDb2xvcjtcbiAgICAgICAgICAgIGlmIChtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobS5iZWF0ZW4pIHtcbiAgICAgICAgICAgICAgICBmaWxsQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsbENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmdpbmUuZHJhd1RleHQoeCwgeSwgbS5uYW1lLCAnd2hpdGUnLCB0cnVlLCBmaWxsQ29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVuZ2luZS5kcmF3VGV4dChlbmdpbmUud2lkdGggLyAyLjUsIDQ1LCAnTGV2ZWwgU2VsZWN0JywgJ3doaXRlJyk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJNZW51VGV4dFN5c3RlbSA9IFJlbmRlck1lbnVUZXh0U3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVwZGF0ZVNlbGVjdGVkID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IENvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzXCIpO1xuY2xhc3MgVXBkYXRlU2VsZWN0ZWQgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbQ29tcG9uZW50c18xLkMuTWVudVRleHRdKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gMTA7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSArPSBlbmdpbmUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLmxhc3RVcGRhdGUgPCAwLjIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5UHJlc3MgPSBXb3JsZEVuZ2luZV8xLktleS5JTlZBTElEO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZW5naW5lLmtleURvd24pIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gV29ybGRFbmdpbmVfMS5LZXkuRE9XTiB8fCBrZXkgPT0gV29ybGRFbmdpbmVfMS5LZXkuVVAgfHwgV29ybGRFbmdpbmVfMS5LZXkuUklHSFQgfHwgV29ybGRFbmdpbmVfMS5LZXkuTEVGVCkge1xuICAgICAgICAgICAgICAgIGtleVByZXNzID0ga2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5JTlZBTElEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGVudGl0eSBhbmQgbmV3IGVudGl0eSBpbmRleFxuICAgICAgICBsZXQgc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmVjcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgY29uc3QgbHZsc1BlckNvbHVtbiA9IDE4O1xuICAgICAgICBsZXQgbmV3RW50aXR5O1xuICAgICAgICBpZiAoa2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuVVAgfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuVykge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkRPV04gfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuUykge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LlJJR0hUIHx8IGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkQpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5MRUZUIHx8IGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkEpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5IC0gbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZW50aXRpZXMuaGFzKG5ld0VudGl0eSkpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZWQgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3NlbGVjdGVkJywgbmV3RW50aXR5KTtcbiAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhzZWxlY3RlZEVudGl0eSkuZ2V0KENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKG5ld0VudGl0eSkuZ2V0KENvbXBvbmVudHNfMS5DLk1lbnVUZXh0KS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IFVwZGF0ZVNlbGVjdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVwZGF0ZVBsYXllclR1cm4gPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgVXBkYXRlUGxheWVyVHVybiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3BsYXllciB0dXJuJywgdHJ1ZSk7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVQbGF5ZXJUdXJuID0gVXBkYXRlUGxheWVyVHVybjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TID0gdm9pZCAwO1xuY29uc3QgRW5lbXlBSV8xID0gcmVxdWlyZShcIi4vRW5lbXlBSVwiKTtcbmNvbnN0IFBsYXllckNvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4vUGxheWVyQ29sbGlzaW9uXCIpO1xuY29uc3QgUGxheWVyTW92ZW1lbnRfMSA9IHJlcXVpcmUoXCIuL1BsYXllck1vdmVtZW50XCIpO1xuY29uc3QgUG9ydGFsU3lzdGVtXzEgPSByZXF1aXJlKFwiLi9Qb3J0YWxTeXN0ZW1cIik7XG5jb25zdCBSZW5kZXJMZXZlbF8xID0gcmVxdWlyZShcIi4vUmVuZGVyTGV2ZWxcIik7XG5jb25zdCBSZW5kZXJHYW1lSW5mb18xID0gcmVxdWlyZShcIi4vUmVuZGVyR2FtZUluZm9cIik7XG5jb25zdCBSZW5kZXJTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuL1JlbmRlclN5c3RlbVwiKTtcbmNvbnN0IFVwZGF0ZVBsYXllclR1cm5fMSA9IHJlcXVpcmUoXCIuL1VwZGF0ZVBsYXllclR1cm5cIik7XG4vLyBTeXN0ZW1zXG5leHBvcnRzLlMgPSB7XG4gICAgRW5lbXlBSTogRW5lbXlBSV8xLkVuZW15QUksXG4gICAgUGxheWVyQ29sbGlzaW9uOiBQbGF5ZXJDb2xsaXNpb25fMS5QbGF5ZXJDb2xsaXNpb24sXG4gICAgUGxheWVyTW92ZW1lbnQ6IFBsYXllck1vdmVtZW50XzEuUGxheWVyTW92ZW1lbnQsXG4gICAgUG9ydGFsU3lzdGVtOiBQb3J0YWxTeXN0ZW1fMS5Qb3J0YWxTeXN0ZW0sXG4gICAgUmVuZGVyU3lzdGVtOiBSZW5kZXJTeXN0ZW1fMS5SZW5kZXJTeXN0ZW0sXG4gICAgVXBkYXRlUGxheWVyVHVybjogVXBkYXRlUGxheWVyVHVybl8xLlVwZGF0ZVBsYXllclR1cm4sXG4gICAgUmVuZGVyR2FtZUluZm86IFJlbmRlckdhbWVJbmZvXzEuUmVuZGVyR2FtZUluZm8sXG4gICAgUmVuZGVyTGV2ZWw6IFJlbmRlckxldmVsXzEuUmVuZGVyTGV2ZWxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtLCBrKTtcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VdGlsaXR5ID0gZXhwb3J0cy5Db21tb25Db21wb25lbnRzID0gZXhwb3J0cy5LZXkgPSBleHBvcnRzLkVDU1NjZW5lID0gZXhwb3J0cy5TY2VuZSA9IGV4cG9ydHMuU3lzdGVtID0gZXhwb3J0cy5Db21wb25lbnQgPSBleHBvcnRzLkVuZ2luZSA9IHZvaWQgMDtcbnZhciBFbmdpbmVfMSA9IHJlcXVpcmUoXCIuL3NyYy9FbmdpbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFbmdpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVuZ2luZV8xLkVuZ2luZTsgfSB9KTtcbnZhciBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL3NyYy9Db21wb25lbnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb21wb25lbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIENvbXBvbmVudF8xLkNvbXBvbmVudDsgfSB9KTtcbnZhciBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuL3NyYy9TeXN0ZW1cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTeXN0ZW1cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFN5c3RlbV8xLlN5c3RlbTsgfSB9KTtcbnZhciBTY2VuZV8xID0gcmVxdWlyZShcIi4vc3JjL1NjZW5lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2NlbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNjZW5lXzEuU2NlbmU7IH0gfSk7XG52YXIgRUNTU2NlbmVfMSA9IHJlcXVpcmUoXCIuL3NyYy9FQ1NTY2VuZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVDU1NjZW5lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBFQ1NTY2VuZV8xLkVDU1NjZW5lOyB9IH0pO1xudmFyIEtleV8xID0gcmVxdWlyZShcIi4vc3JjL0tleVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIktleVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gS2V5XzEuS2V5OyB9IH0pO1xuZXhwb3J0cy5Db21tb25Db21wb25lbnRzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3NyYy9Db21wb25lbnRzXCIpKTtcbmV4cG9ydHMuVXRpbGl0eSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9zcmMvVXRpbGl0eVwiKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29tcG9uZW50Q29udGFpbmVyID0gZXhwb3J0cy5Db21wb25lbnQgPSB2b2lkIDA7XG5jbGFzcyBDb21wb25lbnQge1xufVxuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5jbGFzcyBDb21wb25lbnRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgYWRkKGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm1hcC5zZXQoY29tcG9uZW50LmNvbnN0cnVjdG9yLCBjb21wb25lbnQpO1xuICAgIH1cbiAgICBnZXQoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmdldChjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICAgIGhhcyhjb21wb25lbnRDbGFzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gICAgaGFzQWxsKGNvbXBvbmVudENsYXNzZXMpIHtcbiAgICAgICAgZm9yIChsZXQgY2xzIG9mIGNvbXBvbmVudENsYXNzZXMpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXAuaGFzKGNscykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGRlbGV0ZShjb21wb25lbnRDbGFzcykge1xuICAgICAgICB0aGlzLm1hcC5kZWxldGUoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29tcG9uZW50Q29udGFpbmVyID0gQ29tcG9uZW50Q29udGFpbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvc2l0aW9uMmQgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRcIik7XG5jbGFzcyBQb3NpdGlvbjJkIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9sZFggPSB4O1xuICAgICAgICB0aGlzLm9sZFkgPSB5O1xuICAgIH1cbiAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PSBvdGhlci54ICYmIHRoaXMueSA9PSBvdGhlci55O1xuICAgIH1cbiAgICAvLyBDYW50b3IgcGFpcmluZyBmdW5jdGlvblxuICAgIGhhc2goKSB7XG4gICAgICAgIHJldHVybiAoKHRoaXMueCArIHRoaXMueSkgKiAodGhpcy54ICsgdGhpcy55ICsgMSkgLyAyKSArIHRoaXMueTtcbiAgICB9XG4gICAgLy8gQ2FudG9yIHBhaXJpbmcgZnVuY3Rpb25cbiAgICBvbGRIYXNoKCkge1xuICAgICAgICByZXR1cm4gKCh0aGlzLm9sZFggKyB0aGlzLm9sZFkpICogKHRoaXMub2xkWCArIHRoaXMub2xkWSArIDEpIC8gMikgKyB0aGlzLm9sZFk7XG4gICAgfVxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZWQ7XG4gICAgfVxuICAgIHNldCh4LCB5KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIHNldFBvcyhwb3MpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy54ID0gcG9zLng7XG4gICAgICAgIHRoaXMueSA9IHBvcy55O1xuICAgIH1cbiAgICBzZXRYKHgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICB9XG4gICAgc2V0WSh5KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuICAgIGdldFgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLng7XG4gICAgfVxuICAgIGdldFkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnk7XG4gICAgfVxuICAgIGFjY2VwdENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2xkWCA9IHRoaXMueDtcbiAgICAgICAgdGhpcy5vbGRZID0gdGhpcy55O1xuICAgIH1cbiAgICByZWplY3RDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnggPSB0aGlzLm9sZFg7XG4gICAgICAgIHRoaXMueSA9IHRoaXMub2xkWTtcbiAgICB9XG4gICAgZXVjbGlkZWFuRGlzdGFuY2UocG9zKSB7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLnBvdyh0aGlzLnggLSBwb3MueCwgMik7XG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnBvdyh0aGlzLnkgLSBwb3MueSwgMik7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCArIHkpO1xuICAgIH1cbiAgICBhZGQocG9zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24yZCh0aGlzLnggKyBwb3MueCwgdGhpcy55ICsgcG9zLnkpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9zaXRpb24yZCA9IFBvc2l0aW9uMmQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9zaXRpb24yZCA9IHZvaWQgMDtcbnZhciBQb3NpdGlvbjJkXzEgPSByZXF1aXJlKFwiLi9Qb3NpdGlvbjJkXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUG9zaXRpb24yZFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUG9zaXRpb24yZF8xLlBvc2l0aW9uMmQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRUNTU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKTtcbi8vIGh0dHBzOi8vbWF4d2VsbGZvcmJlcy5jb20vcG9zdHMvdHlwZXNjcmlwdC1lY3MtaW1wbGVtZW50YXRpb24vIGlzIHdoYXQgdGhpc1xuLy8gaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb2ZmIG9mLlxuY2xhc3MgRUNTU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gTWFpbiBzdGF0ZVxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIEJvb2trZWVwaW5nIGZvciBlbnRpdGllcy5cbiAgICAgICAgdGhpcy5uZXh0RW50aXR5SUQgPSAwO1xuICAgICAgICB0aGlzLmVudGl0aWVzVG9EZXN0cm95ID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgcmV0dXJuIC0xLiBBbnkgb3RoZXIgbnVtYmVycyB3aWxsIHRlbGwgdGhlIGdhbWUgZW5naW5lIHRvIGNoYW5nZVxuICAgICAqIHRoZSBzY2VuZSB0byB3aGF0ZXZlciBpbmRleCBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gY2FudmFzXG4gICAgICogQHBhcmFtIGtleVByZXNzZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBhbGwgc3lzdGVtcy4gKExhdGVyLCB3ZSdsbCBhZGQgYSB3YXkgdG8gc3BlY2lmeSB0aGVcbiAgICAgICAgLy8gdXBkYXRlIG9yZGVyLilcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgdGhpcy5wcmlvcml0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uZ2V0KHByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSk7XG4gICAgICAgICAgICBzeXN0ZW0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBlbnRpdGllcyB0aGF0IHdlcmUgbWFya2VkIGZvciBkZWxldGlvbiBkdXJpbmcgdGhlXG4gICAgICAgIC8vIHVwZGF0ZS5cbiAgICAgICAgd2hpbGUgKHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95RW50aXR5KHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kucG9wKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbVVwZGF0ZShlbmdpbmUpO1xuICAgIH1cbiAgICAvLyBBUEk6IEVudGl0aWVzXG4gICAgYWRkRW50aXR5KCkge1xuICAgICAgICBsZXQgZW50aXR5ID0gdGhpcy5uZXh0RW50aXR5SUQ7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEKys7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuc2V0KGVudGl0eSwgbmV3IENvbXBvbmVudF8xLkNvbXBvbmVudENvbnRhaW5lcigpKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFya3MgYGVudGl0eWAgZm9yIHJlbW92YWwuIFRoZSBhY3R1YWwgcmVtb3ZhbCBoYXBwZW5zIGF0IHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgbmV4dCBgdXBkYXRlKClgLiBUaGlzIHdheSB3ZSBhdm9pZCBzdWJ0bGUgYnVncyB3aGVyZSBhblxuICAgICAqIEVudGl0eSBpcyByZW1vdmVkIG1pZC1gdXBkYXRlKClgLCB3aXRoIHNvbWUgU3lzdGVtcyBzZWVpbmcgaXQgYW5kXG4gICAgICogb3RoZXJzIG5vdC5cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kucHVzaChlbnRpdHkpO1xuICAgIH1cbiAgICBhZGRDb21wb25lbnQoZW50aXR5LCBjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KS5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jaGVja0UoZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50cyhlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZ2V0KGVudGl0eSk7XG4gICAgfVxuICAgIHJlbW92ZUNvbXBvbmVudChlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuY2hlY2tFKGVudGl0eSk7XG4gICAgfVxuICAgIHNldEJCKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZC5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgICBnZXRCQihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxhY2tCb2FyZC5nZXQoa2V5KTtcbiAgICB9XG4gICAgLy8gQVBJOiBTeXN0ZW1zXG4gICAgLyoqXG4gICAgICogQWRkIGEgc3lzdGVtIHdoZXJlIHRoZSBwcmlvcml0eSBkZWZpbmVzIGluIHdoYXQgb3JkZXIgaXQgd2lsbCBiZSBydW4gd2hlblxuICAgICAqIGNvbXBhcmVkIHRvIG90aGVyIHN5c3RlbXNcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgLSBsb3dlciB2YWx1ZSBpcyBydW4gZmlyc3RcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgYWRkU3lzdGVtKHByaW9yaXR5LCBzeXN0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMucHJpb3JpdGllcy5pbmNsdWRlcyhwcmlvcml0eSkpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdGYXRhbCBlcnJvci4gQ2hlY2sgdGhlIGNvbnNvbGUuJyk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3N5c3RlbX0gY2FuIG5vdCBiZSB1c2VkIHNpbmNlIHByaW9yaXR5ICR7cHJpb3JpdHl9IGFscmVhZHkgaW4gdXNlLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgc3lzdGVtIGEgcmVmZXJlbmNlIHRvIHRoZSBFQ1Mgc28gaXQgY2FuIGFjdHVhbGx5IGRvXG4gICAgICAgIC8vIGFueXRoaW5nLlxuICAgICAgICBzeXN0ZW0uZWNzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvU3lzdGVtLnNldChwcmlvcml0eSwgc3lzdGVtKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5zZXQocHJpb3JpdHksIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5wdXNoKHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy5wcmlvcml0aWVzLnNvcnQoKTtcbiAgICAgICAgLy8gU2F2ZSBzeXN0ZW0gYW5kIHNldCB3aG8gaXQgc2hvdWxkIHRyYWNrIGltbWVkaWF0ZWx5LlxuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcy5rZXlzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbS5jbGVhcigpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0aWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEID0gMDtcbiAgICB9XG4gICAgZGVzdHJveUVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBUT0RPOiBjYW4gSSByZW1vdmUgdGhpcz9cbiAgICBjaGVja0UoZW50aXR5KSB7XG4gICAgICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHRoaXMucHJpb3JpdGllcykge1xuICAgICAgICAgICAgdGhpcy5jaGVja0VTKGVudGl0eSwgcHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEkgdGhpbmsgdGhpcyBjYW4gYmUgcmVtb3ZlZCBidXQgSSdtIGdvaW5nIHRvIGxlYXZlIGl0IGluIGZvciBub3cuXG4gICAgICogQHBhcmFtIGVudGl0eVxuICAgICAqIEBwYXJhbSBzeXN0ZW1cbiAgICAgKi9cbiAgICBjaGVja0VTKGVudGl0eSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGhhdmUgPSB0aGlzLmVudGl0aWVzLmdldChlbnRpdHkpO1xuICAgICAgICBsZXQgbmVlZCA9IHRoaXMucHJpb3JpdHlUb1N5c3RlbS5nZXQocHJpb3JpdHkpLmNvbXBvbmVudHNSZXF1aXJlZDtcbiAgICAgICAgaWYgKGhhdmUuaGFzQWxsKG5lZWQpKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgaW4gc3lzdGVtXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSkuYWRkKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgbm90IGJlIGluIHN5c3RlbVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5FQ1NTY2VuZSA9IEVDU1NjZW5lO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVuZ2luZSA9IHZvaWQgMDtcbmNvbnN0IEtleV8xID0gcmVxdWlyZShcIi4vS2V5XCIpO1xuY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlEb3duID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmtleVByZXNzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmNsZWFyQmFja2dyb3VuZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzcGxheUZQUyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NlbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZSA9IDIwO1xuICAgICAgICB0aGlzLmZvbnQgPSAnQ291cmllciBOZXcnO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpO1xuICAgICAgICAgICAgaWYgKGsgPT0gS2V5XzEuS2V5LkRPV04gfHwgayA9PSBLZXlfMS5LZXkuVVAgfHwgayA9PSBLZXlfMS5LZXkuTEVGVCB8fCBrID09IEtleV8xLktleS5SSUdIVCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5rZXlEb3duLmhhcyhrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bi5hZGQoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmtleVByZXNzLmFkZChrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5rZXlEb3duLmRlbGV0ZShrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnNldEZvbnQoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICB9XG4gICAgc2V0QkIoa2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkLnNldChrZXksIHZhbCk7XG4gICAgfVxuICAgIGdldEJCKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibGFja0JvYXJkLmdldChrZXkpO1xuICAgIH1cbiAgICBhZGRTY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgb2xkVGltZVN0YW1wO1xuICAgICAgICBsZXQgZnBzO1xuICAgICAgICB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLm9uRW50ZXIodGhpcyk7XG4gICAgICAgIGNvbnN0IGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSAodGltZVN0YW1wIC0gb2xkVGltZVN0YW1wKSAvIDEwMDA7XG4gICAgICAgICAgICBvbGRUaW1lU3RhbXAgPSB0aW1lU3RhbXA7XG4gICAgICAgICAgICBmcHMgPSBNYXRoLnJvdW5kKDEgLyB0aGlzLmRlbHRhKTtcbiAgICAgICAgICAgIC8vIHJlc2V0IGJhY2tncm91bmRcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyQmFja2dyb3VuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZ2FtZSBlbmdpbmUgb3BlcmF0aW9uc1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIERyYXcgRlBTXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RlBTICYmIHRoaXMuY2xlYXJCYWNrZ3JvdW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcFNpemUgPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBGb250ID0gdGhpcy5mb250O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9udCg4LCAnQ291cmllciBOZXcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdUZXh0KHRoaXMud2lkdGggLSA2MCwgMTUsIGBGUFM6ICR7ZnBzfWAsICdyZWQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvbnQodGVtcFNpemUsIHRlbXBGb250KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMua2V5UHJlc3MuY2xlYXIoKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS51cGRhdGUodGhpcyk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkV4aXQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkVudGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEZvbnQoc2l6ZSA9IHVuZGVmaW5lZCwgZm9udCA9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc2l6ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9udFNpemUgPSBzaXplO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb250ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5mb250ID0gZm9udDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eC5mb250ID0gYCR7dGhpcy5mb250U2l6ZX1weCAke3RoaXMuZm9udH1gO1xuICAgIH1cbiAgICBkcmF3UmVjdE91dGxpbmUoeCwgeSwgd2lkdGgsIGhlaWdodCwgc3Ryb2tlV2lkdGgsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHN0cm9rZVdpZHRoO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgICBkcmF3UmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICAgIGRyYXdUZXh0KHgsIHksIGNoYXIsIGZvbnRDb2xvciA9ICd3aGl0ZScsIGJhY2tncm91bmQgPSBmYWxzZSwgYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiKSB7XG4gICAgICAgIC8vIGJhY2tncm91bmRcbiAgICAgICAgaWYgKGJhY2tncm91bmQpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4dE1lYXN1cmUgPSB0aGlzLmN0eC5tZWFzdXJlVGV4dChjaGFyKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICAgLy8gIFxuICAgICAgICAgICAgdGhpcy5kcmF3UmVjdCh4IC0gMS4wLCB5IC0gdGhpcy5mb250U2l6ZSAqIDAuNywgdHh0TWVhc3VyZS53aWR0aCAqIDEuMSwgdGhpcy5mb250U2l6ZSAqIDEuMiwgYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGZvbnRDb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoY2hhciwgeCwgeSk7XG4gICAgfVxufVxuZXhwb3J0cy5FbmdpbmUgPSBFbmdpbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5Q29kZVRvS2V5ID0gZXhwb3J0cy5LZXkgPSB2b2lkIDA7XG52YXIgS2V5O1xuKGZ1bmN0aW9uIChLZXkpIHtcbiAgICBLZXlbS2V5W1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgS2V5W0tleVtcIlJJR0hUXCJdID0gMV0gPSBcIlJJR0hUXCI7XG4gICAgS2V5W0tleVtcIkRPV05cIl0gPSAyXSA9IFwiRE9XTlwiO1xuICAgIEtleVtLZXlbXCJVUFwiXSA9IDNdID0gXCJVUFwiO1xuICAgIEtleVtLZXlbXCJXXCJdID0gNF0gPSBcIldcIjtcbiAgICBLZXlbS2V5W1wiQVwiXSA9IDVdID0gXCJBXCI7XG4gICAgS2V5W0tleVtcIlNcIl0gPSA2XSA9IFwiU1wiO1xuICAgIEtleVtLZXlbXCJEXCJdID0gN10gPSBcIkRcIjtcbiAgICBLZXlbS2V5W1wiUVwiXSA9IDhdID0gXCJRXCI7XG4gICAgS2V5W0tleVtcIlJcIl0gPSA5XSA9IFwiUlwiO1xuICAgIEtleVtLZXlbXCJTUEFDRVwiXSA9IDEwXSA9IFwiU1BBQ0VcIjtcbiAgICBLZXlbS2V5W1wiRVNDQVBFXCJdID0gMTFdID0gXCJFU0NBUEVcIjtcbiAgICBLZXlbS2V5W1wiRU5URVJcIl0gPSAxMl0gPSBcIkVOVEVSXCI7XG4gICAgS2V5W0tleVtcIklOVkFMSURcIl0gPSAxM10gPSBcIklOVkFMSURcIjtcbn0pKEtleSA9IGV4cG9ydHMuS2V5IHx8IChleHBvcnRzLktleSA9IHt9KSk7XG5mdW5jdGlvbiBrZXlDb2RlVG9LZXkoa2V5KSB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnRG93bic6XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkRPV047XG4gICAgICAgIGNhc2UgJ1VwJzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlVQO1xuICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5SSUdIVDtcbiAgICAgICAgY2FzZSAnTGVmdCc6XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkxFRlQ7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlNQQUNFO1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5FU0NBUEU7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5BO1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUztcbiAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkQ7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5XO1xuICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUjtcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlE7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRU5URVI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVuaGFuZGxlZCBrZXk6ICR7a2V5fS5gKTtcbiAgICAgICAgICAgIHJldHVybiBLZXkuSU5WQUxJRDtcbiAgICB9XG59XG5leHBvcnRzLmtleUNvZGVUb0tleSA9IGtleUNvZGVUb0tleTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2VuZSA9IHZvaWQgMDtcbmNsYXNzIFNjZW5lIHtcbn1cbmV4cG9ydHMuU2NlbmUgPSBTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeXN0ZW0gPSB2b2lkIDA7XG5jbGFzcyBTeXN0ZW0ge1xufVxuZXhwb3J0cy5TeXN0ZW0gPSBTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2V0ID0gZXhwb3J0cy5zZXQgPSB2b2lkIDA7XG5mdW5jdGlvbiBzZXQobmFtZSwgdmFsKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKDMxICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbCArIFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpICsgXCI7IHBhdGg9L1wiO1xufVxuZXhwb3J0cy5zZXQgPSBzZXQ7XG5mdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIGNvbnN0IHZhbHVlID0gXCI7IFwiICsgZG9jdW1lbnQuY29va2llO1xuICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoXCI7IFwiICsgbmFtZSArIFwiPVwiKTtcbiAgICBpZiAocGFydHMgIT0gdW5kZWZpbmVkICYmIHBhcnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgIHJldHVybiBwYXJ0cy5wb3AoKS5zcGxpdChcIjtcIikuc2hpZnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmV4cG9ydHMuZ2V0ID0gZ2V0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdyaWRDb2xsaXNpb25zID0gdm9pZCAwO1xuY2xhc3MgR3JpZENvbGxpc2lvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGdldChwb3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXQocG9zLmhhc2goKSk7XG4gICAgfVxuICAgIHNldChwb3MsIHZhbCkge1xuICAgICAgICBjb25zdCBoYXNoID0gcG9zLmhhc2goKTtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZC5oYXMoaGFzaCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyaWQuc2V0KGhhc2gsIHZhbCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZW1vdmUocG9zLCB1c2VOZXcpIHtcbiAgICAgICAgaWYgKHVzZU5ldykge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmRlbGV0ZShwb3MuaGFzaCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5kZWxldGUocG9zLm9sZEhhc2goKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWNjZXB0Q2hhbmdlKHBvcywgdmFsKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5kZWxldGUocG9zLm9sZEhhc2goKSk7XG4gICAgICAgIHBvcy5hY2NlcHRDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5ncmlkLnNldChwb3MuaGFzaCgpLCB2YWwpO1xuICAgIH1cbn1cbmV4cG9ydHMuR3JpZENvbGxpc2lvbnMgPSBHcmlkQ29sbGlzaW9ucztcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICAgIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvb2tpZSA9IGV4cG9ydHMuR3JpZENvbGxpc2lvbnMgPSB2b2lkIDA7XG52YXIgR3JpZENvbGxpc2lvbnNfMSA9IHJlcXVpcmUoXCIuL0dyaWRDb2xsaXNpb25zXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiR3JpZENvbGxpc2lvbnNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEdyaWRDb2xsaXNpb25zXzEuR3JpZENvbGxpc2lvbnM7IH0gfSk7XG5leHBvcnRzLkNvb2tpZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Db29raWVcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkxFVkVMUyA9IHZvaWQgMDtcbmV4cG9ydHMuTEVWRUxTID0geyBcIjExXzRcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS0tLS1YLS1cIiwgXCItLS8vLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLVgjKi0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tLVhYLS1YLS1cIiwgXCItLSYtLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiM185XCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tLSYtLS0tLVwiLCBcIi0tLS0tLS0tLS0jLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzBcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tJi0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXi0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tXl5eXi0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS1eXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tXl4tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0mLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOV8yXCI6IFtcIkAtLS0tLS0tLS0tXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0jLS0jLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tWC0tWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLV5eXl5eXi1PXCJdLCBcIjFfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLS0tLS0tLSYtLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLSotLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMV8xM1wiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWC0tI1hYWFgtLVwiLCBcIi0tLS0tLVhYWFgtLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSotLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI5XzNcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS1YLS0tLy9cXFxcLS1cIiwgXCItLVxcXFwvLy0tLS0tWC0tLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTVfMVwiOiBbXCJALS1eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLSotLVwiLCBcIi0tLV5eLS0tLS1YLS0tLS0tLS1cIiwgXCItLS1eXi0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLV5eLS0tWCMqLS0tLS0mLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tXl4tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLV5eLS0tLS1YLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxN18zXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSNYLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS1YWC0tLS1YLS1eLS0tLVgtLVwiLCBcIi0tWC0tLS1YWC0tXi0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLV4tLVhYWC0tXCIsIFwiLS0tLS0tWCMqLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYWC0tJi0tWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjNfOFwiOiBbXCJALVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS1YWC0tLVhYWC0tLS1cIiwgXCItLVhYLSMtWFgtIy1YWFgtLS0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tKlhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLS0tLS0tLSYtLS0tT1wiXSwgXCIxMV81XCI6IFtcIkAtWFhYLS1eXl5eXl5eXl5eLS1cIiwgXCItLSNYWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWC0tXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYLS0jWFhYLS1cIiwgXCItLS0mLS0tWFhYWC0tLVhYWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tKi0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiM18xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLS0tLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzhcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLSpYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tLS0tLU9cIl0sIFwiMTFfN1wiOiBbXCJALV5eXl5eXl5eXl4tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLVgtLS0tWFhYLS1cIiwgXCItLVhYWC0tLVhYLS0tLVhYWC0tXCIsIFwiLS1YKlgtLVhYWC0tLS1YWC0tLVwiLCBcIi0tWCYtLS1YIyotLS0tWFgtLS1cIiwgXCItLVgqWC0tWFhYLS0tLS0tLS0tXCIsIFwiLS1YWFgtLS1YWC0tLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVgtLS0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVhYWC0tXCIsIFwiLS1eXl5eXl5eXl5eLS1YWFgtT1wiXSwgXCIxNV8zXCI6IFtcIkAtLS1eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS0tLS0tLS1YLS1eLS0tLVgtLVwiLCBcIi0tLS0tLS1YWC0tXi0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLV4tLVhYWC0tXCIsIFwiLS0tLS0tWCMqLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYWC0tJi0tWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjFfMTFcIjogW1wiQC1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLSpYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLSYtLS0tLU9cIl0sIFwiOV8xXCI6IFtcIkAtLS0tLS0tLS0tXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0jLS0jLS0tLS1YLSMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLVgtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLV5eXl5eXi1PXCJdLCBcIjlfMFwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLSYtLS1cIiwgXCItLS0tLS0tLS0tLS1eXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1eXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLSYtLVhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzJcIjogW1wiQC0tXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tLV5eXi0tLS0tLS0tLSojLS1cIiwgXCItLS1eXl4tLS0tLS1YLS1YWC0tXCIsIFwiLS0tXl5eLS0tLS1YWC0tWFgtLVwiLCBcIi0tLS0qLS0tLS1YWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tWCMqLS1YLS0tXCIsIFwiLS0tLSYtLS0tLVhYWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS0tWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tLS1YLS1YLS0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eXi0tXl5eXl5eXl5eLU9cIl0sIFwiMTFfNlwiOiBbXCJALV5eXl5eXl5eXl4tLVhYWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tI1gtI1gtI1gtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLVhYLS0tXCIsIFwiLS1eXl5eXl5eXl5eLS1YWFgtT1wiXSwgXCIxXzlcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFhYWC0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLSpYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tWFgtLU9cIl0sIFwiM18xNVwiOiBbXCJALS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLS0tLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxM180XCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS1YLS1YLS0tLVhYLS1cIiwgXCItLS0tLS0tWC0tWF4tLS1YKi0tXCIsIFwiLS0tXl4tLVhYWFheXi0tWCYtLVwiLCBcIi0tLS0tLS1YLS1YXi0tLVgqLS1cIiwgXCItLS1eXi0tWC0tWC0tLS1YWC0tXCIsIFwiLS0tXl4tLS0tLS8vXFxcXFxcXFwvL1xcXFwtLVwiLCBcIi0tLV5eLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTFcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tI1hYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfMFwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tIy0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCIxMV8yXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tXi0tLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0mLS0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjE3XzRcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSNYLSNYLSNYLSNYLSNYLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNV85XCI6IFtcIkAtLS0tXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLV4tLVhYWFhYWFhYWC1PXCJdLCBcIjFfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYWFgtLSYtLS1cIiwgXCItLS0tLS0tWFhYWFhYLS0tLS0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiOV80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWC0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLVgtLVheLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFhYXl4tLVgtLVwiLCBcIi0tLS0tLS0tWC0tWF4tLS1YLS1cIiwgXCItLS0tLS0tLVgtLVgtLS0tWC0tXCIsIFwiLS0mLS0tLS0tLS0vL1xcXFxcXFxcLy8tLVwiLCBcIi0tLS0tLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjE1XzZcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLVgtLVgtLS0tWFgtLVwiLCBcIi0tWCpYLS1YLS1YXi0tLVgqLS1cIiwgXCItLVgmLS0tWFhYWF5eLS1YJi0tXCIsIFwiLS1YKlgtLVgtLVheLS0tWCotLVwiLCBcIi0tWFhYLS1YLS1YLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLy9cXFxcXFxcXC8vXFxcXC0tXCIsIFwiLS1cXFxcLy8tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOV81XCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS9cXFxcXFxcXC1YLS0tLS0tLS0tKi0tXCIsIFwiLS1cXFxcLy8tWC0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tLVhYLS1YLS1cIiwgXCItLSYtLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS1YIyotLVgtLVwiLCBcIi0tJi0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS1YLS0tLS1YWC0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtWC0tLS0tLVgtLVgtLVwiLCBcIi0tXFxcXC8vLVgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTVcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFgtLSNYWFhYLS1cIiwgXCItLS0tWFhYWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0qLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiNV84XCI6IFtcIkAtLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0tLS0tIy0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLSMtLS0jLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0mLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0qLS1YWFhYWFhYWC1PXCJdLCBcIjE3XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLSYtLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTFfM1wiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tWC0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxM18xXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0jLS0tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTBcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0jWFhYLS1cIiwgXCItLS0tLSMtLS0tJi0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiM18xMlwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jWFhYWC0tKi0tLVwiLCBcIi0tLS0tLS0tLVhYWFgtLS0tLS1cIiwgXCItLS0tLS0tLS0tKi0tLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxM18zXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0vLy0tLS0tLS0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVgjKi0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVgtLS1cIiwgXCItLS0tLS0tLS0tLVhYLS1YLS0tXCIsIFwiLS0mLS0tLS0tLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjExXzFcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLV4tLVhYLS1cIiwgXCItLSYtLS0tLS0tLS1eLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tXi0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiOV83XCI6IFtcIkAtWFhYWFgtLV5eXl5eXl5eLS1cIiwgXCItLVhYWFhYLS0tLS0tLS0tKi0tXCIsIFwiLS1YWFhYWC0tLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFgtLS0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tLSYtLS0tLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS1YWFhYLS0tLS1YWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS1YWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tLSotLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTVfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0jWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tLS0tWC0tWF4tLS1YKlgtLVwiLCBcIi0tLS0tLVhYWFheXi0tWCYtLS1cIiwgXCItLS0tLS1YLS1YXi0tLVgqWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS8vXFxcXFxcXFwvL1xcXFxcXFxcLS1cIiwgXCItLS0tLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLy0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI3XzhcIjogW1wiQC0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0qLS0tLS0qLS0tKi0tLS1cIiwgXCItLS1eXl4tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLSYtLS0tLS0jLS0tIy0tLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiN185XCI6IFtcIkAtLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tKi0tLS0tKi0tLSNYWC0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0mLS0tLS0tIy0tLS0qLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzRcIjogW1wiQC0tLV5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0mLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tWFhYLS1YLS1cIiwgXCItLS0tLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0tLS0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS1YWC0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS1eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMV8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tI1hYWFgtLVwiLCBcIi0tLS0mLS1YWFgtLS1YWFhYLS1cIiwgXCItLS0tLS0tWFhYLS0tLSotLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI5XzZcIjogW1wiQC1YWFhYWC0tXl5eXl5eXl4tLVwiLCBcIi0tI1hYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtI1gtIy0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFgtLV5eXl5eXl5eLU9cIl0sIFwiMTFfMFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxM18yXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0jLS0tLS0tLVgjKi0tWCMtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFgtLS0tLSNYWFhYLS1cIiwgXCItLSMtLVhYLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0qLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTRfM1wiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tIy0tLS0tWCMqLS1YLSNYLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzFcIjogW1wiQC0tLS0tLS0tLS0tLV5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLSMtLSMtLS0tLS1YIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS1eXl5eLU9cIl0sIFwiN18xMFwiOiBbXCJALV5eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qWC0tLS0tLS0tLSNYWFgtLVwiLCBcIi0tJi0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLSpYLS0tLS0tIy0tLS0qLS0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1eXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxMF83XCI6IFtcIkAtXl5eXl5eXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tWFgtLS1YWC0tLS1YWFhYLS1cIiwgXCItLSpYLS1YWFgtLS0tWFhYWC0tXCIsIFwiLS0mLS0tWCMqLS0tLVhYWFgtLVwiLCBcIi0tKlgtLVhYWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS1YWC0tLS1cIiwgXCItLV5eXl5eXl5eXi0tWFhYWC1PXCJdLCBcIjVfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLVhYLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWC0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTJfNVwiOiBbXCJALV5eXl5eXl5eXl5eLS1YWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tI1gtI1gtI1gtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS1eXl5eXl5eXl5eXi0tWFgtT1wiXSwgXCIwXzhcIjogW1wiQC0tLS0tIy0tLVgtLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YWFhYLS1cIiwgXCItLS8vLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWC0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLSMtLS0mLS1YWFhYLU9cIl0sIFwiMF85XCI6IFtcIkAtLS0tLSMtLS0tWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0vLy0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0mLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0jLS0tLVhYWFhYWC1PXCJdLCBcIjEyXzRcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLVgjKi0tWC0jWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLSYtLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiNV8xNFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF82XCI6IFtcIkAtWFhYWC0tXl5eXl5eXl5eLS1cIiwgXCItLSNYWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWFgtLV5eXl5eXl5eXi1PXCJdLCBcIjdfMTFcIjogW1wiQC1eXl5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS1YWFgtLS0tWFhYWFhYWFgtLVwiLCBcIi0tWCpYLS0tLS0tI1hYWFhYLS1cIiwgXCItLVgmLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS1YKlgtLS0tLS0tLSotLS0tLVwiLCBcIi0tWFhYLS0tLVhYWFhYWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tWFhYWFhYWFgtLVwiLCBcIi0tXl5eXl4tLVhYWFhYWFhYLU9cIl0sIFwiMF8xOFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI4XzBcIjogW1wiQC0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLSMtLSMtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0mLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLV5eXl5eLU9cIl0sIFwiMTRfMlwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tIy0tLS0tLS1YIyotLVgjLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCIxNF8wXCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLSotLS0tKi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tKi0tLS0qLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfMlwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0vL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tXFxcXFxcXFwvLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCIxNl8yXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS0tLS0qLS0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tXl5eLS1cIiwgXCItLS1YLS1YLS1YLS1eXl5eXi0tXCIsIFwiLS0jWC0jWC0jWC0tLS0tJi0tLVwiLCBcIi0tLVgtLVgtLVgtLV5eXl5eLS1cIiwgXCItLS1YLS1YLS1YLS0tLV5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tLSotLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjEwXzRcIjogW1wiQC0tWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tLVhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiNV8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tI1hYWFgtLSotLS0jWFgtLVwiLCBcIi0tLS1YWFhYLS0tLS0tLVhYLS1cIiwgXCItLS0tLSotLS0tLSMtLS0tKi0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzlcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLSMtWFhYWC0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLSpYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tWFgtLU9cIl0sIFwiMTJfNlwiOiBbXCJALV5eXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0qWC0tWFhYLS0tLS0tKi0tLVwiLCBcIi0tJi0tLVgjKi0tLS0tLS0tLS1cIiwgXCItLSpYLS1YWFgtLS0tLS0tIy0tXCIsIFwiLS1YWC0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YWFhYLS1cIiwgXCItLS8vLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS1eXl5eXl5eXl4tLVhYWFgtT1wiXSwgXCIyXzhcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtIy0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLSpYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tLS0tLU9cIl0sIFwiMTBfNVwiOiBbXCJALVhYWC0tLV5eXl5eXl5eXi0tXCIsIFwiLS0jWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLS1eXl5eXl5eXl4tT1wiXSwgXCI3XzEyXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YLS1YWCojWFgqI1hYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YKiNYWC0tWFgtLVhYKiMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE2XzNcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS1eXi0tLS0tLVhYLS0tWFgtLVwiLCBcIi0tXl5eXi0tLVhYWC0tWFhYLS1cIiwgXCItLS0tLS0tLS1YIyotLVgjKi0tXCIsIFwiLS1eXl5eLS0tWFhYLS1YWFgtLVwiLCBcIi0tXl4tLS0tLS1YWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF8zXCI6IFtcIkAtLS0tLS0tLS1YLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLVhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tWC0tXl5eXi1PXCJdLCBcIjE0XzFcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLSMtLS0tLVgjKi0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF83XCI6IFtcIkAtWFhYWFhYLS1eXl5eXl5eLS1cIiwgXCItLSNYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0mLS0tLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWC0tXl5eXl5eXi1PXCJdLCBcIjE0XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLVheLS0tWCpYLS1YLS1cIiwgXCItLVhYWFhYXl4tLVgmLS0tWC0tXCIsIFwiLS0tLS0tWF4tLS1YKlgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0vL1xcXFxcXFxcLy9cXFxcXFxcXC0tWC0tXCIsIFwiLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy8tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNl84XCI6IFtcIkAtLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLSotLS0tLS0tLSNYWC0tXCIsIFwiLS0tLV5eXi0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tJi0tLS0tIy0tLS0qLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjVfMTNcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLS0tLSYtLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfMVwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tWC0jLS1cIiwgXCItLS0tLS0tLS0tJi0tLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxMl8zXCI6IFtcIkAtLS0tLS1eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0vLy0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS1YWC0tLVhYLS1cIiwgXCItLS0tLS0tLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tWCMqLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tWFgtLS1YLS0tXCIsIFwiLS0mLS0tLS0tLS1YLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tXl5eXl5eXl5eXi1PXCJdLCBcIjEyXzJcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0qLS1cIiwgXCItLS8vLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgjKi0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYLS1YLS1cIiwgXCItLSYtLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTBfMFwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLSotLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLV5eXl4tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLS0mLS1cIiwgXCItLS0tLS0tLS0tJi0tXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCI1XzEyXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfOVwiOiBbXCJALS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLSotLS0tLS0tLSNYWFgtLVwiLCBcIi0tLV5eXi0tLS0tLS0tWFhYLS1cIiwgXCItLS0tJi0tLS0tIy0tLS0qLS0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxNF80XCI6IFtcIkAtXl5eXl5eXl5eXl5eLS1YLS1cIiwgXCItLS0tLS1YLS0tLS0tLS0tWC0tXCIsIFwiLS0tWC0tWC0tLS1YLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS1YWC0tLS1YLS1cIiwgXCItLS1YLS1YLS1YWFgtLS0tWC0tXCIsIFwiLS0jWC0jWC0tWCMqLS0tLVgtLVwiLCBcIi0tLVgtLVgtLVhYWC0tLS1YLS1cIiwgXCItLS1YLS1YLS0tWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tLS1YLS0tLVgtLVwiLCBcIi0tLVgtLS0tLS0tLS0tLS1YLS1cIiwgXCItLV5eXl5eXl5eXl5eXi0tJi1PXCJdLCBcIjhfNlwiOiBbXCJALS0tXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVhYWC0tLVwiLCBcIi0tLS0tLVgjKi0tLS1YWC0tLS1cIiwgXCItLS0tLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLV5eXl5eXl4tLVhYWFgtT1wiXSwgXCI4XzRcIjogW1wiQC0tLS0tIy0tLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLVhYLS1cIiwgXCItLSYtLS1YWC0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0tXl5eXl5eLU9cIl0sIFwiMTZfNFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tI1gtI1gtI1gtI1gtLS0tLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS8tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS1cXFxcLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI0XzlcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0qLS0tI1hYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0jLS0tLSotLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiNV8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF8yXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tXi0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLV4tLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tJi0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjEyXzBcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLSMtLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTJfMVwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tJi0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMF8zXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS1YLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjVfMTFcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSNYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF84XCI6IFtcIkAtWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLVhYLS0tWFhYLS0tLVwiLCBcIi0tWFgtIy1YWC0jLVhYWC0jLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0qWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLS0tJi0tLS1PXCJdLCBcIjE2XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS1YWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tKlgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSYtLS1YLSNYLSNYLSNYLS0tXCIsIFwiLS0qWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tWFgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLVxcXFxcXFxcLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF81XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS1YWC0tLS1eXl4tLS0tLVwiLCBcIi0tLS0tWFgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLy9cXFxcXFxcXC0tXCIsIFwiLS0jLS0tLS0tLS0tLVxcXFxcXFxcLy8tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLVhYLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1YWC0tLS1eXl4tLS0tLVwiLCBcIi0tLS0tWFgtLV5eXl5eXl5eLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjhfOFwiOiBbXCJALVhYWFhYWC0tXl5eXl5eXi0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYLS0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWC0tLS0tLS1YLSNYLS1cIiwgXCItLS0qLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFgtLV5eXl5eXl4tT1wiXSwgXCI2XzdcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLS0qLS0tLS1eXl5eLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tLV5eXl4tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMF8xMFwiOiBbXCJALS0tLS0jLS0tWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YWFhYLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tJi0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tIy0tLVhYWFhYWFgtT1wiXSwgXCI0XzVcIjogW1wiQC0tLS0tLS0jLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS0tLSMtLS0tLS0tLSYqIy0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLVhYWFhYLU9cIl0sIFwiMl8xNVwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jWFhYWC0tLS0tLVwiLCBcIi0tLS0tJi0tLVhYWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tKi0tLS0tWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLSYtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiMF8xXCI6IFtcIkAtLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tIy0tJi0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0mLS0tXCIsIFwiLS0mLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0mLS0tLS1PXCJdLCBcIjBfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLSYtLSYtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCIyXzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLSYtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLS0tLU9cIl0sIFwiMl8xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYLS0tLS0jWFhYWC0tLVwiLCBcIi0tLS1YWC0tLS0tLVhYWFgtLS1cIiwgXCItLS0tLS0tLSotLS0tKi0tLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzRcIjogW1wiQC0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWCotLVwiLCBcIi0tKi0tLS0tKi0tJi0tWFgtLU9cIl0sIFwiMF8xMVwiOiBbXCJALS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0jLS1YWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtT1wiXSwgXCI2XzZcIjogW1wiQC0tLS0tWFhYWFgtLV5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYLS0tLSojLS1cIiwgXCItLS8vLS1YWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tWC0tLVwiLCBcIi0tLS0tLVhYWFhYLS0tLVgtLS1cIiwgXCItLSYtLS1YWFhYWC0tLS1YLS0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYLS1eXl5eLU9cIl0sIFwiOF85XCI6IFtcIkAtXl5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLSNYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWC0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLV5eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjZfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0jLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLSotLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCIwXzEzXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjRfNlwiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCIxOF80XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tWC0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tWFgtLS1YWC0tLVhYLS1cIiwgXCItLS0tWFhYLS1YWFgtLS1YLS0tXCIsIFwiLS0tLVgjKi0tWCMqLS0tWC0tLVwiLCBcIi0tLS1YWFgtLVhYWC0tLVgtLS1cIiwgXCItLS0tLVhYLS0tWFgtLS1YLS0tXCIsIFwiLS0tLS0tWC0tLS1YLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjJfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLSNYWFhYLS1cIiwgXCItLS0tLVhYWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS1YWFhYWC0tLS0qLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0mLS0mLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjBfMlwiOiBbXCJALS0tLS0jLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLy8tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0mLS0mLS0mLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tIy0tLS0tLS0tLS0tT1wiXSwgXCIwXzNcIjogW1wiQC0tLS0tIy0tLVgtLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tJi0tJi0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0tLS0tLU9cIl0sIFwiMl8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjJfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWC0tI1hYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS1YWFhYLS0tXCIsIFwiLS0tKi0tLS0tLS0tLSotLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMThfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tJi0tLVgjKi0tWCMqLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI0XzdcIjogW1wiQC0tLS0tWFhYWFhYLS1eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWC0tLS1YLS1cIiwgXCItLS8vLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWC0tXl5eLU9cIl0sIFwiMF8xMlwiOiBbXCJALS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtT1wiXSwgXCI2XzVcIjogW1wiQC0tLS0tWFhYLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWC0tLS1YLS1YLS1cIiwgXCItLS8vLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tWC0jWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLSYtLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYWC0tXl5eXl5eLU9cIl0sIFwiNl8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0mLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLV5eXi1PXCJdLCBcIjBfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSYtLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLV5eLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS1eXi1PXCJdLCBcIjJfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jLS1YWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl81XCI6IFtcIkAtLS0tLS0tIy0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLSotLS0tLSMtLS0mLS0mLS1PXCJdLCBcIjBfN1wiOiBbXCJALS0tLS0jLS0tWC0tWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWFgtLS0tXCIsIFwiLS0tLS0tIy0tLSYtLVhYWFgtT1wiXSwgXCIwXzZcIjogW1wiQC0tLS0tIy0tLVgtLVgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS1YLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0mLU9cIl0sIFwiMl80XCI6IFtcIkAtLS0tLS0tIy0tLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tWC0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjJfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0jLS0tLSotLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNF8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLSotLS0tLSMtLS0tLS1eXi1PXCJdLCBcIjBfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNl8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0mLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLV5eXi1PXCJdLCBcIjZfMlwiOiBbXCJALS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS1eXl4tT1wiXSwgXCIwXzE1XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLy0tXCIsIFwiLS0qLS0tLS0qLS0tLS0tLVxcXFwtT1wiXSwgXCIyXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tLS0tXCIsIFwiLS0tLS0jLS1YWFgtLSYtLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjJfNlwiOiBbXCJALS0tLS0tLSMtLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tIy0tLS0tLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tWFgtT1wiXSwgXCIwXzRcIjogW1wiQC0tLS0tIy0tLVgtLVgtLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS0tLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0mLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0tLU9cIl0sIFwiMF81XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tLy0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLVxcXFwtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tLS1PXCJdLCBcIjJfN1wiOiBbXCJALS0tLS0tLSMtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tJi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0qLS0tLS0jLS0tWFhYWFgtT1wiXSwgXCIyXzExXCI6IFtcIkAtWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLSMtLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0qWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0mLS0tLS1PXCJdLCBcIjRfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLSotLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCIwXzE0XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfM1wiOiBbXCJALS0tLS0tLS0tWC0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLVgtLVwiLCBcIi0tLS0tIy0tWCMmLS0tLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tLVgtLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0qLS0tLS0tLVgtLS1eXl4tT1wiXSwgXCIxXzJcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLy9cXFxcLS1cIiwgXCItLS0tLS0tLS0tLVgtLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSYtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tJi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tLS0tLU9cIl0sIFwiM18wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLS0tLS1PXCJdLCBcIjVfNlwiOiBbXCJALS0tLS1YWFhYWC0tXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFgtLS0tLSotLVwiLCBcIi0tLy8tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tJi0tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFgtLV5eXl4tT1wiXSwgXCI2XzEyXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YLS1YWC0tWFgqI1hYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YKiZYWCojWFgtLVhYKiMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjdfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0tKi0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0mLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCI3XzVcIjogW1wiQC0tLS0tWFhYLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWC0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWFgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tWFhYLS1cIiwgXCItLS0tLS1YWFgtLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLSYtLS1YWFgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYWC0tXl5eXl5eLU9cIl0sIFwiNl8xM1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0qLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI1XzdcIjogW1wiQC0tLS0tWFhYWFhYLS1eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWC0tLS1YLS1cIiwgXCItLS8vLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tIy0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWC0tXl5eLU9cIl0sIFwiM18xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS0tLS1PXCJdLCBcIjFfM1wiOiBbXCJALS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tIy0tJi0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0mLS0tT1wiXSwgXCI0XzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0jWFhYWC0tLS0tI1hYWC0tXCIsIFwiLS0tLVhYWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tKi0tLS0qLS0tLSotLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMTRcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tI1hYLS1cIiwgXCItLS0tLSYtLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMV8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjNfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0qLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCI1XzVcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLSMtLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiOV84XCI6IFtcIkAtXl5eXl5eXi0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tWFgtLS0tWFhYWFhYLS1cIiwgXCItLS0tWFhYLS0tLS0tI1hYWC0tXCIsIFwiLS0tLVgjKi0tLS0tLS1YWFgtLVwiLCBcIi0tLS1YWFgtLS0tLS0tLSotLS1cIiwgXCItLS0tLVhYLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLV5eXl5eXl4tLVhYWFhYWC1PXCJdLCBcIjZfMTFcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiN183XCI6IFtcIkAtLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLSotLS0tLSotLS0qLS0tXCIsIFwiLS0tLV5eXi0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tJi0tLS0tLSMtLS0jLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjdfNlwiOiBbXCJALS0tLVhYWFhYWC0tXl5eXi0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0tWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVgjLS1cIiwgXCItLS0tLS0tLSMtLS0tLS1YWC0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLV5eXl4tT1wiXSwgXCI2XzEwXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLV4tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS1eXi0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXi0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjVfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLSYtLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLSotLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCIzXzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLV4tLU9cIl0sIFwiMV8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS0mLS0mLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjRfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tI1hYWFgtLS0tLSNYLS1cIiwgXCItLS0tLS1YWFhYLS0tLS0tWC0tXCIsIFwiLS0tLS0tLSotLS0tKi0tLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8xMVwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzRcIjogW1wiQC0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLSMtLSYtLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tKi0tLS0tLS0tJi0tLVhYLU9cIl0sIFwiM182XCI6IFtcIkAtLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLSYtLSYtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLSotLS0tLSotLVhYWFhYWC1PXCJdLCBcIjVfMFwiOiBbXCJALS0tLS0tLS0tLS0tLV4tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0qLS0tLS0qLS0tLS1eLV4tT1wiXSwgXCI3XzJcIjogW1wiQC0tLS0tLS0jLS0tXl5eXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0mLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLV5eXl5eLU9cIl0sIFwiN18zXCI6IFtcIkAtLS0tLS0tLS1YLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSMtLS1cIiwgXCItLSotLS0tLS0tWC0tXl5eXi1PXCJdLCBcIjhfMTBcIjogW1wiQC1eXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKlgtLS0tLS0qLS0tI1hYLS1cIiwgXCItLSYtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0qWC0tLS0tLS0jLS0tLSotLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXl5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiNV8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS1eXi1PXCJdLCBcIjNfN1wiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWFgtLSYtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCIxXzVcIjogW1wiQC0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLSYtLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tWFhYLU9cIl0sIFwiNF8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tI1gtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzEyXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0mLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjFfN1wiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tIy0tJi0tWFhYLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0tLS1YWFhYWFgtT1wiXSwgXCIzXzVcIjogW1wiQC0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLSMtLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tWFhYLU9cIl0sIFwiNV8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLV4tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLV5eLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLSMtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjdfMVwiOiBbXCJALS0tLS0tLS0tLVgtLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCI3XzBcIjogW1wiQC0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS0tLS0tLU9cIl0sIFwiNV8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLSMtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS0tLS1PXCJdLCBcIjNfNFwiOiBbXCJALS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tIy0tIy0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tWFgtT1wiXSwgXCIxXzZcIjogW1wiQC0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLSMtLSYtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tKi0tLS0tLS0tLVhYWFhYLU9cIl0sIFwiNF8xM1wiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSNYWFhYLS0jWFgtLVwiLCBcIi0tIy0tLS0tWFhYWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0qLS0tLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgU2NlbmVzXzEgPSByZXF1aXJlKFwiLi9TY2VuZXNcIik7XG5jb25zdCBlbmdpbmUgPSBuZXcgV29ybGRFbmdpbmVfMS5FbmdpbmUoKTtcbmVuZ2luZS5kaXNwbGF5RlBTID0gZmFsc2U7XG5jb25zdCBzdGFydFNjZW5lID0gbmV3IFNjZW5lc18xLlNjZW5lLlN0YXJ0TWVudSgpO1xuY29uc3Qgc2VsZWN0aW9uU2NlbmUgPSBuZXcgU2NlbmVzXzEuU2NlbmUuU2VsZWN0TGV2ZWwoKTtcbmNvbnN0IGdhbWVTY2VuZSA9IG5ldyBTY2VuZXNfMS5TY2VuZS5HYW1lKCk7XG5jb25zdCBwbGF5ZXJMb3N0U2NlbmUgPSBuZXcgU2NlbmVzXzEuU2NlbmUuUGxheWVyTG9zdCgpO1xuY29uc3QgcGxheWVyV29uU2NlbmUgPSBuZXcgU2NlbmVzXzEuU2NlbmUuUGxheWVyV29uKCk7XG5jb25zdCBzdGFydEluZGV4ID0gZW5naW5lLmFkZFNjZW5lKHN0YXJ0U2NlbmUpO1xuY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBlbmdpbmUuYWRkU2NlbmUoc2VsZWN0aW9uU2NlbmUpO1xuY29uc3QgZ2FtZUluZGV4ID0gZW5naW5lLmFkZFNjZW5lKGdhbWVTY2VuZSk7XG5jb25zdCBsb3N0SW5kZXggPSBlbmdpbmUuYWRkU2NlbmUocGxheWVyTG9zdFNjZW5lKTtcbmNvbnN0IHdvbkluZGV4ID0gZW5naW5lLmFkZFNjZW5lKHBsYXllcldvblNjZW5lKTtcbnN0YXJ0U2NlbmUuc2NlbmVJbmRleCA9IHNlbGVjdGlvbkluZGV4O1xuc2VsZWN0aW9uU2NlbmUuc2NlbmVJbmRleCA9IGdhbWVJbmRleDtcbmdhbWVTY2VuZS5wbGF5ZXJMb3N0SW5kZXggPSBsb3N0SW5kZXg7XG5nYW1lU2NlbmUucGxheWVyV29uSW5kZXggPSB3b25JbmRleDtcbmdhbWVTY2VuZS5zZWxmSW5kZXggPSBnYW1lSW5kZXg7XG5nYW1lU2NlbmUubWFpbk1lbnVJbmRleCA9IHN0YXJ0SW5kZXg7XG5wbGF5ZXJMb3N0U2NlbmUuc2NlbmVJbmRleCA9IGdhbWVJbmRleDtcbnBsYXllcldvblNjZW5lLnNjZW5lSW5kZXggPSBzdGFydEluZGV4O1xuZW5naW5lLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=