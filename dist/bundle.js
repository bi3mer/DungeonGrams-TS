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
    constructor() {
        super();
    }
}
exports.Enemy = Enemy;


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
    constructor() {
        super();
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

/***/ "./src/Components/Position.ts":
/*!************************************!*\
  !*** ./src/Components/Position.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Position = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class Position extends WorldEngine_1.Component {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.oldX = x;
        this.oldY = y;
    }
    equals(other) {
        return this.x == other.x && this.y == other.y;
    }
    hash() {
        // Cantor pairing function
        return ((this.x + this.y) * (this.x + this.y + 1) / 2) + this.y;
    }
    updateOld() {
        this.oldX = this.x;
        this.oldY = this.y;
    }
}
exports.Position = Position;


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

/***/ "./src/Components/SelectionScene/MenuText.ts":
/*!***************************************************!*\
  !*** ./src/Components/SelectionScene/MenuText.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MenuText = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../../WorldEngine */ "./src/WorldEngine/index.ts");
class MenuText extends WorldEngine_1.Component {
    constructor(name, order, selected) {
        super();
        this.name = name;
        this.order = order;
        this.selected = selected;
    }
}
exports.MenuText = MenuText;


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

/***/ "./src/Scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/Scenes/GameScene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameScene = void 0;
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const Player_1 = __webpack_require__(/*! ../Components/Player */ "./src/Components/Player.ts");
const levels_1 = __webpack_require__(/*! ../levels */ "./src/levels.ts");
const RenderSystem_1 = __webpack_require__(/*! ../Systems/RenderSystem */ "./src/Systems/RenderSystem.ts");
const Portal_1 = __webpack_require__(/*! ../Components/Portal */ "./src/Components/Portal.ts");
const PortalSystem_1 = __webpack_require__(/*! ../Systems/PortalSystem */ "./src/Systems/PortalSystem.ts");
const PlayerSystem_1 = __webpack_require__(/*! ../Systems/PlayerSystem */ "./src/Systems/PlayerSystem.ts");
const EnemyAISystem_1 = __webpack_require__(/*! ../Systems/EnemyAISystem */ "./src/Systems/EnemyAISystem.ts");
const Movable_1 = __webpack_require__(/*! ../Components/Movable */ "./src/Components/Movable.ts");
const Switch_1 = __webpack_require__(/*! ../Components/Switch */ "./src/Components/Switch.ts");
const SwitchCollision_1 = __webpack_require__(/*! ../Systems/SwitchCollision */ "./src/Systems/SwitchCollision.ts");
const Enemy_1 = __webpack_require__(/*! ../Components/Enemy */ "./src/Components/Enemy.ts");
const EnemyCollision_1 = __webpack_require__(/*! ../Systems/EnemyCollision */ "./src/Systems/EnemyCollision.ts");
const PlayerCollision_1 = __webpack_require__(/*! ../Systems/PlayerCollision */ "./src/Systems/PlayerCollision.ts");
const Collider_1 = __webpack_require__(/*! ../Components/Collider */ "./src/Components/Collider.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class GameScene extends WorldEngine_1.ECSScene {
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
                this.addComponent(id, new Render_1.Render(char));
                this.addComponent(id, new Position_1.Position(xPos, yPos));
                if (char == 'O') {
                    this.addComponent(id, new Portal_1.Portal());
                    this.setBB('portal id', id);
                }
                else if (char == '@') {
                    this.addComponent(id, new Player_1.Player());
                    this.addComponent(id, new Movable_1.Movable());
                    this.setBB('player id', id);
                }
                else if (char == '*') {
                    this.addComponent(id, new Switch_1.Switch());
                    switchCount += 1;
                }
                else if (char == '#') {
                    this.addComponent(id, new Movable_1.Movable());
                    this.addComponent(id, new Enemy_1.Enemy());
                }
                else if (char == '^') {
                    this.addComponent(id, new Enemy_1.Enemy());
                }
                else if (char == 'X' || char == '\\' || char == '/') {
                    this.addComponent(id, new Collider_1.Collider());
                }
            }
        }
        console.log(yMin);
        for (let y = 3; y < engine.height / yMod - 1; ++y) {
            for (let x = 1; x < engine.width / xMod - 1; ++x) {
                if (x < xMin || x > xMax || y < yMin || y > yMax) {
                    const id = this.addEntity();
                    this.addComponent(id, new Render_1.Render('X'));
                    this.addComponent(id, new Position_1.Position(x, y));
                    if (x == xMin - 1 || y == yMin - 1 || x == xMax + 1 || y == yMax + 1) {
                        this.addComponent(id, new Collider_1.Collider());
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
        this.addSystem(0, new PlayerSystem_1.PlayerSystem());
        this.addSystem(10, new PlayerCollision_1.PlayerCollision());
        this.addSystem(20, new EnemyAISystem_1.EnemyAISystem());
        this.addSystem(40, new EnemyCollision_1.EnemyCollision());
        this.addSystem(50, new SwitchCollision_1.SwitchCollision());
        this.addSystem(90, new PortalSystem_1.PortalSystem());
        this.addSystem(100, new RenderSystem_1.RenderSystem());
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
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/Scenes/PlayerLostScene.ts":
/*!***************************************!*\
  !*** ./src/Scenes/PlayerLostScene.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerLostScene = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class PlayerLostScene extends WorldEngine_1.Scene {
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
        if (this.timer > 2) {
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
exports.PlayerLostScene = PlayerLostScene;


/***/ }),

/***/ "./src/Scenes/PlayerWonScene.ts":
/*!**************************************!*\
  !*** ./src/Scenes/PlayerWonScene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerWonScene = void 0;
const Scene_1 = __webpack_require__(/*! ../WorldEngine/src/Scene */ "./src/WorldEngine/src/Scene.ts");
class PlayerWonScene extends Scene_1.Scene {
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
        if (this.timer > 2) {
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
exports.PlayerWonScene = PlayerWonScene;


/***/ }),

/***/ "./src/Scenes/SelectionScene.ts":
/*!**************************************!*\
  !*** ./src/Scenes/SelectionScene.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionScene = void 0;
const levels_1 = __webpack_require__(/*! ../levels */ "./src/levels.ts");
const MenuText_1 = __webpack_require__(/*! ../Components/SelectionScene/MenuText */ "./src/Components/SelectionScene/MenuText.ts");
const UpdateSelected_1 = __webpack_require__(/*! ../Systems/SelectionScene/UpdateSelected */ "./src/Systems/SelectionScene/UpdateSelected.ts");
const RenderMenuText_1 = __webpack_require__(/*! ../Systems/SelectionScene/RenderMenuText */ "./src/Systems/SelectionScene/RenderMenuText.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class SelectionScene extends WorldEngine_1.ECSScene {
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
            this.addComponent(id, new MenuText_1.MenuText(this.sortedLevels[i], i, selected));
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
            engine.setBB('level', this.getComponents(selected).get(MenuText_1.MenuText).name);
            return this.sceneIndex;
        }
        return -1;
    }
}
exports.SelectionScene = SelectionScene;


/***/ }),

/***/ "./src/Scenes/StartScene.ts":
/*!**********************************!*\
  !*** ./src/Scenes/StartScene.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StartScene = void 0;
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Scene_1 = __webpack_require__(/*! ../WorldEngine/src/Scene */ "./src/WorldEngine/src/Scene.ts");
class StartScene extends Scene_1.Scene {
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
            engine.ctx.fillText('R to restart', 40, 375);
            engine.ctx.fillText('Q to quit', 40, 400);
            return -1;
        }
    }
}
exports.StartScene = StartScene;


/***/ }),

/***/ "./src/Systems/EnemyAISystem.ts":
/*!**************************************!*\
  !*** ./src/Systems/EnemyAISystem.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnemyAISystem = void 0;
const Collider_1 = __webpack_require__(/*! ../Components/Collider */ "./src/Components/Collider.ts");
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class EnemyAISystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position_1.Position, Render_1.Render, Collider_1.Collider]);
    }
    update(engine, entities) {
        // const playerPos = this.ecs.getComponents(playerID).get(Position);
        // let collisionFound = false;
        // for(let id of entities) {
        //   const blockPos = this.ecs.getComponents(id).get(Position);
        //   if(playerPos.equals(blockPos)) {
        //     playerPos.x = playerPos.oldX;
        //     playerPos.y = playerPos.oldY;
        //     collisionFound = true;
        //     break;
        //   }
        // }
        // if (!collisionFound) {
        //   playerPos.oldX = playerPos.x;
        //   playerPos.oldY = playerPos.y;
        // }
    }
}
exports.EnemyAISystem = EnemyAISystem;


/***/ }),

/***/ "./src/Systems/EnemyCollision.ts":
/*!***************************************!*\
  !*** ./src/Systems/EnemyCollision.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnemyCollision = void 0;
const Enemy_1 = __webpack_require__(/*! ../Components/Enemy */ "./src/Components/Enemy.ts");
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class EnemyCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Enemy_1.Enemy]);
    }
    update(engine, entities) {
        // const playerID = this.ecs.blackBoard.get('player id');
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position_1.Position);
        for (let id of entities) {
            const pos = this.ecs.getComponents(id).get(Position_1.Position);
            if (pos.equals(playerPos)) {
                this.ecs.setBB('game over', -1);
                break;
            }
        }
    }
}
exports.EnemyCollision = EnemyCollision;


/***/ }),

/***/ "./src/Systems/PlayerCollision.ts":
/*!****************************************!*\
  !*** ./src/Systems/PlayerCollision.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerCollision = void 0;
const Collider_1 = __webpack_require__(/*! ../Components/Collider */ "./src/Components/Collider.ts");
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class PlayerCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Collider_1.Collider]);
    }
    update(engine, entities) {
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position_1.Position);
        for (let id of entities) {
            const pos = this.ecs.getComponents(id).get(Position_1.Position);
            if (pos.equals(playerPos)) {
                playerPos.x = playerPos.oldX;
                playerPos.y = playerPos.oldY;
            }
        }
        playerPos.updateOld();
    }
}
exports.PlayerCollision = PlayerCollision;


/***/ }),

/***/ "./src/Systems/PlayerSystem.ts":
/*!*************************************!*\
  !*** ./src/Systems/PlayerSystem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlayerSystem = void 0;
const Player_1 = __webpack_require__(/*! ../Components/Player */ "./src/Components/Player.ts");
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class PlayerSystem extends WorldEngine_1.System {
    constructor() {
        super();
        this.componentsRequired = new Set([Position_1.Position, Render_1.Render, Player_1.Player]);
        this.timeSinceLastMove = 5;
    }
    update(engine, entities) {
        this.timeSinceLastMove += engine.delta;
        if (this.timeSinceLastMove < 0.08) {
            return;
        }
        this.timeSinceLastMove = 0;
        let playerID = entities.values().next().value;
        let pos = this.ecs.getComponents(playerID).get(Position_1.Position);
        const x = pos.x;
        const y = pos.y;
        for (let key of engine.keyDown) {
            switch (key) {
                case WorldEngine_1.Key.A:
                case WorldEngine_1.Key.LEFT:
                    pos.x -= 1;
                    break;
                case WorldEngine_1.Key.S:
                case WorldEngine_1.Key.DOWN:
                    pos.y += 1;
                    break;
                case WorldEngine_1.Key.D:
                case WorldEngine_1.Key.RIGHT:
                    pos.x += 1;
                    break;
                case WorldEngine_1.Key.W:
                case WorldEngine_1.Key.UP:
                    pos.y -= 1;
                    break;
                // nothing to do in the default case
            }
        }
    }
}
exports.PlayerSystem = PlayerSystem;


/***/ }),

/***/ "./src/Systems/PortalSystem.ts":
/*!*************************************!*\
  !*** ./src/Systems/PortalSystem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PortalSystem = void 0;
const Portal_1 = __webpack_require__(/*! ../Components/Portal */ "./src/Components/Portal.ts");
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class PortalSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Portal_1.Portal, Render_1.Render]);
    }
    update(engine, entities) {
        const [id] = entities; // there can only be one portal
        if (this.ecs.getBB('switch count') == 0) {
            this.ecs.getComponents(id).get(Render_1.Render).character = 'O';
            const playerID = this.ecs.getBB('player id');
            const playerPos = this.ecs.getComponents(playerID).get(Position_1.Position);
            const portalPos = this.ecs.getComponents(id).get(Position_1.Position);
            if (playerPos.equals(portalPos)) {
                this.ecs.setBB('game over', 1); // player won
            }
        }
        else {
            this.ecs.getComponents(id).get(Render_1.Render).character = 'o';
        }
    }
}
exports.PortalSystem = PortalSystem;


/***/ }),

/***/ "./src/Systems/RenderSystem.ts":
/*!*************************************!*\
  !*** ./src/Systems/RenderSystem.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderSystem = void 0;
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class RenderSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position_1.Position, Render_1.Render]);
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
            const render = this.ecs.getComponents(entity).get(Render_1.Render);
            const pos = this.ecs.getComponents(entity).get(Position_1.Position);
            // render
            engine.ctx.fillStyle = this.charToColor[render.character];
            engine.ctx.fillText(render.character, pos.x * xMod, pos.y * yMod);
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
const MenuText_1 = __webpack_require__(/*! ../../Components/SelectionScene/MenuText */ "./src/Components/SelectionScene/MenuText.ts");
class RenderMenuTextSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([MenuText_1.MenuText]);
    }
    update(engine, entities) {
        const minY = 100;
        const maxY = engine.height - 40;
        const yMod = 20;
        const maxOrder = (maxY - minY) / yMod;
        engine.ctx.font = "15px Arial";
        for (let entity of entities.values()) {
            const m = this.ecs.getComponents(entity).get(MenuText_1.MenuText);
            let x = 20;
            let o = m.order;
            while (o > maxOrder) {
                o -= maxOrder + 1;
                x += 60;
            }
            let y = minY + yMod * o;
            if (m.selected) {
                const txtMeasure = engine.ctx.measureText(m.name);
                engine.ctx.fillStyle = 'white';
                engine.ctx.fillRect(x - 1.0, y - yMod * 0.7, txtMeasure.width * 1.1, yMod);
                engine.ctx.fillStyle = 'black';
                engine.ctx.fillText(m.name, x, y);
            }
            else {
                engine.ctx.fillStyle = 'white';
                engine.ctx.fillText(m.name, x, y);
            }
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
const MenuText_1 = __webpack_require__(/*! ../../Components/SelectionScene/MenuText */ "./src/Components/SelectionScene/MenuText.ts");
class UpdateSelected extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([MenuText_1.MenuText]);
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
        this.ecs.getComponents(selectedEntity).get(MenuText_1.MenuText).selected = false;
        this.ecs.getComponents(newEntity).get(MenuText_1.MenuText).selected = true;
        this.lastUpdate = 0;
    }
}
exports.UpdateSelected = UpdateSelected;


/***/ }),

/***/ "./src/Systems/SwitchCollision.ts":
/*!****************************************!*\
  !*** ./src/Systems/SwitchCollision.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwitchCollision = void 0;
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Switch_1 = __webpack_require__(/*! ../Components/Switch */ "./src/Components/Switch.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
class SwitchCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Switch_1.Switch]);
    }
    update(engine, entities) {
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position_1.Position);
        for (let id of entities) {
            const switchPos = this.ecs.getComponents(id).get(Position_1.Position);
            if (switchPos.equals(playerPos)) {
                const switchCount = this.ecs.getBB('switch count') - 1;
                this.ecs.setBB('switch count', switchCount);
                this.ecs.removeEntity(id);
                break;
            }
        }
    }
}
exports.SwitchCollision = SwitchCollision;


/***/ }),

/***/ "./src/WorldEngine/index.ts":
/*!**********************************!*\
  !*** ./src/WorldEngine/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Key = exports.ECSScene = exports.Scene = exports.System = exports.Component = exports.Engine = void 0;
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
        // System must require at least one component    
        if (system.componentsRequired.size == 0) {
            console.error('System not added: empty Components list.' + system);
            return;
        }
        if (this.priorities.includes(priority)) {
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
            this.ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, this.width, this.height);
            // game engine operations
            this.update();
            // Draw FPS
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = 'red';
            this.ctx.fillText("FPS: " + fps, this.width - 60, 30);
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
const GameScene_1 = __webpack_require__(/*! ./Scenes/GameScene */ "./src/Scenes/GameScene.ts");
const PlayerLostScene_1 = __webpack_require__(/*! ./Scenes/PlayerLostScene */ "./src/Scenes/PlayerLostScene.ts");
const PlayerWonScene_1 = __webpack_require__(/*! ./Scenes/PlayerWonScene */ "./src/Scenes/PlayerWonScene.ts");
const SelectionScene_1 = __webpack_require__(/*! ./Scenes/SelectionScene */ "./src/Scenes/SelectionScene.ts");
const StartScene_1 = __webpack_require__(/*! ./Scenes/StartScene */ "./src/Scenes/StartScene.ts");
const engine = new WorldEngine_1.Engine();
const startScene = new StartScene_1.StartScene();
const selectionScene = new SelectionScene_1.SelectionScene();
const gameScene = new GameScene_1.GameScene();
const playerLostScene = new PlayerLostScene_1.PlayerLostScene();
const playerWonScene = new PlayerWonScene_1.PlayerWonScene();
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
playerLostScene.sceneIndex = startIndex;
playerWonScene.sceneIndex = startIndex;
engine.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUNIbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyxpREFBZTtBQUM3QyxvQkFBb0IsbUJBQU8sQ0FBQyxxREFBb0I7QUFDaEQsMEJBQTBCLG1CQUFPLENBQUMsaUVBQTBCO0FBQzVELHlCQUF5QixtQkFBTyxDQUFDLCtEQUF5QjtBQUMxRCx5QkFBeUIsbUJBQU8sQ0FBQywrREFBeUI7QUFDMUQscUJBQXFCLG1CQUFPLENBQUMsdURBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9FbmVteS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Nb3ZhYmxlLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1BsYXllci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Qb3J0YWwudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUmVuZGVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1N3aXRjaC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL0dhbWVTY2VuZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1BsYXllckxvc3RTY2VuZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1BsYXllcldvblNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvU2VsZWN0aW9uU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9TdGFydFNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL0VuZW15QUlTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvRW5lbXlDb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUGxheWVyQ29sbGlzaW9uLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1BsYXllclN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9Qb3J0YWxTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUmVuZGVyU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1JlbmRlck1lbnVUZXh0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1VwZGF0ZVNlbGVjdGVkLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1N3aXRjaENvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9FQ1NTY2VuZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0VuZ2luZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0tleS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29sbGlkZXIgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIENvbGxpZGVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29sbGlkZXIgPSBDb2xsaWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgRW5lbXkgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5FbmVteSA9IEVuZW15O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1vdmFibGUgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIE1vdmFibGUgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Nb3ZhYmxlID0gTW92YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXIgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIFBsYXllciBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3J0YWwgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL1wiKTtcbmNsYXNzIFBvcnRhbCBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3NpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBQb3NpdGlvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMub2xkWCA9IHg7XG4gICAgICAgIHRoaXMub2xkWSA9IHk7XG4gICAgfVxuICAgIGVxdWFscyhvdGhlcikge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09IG90aGVyLnggJiYgdGhpcy55ID09IG90aGVyLnk7XG4gICAgfVxuICAgIGhhc2goKSB7XG4gICAgICAgIC8vIENhbnRvciBwYWlyaW5nIGZ1bmN0aW9uXG4gICAgICAgIHJldHVybiAoKHRoaXMueCArIHRoaXMueSkgKiAodGhpcy54ICsgdGhpcy55ICsgMSkgLyAyKSArIHRoaXMueTtcbiAgICB9XG4gICAgdXBkYXRlT2xkKCkge1xuICAgICAgICB0aGlzLm9sZFggPSB0aGlzLng7XG4gICAgICAgIHRoaXMub2xkWSA9IHRoaXMueTtcbiAgICB9XG59XG5leHBvcnRzLlBvc2l0aW9uID0gUG9zaXRpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVuZGVyID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBSZW5kZXIgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoY2hhcmFjdGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2hhcmFjdGVyID0gY2hhcmFjdGVyO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyID0gUmVuZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lbnVUZXh0ID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIE1lbnVUZXh0IGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG9yZGVyLCBzZWxlY3RlZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICB9XG59XG5leHBvcnRzLk1lbnVUZXh0ID0gTWVudVRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3dpdGNoID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Td2l0Y2ggPSBTd2l0Y2g7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVNjZW5lID0gdm9pZCAwO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBQbGF5ZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1BsYXllclwiKTtcbmNvbnN0IGxldmVsc18xID0gcmVxdWlyZShcIi4uL2xldmVsc1wiKTtcbmNvbnN0IFJlbmRlclN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUmVuZGVyU3lzdGVtXCIpO1xuY29uc3QgUG9ydGFsXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3J0YWxcIik7XG5jb25zdCBQb3J0YWxTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1BvcnRhbFN5c3RlbVwiKTtcbmNvbnN0IFBsYXllclN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUGxheWVyU3lzdGVtXCIpO1xuY29uc3QgRW5lbXlBSVN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvRW5lbXlBSVN5c3RlbVwiKTtcbmNvbnN0IE1vdmFibGVfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL01vdmFibGVcIik7XG5jb25zdCBTd2l0Y2hfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1N3aXRjaFwiKTtcbmNvbnN0IFN3aXRjaENvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvU3dpdGNoQ29sbGlzaW9uXCIpO1xuY29uc3QgRW5lbXlfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0VuZW15XCIpO1xuY29uc3QgRW5lbXlDb2xsaXNpb25fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL0VuZW15Q29sbGlzaW9uXCIpO1xuY29uc3QgUGxheWVyQ29sbGlzaW9uXzEgPSByZXF1aXJlKFwiLi4vU3lzdGVtcy9QbGF5ZXJDb2xsaXNpb25cIik7XG5jb25zdCBDb2xsaWRlcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvQ29sbGlkZXJcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyV29uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnBsYXllckxvc3RJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VsZkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5tYWluTWVudUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZXRCQignZ2FtZSBvdmVyJywgMCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3Jlc3RhcnQnLCBmYWxzZSk7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIGNvbnN0IHhNb2QgPSAyMDtcbiAgICAgICAgY29uc3QgeU1vZCA9IDIwO1xuICAgICAgICBjb25zdCBvZmZzZXRYID0gODtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WSA9IDc7XG4gICAgICAgIGxldCB4TWluID0gMTAwMDtcbiAgICAgICAgbGV0IHhNYXggPSAwO1xuICAgICAgICBsZXQgeU1pbiA9IDEwMDA7XG4gICAgICAgIGxldCB5TWF4ID0gMDtcbiAgICAgICAgbGV0IHN3aXRjaENvdW50ID0gMDtcbiAgICAgICAgY29uc3QgbHZsS2V5ID0gZW5naW5lLmdldEJCKCdsZXZlbCcpO1xuICAgICAgICBjb25zdCBsdmwgPSBsZXZlbHNfMS5MRVZFTFNbbHZsS2V5XTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsdmwubGVuZ3RoOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbHZsW3ldLmxlbmd0aDsgKyt4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IGx2bFt5XVt4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkRW50aXR5KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeFBvcyA9IG9mZnNldFggKyB4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHlQb3MgPSBvZmZzZXRZICsgeTtcbiAgICAgICAgICAgICAgICB4TWluID0gTWF0aC5taW4oeE1pbiwgeFBvcyk7XG4gICAgICAgICAgICAgICAgeE1heCA9IE1hdGgubWF4KHhNYXgsIHhQb3MpO1xuICAgICAgICAgICAgICAgIHlNaW4gPSBNYXRoLm1pbih5TWluLCB5UG9zKTtcbiAgICAgICAgICAgICAgICB5TWF4ID0gTWF0aC5tYXgoeU1heCwgeVBvcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFJlbmRlcl8xLlJlbmRlcihjaGFyKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBQb3NpdGlvbl8xLlBvc2l0aW9uKHhQb3MsIHlQb3MpKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PSAnTycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBQb3J0YWxfMS5Qb3J0YWwoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QkIoJ3BvcnRhbCBpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnQCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBQbGF5ZXJfMS5QbGF5ZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgTW92YWJsZV8xLk1vdmFibGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QkIoJ3BsYXllciBpZCcsIGlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBTd2l0Y2hfMS5Td2l0Y2goKSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaENvdW50ICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgTW92YWJsZV8xLk1vdmFibGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgRW5lbXlfMS5FbmVteSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnXicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBFbmVteV8xLkVuZW15KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdYJyB8fCBjaGFyID09ICdcXFxcJyB8fCBjaGFyID09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbGxpZGVyXzEuQ29sbGlkZXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHlNaW4pO1xuICAgICAgICBmb3IgKGxldCB5ID0gMzsgeSA8IGVuZ2luZS5oZWlnaHQgLyB5TW9kIC0gMTsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IGVuZ2luZS53aWR0aCAvIHhNb2QgLSAxOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IHhNaW4gfHwgeCA+IHhNYXggfHwgeSA8IHlNaW4gfHwgeSA+IHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEVudGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFJlbmRlcl8xLlJlbmRlcignWCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBQb3NpdGlvbl8xLlBvc2l0aW9uKHgsIHkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPT0geE1pbiAtIDEgfHwgeSA9PSB5TWluIC0gMSB8fCB4ID09IHhNYXggKyAxIHx8IHkgPT0geU1heCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29sbGlkZXJfMS5Db2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbGxpZGVyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJCKCdzd2l0Y2ggY291bnQnLCBzd2l0Y2hDb3VudCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ29mZnNldCB4Jywgb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ29mZnNldCB5Jywgb2Zmc2V0WSk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3ggbW9kJywgeE1vZCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3kgbW9kJywgeU1vZCk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDAsIG5ldyBQbGF5ZXJTeXN0ZW1fMS5QbGF5ZXJTeXN0ZW0oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwLCBuZXcgUGxheWVyQ29sbGlzaW9uXzEuUGxheWVyQ29sbGlzaW9uKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgyMCwgbmV3IEVuZW15QUlTeXN0ZW1fMS5FbmVteUFJU3lzdGVtKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg0MCwgbmV3IEVuZW15Q29sbGlzaW9uXzEuRW5lbXlDb2xsaXNpb24oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDUwLCBuZXcgU3dpdGNoQ29sbGlzaW9uXzEuU3dpdGNoQ29sbGlzaW9uKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg5MCwgbmV3IFBvcnRhbFN5c3RlbV8xLlBvcnRhbFN5c3RlbSgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMTAwLCBuZXcgUmVuZGVyU3lzdGVtXzEuUmVuZGVyU3lzdGVtKCkpO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9XG4gICAgY3VzdG9tVXBkYXRlKGVuZ2luZSkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IHRoaXMuZ2V0QkIoJ2dhbWUgb3ZlcicpO1xuICAgICAgICBpZiAoZ2FtZU92ZXIgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllckxvc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lT3ZlciA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJXb25JbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuUikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGZJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuUSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1haW5NZW51SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZVNjZW5lID0gR2FtZVNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllckxvc3RTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBQbGF5ZXJMb3N0U2NlbmUgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7IH1cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIHRoaXMudGltZXIgKz0gZW5naW5lLmRlbHRhO1xuICAgICAgICBpZiAodGhpcy50aW1lciA+IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdZb3UgTG9zdCEgOi8nLCBlbmdpbmUud2lkdGggLyAzLjUsIGVuZ2luZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyTG9zdFNjZW5lID0gUGxheWVyTG9zdFNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllcldvblNjZW5lID0gdm9pZCAwO1xuY29uc3QgU2NlbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9zcmMvU2NlbmVcIik7XG5jbGFzcyBQbGF5ZXJXb25TY2VuZSBleHRlbmRzIFNjZW5lXzEuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FbnRlcihlbmdpbmUpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRXhpdChlbmdpbmUpIHsgfVxuICAgIHVwZGF0ZShlbmdpbmUpIHtcbiAgICAgICAgdGhpcy50aW1lciArPSBlbmdpbmUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZm9udCA9ICc0MHB4IEFyaWFsJztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ1lvdSBXb24hIE5pY2UhJywgZW5naW5lLndpZHRoIC8gMy41LCBlbmdpbmUuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBsYXllcldvblNjZW5lID0gUGxheWVyV29uU2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VsZWN0aW9uU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBsZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9sZXZlbHNcIik7XG5jb25zdCBNZW51VGV4dF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvU2VsZWN0aW9uU2NlbmUvTWVudVRleHRcIik7XG5jb25zdCBVcGRhdGVTZWxlY3RlZF8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvVXBkYXRlU2VsZWN0ZWRcIik7XG5jb25zdCBSZW5kZXJNZW51VGV4dF8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvUmVuZGVyTWVudVRleHRcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgU2VsZWN0aW9uU2NlbmUgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkVDU1NjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zb3J0ZWRMZXZlbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGxldmVsc18xLkxFVkVMUykge1xuICAgICAgICAgICAgdGhpcy5zb3J0ZWRMZXZlbHMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzLnNvcnQoKTtcbiAgICB9XG4gICAgb25FbnRlcihlbmdpbmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvcnRlZExldmVscy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEVudGl0eSgpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBpID09IDA7XG4gICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IE1lbnVUZXh0XzEuTWVudVRleHQodGhpcy5zb3J0ZWRMZXZlbHNbaV0sIGksIHNlbGVjdGVkKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRCQignc2VsZWN0ZWQnLCAwKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMCwgbmV3IFVwZGF0ZVNlbGVjdGVkXzEuVXBkYXRlU2VsZWN0ZWQoKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwLCBuZXcgUmVuZGVyTWVudVRleHRfMS5SZW5kZXJNZW51VGV4dFN5c3RlbSgpKTtcbiAgICB9XG4gICAgb25FeGl0KGVuZ2luZSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIGN1c3RvbVVwZGF0ZShlbmdpbmUpIHtcbiAgICAgICAgaWYgKGVuZ2luZS5rZXlEb3duLmhhcyhXb3JsZEVuZ2luZV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGVuZ2luZS5zZXRCQignbGV2ZWwnLCB0aGlzLmdldENvbXBvbmVudHMoc2VsZWN0ZWQpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KS5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cbmV4cG9ydHMuU2VsZWN0aW9uU2NlbmUgPSBTZWxlY3Rpb25TY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdGFydFNjZW5lID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IFNjZW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvc3JjL1NjZW5lXCIpO1xuY2xhc3MgU3RhcnRTY2VuZSBleHRlbmRzIFNjZW5lXzEuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FbnRlcihlbmdpbmUpIHsgfVxuICAgIG9uRXhpdChlbmdpbmUpIHsgfVxuICAgIHVwZGF0ZShlbmdpbmUpIHtcbiAgICAgICAgaWYgKGVuZ2luZS5rZXlEb3duLmhhcyhXb3JsZEVuZ2luZV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIGVuZ2luZS5rZXlEb3duLmNsZWFyKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5naW5lLmN0eC5mb250ID0gJzQwcHggQXJpYWwnO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnRHVuZ2VvbkdyYW1zJywgMjIwLCAxMDApO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnUHJlc3MgRW50ZXIgdG8gc3RhcnQnLCAyNzUsIDE1MCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICd5ZWxsb3cnO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnJiBnaXZlcyB5b3Ugc3RhbWluYScsIDQwLCAyMDApO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnQ29sbGVjdCBhbGwgKiB0byBvcGVuIHRoZSBwb3J0YWwuJywgNDAsIDIyMik7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdTdGVwIHRocm91Z2ggdGhlIHBvcnRhbCBPIHRvIHdpbiEnLCA0MCwgMjQ0KTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ0J1dCBtYWtlIHN1cmUgdG8gYXZvaWQgdGhlIGVuZW1pZXMgIyBhbmQgdHJhcHMgXicsIDQwLCAyNjYpO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnV0FTRCB0byBtb3ZlJywgNDAsIDM1MCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdSIHRvIHJlc3RhcnQnLCA0MCwgMzc1KTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ1EgdG8gcXVpdCcsIDQwLCA0MDApO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5TdGFydFNjZW5lID0gU3RhcnRTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteUFJU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgRW5lbXlBSVN5c3RlbSBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtQb3NpdGlvbl8xLlBvc2l0aW9uLCBSZW5kZXJfMS5SZW5kZXIsIENvbGxpZGVyXzEuQ29sbGlkZXJdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgLy8gY29uc3QgcGxheWVyUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhwbGF5ZXJJRCkuZ2V0KFBvc2l0aW9uKTtcbiAgICAgICAgLy8gbGV0IGNvbGxpc2lvbkZvdW5kID0gZmFsc2U7XG4gICAgICAgIC8vIGZvcihsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgLy8gICBjb25zdCBibG9ja1BvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChQb3NpdGlvbik7XG4gICAgICAgIC8vICAgaWYocGxheWVyUG9zLmVxdWFscyhibG9ja1BvcykpIHtcbiAgICAgICAgLy8gICAgIHBsYXllclBvcy54ID0gcGxheWVyUG9zLm9sZFg7XG4gICAgICAgIC8vICAgICBwbGF5ZXJQb3MueSA9IHBsYXllclBvcy5vbGRZO1xuICAgICAgICAvLyAgICAgY29sbGlzaW9uRm91bmQgPSB0cnVlO1xuICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICghY29sbGlzaW9uRm91bmQpIHtcbiAgICAgICAgLy8gICBwbGF5ZXJQb3Mub2xkWCA9IHBsYXllclBvcy54O1xuICAgICAgICAvLyAgIHBsYXllclBvcy5vbGRZID0gcGxheWVyUG9zLnk7XG4gICAgICAgIC8vIH1cbiAgICB9XG59XG5leHBvcnRzLkVuZW15QUlTeXN0ZW0gPSBFbmVteUFJU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVuZW15Q29sbGlzaW9uID0gdm9pZCAwO1xuY29uc3QgRW5lbXlfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0VuZW15XCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIEVuZW15Q29sbGlzaW9uIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW0VuZW15XzEuRW5lbXldKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgLy8gY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5ibGFja0JvYXJkLmdldCgncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuZ2V0QkIoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgIGZvciAobGV0IGlkIG9mIGVudGl0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAocG9zLmVxdWFscyhwbGF5ZXJQb3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ2dhbWUgb3ZlcicsIC0xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRW5lbXlDb2xsaXNpb24gPSBFbmVteUNvbGxpc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJDb2xsaXNpb24gPSB2b2lkIDA7XG5jb25zdCBDb2xsaWRlcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvQ29sbGlkZXJcIik7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgUGxheWVyQ29sbGlzaW9uIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW0NvbGxpZGVyXzEuQ29sbGlkZXJdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChwb3MuZXF1YWxzKHBsYXllclBvcykpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3MueCA9IHBsYXllclBvcy5vbGRYO1xuICAgICAgICAgICAgICAgIHBsYXllclBvcy55ID0gcGxheWVyUG9zLm9sZFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyUG9zLnVwZGF0ZU9sZCgpO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyQ29sbGlzaW9uID0gUGxheWVyQ29sbGlzaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllclN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IFBsYXllcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUGxheWVyXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgUGxheWVyU3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1Bvc2l0aW9uXzEuUG9zaXRpb24sIFJlbmRlcl8xLlJlbmRlciwgUGxheWVyXzEuUGxheWVyXSk7XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPSA1O1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlICs9IGVuZ2luZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPCAwLjA4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0TW92ZSA9IDA7XG4gICAgICAgIGxldCBwbGF5ZXJJRCA9IGVudGl0aWVzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgeCA9IHBvcy54O1xuICAgICAgICBjb25zdCB5ID0gcG9zLnk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBlbmdpbmUua2V5RG93bikge1xuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LkE6XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5MRUZUOlxuICAgICAgICAgICAgICAgICAgICBwb3MueCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LlM6XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5ET1dOOlxuICAgICAgICAgICAgICAgICAgICBwb3MueSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LkQ6XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5SSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5XOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuVVA6XG4gICAgICAgICAgICAgICAgICAgIHBvcy55IC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8gaW4gdGhlIGRlZmF1bHQgY2FzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXJTeXN0ZW0gPSBQbGF5ZXJTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9ydGFsU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgUG9ydGFsXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3J0YWxcIik7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBQb3J0YWxTeXN0ZW0gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9ydGFsXzEuUG9ydGFsLCBSZW5kZXJfMS5SZW5kZXJdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgW2lkXSA9IGVudGl0aWVzOyAvLyB0aGVyZSBjYW4gb25seSBiZSBvbmUgcG9ydGFsXG4gICAgICAgIGlmICh0aGlzLmVjcy5nZXRCQignc3dpdGNoIGNvdW50JykgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFJlbmRlcl8xLlJlbmRlcikuY2hhcmFjdGVyID0gJ08nO1xuICAgICAgICAgICAgY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwb3J0YWxQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAocGxheWVyUG9zLmVxdWFscyhwb3J0YWxQb3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ2dhbWUgb3ZlcicsIDEpOyAvLyBwbGF5ZXIgd29uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUmVuZGVyXzEuUmVuZGVyKS5jaGFyYWN0ZXIgPSAnbyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvcnRhbFN5c3RlbSA9IFBvcnRhbFN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBSZW5kZXJTeXN0ZW0gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9zaXRpb25fMS5Qb3NpdGlvbiwgUmVuZGVyXzEuUmVuZGVyXSk7XG4gICAgICAgIHRoaXMuY2hhclRvQ29sb3IgPSB7XG4gICAgICAgICAgICAnQCc6ICd3aGl0ZScsXG4gICAgICAgICAgICAnLSc6ICcjZDlkMWQwJyxcbiAgICAgICAgICAgICdYJzogJyM2MzYzNjMnLFxuICAgICAgICAgICAgJyonOiAnIzBjY2VmMCcsXG4gICAgICAgICAgICAnXFxcXCc6ICcjYzMwMGQxJyxcbiAgICAgICAgICAgICcvJzogJyNjMzAwZDEnLFxuICAgICAgICAgICAgJ28nOiAnIzQxNGQ0MicsXG4gICAgICAgICAgICAnTyc6ICcjMTlmMDBhJyxcbiAgICAgICAgICAgICcjJzogJ3JlZCcsXG4gICAgICAgICAgICAnXic6ICcjZjBjZDBhJyxcbiAgICAgICAgICAgICcmJzogJyMyNTljMmInLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGUoZW5naW5lLCBlbnRpdGllcykge1xuICAgICAgICBjb25zdCB4TW9kID0gdGhpcy5lY3MuZ2V0QkIoJ3ggbW9kJyk7XG4gICAgICAgIGNvbnN0IHlNb2QgPSB0aGlzLmVjcy5nZXRCQigneSBtb2QnKTtcbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb21wb25lbnRzXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFJlbmRlcl8xLlJlbmRlcik7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY2hhclRvQ29sb3JbcmVuZGVyLmNoYXJhY3Rlcl07XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KHJlbmRlci5jaGFyYWN0ZXIsIHBvcy54ICogeE1vZCwgcG9zLnkgKiB5TW9kKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyU3lzdGVtID0gUmVuZGVyU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlck1lbnVUZXh0U3lzdGVtID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IE1lbnVUZXh0XzEgPSByZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9TZWxlY3Rpb25TY2VuZS9NZW51VGV4dFwiKTtcbmNsYXNzIFJlbmRlck1lbnVUZXh0U3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW01lbnVUZXh0XzEuTWVudVRleHRdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgbWluWSA9IDEwMDtcbiAgICAgICAgY29uc3QgbWF4WSA9IGVuZ2luZS5oZWlnaHQgLSA0MDtcbiAgICAgICAgY29uc3QgeU1vZCA9IDIwO1xuICAgICAgICBjb25zdCBtYXhPcmRlciA9IChtYXhZIC0gbWluWSkgLyB5TW9kO1xuICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSBcIjE1cHggQXJpYWxcIjtcbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBjb25zdCBtID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhlbnRpdHkpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KTtcbiAgICAgICAgICAgIGxldCB4ID0gMjA7XG4gICAgICAgICAgICBsZXQgbyA9IG0ub3JkZXI7XG4gICAgICAgICAgICB3aGlsZSAobyA+IG1heE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgbyAtPSBtYXhPcmRlciArIDE7XG4gICAgICAgICAgICAgICAgeCArPSA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5ID0gbWluWSArIHlNb2QgKiBvO1xuICAgICAgICAgICAgaWYgKG0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eHRNZWFzdXJlID0gZW5naW5lLmN0eC5tZWFzdXJlVGV4dChtLm5hbWUpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxSZWN0KHggLSAxLjAsIHkgLSB5TW9kICogMC43LCB0eHRNZWFzdXJlLndpZHRoICogMS4xLCB5TW9kKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dChtLm5hbWUsIHgsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQobS5uYW1lLCB4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSBcIjMwcHggQXJpYWxcIjtcbiAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdMZXZlbCBTZWxlY3QnLCBlbmdpbmUud2lkdGggLyAyLjUsIDQ1KTtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlck1lbnVUZXh0U3lzdGVtID0gUmVuZGVyTWVudVRleHRTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXBkYXRlU2VsZWN0ZWQgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uLy4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0XCIpO1xuY2xhc3MgVXBkYXRlU2VsZWN0ZWQgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbTWVudVRleHRfMS5NZW51VGV4dF0pO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSAxMDtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlICs9IGVuZ2luZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFVwZGF0ZSA8IDAuMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlQcmVzcyA9IFdvcmxkRW5naW5lXzEuS2V5LklOVkFMSUQ7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBlbmdpbmUua2V5RG93bikge1xuICAgICAgICAgICAgaWYgKGtleSA9PSBXb3JsZEVuZ2luZV8xLktleS5ET1dOIHx8IGtleSA9PSBXb3JsZEVuZ2luZV8xLktleS5VUCB8fCBXb3JsZEVuZ2luZV8xLktleS5SSUdIVCB8fCBXb3JsZEVuZ2luZV8xLktleS5MRUZUKSB7XG4gICAgICAgICAgICAgICAga2V5UHJlc3MgPSBrZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LklOVkFMSUQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZXQgc2VsZWN0ZWQgZW50aXR5IGFuZCBuZXcgZW50aXR5IGluZGV4XG4gICAgICAgIGxldCBzZWxlY3RlZEVudGl0eSA9IHRoaXMuZWNzLmdldEJCKCdzZWxlY3RlZCcpO1xuICAgICAgICBjb25zdCBsdmxzUGVyQ29sdW1uID0gMTg7XG4gICAgICAgIGxldCBuZXdFbnRpdHk7XG4gICAgICAgIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5VUCB8fCBrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5XKSB7XG4gICAgICAgICAgICBuZXdFbnRpdHkgPSBzZWxlY3RlZEVudGl0eSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuRE9XTiB8fCBrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5TKSB7XG4gICAgICAgICAgICBuZXdFbnRpdHkgPSBzZWxlY3RlZEVudGl0eSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuUklHSFQgfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuRCkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgKyBsdmxzUGVyQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkxFRlQgfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuQSkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgLSBsdmxzUGVyQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbnRpdGllcy5oYXMobmV3RW50aXR5KSkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlZCBzZWxlY3RlZFxuICAgICAgICB0aGlzLmVjcy5zZXRCQignc2VsZWN0ZWQnLCBuZXdFbnRpdHkpO1xuICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkRW50aXR5KS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhuZXdFbnRpdHkpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IFVwZGF0ZVNlbGVjdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN3aXRjaENvbGxpc2lvbiA9IHZvaWQgMDtcbmNvbnN0IFBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3NpdGlvblwiKTtcbmNvbnN0IFN3aXRjaF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvU3dpdGNoXCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIFN3aXRjaENvbGxpc2lvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtTd2l0Y2hfMS5Td2l0Y2hdKTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXRjaFBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChzd2l0Y2hQb3MuZXF1YWxzKHBsYXllclBvcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2l0Y2hDb3VudCA9IHRoaXMuZWNzLmdldEJCKCdzd2l0Y2ggY291bnQnKSAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3N3aXRjaCBjb3VudCcsIHN3aXRjaENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVjcy5yZW1vdmVFbnRpdHkoaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Td2l0Y2hDb2xsaXNpb24gPSBTd2l0Y2hDb2xsaXNpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuS2V5ID0gZXhwb3J0cy5FQ1NTY2VuZSA9IGV4cG9ydHMuU2NlbmUgPSBleHBvcnRzLlN5c3RlbSA9IGV4cG9ydHMuQ29tcG9uZW50ID0gZXhwb3J0cy5FbmdpbmUgPSB2b2lkIDA7XG52YXIgRW5naW5lXzEgPSByZXF1aXJlKFwiLi9zcmMvRW5naW5lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRW5naW5lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBFbmdpbmVfMS5FbmdpbmU7IH0gfSk7XG52YXIgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9zcmMvQ29tcG9uZW50XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29tcG9uZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDb21wb25lbnRfMS5Db21wb25lbnQ7IH0gfSk7XG52YXIgU3lzdGVtXzEgPSByZXF1aXJlKFwiLi9zcmMvU3lzdGVtXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU3lzdGVtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTeXN0ZW1fMS5TeXN0ZW07IH0gfSk7XG52YXIgU2NlbmVfMSA9IHJlcXVpcmUoXCIuL3NyYy9TY2VuZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNjZW5lXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTY2VuZV8xLlNjZW5lOyB9IH0pO1xudmFyIEVDU1NjZW5lXzEgPSByZXF1aXJlKFwiLi9zcmMvRUNTU2NlbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJFQ1NTY2VuZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRUNTU2NlbmVfMS5FQ1NTY2VuZTsgfSB9KTtcbnZhciBLZXlfMSA9IHJlcXVpcmUoXCIuL3NyYy9LZXlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJLZXlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEtleV8xLktleTsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBleHBvcnRzLkNvbXBvbmVudCA9IHZvaWQgMDtcbmNsYXNzIENvbXBvbmVudCB7XG59XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmNsYXNzIENvbXBvbmVudENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubWFwLnNldChjb21wb25lbnQuY29uc3RydWN0b3IsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGdldChjb21wb25lbnRDbGFzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gICAgaGFzKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgICBoYXNBbGwoY29tcG9uZW50Q2xhc3Nlcykge1xuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY29tcG9uZW50Q2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcC5oYXMoY2xzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZGVsZXRlKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHRoaXMubWFwLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBDb21wb25lbnRDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRUNTU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKTtcbi8vIGh0dHBzOi8vbWF4d2VsbGZvcmJlcy5jb20vcG9zdHMvdHlwZXNjcmlwdC1lY3MtaW1wbGVtZW50YXRpb24vIGlzIHdoYXQgdGhpc1xuLy8gaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb2ZmIG9mLlxuY2xhc3MgRUNTU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gTWFpbiBzdGF0ZVxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIEJvb2trZWVwaW5nIGZvciBlbnRpdGllcy5cbiAgICAgICAgdGhpcy5uZXh0RW50aXR5SUQgPSAwO1xuICAgICAgICB0aGlzLmVudGl0aWVzVG9EZXN0cm95ID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgcmV0dXJuIC0xLiBBbnkgb3RoZXIgbnVtYmVycyB3aWxsIHRlbGwgdGhlIGdhbWUgZW5naW5lIHRvIGNoYW5nZVxuICAgICAqIHRoZSBzY2VuZSB0byB3aGF0ZXZlciBpbmRleCBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gY2FudmFzXG4gICAgICogQHBhcmFtIGtleVByZXNzZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBhbGwgc3lzdGVtcy4gKExhdGVyLCB3ZSdsbCBhZGQgYSB3YXkgdG8gc3BlY2lmeSB0aGVcbiAgICAgICAgLy8gdXBkYXRlIG9yZGVyLilcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgdGhpcy5wcmlvcml0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzeXN0ZW0gPSB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uZ2V0KHByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSk7XG4gICAgICAgICAgICBzeXN0ZW0udXBkYXRlKGVuZ2luZSwgY29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGFueSBlbnRpdGllcyB0aGF0IHdlcmUgbWFya2VkIGZvciBkZWxldGlvbiBkdXJpbmcgdGhlXG4gICAgICAgIC8vIHVwZGF0ZS5cbiAgICAgICAgd2hpbGUgKHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95RW50aXR5KHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kucG9wKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmN1c3RvbVVwZGF0ZShlbmdpbmUpO1xuICAgIH1cbiAgICAvLyBBUEk6IEVudGl0aWVzXG4gICAgYWRkRW50aXR5KCkge1xuICAgICAgICBsZXQgZW50aXR5ID0gdGhpcy5uZXh0RW50aXR5SUQ7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEKys7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuc2V0KGVudGl0eSwgbmV3IENvbXBvbmVudF8xLkNvbXBvbmVudENvbnRhaW5lcigpKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFya3MgYGVudGl0eWAgZm9yIHJlbW92YWwuIFRoZSBhY3R1YWwgcmVtb3ZhbCBoYXBwZW5zIGF0IHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgbmV4dCBgdXBkYXRlKClgLiBUaGlzIHdheSB3ZSBhdm9pZCBzdWJ0bGUgYnVncyB3aGVyZSBhblxuICAgICAqIEVudGl0eSBpcyByZW1vdmVkIG1pZC1gdXBkYXRlKClgLCB3aXRoIHNvbWUgU3lzdGVtcyBzZWVpbmcgaXQgYW5kXG4gICAgICogb3RoZXJzIG5vdC5cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kucHVzaChlbnRpdHkpO1xuICAgIH1cbiAgICBhZGRDb21wb25lbnQoZW50aXR5LCBjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KS5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jaGVja0UoZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50cyhlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZ2V0KGVudGl0eSk7XG4gICAgfVxuICAgIHJlbW92ZUNvbXBvbmVudChlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuY2hlY2tFKGVudGl0eSk7XG4gICAgfVxuICAgIHNldEJCKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZC5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgICBnZXRCQihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxhY2tCb2FyZC5nZXQoa2V5KTtcbiAgICB9XG4gICAgLy8gQVBJOiBTeXN0ZW1zXG4gICAgLyoqXG4gICAgICogQWRkIGEgc3lzdGVtIHdoZXJlIHRoZSBwcmlvcml0eSBkZWZpbmVzIGluIHdoYXQgb3JkZXIgaXQgd2lsbCBiZSBydW4gd2hlblxuICAgICAqIGNvbXBhcmVkIHRvIG90aGVyIHN5c3RlbXNcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgLSBsb3dlciB2YWx1ZSBpcyBydW4gZmlyc3RcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgYWRkU3lzdGVtKHByaW9yaXR5LCBzeXN0ZW0pIHtcbiAgICAgICAgLy8gU3lzdGVtIG11c3QgcmVxdWlyZSBhdCBsZWFzdCBvbmUgY29tcG9uZW50ICAgIFxuICAgICAgICBpZiAoc3lzdGVtLmNvbXBvbmVudHNSZXF1aXJlZC5zaXplID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N5c3RlbSBub3QgYWRkZWQ6IGVtcHR5IENvbXBvbmVudHMgbGlzdC4nICsgc3lzdGVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmlvcml0aWVzLmluY2x1ZGVzKHByaW9yaXR5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtzeXN0ZW19IGNhbiBub3QgYmUgdXNlZCBzaW5jZSBwcmlvcml0eSAke3ByaW9yaXR5fSBhbHJlYWR5IGluIHVzZS5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBHaXZlIHN5c3RlbSBhIHJlZmVyZW5jZSB0byB0aGUgRUNTIHNvIGl0IGNhbiBhY3R1YWxseSBkb1xuICAgICAgICAvLyBhbnl0aGluZy5cbiAgICAgICAgc3lzdGVtLmVjcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbS5zZXQocHJpb3JpdHksIHN5c3RlbSk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuc2V0KHByaW9yaXR5LCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLnByaW9yaXRpZXMucHVzaChwcmlvcml0eSk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5zb3J0KCk7XG4gICAgICAgIC8vIFNhdmUgc3lzdGVtIGFuZCBzZXQgd2hvIGl0IHNob3VsZCB0cmFjayBpbW1lZGlhdGVseS5cbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMua2V5cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRVMoZW50aXR5LCBwcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLm5leHRFbnRpdHlJRCA9IDA7XG4gICAgfVxuICAgIGRlc3Ryb3lFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgdGhpcy5wcmlvcml0aWVzKSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAVE9ETzogY2FuIEkgcmVtb3ZlIHRoaXM/XG4gICAgY2hlY2tFKGVudGl0eSkge1xuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJIHRoaW5rIHRoaXMgY2FuIGJlIHJlbW92ZWQgYnV0IEknbSBnb2luZyB0byBsZWF2ZSBpdCBpbiBmb3Igbm93LlxuICAgICAqIEBwYXJhbSBlbnRpdHlcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBoYXZlID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KTtcbiAgICAgICAgbGV0IG5lZWQgPSB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uZ2V0KHByaW9yaXR5KS5jb21wb25lbnRzUmVxdWlyZWQ7XG4gICAgICAgIGlmIChoYXZlLmhhc0FsbChuZWVkKSkge1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGluIHN5c3RlbVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpLmFkZChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBpbiBzeXN0ZW1cbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KS5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRUNTU2NlbmUgPSBFQ1NTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmdpbmUgPSB2b2lkIDA7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuL0tleVwiKTtcbmNsYXNzIEVuZ2luZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2NlbmVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMua2V5RG93biA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5rZXlQcmVzcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkID0gbmV3IE1hcCgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpO1xuICAgICAgICAgICAgaWYgKGsgPT0gS2V5XzEuS2V5LkRPV04gfHwgayA9PSBLZXlfMS5LZXkuVVAgfHwgayA9PSBLZXlfMS5LZXkuTEVGVCB8fCBrID09IEtleV8xLktleS5SSUdIVCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5rZXlEb3duLmhhcyhrKSkge1xuICAgICAgICAgICAgICAgIHRoaXMua2V5RG93bi5hZGQoayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgayA9ICgwLCBLZXlfMS5rZXlDb2RlVG9LZXkpKGUua2V5KTtcbiAgICAgICAgICAgIHRoaXMua2V5RG93bi5kZWxldGUoayk7XG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlQcmVzcy5hZGQoKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuZGVsdGEgPSAwO1xuICAgIH1cbiAgICA7XG4gICAgc2V0QkIoa2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkLnNldChrZXksIHZhbCk7XG4gICAgfVxuICAgIGdldEJCKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibGFja0JvYXJkLmdldChrZXkpO1xuICAgIH1cbiAgICBhZGRTY2VuZShzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsZXQgb2xkVGltZVN0YW1wO1xuICAgICAgICBsZXQgZnBzO1xuICAgICAgICB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLm9uRW50ZXIodGhpcyk7XG4gICAgICAgIGNvbnN0IGdhbWVMb29wID0gKHRpbWVTdGFtcCkgPT4ge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgICAgIHRoaXMuZGVsdGEgPSAodGltZVN0YW1wIC0gb2xkVGltZVN0YW1wKSAvIDEwMDA7XG4gICAgICAgICAgICBvbGRUaW1lU3RhbXAgPSB0aW1lU3RhbXA7XG4gICAgICAgICAgICBmcHMgPSBNYXRoLnJvdW5kKDEgLyB0aGlzLmRlbHRhKTtcbiAgICAgICAgICAgIC8vIHJlc2V0IGJhY2tncm91bmRcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBnYW1lIGVuZ2luZSBvcGVyYXRpb25zXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgLy8gRHJhdyBGUFNcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSAnMTJweCBBcmlhbCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmVkJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiRlBTOiBcIiArIGZwcywgdGhpcy53aWR0aCAtIDYwLCAzMCk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgaSA9IHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0udXBkYXRlKHRoaXMpO1xuICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FeGl0KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FbnRlcih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleVByZXNzLmNsZWFyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5FbmdpbmUgPSBFbmdpbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5Q29kZVRvS2V5ID0gZXhwb3J0cy5LZXkgPSB2b2lkIDA7XG52YXIgS2V5O1xuKGZ1bmN0aW9uIChLZXkpIHtcbiAgICBLZXlbS2V5W1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgS2V5W0tleVtcIlJJR0hUXCJdID0gMV0gPSBcIlJJR0hUXCI7XG4gICAgS2V5W0tleVtcIkRPV05cIl0gPSAyXSA9IFwiRE9XTlwiO1xuICAgIEtleVtLZXlbXCJVUFwiXSA9IDNdID0gXCJVUFwiO1xuICAgIEtleVtLZXlbXCJXXCJdID0gNF0gPSBcIldcIjtcbiAgICBLZXlbS2V5W1wiQVwiXSA9IDVdID0gXCJBXCI7XG4gICAgS2V5W0tleVtcIlNcIl0gPSA2XSA9IFwiU1wiO1xuICAgIEtleVtLZXlbXCJEXCJdID0gN10gPSBcIkRcIjtcbiAgICBLZXlbS2V5W1wiUVwiXSA9IDhdID0gXCJRXCI7XG4gICAgS2V5W0tleVtcIlJcIl0gPSA5XSA9IFwiUlwiO1xuICAgIEtleVtLZXlbXCJTUEFDRVwiXSA9IDEwXSA9IFwiU1BBQ0VcIjtcbiAgICBLZXlbS2V5W1wiRVNDQVBFXCJdID0gMTFdID0gXCJFU0NBUEVcIjtcbiAgICBLZXlbS2V5W1wiRU5URVJcIl0gPSAxMl0gPSBcIkVOVEVSXCI7XG4gICAgS2V5W0tleVtcIklOVkFMSURcIl0gPSAxM10gPSBcIklOVkFMSURcIjtcbn0pKEtleSA9IGV4cG9ydHMuS2V5IHx8IChleHBvcnRzLktleSA9IHt9KSk7XG5mdW5jdGlvbiBrZXlDb2RlVG9LZXkoa2V5KSB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnRG93bic6XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkRPV047XG4gICAgICAgIGNhc2UgJ1VwJzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlVQO1xuICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5SSUdIVDtcbiAgICAgICAgY2FzZSAnTGVmdCc6XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkxFRlQ7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlNQQUNFO1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5FU0NBUEU7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5BO1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUztcbiAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkQ7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5XO1xuICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUjtcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlE7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRU5URVI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVuaGFuZGxlZCBrZXk6ICR7a2V5fS5gKTtcbiAgICAgICAgICAgIHJldHVybiBLZXkuSU5WQUxJRDtcbiAgICB9XG59XG5leHBvcnRzLmtleUNvZGVUb0tleSA9IGtleUNvZGVUb0tleTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2VuZSA9IHZvaWQgMDtcbmNsYXNzIFNjZW5lIHtcbn1cbmV4cG9ydHMuU2NlbmUgPSBTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeXN0ZW0gPSB2b2lkIDA7XG5jbGFzcyBTeXN0ZW0ge1xufVxuZXhwb3J0cy5TeXN0ZW0gPSBTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTEVWRUxTID0gdm9pZCAwO1xuZXhwb3J0cy5MRVZFTFMgPSB7IFwiMTFfNFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLy8tLS0tWC0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLVgtLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tWCMqLS1YLS1cIiwgXCItLS0tLS0tLVgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tWFgtLVgtLVwiLCBcIi0tJi0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzlcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0tJi0tLS0tXCIsIFwiLS0tLS0tLS0tLSMtLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiMTVfMFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0mLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS1eXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLV5eXl4tLV5eXl5eXl5eXi0tXCIsIFwiLS1eXi0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSYtLS0tLS0tLSotLS0tKi0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI5XzJcIjogW1wiQC0tLS0tLS0tLS1eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLSMtLSMtLS0tWC0jWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS1YLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tXl5eXl5eLU9cIl0sIFwiMV8xMlwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0jWFhYWC0tLVwiLCBcIi0tLS0tLS0tJi0tLVhYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tKi0tLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzEzXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYLS0jWFhYWC0tXCIsIFwiLS0tLS0tWFhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tKi0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjlfM1wiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLVgtLS0vL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tXFxcXFxcXFwvLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxNV8xXCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tXl4tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLV5eLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tXl4tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS1eXi0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tXl4tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0qLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjE3XzNcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tI1gtLS0tLS0tXi0tLS0tLS1cIiwgXCItLVhYLS0tLVgtLV4tLS0tWC0tXCIsIFwiLS1YLS0tLVhYLS1eLS0tWFgtLVwiLCBcIi0tLS0tLVhYWC0tXi0tWFhYLS1cIiwgXCItLS0tLS1YIyotLS0tLVgjKi0tXCIsIFwiLS0tLS0tWFhYLS0mLS1YWFgtLVwiLCBcIi0tLS0tLS1YWC0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLVgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiM184XCI6IFtcIkAtWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLVhYLS0tWFhYLS0tLVwiLCBcIi0tWFgtIy1YWC0jLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0qWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLS0tJi0tLS1PXCJdLCBcIjExXzVcIjogW1wiQC1YWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tI1hYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiM18xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLSYtLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxM181XCI6IFtcIkAtWFhYLS1eXl5eXl5eXl5eLS1cIiwgXCItLSNYWC0tLS0tLS0tLSojWC0tXCIsIFwiLS0tWFgtLS0tLS1YLS1YWFgtLVwiLCBcIi0tLVhYLS0tLS1YWC0tWFgtLS1cIiwgXCItLS0tLS0tLS1YWFgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tWCMqLS1YLS0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tWC0tLS1cIiwgXCItLS1YWC0tLS0tWFgtLVgtLS0tXCIsIFwiLS0tWFgtLS0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWC0tXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYLS0jWFhYLS1cIiwgXCItLS0tLS0tWFhYWC0tLVhYWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tKi0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiMV84XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0qWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0tLS0tLS1PXCJdLCBcIjExXzdcIjogW1wiQC1eXl5eXl5eXl5eLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS1YLS0tLVhYWC0tXCIsIFwiLS1YWFgtLS1YWC0tLS1YWFgtLVwiLCBcIi0tWCpYLS1YWFgtLS0tWFgtLS1cIiwgXCItLVgmLS0tWCMqLS0tLVhYLS0tXCIsIFwiLS1YKlgtLVhYWC0tLS0tLS0tLVwiLCBcIi0tWFhYLS0tWFgtLS0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YLS0tLVhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1YWFgtLVwiLCBcIi0tXl5eXl5eXl5eXi0tWFhYLU9cIl0sIFwiMTVfM1wiOiBbXCJALS0tXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLS0tLVwiLCBcIi0tLS0tLS0tWC0tXi0tLS1YLS1cIiwgXCItLS0tLS0tWFgtLV4tLS1YWC0tXCIsIFwiLS0tLS0tWFhYLS1eLS1YWFgtLVwiLCBcIi0tLS0tLVgjKi0tLS0tWCMqLS1cIiwgXCItLS0tLS1YWFgtLSYtLVhYWC0tXCIsIFwiLS0tLS0tLVhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLV5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxXzExXCI6IFtcIkAtWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0qWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0mLS0tLS1PXCJdLCBcIjlfMVwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0tWC0jLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCI5XzBcIjogW1wiQC0tLS0tLS0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSotLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLV5eXl5eLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0mLS0tXCIsIFwiLS0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tXl5eLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tKi0tLS0tLV5eXl5eXl5eLU9cIl0sIFwiMV8xMFwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0mLS1YWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIxNV8yXCI6IFtcIkAtLV5eXi0tXl5eXl5eXl5eLS1cIiwgXCItLS1eXl4tLS0tLS0tLS0qIy0tXCIsIFwiLS0tXl5eLS0tLS0tWC0tWFgtLVwiLCBcIi0tLV5eXi0tLS0tWFgtLVhYLS1cIiwgXCItLS0tKi0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tXl5eLS0tLVgjKi0tWC0tLVwiLCBcIi0tLS0mLS0tLS1YWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tLVhYLS1YLS0tXCIsIFwiLS0tXl5eLS0tLS0tWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXl4tLV5eXl5eXl5eXi1PXCJdLCBcIjExXzZcIjogW1wiQC1eXl5eXl5eXl5eLS1YWFgtLVwiLCBcIi0tLS0tLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLSNYLSNYLSNYLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tXl5eXl5eXl5eXi0tWFhYLU9cIl0sIFwiMV85XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYWFgtLS1cIiwgXCItLVhYLS1YWFgtLS0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0qWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFgtLS1cIiwgXCItLSMtLS0tJi0tLS0tLVhYLS1PXCJdLCBcIjNfMTVcIjogW1wiQC0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYLS0jWFhYLS1cIiwgXCItLS0tLS0tWFhYWC0tLVhYWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tKi0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfNFwiOiBbXCJALS1eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tWC0tWC0tLS1YWC0tXCIsIFwiLS0tLS0tLVgtLVheLS0tWCotLVwiLCBcIi0tLV5eLS1YWFhYXl4tLVgmLS1cIiwgXCItLS0tLS0tWC0tWF4tLS1YKi0tXCIsIFwiLS0tXl4tLVgtLVgtLS0tWFgtLVwiLCBcIi0tLV5eLS0tLS0vL1xcXFxcXFxcLy9cXFxcLS1cIiwgXCItLS1eXi0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy0tXCIsIFwiLS0tXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzExXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSNYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjEzXzBcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLSMtLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTFfMlwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tJi0tLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxN180XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0jWC0jWC0jWC0jWC0jWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjVfOVwiOiBbXCJALS0tLV4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS1eLS1YWFhYWFhYWFgtT1wiXSwgXCIxXzE0XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0jWFhYWFhYLS0mLS0tXCIsIFwiLS0tLS0tLVhYWFhYWC0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS0tLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjlfNFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLVgtLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YXi0tLVgtLVwiLCBcIi0tLS0tLS0tWFhYWF5eLS1YLS1cIiwgXCItLS0tLS0tLVgtLVheLS0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YLS0tLVgtLVwiLCBcIi0tJi0tLS0tLS0tLy9cXFxcXFxcXC8vLS1cIiwgXCItLS0tLS0tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxNV82XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS1YLS1YLS0tLVhYLS1cIiwgXCItLVgqWC0tWC0tWF4tLS1YKi0tXCIsIFwiLS1YJi0tLVhYWFheXi0tWCYtLVwiLCBcIi0tWCpYLS1YLS1YXi0tLVgqLS1cIiwgXCItLVhYWC0tWC0tWC0tLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS8vXFxcXFxcXFwvL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjlfNVwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtWC0tLS0tLS0tLSotLVwiLCBcIi0tXFxcXC8vLVgtLS0tLS1YLS1YLS1cIiwgXCItLS0tLS1YLS0tLS1YWC0tWC0tXCIsIFwiLS0mLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tWCMqLS1YLS1cIiwgXCItLSYtLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tWC0tLS0tWFgtLVgtLVwiLCBcIi0tL1xcXFxcXFxcLVgtLS0tLS1YLS1YLS1cIiwgXCItLVxcXFwvLy1YLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxXzE1XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYLS0jWFhYWC0tXCIsIFwiLS0tLVhYWFhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tKi0tLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjVfOFwiOiBbXCJALS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS0tLSMtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0jLS0tIy0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tKi0tWFhYWFhYWFgtT1wiXSwgXCIxN181XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS0mLS0tWCMqLS1YIyotLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjExXzNcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLS0tLVgtLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTNfMVwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tIy0tLS0tWCMqLS0tLS0mLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tI1hYWC0tXCIsIFwiLS0tLS0jLS0tLSYtLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSotLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjNfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tI1hYWFgtLSotLS1cIiwgXCItLS0tLS0tLS1YWFhYLS0tLS0tXCIsIFwiLS0tLS0tLS0tLSotLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfM1wiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLy8tLS0tLS0tLVgtLVhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YIyotLVgtLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tWC0tLVwiLCBcIi0tJi0tLS0tLS0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMV8xXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS1eLS1YWC0tXCIsIFwiLS0mLS0tLS0tLS0tXi0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLV4tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjlfN1wiOiBbXCJALVhYWFhYLS1eXl5eXl5eXi0tXCIsIFwiLS1YWFhYWC0tLS0tLS0tLSotLVwiLCBcIi0tWFhYWFgtLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYLS0tLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLS0mLS0tLS0tWCMqLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tWFhYWC0tLS0tWFgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWC0tXl5eXl5eXl4tT1wiXSwgXCIxXzE3XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSNYWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tWFhYWC0tLVwiLCBcIi0tWFhYWFhYWC0tLS0qLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE1XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tI1gtLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLS0tLVgtLVheLS0tWCpYLS1cIiwgXCItLS0tLS1YWFhYXl4tLVgmLS0tXCIsIFwiLS0tLS0tWC0tWF4tLS1YKlgtLVwiLCBcIi0tLS0tLVgtLVgtLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0vL1xcXFxcXFxcLy9cXFxcXFxcXC0tXCIsIFwiLS0tLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy8tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiN184XCI6IFtcIkAtLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tKi0tLS0tKi0tLSotLS0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0mLS0tLS0tIy0tLSMtLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjdfOVwiOiBbXCJALS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLSotLS0tLSotLS0jWFgtLVwiLCBcIi0tLV5eXi0tLS0tLS0tLVhYLS1cIiwgXCItLS0tJi0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxNV80XCI6IFtcIkAtLS1eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS1YWC0tLVhYLS1YLS1cIiwgXCItLS0tLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tWCMqLS1YIyotLVgtLVwiLCBcIi0tLS0tLVhYWC0tWFhYLS1YLS1cIiwgXCItLS0tLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjFfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLSNYWFhYLS1cIiwgXCItLS0tJi0tWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLVhYWC0tLS0qLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiOV82XCI6IFtcIkAtWFhYWFgtLV5eXl5eXl5eLS1cIiwgXCItLSNYWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLSNYLSMtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYLS1eXl5eXl5eXi1PXCJdLCBcIjExXzBcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tKi0tLS0qLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTNfMlwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tIy0tLS0tLS1YIyotLVgjLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzEzXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYLS0tLS0jWFhYWC0tXCIsIFwiLS0jLS1YWC0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSotLS0tKi0tLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjE0XzNcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLSMtLS0tLVgjKi0tWC0jWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF8xXCI6IFtcIkAtLS0tLS0tLS0tLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0jLS0jLS0tLS0tWCMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tXl5eXi1PXCJdLCBcIjdfMTBcIjogW1wiQC1eXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKlgtLS0tLS0tLS0jWFhYLS1cIiwgXCItLSYtLS0tLS0tLS0tLVhYWC0tXCIsIFwiLS0qWC0tLS0tLSMtLS0tKi0tLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXl5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiMTBfN1wiOiBbXCJALV5eXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0qWC0tWFhYLS0tLVhYWFgtLVwiLCBcIi0tJi0tLVgjKi0tLS1YWFhYLS1cIiwgXCItLSpYLS1YWFgtLS0tWFhYWC0tXCIsIFwiLS1YWC0tLVhYLS0tLS0tWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tWFgtLS0tXCIsIFwiLS1eXl5eXl5eXl4tLVhYWFgtT1wiXSwgXCI1XzE1XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0qLS0tXCIsIFwiLS1YWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFgtLS0tIy0tLSMtLS0jLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEyXzVcIjogW1wiQC1eXl5eXl5eXl5eXi0tWFgtLVwiLCBcIi0tLS0tLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLSNYLSNYLSNYLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tXl5eXl5eXl5eXl4tLVhYLU9cIl0sIFwiMF84XCI6IFtcIkAtLS0tLSMtLS1YLS1YWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0vLy0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFgtLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLS0tLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0jLS0tJi0tWFhYWC1PXCJdLCBcIjBfOVwiOiBbXCJALS0tLS0jLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLy8tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tJi0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tIy0tLS1YWFhYWFgtT1wiXSwgXCIxMl80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YIyotLVgtI1gtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0mLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjVfMTRcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tI1hYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfNlwiOiBbXCJALVhYWFgtLV5eXl5eXl5eXi0tXCIsIFwiLS0jWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYLS1eXl5eXl5eXl4tT1wiXSwgXCI3XzExXCI6IFtcIkAtXl5eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tWFhYLS0tLVhYWFhYWFhYLS1cIiwgXCItLVgqWC0tLS0tLSNYWFhYWC0tXCIsIFwiLS1YJi0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tWCpYLS0tLS0tLS0qLS0tLS1cIiwgXCItLVhYWC0tLS1YWFhYWFhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLVhYWFhYWFhYLS1cIiwgXCItLV5eXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjBfMThcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiOF8wXCI6IFtcIkAtLS0tLS0tLS0tLV5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tJi0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS1eXl5eXi1PXCJdLCBcIjE0XzJcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLSMtLS0tLS0tWCMqLS1YIy0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTRfMFwiOiBbXCJALS1eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0qLS0tLSotLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tLSotLS0tKi0tXCIsIFwiLS0tXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzJcIjogW1wiQC0tLS0tLS0tLS1eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLy9cXFxcLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tXl5eXl5eLU9cIl0sIFwiMTZfMlwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tLS0tKi0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS1YLS1YLS0tLV5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tXl5eXl4tLVwiLCBcIi0tI1gtI1gtI1gtLS0tLSYtLS1cIiwgXCItLS1YLS1YLS1YLS1eXl5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tLS1eXl4tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxMF80XCI6IFtcIkAtLVhYLS1eXl5eXl5eXl5eLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1YWC0tXl5eXl5eXl5eXi1PXCJdLCBcIjVfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLSNYWFhYLS0qLS0tI1hYLS1cIiwgXCItLS0tWFhYWC0tLS0tLS1YWC0tXCIsIFwiLS0tLS0qLS0tLS0jLS0tLSotLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl85XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0jLVhYWFgtLS1cIiwgXCItLVhYLS1YWFgtLS0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0qWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFgtLS1cIiwgXCItLSMtLS0tJi0tLS0tLVhYLS1PXCJdLCBcIjEyXzZcIjogW1wiQC1eXl5eXl5eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS1YWC0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tKlgtLVhYWC0tLS0tLSotLS1cIiwgXCItLSYtLS1YIyotLS0tLS0tLS0tXCIsIFwiLS0qWC0tWFhYLS0tLS0tLSMtLVwiLCBcIi0tWFgtLS1YWC0tLS1YWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS0vLy0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tXl5eXl5eXl5eLS1YWFhYLU9cIl0sIFwiMl84XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLSMtLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0qWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0tLS0tLS1PXCJdLCBcIjEwXzVcIjogW1wiQC1YWFgtLS1eXl5eXl5eXl4tLVwiLCBcIi0tI1hYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS0tXl5eXl5eXl5eLU9cIl0sIFwiN18xMlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWC0tWFgqI1hYKiNYWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWCojWFgtLVhYLS1YWCojLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxNl8zXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tXl4tLS0tLS1YWC0tLVhYLS1cIiwgXCItLV5eXl4tLS1YWFgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tWCMqLS1YIyotLVwiLCBcIi0tXl5eXi0tLVhYWC0tWFhYLS1cIiwgXCItLV5eLS0tLS0tWFgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfM1wiOiBbXCJALS0tLS0tLS0tWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLVhYLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tWC0tLVwiLCBcIi0tLS0tIy0tWCMmLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tWC0tLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tLVgtLV5eXl4tT1wiXSwgXCIxNF8xXCI6IFtcIkAtLS0tXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0jLS0tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLV5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfN1wiOiBbXCJALVhYWFhYWC0tXl5eXl5eXi0tXCIsIFwiLS0jWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tJi0tLS0tLS1YLSNYLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFgtLV5eXl5eXl4tT1wiXSwgXCIxNF81XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS1YXi0tLVgqWC0tWC0tXCIsIFwiLS1YWFhYWF5eLS1YJi0tLVgtLVwiLCBcIi0tLS0tLVheLS0tWCpYLS1YLS1cIiwgXCItLS0tLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tLy9cXFxcXFxcXC8vXFxcXFxcXFwtLVgtLVwiLCBcIi0tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8vLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjZfOFwiOiBbXCJALS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0qLS0tLS0tLS0jWFgtLVwiLCBcIi0tLS1eXl4tLS0tLS0tLVhYLS1cIiwgXCItLS0tLSYtLS0tLSMtLS0tKi0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtT1wiXSwgXCI1XzEzXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0tLS0mLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEwXzFcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLVgtIy0tXCIsIFwiLS0tLS0tLS0tLSYtLS1YLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tWC0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTJfM1wiOiBbXCJALS0tLS0tXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLy8tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tWFgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tWFhYLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVgjKi0tLVgtLS1cIiwgXCItLS0tLS0tLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVhYLS0tWC0tLVwiLCBcIi0tJi0tLS0tLS0tWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLV5eXl5eXl5eXl4tT1wiXSwgXCIxMl8yXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0vLy0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLS1YWC0tWC0tXCIsIFwiLS0mLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjEwXzBcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0qLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS1eXl5eLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0tJi0tXCIsIFwiLS0tLS0tLS0tLSYtLV5eXl4tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLV5eLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiNV8xMlwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI2XzlcIjogW1wiQC0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0qLS0tLS0tLS0jWFhYLS1cIiwgXCItLS1eXl4tLS0tLS0tLVhYWC0tXCIsIFwiLS0tLSYtLS0tLSMtLS0tKi0tLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiMTRfNFwiOiBbXCJALV5eXl5eXl5eXl5eXi0tWC0tXCIsIFwiLS0tLS0tWC0tLS0tLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS0tWC0tLS1YLS1cIiwgXCItLS1YLS1YLS0tWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tWFhYLS0tLVgtLVwiLCBcIi0tI1gtI1gtLVgjKi0tLS1YLS1cIiwgXCItLS1YLS1YLS1YWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tLVhYLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS0tWC0tLS1YLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS1eXl5eXl5eXl5eXl4tLSYtT1wiXSwgXCI4XzZcIjogW1wiQC0tLV5eXl5eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YWFgtLS1cIiwgXCItLS0tLS1YIyotLS0tWFgtLS0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS1YWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS1eXl5eXl5eLS1YWFhYLU9cIl0sIFwiOF80XCI6IFtcIkAtLS0tLSMtLS0tXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tWFgtLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLVhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLS1YWC0tXCIsIFwiLS0mLS0tWFgtLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0tLV5eXl5eXi1PXCJdLCBcIjE2XzRcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS0tLS1cIiwgXCItLSNYLSNYLSNYLSNYLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS0vLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tXFxcXC0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNF85XCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjVfMTBcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfMlwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tXi0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLV4tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1eLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLSYtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxMl8wXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0jLS0tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjEyXzFcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tWFhYLS1cIiwgXCItLSMtLS0tLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLSYtLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTBfM1wiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tWC0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCI1XzExXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0jWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0tLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfOFwiOiBbXCJALVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS1YWC0tLVhYWC0tLS1cIiwgXCItLVhYLSMtWFgtIy1YWFgtIy0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tKlhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLS0tLS0tLSYtLS0tT1wiXSwgXCIxNl81XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tWFgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSpYLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0mLS0tWC0jWC0jWC0jWC0tLVwiLCBcIi0tKlgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLVhYLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS1cXFxcXFxcXC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfNVwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWC0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tWFgtLS0tXl5eLS0tLS1cIiwgXCItLS0tLVhYLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS8vXFxcXFxcXFwtLVwiLCBcIi0tIy0tLS0tLS0tLS1cXFxcXFxcXC8vLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1YWC0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tWFgtLS0tXl5eLS0tLS1cIiwgXCItLS0tLVhYLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI4XzhcIjogW1wiQC1YWFhYWFgtLV5eXl5eXl4tLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWC0tLS0tLS1YLS1YLS1cIiwgXCItLVhYWFgtLS0tLS0tWC0jWC0tXCIsIFwiLS0tKi0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYLS1eXl5eXl5eLU9cIl0sIFwiNl83XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLS0tKi0tLS0tXl5eXi0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLS1eXl5eLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjBfMTBcIjogW1wiQC0tLS0tIy0tLVhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YWFhYWFhYLS1cIiwgXCItLS8vLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tWFhYWC0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLSYtLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLSMtLS1YWFhYWFhYLU9cIl0sIFwiNF81XCI6IFtcIkAtLS0tLS0tIy0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS0mKiMtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS1YWFhYWC1PXCJdLCBcIjJfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tI1hYWFgtLS0tLS1cIiwgXCItLS0tLSYtLS1YWFhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0tLVgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0mLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjBfMVwiOiBbXCJALS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLSMtLSYtLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tJi0tLVwiLCBcIi0tJi0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tJi0tLS0tT1wiXSwgXCIwXzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0mLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLU9cIl0sIFwiMl8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0mLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS0tLS1PXCJdLCBcIjJfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWC0tLS0tI1hYWFgtLS1cIiwgXCItLS0tWFgtLS0tLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0qLS0tLSotLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF80XCI6IFtcIkAtLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLVhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgqLS1cIiwgXCItLSotLS0tLSotLSYtLVhYLS1PXCJdLCBcIjBfMTFcIjogW1wiQC0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS1YWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tIy0tWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLSYtLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLU9cIl0sIFwiNl82XCI6IFtcIkAtLS0tLVhYWFhYLS1eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWC0tLS0qIy0tXCIsIFwiLS0vLy0tWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLVhYWFhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tIy0tLS0tLVgtLS1cIiwgXCItLS0tLS1YWFhYWC0tLS1YLS0tXCIsIFwiLS0mLS0tWFhYWFgtLS0tWC0tLVwiLCBcIi0tLS0tLVhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLS1YWFhYWC0tXl5eXi1PXCJdLCBcIjhfOVwiOiBbXCJALV5eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0jWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVgtLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0jWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1eXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCI2XzRcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLSMtLV5eXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tIy0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS1YWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiMF8xM1wiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzZcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLS0tJi0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tKi0tWFhYWFhYLU9cIl0sIFwiMThfNFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLS0tLVgtLS0tWC0tLVhYLS1cIiwgXCItLS0tLVhYLS0tWFgtLS1YWC0tXCIsIFwiLS0tLVhYWC0tWFhYLS0tWC0tLVwiLCBcIi0tLS1YIyotLVgjKi0tLVgtLS1cIiwgXCItLS0tWFhYLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS1YWC0tLVhYLS0tWC0tLVwiLCBcIi0tLS0tLVgtLS0tWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIyXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0jWFhYWC0tXCIsIFwiLS0tLS1YWFhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tWFhYWFgtLS0tKi0tLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjJfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tJi0tJi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSotLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCIwXzJcIjogW1wiQC0tLS0tIy0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tJi0tJi0tJi0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0tLS0tLS0tLU9cIl0sIFwiMF8zXCI6IFtcIkAtLS0tLSMtLS1YLS0tLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0vLy0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLSYtLSYtLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tLS0tLS1PXCJdLCBcIjJfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLSotLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0tLS0tT1wiXSwgXCIyXzE3XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFgtLSNYWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tWFhYWC0tLVwiLCBcIi0tLSotLS0tLS0tLS0qLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE4XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLSYtLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNF83XCI6IFtcIkAtLS0tLVhYWFhYWC0tXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0vLy0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0mLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS0jLS1cIiwgXCItLS0tLS1YWFhYWFgtLV5eXi1PXCJdLCBcIjBfMTJcIjogW1wiQC0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS1YWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLSYtLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLU9cIl0sIFwiNl81XCI6IFtcIkAtLS0tLVhYWC0tXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0mLS0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWFgtLV5eXl5eXi1PXCJdLCBcIjZfMVwiOiBbXCJALS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tJi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS1eXl4tT1wiXSwgXCIwXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0mLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tXl4tT1wiXSwgXCIyXzEzXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tIy0tWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjJfNVwiOiBbXCJALS0tLS0tLSMtLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tWC0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tJi0tT1wiXSwgXCIwXzdcIjogW1wiQC0tLS0tIy0tLVgtLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YWFhYLS1cIiwgXCItLS8vLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS1YWFhYLU9cIl0sIFwiMF82XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS1YLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tJi1PXCJdLCBcIjJfNFwiOiBbXCJALS0tLS0tLSMtLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLVgtLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCIyXzEyXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSNYWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWC0tLVwiLCBcIi0tLS0tLS0tIy0tLS0qLS0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjRfMlwiOiBbXCJALS0tLS0tLSMtLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLSYtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0qLS0tLS0jLS0tLS0tXl4tT1wiXSwgXCIwXzE3XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfMFwiOiBbXCJALS0tLS0tLS0tLS0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tJi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tLS1eXl4tT1wiXSwgXCI2XzJcIjogW1wiQC0tLS0tLS0tLS1YLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tXl5eLU9cIl0sIFwiMF8xNVwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS8tLVwiLCBcIi0tKi0tLS0tKi0tLS0tLS1cXFxcLU9cIl0sIFwiMl8xMFwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLS0tLVwiLCBcIi0tLS0tIy0tWFhYLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIyXzZcIjogW1wiQC0tLS0tLS0jLS0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLSMtLS0tLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tKi0tLS0tIy0tLSYtLVhYLU9cIl0sIFwiMF80XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tJi0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tLS1PXCJdLCBcIjBfNVwiOiBbXCJALS0tLS0jLS0tWC0tWC0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVgtLS8tLVwiLCBcIi0tLy8tLVhYLS1YLS1YLS1cXFxcLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tIy0tLSYtLSYtLS0tT1wiXSwgXCIyXzdcIjogW1wiQC0tLS0tLS0jLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLSYtLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tKi0tLS0tIy0tLVhYWFhYLU9cIl0sIFwiMl8xMVwiOiBbXCJALVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0jLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tKlhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLSYtLS0tJi0tLS0tT1wiXSwgXCI0XzFcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0qLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tLS0tLU9cIl0sIFwiMF8xNFwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI2XzNcIjogW1wiQC0tLS0tLS0tLVgtLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS0tLS1YLS1cIiwgXCItLS0tLSMtLVgjJi0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVhYLS0tLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSMtLVwiLCBcIi0tKi0tLS0tLS1YLS0tXl5eLU9cIl0sIFwiMV8yXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS8vXFxcXC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1cXFxcXFxcXC8tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLSYtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjNfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tLS0tLS0tT1wiXSwgXCI1XzZcIjogW1wiQC0tLS0tWFhYWFgtLV5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYLS0tLS0qLS1cIiwgXCItLS8vLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYLS0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYLS1eXl5eLU9cIl0sIFwiNl8xMlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWC0tWFgtLVhYKiNYWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWComWFgqI1hYLS1YWCojLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI3XzRcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSotLS0tLSotLS1cIiwgXCItLS0tLSMtLV5eXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tJi0tLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS1YWFhYLS1cIiwgXCItLVxcXFwvLy0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiN181XCI6IFtcIkAtLS0tLVhYWC0tXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0vLy0tWFhYLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLS0tLVhYWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0mLS0tWFhYLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWFgtLV5eXl5eXi1PXCJdLCBcIjZfMTNcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNV83XCI6IFtcIkAtLS0tLVhYWFhYWC0tXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0vLy0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS0tLSotLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLSMtLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0mLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS0jLS1cIiwgXCItLS0tLS1YWFhYWFgtLV5eXi1PXCJdLCBcIjNfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCIxXzNcIjogW1wiQC0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLSMtLSYtLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tWC0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tJi0tLU9cIl0sIFwiNF8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tI1hYWFgtLS0tLSNYWFgtLVwiLCBcIi0tLS1YWFhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLSotLS0tKi0tLS0qLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzE0XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSNYWC0tXCIsIFwiLS0tLS0mLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjFfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tJi0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0tLS0tT1wiXSwgXCIzXzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tKi0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiNV81XCI6IFtcIkAtLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tJi0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0jLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLV5eXi0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tKi0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLSotLS0tLV5eXi0tWFhYWC1PXCJdLCBcIjlfOFwiOiBbXCJALV5eXl5eXl4tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYWFhYLS1cIiwgXCItLS0tLVhYLS0tLVhYWFhYWC0tXCIsIFwiLS0tLVhYWC0tLS0tLSNYWFgtLVwiLCBcIi0tLS1YIyotLS0tLS0tWFhYLS1cIiwgXCItLS0tWFhYLS0tLS0tLS0qLS0tXCIsIFwiLS0tLS1YWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS1eXl5eXl5eLS1YWFhYWFgtT1wiXSwgXCI2XzExXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0qLS0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjdfN1wiOiBbXCJALS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0qLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS1eXl4tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSYtLS0tLS0jLS0tIy0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtT1wiXSwgXCI3XzZcIjogW1wiQC0tLS1YWFhYWFgtLV5eXl4tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tLVhYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YIy0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tWFgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS1eXl5eLU9cIl0sIFwiNl8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1eLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tXl4tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV4tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI1XzRcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLSMtLV5eXi0tLS0mLS0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS1YWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiM18yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS1eLS1PXCJdLCBcIjFfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tJi0tJi0tJi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCI0XzE1XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLSNYWFhYLS0tLS0jWC0tXCIsIFwiLS0tLS0tWFhYWC0tLS0tLVgtLVwiLCBcIi0tLS0tLS0qLS0tLSotLS0tLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMTFcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMV80XCI6IFtcIkAtLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLSotLS0tLS0tLSYtLS1YWC1PXCJdLCBcIjNfNlwiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0mLS0mLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCI1XzBcIjogW1wiQC0tLS0tLS0tLS0tLS1eLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tKi0tLS0tKi0tLS0tXi1eLU9cIl0sIFwiN18yXCI6IFtcIkAtLS0tLS0tIy0tLV5eXl5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0jLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tJi0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS1eXl5eXi1PXCJdLCBcIjdfM1wiOiBbXCJALS0tLS0tLS0tWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLVgtLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tWC0tLVwiLCBcIi0tLS0tIy0tWCMmLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tWC0tLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0jLS0tXCIsIFwiLS0qLS0tLS0tLVgtLV5eXl4tT1wiXSwgXCI4XzEwXCI6IFtcIkAtXl5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLSpYLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tKlgtLS0tLS0tIy0tLS0qLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS0tWFhYWFhYWFhYLS1cIiwgXCItLV5eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjVfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tXl4tT1wiXSwgXCIzXzdcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS0tLS1cIiwgXCItLS0tLSMtLSMtLVhYLS0mLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tKi0tWFhYWFhYLU9cIl0sIFwiMV81XCI6IFtcIkAtLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0mLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLSotLS0tLS0tLSYtLVhYWC1PXCJdLCBcIjRfMTBcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSNYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNF8xMlwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tJi0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLS0tLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzdcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLSMtLSYtLVhYWC0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tLS0tWFhYWFhYLU9cIl0sIFwiM181XCI6IFtcIkAtLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0jLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLSotLS0tLSotLSYtLVhYWC1PXCJdLCBcIjVfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLV4tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0jLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCI3XzFcIjogW1wiQC0tLS0tLS0tLS1YLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tLS0tLU9cIl0sIFwiN18wXCI6IFtcIkAtLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tIy0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLS0tLS1PXCJdLCBcIjVfMlwiOiBbXCJALS0tLS0tLSMtLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLSYtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLS0jLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tLS0tLS0tT1wiXSwgXCIzXzRcIjogW1wiQC0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLSMtLSMtLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tKi0tLS0tKi0tJi0tLVhYLU9cIl0sIFwiMV82XCI6IFtcIkAtLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0jLS0mLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLSotLS0tLS0tLS1YWFhYWC1PXCJdLCBcIjRfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0jWFhYWC0tI1hYLS1cIiwgXCItLSMtLS0tLVhYWFgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0tLSotLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IEdhbWVTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVzL0dhbWVTY2VuZVwiKTtcbmNvbnN0IFBsYXllckxvc3RTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVzL1BsYXllckxvc3RTY2VuZVwiKTtcbmNvbnN0IFBsYXllcldvblNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvUGxheWVyV29uU2NlbmVcIik7XG5jb25zdCBTZWxlY3Rpb25TY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVzL1NlbGVjdGlvblNjZW5lXCIpO1xuY29uc3QgU3RhcnRTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVzL1N0YXJ0U2NlbmVcIik7XG5jb25zdCBlbmdpbmUgPSBuZXcgV29ybGRFbmdpbmVfMS5FbmdpbmUoKTtcbmNvbnN0IHN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZV8xLlN0YXJ0U2NlbmUoKTtcbmNvbnN0IHNlbGVjdGlvblNjZW5lID0gbmV3IFNlbGVjdGlvblNjZW5lXzEuU2VsZWN0aW9uU2NlbmUoKTtcbmNvbnN0IGdhbWVTY2VuZSA9IG5ldyBHYW1lU2NlbmVfMS5HYW1lU2NlbmUoKTtcbmNvbnN0IHBsYXllckxvc3RTY2VuZSA9IG5ldyBQbGF5ZXJMb3N0U2NlbmVfMS5QbGF5ZXJMb3N0U2NlbmUoKTtcbmNvbnN0IHBsYXllcldvblNjZW5lID0gbmV3IFBsYXllcldvblNjZW5lXzEuUGxheWVyV29uU2NlbmUoKTtcbmNvbnN0IHN0YXJ0SW5kZXggPSBlbmdpbmUuYWRkU2NlbmUoc3RhcnRTY2VuZSk7XG5jb25zdCBzZWxlY3Rpb25JbmRleCA9IGVuZ2luZS5hZGRTY2VuZShzZWxlY3Rpb25TY2VuZSk7XG5jb25zdCBnYW1lSW5kZXggPSBlbmdpbmUuYWRkU2NlbmUoZ2FtZVNjZW5lKTtcbmNvbnN0IGxvc3RJbmRleCA9IGVuZ2luZS5hZGRTY2VuZShwbGF5ZXJMb3N0U2NlbmUpO1xuY29uc3Qgd29uSW5kZXggPSBlbmdpbmUuYWRkU2NlbmUocGxheWVyV29uU2NlbmUpO1xuc3RhcnRTY2VuZS5zY2VuZUluZGV4ID0gc2VsZWN0aW9uSW5kZXg7XG5zZWxlY3Rpb25TY2VuZS5zY2VuZUluZGV4ID0gZ2FtZUluZGV4O1xuZ2FtZVNjZW5lLnBsYXllckxvc3RJbmRleCA9IGxvc3RJbmRleDtcbmdhbWVTY2VuZS5wbGF5ZXJXb25JbmRleCA9IHdvbkluZGV4O1xuZ2FtZVNjZW5lLnNlbGZJbmRleCA9IGdhbWVJbmRleDtcbmdhbWVTY2VuZS5tYWluTWVudUluZGV4ID0gc3RhcnRJbmRleDtcbnBsYXllckxvc3RTY2VuZS5zY2VuZUluZGV4ID0gc3RhcnRJbmRleDtcbnBsYXllcldvblNjZW5lLnNjZW5lSW5kZXggPSBzdGFydEluZGV4O1xuZW5naW5lLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=