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
const Position2d = WorldEngine_1.CommonComponents.Position2d;
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
                this.addComponent(id, new Position2d(xPos, yPos));
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
                    this.addComponent(id, new Position2d(x, y));
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
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class EnemyAISystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position2d, Render_1.Render, Collider_1.Collider]);
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
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class EnemyCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Enemy_1.Enemy]);
    }
    update(engine, entities) {
        // const playerID = this.ecs.blackBoard.get('player id');
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position2d);
        for (let id of entities) {
            const pos = this.ecs.getComponents(id).get(Position2d);
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
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class PlayerCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Collider_1.Collider]);
    }
    update(engine, entities) {
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position2d);
        for (let id of entities) {
            const pos = this.ecs.getComponents(id).get(Position2d);
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
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class PlayerSystem extends WorldEngine_1.System {
    constructor() {
        super();
        this.componentsRequired = new Set([Position2d, Render_1.Render, Player_1.Player]);
        this.timeSinceLastMove = 5;
    }
    update(engine, entities) {
        this.timeSinceLastMove += engine.delta;
        if (this.timeSinceLastMove < 0.08) {
            return;
        }
        this.timeSinceLastMove = 0;
        let playerID = entities.values().next().value;
        let pos = this.ecs.getComponents(playerID).get(Position2d);
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
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
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
            const playerPos = this.ecs.getComponents(playerID).get(Position2d);
            const portalPos = this.ecs.getComponents(id).get(Position2d);
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
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class RenderSystem extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position2d, Render_1.Render]);
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
            const pos = this.ecs.getComponents(entity).get(Position2d);
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
const Switch_1 = __webpack_require__(/*! ../Components/Switch */ "./src/Components/Switch.ts");
const WorldEngine_1 = __webpack_require__(/*! ../WorldEngine */ "./src/WorldEngine/index.ts");
const Position2d = WorldEngine_1.CommonComponents.Position2d;
class SwitchCollision extends WorldEngine_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Switch_1.Switch]);
    }
    update(engine, entities) {
        const playerID = this.ecs.getBB('player id');
        const playerPos = this.ecs.getComponents(playerID).get(Position2d);
        for (let id of entities) {
            const switchPos = this.ecs.getComponents(id).get(Position2d);
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
exports.CommonComponents = exports.Key = exports.ECSScene = exports.Scene = exports.System = exports.Component = exports.Engine = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO0FBQzdELHNCQUFzQixtQkFBTyxDQUFDLGlEQUFlO0FBQzdDLG9CQUFvQixtQkFBTyxDQUFDLHFEQUFvQjtBQUNoRCwwQkFBMEIsbUJBQU8sQ0FBQyxpRUFBMEI7QUFDNUQseUJBQXlCLG1CQUFPLENBQUMsK0RBQXlCO0FBQzFELHlCQUF5QixtQkFBTyxDQUFDLCtEQUF5QjtBQUMxRCxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL0NvbGxpZGVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL0VuZW15LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL01vdmFibGUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUGxheWVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1BvcnRhbC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9SZW5kZXIudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvU2VsZWN0aW9uU2NlbmUvTWVudVRleHQudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvU3dpdGNoLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvR2FtZVNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyTG9zdFNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyV29uU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9TZWxlY3Rpb25TY2VuZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1N0YXJ0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvRW5lbXlBSVN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9FbmVteUNvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9QbGF5ZXJDb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUGxheWVyU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1BvcnRhbFN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9SZW5kZXJTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvUmVuZGVyTWVudVRleHQudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvVXBkYXRlU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvU3dpdGNoQ29sbGlzaW9uLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9pbmRleC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0NvbXBvbmVudHMvUG9zaXRpb24yZC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvV29ybGRFbmdpbmUvc3JjL0VDU1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvRW5naW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvS2V5LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Xb3JsZEVuZ2luZS9zcmMvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1dvcmxkRW5naW5lL3NyYy9TeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL2xldmVscy50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db2xsaWRlciA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Db2xsaWRlciA9IENvbGxpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVuZW15ID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZS9cIik7XG5jbGFzcyBFbmVteSBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLkVuZW15ID0gRW5lbXk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTW92YWJsZSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgTW92YWJsZSBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLk1vdmFibGUgPSBNb3ZhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllciA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUGxheWVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyID0gUGxheWVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvcnRhbCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUG9ydGFsIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlciA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgUmVuZGVyIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlciA9IFJlbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZW51VGV4dCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vLi4vV29ybGRFbmdpbmVcIik7XG5jbGFzcyBNZW51VGV4dCBleHRlbmRzIFdvcmxkRW5naW5lXzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvcmRlciwgc2VsZWN0ZWQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5vcmRlciA9IG9yZGVyO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgfVxufVxuZXhwb3J0cy5NZW51VGV4dCA9IE1lbnVUZXh0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN3aXRjaCA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvXCIpO1xuY2xhc3MgU3dpdGNoIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuU3dpdGNoID0gU3dpdGNoO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IFJlbmRlcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUmVuZGVyXCIpO1xuY29uc3QgUGxheWVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9QbGF5ZXJcIik7XG5jb25zdCBsZXZlbHNfMSA9IHJlcXVpcmUoXCIuLi9sZXZlbHNcIik7XG5jb25zdCBSZW5kZXJTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1JlbmRlclN5c3RlbVwiKTtcbmNvbnN0IFBvcnRhbF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9ydGFsXCIpO1xuY29uc3QgUG9ydGFsU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vU3lzdGVtcy9Qb3J0YWxTeXN0ZW1cIik7XG5jb25zdCBQbGF5ZXJTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1BsYXllclN5c3RlbVwiKTtcbmNvbnN0IEVuZW15QUlTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL0VuZW15QUlTeXN0ZW1cIik7XG5jb25zdCBNb3ZhYmxlXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Nb3ZhYmxlXCIpO1xuY29uc3QgU3dpdGNoXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Td2l0Y2hcIik7XG5jb25zdCBTd2l0Y2hDb2xsaXNpb25fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1N3aXRjaENvbGxpc2lvblwiKTtcbmNvbnN0IEVuZW15XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9FbmVteVwiKTtcbmNvbnN0IEVuZW15Q29sbGlzaW9uXzEgPSByZXF1aXJlKFwiLi4vU3lzdGVtcy9FbmVteUNvbGxpc2lvblwiKTtcbmNvbnN0IFBsYXllckNvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUGxheWVyQ29sbGlzaW9uXCIpO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IFBvc2l0aW9uMmQgPSBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZDtcbmNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFdvcmxkRW5naW5lXzEuRUNTU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBsYXllcldvbkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5wbGF5ZXJMb3N0SW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNlbGZJbmRleCA9IDA7XG4gICAgICAgIHRoaXMubWFpbk1lbnVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2V0QkIoJ2dhbWUgb3ZlcicsIDApO1xuICAgICAgICB0aGlzLnNldEJCKCdyZXN0YXJ0JywgZmFsc2UpO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkge1xuICAgICAgICBjb25zdCB4TW9kID0gMjA7XG4gICAgICAgIGNvbnN0IHlNb2QgPSAyMDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IDg7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSA3O1xuICAgICAgICBsZXQgeE1pbiA9IDEwMDA7XG4gICAgICAgIGxldCB4TWF4ID0gMDtcbiAgICAgICAgbGV0IHlNaW4gPSAxMDAwO1xuICAgICAgICBsZXQgeU1heCA9IDA7XG4gICAgICAgIGxldCBzd2l0Y2hDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGx2bEtleSA9IGVuZ2luZS5nZXRCQignbGV2ZWwnKTtcbiAgICAgICAgY29uc3QgbHZsID0gbGV2ZWxzXzEuTEVWRUxTW2x2bEtleV07XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbHZsLmxlbmd0aDsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGx2bFt5XS5sZW5ndGg7ICsreCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBsdmxbeV1beF07XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEVudGl0eSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHhQb3MgPSBvZmZzZXRYICsgeDtcbiAgICAgICAgICAgICAgICBjb25zdCB5UG9zID0gb2Zmc2V0WSArIHk7XG4gICAgICAgICAgICAgICAgeE1pbiA9IE1hdGgubWluKHhNaW4sIHhQb3MpO1xuICAgICAgICAgICAgICAgIHhNYXggPSBNYXRoLm1heCh4TWF4LCB4UG9zKTtcbiAgICAgICAgICAgICAgICB5TWluID0gTWF0aC5taW4oeU1pbiwgeVBvcyk7XG4gICAgICAgICAgICAgICAgeU1heCA9IE1hdGgubWF4KHlNYXgsIHlQb3MpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09ICctJykge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBSZW5kZXJfMS5SZW5kZXIoY2hhcikpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUG9zaXRpb24yZCh4UG9zLCB5UG9zKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT0gJ08nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUG9ydGFsXzEuUG9ydGFsKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJCKCdwb3J0YWwgaWQnLCBpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJ0AnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUGxheWVyXzEuUGxheWVyKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IE1vdmFibGVfMS5Nb3ZhYmxlKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJCKCdwbGF5ZXIgaWQnLCBpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgU3dpdGNoXzEuU3dpdGNoKCkpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hDb3VudCArPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IE1vdmFibGVfMS5Nb3ZhYmxlKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IEVuZW15XzEuRW5lbXkoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJ14nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgRW5lbXlfMS5FbmVteSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnWCcgfHwgY2hhciA9PSAnXFxcXCcgfHwgY2hhciA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb2xsaWRlcl8xLkNvbGxpZGVyKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh5TWluKTtcbiAgICAgICAgZm9yIChsZXQgeSA9IDM7IHkgPCBlbmdpbmUuaGVpZ2h0IC8geU1vZCAtIDE7ICsreSkge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDE7IHggPCBlbmdpbmUud2lkdGggLyB4TW9kIC0gMTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPCB4TWluIHx8IHggPiB4TWF4IHx8IHkgPCB5TWluIHx8IHkgPiB5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBSZW5kZXJfMS5SZW5kZXIoJ1gnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUG9zaXRpb24yZCh4LCB5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09IHhNaW4gLSAxIHx8IHkgPT0geU1pbiAtIDEgfHwgeCA9PSB4TWF4ICsgMSB8fCB5ID09IHlNYXggKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbGxpZGVyXzEuQ29sbGlkZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRCQignc3dpdGNoIGNvdW50Jywgc3dpdGNoQ291bnQpO1xuICAgICAgICB0aGlzLnNldEJCKCdvZmZzZXQgeCcsIG9mZnNldFgpO1xuICAgICAgICB0aGlzLnNldEJCKCdvZmZzZXQgeScsIG9mZnNldFkpO1xuICAgICAgICB0aGlzLnNldEJCKCd4IG1vZCcsIHhNb2QpO1xuICAgICAgICB0aGlzLnNldEJCKCd5IG1vZCcsIHlNb2QpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgUGxheWVyU3lzdGVtXzEuUGxheWVyU3lzdGVtKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgxMCwgbmV3IFBsYXllckNvbGxpc2lvbl8xLlBsYXllckNvbGxpc2lvbigpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMjAsIG5ldyBFbmVteUFJU3lzdGVtXzEuRW5lbXlBSVN5c3RlbSgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oNDAsIG5ldyBFbmVteUNvbGxpc2lvbl8xLkVuZW15Q29sbGlzaW9uKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg1MCwgbmV3IFN3aXRjaENvbGxpc2lvbl8xLlN3aXRjaENvbGxpc2lvbigpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oOTAsIG5ldyBQb3J0YWxTeXN0ZW1fMS5Qb3J0YWxTeXN0ZW0oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwMCwgbmV3IFJlbmRlclN5c3RlbV8xLlJlbmRlclN5c3RlbSgpKTtcbiAgICB9XG4gICAgb25FeGl0KGVuZ2luZSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIGN1c3RvbVVwZGF0ZShlbmdpbmUpIHtcbiAgICAgICAgY29uc3QgZ2FtZU92ZXIgPSB0aGlzLmdldEJCKCdnYW1lIG92ZXInKTtcbiAgICAgICAgaWYgKGdhbWVPdmVyID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJMb3N0SW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZ2FtZU92ZXIgPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyV29uSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5naW5lLmtleURvd24uaGFzKFdvcmxkRW5naW5lXzEuS2V5LlIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxmSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW5naW5lLmtleURvd24uaGFzKFdvcmxkRW5naW5lXzEuS2V5LlEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluTWVudUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWVTY2VuZSA9IEdhbWVTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJMb3N0U2NlbmUgPSB2b2lkIDA7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY2xhc3MgUGxheWVyTG9zdFNjZW5lIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkVudGVyKGVuZ2luZSkge1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FeGl0KGVuZ2luZSkgeyB9XG4gICAgdXBkYXRlKGVuZ2luZSkge1xuICAgICAgICB0aGlzLnRpbWVyICs9IGVuZ2luZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgPiAyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZW5naW5lLmN0eC5mb250ID0gJzQwcHggQXJpYWwnO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnWW91IExvc3QhIDovJywgZW5naW5lLndpZHRoIC8gMy41LCBlbmdpbmUuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBsYXllckxvc3RTY2VuZSA9IFBsYXllckxvc3RTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJXb25TY2VuZSA9IHZvaWQgMDtcbmNvbnN0IFNjZW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmUvc3JjL1NjZW5lXCIpO1xuY2xhc3MgUGxheWVyV29uU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkV4aXQoZW5naW5lKSB7IH1cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIHRoaXMudGltZXIgKz0gZW5naW5lLmRlbHRhO1xuICAgICAgICBpZiAodGhpcy50aW1lciA+IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICdncmVlbic7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdZb3UgV29uISBOaWNlIScsIGVuZ2luZS53aWR0aCAvIDMuNSwgZW5naW5lLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXJXb25TY2VuZSA9IFBsYXllcldvblNjZW5lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlbGVjdGlvblNjZW5lID0gdm9pZCAwO1xuY29uc3QgbGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vbGV2ZWxzXCIpO1xuY29uc3QgTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0XCIpO1xuY29uc3QgVXBkYXRlU2VsZWN0ZWRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1VwZGF0ZVNlbGVjdGVkXCIpO1xuY29uc3QgUmVuZGVyTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1JlbmRlck1lbnVUZXh0XCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNsYXNzIFNlbGVjdGlvblNjZW5lIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBsZXZlbHNfMS5MRVZFTFMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvcnRlZExldmVscy5zb3J0KCk7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zb3J0ZWRMZXZlbHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRFbnRpdHkoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gaSA9PSAwO1xuICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBNZW51VGV4dF8xLk1lbnVUZXh0KHRoaXMuc29ydGVkTGV2ZWxzW2ldLCBpLCBzZWxlY3RlZCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QkIoJ3NlbGVjdGVkJywgMCk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDAsIG5ldyBVcGRhdGVTZWxlY3RlZF8xLlVwZGF0ZVNlbGVjdGVkKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgxMCwgbmV3IFJlbmRlck1lbnVUZXh0XzEuUmVuZGVyTWVudVRleHRTeXN0ZW0oKSk7XG4gICAgfVxuICAgIG9uRXhpdChlbmdpbmUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICBjdXN0b21VcGRhdGUoZW5naW5lKSB7XG4gICAgICAgIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuRU5URVIpKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuZ2V0QkIoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBlbmdpbmUuc2V0QkIoJ2xldmVsJywgdGhpcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkKS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnRzLlNlbGVjdGlvblNjZW5lID0gU2VsZWN0aW9uU2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RhcnRTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lL3NyYy9TY2VuZVwiKTtcbmNsYXNzIFN0YXJ0U2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZW5naW5lKSB7IH1cbiAgICBvbkV4aXQoZW5naW5lKSB7IH1cbiAgICB1cGRhdGUoZW5naW5lKSB7XG4gICAgICAgIGlmIChlbmdpbmUua2V5RG93bi5oYXMoV29ybGRFbmdpbmVfMS5LZXkuRU5URVIpKSB7XG4gICAgICAgICAgICBlbmdpbmUua2V5RG93bi5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZm9udCA9ICc0MHB4IEFyaWFsJztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ0R1bmdlb25HcmFtcycsIDIyMCwgMTAwKTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZm9udCA9ICcyMHB4IEFyaWFsJztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ1ByZXNzIEVudGVyIHRvIHN0YXJ0JywgMjc1LCAxNTApO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJyYgZ2l2ZXMgeW91IHN0YW1pbmEnLCA0MCwgMjAwKTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ0NvbGxlY3QgYWxsICogdG8gb3BlbiB0aGUgcG9ydGFsLicsIDQwLCAyMjIpO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnU3RlcCB0aHJvdWdoIHRoZSBwb3J0YWwgTyB0byB3aW4hJywgNDAsIDI0NCk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdCdXQgbWFrZSBzdXJlIHRvIGF2b2lkIHRoZSBlbmVtaWVzICMgYW5kIHRyYXBzIF4nLCA0MCwgMjY2KTtcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQoJ1dBU0QgdG8gbW92ZScsIDQwLCAzNTApO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnUiB0byByZXN0YXJ0JywgNDAsIDM3NSk7XG4gICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KCdRIHRvIHF1aXQnLCA0MCwgNDAwKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuU3RhcnRTY2VuZSA9IFN0YXJ0U2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRW5lbXlBSVN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IENvbGxpZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Db2xsaWRlclwiKTtcbmNvbnN0IFJlbmRlcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUmVuZGVyXCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IFBvc2l0aW9uMmQgPSBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZDtcbmNsYXNzIEVuZW15QUlTeXN0ZW0gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9zaXRpb24yZCwgUmVuZGVyXzEuUmVuZGVyLCBDb2xsaWRlcl8xLkNvbGxpZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIC8vIGNvbnN0IHBsYXllclBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbik7XG4gICAgICAgIC8vIGxldCBjb2xsaXNpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICAvLyBmb3IobGV0IGlkIG9mIGVudGl0aWVzKSB7XG4gICAgICAgIC8vICAgY29uc3QgYmxvY2tQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUG9zaXRpb24pO1xuICAgICAgICAvLyAgIGlmKHBsYXllclBvcy5lcXVhbHMoYmxvY2tQb3MpKSB7XG4gICAgICAgIC8vICAgICBwbGF5ZXJQb3MueCA9IHBsYXllclBvcy5vbGRYO1xuICAgICAgICAvLyAgICAgcGxheWVyUG9zLnkgPSBwbGF5ZXJQb3Mub2xkWTtcbiAgICAgICAgLy8gICAgIGNvbGxpc2lvbkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAoIWNvbGxpc2lvbkZvdW5kKSB7XG4gICAgICAgIC8vICAgcGxheWVyUG9zLm9sZFggPSBwbGF5ZXJQb3MueDtcbiAgICAgICAgLy8gICBwbGF5ZXJQb3Mub2xkWSA9IHBsYXllclBvcy55O1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuZXhwb3J0cy5FbmVteUFJU3lzdGVtID0gRW5lbXlBSVN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteUNvbGxpc2lvbiA9IHZvaWQgMDtcbmNvbnN0IEVuZW15XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9FbmVteVwiKTtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBQb3NpdGlvbjJkID0gV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQ7XG5jbGFzcyBFbmVteUNvbGxpc2lvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtFbmVteV8xLkVuZW15XSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIC8vIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuYmxhY2tCb2FyZC5nZXQoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJJRCA9IHRoaXMuZWNzLmdldEJCKCdwbGF5ZXIgaWQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhwbGF5ZXJJRCkuZ2V0KFBvc2l0aW9uMmQpO1xuICAgICAgICBmb3IgKGxldCBpZCBvZiBlbnRpdGllcykge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFBvc2l0aW9uMmQpO1xuICAgICAgICAgICAgaWYgKHBvcy5lcXVhbHMocGxheWVyUG9zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdnYW1lIG92ZXInLCAtMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkVuZW15Q29sbGlzaW9uID0gRW5lbXlDb2xsaXNpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyQ29sbGlzaW9uID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IFBvc2l0aW9uMmQgPSBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZDtcbmNsYXNzIFBsYXllckNvbGxpc2lvbiBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtDb2xsaWRlcl8xLkNvbGxpZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuZ2V0QkIoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgIGZvciAobGV0IGlkIG9mIGVudGl0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgICAgICBpZiAocG9zLmVxdWFscyhwbGF5ZXJQb3MpKSB7XG4gICAgICAgICAgICAgICAgcGxheWVyUG9zLnggPSBwbGF5ZXJQb3Mub2xkWDtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3MueSA9IHBsYXllclBvcy5vbGRZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsYXllclBvcy51cGRhdGVPbGQoKTtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllckNvbGxpc2lvbiA9IFBsYXllckNvbGxpc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBQbGF5ZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1BsYXllclwiKTtcbmNvbnN0IFJlbmRlcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUmVuZGVyXCIpO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IFBvc2l0aW9uMmQgPSBXb3JsZEVuZ2luZV8xLkNvbW1vbkNvbXBvbmVudHMuUG9zaXRpb24yZDtcbmNsYXNzIFBsYXllclN5c3RlbSBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtQb3NpdGlvbjJkLCBSZW5kZXJfMS5SZW5kZXIsIFBsYXllcl8xLlBsYXllcl0pO1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlID0gNTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0TW92ZSArPSBlbmdpbmUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlIDwgMC4wOCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPSAwO1xuICAgICAgICBsZXQgcGxheWVySUQgPSBlbnRpdGllcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgIGNvbnN0IHggPSBwb3MueDtcbiAgICAgICAgY29uc3QgeSA9IHBvcy55O1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZW5naW5lLmtleURvd24pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5BOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5TOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuRE9XTjpcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBXb3JsZEVuZ2luZV8xLktleS5EOlxuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgV29ybGRFbmdpbmVfMS5LZXkuVzpcbiAgICAgICAgICAgICAgICBjYXNlIFdvcmxkRW5naW5lXzEuS2V5LlVQOlxuICAgICAgICAgICAgICAgICAgICBwb3MueSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGluIHRoZSBkZWZhdWx0IGNhc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyU3lzdGVtID0gUGxheWVyU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvcnRhbFN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IFBvcnRhbF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9ydGFsXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgUG9zaXRpb24yZCA9IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkO1xuY2xhc3MgUG9ydGFsU3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1BvcnRhbF8xLlBvcnRhbCwgUmVuZGVyXzEuUmVuZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IFtpZF0gPSBlbnRpdGllczsgLy8gdGhlcmUgY2FuIG9ubHkgYmUgb25lIHBvcnRhbFxuICAgICAgICBpZiAodGhpcy5lY3MuZ2V0QkIoJ3N3aXRjaCBjb3VudCcpID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChSZW5kZXJfMS5SZW5kZXIpLmNoYXJhY3RlciA9ICdPJztcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuZ2V0QkIoJ3BsYXllciBpZCcpO1xuICAgICAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhwbGF5ZXJJRCkuZ2V0KFBvc2l0aW9uMmQpO1xuICAgICAgICAgICAgY29uc3QgcG9ydGFsUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFBvc2l0aW9uMmQpO1xuICAgICAgICAgICAgaWYgKHBsYXllclBvcy5lcXVhbHMocG9ydGFsUG9zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdnYW1lIG92ZXInLCAxKTsgLy8gcGxheWVyIHdvblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFJlbmRlcl8xLlJlbmRlcikuY2hhcmFjdGVyID0gJ28nO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Qb3J0YWxTeXN0ZW0gPSBQb3J0YWxTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVuZGVyU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBXb3JsZEVuZ2luZV8xID0gcmVxdWlyZShcIi4uL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgUG9zaXRpb24yZCA9IFdvcmxkRW5naW5lXzEuQ29tbW9uQ29tcG9uZW50cy5Qb3NpdGlvbjJkO1xuY2xhc3MgUmVuZGVyU3lzdGVtIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1Bvc2l0aW9uMmQsIFJlbmRlcl8xLlJlbmRlcl0pO1xuICAgICAgICB0aGlzLmNoYXJUb0NvbG9yID0ge1xuICAgICAgICAgICAgJ0AnOiAnd2hpdGUnLFxuICAgICAgICAgICAgJy0nOiAnI2Q5ZDFkMCcsXG4gICAgICAgICAgICAnWCc6ICcjNjM2MzYzJyxcbiAgICAgICAgICAgICcqJzogJyMwY2NlZjAnLFxuICAgICAgICAgICAgJ1xcXFwnOiAnI2MzMDBkMScsXG4gICAgICAgICAgICAnLyc6ICcjYzMwMGQxJyxcbiAgICAgICAgICAgICdvJzogJyM0MTRkNDInLFxuICAgICAgICAgICAgJ08nOiAnIzE5ZjAwYScsXG4gICAgICAgICAgICAnIyc6ICdyZWQnLFxuICAgICAgICAgICAgJ14nOiAnI2YwY2QwYScsXG4gICAgICAgICAgICAnJic6ICcjMjU5YzJiJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKGVuZ2luZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgeE1vZCA9IHRoaXMuZWNzLmdldEJCKCd4IG1vZCcpO1xuICAgICAgICBjb25zdCB5TW9kID0gdGhpcy5lY3MuZ2V0QkIoJ3kgbW9kJyk7XG4gICAgICAgIGVuZ2luZS5jdHguZm9udCA9ICcyMHB4IEFyaWFsJztcbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICAvLyBnZXQgY29tcG9uZW50c1xuICAgICAgICAgICAgY29uc3QgcmVuZGVyID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhlbnRpdHkpLmdldChSZW5kZXJfMS5SZW5kZXIpO1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhlbnRpdHkpLmdldChQb3NpdGlvbjJkKTtcbiAgICAgICAgICAgIC8vIHJlbmRlclxuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNoYXJUb0NvbG9yW3JlbmRlci5jaGFyYWN0ZXJdO1xuICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dChyZW5kZXIuY2hhcmFjdGVyLCBwb3MueCAqIHhNb2QsIHBvcy55ICogeU1vZCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlJlbmRlclN5c3RlbSA9IFJlbmRlclN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJNZW51VGV4dFN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBNZW51VGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvU2VsZWN0aW9uU2NlbmUvTWVudVRleHRcIik7XG5jbGFzcyBSZW5kZXJNZW51VGV4dFN5c3RlbSBleHRlbmRzIFdvcmxkRW5naW5lXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtNZW51VGV4dF8xLk1lbnVUZXh0XSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IG1pblkgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFkgPSBlbmdpbmUuaGVpZ2h0IC0gNDA7XG4gICAgICAgIGNvbnN0IHlNb2QgPSAyMDtcbiAgICAgICAgY29uc3QgbWF4T3JkZXIgPSAobWF4WSAtIG1pblkpIC8geU1vZDtcbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gXCIxNXB4IEFyaWFsXCI7XG4gICAgICAgIGZvciAobGV0IGVudGl0eSBvZiBlbnRpdGllcy52YWx1ZXMoKSkge1xuICAgICAgICAgICAgY29uc3QgbSA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoZW50aXR5KS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCk7XG4gICAgICAgICAgICBsZXQgeCA9IDIwO1xuICAgICAgICAgICAgbGV0IG8gPSBtLm9yZGVyO1xuICAgICAgICAgICAgd2hpbGUgKG8gPiBtYXhPcmRlcikge1xuICAgICAgICAgICAgICAgIG8gLT0gbWF4T3JkZXIgKyAxO1xuICAgICAgICAgICAgICAgIHggKz0gNjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeSA9IG1pblkgKyB5TW9kICogbztcbiAgICAgICAgICAgIGlmIChtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHh0TWVhc3VyZSA9IGVuZ2luZS5jdHgubWVhc3VyZVRleHQobS5uYW1lKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsUmVjdCh4IC0gMS4wLCB5IC0geU1vZCAqIDAuNywgdHh0TWVhc3VyZS53aWR0aCAqIDEuMSwgeU1vZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFRleHQobS5uYW1lLCB4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBlbmdpbmUuY3R4LmZpbGxUZXh0KG0ubmFtZSwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lLmN0eC5mb250ID0gXCIzMHB4IEFyaWFsXCI7XG4gICAgICAgIGVuZ2luZS5jdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgZW5naW5lLmN0eC5maWxsVGV4dCgnTGV2ZWwgU2VsZWN0JywgZW5naW5lLndpZHRoIC8gMi41LCA0NSk7XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJNZW51VGV4dFN5c3RlbSA9IFJlbmRlck1lbnVUZXh0U3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVwZGF0ZVNlbGVjdGVkID0gdm9pZCAwO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuLi8uLi9Xb3JsZEVuZ2luZVwiKTtcbmNvbnN0IE1lbnVUZXh0XzEgPSByZXF1aXJlKFwiLi4vLi4vQ29tcG9uZW50cy9TZWxlY3Rpb25TY2VuZS9NZW51VGV4dFwiKTtcbmNsYXNzIFVwZGF0ZVNlbGVjdGVkIGV4dGVuZHMgV29ybGRFbmdpbmVfMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW01lbnVUZXh0XzEuTWVudVRleHRdKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gMTA7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSArPSBlbmdpbmUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLmxhc3RVcGRhdGUgPCAwLjIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQga2V5UHJlc3MgPSBXb3JsZEVuZ2luZV8xLktleS5JTlZBTElEO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZW5naW5lLmtleURvd24pIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT0gV29ybGRFbmdpbmVfMS5LZXkuRE9XTiB8fCBrZXkgPT0gV29ybGRFbmdpbmVfMS5LZXkuVVAgfHwgV29ybGRFbmdpbmVfMS5LZXkuUklHSFQgfHwgV29ybGRFbmdpbmVfMS5LZXkuTEVGVCkge1xuICAgICAgICAgICAgICAgIGtleVByZXNzID0ga2V5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5JTlZBTElEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGVudGl0eSBhbmQgbmV3IGVudGl0eSBpbmRleFxuICAgICAgICBsZXQgc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmVjcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgY29uc3QgbHZsc1BlckNvbHVtbiA9IDE4O1xuICAgICAgICBsZXQgbmV3RW50aXR5O1xuICAgICAgICBpZiAoa2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuVVAgfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuVykge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkRPV04gfHwga2V5UHJlc3MgPT0gV29ybGRFbmdpbmVfMS5LZXkuUykge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LlJJR0hUIHx8IGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkQpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBXb3JsZEVuZ2luZV8xLktleS5MRUZUIHx8IGtleVByZXNzID09IFdvcmxkRW5naW5lXzEuS2V5LkEpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5IC0gbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIGlmICghZW50aXRpZXMuaGFzKG5ld0VudGl0eSkpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5O1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZWQgc2VsZWN0ZWRcbiAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3NlbGVjdGVkJywgbmV3RW50aXR5KTtcbiAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhzZWxlY3RlZEVudGl0eSkuZ2V0KE1lbnVUZXh0XzEuTWVudVRleHQpLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWNzLmdldENvbXBvbmVudHMobmV3RW50aXR5KS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSAwO1xuICAgIH1cbn1cbmV4cG9ydHMuVXBkYXRlU2VsZWN0ZWQgPSBVcGRhdGVTZWxlY3RlZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Td2l0Y2hDb2xsaXNpb24gPSB2b2lkIDA7XG5jb25zdCBTd2l0Y2hfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1N3aXRjaFwiKTtcbmNvbnN0IFdvcmxkRW5naW5lXzEgPSByZXF1aXJlKFwiLi4vV29ybGRFbmdpbmVcIik7XG5jb25zdCBQb3NpdGlvbjJkID0gV29ybGRFbmdpbmVfMS5Db21tb25Db21wb25lbnRzLlBvc2l0aW9uMmQ7XG5jbGFzcyBTd2l0Y2hDb2xsaXNpb24gZXh0ZW5kcyBXb3JsZEVuZ2luZV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbU3dpdGNoXzEuU3dpdGNoXSk7XG4gICAgfVxuICAgIHVwZGF0ZShlbmdpbmUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuZ2V0QkIoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgIGZvciAobGV0IGlkIG9mIGVudGl0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCBzd2l0Y2hQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUG9zaXRpb24yZCk7XG4gICAgICAgICAgICBpZiAoc3dpdGNoUG9zLmVxdWFscyhwbGF5ZXJQb3MpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3dpdGNoQ291bnQgPSB0aGlzLmVjcy5nZXRCQignc3dpdGNoIGNvdW50JykgLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdzd2l0Y2ggY291bnQnLCBzd2l0Y2hDb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3MucmVtb3ZlRW50aXR5KGlkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuU3dpdGNoQ29sbGlzaW9uID0gU3dpdGNoQ29sbGlzaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbW1vbkNvbXBvbmVudHMgPSBleHBvcnRzLktleSA9IGV4cG9ydHMuRUNTU2NlbmUgPSBleHBvcnRzLlNjZW5lID0gZXhwb3J0cy5TeXN0ZW0gPSBleHBvcnRzLkNvbXBvbmVudCA9IGV4cG9ydHMuRW5naW5lID0gdm9pZCAwO1xudmFyIEVuZ2luZV8xID0gcmVxdWlyZShcIi4vc3JjL0VuZ2luZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVuZ2luZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRW5naW5lXzEuRW5naW5lOyB9IH0pO1xudmFyIENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vc3JjL0NvbXBvbmVudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbXBvbmVudFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gQ29tcG9uZW50XzEuQ29tcG9uZW50OyB9IH0pO1xudmFyIFN5c3RlbV8xID0gcmVxdWlyZShcIi4vc3JjL1N5c3RlbVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlN5c3RlbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU3lzdGVtXzEuU3lzdGVtOyB9IH0pO1xudmFyIFNjZW5lXzEgPSByZXF1aXJlKFwiLi9zcmMvU2NlbmVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTY2VuZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2NlbmVfMS5TY2VuZTsgfSB9KTtcbnZhciBFQ1NTY2VuZV8xID0gcmVxdWlyZShcIi4vc3JjL0VDU1NjZW5lXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRUNTU2NlbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEVDU1NjZW5lXzEuRUNTU2NlbmU7IH0gfSk7XG52YXIgS2V5XzEgPSByZXF1aXJlKFwiLi9zcmMvS2V5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiS2V5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBLZXlfMS5LZXk7IH0gfSk7XG5jb25zdCBQb3NpdGlvbjJkXzEgPSByZXF1aXJlKFwiLi9zcmMvQ29tcG9uZW50cy9Qb3NpdGlvbjJkXCIpO1xuZXhwb3J0cy5Db21tb25Db21wb25lbnRzID0ge1xuICAgIFBvc2l0aW9uMmQ6IFBvc2l0aW9uMmRfMS5Qb3NpdGlvbjJkXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbXBvbmVudENvbnRhaW5lciA9IGV4cG9ydHMuQ29tcG9uZW50ID0gdm9pZCAwO1xuY2xhc3MgQ29tcG9uZW50IHtcbn1cbmV4cG9ydHMuQ29tcG9uZW50ID0gQ29tcG9uZW50O1xuY2xhc3MgQ29tcG9uZW50Q29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIGFkZChjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0KGNvbXBvbmVudC5jb25zdHJ1Y3RvciwgY29tcG9uZW50KTtcbiAgICB9XG4gICAgZ2V0KGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5nZXQoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgICBoYXMoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhjb21wb25lbnRDbGFzcyk7XG4gICAgfVxuICAgIGhhc0FsbChjb21wb25lbnRDbGFzc2VzKSB7XG4gICAgICAgIGZvciAobGV0IGNscyBvZiBjb21wb25lbnRDbGFzc2VzKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubWFwLmhhcyhjbHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBkZWxldGUoY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5tYXAuZGVsZXRlKGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbXBvbmVudENvbnRhaW5lciA9IENvbXBvbmVudENvbnRhaW5lcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3NpdGlvbjJkID0gdm9pZCAwO1xuY29uc3QgQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50XCIpO1xuY2xhc3MgUG9zaXRpb24yZCBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLm9sZFggPSB4O1xuICAgICAgICB0aGlzLm9sZFkgPSB5O1xuICAgIH1cbiAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PSBvdGhlci54ICYmIHRoaXMueSA9PSBvdGhlci55O1xuICAgIH1cbiAgICBoYXNoKCkge1xuICAgICAgICAvLyBDYW50b3IgcGFpcmluZyBmdW5jdGlvblxuICAgICAgICByZXR1cm4gKCh0aGlzLnggKyB0aGlzLnkpICogKHRoaXMueCArIHRoaXMueSArIDEpIC8gMikgKyB0aGlzLnk7XG4gICAgfVxuICAgIHVwZGF0ZU9sZCgpIHtcbiAgICAgICAgdGhpcy5vbGRYID0gdGhpcy54O1xuICAgICAgICB0aGlzLm9sZFkgPSB0aGlzLnk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3NpdGlvbjJkID0gUG9zaXRpb24yZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FQ1NTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IFNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZVwiKTtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vQ29tcG9uZW50XCIpO1xuLy8gaHR0cHM6Ly9tYXh3ZWxsZm9yYmVzLmNvbS9wb3N0cy90eXBlc2NyaXB0LWVjcy1pbXBsZW1lbnRhdGlvbi8gaXMgd2hhdCB0aGlzXG4vLyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBvZmYgb2YuXG5jbGFzcyBFQ1NTY2VuZSBleHRlbmRzIFNjZW5lXzEuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvLyBNYWluIHN0YXRlXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0aWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gQm9va2tlZXBpbmcgZm9yIGVudGl0aWVzLlxuICAgICAgICB0aGlzLm5leHRFbnRpdHlJRCA9IDA7XG4gICAgICAgIHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kgPSBuZXcgQXJyYXkoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCByZXR1cm4gLTEuIEFueSBvdGhlciBudW1iZXJzIHdpbGwgdGVsbCB0aGUgZ2FtZSBlbmdpbmUgdG8gY2hhbmdlXG4gICAgICogdGhlIHNjZW5lIHRvIHdoYXRldmVyIGluZGV4IGlzIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSBjYW52YXNcbiAgICAgKiBAcGFyYW0ga2V5UHJlc3Nlc1xuICAgICAqL1xuICAgIHVwZGF0ZShlbmdpbmUpIHtcbiAgICAgICAgLy8gVXBkYXRlIGFsbCBzeXN0ZW1zLiAoTGF0ZXIsIHdlJ2xsIGFkZCBhIHdheSB0byBzcGVjaWZ5IHRoZVxuICAgICAgICAvLyB1cGRhdGUgb3JkZXIuKVxuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN5c3RlbSA9IHRoaXMucHJpb3JpdHlUb1N5c3RlbS5nZXQocHJpb3JpdHkpO1xuICAgICAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KTtcbiAgICAgICAgICAgIHN5c3RlbS51cGRhdGUoZW5naW5lLCBjb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgYW55IGVudGl0aWVzIHRoYXQgd2VyZSBtYXJrZWQgZm9yIGRlbGV0aW9uIGR1cmluZyB0aGVcbiAgICAgICAgLy8gdXBkYXRlLlxuICAgICAgICB3aGlsZSAodGhpcy5lbnRpdGllc1RvRGVzdHJveS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lFbnRpdHkodGhpcy5lbnRpdGllc1RvRGVzdHJveS5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVXBkYXRlKGVuZ2luZSk7XG4gICAgfVxuICAgIC8vIEFQSTogRW50aXRpZXNcbiAgICBhZGRFbnRpdHkoKSB7XG4gICAgICAgIGxldCBlbnRpdHkgPSB0aGlzLm5leHRFbnRpdHlJRDtcbiAgICAgICAgdGhpcy5uZXh0RW50aXR5SUQrKztcbiAgICAgICAgdGhpcy5lbnRpdGllcy5zZXQoZW50aXR5LCBuZXcgQ29tcG9uZW50XzEuQ29tcG9uZW50Q29udGFpbmVyKCkpO1xuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNYXJrcyBgZW50aXR5YCBmb3IgcmVtb3ZhbC4gVGhlIGFjdHVhbCByZW1vdmFsIGhhcHBlbnMgYXQgdGhlIGVuZFxuICAgICAqIG9mIHRoZSBuZXh0IGB1cGRhdGUoKWAuIFRoaXMgd2F5IHdlIGF2b2lkIHN1YnRsZSBidWdzIHdoZXJlIGFuXG4gICAgICogRW50aXR5IGlzIHJlbW92ZWQgbWlkLWB1cGRhdGUoKWAsIHdpdGggc29tZSBTeXN0ZW1zIHNlZWluZyBpdCBhbmRcbiAgICAgKiBvdGhlcnMgbm90LlxuICAgICAqL1xuICAgIHJlbW92ZUVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllc1RvRGVzdHJveS5wdXNoKGVudGl0eSk7XG4gICAgfVxuICAgIGFkZENvbXBvbmVudChlbnRpdHksIGNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmVudGl0aWVzLmdldChlbnRpdHkpLmFkZChjb21wb25lbnQpO1xuICAgICAgICB0aGlzLmNoZWNrRShlbnRpdHkpO1xuICAgIH1cbiAgICBnZXRDb21wb25lbnRzKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KTtcbiAgICB9XG4gICAgcmVtb3ZlQ29tcG9uZW50KGVudGl0eSwgY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAoX2EgPSB0aGlzLmVudGl0aWVzLmdldChlbnRpdHkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGVsZXRlKGNvbXBvbmVudENsYXNzKTtcbiAgICAgICAgdGhpcy5jaGVja0UoZW50aXR5KTtcbiAgICB9XG4gICAgc2V0QkIoa2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkLnNldChrZXksIHZhbCk7XG4gICAgfVxuICAgIGdldEJCKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibGFja0JvYXJkLmdldChrZXkpO1xuICAgIH1cbiAgICAvLyBBUEk6IFN5c3RlbXNcbiAgICAvKipcbiAgICAgKiBBZGQgYSBzeXN0ZW0gd2hlcmUgdGhlIHByaW9yaXR5IGRlZmluZXMgaW4gd2hhdCBvcmRlciBpdCB3aWxsIGJlIHJ1biB3aGVuXG4gICAgICogY29tcGFyZWQgdG8gb3RoZXIgc3lzdGVtc1xuICAgICAqIEBwYXJhbSBwcmlvcml0eSAtIGxvd2VyIHZhbHVlIGlzIHJ1biBmaXJzdFxuICAgICAqIEBwYXJhbSBzeXN0ZW1cbiAgICAgKi9cbiAgICBhZGRTeXN0ZW0ocHJpb3JpdHksIHN5c3RlbSkge1xuICAgICAgICAvLyBTeXN0ZW0gbXVzdCByZXF1aXJlIGF0IGxlYXN0IG9uZSBjb21wb25lbnQgICAgXG4gICAgICAgIGlmIChzeXN0ZW0uY29tcG9uZW50c1JlcXVpcmVkLnNpemUgPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3lzdGVtIG5vdCBhZGRlZDogZW1wdHkgQ29tcG9uZW50cyBsaXN0LicgKyBzeXN0ZW0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByaW9yaXRpZXMuaW5jbHVkZXMocHJpb3JpdHkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke3N5c3RlbX0gY2FuIG5vdCBiZSB1c2VkIHNpbmNlIHByaW9yaXR5ICR7cHJpb3JpdHl9IGFscmVhZHkgaW4gdXNlLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgc3lzdGVtIGEgcmVmZXJlbmNlIHRvIHRoZSBFQ1Mgc28gaXQgY2FuIGFjdHVhbGx5IGRvXG4gICAgICAgIC8vIGFueXRoaW5nLlxuICAgICAgICBzeXN0ZW0uZWNzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvU3lzdGVtLnNldChwcmlvcml0eSwgc3lzdGVtKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5zZXQocHJpb3JpdHksIG5ldyBTZXQoKSk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5wdXNoKHByaW9yaXR5KTtcbiAgICAgICAgdGhpcy5wcmlvcml0aWVzLnNvcnQoKTtcbiAgICAgICAgLy8gU2F2ZSBzeXN0ZW0gYW5kIHNldCB3aG8gaXQgc2hvdWxkIHRyYWNrIGltbWVkaWF0ZWx5LlxuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5lbnRpdGllcy5rZXlzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbS5jbGVhcigpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0aWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEID0gMDtcbiAgICB9XG4gICAgZGVzdHJveUVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBUT0RPOiBjYW4gSSByZW1vdmUgdGhpcz9cbiAgICBjaGVja0UoZW50aXR5KSB7XG4gICAgICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHRoaXMucHJpb3JpdGllcykge1xuICAgICAgICAgICAgdGhpcy5jaGVja0VTKGVudGl0eSwgcHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEkgdGhpbmsgdGhpcyBjYW4gYmUgcmVtb3ZlZCBidXQgSSdtIGdvaW5nIHRvIGxlYXZlIGl0IGluIGZvciBub3cuXG4gICAgICogQHBhcmFtIGVudGl0eVxuICAgICAqIEBwYXJhbSBzeXN0ZW1cbiAgICAgKi9cbiAgICBjaGVja0VTKGVudGl0eSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGhhdmUgPSB0aGlzLmVudGl0aWVzLmdldChlbnRpdHkpO1xuICAgICAgICBsZXQgbmVlZCA9IHRoaXMucHJpb3JpdHlUb1N5c3RlbS5nZXQocHJpb3JpdHkpLmNvbXBvbmVudHNSZXF1aXJlZDtcbiAgICAgICAgaWYgKGhhdmUuaGFzQWxsKG5lZWQpKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgaW4gc3lzdGVtXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSkuYWRkKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgbm90IGJlIGluIHN5c3RlbVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5FQ1NTY2VuZSA9IEVDU1NjZW5lO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVuZ2luZSA9IHZvaWQgMDtcbmNvbnN0IEtleV8xID0gcmVxdWlyZShcIi4vS2V5XCIpO1xuY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5rZXlEb3duID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmtleVByZXNzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSk7XG4gICAgICAgICAgICBpZiAoayA9PSBLZXlfMS5LZXkuRE9XTiB8fCBrID09IEtleV8xLktleS5VUCB8fCBrID09IEtleV8xLktleS5MRUZUIHx8IGsgPT0gS2V5XzEuS2V5LlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmtleURvd24uaGFzKGspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duLmFkZChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5rZXlEb3duLmRlbGV0ZShrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleVByZXNzLmFkZCgoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgfVxuICAgIDtcbiAgICBzZXRCQihrZXksIHZhbCkge1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQuc2V0KGtleSwgdmFsKTtcbiAgICB9XG4gICAgZ2V0QkIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsYWNrQm9hcmQuZ2V0KGtleSk7XG4gICAgfVxuICAgIGFkZFNjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmVzLnB1c2goc2NlbmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBvbGRUaW1lU3RhbXA7XG4gICAgICAgIGxldCBmcHM7XG4gICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FbnRlcih0aGlzKTtcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9ICh0aW1lU3RhbXAgLSBvbGRUaW1lU3RhbXApIC8gMTAwMDtcbiAgICAgICAgICAgIG9sZFRpbWVTdGFtcCA9IHRpbWVTdGFtcDtcbiAgICAgICAgICAgIGZwcyA9IE1hdGgucm91bmQoMSAvIHRoaXMuZGVsdGEpO1xuICAgICAgICAgICAgLy8gcmVzZXQgYmFja2dyb3VuZFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIGdhbWUgZW5naW5lIG9wZXJhdGlvbnNcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAvLyBEcmF3IEZQU1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9ICcxMnB4IEFyaWFsJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJGUFM6IFwiICsgZnBzLCB0aGlzLndpZHRoIC0gNjAsIDMwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS51cGRhdGUodGhpcyk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkV4aXQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkVudGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5UHJlc3MuY2xlYXIoKTtcbiAgICB9XG59XG5leHBvcnRzLkVuZ2luZSA9IEVuZ2luZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5rZXlDb2RlVG9LZXkgPSBleHBvcnRzLktleSA9IHZvaWQgMDtcbnZhciBLZXk7XG4oZnVuY3Rpb24gKEtleSkge1xuICAgIEtleVtLZXlbXCJMRUZUXCJdID0gMF0gPSBcIkxFRlRcIjtcbiAgICBLZXlbS2V5W1wiUklHSFRcIl0gPSAxXSA9IFwiUklHSFRcIjtcbiAgICBLZXlbS2V5W1wiRE9XTlwiXSA9IDJdID0gXCJET1dOXCI7XG4gICAgS2V5W0tleVtcIlVQXCJdID0gM10gPSBcIlVQXCI7XG4gICAgS2V5W0tleVtcIldcIl0gPSA0XSA9IFwiV1wiO1xuICAgIEtleVtLZXlbXCJBXCJdID0gNV0gPSBcIkFcIjtcbiAgICBLZXlbS2V5W1wiU1wiXSA9IDZdID0gXCJTXCI7XG4gICAgS2V5W0tleVtcIkRcIl0gPSA3XSA9IFwiRFwiO1xuICAgIEtleVtLZXlbXCJRXCJdID0gOF0gPSBcIlFcIjtcbiAgICBLZXlbS2V5W1wiUlwiXSA9IDldID0gXCJSXCI7XG4gICAgS2V5W0tleVtcIlNQQUNFXCJdID0gMTBdID0gXCJTUEFDRVwiO1xuICAgIEtleVtLZXlbXCJFU0NBUEVcIl0gPSAxMV0gPSBcIkVTQ0FQRVwiO1xuICAgIEtleVtLZXlbXCJFTlRFUlwiXSA9IDEyXSA9IFwiRU5URVJcIjtcbiAgICBLZXlbS2V5W1wiSU5WQUxJRFwiXSA9IDEzXSA9IFwiSU5WQUxJRFwiO1xufSkoS2V5ID0gZXhwb3J0cy5LZXkgfHwgKGV4cG9ydHMuS2V5ID0ge30pKTtcbmZ1bmN0aW9uIGtleUNvZGVUb0tleShrZXkpIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdEb3duJzpcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRE9XTjtcbiAgICAgICAgY2FzZSAnVXAnOlxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuVVA7XG4gICAgICAgIGNhc2UgJ1JpZ2h0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlJJR0hUO1xuICAgICAgICBjYXNlICdMZWZ0JzpcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuTEVGVDtcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgIGNhc2UgJ1NwYWNlJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuU1BBQ0U7XG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkVTQ0FQRTtcbiAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkE7XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5TO1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRDtcbiAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICByZXR1cm4gS2V5Llc7XG4gICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5SO1xuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUTtcbiAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5FTlRFUjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5oYW5kbGVkIGtleTogJHtrZXl9LmApO1xuICAgICAgICAgICAgcmV0dXJuIEtleS5JTlZBTElEO1xuICAgIH1cbn1cbmV4cG9ydHMua2V5Q29kZVRvS2V5ID0ga2V5Q29kZVRvS2V5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNjZW5lID0gdm9pZCAwO1xuY2xhc3MgU2NlbmUge1xufVxuZXhwb3J0cy5TY2VuZSA9IFNjZW5lO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN5c3RlbSA9IHZvaWQgMDtcbmNsYXNzIFN5c3RlbSB7XG59XG5leHBvcnRzLlN5c3RlbSA9IFN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MRVZFTFMgPSB2b2lkIDA7XG5leHBvcnRzLkxFVkVMUyA9IHsgXCIxMV80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tLS0tWC0tXCIsIFwiLS0vLy0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tWC0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLS1YWC0tWC0tXCIsIFwiLS0mLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfOVwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tIy0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIxNV8wXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSYtLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl4tLS0tLS1eXl4tLV5eLS1cIiwgXCItLV5eXl4tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLSYtLVwiLCBcIi0tXl5eXi0tXl5eXl5eXl5eLS1cIiwgXCItLV5eLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tJi0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjlfMlwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tIy0tIy0tLS1YLSNYLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLVgtLVgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCIxXzEyXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSNYWFhYLS0tXCIsIFwiLS0tLS0tLS0mLS0tWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0qLS0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjFfMTNcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFgtLSNYWFhYLS1cIiwgXCItLS0tLS1YWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0qLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiOV8zXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tWC0tLS8vXFxcXC0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS1cXFxcXFxcXC8tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjE1XzFcIjogW1wiQC0tXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0qLS1cIiwgXCItLS1eXi0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS1eXi0tLVgjKi0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLV5eLS0tLVhYLS0tLV5eLS1cIiwgXCItLS1eXi0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLSotLVwiLCBcIi0tLV5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTdfM1wiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0jWC0tLS0tLS1eLS0tLS0tLVwiLCBcIi0tWFgtLS0tWC0tXi0tLS1YLS1cIiwgXCItLVgtLS0tWFgtLV4tLS1YWC0tXCIsIFwiLS0tLS0tWFhYLS1eLS1YWFgtLVwiLCBcIi0tLS0tLVgjKi0tLS0tWCMqLS1cIiwgXCItLS0tLS1YWFgtLSYtLVhYWC0tXCIsIFwiLS0tLS0tLVhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzhcIjogW1wiQC1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tWFgtLS1YWFgtLS0tXCIsIFwiLS1YWC0jLVhYLSMtWFhYLS0tLVwiLCBcIi0tWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLSpYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0tLS0tLS0mLS0tLU9cIl0sIFwiMTFfNVwiOiBbXCJALVhYWC0tXl5eXl5eXl5eXi0tXCIsIFwiLS0jWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLV5eXl5eXl5eXl4tT1wiXSwgXCIzXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0jWFhYWC0tI1hYWC0tXCIsIFwiLS0tJi0tLVhYWFgtLS1YWFgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLSotLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEzXzVcIjogW1wiQC1YWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tI1hYLS0tLS0tLS0tKiNYLS1cIiwgXCItLS1YWC0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tWFgtLS0tLVhYLS1YWC0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tWC0tLS1cIiwgXCItLS0tLS0tLS1YIyotLVgtLS0tXCIsIFwiLS0tLS0tLS0tWFhYLS1YLS0tLVwiLCBcIi0tLVhYLS0tLS1YWC0tWC0tLS1cIiwgXCItLS1YWC0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiM18xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLS0tLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzhcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLSpYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tLS0tLU9cIl0sIFwiMTFfN1wiOiBbXCJALV5eXl5eXl5eXl4tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLVgtLS0tWFhYLS1cIiwgXCItLVhYWC0tLVhYLS0tLVhYWC0tXCIsIFwiLS1YKlgtLVhYWC0tLS1YWC0tLVwiLCBcIi0tWCYtLS1YIyotLS0tWFgtLS1cIiwgXCItLVgqWC0tWFhYLS0tLS0tLS0tXCIsIFwiLS1YWFgtLS1YWC0tLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVgtLS0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVhYWC0tXCIsIFwiLS1eXl5eXl5eXl5eLS1YWFgtT1wiXSwgXCIxNV8zXCI6IFtcIkAtLS1eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS0tLS0tLS1YLS1eLS0tLVgtLVwiLCBcIi0tLS0tLS1YWC0tXi0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLV4tLVhYWC0tXCIsIFwiLS0tLS0tWCMqLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYWC0tJi0tWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjFfMTFcIjogW1wiQC1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLSpYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLSYtLS0tLU9cIl0sIFwiOV8xXCI6IFtcIkAtLS0tLS0tLS0tXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0jLS0jLS0tLS1YLSMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLVgtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLV5eXl5eXi1PXCJdLCBcIjlfMFwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLSYtLS1cIiwgXCItLS0tLS0tLS0tLS1eXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1eXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLSYtLVhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzJcIjogW1wiQC0tXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tLV5eXi0tLS0tLS0tLSojLS1cIiwgXCItLS1eXl4tLS0tLS1YLS1YWC0tXCIsIFwiLS0tXl5eLS0tLS1YWC0tWFgtLVwiLCBcIi0tLS0qLS0tLS1YWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tWCMqLS1YLS0tXCIsIFwiLS0tLSYtLS0tLVhYWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS0tWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tLS1YLS1YLS0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eXi0tXl5eXl5eXl5eLU9cIl0sIFwiMTFfNlwiOiBbXCJALV5eXl5eXl5eXl4tLVhYWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tI1gtI1gtI1gtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLVhYLS0tXCIsIFwiLS1eXl5eXl5eXl5eLS1YWFgtT1wiXSwgXCIxXzlcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFhYWC0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLSpYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tWFgtLU9cIl0sIFwiM18xNVwiOiBbXCJALS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLS0tLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxM180XCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS1YLS1YLS0tLVhYLS1cIiwgXCItLS0tLS0tWC0tWF4tLS1YKi0tXCIsIFwiLS0tXl4tLVhYWFheXi0tWCYtLVwiLCBcIi0tLS0tLS1YLS1YXi0tLVgqLS1cIiwgXCItLS1eXi0tWC0tWC0tLS1YWC0tXCIsIFwiLS0tXl4tLS0tLS8vXFxcXFxcXFwvL1xcXFwtLVwiLCBcIi0tLV5eLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTFcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tI1hYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfMFwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tIy0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCIxMV8yXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tXi0tLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0mLS0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjE3XzRcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSNYLSNYLSNYLSNYLSNYLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNV85XCI6IFtcIkAtLS0tXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLV4tLVhYWFhYWFhYWC1PXCJdLCBcIjFfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYWFgtLSYtLS1cIiwgXCItLS0tLS0tWFhYWFhYLS0tLS0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiOV80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWC0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLVgtLVheLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFhYXl4tLVgtLVwiLCBcIi0tLS0tLS0tWC0tWF4tLS1YLS1cIiwgXCItLS0tLS0tLVgtLVgtLS0tWC0tXCIsIFwiLS0mLS0tLS0tLS0vL1xcXFxcXFxcLy8tLVwiLCBcIi0tLS0tLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjE1XzZcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLVgtLVgtLS0tWFgtLVwiLCBcIi0tWCpYLS1YLS1YXi0tLVgqLS1cIiwgXCItLVgmLS0tWFhYWF5eLS1YJi0tXCIsIFwiLS1YKlgtLVgtLVheLS0tWCotLVwiLCBcIi0tWFhYLS1YLS1YLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLy9cXFxcXFxcXC8vXFxcXC0tXCIsIFwiLS1cXFxcLy8tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOV81XCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS9cXFxcXFxcXC1YLS0tLS0tLS0tKi0tXCIsIFwiLS1cXFxcLy8tWC0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tLVhYLS1YLS1cIiwgXCItLSYtLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS1YIyotLVgtLVwiLCBcIi0tJi0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS1YLS0tLS1YWC0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtWC0tLS0tLVgtLVgtLVwiLCBcIi0tXFxcXC8vLVgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTVcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFgtLSNYWFhYLS1cIiwgXCItLS0tWFhYWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0qLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiNV84XCI6IFtcIkAtLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0tLS0tIy0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLSMtLS0jLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0mLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0qLS1YWFhYWFhYWC1PXCJdLCBcIjE3XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLSYtLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTFfM1wiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tWC0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxM18xXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0jLS0tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTBcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0jWFhYLS1cIiwgXCItLS0tLSMtLS0tJi0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiM18xMlwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jWFhYWC0tKi0tLVwiLCBcIi0tLS0tLS0tLVhYWFgtLS0tLS1cIiwgXCItLS0tLS0tLS0tKi0tLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxM18zXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0vLy0tLS0tLS0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVgjKi0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVgtLS1cIiwgXCItLS0tLS0tLS0tLVhYLS1YLS0tXCIsIFwiLS0mLS0tLS0tLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjExXzFcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLV4tLVhYLS1cIiwgXCItLSYtLS0tLS0tLS1eLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tXi0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiOV83XCI6IFtcIkAtWFhYWFgtLV5eXl5eXl5eLS1cIiwgXCItLVhYWFhYLS0tLS0tLS0tKi0tXCIsIFwiLS1YWFhYWC0tLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFgtLS0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tLSYtLS0tLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS1YWFhYLS0tLS1YWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS1YWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tLSotLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTVfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0jWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tLS0tWC0tWF4tLS1YKlgtLVwiLCBcIi0tLS0tLVhYWFheXi0tWCYtLS1cIiwgXCItLS0tLS1YLS1YXi0tLVgqWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS8vXFxcXFxcXFwvL1xcXFxcXFxcLS1cIiwgXCItLS0tLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLy0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI3XzhcIjogW1wiQC0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0qLS0tLS0qLS0tKi0tLS1cIiwgXCItLS1eXl4tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLSYtLS0tLS0jLS0tIy0tLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiN185XCI6IFtcIkAtLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tKi0tLS0tKi0tLSNYWC0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0mLS0tLS0tIy0tLS0qLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzRcIjogW1wiQC0tLV5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0mLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tWFhYLS1YLS1cIiwgXCItLS0tLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0tLS0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS1YWC0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS1eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMV8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tI1hYWFgtLVwiLCBcIi0tLS0mLS1YWFgtLS1YWFhYLS1cIiwgXCItLS0tLS0tWFhYLS0tLSotLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI5XzZcIjogW1wiQC1YWFhYWC0tXl5eXl5eXl4tLVwiLCBcIi0tI1hYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtI1gtIy0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFgtLV5eXl5eXl5eLU9cIl0sIFwiMTFfMFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxM18yXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0jLS0tLS0tLVgjKi0tWCMtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFgtLS0tLSNYWFhYLS1cIiwgXCItLSMtLVhYLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0qLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTRfM1wiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tIy0tLS0tWCMqLS1YLSNYLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzFcIjogW1wiQC0tLS0tLS0tLS0tLV5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLSMtLSMtLS0tLS1YIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS1eXl5eLU9cIl0sIFwiN18xMFwiOiBbXCJALV5eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qWC0tLS0tLS0tLSNYWFgtLVwiLCBcIi0tJi0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLSpYLS0tLS0tIy0tLS0qLS0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1eXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxMF83XCI6IFtcIkAtXl5eXl5eXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tWFgtLS1YWC0tLS1YWFhYLS1cIiwgXCItLSpYLS1YWFgtLS0tWFhYWC0tXCIsIFwiLS0mLS0tWCMqLS0tLVhYWFgtLVwiLCBcIi0tKlgtLVhYWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS1YWC0tLS1cIiwgXCItLV5eXl5eXl5eXi0tWFhYWC1PXCJdLCBcIjVfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLVhYLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWC0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTJfNVwiOiBbXCJALV5eXl5eXl5eXl5eLS1YWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tI1gtI1gtI1gtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS1eXl5eXl5eXl5eXi0tWFgtT1wiXSwgXCIwXzhcIjogW1wiQC0tLS0tIy0tLVgtLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YWFhYLS1cIiwgXCItLS8vLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWC0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLSMtLS0mLS1YWFhYLU9cIl0sIFwiMF85XCI6IFtcIkAtLS0tLSMtLS0tWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0vLy0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0mLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0jLS0tLVhYWFhYWC1PXCJdLCBcIjEyXzRcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLVgjKi0tWC0jWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLSYtLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiNV8xNFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF82XCI6IFtcIkAtWFhYWC0tXl5eXl5eXl5eLS1cIiwgXCItLSNYWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWFgtLV5eXl5eXl5eXi1PXCJdLCBcIjdfMTFcIjogW1wiQC1eXl5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS1YWFgtLS0tWFhYWFhYWFgtLVwiLCBcIi0tWCpYLS0tLS0tI1hYWFhYLS1cIiwgXCItLVgmLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS1YKlgtLS0tLS0tLSotLS0tLVwiLCBcIi0tWFhYLS0tLVhYWFhYWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tWFhYWFhYWFgtLVwiLCBcIi0tXl5eXl4tLVhYWFhYWFhYLU9cIl0sIFwiMF8xOFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI4XzBcIjogW1wiQC0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLSMtLSMtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0mLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLV5eXl5eLU9cIl0sIFwiMTRfMlwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tIy0tLS0tLS1YIyotLVgjLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCIxNF8wXCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLSotLS0tKi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tKi0tLS0qLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfMlwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0vL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tXFxcXFxcXFwvLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCIxNl8yXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS0tLS0qLS0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tXl5eLS1cIiwgXCItLS1YLS1YLS1YLS1eXl5eXi0tXCIsIFwiLS0jWC0jWC0jWC0tLS0tJi0tLVwiLCBcIi0tLVgtLVgtLVgtLV5eXl5eLS1cIiwgXCItLS1YLS1YLS1YLS0tLV5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tLSotLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjEwXzRcIjogW1wiQC0tWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tLVhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiNV8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tI1hYWFgtLSotLS0jWFgtLVwiLCBcIi0tLS1YWFhYLS0tLS0tLVhYLS1cIiwgXCItLS0tLSotLS0tLSMtLS0tKi0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzlcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLSMtWFhYWC0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLSpYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tWFgtLU9cIl0sIFwiMTJfNlwiOiBbXCJALV5eXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0qWC0tWFhYLS0tLS0tKi0tLVwiLCBcIi0tJi0tLVgjKi0tLS0tLS0tLS1cIiwgXCItLSpYLS1YWFgtLS0tLS0tIy0tXCIsIFwiLS1YWC0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YWFhYLS1cIiwgXCItLS8vLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS1eXl5eXl5eXl4tLVhYWFgtT1wiXSwgXCIyXzhcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtIy0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLSpYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tLS0tLU9cIl0sIFwiMTBfNVwiOiBbXCJALVhYWC0tLV5eXl5eXl5eXi0tXCIsIFwiLS0jWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLS1eXl5eXl5eXl4tT1wiXSwgXCI3XzEyXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YLS1YWCojWFgqI1hYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YKiNYWC0tWFgtLVhYKiMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE2XzNcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS1eXi0tLS0tLVhYLS0tWFgtLVwiLCBcIi0tXl5eXi0tLVhYWC0tWFhYLS1cIiwgXCItLS0tLS0tLS1YIyotLVgjKi0tXCIsIFwiLS1eXl5eLS0tWFhYLS1YWFgtLVwiLCBcIi0tXl4tLS0tLS1YWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF8zXCI6IFtcIkAtLS0tLS0tLS1YLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLVhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tWC0tXl5eXi1PXCJdLCBcIjE0XzFcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLSMtLS0tLVgjKi0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF83XCI6IFtcIkAtWFhYWFhYLS1eXl5eXl5eLS1cIiwgXCItLSNYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0mLS0tLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWC0tXl5eXl5eXi1PXCJdLCBcIjE0XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLVheLS0tWCpYLS1YLS1cIiwgXCItLVhYWFhYXl4tLVgmLS0tWC0tXCIsIFwiLS0tLS0tWF4tLS1YKlgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0vL1xcXFxcXFxcLy9cXFxcXFxcXC0tWC0tXCIsIFwiLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy8tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNl84XCI6IFtcIkAtLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLSotLS0tLS0tLSNYWC0tXCIsIFwiLS0tLV5eXi0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tJi0tLS0tIy0tLS0qLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjVfMTNcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLS0tLSYtLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfMVwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tWC0jLS1cIiwgXCItLS0tLS0tLS0tJi0tLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxMl8zXCI6IFtcIkAtLS0tLS1eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0vLy0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS1YWC0tLVhYLS1cIiwgXCItLS0tLS0tLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tWCMqLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tWFgtLS1YLS0tXCIsIFwiLS0mLS0tLS0tLS1YLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tXl5eXl5eXl5eXi1PXCJdLCBcIjEyXzJcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0qLS1cIiwgXCItLS8vLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgjKi0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYLS1YLS1cIiwgXCItLSYtLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTBfMFwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLSotLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLV5eXl4tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLS0mLS1cIiwgXCItLS0tLS0tLS0tJi0tXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCI1XzEyXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfOVwiOiBbXCJALS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLSotLS0tLS0tLSNYWFgtLVwiLCBcIi0tLV5eXi0tLS0tLS0tWFhYLS1cIiwgXCItLS0tJi0tLS0tIy0tLS0qLS0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxNF80XCI6IFtcIkAtXl5eXl5eXl5eXl5eLS1YLS1cIiwgXCItLS0tLS1YLS0tLS0tLS0tWC0tXCIsIFwiLS0tWC0tWC0tLS1YLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS1YWC0tLS1YLS1cIiwgXCItLS1YLS1YLS1YWFgtLS0tWC0tXCIsIFwiLS0jWC0jWC0tWCMqLS0tLVgtLVwiLCBcIi0tLVgtLVgtLVhYWC0tLS1YLS1cIiwgXCItLS1YLS1YLS0tWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tLS1YLS0tLVgtLVwiLCBcIi0tLVgtLS0tLS0tLS0tLS1YLS1cIiwgXCItLV5eXl5eXl5eXl5eXi0tJi1PXCJdLCBcIjhfNlwiOiBbXCJALS0tXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVhYWC0tLVwiLCBcIi0tLS0tLVgjKi0tLS1YWC0tLS1cIiwgXCItLS0tLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLV5eXl5eXl4tLVhYWFgtT1wiXSwgXCI4XzRcIjogW1wiQC0tLS0tIy0tLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLVhYLS1cIiwgXCItLSYtLS1YWC0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0tXl5eXl5eLU9cIl0sIFwiMTZfNFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tI1gtI1gtI1gtI1gtLS0tLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS8tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS1cXFxcLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI0XzlcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0qLS0tI1hYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0jLS0tLSotLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiNV8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF8yXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tXi0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLV4tLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tJi0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjEyXzBcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLSMtLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTJfMVwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tJi0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMF8zXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS1YLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjVfMTFcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSNYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF84XCI6IFtcIkAtWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLVhYLS0tWFhYLS0tLVwiLCBcIi0tWFgtIy1YWC0jLVhYWC0jLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0qWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLS0tJi0tLS1PXCJdLCBcIjE2XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS1YWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tKlgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSYtLS1YLSNYLSNYLSNYLS0tXCIsIFwiLS0qWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tWFgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLVxcXFxcXFxcLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF81XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS1YWC0tLS1eXl4tLS0tLVwiLCBcIi0tLS0tWFgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLy9cXFxcXFxcXC0tXCIsIFwiLS0jLS0tLS0tLS0tLVxcXFxcXFxcLy8tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLVhYLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1YWC0tLS1eXl4tLS0tLVwiLCBcIi0tLS0tWFgtLV5eXl5eXl5eLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjhfOFwiOiBbXCJALVhYWFhYWC0tXl5eXl5eXi0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYLS0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWC0tLS0tLS1YLSNYLS1cIiwgXCItLS0qLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFgtLV5eXl5eXl4tT1wiXSwgXCI2XzdcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLS0qLS0tLS1eXl5eLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tLV5eXl4tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMF8xMFwiOiBbXCJALS0tLS0jLS0tWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YWFhYLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tJi0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tIy0tLVhYWFhYWFgtT1wiXSwgXCI0XzVcIjogW1wiQC0tLS0tLS0jLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS0tLSMtLS0tLS0tLSYqIy0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLVhYWFhYLU9cIl0sIFwiMl8xNVwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jWFhYWC0tLS0tLVwiLCBcIi0tLS0tJi0tLVhYWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tKi0tLS0tWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLSYtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiMF8xXCI6IFtcIkAtLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tIy0tJi0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0mLS0tXCIsIFwiLS0mLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0mLS0tLS1PXCJdLCBcIjBfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLSYtLSYtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCIyXzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLSYtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLS0tLU9cIl0sIFwiMl8xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYLS0tLS0jWFhYWC0tLVwiLCBcIi0tLS1YWC0tLS0tLVhYWFgtLS1cIiwgXCItLS0tLS0tLSotLS0tKi0tLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzRcIjogW1wiQC0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWCotLVwiLCBcIi0tKi0tLS0tKi0tJi0tWFgtLU9cIl0sIFwiMF8xMVwiOiBbXCJALS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0jLS1YWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtT1wiXSwgXCI2XzZcIjogW1wiQC0tLS0tWFhYWFgtLV5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYLS0tLSojLS1cIiwgXCItLS8vLS1YWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tWC0tLVwiLCBcIi0tLS0tLVhYWFhYLS0tLVgtLS1cIiwgXCItLSYtLS1YWFhYWC0tLS1YLS0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYLS1eXl5eLU9cIl0sIFwiOF85XCI6IFtcIkAtXl5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLSNYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWC0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLV5eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjZfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0jLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLSotLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCIwXzEzXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjRfNlwiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCIxOF80XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tWC0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tWFgtLS1YWC0tLVhYLS1cIiwgXCItLS0tWFhYLS1YWFgtLS1YLS0tXCIsIFwiLS0tLVgjKi0tWCMqLS0tWC0tLVwiLCBcIi0tLS1YWFgtLVhYWC0tLVgtLS1cIiwgXCItLS0tLVhYLS0tWFgtLS1YLS0tXCIsIFwiLS0tLS0tWC0tLS1YLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjJfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLSNYWFhYLS1cIiwgXCItLS0tLVhYWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS1YWFhYWC0tLS0qLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0mLS0mLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjBfMlwiOiBbXCJALS0tLS0jLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLy8tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0mLS0mLS0mLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tIy0tLS0tLS0tLS0tT1wiXSwgXCIwXzNcIjogW1wiQC0tLS0tIy0tLVgtLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tJi0tJi0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0tLS0tLU9cIl0sIFwiMl8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjJfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWC0tI1hYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS1YWFhYLS0tXCIsIFwiLS0tKi0tLS0tLS0tLSotLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMThfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tJi0tLVgjKi0tWCMqLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI0XzdcIjogW1wiQC0tLS0tWFhYWFhYLS1eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWC0tLS1YLS1cIiwgXCItLS8vLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWC0tXl5eLU9cIl0sIFwiMF8xMlwiOiBbXCJALS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtT1wiXSwgXCI2XzVcIjogW1wiQC0tLS0tWFhYLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWC0tLS1YLS1YLS1cIiwgXCItLS8vLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tWC0jWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLSYtLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYWC0tXl5eXl5eLU9cIl0sIFwiNl8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0mLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLV5eXi1PXCJdLCBcIjBfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSYtLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLV5eLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS1eXi1PXCJdLCBcIjJfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jLS1YWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl81XCI6IFtcIkAtLS0tLS0tIy0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLSotLS0tLSMtLS0mLS0mLS1PXCJdLCBcIjBfN1wiOiBbXCJALS0tLS0jLS0tWC0tWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWFgtLS0tXCIsIFwiLS0tLS0tIy0tLSYtLVhYWFgtT1wiXSwgXCIwXzZcIjogW1wiQC0tLS0tIy0tLVgtLVgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS1YLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0mLU9cIl0sIFwiMl80XCI6IFtcIkAtLS0tLS0tIy0tLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tWC0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjJfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0jLS0tLSotLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNF8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLSotLS0tLSMtLS0tLS1eXi1PXCJdLCBcIjBfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNl8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0mLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLV5eXi1PXCJdLCBcIjZfMlwiOiBbXCJALS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS1eXl4tT1wiXSwgXCIwXzE1XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLy0tXCIsIFwiLS0qLS0tLS0qLS0tLS0tLVxcXFwtT1wiXSwgXCIyXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tLS0tXCIsIFwiLS0tLS0jLS1YWFgtLSYtLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjJfNlwiOiBbXCJALS0tLS0tLSMtLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tIy0tLS0tLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tWFgtT1wiXSwgXCIwXzRcIjogW1wiQC0tLS0tIy0tLVgtLVgtLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS0tLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0mLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0tLU9cIl0sIFwiMF81XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tLy0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLVxcXFwtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tLS1PXCJdLCBcIjJfN1wiOiBbXCJALS0tLS0tLSMtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tJi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0qLS0tLS0jLS0tWFhYWFgtT1wiXSwgXCIyXzExXCI6IFtcIkAtWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLSMtLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0qWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0mLS0tLS1PXCJdLCBcIjRfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLSotLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCIwXzE0XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfM1wiOiBbXCJALS0tLS0tLS0tWC0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLVgtLVwiLCBcIi0tLS0tIy0tWCMmLS0tLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tLVgtLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0qLS0tLS0tLVgtLS1eXl4tT1wiXSwgXCIxXzJcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLy9cXFxcLS1cIiwgXCItLS0tLS0tLS0tLVgtLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSYtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tJi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tLS0tLU9cIl0sIFwiM18wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLS0tLS1PXCJdLCBcIjVfNlwiOiBbXCJALS0tLS1YWFhYWC0tXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFgtLS0tLSotLVwiLCBcIi0tLy8tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tJi0tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFgtLV5eXl4tT1wiXSwgXCI2XzEyXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YLS1YWC0tWFgqI1hYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YKiZYWCojWFgtLVhYKiMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjdfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0tKi0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0mLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCI3XzVcIjogW1wiQC0tLS0tWFhYLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWC0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWFgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tWFhYLS1cIiwgXCItLS0tLS1YWFgtLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLSYtLS1YWFgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYWC0tXl5eXl5eLU9cIl0sIFwiNl8xM1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0qLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI1XzdcIjogW1wiQC0tLS0tWFhYWFhYLS1eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWC0tLS1YLS1cIiwgXCItLS8vLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tIy0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWC0tXl5eLU9cIl0sIFwiM18xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS0tLS1PXCJdLCBcIjFfM1wiOiBbXCJALS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tIy0tJi0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0mLS0tT1wiXSwgXCI0XzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0jWFhYWC0tLS0tI1hYWC0tXCIsIFwiLS0tLVhYWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tKi0tLS0qLS0tLSotLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMTRcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tI1hYLS1cIiwgXCItLS0tLSYtLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMV8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjNfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0qLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCI1XzVcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLSMtLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiOV84XCI6IFtcIkAtXl5eXl5eXi0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tWFgtLS0tWFhYWFhYLS1cIiwgXCItLS0tWFhYLS0tLS0tI1hYWC0tXCIsIFwiLS0tLVgjKi0tLS0tLS1YWFgtLVwiLCBcIi0tLS1YWFgtLS0tLS0tLSotLS1cIiwgXCItLS0tLVhYLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLV5eXl5eXl4tLVhYWFhYWC1PXCJdLCBcIjZfMTFcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiN183XCI6IFtcIkAtLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLSotLS0tLSotLS0qLS0tXCIsIFwiLS0tLV5eXi0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tJi0tLS0tLSMtLS0jLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjdfNlwiOiBbXCJALS0tLVhYWFhYWC0tXl5eXi0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0tWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVgjLS1cIiwgXCItLS0tLS0tLSMtLS0tLS1YWC0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLV5eXl4tT1wiXSwgXCI2XzEwXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLV4tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS1eXi0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXi0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjVfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLSYtLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLSotLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCIzXzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLV4tLU9cIl0sIFwiMV8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS0mLS0mLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjRfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tI1hYWFgtLS0tLSNYLS1cIiwgXCItLS0tLS1YWFhYLS0tLS0tWC0tXCIsIFwiLS0tLS0tLSotLS0tKi0tLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8xMVwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzRcIjogW1wiQC0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLSMtLSYtLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tKi0tLS0tLS0tJi0tLVhYLU9cIl0sIFwiM182XCI6IFtcIkAtLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLSYtLSYtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLSotLS0tLSotLVhYWFhYWC1PXCJdLCBcIjVfMFwiOiBbXCJALS0tLS0tLS0tLS0tLV4tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0qLS0tLS0qLS0tLS1eLV4tT1wiXSwgXCI3XzJcIjogW1wiQC0tLS0tLS0jLS0tXl5eXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0mLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLV5eXl5eLU9cIl0sIFwiN18zXCI6IFtcIkAtLS0tLS0tLS1YLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSMtLS1cIiwgXCItLSotLS0tLS0tWC0tXl5eXi1PXCJdLCBcIjhfMTBcIjogW1wiQC1eXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKlgtLS0tLS0qLS0tI1hYLS1cIiwgXCItLSYtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0qWC0tLS0tLS0jLS0tLSotLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXl5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiNV8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS1eXi1PXCJdLCBcIjNfN1wiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWFgtLSYtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCIxXzVcIjogW1wiQC0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLSYtLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tWFhYLU9cIl0sIFwiNF8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tI1gtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzEyXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0mLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjFfN1wiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tIy0tJi0tWFhYLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0tLS1YWFhYWFgtT1wiXSwgXCIzXzVcIjogW1wiQC0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLSMtLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tWFhYLU9cIl0sIFwiNV8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLV4tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLV5eLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLSMtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjdfMVwiOiBbXCJALS0tLS0tLS0tLVgtLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCI3XzBcIjogW1wiQC0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS0tLS0tLU9cIl0sIFwiNV8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLSMtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS0tLS1PXCJdLCBcIjNfNFwiOiBbXCJALS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tIy0tIy0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tWFgtT1wiXSwgXCIxXzZcIjogW1wiQC0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLSMtLSYtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tKi0tLS0tLS0tLVhYWFhYLU9cIl0sIFwiNF8xM1wiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSNYWFhYLS0jWFgtLVwiLCBcIi0tIy0tLS0tWFhYWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0qLS0tLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgV29ybGRFbmdpbmVfMSA9IHJlcXVpcmUoXCIuL1dvcmxkRW5naW5lXCIpO1xuY29uc3QgR2FtZVNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvR2FtZVNjZW5lXCIpO1xuY29uc3QgUGxheWVyTG9zdFNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvUGxheWVyTG9zdFNjZW5lXCIpO1xuY29uc3QgUGxheWVyV29uU2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lcy9QbGF5ZXJXb25TY2VuZVwiKTtcbmNvbnN0IFNlbGVjdGlvblNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvU2VsZWN0aW9uU2NlbmVcIik7XG5jb25zdCBTdGFydFNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvU3RhcnRTY2VuZVwiKTtcbmNvbnN0IGVuZ2luZSA9IG5ldyBXb3JsZEVuZ2luZV8xLkVuZ2luZSgpO1xuY29uc3Qgc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lXzEuU3RhcnRTY2VuZSgpO1xuY29uc3Qgc2VsZWN0aW9uU2NlbmUgPSBuZXcgU2VsZWN0aW9uU2NlbmVfMS5TZWxlY3Rpb25TY2VuZSgpO1xuY29uc3QgZ2FtZVNjZW5lID0gbmV3IEdhbWVTY2VuZV8xLkdhbWVTY2VuZSgpO1xuY29uc3QgcGxheWVyTG9zdFNjZW5lID0gbmV3IFBsYXllckxvc3RTY2VuZV8xLlBsYXllckxvc3RTY2VuZSgpO1xuY29uc3QgcGxheWVyV29uU2NlbmUgPSBuZXcgUGxheWVyV29uU2NlbmVfMS5QbGF5ZXJXb25TY2VuZSgpO1xuY29uc3Qgc3RhcnRJbmRleCA9IGVuZ2luZS5hZGRTY2VuZShzdGFydFNjZW5lKTtcbmNvbnN0IHNlbGVjdGlvbkluZGV4ID0gZW5naW5lLmFkZFNjZW5lKHNlbGVjdGlvblNjZW5lKTtcbmNvbnN0IGdhbWVJbmRleCA9IGVuZ2luZS5hZGRTY2VuZShnYW1lU2NlbmUpO1xuY29uc3QgbG9zdEluZGV4ID0gZW5naW5lLmFkZFNjZW5lKHBsYXllckxvc3RTY2VuZSk7XG5jb25zdCB3b25JbmRleCA9IGVuZ2luZS5hZGRTY2VuZShwbGF5ZXJXb25TY2VuZSk7XG5zdGFydFNjZW5lLnNjZW5lSW5kZXggPSBzZWxlY3Rpb25JbmRleDtcbnNlbGVjdGlvblNjZW5lLnNjZW5lSW5kZXggPSBnYW1lSW5kZXg7XG5nYW1lU2NlbmUucGxheWVyTG9zdEluZGV4ID0gbG9zdEluZGV4O1xuZ2FtZVNjZW5lLnBsYXllcldvbkluZGV4ID0gd29uSW5kZXg7XG5nYW1lU2NlbmUuc2VsZkluZGV4ID0gZ2FtZUluZGV4O1xuZ2FtZVNjZW5lLm1haW5NZW51SW5kZXggPSBzdGFydEluZGV4O1xucGxheWVyTG9zdFNjZW5lLnNjZW5lSW5kZXggPSBzdGFydEluZGV4O1xucGxheWVyV29uU2NlbmUuc2NlbmVJbmRleCA9IHN0YXJ0SW5kZXg7XG5lbmdpbmUuc3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==