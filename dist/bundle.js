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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Collider extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Enemy extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Movable extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Player extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Portal extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Position extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Render extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../../Engine/Component */ "./src/Engine/Component.ts");
class MenuText extends Component_1.Component {
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
const Component_1 = __webpack_require__(/*! ../Engine/Component */ "./src/Engine/Component.ts");
class Switch extends Component_1.Component {
    constructor() {
        super();
    }
}
exports.Switch = Switch;


/***/ }),

/***/ "./src/Engine/Component.ts":
/*!*********************************!*\
  !*** ./src/Engine/Component.ts ***!
  \*********************************/
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

/***/ "./src/Engine/ECSScene.ts":
/*!********************************!*\
  !*** ./src/Engine/ECSScene.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ECSScene = void 0;
const Scene_1 = __webpack_require__(/*! ./Scene */ "./src/Engine/Scene.ts");
const Component_1 = __webpack_require__(/*! ./Component */ "./src/Engine/Component.ts");
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
    update(game) {
        // Update all systems. (Later, we'll add a way to specify the
        // update order.)
        for (let priority of this.priorities) {
            const system = this.priorityToSystem.get(priority);
            const components = this.priorityToComponents.get(priority);
            system.update(game, components);
        }
        // Remove any entities that were marked for deletion during the
        // update.
        while (this.entitiesToDestroy.length > 0) {
            this.destroyEntity(this.entitiesToDestroy.pop());
        }
        return this.customUpdate(game);
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

/***/ "./src/Engine/Game.ts":
/*!****************************!*\
  !*** ./src/Engine/Game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
const Key_1 = __webpack_require__(/*! ./Key */ "./src/Engine/Key.ts");
class Game {
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
exports.Game = Game;


/***/ }),

/***/ "./src/Engine/Key.ts":
/*!***************************!*\
  !*** ./src/Engine/Key.ts ***!
  \***************************/
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

/***/ "./src/Engine/Scene.ts":
/*!*****************************!*\
  !*** ./src/Engine/Scene.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
class Scene {
}
exports.Scene = Scene;
;


/***/ }),

/***/ "./src/Engine/System.ts":
/*!******************************!*\
  !*** ./src/Engine/System.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.System = void 0;
class System {
}
exports.System = System;


/***/ }),

/***/ "./src/Scenes/GameScene.ts":
/*!*********************************!*\
  !*** ./src/Scenes/GameScene.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameScene = void 0;
const ECSScene_1 = __webpack_require__(/*! ../Engine/ECSScene */ "./src/Engine/ECSScene.ts");
const Position_1 = __webpack_require__(/*! ../Components/Position */ "./src/Components/Position.ts");
const Render_1 = __webpack_require__(/*! ../Components/Render */ "./src/Components/Render.ts");
const Player_1 = __webpack_require__(/*! ../Components/Player */ "./src/Components/Player.ts");
const levels_1 = __webpack_require__(/*! ../levels */ "./src/levels.ts");
const RenderSystem_1 = __webpack_require__(/*! ../Systems/RenderSystem */ "./src/Systems/RenderSystem.ts");
const Portal_1 = __webpack_require__(/*! ../Components/Portal */ "./src/Components/Portal.ts");
const PortalSystem_1 = __webpack_require__(/*! ../Systems/PortalSystem */ "./src/Systems/PortalSystem.ts");
const PlayerSystem_1 = __webpack_require__(/*! ../Systems/PlayerSystem */ "./src/Systems/PlayerSystem.ts");
const Key_1 = __webpack_require__(/*! ../Engine/Key */ "./src/Engine/Key.ts");
const EnemyAISystem_1 = __webpack_require__(/*! ../Systems/EnemyAISystem */ "./src/Systems/EnemyAISystem.ts");
const Movable_1 = __webpack_require__(/*! ../Components/Movable */ "./src/Components/Movable.ts");
const Switch_1 = __webpack_require__(/*! ../Components/Switch */ "./src/Components/Switch.ts");
const SwitchCollision_1 = __webpack_require__(/*! ../Systems/SwitchCollision */ "./src/Systems/SwitchCollision.ts");
const Enemy_1 = __webpack_require__(/*! ../Components/Enemy */ "./src/Components/Enemy.ts");
const EnemyCollision_1 = __webpack_require__(/*! ../Systems/EnemyCollision */ "./src/Systems/EnemyCollision.ts");
const PlayerCollision_1 = __webpack_require__(/*! ../Systems/PlayerCollision */ "./src/Systems/PlayerCollision.ts");
const Collider_1 = __webpack_require__(/*! ../Components/Collider */ "./src/Components/Collider.ts");
class GameScene extends ECSScene_1.ECSScene {
    constructor() {
        super();
        this.playerWonIndex = 0;
        this.playerLostIndex = 0;
        this.selfIndex = 0;
        this.mainMenuIndex = 0;
        this.setBB('game over', 0);
        this.setBB('restart', false);
    }
    onEnter(game) {
        const xMod = 20;
        const yMod = 20;
        const offsetX = 8;
        const offsetY = 7;
        let xMin = 1000;
        let xMax = 0;
        let yMin = 1000;
        let yMax = 0;
        let switchCount = 0;
        const lvlKey = game.getBB('level');
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
        for (let y = 3; y < game.height / yMod - 1; ++y) {
            for (let x = 1; x < game.width / xMod - 1; ++x) {
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
    onExit(game) {
        this.clear();
    }
    customUpdate(game) {
        const gameOver = this.getBB('game over');
        if (gameOver == -1) {
            return this.playerLostIndex;
        }
        else if (gameOver == 1) {
            return this.playerWonIndex;
        }
        else if (game.keyDown.has(Key_1.Key.R)) {
            return this.selfIndex;
        }
        else if (game.keyDown.has(Key_1.Key.Q)) {
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
const Scene_1 = __webpack_require__(/*! ../Engine/Scene */ "./src/Engine/Scene.ts");
class PlayerLostScene extends Scene_1.Scene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.timer = 0;
    }
    onEnter(game) {
        this.timer = 0;
    }
    onExit(game) { }
    update(game) {
        this.timer += game.delta;
        if (this.timer > 2) {
            return this.sceneIndex;
        }
        else {
            game.ctx.font = '40px Arial';
            game.ctx.fillStyle = 'green';
            game.ctx.fillText('You Lost! :/', game.width / 3.5, game.height / 2);
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
const Scene_1 = __webpack_require__(/*! ../Engine/Scene */ "./src/Engine/Scene.ts");
class PlayerWonScene extends Scene_1.Scene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.timer = 0;
    }
    onEnter(game) {
        this.timer = 0;
    }
    onExit(game) { }
    update(game) {
        this.timer += game.delta;
        if (this.timer > 2) {
            return this.sceneIndex;
        }
        else {
            game.ctx.font = '40px Arial';
            game.ctx.fillStyle = 'green';
            game.ctx.fillText('You Won! Nice!', game.width / 3.5, game.height / 2);
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
const ECSScene_1 = __webpack_require__(/*! ../Engine/ECSScene */ "./src/Engine/ECSScene.ts");
const levels_1 = __webpack_require__(/*! ../levels */ "./src/levels.ts");
const MenuText_1 = __webpack_require__(/*! ../Components/SelectionScene/MenuText */ "./src/Components/SelectionScene/MenuText.ts");
const UpdateSelected_1 = __webpack_require__(/*! ../Systems/SelectionScene/UpdateSelected */ "./src/Systems/SelectionScene/UpdateSelected.ts");
const RenderMenuText_1 = __webpack_require__(/*! ../Systems/SelectionScene/RenderMenuText */ "./src/Systems/SelectionScene/RenderMenuText.ts");
const Key_1 = __webpack_require__(/*! ../Engine/Key */ "./src/Engine/Key.ts");
class SelectionScene extends ECSScene_1.ECSScene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.sortedLevels = [];
        for (let key in levels_1.LEVELS) {
            this.sortedLevels.push(key);
        }
        this.sortedLevels.sort();
    }
    onEnter(game) {
        for (let i = 0; i < this.sortedLevels.length; ++i) {
            const id = this.addEntity();
            const selected = i == 0;
            this.addComponent(id, new MenuText_1.MenuText(this.sortedLevels[i], i, selected));
        }
        this.setBB('selected', 0);
        this.addSystem(0, new UpdateSelected_1.UpdateSelected());
        this.addSystem(10, new RenderMenuText_1.RenderMenuTextSystem());
    }
    onExit(game) {
        this.clear();
    }
    customUpdate(game) {
        if (game.keyDown.has(Key_1.Key.ENTER)) {
            const selected = this.getBB('selected');
            game.setBB('level', this.getComponents(selected).get(MenuText_1.MenuText).name);
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
const Key_1 = __webpack_require__(/*! ../Engine/Key */ "./src/Engine/Key.ts");
const Scene_1 = __webpack_require__(/*! ../Engine/Scene */ "./src/Engine/Scene.ts");
class StartScene extends Scene_1.Scene {
    constructor() {
        super();
        this.sceneIndex = 0;
        this.timer = 0;
    }
    onEnter(game) { }
    onExit(game) { }
    update(game) {
        if (game.keyDown.has(Key_1.Key.ENTER)) {
            game.keyDown.clear();
            return this.sceneIndex;
        }
        else {
            game.ctx.font = '40px Arial';
            game.ctx.fillStyle = 'white';
            game.ctx.fillText('DungeonGrams', 220, 100);
            game.ctx.font = '20px Arial';
            game.ctx.fillText('Press Enter to start', 275, 150);
            game.ctx.fillStyle = 'yellow';
            game.ctx.fillText('& gives you stamina', 40, 200);
            game.ctx.fillText('Collect all * to open the portal.', 40, 222);
            game.ctx.fillText('Step through the portal O to win!', 40, 244);
            game.ctx.fillText('But make sure to avoid the enemies # and traps ^', 40, 266);
            game.ctx.fillStyle = 'green';
            game.ctx.fillText('WASD to move', 40, 350);
            game.ctx.fillText('R to restart', 40, 375);
            game.ctx.fillText('Q to quit', 40, 400);
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
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class EnemyAISystem extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Position_1.Position, Render_1.Render, Collider_1.Collider]);
    }
    update(game, entities) {
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
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class EnemyCollision extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Enemy_1.Enemy]);
    }
    update(game, entities) {
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
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class PlayerCollision extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Collider_1.Collider]);
    }
    update(game, entities) {
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
const Key_1 = __webpack_require__(/*! ../Engine/Key */ "./src/Engine/Key.ts");
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class PlayerSystem extends System_1.System {
    constructor() {
        super();
        this.componentsRequired = new Set([Position_1.Position, Render_1.Render, Player_1.Player]);
        this.timeSinceLastMove = 5;
    }
    update(game, entities) {
        this.timeSinceLastMove += game.delta;
        if (this.timeSinceLastMove < 0.08) {
            return;
        }
        this.timeSinceLastMove = 0;
        let playerID = entities.values().next().value;
        let pos = this.ecs.getComponents(playerID).get(Position_1.Position);
        const x = pos.x;
        const y = pos.y;
        for (let key of game.keyDown) {
            switch (key) {
                case Key_1.Key.A:
                case Key_1.Key.LEFT:
                    pos.x -= 1;
                    break;
                case Key_1.Key.S:
                case Key_1.Key.DOWN:
                    pos.y += 1;
                    break;
                case Key_1.Key.D:
                case Key_1.Key.RIGHT:
                    pos.x += 1;
                    break;
                case Key_1.Key.W:
                case Key_1.Key.UP:
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
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class PortalSystem extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Portal_1.Portal, Render_1.Render]);
    }
    update(game, entities) {
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
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class RenderSystem extends System_1.System {
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
    update(game, entities) {
        const xMod = this.ecs.getBB('x mod');
        const yMod = this.ecs.getBB('y mod');
        game.ctx.font = '20px Arial';
        for (let entity of entities.values()) {
            // get components
            const render = this.ecs.getComponents(entity).get(Render_1.Render);
            const pos = this.ecs.getComponents(entity).get(Position_1.Position);
            // render
            game.ctx.fillStyle = this.charToColor[render.character];
            game.ctx.fillText(render.character, pos.x * xMod, pos.y * yMod);
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
const System_1 = __webpack_require__(/*! ../../Engine/System */ "./src/Engine/System.ts");
const MenuText_1 = __webpack_require__(/*! ../../Components/SelectionScene/MenuText */ "./src/Components/SelectionScene/MenuText.ts");
class RenderMenuTextSystem extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([MenuText_1.MenuText]);
    }
    update(game, entities) {
        const minY = 100;
        const maxY = game.height - 40;
        const yMod = 20;
        const maxOrder = (maxY - minY) / yMod;
        game.ctx.font = "15px Arial";
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
                const txtMeasure = game.ctx.measureText(m.name);
                game.ctx.fillStyle = 'white';
                game.ctx.fillRect(x - 1.0, y - yMod * 0.7, txtMeasure.width * 1.1, yMod);
                game.ctx.fillStyle = 'black';
                game.ctx.fillText(m.name, x, y);
            }
            else {
                game.ctx.fillStyle = 'white';
                game.ctx.fillText(m.name, x, y);
            }
        }
        game.ctx.font = "30px Arial";
        game.ctx.fillStyle = 'white';
        game.ctx.fillText('Level Select', game.width / 2.5, 45);
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
const System_1 = __webpack_require__(/*! ../../Engine/System */ "./src/Engine/System.ts");
const MenuText_1 = __webpack_require__(/*! ../../Components/SelectionScene/MenuText */ "./src/Components/SelectionScene/MenuText.ts");
const Key_1 = __webpack_require__(/*! ../../Engine/Key */ "./src/Engine/Key.ts");
class UpdateSelected extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([MenuText_1.MenuText]);
        this.lastUpdate = 10;
    }
    update(game, entities) {
        this.lastUpdate += game.delta;
        if (this.lastUpdate < 0.2) {
            return;
        }
        let keyPress = Key_1.Key.INVALID;
        for (let key of game.keyDown) {
            if (key == Key_1.Key.DOWN || key == Key_1.Key.UP || Key_1.Key.RIGHT || Key_1.Key.LEFT) {
                keyPress = key;
                break;
            }
        }
        if (keyPress == Key_1.Key.INVALID) {
            return;
        }
        // get selected entity and new entity index
        let selectedEntity = this.ecs.getBB('selected');
        const lvlsPerColumn = 18;
        let newEntity;
        if (keyPress == Key_1.Key.UP || keyPress == Key_1.Key.W) {
            newEntity = selectedEntity - 1;
        }
        else if (keyPress == Key_1.Key.DOWN || keyPress == Key_1.Key.S) {
            newEntity = selectedEntity + 1;
        }
        else if (keyPress == Key_1.Key.RIGHT || keyPress == Key_1.Key.D) {
            newEntity = selectedEntity + lvlsPerColumn;
        }
        else if (keyPress == Key_1.Key.LEFT || keyPress == Key_1.Key.A) {
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
const System_1 = __webpack_require__(/*! ../Engine/System */ "./src/Engine/System.ts");
class SwitchCollision extends System_1.System {
    constructor() {
        super(...arguments);
        this.componentsRequired = new Set([Switch_1.Switch]);
    }
    update(game, entities) {
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
const Game_1 = __webpack_require__(/*! ./Engine/Game */ "./src/Engine/Game.ts");
const GameScene_1 = __webpack_require__(/*! ./Scenes/GameScene */ "./src/Scenes/GameScene.ts");
const PlayerLostScene_1 = __webpack_require__(/*! ./Scenes/PlayerLostScene */ "./src/Scenes/PlayerLostScene.ts");
const PlayerWonScene_1 = __webpack_require__(/*! ./Scenes/PlayerWonScene */ "./src/Scenes/PlayerWonScene.ts");
const SelectionScene_1 = __webpack_require__(/*! ./Scenes/SelectionScene */ "./src/Scenes/SelectionScene.ts");
const StartScene_1 = __webpack_require__(/*! ./Scenes/StartScene */ "./src/Scenes/StartScene.ts");
const game = new Game_1.Game();
const startScene = new StartScene_1.StartScene();
const selectionScene = new SelectionScene_1.SelectionScene();
const gameScene = new GameScene_1.GameScene();
const playerLostScene = new PlayerLostScene_1.PlayerLostScene();
const playerWonScene = new PlayerWonScene_1.PlayerWonScene();
const startIndex = game.addScene(startScene);
const selectionIndex = game.addScene(selectionScene);
const gameIndex = game.addScene(gameScene);
const lostIndex = game.addScene(playerLostScene);
const wonIndex = game.addScene(playerWonScene);
startScene.sceneIndex = selectionIndex;
selectionScene.sceneIndex = gameIndex;
gameScene.playerLostIndex = lostIndex;
gameScene.playerWonIndex = wonIndex;
gameScene.selfIndex = gameIndex;
gameScene.mainMenuIndex = startIndex;
playerLostScene.sceneIndex = startIndex;
playerWonScene.sceneIndex = startIndex;
game.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9FbmVteS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Nb3ZhYmxlLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1BsYXllci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Qb3J0YWwudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUmVuZGVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1N3aXRjaC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL0VDU1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9FbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL0tleS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9FbmdpbmUvU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvR2FtZVNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyTG9zdFNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyV29uU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9TZWxlY3Rpb25TY2VuZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1N0YXJ0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvRW5lbXlBSVN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9FbmVteUNvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9QbGF5ZXJDb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUGxheWVyU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1BvcnRhbFN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9SZW5kZXJTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvUmVuZGVyTWVudVRleHQudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvU2VsZWN0aW9uU2NlbmUvVXBkYXRlU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvU3dpdGNoQ29sbGlzaW9uLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9sZXZlbHMudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29sbGlkZXIgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgQ29sbGlkZXIgZXh0ZW5kcyBDb21wb25lbnRfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29sbGlkZXIgPSBDb2xsaWRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteSA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBFbmVteSBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5FbmVteSA9IEVuZW15O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1vdmFibGUgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Nb3ZhYmxlID0gTW92YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXIgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3J0YWwgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3NpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLm9sZFggPSB4O1xuICAgICAgICB0aGlzLm9sZFkgPSB5O1xuICAgIH1cbiAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PSBvdGhlci54ICYmIHRoaXMueSA9PSBvdGhlci55O1xuICAgIH1cbiAgICBoYXNoKCkge1xuICAgICAgICAvLyBDYW50b3IgcGFpcmluZyBmdW5jdGlvblxuICAgICAgICByZXR1cm4gKCh0aGlzLnggKyB0aGlzLnkpICogKHRoaXMueCArIHRoaXMueSArIDEpIC8gMikgKyB0aGlzLnk7XG4gICAgfVxuICAgIHVwZGF0ZU9sZCgpIHtcbiAgICAgICAgdGhpcy5vbGRYID0gdGhpcy54O1xuICAgICAgICB0aGlzLm9sZFkgPSB0aGlzLnk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3NpdGlvbiA9IFBvc2l0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlciA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnRfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlciA9IFJlbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZW51VGV4dCA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBNZW51VGV4dCBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgb3JkZXIsIHNlbGVjdGVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVudVRleHQgPSBNZW51VGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Td2l0Y2ggPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlN3aXRjaCA9IFN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBleHBvcnRzLkNvbXBvbmVudCA9IHZvaWQgMDtcbmNsYXNzIENvbXBvbmVudCB7XG59XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmNsYXNzIENvbXBvbmVudENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubWFwLnNldChjb21wb25lbnQuY29uc3RydWN0b3IsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGdldChjb21wb25lbnRDbGFzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gICAgaGFzKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgICBoYXNBbGwoY29tcG9uZW50Q2xhc3Nlcykge1xuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY29tcG9uZW50Q2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcC5oYXMoY2xzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZGVsZXRlKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHRoaXMubWFwLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBDb21wb25lbnRDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRUNTU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKTtcbi8vIGh0dHBzOi8vbWF4d2VsbGZvcmJlcy5jb20vcG9zdHMvdHlwZXNjcmlwdC1lY3MtaW1wbGVtZW50YXRpb24vIGlzIHdoYXQgdGhpc1xuLy8gaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb2ZmIG9mLlxuY2xhc3MgRUNTU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gTWFpbiBzdGF0ZVxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIEJvb2trZWVwaW5nIGZvciBlbnRpdGllcy5cbiAgICAgICAgdGhpcy5uZXh0RW50aXR5SUQgPSAwO1xuICAgICAgICB0aGlzLmVudGl0aWVzVG9EZXN0cm95ID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgcmV0dXJuIC0xLiBBbnkgb3RoZXIgbnVtYmVycyB3aWxsIHRlbGwgdGhlIGdhbWUgZW5naW5lIHRvIGNoYW5nZVxuICAgICAqIHRoZSBzY2VuZSB0byB3aGF0ZXZlciBpbmRleCBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gY2FudmFzXG4gICAgICogQHBhcmFtIGtleVByZXNzZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoZ2FtZSkge1xuICAgICAgICAvLyBVcGRhdGUgYWxsIHN5c3RlbXMuIChMYXRlciwgd2UnbGwgYWRkIGEgd2F5IHRvIHNwZWNpZnkgdGhlXG4gICAgICAgIC8vIHVwZGF0ZSBvcmRlci4pXG4gICAgICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHRoaXMucHJpb3JpdGllcykge1xuICAgICAgICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5wcmlvcml0eVRvU3lzdGVtLmdldChwcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpO1xuICAgICAgICAgICAgc3lzdGVtLnVwZGF0ZShnYW1lLCBjb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgYW55IGVudGl0aWVzIHRoYXQgd2VyZSBtYXJrZWQgZm9yIGRlbGV0aW9uIGR1cmluZyB0aGVcbiAgICAgICAgLy8gdXBkYXRlLlxuICAgICAgICB3aGlsZSAodGhpcy5lbnRpdGllc1RvRGVzdHJveS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lFbnRpdHkodGhpcy5lbnRpdGllc1RvRGVzdHJveS5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVXBkYXRlKGdhbWUpO1xuICAgIH1cbiAgICAvLyBBUEk6IEVudGl0aWVzXG4gICAgYWRkRW50aXR5KCkge1xuICAgICAgICBsZXQgZW50aXR5ID0gdGhpcy5uZXh0RW50aXR5SUQ7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEKys7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuc2V0KGVudGl0eSwgbmV3IENvbXBvbmVudF8xLkNvbXBvbmVudENvbnRhaW5lcigpKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFya3MgYGVudGl0eWAgZm9yIHJlbW92YWwuIFRoZSBhY3R1YWwgcmVtb3ZhbCBoYXBwZW5zIGF0IHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgbmV4dCBgdXBkYXRlKClgLiBUaGlzIHdheSB3ZSBhdm9pZCBzdWJ0bGUgYnVncyB3aGVyZSBhblxuICAgICAqIEVudGl0eSBpcyByZW1vdmVkIG1pZC1gdXBkYXRlKClgLCB3aXRoIHNvbWUgU3lzdGVtcyBzZWVpbmcgaXQgYW5kXG4gICAgICogb3RoZXJzIG5vdC5cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kucHVzaChlbnRpdHkpO1xuICAgIH1cbiAgICBhZGRDb21wb25lbnQoZW50aXR5LCBjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KS5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jaGVja0UoZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50cyhlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZ2V0KGVudGl0eSk7XG4gICAgfVxuICAgIHJlbW92ZUNvbXBvbmVudChlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuY2hlY2tFKGVudGl0eSk7XG4gICAgfVxuICAgIHNldEJCKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZC5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgICBnZXRCQihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxhY2tCb2FyZC5nZXQoa2V5KTtcbiAgICB9XG4gICAgLy8gQVBJOiBTeXN0ZW1zXG4gICAgLyoqXG4gICAgICogQWRkIGEgc3lzdGVtIHdoZXJlIHRoZSBwcmlvcml0eSBkZWZpbmVzIGluIHdoYXQgb3JkZXIgaXQgd2lsbCBiZSBydW4gd2hlblxuICAgICAqIGNvbXBhcmVkIHRvIG90aGVyIHN5c3RlbXNcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgLSBsb3dlciB2YWx1ZSBpcyBydW4gZmlyc3RcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgYWRkU3lzdGVtKHByaW9yaXR5LCBzeXN0ZW0pIHtcbiAgICAgICAgLy8gU3lzdGVtIG11c3QgcmVxdWlyZSBhdCBsZWFzdCBvbmUgY29tcG9uZW50ICAgIFxuICAgICAgICBpZiAoc3lzdGVtLmNvbXBvbmVudHNSZXF1aXJlZC5zaXplID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N5c3RlbSBub3QgYWRkZWQ6IGVtcHR5IENvbXBvbmVudHMgbGlzdC4nICsgc3lzdGVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmlvcml0aWVzLmluY2x1ZGVzKHByaW9yaXR5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtzeXN0ZW19IGNhbiBub3QgYmUgdXNlZCBzaW5jZSBwcmlvcml0eSAke3ByaW9yaXR5fSBhbHJlYWR5IGluIHVzZS5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBHaXZlIHN5c3RlbSBhIHJlZmVyZW5jZSB0byB0aGUgRUNTIHNvIGl0IGNhbiBhY3R1YWxseSBkb1xuICAgICAgICAvLyBhbnl0aGluZy5cbiAgICAgICAgc3lzdGVtLmVjcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbS5zZXQocHJpb3JpdHksIHN5c3RlbSk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuc2V0KHByaW9yaXR5LCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLnByaW9yaXRpZXMucHVzaChwcmlvcml0eSk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5zb3J0KCk7XG4gICAgICAgIC8vIFNhdmUgc3lzdGVtIGFuZCBzZXQgd2hvIGl0IHNob3VsZCB0cmFjayBpbW1lZGlhdGVseS5cbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMua2V5cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRVMoZW50aXR5LCBwcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uY2xlYXIoKTtcbiAgICAgICAgdGhpcy5ibGFja0JvYXJkLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLm5leHRFbnRpdHlJRCA9IDA7XG4gICAgfVxuICAgIGRlc3Ryb3lFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgZm9yIChsZXQgcHJpb3JpdHkgb2YgdGhpcy5wcmlvcml0aWVzKSB7XG4gICAgICAgICAgICAoX2EgPSB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAVE9ETzogY2FuIEkgcmVtb3ZlIHRoaXM/XG4gICAgY2hlY2tFKGVudGl0eSkge1xuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJIHRoaW5rIHRoaXMgY2FuIGJlIHJlbW92ZWQgYnV0IEknbSBnb2luZyB0byBsZWF2ZSBpdCBpbiBmb3Igbm93LlxuICAgICAqIEBwYXJhbSBlbnRpdHlcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgY2hlY2tFUyhlbnRpdHksIHByaW9yaXR5KSB7XG4gICAgICAgIGxldCBoYXZlID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KTtcbiAgICAgICAgbGV0IG5lZWQgPSB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uZ2V0KHByaW9yaXR5KS5jb21wb25lbnRzUmVxdWlyZWQ7XG4gICAgICAgIGlmIChoYXZlLmhhc0FsbChuZWVkKSkge1xuICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGluIHN5c3RlbVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpLmFkZChlbnRpdHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gc2hvdWxkIG5vdCBiZSBpbiBzeXN0ZW1cbiAgICAgICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KS5kZWxldGUoZW50aXR5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRUNTU2NlbmUgPSBFQ1NTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lID0gdm9pZCAwO1xuY29uc3QgS2V5XzEgPSByZXF1aXJlKFwiLi9LZXlcIik7XG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5rZXlEb3duID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmtleVByZXNzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSk7XG4gICAgICAgICAgICBpZiAoayA9PSBLZXlfMS5LZXkuRE9XTiB8fCBrID09IEtleV8xLktleS5VUCB8fCBrID09IEtleV8xLktleS5MRUZUIHx8IGsgPT0gS2V5XzEuS2V5LlJJR0hUKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmtleURvd24uaGFzKGspKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlEb3duLmFkZChrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrID0gKDAsIEtleV8xLmtleUNvZGVUb0tleSkoZS5rZXkpO1xuICAgICAgICAgICAgdGhpcy5rZXlEb3duLmRlbGV0ZShrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleVByZXNzLmFkZCgoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5kZWx0YSA9IDA7XG4gICAgfVxuICAgIDtcbiAgICBzZXRCQihrZXksIHZhbCkge1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQuc2V0KGtleSwgdmFsKTtcbiAgICB9XG4gICAgZ2V0QkIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsYWNrQm9hcmQuZ2V0KGtleSk7XG4gICAgfVxuICAgIGFkZFNjZW5lKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmVzLnB1c2goc2NlbmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBvbGRUaW1lU3RhbXA7XG4gICAgICAgIGxldCBmcHM7XG4gICAgICAgIHRoaXMuc2NlbmVzW3RoaXMuc2NlbmVJbmRleF0ub25FbnRlcih0aGlzKTtcbiAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSAodGltZVN0YW1wKSA9PiB7XG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBzZWNvbmRzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICAgICAgdGhpcy5kZWx0YSA9ICh0aW1lU3RhbXAgLSBvbGRUaW1lU3RhbXApIC8gMTAwMDtcbiAgICAgICAgICAgIG9sZFRpbWVTdGFtcCA9IHRpbWVTdGFtcDtcbiAgICAgICAgICAgIGZwcyA9IE1hdGgucm91bmQoMSAvIHRoaXMuZGVsdGEpO1xuICAgICAgICAgICAgLy8gcmVzZXQgYmFja2dyb3VuZFxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIGdhbWUgZW5naW5lIG9wZXJhdGlvbnNcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgICAgICAvLyBEcmF3IEZQU1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9ICcxMnB4IEFyaWFsJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZWQnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJGUFM6IFwiICsgZnBzLCB0aGlzLndpZHRoIC0gNjAsIDMwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS51cGRhdGUodGhpcyk7XG4gICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkV4aXQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSBpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkVudGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5UHJlc3MuY2xlYXIoKTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWUgPSBHYW1lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmtleUNvZGVUb0tleSA9IGV4cG9ydHMuS2V5ID0gdm9pZCAwO1xudmFyIEtleTtcbihmdW5jdGlvbiAoS2V5KSB7XG4gICAgS2V5W0tleVtcIkxFRlRcIl0gPSAwXSA9IFwiTEVGVFwiO1xuICAgIEtleVtLZXlbXCJSSUdIVFwiXSA9IDFdID0gXCJSSUdIVFwiO1xuICAgIEtleVtLZXlbXCJET1dOXCJdID0gMl0gPSBcIkRPV05cIjtcbiAgICBLZXlbS2V5W1wiVVBcIl0gPSAzXSA9IFwiVVBcIjtcbiAgICBLZXlbS2V5W1wiV1wiXSA9IDRdID0gXCJXXCI7XG4gICAgS2V5W0tleVtcIkFcIl0gPSA1XSA9IFwiQVwiO1xuICAgIEtleVtLZXlbXCJTXCJdID0gNl0gPSBcIlNcIjtcbiAgICBLZXlbS2V5W1wiRFwiXSA9IDddID0gXCJEXCI7XG4gICAgS2V5W0tleVtcIlFcIl0gPSA4XSA9IFwiUVwiO1xuICAgIEtleVtLZXlbXCJSXCJdID0gOV0gPSBcIlJcIjtcbiAgICBLZXlbS2V5W1wiU1BBQ0VcIl0gPSAxMF0gPSBcIlNQQUNFXCI7XG4gICAgS2V5W0tleVtcIkVTQ0FQRVwiXSA9IDExXSA9IFwiRVNDQVBFXCI7XG4gICAgS2V5W0tleVtcIkVOVEVSXCJdID0gMTJdID0gXCJFTlRFUlwiO1xuICAgIEtleVtLZXlbXCJJTlZBTElEXCJdID0gMTNdID0gXCJJTlZBTElEXCI7XG59KShLZXkgPSBleHBvcnRzLktleSB8fCAoZXhwb3J0cy5LZXkgPSB7fSkpO1xuZnVuY3Rpb24ga2V5Q29kZVRvS2V5KGtleSkge1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ0Rvd24nOlxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5ET1dOO1xuICAgICAgICBjYXNlICdVcCc6XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5VUDtcbiAgICAgICAgY2FzZSAnUmlnaHQnOlxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUklHSFQ7XG4gICAgICAgIGNhc2UgJ0xlZnQnOlxuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5MRUZUO1xuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgY2FzZSAnU3BhY2UnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5TUEFDRTtcbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRVNDQVBFO1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuQTtcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlM7XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5EO1xuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuVztcbiAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlI7XG4gICAgICAgIGNhc2UgJ3EnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5RO1xuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkVOVEVSO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmhhbmRsZWQga2V5OiAke2tleX0uYCk7XG4gICAgICAgICAgICByZXR1cm4gS2V5LklOVkFMSUQ7XG4gICAgfVxufVxuZXhwb3J0cy5rZXlDb2RlVG9LZXkgPSBrZXlDb2RlVG9LZXk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2NlbmUgPSB2b2lkIDA7XG5jbGFzcyBTY2VuZSB7XG59XG5leHBvcnRzLlNjZW5lID0gU2NlbmU7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3lzdGVtID0gdm9pZCAwO1xuY2xhc3MgU3lzdGVtIHtcbn1cbmV4cG9ydHMuU3lzdGVtID0gU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IEVDU1NjZW5lXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0VDU1NjZW5lXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBQbGF5ZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1BsYXllclwiKTtcbmNvbnN0IGxldmVsc18xID0gcmVxdWlyZShcIi4uL2xldmVsc1wiKTtcbmNvbnN0IFJlbmRlclN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUmVuZGVyU3lzdGVtXCIpO1xuY29uc3QgUG9ydGFsXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3J0YWxcIik7XG5jb25zdCBQb3J0YWxTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1BvcnRhbFN5c3RlbVwiKTtcbmNvbnN0IFBsYXllclN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUGxheWVyU3lzdGVtXCIpO1xuY29uc3QgS2V5XzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0tleVwiKTtcbmNvbnN0IEVuZW15QUlTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL0VuZW15QUlTeXN0ZW1cIik7XG5jb25zdCBNb3ZhYmxlXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Nb3ZhYmxlXCIpO1xuY29uc3QgU3dpdGNoXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Td2l0Y2hcIik7XG5jb25zdCBTd2l0Y2hDb2xsaXNpb25fMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1N3aXRjaENvbGxpc2lvblwiKTtcbmNvbnN0IEVuZW15XzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9FbmVteVwiKTtcbmNvbnN0IEVuZW15Q29sbGlzaW9uXzEgPSByZXF1aXJlKFwiLi4vU3lzdGVtcy9FbmVteUNvbGxpc2lvblwiKTtcbmNvbnN0IFBsYXllckNvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUGxheWVyQ29sbGlzaW9uXCIpO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgRUNTU2NlbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyV29uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnBsYXllckxvc3RJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VsZkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5tYWluTWVudUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZXRCQignZ2FtZSBvdmVyJywgMCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3Jlc3RhcnQnLCBmYWxzZSk7XG4gICAgfVxuICAgIG9uRW50ZXIoZ2FtZSkge1xuICAgICAgICBjb25zdCB4TW9kID0gMjA7XG4gICAgICAgIGNvbnN0IHlNb2QgPSAyMDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IDg7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSA3O1xuICAgICAgICBsZXQgeE1pbiA9IDEwMDA7XG4gICAgICAgIGxldCB4TWF4ID0gMDtcbiAgICAgICAgbGV0IHlNaW4gPSAxMDAwO1xuICAgICAgICBsZXQgeU1heCA9IDA7XG4gICAgICAgIGxldCBzd2l0Y2hDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGx2bEtleSA9IGdhbWUuZ2V0QkIoJ2xldmVsJyk7XG4gICAgICAgIGNvbnN0IGx2bCA9IGxldmVsc18xLkxFVkVMU1tsdmxLZXldO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGx2bC5sZW5ndGg7ICsreSkge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsdmxbeV0ubGVuZ3RoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gbHZsW3ldW3hdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4UG9zID0gb2Zmc2V0WCArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgeVBvcyA9IG9mZnNldFkgKyB5O1xuICAgICAgICAgICAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4UG9zKTtcbiAgICAgICAgICAgICAgICB4TWF4ID0gTWF0aC5tYXgoeE1heCwgeFBvcyk7XG4gICAgICAgICAgICAgICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlQb3MpO1xuICAgICAgICAgICAgICAgIHlNYXggPSBNYXRoLm1heCh5TWF4LCB5UG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUmVuZGVyXzEuUmVuZGVyKGNoYXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFBvc2l0aW9uXzEuUG9zaXRpb24oeFBvcywgeVBvcykpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09ICdPJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFBvcnRhbF8xLlBvcnRhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCQigncG9ydGFsIGlkJywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFBsYXllcl8xLlBsYXllcigpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBNb3ZhYmxlXzEuTW92YWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCQigncGxheWVyIGlkJywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFN3aXRjaF8xLlN3aXRjaCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBNb3ZhYmxlXzEuTW92YWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBFbmVteV8xLkVuZW15KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdeJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IEVuZW15XzEuRW5lbXkoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT0gJ1gnIHx8IGNoYXIgPT0gJ1xcXFwnIHx8IGNoYXIgPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgQ29sbGlkZXJfMS5Db2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coeU1pbik7XG4gICAgICAgIGZvciAobGV0IHkgPSAzOyB5IDwgZ2FtZS5oZWlnaHQgLyB5TW9kIC0gMTsgKyt5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMTsgeCA8IGdhbWUud2lkdGggLyB4TW9kIC0gMTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPCB4TWluIHx8IHggPiB4TWF4IHx8IHkgPCB5TWluIHx8IHkgPiB5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBSZW5kZXJfMS5SZW5kZXIoJ1gnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUG9zaXRpb25fMS5Qb3NpdGlvbih4LCB5KSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09IHhNaW4gLSAxIHx8IHkgPT0geU1pbiAtIDEgfHwgeCA9PSB4TWF4ICsgMSB8fCB5ID09IHlNYXggKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IENvbGxpZGVyXzEuQ29sbGlkZXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBDb2xsaWRlcigpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRCQignc3dpdGNoIGNvdW50Jywgc3dpdGNoQ291bnQpO1xuICAgICAgICB0aGlzLnNldEJCKCdvZmZzZXQgeCcsIG9mZnNldFgpO1xuICAgICAgICB0aGlzLnNldEJCKCdvZmZzZXQgeScsIG9mZnNldFkpO1xuICAgICAgICB0aGlzLnNldEJCKCd4IG1vZCcsIHhNb2QpO1xuICAgICAgICB0aGlzLnNldEJCKCd5IG1vZCcsIHlNb2QpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgUGxheWVyU3lzdGVtXzEuUGxheWVyU3lzdGVtKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgxMCwgbmV3IFBsYXllckNvbGxpc2lvbl8xLlBsYXllckNvbGxpc2lvbigpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMjAsIG5ldyBFbmVteUFJU3lzdGVtXzEuRW5lbXlBSVN5c3RlbSgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oNDAsIG5ldyBFbmVteUNvbGxpc2lvbl8xLkVuZW15Q29sbGlzaW9uKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg1MCwgbmV3IFN3aXRjaENvbGxpc2lvbl8xLlN3aXRjaENvbGxpc2lvbigpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oOTAsIG5ldyBQb3J0YWxTeXN0ZW1fMS5Qb3J0YWxTeXN0ZW0oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwMCwgbmV3IFJlbmRlclN5c3RlbV8xLlJlbmRlclN5c3RlbSgpKTtcbiAgICB9XG4gICAgb25FeGl0KGdhbWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICBjdXN0b21VcGRhdGUoZ2FtZSkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IHRoaXMuZ2V0QkIoJ2dhbWUgb3ZlcicpO1xuICAgICAgICBpZiAoZ2FtZU92ZXIgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllckxvc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lT3ZlciA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJXb25JbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lLmtleURvd24uaGFzKEtleV8xLktleS5SKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdhbWUua2V5RG93bi5oYXMoS2V5XzEuS2V5LlEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluTWVudUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWVTY2VuZSA9IEdhbWVTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJMb3N0U2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TY2VuZVwiKTtcbmNsYXNzIFBsYXllckxvc3RTY2VuZSBleHRlbmRzIFNjZW5lXzEuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FbnRlcihnYW1lKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkV4aXQoZ2FtZSkgeyB9XG4gICAgdXBkYXRlKGdhbWUpIHtcbiAgICAgICAgdGhpcy50aW1lciArPSBnYW1lLmRlbHRhO1xuICAgICAgICBpZiAodGhpcy50aW1lciA+IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnYW1lLmN0eC5mb250ID0gJzQwcHggQXJpYWwnO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KCdZb3UgTG9zdCEgOi8nLCBnYW1lLndpZHRoIC8gMy41LCBnYW1lLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXJMb3N0U2NlbmUgPSBQbGF5ZXJMb3N0U2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyV29uU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TY2VuZVwiKTtcbmNsYXNzIFBsYXllcldvblNjZW5lIGV4dGVuZHMgU2NlbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkVudGVyKGdhbWUpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRXhpdChnYW1lKSB7IH1cbiAgICB1cGRhdGUoZ2FtZSkge1xuICAgICAgICB0aGlzLnRpbWVyICs9IGdhbWUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1lvdSBXb24hIE5pY2UhJywgZ2FtZS53aWR0aCAvIDMuNSwgZ2FtZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyV29uU2NlbmUgPSBQbGF5ZXJXb25TY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZWxlY3Rpb25TY2VuZSA9IHZvaWQgMDtcbmNvbnN0IEVDU1NjZW5lXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0VDU1NjZW5lXCIpO1xuY29uc3QgbGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vbGV2ZWxzXCIpO1xuY29uc3QgTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0XCIpO1xuY29uc3QgVXBkYXRlU2VsZWN0ZWRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1VwZGF0ZVNlbGVjdGVkXCIpO1xuY29uc3QgUmVuZGVyTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1JlbmRlck1lbnVUZXh0XCIpO1xuY29uc3QgS2V5XzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0tleVwiKTtcbmNsYXNzIFNlbGVjdGlvblNjZW5lIGV4dGVuZHMgRUNTU2NlbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBsZXZlbHNfMS5MRVZFTFMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvcnRlZExldmVscy5zb3J0KCk7XG4gICAgfVxuICAgIG9uRW50ZXIoZ2FtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydGVkTGV2ZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkRW50aXR5KCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGkgPT0gMDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgTWVudVRleHRfMS5NZW51VGV4dCh0aGlzLnNvcnRlZExldmVsc1tpXSwgaSwgc2VsZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJCKCdzZWxlY3RlZCcsIDApO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgVXBkYXRlU2VsZWN0ZWRfMS5VcGRhdGVTZWxlY3RlZCgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMTAsIG5ldyBSZW5kZXJNZW51VGV4dF8xLlJlbmRlck1lbnVUZXh0U3lzdGVtKCkpO1xuICAgIH1cbiAgICBvbkV4aXQoZ2FtZSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIGN1c3RvbVVwZGF0ZShnYW1lKSB7XG4gICAgICAgIGlmIChnYW1lLmtleURvd24uaGFzKEtleV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGdhbWUuc2V0QkIoJ2xldmVsJywgdGhpcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkKS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnRzLlNlbGVjdGlvblNjZW5lID0gU2VsZWN0aW9uU2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RhcnRTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IEtleV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9LZXlcIik7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TY2VuZVwiKTtcbmNsYXNzIFN0YXJ0U2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZ2FtZSkgeyB9XG4gICAgb25FeGl0KGdhbWUpIHsgfVxuICAgIHVwZGF0ZShnYW1lKSB7XG4gICAgICAgIGlmIChnYW1lLmtleURvd24uaGFzKEtleV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIGdhbWUua2V5RG93bi5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ0R1bmdlb25HcmFtcycsIDIyMCwgMTAwKTtcbiAgICAgICAgICAgIGdhbWUuY3R4LmZvbnQgPSAnMjBweCBBcmlhbCc7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnUHJlc3MgRW50ZXIgdG8gc3RhcnQnLCAyNzUsIDE1MCk7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KCcmIGdpdmVzIHlvdSBzdGFtaW5hJywgNDAsIDIwMCk7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnQ29sbGVjdCBhbGwgKiB0byBvcGVuIHRoZSBwb3J0YWwuJywgNDAsIDIyMik7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnU3RlcCB0aHJvdWdoIHRoZSBwb3J0YWwgTyB0byB3aW4hJywgNDAsIDI0NCk7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnQnV0IG1ha2Ugc3VyZSB0byBhdm9pZCB0aGUgZW5lbWllcyAjIGFuZCB0cmFwcyBeJywgNDAsIDI2Nik7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1dBU0QgdG8gbW92ZScsIDQwLCAzNTApO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1IgdG8gcmVzdGFydCcsIDQwLCAzNzUpO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1EgdG8gcXVpdCcsIDQwLCA0MDApO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5TdGFydFNjZW5lID0gU3RhcnRTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteUFJU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvU3lzdGVtXCIpO1xuY2xhc3MgRW5lbXlBSVN5c3RlbSBleHRlbmRzIFN5c3RlbV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9zaXRpb25fMS5Qb3NpdGlvbiwgUmVuZGVyXzEuUmVuZGVyLCBDb2xsaWRlcl8xLkNvbGxpZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICAvLyBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb24pO1xuICAgICAgICAvLyBsZXQgY29sbGlzaW9uRm91bmQgPSBmYWxzZTtcbiAgICAgICAgLy8gZm9yKGxldCBpZCBvZiBlbnRpdGllcykge1xuICAgICAgICAvLyAgIGNvbnN0IGJsb2NrUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFBvc2l0aW9uKTtcbiAgICAgICAgLy8gICBpZihwbGF5ZXJQb3MuZXF1YWxzKGJsb2NrUG9zKSkge1xuICAgICAgICAvLyAgICAgcGxheWVyUG9zLnggPSBwbGF5ZXJQb3Mub2xkWDtcbiAgICAgICAgLy8gICAgIHBsYXllclBvcy55ID0gcGxheWVyUG9zLm9sZFk7XG4gICAgICAgIC8vICAgICBjb2xsaXNpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKCFjb2xsaXNpb25Gb3VuZCkge1xuICAgICAgICAvLyAgIHBsYXllclBvcy5vbGRYID0gcGxheWVyUG9zLng7XG4gICAgICAgIC8vICAgcGxheWVyUG9zLm9sZFkgPSBwbGF5ZXJQb3MueTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cbmV4cG9ydHMuRW5lbXlBSVN5c3RlbSA9IEVuZW15QUlTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRW5lbXlDb2xsaXNpb24gPSB2b2lkIDA7XG5jb25zdCBFbmVteV8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvRW5lbXlcIik7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvU3lzdGVtXCIpO1xuY2xhc3MgRW5lbXlDb2xsaXNpb24gZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW0VuZW15XzEuRW5lbXldKTtcbiAgICB9XG4gICAgdXBkYXRlKGdhbWUsIGVudGl0aWVzKSB7XG4gICAgICAgIC8vIGNvbnN0IHBsYXllcklEID0gdGhpcy5lY3MuYmxhY2tCb2FyZC5nZXQoJ3BsYXllciBpZCcpO1xuICAgICAgICBjb25zdCBwbGF5ZXJJRCA9IHRoaXMuZWNzLmdldEJCKCdwbGF5ZXIgaWQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhwbGF5ZXJJRCkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICBmb3IgKGxldCBpZCBvZiBlbnRpdGllcykge1xuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHBvcy5lcXVhbHMocGxheWVyUG9zKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWNzLnNldEJCKCdnYW1lIG92ZXInLCAtMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkVuZW15Q29sbGlzaW9uID0gRW5lbXlDb2xsaXNpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyQ29sbGlzaW9uID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL1N5c3RlbVwiKTtcbmNsYXNzIFBsYXllckNvbGxpc2lvbiBleHRlbmRzIFN5c3RlbV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbQ29sbGlkZXJfMS5Db2xsaWRlcl0pO1xuICAgIH1cbiAgICB1cGRhdGUoZ2FtZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChwb3MuZXF1YWxzKHBsYXllclBvcykpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3MueCA9IHBsYXllclBvcy5vbGRYO1xuICAgICAgICAgICAgICAgIHBsYXllclBvcy55ID0gcGxheWVyUG9zLm9sZFk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGxheWVyUG9zLnVwZGF0ZU9sZCgpO1xuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyQ29sbGlzaW9uID0gUGxheWVyQ29sbGlzaW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsYXllclN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IFBsYXllcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUGxheWVyXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvS2V5XCIpO1xuY29uc3QgU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL1N5c3RlbVwiKTtcbmNsYXNzIFBsYXllclN5c3RlbSBleHRlbmRzIFN5c3RlbV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9zaXRpb25fMS5Qb3NpdGlvbiwgUmVuZGVyXzEuUmVuZGVyLCBQbGF5ZXJfMS5QbGF5ZXJdKTtcbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0TW92ZSA9IDU7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlICs9IGdhbWUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlIDwgMC4wOCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPSAwO1xuICAgICAgICBsZXQgcGxheWVySUQgPSBlbnRpdGllcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IHggPSBwb3MueDtcbiAgICAgICAgY29uc3QgeSA9IHBvcy55O1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZ2FtZS5rZXlEb3duKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5XzEuS2V5LkE6XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlfMS5LZXkuTEVGVDpcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlfMS5LZXkuUzpcbiAgICAgICAgICAgICAgICBjYXNlIEtleV8xLktleS5ET1dOOlxuICAgICAgICAgICAgICAgICAgICBwb3MueSArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleV8xLktleS5EOlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5XzEuS2V5LlJJR0hUOlxuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleV8xLktleS5XOlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5XzEuS2V5LlVQOlxuICAgICAgICAgICAgICAgICAgICBwb3MueSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGluIHRoZSBkZWZhdWx0IGNhc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyU3lzdGVtID0gUGxheWVyU3lzdGVtO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBvcnRhbFN5c3RlbSA9IHZvaWQgMDtcbmNvbnN0IFBvcnRhbF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9ydGFsXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvU3lzdGVtXCIpO1xuY2xhc3MgUG9ydGFsU3lzdGVtIGV4dGVuZHMgU3lzdGVtXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtQb3J0YWxfMS5Qb3J0YWwsIFJlbmRlcl8xLlJlbmRlcl0pO1xuICAgIH1cbiAgICB1cGRhdGUoZ2FtZSwgZW50aXRpZXMpIHtcbiAgICAgICAgY29uc3QgW2lkXSA9IGVudGl0aWVzOyAvLyB0aGVyZSBjYW4gb25seSBiZSBvbmUgcG9ydGFsXG4gICAgICAgIGlmICh0aGlzLmVjcy5nZXRCQignc3dpdGNoIGNvdW50JykgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFJlbmRlcl8xLlJlbmRlcikuY2hhcmFjdGVyID0gJ08nO1xuICAgICAgICAgICAgY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgICAgICBjb25zdCBwb3J0YWxQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUG9zaXRpb25fMS5Qb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAocGxheWVyUG9zLmVxdWFscyhwb3J0YWxQb3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ2dhbWUgb3ZlcicsIDEpOyAvLyBwbGF5ZXIgd29uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUmVuZGVyXzEuUmVuZGVyKS5jaGFyYWN0ZXIgPSAnbyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvcnRhbFN5c3RlbSA9IFBvcnRhbFN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IFN5c3RlbV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TeXN0ZW1cIik7XG5jbGFzcyBSZW5kZXJTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1Bvc2l0aW9uXzEuUG9zaXRpb24sIFJlbmRlcl8xLlJlbmRlcl0pO1xuICAgICAgICB0aGlzLmNoYXJUb0NvbG9yID0ge1xuICAgICAgICAgICAgJ0AnOiAnd2hpdGUnLFxuICAgICAgICAgICAgJy0nOiAnI2Q5ZDFkMCcsXG4gICAgICAgICAgICAnWCc6ICcjNjM2MzYzJyxcbiAgICAgICAgICAgICcqJzogJyMwY2NlZjAnLFxuICAgICAgICAgICAgJ1xcXFwnOiAnI2MzMDBkMScsXG4gICAgICAgICAgICAnLyc6ICcjYzMwMGQxJyxcbiAgICAgICAgICAgICdvJzogJyM0MTRkNDInLFxuICAgICAgICAgICAgJ08nOiAnIzE5ZjAwYScsXG4gICAgICAgICAgICAnIyc6ICdyZWQnLFxuICAgICAgICAgICAgJ14nOiAnI2YwY2QwYScsXG4gICAgICAgICAgICAnJic6ICcjMjU5YzJiJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKGdhbWUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IHhNb2QgPSB0aGlzLmVjcy5nZXRCQigneCBtb2QnKTtcbiAgICAgICAgY29uc3QgeU1vZCA9IHRoaXMuZWNzLmdldEJCKCd5IG1vZCcpO1xuICAgICAgICBnYW1lLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb21wb25lbnRzXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFJlbmRlcl8xLlJlbmRlcik7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNoYXJUb0NvbG9yW3JlbmRlci5jaGFyYWN0ZXJdO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQocmVuZGVyLmNoYXJhY3RlciwgcG9zLnggKiB4TW9kLCBwb3MueSAqIHlNb2QpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSBSZW5kZXJTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVuZGVyTWVudVRleHRTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9FbmdpbmUvU3lzdGVtXCIpO1xuY29uc3QgTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0XCIpO1xuY2xhc3MgUmVuZGVyTWVudVRleHRTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW01lbnVUZXh0XzEuTWVudVRleHRdKTtcbiAgICB9XG4gICAgdXBkYXRlKGdhbWUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IG1pblkgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFkgPSBnYW1lLmhlaWdodCAtIDQwO1xuICAgICAgICBjb25zdCB5TW9kID0gMjA7XG4gICAgICAgIGNvbnN0IG1heE9yZGVyID0gKG1heFkgLSBtaW5ZKSAvIHlNb2Q7XG4gICAgICAgIGdhbWUuY3R4LmZvbnQgPSBcIjE1cHggQXJpYWxcIjtcbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBjb25zdCBtID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhlbnRpdHkpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KTtcbiAgICAgICAgICAgIGxldCB4ID0gMjA7XG4gICAgICAgICAgICBsZXQgbyA9IG0ub3JkZXI7XG4gICAgICAgICAgICB3aGlsZSAobyA+IG1heE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgbyAtPSBtYXhPcmRlciArIDE7XG4gICAgICAgICAgICAgICAgeCArPSA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5ID0gbWluWSArIHlNb2QgKiBvO1xuICAgICAgICAgICAgaWYgKG0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eHRNZWFzdXJlID0gZ2FtZS5jdHgubWVhc3VyZVRleHQobS5uYW1lKTtcbiAgICAgICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxSZWN0KHggLSAxLjAsIHkgLSB5TW9kICogMC43LCB0eHRNZWFzdXJlLndpZHRoICogMS4xLCB5TW9kKTtcbiAgICAgICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KG0ubmFtZSwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KG0ubmFtZSwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZS5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnTGV2ZWwgU2VsZWN0JywgZ2FtZS53aWR0aCAvIDIuNSwgNDUpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyTWVudVRleHRTeXN0ZW0gPSBSZW5kZXJNZW51VGV4dFN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IHZvaWQgMDtcbmNvbnN0IFN5c3RlbV8xID0gcmVxdWlyZShcIi4uLy4uL0VuZ2luZS9TeXN0ZW1cIik7XG5jb25zdCBNZW51VGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvU2VsZWN0aW9uU2NlbmUvTWVudVRleHRcIik7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuLi8uLi9FbmdpbmUvS2V5XCIpO1xuY2xhc3MgVXBkYXRlU2VsZWN0ZWQgZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW01lbnVUZXh0XzEuTWVudVRleHRdKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gMTA7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgKz0gZ2FtZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFVwZGF0ZSA8IDAuMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlQcmVzcyA9IEtleV8xLktleS5JTlZBTElEO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZ2FtZS5rZXlEb3duKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09IEtleV8xLktleS5ET1dOIHx8IGtleSA9PSBLZXlfMS5LZXkuVVAgfHwgS2V5XzEuS2V5LlJJR0hUIHx8IEtleV8xLktleS5MRUZUKSB7XG4gICAgICAgICAgICAgICAga2V5UHJlc3MgPSBrZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleVByZXNzID09IEtleV8xLktleS5JTlZBTElEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGVudGl0eSBhbmQgbmV3IGVudGl0eSBpbmRleFxuICAgICAgICBsZXQgc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmVjcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgY29uc3QgbHZsc1BlckNvbHVtbiA9IDE4O1xuICAgICAgICBsZXQgbmV3RW50aXR5O1xuICAgICAgICBpZiAoa2V5UHJlc3MgPT0gS2V5XzEuS2V5LlVQIHx8IGtleVByZXNzID09IEtleV8xLktleS5XKSB7XG4gICAgICAgICAgICBuZXdFbnRpdHkgPSBzZWxlY3RlZEVudGl0eSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5UHJlc3MgPT0gS2V5XzEuS2V5LkRPV04gfHwga2V5UHJlc3MgPT0gS2V5XzEuS2V5LlMpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBLZXlfMS5LZXkuUklHSFQgfHwga2V5UHJlc3MgPT0gS2V5XzEuS2V5LkQpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBLZXlfMS5LZXkuTEVGVCB8fCBrZXlQcmVzcyA9PSBLZXlfMS5LZXkuQSkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgLSBsdmxzUGVyQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbnRpdGllcy5oYXMobmV3RW50aXR5KSkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlZCBzZWxlY3RlZFxuICAgICAgICB0aGlzLmVjcy5zZXRCQignc2VsZWN0ZWQnLCBuZXdFbnRpdHkpO1xuICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkRW50aXR5KS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhuZXdFbnRpdHkpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IFVwZGF0ZVNlbGVjdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN3aXRjaENvbGxpc2lvbiA9IHZvaWQgMDtcbmNvbnN0IFBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3NpdGlvblwiKTtcbmNvbnN0IFN3aXRjaF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvU3dpdGNoXCIpO1xuY29uc3QgU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL1N5c3RlbVwiKTtcbmNsYXNzIFN3aXRjaENvbGxpc2lvbiBleHRlbmRzIFN5c3RlbV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbU3dpdGNoXzEuU3dpdGNoXSk7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICBjb25zdCBwbGF5ZXJJRCA9IHRoaXMuZWNzLmdldEJCKCdwbGF5ZXIgaWQnKTtcbiAgICAgICAgY29uc3QgcGxheWVyUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhwbGF5ZXJJRCkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICBmb3IgKGxldCBpZCBvZiBlbnRpdGllcykge1xuICAgICAgICAgICAgY29uc3Qgc3dpdGNoUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICAgICAgaWYgKHN3aXRjaFBvcy5lcXVhbHMocGxheWVyUG9zKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN3aXRjaENvdW50ID0gdGhpcy5lY3MuZ2V0QkIoJ3N3aXRjaCBjb3VudCcpIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmVjcy5zZXRCQignc3dpdGNoIGNvdW50Jywgc3dpdGNoQ291bnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWNzLnJlbW92ZUVudGl0eShpZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlN3aXRjaENvbGxpc2lvbiA9IFN3aXRjaENvbGxpc2lvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5MRVZFTFMgPSB2b2lkIDA7XG5leHBvcnRzLkxFVkVMUyA9IHsgXCIxMV80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tLS0tWC0tXCIsIFwiLS0vLy0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tWC0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLS1YWC0tWC0tXCIsIFwiLS0mLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfOVwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tIy0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIxNV8wXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSYtLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl4tLS0tLS1eXl4tLV5eLS1cIiwgXCItLV5eXl4tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLSYtLVwiLCBcIi0tXl5eXi0tXl5eXl5eXl5eLS1cIiwgXCItLV5eLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tJi0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjlfMlwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tIy0tIy0tLS1YLSNYLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLVgtLVgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCIxXzEyXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSNYWFhYLS0tXCIsIFwiLS0tLS0tLS0mLS0tWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0qLS0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjFfMTNcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFgtLSNYWFhYLS1cIiwgXCItLS0tLS1YWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0qLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiOV8zXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tWC0tLS8vXFxcXC0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS1cXFxcXFxcXC8tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjE1XzFcIjogW1wiQC0tXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0qLS1cIiwgXCItLS1eXi0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS1eXi0tLVgjKi0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLV5eLS0tLVhYLS0tLV5eLS1cIiwgXCItLS1eXi0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLSotLVwiLCBcIi0tLV5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTdfM1wiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0jWC0tLS0tLS1eLS0tLS0tLVwiLCBcIi0tWFgtLS0tWC0tXi0tLS1YLS1cIiwgXCItLVgtLS0tWFgtLV4tLS1YWC0tXCIsIFwiLS0tLS0tWFhYLS1eLS1YWFgtLVwiLCBcIi0tLS0tLVgjKi0tLS0tWCMqLS1cIiwgXCItLS0tLS1YWFgtLSYtLVhYWC0tXCIsIFwiLS0tLS0tLVhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzhcIjogW1wiQC1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tWFgtLS1YWFgtLS0tXCIsIFwiLS1YWC0jLVhYLSMtWFhYLS0tLVwiLCBcIi0tWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLSpYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0tLS0tLS0mLS0tLU9cIl0sIFwiMTFfNVwiOiBbXCJALVhYWC0tXl5eXl5eXl5eXi0tXCIsIFwiLS0jWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLV5eXl5eXl5eXl4tT1wiXSwgXCIzXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0jWFhYWC0tI1hYWC0tXCIsIFwiLS0tJi0tLVhYWFgtLS1YWFgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLSotLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEzXzVcIjogW1wiQC1YWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tI1hYLS0tLS0tLS0tKiNYLS1cIiwgXCItLS1YWC0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tWFgtLS0tLVhYLS1YWC0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tWC0tLS1cIiwgXCItLS0tLS0tLS1YIyotLVgtLS0tXCIsIFwiLS0tLS0tLS0tWFhYLS1YLS0tLVwiLCBcIi0tLVhYLS0tLS1YWC0tWC0tLS1cIiwgXCItLS1YWC0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiM18xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLS0tLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzhcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLSpYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tLS0tLU9cIl0sIFwiMTFfN1wiOiBbXCJALV5eXl5eXl5eXl4tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLVgtLS0tWFhYLS1cIiwgXCItLVhYWC0tLVhYLS0tLVhYWC0tXCIsIFwiLS1YKlgtLVhYWC0tLS1YWC0tLVwiLCBcIi0tWCYtLS1YIyotLS0tWFgtLS1cIiwgXCItLVgqWC0tWFhYLS0tLS0tLS0tXCIsIFwiLS1YWFgtLS1YWC0tLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVgtLS0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVhYWC0tXCIsIFwiLS1eXl5eXl5eXl5eLS1YWFgtT1wiXSwgXCIxNV8zXCI6IFtcIkAtLS1eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS0tLS0tLS1YLS1eLS0tLVgtLVwiLCBcIi0tLS0tLS1YWC0tXi0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLV4tLVhYWC0tXCIsIFwiLS0tLS0tWCMqLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYWC0tJi0tWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjFfMTFcIjogW1wiQC1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLSpYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLSYtLS0tLU9cIl0sIFwiOV8xXCI6IFtcIkAtLS0tLS0tLS0tXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0jLS0jLS0tLS1YLSMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLVgtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLV5eXl5eXi1PXCJdLCBcIjlfMFwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLSYtLS1cIiwgXCItLS0tLS0tLS0tLS1eXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1eXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLSYtLVhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzJcIjogW1wiQC0tXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tLV5eXi0tLS0tLS0tLSojLS1cIiwgXCItLS1eXl4tLS0tLS1YLS1YWC0tXCIsIFwiLS0tXl5eLS0tLS1YWC0tWFgtLVwiLCBcIi0tLS0qLS0tLS1YWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tWCMqLS1YLS0tXCIsIFwiLS0tLSYtLS0tLVhYWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS0tWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tLS1YLS1YLS0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eXi0tXl5eXl5eXl5eLU9cIl0sIFwiMTFfNlwiOiBbXCJALV5eXl5eXl5eXl4tLVhYWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tI1gtI1gtI1gtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLVhYLS0tXCIsIFwiLS1eXl5eXl5eXl5eLS1YWFgtT1wiXSwgXCIxXzlcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFhYWC0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLSpYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tWFgtLU9cIl0sIFwiM18xNVwiOiBbXCJALS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLS0tLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxM180XCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS1YLS1YLS0tLVhYLS1cIiwgXCItLS0tLS0tWC0tWF4tLS1YKi0tXCIsIFwiLS0tXl4tLVhYWFheXi0tWCYtLVwiLCBcIi0tLS0tLS1YLS1YXi0tLVgqLS1cIiwgXCItLS1eXi0tWC0tWC0tLS1YWC0tXCIsIFwiLS0tXl4tLS0tLS8vXFxcXFxcXFwvL1xcXFwtLVwiLCBcIi0tLV5eLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTFcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tI1hYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfMFwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tIy0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCIxMV8yXCI6IFtcIkAtLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tXi0tLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0mLS0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLV5eXl5eXl5eXi1PXCJdLCBcIjE3XzRcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSNYLSNYLSNYLSNYLSNYLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNV85XCI6IFtcIkAtLS0tXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLV4tLVhYWFhYWFhYWC1PXCJdLCBcIjFfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYWFgtLSYtLS1cIiwgXCItLS0tLS0tWFhYWFhYLS0tLS0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiOV80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWC0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLVgtLVheLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFhYXl4tLVgtLVwiLCBcIi0tLS0tLS0tWC0tWF4tLS1YLS1cIiwgXCItLS0tLS0tLVgtLVgtLS0tWC0tXCIsIFwiLS0mLS0tLS0tLS0vL1xcXFxcXFxcLy8tLVwiLCBcIi0tLS0tLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjE1XzZcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLVgtLVgtLS0tWFgtLVwiLCBcIi0tWCpYLS1YLS1YXi0tLVgqLS1cIiwgXCItLVgmLS0tWFhYWF5eLS1YJi0tXCIsIFwiLS1YKlgtLVgtLVheLS0tWCotLVwiLCBcIi0tWFhYLS1YLS1YLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLy9cXFxcXFxcXC8vXFxcXC0tXCIsIFwiLS1cXFxcLy8tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOV81XCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS9cXFxcXFxcXC1YLS0tLS0tLS0tKi0tXCIsIFwiLS1cXFxcLy8tWC0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tLVhYLS1YLS1cIiwgXCItLSYtLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS1YIyotLVgtLVwiLCBcIi0tJi0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS1YLS0tLS1YWC0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtWC0tLS0tLVgtLVgtLVwiLCBcIi0tXFxcXC8vLVgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTVcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFgtLSNYWFhYLS1cIiwgXCItLS0tWFhYWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0qLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiNV84XCI6IFtcIkAtLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0tLS0tIy0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLSMtLS0jLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0mLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0qLS1YWFhYWFhYWC1PXCJdLCBcIjE3XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLSYtLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTFfM1wiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tWC0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxM18xXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0jLS0tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTBcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0jWFhYLS1cIiwgXCItLS0tLSMtLS0tJi0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiM18xMlwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jWFhYWC0tKi0tLVwiLCBcIi0tLS0tLS0tLVhYWFgtLS0tLS1cIiwgXCItLS0tLS0tLS0tKi0tLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxM18zXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0vLy0tLS0tLS0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVgjKi0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVgtLS1cIiwgXCItLS0tLS0tLS0tLVhYLS1YLS0tXCIsIFwiLS0mLS0tLS0tLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjExXzFcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLV4tLVhYLS1cIiwgXCItLSYtLS0tLS0tLS1eLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tXi0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiOV83XCI6IFtcIkAtWFhYWFgtLV5eXl5eXl5eLS1cIiwgXCItLVhYWFhYLS0tLS0tLS0tKi0tXCIsIFwiLS1YWFhYWC0tLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFgtLS0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tLSYtLS0tLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS1YWFhYLS0tLS1YWC0tWC0tXCIsIFwiLS1YWFhYWC0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYLS1eXl5eXl5eXi1PXCJdLCBcIjFfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS1YWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tLSotLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTVfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0jWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tLS0tWC0tWF4tLS1YKlgtLVwiLCBcIi0tLS0tLVhYWFheXi0tWCYtLS1cIiwgXCItLS0tLS1YLS1YXi0tLVgqWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS8vXFxcXFxcXFwvL1xcXFxcXFxcLS1cIiwgXCItLS0tLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLy0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI3XzhcIjogW1wiQC0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0qLS0tLS0qLS0tKi0tLS1cIiwgXCItLS1eXl4tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLSYtLS0tLS0jLS0tIy0tLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiN185XCI6IFtcIkAtLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tKi0tLS0tKi0tLSNYWC0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0mLS0tLS0tIy0tLS0qLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjE1XzRcIjogW1wiQC0tLV5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0mLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tWFhYLS1YLS1cIiwgXCItLS0tLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0tLS0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS1YWC0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS1eXl5eXl5eXl5eXl5eLU9cIl0sIFwiMV8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tI1hYWFgtLVwiLCBcIi0tLS0mLS1YWFgtLS1YWFhYLS1cIiwgXCItLS0tLS0tWFhYLS0tLSotLS0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI5XzZcIjogW1wiQC1YWFhYWC0tXl5eXl5eXl4tLVwiLCBcIi0tI1hYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtI1gtIy0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFgtLV5eXl5eXl5eLU9cIl0sIFwiMTFfMFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxM18yXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0jLS0tLS0tLVgjKi0tWCMtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFgtLS0tLSNYWFhYLS1cIiwgXCItLSMtLVhYLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0qLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTRfM1wiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tIy0tLS0tWCMqLS1YLSNYLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzFcIjogW1wiQC0tLS0tLS0tLS0tLV5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLSMtLSMtLS0tLS1YIy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS1eXl5eLU9cIl0sIFwiN18xMFwiOiBbXCJALV5eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qWC0tLS0tLS0tLSNYWFgtLVwiLCBcIi0tJi0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLSpYLS0tLS0tIy0tLS0qLS0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1eXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxMF83XCI6IFtcIkAtXl5eXl5eXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVhYWFgtLVwiLCBcIi0tWFgtLS1YWC0tLS1YWFhYLS1cIiwgXCItLSpYLS1YWFgtLS0tWFhYWC0tXCIsIFwiLS0mLS0tWCMqLS0tLVhYWFgtLVwiLCBcIi0tKlgtLVhYWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tLS1YWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS1YWC0tLS1cIiwgXCItLV5eXl5eXl5eXi0tWFhYWC1PXCJdLCBcIjVfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLVhYLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWC0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTJfNVwiOiBbXCJALV5eXl5eXl5eXl5eLS1YWC0tXCIsIFwiLS0tLS0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tI1gtI1gtI1gtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS1eXl5eXl5eXl5eXi0tWFgtT1wiXSwgXCIwXzhcIjogW1wiQC0tLS0tIy0tLVgtLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YWFhYLS1cIiwgXCItLS8vLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWC0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLSMtLS0mLS1YWFhYLU9cIl0sIFwiMF85XCI6IFtcIkAtLS0tLSMtLS0tWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0vLy0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0mLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0jLS0tLVhYWFhYWC1PXCJdLCBcIjEyXzRcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLVgjKi0tWC0jWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLSYtLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiNV8xNFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF82XCI6IFtcIkAtWFhYWC0tXl5eXl5eXl5eLS1cIiwgXCItLSNYWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWFgtLV5eXl5eXl5eXi1PXCJdLCBcIjdfMTFcIjogW1wiQC1eXl5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS1YWFgtLS0tWFhYWFhYWFgtLVwiLCBcIi0tWCpYLS0tLS0tI1hYWFhYLS1cIiwgXCItLVgmLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS1YKlgtLS0tLS0tLSotLS0tLVwiLCBcIi0tWFhYLS0tLVhYWFhYWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tWFhYWFhYWFgtLVwiLCBcIi0tXl5eXl4tLVhYWFhYWFhYLU9cIl0sIFwiMF8xOFwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI4XzBcIjogW1wiQC0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLSMtLSMtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0mLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLV5eXl5eLU9cIl0sIFwiMTRfMlwiOiBbXCJALS0tLV5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tIy0tLS0tLS1YIyotLVgjLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1eXl5eXl5eXl5eXl4tT1wiXSwgXCIxNF8wXCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLSotLS0tKi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tKi0tLS0qLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfMlwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0vL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tXFxcXFxcXFwvLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCIxNl8yXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS0tLS0qLS0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tXl5eLS1cIiwgXCItLS1YLS1YLS1YLS1eXl5eXi0tXCIsIFwiLS0jWC0jWC0jWC0tLS0tJi0tLVwiLCBcIi0tLVgtLVgtLVgtLV5eXl5eLS1cIiwgXCItLS1YLS1YLS1YLS0tLV5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tLS0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tLSotLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjEwXzRcIjogW1wiQC0tWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tLVhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiNV8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tI1hYWFgtLSotLS0jWFgtLVwiLCBcIi0tLS1YWFhYLS0tLS0tLVhYLS1cIiwgXCItLS0tLSotLS0tLSMtLS0tKi0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzlcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLSMtWFhYWC0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLSpYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tWFgtLU9cIl0sIFwiMTJfNlwiOiBbXCJALV5eXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0qWC0tWFhYLS0tLS0tKi0tLVwiLCBcIi0tJi0tLVgjKi0tLS0tLS0tLS1cIiwgXCItLSpYLS1YWFgtLS0tLS0tIy0tXCIsIFwiLS1YWC0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YWFhYLS1cIiwgXCItLS8vLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS1eXl5eXl5eXl4tLVhYWFgtT1wiXSwgXCIyXzhcIjogW1wiQC1YWC0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS1YWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtIy0tLVwiLCBcIi0tWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLSpYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS0mLS0tLS0tLS0tLU9cIl0sIFwiMTBfNVwiOiBbXCJALVhYWC0tLV5eXl5eXl5eXi0tXCIsIFwiLS0jWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFgtLS1eXl5eXl5eXl4tT1wiXSwgXCI3XzEyXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YLS1YWCojWFgqI1hYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YKiNYWC0tWFgtLVhYKiMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE2XzNcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS1eXi0tLS0tLVhYLS0tWFgtLVwiLCBcIi0tXl5eXi0tLVhYWC0tWFhYLS1cIiwgXCItLS0tLS0tLS1YIyotLVgjKi0tXCIsIFwiLS1eXl5eLS0tWFhYLS1YWFgtLVwiLCBcIi0tXl4tLS0tLS1YWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF8zXCI6IFtcIkAtLS0tLS0tLS1YLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLVhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tWC0tXl5eXi1PXCJdLCBcIjE0XzFcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLSMtLS0tLVgjKi0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF83XCI6IFtcIkAtWFhYWFhYLS1eXl5eXl5eLS1cIiwgXCItLSNYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0mLS0tLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWC0tXl5eXl5eXi1PXCJdLCBcIjE0XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLVheLS0tWCpYLS1YLS1cIiwgXCItLVhYWFhYXl4tLVgmLS0tWC0tXCIsIFwiLS0tLS0tWF4tLS1YKlgtLVgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0vL1xcXFxcXFxcLy9cXFxcXFxcXC0tWC0tXCIsIFwiLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy8tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNl84XCI6IFtcIkAtLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLSotLS0tLS0tLSNYWC0tXCIsIFwiLS0tLV5eXi0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tJi0tLS0tIy0tLS0qLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjVfMTNcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLS0tLSYtLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfMVwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tWC0jLS1cIiwgXCItLS0tLS0tLS0tJi0tLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxMl8zXCI6IFtcIkAtLS0tLS1eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0vLy0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS1YWC0tLVhYLS1cIiwgXCItLS0tLS0tLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tWCMqLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tWFgtLS1YLS0tXCIsIFwiLS0mLS0tLS0tLS1YLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tXl5eXl5eXl5eXi1PXCJdLCBcIjEyXzJcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0qLS1cIiwgXCItLS8vLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgjKi0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYLS1YLS1cIiwgXCItLSYtLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTBfMFwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLSotLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLV5eXl4tLVwiLCBcIi0tLS0tIy0tLS0tLS0tLS0mLS1cIiwgXCItLS0tLS0tLS0tJi0tXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCI1XzEyXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfOVwiOiBbXCJALS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLSotLS0tLS0tLSNYWFgtLVwiLCBcIi0tLV5eXi0tLS0tLS0tWFhYLS1cIiwgXCItLS0tJi0tLS0tIy0tLS0qLS0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxNF80XCI6IFtcIkAtXl5eXl5eXl5eXl5eLS1YLS1cIiwgXCItLS0tLS1YLS0tLS0tLS0tWC0tXCIsIFwiLS0tWC0tWC0tLS1YLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS1YWC0tLS1YLS1cIiwgXCItLS1YLS1YLS1YWFgtLS0tWC0tXCIsIFwiLS0jWC0jWC0tWCMqLS0tLVgtLVwiLCBcIi0tLVgtLVgtLVhYWC0tLS1YLS1cIiwgXCItLS1YLS1YLS0tWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tLS1YLS0tLVgtLVwiLCBcIi0tLVgtLS0tLS0tLS0tLS1YLS1cIiwgXCItLV5eXl5eXl5eXl5eXi0tJi1PXCJdLCBcIjhfNlwiOiBbXCJALS0tXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVhYWC0tLVwiLCBcIi0tLS0tLVgjKi0tLS1YWC0tLS1cIiwgXCItLS0tLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYWC0tXCIsIFwiLS0tLV5eXl5eXl4tLVhYWFgtT1wiXSwgXCI4XzRcIjogW1wiQC0tLS0tIy0tLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLVhYLS1cIiwgXCItLSYtLS1YWC0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0tXl5eXl5eLU9cIl0sIFwiMTZfNFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tI1gtI1gtI1gtI1gtLS0tLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS8tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS1cXFxcLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI0XzlcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0qLS0tI1hYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0jLS0tLSotLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiNV8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxMF8yXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLV4tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tXi0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLV4tLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tJi0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjEyXzBcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLSMtLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTJfMVwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tJi0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMF8zXCI6IFtcIkAtLS0tLS0tLV5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0tLS1YLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS1eXl5eXl5eXi1PXCJdLCBcIjVfMTFcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSNYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF84XCI6IFtcIkAtWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLVhYLS0tWFhYLS0tLVwiLCBcIi0tWFgtIy1YWC0jLVhYWC0jLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0qWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLS0tJi0tLS1PXCJdLCBcIjE2XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS1YWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tKlgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSYtLS1YLSNYLSNYLSNYLS0tXCIsIFwiLS0qWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tWFgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLVxcXFxcXFxcLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF81XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS1YWC0tLS1eXl4tLS0tLVwiLCBcIi0tLS0tWFgtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLy9cXFxcXFxcXC0tXCIsIFwiLS0jLS0tLS0tLS0tLVxcXFxcXFxcLy8tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLVhYLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1YWC0tLS1eXl4tLS0tLVwiLCBcIi0tLS0tWFgtLV5eXl5eXl5eLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjhfOFwiOiBbXCJALVhYWFhYWC0tXl5eXl5eXi0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYLS0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWC0tLS0tLS1YLSNYLS1cIiwgXCItLS0qLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFgtLV5eXl5eXl4tT1wiXSwgXCI2XzdcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLS0qLS0tLS1eXl5eLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tLV5eXl4tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMF8xMFwiOiBbXCJALS0tLS0jLS0tWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YWFhYLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS1YWFgtLVwiLCBcIi0tJi0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tIy0tLVhYWFhYWFgtT1wiXSwgXCI0XzVcIjogW1wiQC0tLS0tLS0jLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS0tLSMtLS0tLS0tLSYqIy0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLVhYWFhYLU9cIl0sIFwiMl8xNVwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jWFhYWC0tLS0tLVwiLCBcIi0tLS0tJi0tLVhYWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tKi0tLS0tWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIyXzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLSYtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiMF8xXCI6IFtcIkAtLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tIy0tJi0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0mLS0tXCIsIFwiLS0mLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0mLS0tLS1PXCJdLCBcIjBfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLSYtLSYtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCIyXzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLSYtLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLS0tLU9cIl0sIFwiMl8xNFwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYLS0tLS0jWFhYWC0tLVwiLCBcIi0tLS1YWC0tLS0tLVhYWFgtLS1cIiwgXCItLS0tLS0tLSotLS0tKi0tLS0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzRcIjogW1wiQC0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWCotLVwiLCBcIi0tKi0tLS0tKi0tJi0tWFgtLU9cIl0sIFwiMF8xMVwiOiBbXCJALS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0jLS1YWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtT1wiXSwgXCI2XzZcIjogW1wiQC0tLS0tWFhYWFgtLV5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYLS0tLSojLS1cIiwgXCItLS8vLS1YWFhYWC0tLS1YWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tWC0tLVwiLCBcIi0tLS0tLVhYWFhYLS0tLVgtLS1cIiwgXCItLSYtLS1YWFhYWC0tLS1YLS0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYLS1eXl5eLU9cIl0sIFwiOF85XCI6IFtcIkAtXl5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLSNYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWC0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLV5eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjZfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0jLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLSotLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCIwXzEzXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjRfNlwiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCIxOF80XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0qIy0tXCIsIFwiLS0tLS0tWC0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tWFgtLS1YWC0tLVhYLS1cIiwgXCItLS0tWFhYLS1YWFgtLS1YLS0tXCIsIFwiLS0tLVgjKi0tWCMqLS0tWC0tLVwiLCBcIi0tLS1YWFgtLVhYWC0tLVgtLS1cIiwgXCItLS0tLVhYLS0tWFgtLS1YLS0tXCIsIFwiLS0tLS0tWC0tLS1YLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjJfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLSNYWFhYLS1cIiwgXCItLS0tLVhYWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS1YWFhYWC0tLS0qLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0mLS0mLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjBfMlwiOiBbXCJALS0tLS0jLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLy8tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0mLS0mLS0mLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tIy0tLS0tLS0tLS0tT1wiXSwgXCIwXzNcIjogW1wiQC0tLS0tIy0tLVgtLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tJi0tJi0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0tLS0tLU9cIl0sIFwiMl8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjJfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWC0tI1hYWFgtLS1cIiwgXCItLVhYWFhYWFgtLS1YWFhYLS0tXCIsIFwiLS0tKi0tLS0tLS0tLSotLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMThfNVwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tJi0tLVgjKi0tWCMqLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS1YLS1YLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI0XzdcIjogW1wiQC0tLS0tWFhYWFhYLS1eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWC0tLS1YLS1cIiwgXCItLS8vLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWC0tXl5eLU9cIl0sIFwiMF8xMlwiOiBbXCJALS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtT1wiXSwgXCI2XzVcIjogW1wiQC0tLS0tWFhYLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWC0tLS1YLS1YLS1cIiwgXCItLS8vLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tWC0jWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLSYtLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYWC0tXl5eXl5eLU9cIl0sIFwiNl8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0mLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLV5eXi1PXCJdLCBcIjBfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSYtLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLV5eLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS1eXi1PXCJdLCBcIjJfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0jLS1YWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl81XCI6IFtcIkAtLS0tLS0tIy0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLSotLS0tLSMtLS0mLS0mLS1PXCJdLCBcIjBfN1wiOiBbXCJALS0tLS0jLS0tWC0tWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLy8tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWFgtLS0tXCIsIFwiLS0tLS0tIy0tLSYtLVhYWFgtT1wiXSwgXCIwXzZcIjogW1wiQC0tLS0tIy0tLVgtLVgtLVgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS1YLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0mLU9cIl0sIFwiMl80XCI6IFtcIkAtLS0tLS0tIy0tLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tWC0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjJfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tI1hYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0jLS0tLSotLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNF8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLSotLS0tLSMtLS0tLS1eXi1PXCJdLCBcIjBfMTdcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNl8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0mLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLV5eXi1PXCJdLCBcIjZfMlwiOiBbXCJALS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS1eXl4tT1wiXSwgXCIwXzE1XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLy0tXCIsIFwiLS0qLS0tLS0qLS0tLS0tLVxcXFwtT1wiXSwgXCIyXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tLS0tXCIsIFwiLS0tLS0jLS1YWFgtLSYtLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0jLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjJfNlwiOiBbXCJALS0tLS0tLSMtLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tIy0tLS0tLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tWFgtT1wiXSwgXCIwXzRcIjogW1wiQC0tLS0tIy0tLVgtLVgtLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YLS0tLS1cIiwgXCItLS8vLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0mLS1cIiwgXCItLSYtLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS0mLS0tLU9cIl0sIFwiMF81XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tLy0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLVxcXFwtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tLS1PXCJdLCBcIjJfN1wiOiBbXCJALS0tLS0tLSMtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLS0tJi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0qLS0tLS0jLS0tWFhYWFgtT1wiXSwgXCIyXzExXCI6IFtcIkAtWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLSMtLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0qWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0mLS0tLS1PXCJdLCBcIjRfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLSotLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCIwXzE0XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfM1wiOiBbXCJALS0tLS0tLS0tWC0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLVgtLVwiLCBcIi0tLS0tIy0tWCMmLS0tLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tLS0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tLVgtLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0qLS0tLS0tLVgtLS1eXl4tT1wiXSwgXCIxXzJcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLy9cXFxcLS1cIiwgXCItLS0tLS0tLS0tLVgtLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSYtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tJi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tLS0tLU9cIl0sIFwiM18wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLS0tLS1PXCJdLCBcIjVfNlwiOiBbXCJALS0tLS1YWFhYWC0tXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFgtLS0tLSotLVwiLCBcIi0tLy8tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tJi0tLVhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFgtLV5eXl4tT1wiXSwgXCI2XzEyXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YLS1YWC0tWFgqI1hYLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWC0tWFgtLVhYLS1YWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YKiZYWCojWFgtLVhYKiMtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjdfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0tKi0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0mLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCI3XzVcIjogW1wiQC0tLS0tWFhYLS1eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWC0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWFgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tWFhYLS1cIiwgXCItLS0tLS1YWFgtLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLSYtLS1YWFgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYWC0tXl5eXl5eLU9cIl0sIFwiNl8xM1wiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0jWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0qLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI1XzdcIjogW1wiQC0tLS0tWFhYWFhYLS1eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWC0tLS1YLS1cIiwgXCItLS8vLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tIy0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFhYLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWC0tXl5eLU9cIl0sIFwiM18xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS0tLS1PXCJdLCBcIjFfM1wiOiBbXCJALS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tIy0tJi0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0mLS0tT1wiXSwgXCI0XzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0jWFhYWC0tLS0tI1hYWC0tXCIsIFwiLS0tLVhYWFgtLS0tLS1YWFgtLVwiLCBcIi0tLS0tKi0tLS0qLS0tLSotLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMTRcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tI1hYLS1cIiwgXCItLS0tLSYtLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMV8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLSYtLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjNfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0qLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCI1XzVcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLSMtLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWC0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiOV84XCI6IFtcIkAtXl5eXl5eXi0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tWFgtLS0tWFhYWFhYLS1cIiwgXCItLS0tWFhYLS0tLS0tI1hYWC0tXCIsIFwiLS0tLVgjKi0tLS0tLS1YWFgtLVwiLCBcIi0tLS1YWFgtLS0tLS0tLSotLS1cIiwgXCItLS0tLVhYLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLV5eXl5eXl4tLVhYWFhYWC1PXCJdLCBcIjZfMTFcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0sIFwiN183XCI6IFtcIkAtLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLSotLS0tLSotLS0qLS0tXCIsIFwiLS0tLV5eXi0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tJi0tLS0tLSMtLS0jLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjdfNlwiOiBbXCJALS0tLVhYWFhYWC0tXl5eXi0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0tWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVgjLS1cIiwgXCItLS0tLS0tLSMtLS0tLS1YWC0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLV5eXl4tT1wiXSwgXCI2XzEwXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLV4tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS1eXi0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXi0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjVfNFwiOiBbXCJALS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSYtLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tLS0tIy0tXl5eLS0tLSYtLS1cIiwgXCItLS0tLS0tLV5eXi0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1eXl4tLVhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLSotLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0qLS0tLS1eXl4tLVhYWFgtT1wiXSwgXCIzXzJcIjogW1wiQC0tLS0tLS0jLS0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLS0tLV4tLU9cIl0sIFwiMV8wXCI6IFtcIkAtLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS0mLS0mLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLS0tLS0tLS0tLS1PXCJdLCBcIjRfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tI1hYWFgtLS0tLSNYLS1cIiwgXCItLS0tLS1YWFhYLS0tLS0tWC0tXCIsIFwiLS0tLS0tLSotLS0tKi0tLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF8xMVwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzRcIjogW1wiQC0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLSMtLSYtLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tKi0tLS0tLS0tJi0tLVhYLU9cIl0sIFwiM182XCI6IFtcIkAtLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLSYtLSYtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLSotLS0tLSotLVhYWFhYWC1PXCJdLCBcIjVfMFwiOiBbXCJALS0tLS0tLS0tLS0tLV4tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0qLS0tLS0qLS0tLS1eLV4tT1wiXSwgXCI3XzJcIjogW1wiQC0tLS0tLS0jLS0tXl5eXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0mLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tIy0tLV5eXl5eLU9cIl0sIFwiN18zXCI6IFtcIkAtLS0tLS0tLS1YLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0tLS0jLS1YIyYtLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFhYLS0tLVgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YWC0tLS1YLS0tXCIsIFwiLS1cXFxcLy8tLS0tLVgtLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSMtLS1cIiwgXCItLSotLS0tLS0tWC0tXl5eXi1PXCJdLCBcIjhfMTBcIjogW1wiQC1eXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKlgtLS0tLS0qLS0tI1hYLS1cIiwgXCItLSYtLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0qWC0tLS0tLS0jLS0tLSotLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXl5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiNV8xXCI6IFtcIkAtLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS1eXi0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLSotLSYtLS1eXi1PXCJdLCBcIjNfN1wiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWFgtLSYtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCIxXzVcIjogW1wiQC0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLSYtLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tWFhYLU9cIl0sIFwiNF8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tI1gtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLSMtLS0jLS0tLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzEyXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0mLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLS0qLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjFfN1wiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tIy0tJi0tWFhYLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0tLS1YWFhYWFgtT1wiXSwgXCIzXzVcIjogW1wiQC0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLSMtLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tWFhYLU9cIl0sIFwiNV8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLV4tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLV5eLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLSMtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjdfMVwiOiBbXCJALS0tLS0tLS0tLVgtLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLSMtLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCI3XzBcIjogW1wiQC0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tLS0tLS0tLU9cIl0sIFwiNV8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLSMtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS0tLS1PXCJdLCBcIjNfNFwiOiBbXCJALS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tIy0tIy0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tWFgtT1wiXSwgXCIxXzZcIjogW1wiQC0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLSMtLSYtLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tKi0tLS0tLS0tLVhYWFhYLU9cIl0sIFwiNF8xM1wiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSNYWFhYLS0jWFgtLVwiLCBcIi0tIy0tLS0tWFhYWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0qLS0tLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgR2FtZV8xID0gcmVxdWlyZShcIi4vRW5naW5lL0dhbWVcIik7XG5jb25zdCBHYW1lU2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lcy9HYW1lU2NlbmVcIik7XG5jb25zdCBQbGF5ZXJMb3N0U2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lcy9QbGF5ZXJMb3N0U2NlbmVcIik7XG5jb25zdCBQbGF5ZXJXb25TY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVzL1BsYXllcldvblNjZW5lXCIpO1xuY29uc3QgU2VsZWN0aW9uU2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lcy9TZWxlY3Rpb25TY2VuZVwiKTtcbmNvbnN0IFN0YXJ0U2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lcy9TdGFydFNjZW5lXCIpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lXzEuR2FtZSgpO1xuY29uc3Qgc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lXzEuU3RhcnRTY2VuZSgpO1xuY29uc3Qgc2VsZWN0aW9uU2NlbmUgPSBuZXcgU2VsZWN0aW9uU2NlbmVfMS5TZWxlY3Rpb25TY2VuZSgpO1xuY29uc3QgZ2FtZVNjZW5lID0gbmV3IEdhbWVTY2VuZV8xLkdhbWVTY2VuZSgpO1xuY29uc3QgcGxheWVyTG9zdFNjZW5lID0gbmV3IFBsYXllckxvc3RTY2VuZV8xLlBsYXllckxvc3RTY2VuZSgpO1xuY29uc3QgcGxheWVyV29uU2NlbmUgPSBuZXcgUGxheWVyV29uU2NlbmVfMS5QbGF5ZXJXb25TY2VuZSgpO1xuY29uc3Qgc3RhcnRJbmRleCA9IGdhbWUuYWRkU2NlbmUoc3RhcnRTY2VuZSk7XG5jb25zdCBzZWxlY3Rpb25JbmRleCA9IGdhbWUuYWRkU2NlbmUoc2VsZWN0aW9uU2NlbmUpO1xuY29uc3QgZ2FtZUluZGV4ID0gZ2FtZS5hZGRTY2VuZShnYW1lU2NlbmUpO1xuY29uc3QgbG9zdEluZGV4ID0gZ2FtZS5hZGRTY2VuZShwbGF5ZXJMb3N0U2NlbmUpO1xuY29uc3Qgd29uSW5kZXggPSBnYW1lLmFkZFNjZW5lKHBsYXllcldvblNjZW5lKTtcbnN0YXJ0U2NlbmUuc2NlbmVJbmRleCA9IHNlbGVjdGlvbkluZGV4O1xuc2VsZWN0aW9uU2NlbmUuc2NlbmVJbmRleCA9IGdhbWVJbmRleDtcbmdhbWVTY2VuZS5wbGF5ZXJMb3N0SW5kZXggPSBsb3N0SW5kZXg7XG5nYW1lU2NlbmUucGxheWVyV29uSW5kZXggPSB3b25JbmRleDtcbmdhbWVTY2VuZS5zZWxmSW5kZXggPSBnYW1lSW5kZXg7XG5nYW1lU2NlbmUubWFpbk1lbnVJbmRleCA9IHN0YXJ0SW5kZXg7XG5wbGF5ZXJMb3N0U2NlbmUuc2NlbmVJbmRleCA9IHN0YXJ0SW5kZXg7XG5wbGF5ZXJXb25TY2VuZS5zY2VuZUluZGV4ID0gc3RhcnRJbmRleDtcbmdhbWUuc3RhcnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==