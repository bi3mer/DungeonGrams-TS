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
                }
            }
        }
        for (let y = 3; y < game.height / yMod - 1; ++y) {
            for (let x = 1; x < game.width / xMod - 1; ++x) {
                if (x < xMin || x > xMax || y < yMin || y > yMax) {
                    const id = this.addEntity();
                    this.addComponent(id, new Render_1.Render('X'));
                    this.addComponent(id, new Position_1.Position(x, y));
                }
            }
        }
        this.setBB('switch count', switchCount);
        this.setBB('offset x', offsetX);
        this.setBB('offset y', offsetY);
        this.setBB('x mod', xMod);
        this.setBB('y mod', yMod);
        this.addSystem(0, new PlayerSystem_1.PlayerSystem());
        this.addSystem(10, new EnemyAISystem_1.EnemyAISystem());
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
        // const playerID = this.ecs.blackBoard.get('player id');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Nb3ZhYmxlLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1BsYXllci50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvQ29tcG9uZW50cy9Qb3J0YWwudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL0NvbXBvbmVudHMvUmVuZGVyLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0LnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9Db21wb25lbnRzL1N3aXRjaC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL0VDU1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9FbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL0tleS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvRW5naW5lL1NjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9FbmdpbmUvU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvR2FtZVNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyTG9zdFNjZW5lLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TY2VuZXMvUGxheWVyV29uU2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1NjZW5lcy9TZWxlY3Rpb25TY2VuZS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU2NlbmVzL1N0YXJ0U2NlbmUudHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvRW5lbXlBSVN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9QbGF5ZXJTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL1N5c3RlbXMvUG9ydGFsU3lzdGVtLnRzIiwid2VicGFjazovL0R1bmdlb25HcmFtcy8uL3NyYy9TeXN0ZW1zL1JlbmRlclN5c3RlbS50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9TZWxlY3Rpb25TY2VuZS9SZW5kZXJNZW51VGV4dC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9TZWxlY3Rpb25TY2VuZS9VcGRhdGVTZWxlY3RlZC50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvLi9zcmMvU3lzdGVtcy9Td2l0Y2hDb2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL2xldmVscy50cyIsIndlYnBhY2s6Ly9EdW5nZW9uR3JhbXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRHVuZ2VvbkdyYW1zLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db2xsaWRlciA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBDb2xsaWRlciBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Db2xsaWRlciA9IENvbGxpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1vdmFibGUgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgTW92YWJsZSBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxufVxuZXhwb3J0cy5Nb3ZhYmxlID0gTW92YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXIgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgUGxheWVyIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlBsYXllciA9IFBsYXllcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3J0YWwgPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Qb3NpdGlvbiA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLm9sZFggPSB4O1xuICAgICAgICB0aGlzLm9sZFkgPSB5O1xuICAgIH1cbiAgICBlcXVhbHMob3RoZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PSBvdGhlci54ICYmIHRoaXMueSA9PSBvdGhlci55O1xuICAgIH1cbiAgICBoYXNoKCkge1xuICAgICAgICAvLyBDYW50b3IgcGFpcmluZyBmdW5jdGlvblxuICAgICAgICByZXR1cm4gKCh0aGlzLnggKyB0aGlzLnkpICogKHRoaXMueCArIHRoaXMueSArIDEpIC8gMikgKyB0aGlzLnk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3NpdGlvbiA9IFBvc2l0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbmRlciA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBSZW5kZXIgZXh0ZW5kcyBDb21wb25lbnRfMS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGNoYXJhY3Rlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNoYXJhY3RlciA9IGNoYXJhY3RlcjtcbiAgICB9XG59XG5leHBvcnRzLlJlbmRlciA9IFJlbmRlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5NZW51VGV4dCA9IHZvaWQgMDtcbmNvbnN0IENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uLy4uL0VuZ2luZS9Db21wb25lbnRcIik7XG5jbGFzcyBNZW51VGV4dCBleHRlbmRzIENvbXBvbmVudF8xLkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgb3JkZXIsIHNlbGVjdGVkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub3JkZXIgPSBvcmRlcjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVudVRleHQgPSBNZW51VGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Td2l0Y2ggPSB2b2lkIDA7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvQ29tcG9uZW50XCIpO1xuY2xhc3MgU3dpdGNoIGV4dGVuZHMgQ29tcG9uZW50XzEuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5leHBvcnRzLlN3aXRjaCA9IFN3aXRjaDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBleHBvcnRzLkNvbXBvbmVudCA9IHZvaWQgMDtcbmNsYXNzIENvbXBvbmVudCB7XG59XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmNsYXNzIENvbXBvbmVudENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBhZGQoY29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubWFwLnNldChjb21wb25lbnQuY29uc3RydWN0b3IsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGdldChjb21wb25lbnRDbGFzcykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGNvbXBvbmVudENsYXNzKTtcbiAgICB9XG4gICAgaGFzKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoY29tcG9uZW50Q2xhc3MpO1xuICAgIH1cbiAgICBoYXNBbGwoY29tcG9uZW50Q2xhc3Nlcykge1xuICAgICAgICBmb3IgKGxldCBjbHMgb2YgY29tcG9uZW50Q2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm1hcC5oYXMoY2xzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZGVsZXRlKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHRoaXMubWFwLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgfVxufVxuZXhwb3J0cy5Db21wb25lbnRDb250YWluZXIgPSBDb21wb25lbnRDb250YWluZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRUNTU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4vU2NlbmVcIik7XG5jb25zdCBDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL0NvbXBvbmVudFwiKTtcbi8vIGh0dHBzOi8vbWF4d2VsbGZvcmJlcy5jb20vcG9zdHMvdHlwZXNjcmlwdC1lY3MtaW1wbGVtZW50YXRpb24vIGlzIHdoYXQgdGhpc1xuLy8gaW1wbGVtZW50YXRpb24gaXMgYmFzZWQgb2ZmIG9mLlxuY2xhc3MgRUNTU2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLy8gTWFpbiBzdGF0ZVxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmJsYWNrQm9hcmQgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8vIEJvb2trZWVwaW5nIGZvciBlbnRpdGllcy5cbiAgICAgICAgdGhpcy5uZXh0RW50aXR5SUQgPSAwO1xuICAgICAgICB0aGlzLmVudGl0aWVzVG9EZXN0cm95ID0gbmV3IEFycmF5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgcmV0dXJuIC0xLiBBbnkgb3RoZXIgbnVtYmVycyB3aWxsIHRlbGwgdGhlIGdhbWUgZW5naW5lIHRvIGNoYW5nZVxuICAgICAqIHRoZSBzY2VuZSB0byB3aGF0ZXZlciBpbmRleCBpcyByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0gY2FudmFzXG4gICAgICogQHBhcmFtIGtleVByZXNzZXNcbiAgICAgKi9cbiAgICB1cGRhdGUoZ2FtZSkge1xuICAgICAgICAvLyBVcGRhdGUgYWxsIHN5c3RlbXMuIChMYXRlciwgd2UnbGwgYWRkIGEgd2F5IHRvIHNwZWNpZnkgdGhlXG4gICAgICAgIC8vIHVwZGF0ZSBvcmRlci4pXG4gICAgICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHRoaXMucHJpb3JpdGllcykge1xuICAgICAgICAgICAgY29uc3Qgc3lzdGVtID0gdGhpcy5wcmlvcml0eVRvU3lzdGVtLmdldChwcmlvcml0eSk7XG4gICAgICAgICAgICBjb25zdCBjb21wb25lbnRzID0gdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpO1xuICAgICAgICAgICAgc3lzdGVtLnVwZGF0ZShnYW1lLCBjb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgYW55IGVudGl0aWVzIHRoYXQgd2VyZSBtYXJrZWQgZm9yIGRlbGV0aW9uIGR1cmluZyB0aGVcbiAgICAgICAgLy8gdXBkYXRlLlxuICAgICAgICB3aGlsZSAodGhpcy5lbnRpdGllc1RvRGVzdHJveS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lFbnRpdHkodGhpcy5lbnRpdGllc1RvRGVzdHJveS5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tVXBkYXRlKGdhbWUpO1xuICAgIH1cbiAgICAvLyBBUEk6IEVudGl0aWVzXG4gICAgYWRkRW50aXR5KCkge1xuICAgICAgICBsZXQgZW50aXR5ID0gdGhpcy5uZXh0RW50aXR5SUQ7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEKys7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuc2V0KGVudGl0eSwgbmV3IENvbXBvbmVudF8xLkNvbXBvbmVudENvbnRhaW5lcigpKTtcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFya3MgYGVudGl0eWAgZm9yIHJlbW92YWwuIFRoZSBhY3R1YWwgcmVtb3ZhbCBoYXBwZW5zIGF0IHRoZSBlbmRcbiAgICAgKiBvZiB0aGUgbmV4dCBgdXBkYXRlKClgLiBUaGlzIHdheSB3ZSBhdm9pZCBzdWJ0bGUgYnVncyB3aGVyZSBhblxuICAgICAqIEVudGl0eSBpcyByZW1vdmVkIG1pZC1gdXBkYXRlKClgLCB3aXRoIHNvbWUgU3lzdGVtcyBzZWVpbmcgaXQgYW5kXG4gICAgICogb3RoZXJzIG5vdC5cbiAgICAgKi9cbiAgICByZW1vdmVFbnRpdHkoZW50aXR5KSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXNUb0Rlc3Ryb3kucHVzaChlbnRpdHkpO1xuICAgIH1cbiAgICBhZGRDb21wb25lbnQoZW50aXR5LCBjb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KS5hZGQoY29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jaGVja0UoZW50aXR5KTtcbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50cyhlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50aXRpZXMuZ2V0KGVudGl0eSk7XG4gICAgfVxuICAgIHJlbW92ZUNvbXBvbmVudChlbnRpdHksIGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5lbnRpdGllcy5nZXQoZW50aXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShjb21wb25lbnRDbGFzcyk7XG4gICAgICAgIHRoaXMuY2hlY2tFKGVudGl0eSk7XG4gICAgfVxuICAgIHNldEJCKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZC5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgICBnZXRCQihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxhY2tCb2FyZC5nZXQoa2V5KTtcbiAgICB9XG4gICAgLy8gQVBJOiBTeXN0ZW1zXG4gICAgLyoqXG4gICAgICogQWRkIGEgc3lzdGVtIHdoZXJlIHRoZSBwcmlvcml0eSBkZWZpbmVzIGluIHdoYXQgb3JkZXIgaXQgd2lsbCBiZSBydW4gd2hlblxuICAgICAqIGNvbXBhcmVkIHRvIG90aGVyIHN5c3RlbXNcbiAgICAgKiBAcGFyYW0gcHJpb3JpdHkgLSBsb3dlciB2YWx1ZSBpcyBydW4gZmlyc3RcbiAgICAgKiBAcGFyYW0gc3lzdGVtXG4gICAgICovXG4gICAgYWRkU3lzdGVtKHByaW9yaXR5LCBzeXN0ZW0pIHtcbiAgICAgICAgLy8gU3lzdGVtIG11c3QgcmVxdWlyZSBhdCBsZWFzdCBvbmUgY29tcG9uZW50ICAgIFxuICAgICAgICBpZiAoc3lzdGVtLmNvbXBvbmVudHNSZXF1aXJlZC5zaXplID09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N5c3RlbSBub3QgYWRkZWQ6IGVtcHR5IENvbXBvbmVudHMgbGlzdC4nICsgc3lzdGVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmlvcml0aWVzLmluY2x1ZGVzKHByaW9yaXR5KSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtzeXN0ZW19IGNhbiBub3QgYmUgdXNlZCBzaW5jZSBwcmlvcml0eSAke3ByaW9yaXR5fSBhbHJlYWR5IGluIHVzZS5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBHaXZlIHN5c3RlbSBhIHJlZmVyZW5jZSB0byB0aGUgRUNTIHNvIGl0IGNhbiBhY3R1YWxseSBkb1xuICAgICAgICAvLyBhbnl0aGluZy5cbiAgICAgICAgc3lzdGVtLmVjcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb1N5c3RlbS5zZXQocHJpb3JpdHksIHN5c3RlbSk7XG4gICAgICAgIHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuc2V0KHByaW9yaXR5LCBuZXcgU2V0KCkpO1xuICAgICAgICB0aGlzLnByaW9yaXRpZXMucHVzaChwcmlvcml0eSk7XG4gICAgICAgIHRoaXMucHJpb3JpdGllcy5zb3J0KCk7XG4gICAgICAgIC8vIFNhdmUgc3lzdGVtIGFuZCBzZXQgd2hvIGl0IHNob3VsZCB0cmFjayBpbW1lZGlhdGVseS5cbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZW50aXRpZXMua2V5cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrRVMoZW50aXR5LCBwcmlvcml0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZW50aXRpZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5jbGVhcigpO1xuICAgICAgICB0aGlzLnByaW9yaXR5VG9TeXN0ZW0uY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wcmlvcml0aWVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMubmV4dEVudGl0eUlEID0gMDtcbiAgICB9XG4gICAgZGVzdHJveUVudGl0eShlbnRpdHkpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmVudGl0aWVzLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICBmb3IgKGxldCBwcmlvcml0eSBvZiB0aGlzLnByaW9yaXRpZXMpIHtcbiAgICAgICAgICAgIChfYSA9IHRoaXMucHJpb3JpdHlUb0NvbXBvbmVudHMuZ2V0KHByaW9yaXR5KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBUT0RPOiBjYW4gSSByZW1vdmUgdGhpcz9cbiAgICBjaGVja0UoZW50aXR5KSB7XG4gICAgICAgIGZvciAobGV0IHByaW9yaXR5IG9mIHRoaXMucHJpb3JpdGllcykge1xuICAgICAgICAgICAgdGhpcy5jaGVja0VTKGVudGl0eSwgcHJpb3JpdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEkgdGhpbmsgdGhpcyBjYW4gYmUgcmVtb3ZlZCBidXQgSSdtIGdvaW5nIHRvIGxlYXZlIGl0IGluIGZvciBub3cuXG4gICAgICogQHBhcmFtIGVudGl0eVxuICAgICAqIEBwYXJhbSBzeXN0ZW1cbiAgICAgKi9cbiAgICBjaGVja0VTKGVudGl0eSwgcHJpb3JpdHkpIHtcbiAgICAgICAgbGV0IGhhdmUgPSB0aGlzLmVudGl0aWVzLmdldChlbnRpdHkpO1xuICAgICAgICBsZXQgbmVlZCA9IHRoaXMucHJpb3JpdHlUb1N5c3RlbS5nZXQocHJpb3JpdHkpLmNvbXBvbmVudHNSZXF1aXJlZDtcbiAgICAgICAgaWYgKGhhdmUuaGFzQWxsKG5lZWQpKSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgYmUgaW4gc3lzdGVtXG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5VG9Db21wb25lbnRzLmdldChwcmlvcml0eSkuYWRkKGVudGl0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG91bGQgbm90IGJlIGluIHN5c3RlbVxuICAgICAgICAgICAgdGhpcy5wcmlvcml0eVRvQ29tcG9uZW50cy5nZXQocHJpb3JpdHkpLmRlbGV0ZShlbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5FQ1NTY2VuZSA9IEVDU1NjZW5lO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWUgPSB2b2lkIDA7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuL0tleVwiKTtcbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnNjZW5lcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLmtleURvd24gPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMua2V5UHJlc3MgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgayA9ICgwLCBLZXlfMS5rZXlDb2RlVG9LZXkpKGUua2V5KTtcbiAgICAgICAgICAgIGlmIChrID09IEtleV8xLktleS5ET1dOIHx8IGsgPT0gS2V5XzEuS2V5LlVQIHx8IGsgPT0gS2V5XzEuS2V5LkxFRlQgfHwgayA9PSBLZXlfMS5LZXkuUklHSFQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMua2V5RG93bi5oYXMoaykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleURvd24uYWRkKGspO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGsgPSAoMCwgS2V5XzEua2V5Q29kZVRvS2V5KShlLmtleSk7XG4gICAgICAgICAgICB0aGlzLmtleURvd24uZGVsZXRlKGspO1xuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5UHJlc3MuYWRkKCgwLCBLZXlfMS5rZXlDb2RlVG9LZXkpKGUua2V5KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICB9XG4gICAgO1xuICAgIHNldEJCKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuYmxhY2tCb2FyZC5zZXQoa2V5LCB2YWwpO1xuICAgIH1cbiAgICBnZXRCQihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxhY2tCb2FyZC5nZXQoa2V5KTtcbiAgICB9XG4gICAgYWRkU2NlbmUoc2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZXMucHVzaChzY2VuZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjZW5lcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbGV0IG9sZFRpbWVTdGFtcDtcbiAgICAgICAgbGV0IGZwcztcbiAgICAgICAgdGhpcy5zY2VuZXNbdGhpcy5zY2VuZUluZGV4XS5vbkVudGVyKHRoaXMpO1xuICAgICAgICBjb25zdCBnYW1lTG9vcCA9ICh0aW1lU3RhbXApID0+IHtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHNlY29uZHMgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gKHRpbWVTdGFtcCAtIG9sZFRpbWVTdGFtcCkgLyAxMDAwO1xuICAgICAgICAgICAgb2xkVGltZVN0YW1wID0gdGltZVN0YW1wO1xuICAgICAgICAgICAgZnBzID0gTWF0aC5yb3VuZCgxIC8gdGhpcy5kZWx0YSk7XG4gICAgICAgICAgICAvLyByZXNldCBiYWNrZ3JvdW5kXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gZ2FtZSBlbmdpbmUgb3BlcmF0aW9uc1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgIC8vIERyYXcgRlBTXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkZQUzogXCIgKyBmcHMsIHRoaXMud2lkdGggLSA2MCwgMzApO1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IGkgPSB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLnVwZGF0ZSh0aGlzKTtcbiAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLm9uRXhpdCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IGk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lc1t0aGlzLnNjZW5lSW5kZXhdLm9uRW50ZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlQcmVzcy5jbGVhcigpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2FtZSA9IEdhbWU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMua2V5Q29kZVRvS2V5ID0gZXhwb3J0cy5LZXkgPSB2b2lkIDA7XG52YXIgS2V5O1xuKGZ1bmN0aW9uIChLZXkpIHtcbiAgICBLZXlbS2V5W1wiTEVGVFwiXSA9IDBdID0gXCJMRUZUXCI7XG4gICAgS2V5W0tleVtcIlJJR0hUXCJdID0gMV0gPSBcIlJJR0hUXCI7XG4gICAgS2V5W0tleVtcIkRPV05cIl0gPSAyXSA9IFwiRE9XTlwiO1xuICAgIEtleVtLZXlbXCJVUFwiXSA9IDNdID0gXCJVUFwiO1xuICAgIEtleVtLZXlbXCJXXCJdID0gNF0gPSBcIldcIjtcbiAgICBLZXlbS2V5W1wiQVwiXSA9IDVdID0gXCJBXCI7XG4gICAgS2V5W0tleVtcIlNcIl0gPSA2XSA9IFwiU1wiO1xuICAgIEtleVtLZXlbXCJEXCJdID0gN10gPSBcIkRcIjtcbiAgICBLZXlbS2V5W1wiUVwiXSA9IDhdID0gXCJRXCI7XG4gICAgS2V5W0tleVtcIlJcIl0gPSA5XSA9IFwiUlwiO1xuICAgIEtleVtLZXlbXCJTUEFDRVwiXSA9IDEwXSA9IFwiU1BBQ0VcIjtcbiAgICBLZXlbS2V5W1wiRVNDQVBFXCJdID0gMTFdID0gXCJFU0NBUEVcIjtcbiAgICBLZXlbS2V5W1wiRU5URVJcIl0gPSAxMl0gPSBcIkVOVEVSXCI7XG4gICAgS2V5W0tleVtcIklOVkFMSURcIl0gPSAxM10gPSBcIklOVkFMSURcIjtcbn0pKEtleSA9IGV4cG9ydHMuS2V5IHx8IChleHBvcnRzLktleSA9IHt9KSk7XG5mdW5jdGlvbiBrZXlDb2RlVG9LZXkoa2V5KSB7XG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnRG93bic6XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkRPV047XG4gICAgICAgIGNhc2UgJ1VwJzpcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlVQO1xuICAgICAgICBjYXNlICdSaWdodCc6XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5SSUdIVDtcbiAgICAgICAgY2FzZSAnTGVmdCc6XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkxFRlQ7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICBjYXNlICdTcGFjZSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlNQQUNFO1xuICAgICAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5FU0NBUEU7XG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5BO1xuICAgICAgICBjYXNlICdzJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUztcbiAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LkQ7XG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICAgICAgcmV0dXJuIEtleS5XO1xuICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuUjtcbiAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICByZXR1cm4gS2V5LlE7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAgIHJldHVybiBLZXkuRU5URVI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFVuaGFuZGxlZCBrZXk6ICR7a2V5fS5gKTtcbiAgICAgICAgICAgIHJldHVybiBLZXkuSU5WQUxJRDtcbiAgICB9XG59XG5leHBvcnRzLmtleUNvZGVUb0tleSA9IGtleUNvZGVUb0tleTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TY2VuZSA9IHZvaWQgMDtcbmNsYXNzIFNjZW5lIHtcbn1cbmV4cG9ydHMuU2NlbmUgPSBTY2VuZTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TeXN0ZW0gPSB2b2lkIDA7XG5jbGFzcyBTeXN0ZW0ge1xufVxuZXhwb3J0cy5TeXN0ZW0gPSBTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVNjZW5lID0gdm9pZCAwO1xuY29uc3QgRUNTU2NlbmVfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvRUNTU2NlbmVcIik7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IFBsYXllcl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUGxheWVyXCIpO1xuY29uc3QgbGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vbGV2ZWxzXCIpO1xuY29uc3QgUmVuZGVyU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vU3lzdGVtcy9SZW5kZXJTeXN0ZW1cIik7XG5jb25zdCBQb3J0YWxfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1BvcnRhbFwiKTtcbmNvbnN0IFBvcnRhbFN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvUG9ydGFsU3lzdGVtXCIpO1xuY29uc3QgUGxheWVyU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vU3lzdGVtcy9QbGF5ZXJTeXN0ZW1cIik7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvS2V5XCIpO1xuY29uc3QgRW5lbXlBSVN5c3RlbV8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvRW5lbXlBSVN5c3RlbVwiKTtcbmNvbnN0IE1vdmFibGVfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL01vdmFibGVcIik7XG5jb25zdCBTd2l0Y2hfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1N3aXRjaFwiKTtcbmNvbnN0IFN3aXRjaENvbGxpc2lvbl8xID0gcmVxdWlyZShcIi4uL1N5c3RlbXMvU3dpdGNoQ29sbGlzaW9uXCIpO1xuY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgRUNTU2NlbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyV29uSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnBsYXllckxvc3RJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VsZkluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5tYWluTWVudUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zZXRCQignZ2FtZSBvdmVyJywgMCk7XG4gICAgICAgIHRoaXMuc2V0QkIoJ3Jlc3RhcnQnLCBmYWxzZSk7XG4gICAgfVxuICAgIG9uRW50ZXIoZ2FtZSkge1xuICAgICAgICBjb25zdCB4TW9kID0gMjA7XG4gICAgICAgIGNvbnN0IHlNb2QgPSAyMDtcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IDg7XG4gICAgICAgIGNvbnN0IG9mZnNldFkgPSA3O1xuICAgICAgICBsZXQgeE1pbiA9IDEwMDA7XG4gICAgICAgIGxldCB4TWF4ID0gMDtcbiAgICAgICAgbGV0IHlNaW4gPSAxMDAwO1xuICAgICAgICBsZXQgeU1heCA9IDA7XG4gICAgICAgIGxldCBzd2l0Y2hDb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IGx2bEtleSA9IGdhbWUuZ2V0QkIoJ2xldmVsJyk7XG4gICAgICAgIGNvbnN0IGx2bCA9IGxldmVsc18xLkxFVkVMU1tsdmxLZXldO1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGx2bC5sZW5ndGg7ICsreSkge1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBsdmxbeV0ubGVuZ3RoOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gbHZsW3ldW3hdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5hZGRFbnRpdHkoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB4UG9zID0gb2Zmc2V0WCArIHg7XG4gICAgICAgICAgICAgICAgY29uc3QgeVBvcyA9IG9mZnNldFkgKyB5O1xuICAgICAgICAgICAgICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4UG9zKTtcbiAgICAgICAgICAgICAgICB4TWF4ID0gTWF0aC5tYXgoeE1heCwgeFBvcyk7XG4gICAgICAgICAgICAgICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlQb3MpO1xuICAgICAgICAgICAgICAgIHlNYXggPSBNYXRoLm1heCh5TWF4LCB5UG9zKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PSAnLScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgUmVuZGVyXzEuUmVuZGVyKGNoYXIpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFBvc2l0aW9uXzEuUG9zaXRpb24oeFBvcywgeVBvcykpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09ICdPJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFBvcnRhbF8xLlBvcnRhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCQigncG9ydGFsIGlkJywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICdAJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFBsYXllcl8xLlBsYXllcigpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBNb3ZhYmxlXzEuTW92YWJsZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRCQigncGxheWVyIGlkJywgaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFN3aXRjaF8xLlN3aXRjaCgpKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoQ291bnQgKz0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBNb3ZhYmxlXzEuTW92YWJsZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeSA9IDM7IHkgPCBnYW1lLmhlaWdodCAvIHlNb2QgLSAxOyArK3kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAxOyB4IDwgZ2FtZS53aWR0aCAvIHhNb2QgLSAxOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCA8IHhNaW4gfHwgeCA+IHhNYXggfHwgeSA8IHlNaW4gfHwgeSA+IHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmFkZEVudGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudChpZCwgbmV3IFJlbmRlcl8xLlJlbmRlcignWCcpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoaWQsIG5ldyBQb3NpdGlvbl8xLlBvc2l0aW9uKHgsIHkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRCQignc3dpdGNoIGNvdW50Jywgc3dpdGNoQ291bnQpO1xuICAgICAgICB0aGlzLnNldEJCKCdvZmZzZXQgeCcsIG9mZnNldFgpO1xuICAgICAgICB0aGlzLnNldEJCKCdvZmZzZXQgeScsIG9mZnNldFkpO1xuICAgICAgICB0aGlzLnNldEJCKCd4IG1vZCcsIHhNb2QpO1xuICAgICAgICB0aGlzLnNldEJCKCd5IG1vZCcsIHlNb2QpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgUGxheWVyU3lzdGVtXzEuUGxheWVyU3lzdGVtKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgxMCwgbmV3IEVuZW15QUlTeXN0ZW1fMS5FbmVteUFJU3lzdGVtKCkpO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSg1MCwgbmV3IFN3aXRjaENvbGxpc2lvbl8xLlN3aXRjaENvbGxpc2lvbigpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oOTAsIG5ldyBQb3J0YWxTeXN0ZW1fMS5Qb3J0YWxTeXN0ZW0oKSk7XG4gICAgICAgIHRoaXMuYWRkU3lzdGVtKDEwMCwgbmV3IFJlbmRlclN5c3RlbV8xLlJlbmRlclN5c3RlbSgpKTtcbiAgICB9XG4gICAgb25FeGl0KGdhbWUpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cbiAgICBjdXN0b21VcGRhdGUoZ2FtZSkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlciA9IHRoaXMuZ2V0QkIoJ2dhbWUgb3ZlcicpO1xuICAgICAgICBpZiAoZ2FtZU92ZXIgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllckxvc3RJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lT3ZlciA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXJXb25JbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChnYW1lLmtleURvd24uaGFzKEtleV8xLktleS5SKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZkluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdhbWUua2V5RG93bi5oYXMoS2V5XzEuS2V5LlEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYWluTWVudUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnRzLkdhbWVTY2VuZSA9IEdhbWVTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QbGF5ZXJMb3N0U2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TY2VuZVwiKTtcbmNsYXNzIFBsYXllckxvc3RTY2VuZSBleHRlbmRzIFNjZW5lXzEuU2NlbmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjZW5lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRpbWVyID0gMDtcbiAgICB9XG4gICAgb25FbnRlcihnYW1lKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkV4aXQoZ2FtZSkgeyB9XG4gICAgdXBkYXRlKGdhbWUpIHtcbiAgICAgICAgdGhpcy50aW1lciArPSBnYW1lLmRlbHRhO1xuICAgICAgICBpZiAodGhpcy50aW1lciA+IDIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lSW5kZXg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnYW1lLmN0eC5mb250ID0gJzQwcHggQXJpYWwnO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFN0eWxlID0gJ2dyZWVuJztcbiAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KCdZb3UgTG9zdCEgOi8nLCBnYW1lLndpZHRoIC8gMy41LCBnYW1lLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXJMb3N0U2NlbmUgPSBQbGF5ZXJMb3N0U2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyV29uU2NlbmUgPSB2b2lkIDA7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TY2VuZVwiKTtcbmNsYXNzIFBsYXllcldvblNjZW5lIGV4dGVuZHMgU2NlbmVfMS5TY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgIH1cbiAgICBvbkVudGVyKGdhbWUpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRXhpdChnYW1lKSB7IH1cbiAgICB1cGRhdGUoZ2FtZSkge1xuICAgICAgICB0aGlzLnRpbWVyICs9IGdhbWUuZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1lvdSBXb24hIE5pY2UhJywgZ2FtZS53aWR0aCAvIDMuNSwgZ2FtZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuUGxheWVyV29uU2NlbmUgPSBQbGF5ZXJXb25TY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZWxlY3Rpb25TY2VuZSA9IHZvaWQgMDtcbmNvbnN0IEVDU1NjZW5lXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0VDU1NjZW5lXCIpO1xuY29uc3QgbGV2ZWxzXzEgPSByZXF1aXJlKFwiLi4vbGV2ZWxzXCIpO1xuY29uc3QgTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0XCIpO1xuY29uc3QgVXBkYXRlU2VsZWN0ZWRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1VwZGF0ZVNlbGVjdGVkXCIpO1xuY29uc3QgUmVuZGVyTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi9TeXN0ZW1zL1NlbGVjdGlvblNjZW5lL1JlbmRlck1lbnVUZXh0XCIpO1xuY29uc3QgS2V5XzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL0tleVwiKTtcbmNsYXNzIFNlbGVjdGlvblNjZW5lIGV4dGVuZHMgRUNTU2NlbmVfMS5FQ1NTY2VuZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2NlbmVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzID0gW107XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBsZXZlbHNfMS5MRVZFTFMpIHtcbiAgICAgICAgICAgIHRoaXMuc29ydGVkTGV2ZWxzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvcnRlZExldmVscy5zb3J0KCk7XG4gICAgfVxuICAgIG9uRW50ZXIoZ2FtZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc29ydGVkTGV2ZWxzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMuYWRkRW50aXR5KCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGkgPT0gMDtcbiAgICAgICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGlkLCBuZXcgTWVudVRleHRfMS5NZW51VGV4dCh0aGlzLnNvcnRlZExldmVsc1tpXSwgaSwgc2VsZWN0ZWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEJCKCdzZWxlY3RlZCcsIDApO1xuICAgICAgICB0aGlzLmFkZFN5c3RlbSgwLCBuZXcgVXBkYXRlU2VsZWN0ZWRfMS5VcGRhdGVTZWxlY3RlZCgpKTtcbiAgICAgICAgdGhpcy5hZGRTeXN0ZW0oMTAsIG5ldyBSZW5kZXJNZW51VGV4dF8xLlJlbmRlck1lbnVUZXh0U3lzdGVtKCkpO1xuICAgIH1cbiAgICBvbkV4aXQoZ2FtZSkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuICAgIGN1c3RvbVVwZGF0ZShnYW1lKSB7XG4gICAgICAgIGlmIChnYW1lLmtleURvd24uaGFzKEtleV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGdhbWUuc2V0QkIoJ2xldmVsJywgdGhpcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkKS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkubmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG59XG5leHBvcnRzLlNlbGVjdGlvblNjZW5lID0gU2VsZWN0aW9uU2NlbmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3RhcnRTY2VuZSA9IHZvaWQgMDtcbmNvbnN0IEtleV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9LZXlcIik7XG5jb25zdCBTY2VuZV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TY2VuZVwiKTtcbmNsYXNzIFN0YXJ0U2NlbmUgZXh0ZW5kcyBTY2VuZV8xLlNjZW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zY2VuZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuICAgIG9uRW50ZXIoZ2FtZSkgeyB9XG4gICAgb25FeGl0KGdhbWUpIHsgfVxuICAgIHVwZGF0ZShnYW1lKSB7XG4gICAgICAgIGlmIChnYW1lLmtleURvd24uaGFzKEtleV8xLktleS5FTlRFUikpIHtcbiAgICAgICAgICAgIGdhbWUua2V5RG93bi5jbGVhcigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdhbWUuY3R4LmZvbnQgPSAnNDBweCBBcmlhbCc7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ0R1bmdlb25HcmFtcycsIDIyMCwgMTAwKTtcbiAgICAgICAgICAgIGdhbWUuY3R4LmZvbnQgPSAnMjBweCBBcmlhbCc7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnUHJlc3MgRW50ZXIgdG8gc3RhcnQnLCAyNzUsIDE1MCk7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcbiAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KCcmIGdpdmVzIHlvdSBzdGFtaW5hJywgNDAsIDIwMCk7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnQ29sbGVjdCBhbGwgKiB0byBvcGVuIHRoZSBwb3J0YWwuJywgNDAsIDIyMik7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnU3RlcCB0aHJvdWdoIHRoZSBwb3J0YWwgTyB0byB3aW4hJywgNDAsIDI0NCk7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnQnV0IG1ha2Ugc3VyZSB0byBhdm9pZCB0aGUgZW5lbWllcyAjIGFuZCB0cmFwcyBeJywgNDAsIDI2Nik7XG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1dBU0QgdG8gbW92ZScsIDQwLCAzNTApO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1IgdG8gcmVzdGFydCcsIDQwLCAzNzUpO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQoJ1EgdG8gcXVpdCcsIDQwLCA0MDApO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5TdGFydFNjZW5lID0gU3RhcnRTY2VuZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbmVteUFJU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgQ29sbGlkZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL0NvbGxpZGVyXCIpO1xuY29uc3QgUG9zaXRpb25fMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1Bvc2l0aW9uXCIpO1xuY29uc3QgUmVuZGVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9SZW5kZXJcIik7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvU3lzdGVtXCIpO1xuY2xhc3MgRW5lbXlBSVN5c3RlbSBleHRlbmRzIFN5c3RlbV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbUG9zaXRpb25fMS5Qb3NpdGlvbiwgUmVuZGVyXzEuUmVuZGVyLCBDb2xsaWRlcl8xLkNvbGxpZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICAvLyBjb25zdCBwbGF5ZXJQb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHBsYXllcklEKS5nZXQoUG9zaXRpb24pO1xuICAgICAgICAvLyBsZXQgY29sbGlzaW9uRm91bmQgPSBmYWxzZTtcbiAgICAgICAgLy8gZm9yKGxldCBpZCBvZiBlbnRpdGllcykge1xuICAgICAgICAvLyAgIGNvbnN0IGJsb2NrUG9zID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhpZCkuZ2V0KFBvc2l0aW9uKTtcbiAgICAgICAgLy8gICBpZihwbGF5ZXJQb3MuZXF1YWxzKGJsb2NrUG9zKSkge1xuICAgICAgICAvLyAgICAgcGxheWVyUG9zLnggPSBwbGF5ZXJQb3Mub2xkWDtcbiAgICAgICAgLy8gICAgIHBsYXllclBvcy55ID0gcGxheWVyUG9zLm9sZFk7XG4gICAgICAgIC8vICAgICBjb2xsaXNpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKCFjb2xsaXNpb25Gb3VuZCkge1xuICAgICAgICAvLyAgIHBsYXllclBvcy5vbGRYID0gcGxheWVyUG9zLng7XG4gICAgICAgIC8vICAgcGxheWVyUG9zLm9sZFkgPSBwbGF5ZXJQb3MueTtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cbmV4cG9ydHMuRW5lbXlBSVN5c3RlbSA9IEVuZW15QUlTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUGxheWVyU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgUGxheWVyXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9QbGF5ZXJcIik7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IEtleV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9LZXlcIik7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi9FbmdpbmUvU3lzdGVtXCIpO1xuY2xhc3MgUGxheWVyU3lzdGVtIGV4dGVuZHMgU3lzdGVtXzEuU3lzdGVtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzUmVxdWlyZWQgPSBuZXcgU2V0KFtQb3NpdGlvbl8xLlBvc2l0aW9uLCBSZW5kZXJfMS5SZW5kZXIsIFBsYXllcl8xLlBsYXllcl0pO1xuICAgICAgICB0aGlzLnRpbWVTaW5jZUxhc3RNb3ZlID0gNTtcbiAgICB9XG4gICAgdXBkYXRlKGdhbWUsIGVudGl0aWVzKSB7XG4gICAgICAgIHRoaXMudGltZVNpbmNlTGFzdE1vdmUgKz0gZ2FtZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudGltZVNpbmNlTGFzdE1vdmUgPCAwLjA4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aW1lU2luY2VMYXN0TW92ZSA9IDA7XG4gICAgICAgIGxldCBwbGF5ZXJJRCA9IGVudGl0aWVzLnZhbHVlcygpLm5leHQoKS52YWx1ZTtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgeCA9IHBvcy54O1xuICAgICAgICBjb25zdCB5ID0gcG9zLnk7XG4gICAgICAgIGZvciAobGV0IGtleSBvZiBnYW1lLmtleURvd24pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlfMS5LZXkuQTpcbiAgICAgICAgICAgICAgICBjYXNlIEtleV8xLktleS5MRUZUOlxuICAgICAgICAgICAgICAgICAgICBwb3MueCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleV8xLktleS5TOlxuICAgICAgICAgICAgICAgIGNhc2UgS2V5XzEuS2V5LkRPV046XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5XzEuS2V5LkQ6XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlfMS5LZXkuUklHSFQ6XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5XzEuS2V5Llc6XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlfMS5LZXkuVVA6XG4gICAgICAgICAgICAgICAgICAgIHBvcy55IC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIG5vdGhpbmcgdG8gZG8gaW4gdGhlIGRlZmF1bHQgY2FzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QbGF5ZXJTeXN0ZW0gPSBQbGF5ZXJTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUG9ydGFsU3lzdGVtID0gdm9pZCAwO1xuY29uc3QgUG9ydGFsXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3J0YWxcIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IFN5c3RlbV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TeXN0ZW1cIik7XG5jbGFzcyBQb3J0YWxTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1BvcnRhbF8xLlBvcnRhbCwgUmVuZGVyXzEuUmVuZGVyXSk7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICBjb25zdCBbaWRdID0gZW50aXRpZXM7IC8vIHRoZXJlIGNhbiBvbmx5IGJlIG9uZSBwb3J0YWxcbiAgICAgICAgaWYgKHRoaXMuZWNzLmdldEJCKCdzd2l0Y2ggY291bnQnKSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUmVuZGVyXzEuUmVuZGVyKS5jaGFyYWN0ZXIgPSAnTyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGlkKS5nZXQoUmVuZGVyXzEuUmVuZGVyKS5jaGFyYWN0ZXIgPSAnbyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLlBvcnRhbFN5c3RlbSA9IFBvcnRhbFN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBQb3NpdGlvbl8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvUG9zaXRpb25cIik7XG5jb25zdCBSZW5kZXJfMSA9IHJlcXVpcmUoXCIuLi9Db21wb25lbnRzL1JlbmRlclwiKTtcbmNvbnN0IFN5c3RlbV8xID0gcmVxdWlyZShcIi4uL0VuZ2luZS9TeXN0ZW1cIik7XG5jbGFzcyBSZW5kZXJTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW1Bvc2l0aW9uXzEuUG9zaXRpb24sIFJlbmRlcl8xLlJlbmRlcl0pO1xuICAgICAgICB0aGlzLmNoYXJUb0NvbG9yID0ge1xuICAgICAgICAgICAgJ0AnOiAnd2hpdGUnLFxuICAgICAgICAgICAgJy0nOiAnI2Q5ZDFkMCcsXG4gICAgICAgICAgICAnWCc6ICcjNjM2MzYzJyxcbiAgICAgICAgICAgICcqJzogJyMwY2NlZjAnLFxuICAgICAgICAgICAgJ1xcXFwnOiAnI2MzMDBkMScsXG4gICAgICAgICAgICAnLyc6ICcjYzMwMGQxJyxcbiAgICAgICAgICAgICdvJzogJyM0MTRkNDInLFxuICAgICAgICAgICAgJ08nOiAnIzE5ZjAwYScsXG4gICAgICAgICAgICAnIyc6ICdyZWQnLFxuICAgICAgICAgICAgJ14nOiAnI2YwY2QwYScsXG4gICAgICAgICAgICAnJic6ICcjMjU5YzJiJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlKGdhbWUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IHhNb2QgPSB0aGlzLmVjcy5nZXRCQigneCBtb2QnKTtcbiAgICAgICAgY29uc3QgeU1vZCA9IHRoaXMuZWNzLmdldEJCKCd5IG1vZCcpO1xuICAgICAgICBnYW1lLmN0eC5mb250ID0gJzIwcHggQXJpYWwnO1xuICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMudmFsdWVzKCkpIHtcbiAgICAgICAgICAgIC8vIGdldCBjb21wb25lbnRzXG4gICAgICAgICAgICBjb25zdCByZW5kZXIgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFJlbmRlcl8xLlJlbmRlcik7XG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLmVjcy5nZXRDb21wb25lbnRzKGVudGl0eSkuZ2V0KFBvc2l0aW9uXzEuUG9zaXRpb24pO1xuICAgICAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNoYXJUb0NvbG9yW3JlbmRlci5jaGFyYWN0ZXJdO1xuICAgICAgICAgICAgZ2FtZS5jdHguZmlsbFRleHQocmVuZGVyLmNoYXJhY3RlciwgcG9zLnggKiB4TW9kLCBwb3MueSAqIHlNb2QpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZW5kZXJTeXN0ZW0gPSBSZW5kZXJTeXN0ZW07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVuZGVyTWVudVRleHRTeXN0ZW0gPSB2b2lkIDA7XG5jb25zdCBTeXN0ZW1fMSA9IHJlcXVpcmUoXCIuLi8uLi9FbmdpbmUvU3lzdGVtXCIpO1xuY29uc3QgTWVudVRleHRfMSA9IHJlcXVpcmUoXCIuLi8uLi9Db21wb25lbnRzL1NlbGVjdGlvblNjZW5lL01lbnVUZXh0XCIpO1xuY2xhc3MgUmVuZGVyTWVudVRleHRTeXN0ZW0gZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW01lbnVUZXh0XzEuTWVudVRleHRdKTtcbiAgICB9XG4gICAgdXBkYXRlKGdhbWUsIGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IG1pblkgPSAxMDA7XG4gICAgICAgIGNvbnN0IG1heFkgPSBnYW1lLmhlaWdodCAtIDQwO1xuICAgICAgICBjb25zdCB5TW9kID0gMjA7XG4gICAgICAgIGNvbnN0IG1heE9yZGVyID0gKG1heFkgLSBtaW5ZKSAvIHlNb2Q7XG4gICAgICAgIGdhbWUuY3R4LmZvbnQgPSBcIjE1cHggQXJpYWxcIjtcbiAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzLnZhbHVlcygpKSB7XG4gICAgICAgICAgICBjb25zdCBtID0gdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhlbnRpdHkpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KTtcbiAgICAgICAgICAgIGxldCB4ID0gMjA7XG4gICAgICAgICAgICBsZXQgbyA9IG0ub3JkZXI7XG4gICAgICAgICAgICB3aGlsZSAobyA+IG1heE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgbyAtPSBtYXhPcmRlciArIDE7XG4gICAgICAgICAgICAgICAgeCArPSA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB5ID0gbWluWSArIHlNb2QgKiBvO1xuICAgICAgICAgICAgaWYgKG0uc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0eHRNZWFzdXJlID0gZ2FtZS5jdHgubWVhc3VyZVRleHQobS5uYW1lKTtcbiAgICAgICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxSZWN0KHggLSAxLjAsIHkgLSB5TW9kICogMC43LCB0eHRNZWFzdXJlLndpZHRoICogMS4xLCB5TW9kKTtcbiAgICAgICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KG0ubmFtZSwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICAgICAgICAgIGdhbWUuY3R4LmZpbGxUZXh0KG0ubmFtZSwgeCwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2FtZS5jdHguZm9udCA9IFwiMzBweCBBcmlhbFwiO1xuICAgICAgICBnYW1lLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICBnYW1lLmN0eC5maWxsVGV4dCgnTGV2ZWwgU2VsZWN0JywgZ2FtZS53aWR0aCAvIDIuNSwgNDUpO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVuZGVyTWVudVRleHRTeXN0ZW0gPSBSZW5kZXJNZW51VGV4dFN5c3RlbTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IHZvaWQgMDtcbmNvbnN0IFN5c3RlbV8xID0gcmVxdWlyZShcIi4uLy4uL0VuZ2luZS9TeXN0ZW1cIik7XG5jb25zdCBNZW51VGV4dF8xID0gcmVxdWlyZShcIi4uLy4uL0NvbXBvbmVudHMvU2VsZWN0aW9uU2NlbmUvTWVudVRleHRcIik7XG5jb25zdCBLZXlfMSA9IHJlcXVpcmUoXCIuLi8uLi9FbmdpbmUvS2V5XCIpO1xuY2xhc3MgVXBkYXRlU2VsZWN0ZWQgZXh0ZW5kcyBTeXN0ZW1fMS5TeXN0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHNSZXF1aXJlZCA9IG5ldyBTZXQoW01lbnVUZXh0XzEuTWVudVRleHRdKTtcbiAgICAgICAgdGhpcy5sYXN0VXBkYXRlID0gMTA7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgKz0gZ2FtZS5kZWx0YTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFVwZGF0ZSA8IDAuMikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBrZXlQcmVzcyA9IEtleV8xLktleS5JTlZBTElEO1xuICAgICAgICBmb3IgKGxldCBrZXkgb2YgZ2FtZS5rZXlEb3duKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09IEtleV8xLktleS5ET1dOIHx8IGtleSA9PSBLZXlfMS5LZXkuVVAgfHwgS2V5XzEuS2V5LlJJR0hUIHx8IEtleV8xLktleS5MRUZUKSB7XG4gICAgICAgICAgICAgICAga2V5UHJlc3MgPSBrZXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleVByZXNzID09IEtleV8xLktleS5JTlZBTElEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ2V0IHNlbGVjdGVkIGVudGl0eSBhbmQgbmV3IGVudGl0eSBpbmRleFxuICAgICAgICBsZXQgc2VsZWN0ZWRFbnRpdHkgPSB0aGlzLmVjcy5nZXRCQignc2VsZWN0ZWQnKTtcbiAgICAgICAgY29uc3QgbHZsc1BlckNvbHVtbiA9IDE4O1xuICAgICAgICBsZXQgbmV3RW50aXR5O1xuICAgICAgICBpZiAoa2V5UHJlc3MgPT0gS2V5XzEuS2V5LlVQIHx8IGtleVByZXNzID09IEtleV8xLktleS5XKSB7XG4gICAgICAgICAgICBuZXdFbnRpdHkgPSBzZWxlY3RlZEVudGl0eSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5UHJlc3MgPT0gS2V5XzEuS2V5LkRPV04gfHwga2V5UHJlc3MgPT0gS2V5XzEuS2V5LlMpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBLZXlfMS5LZXkuUklHSFQgfHwga2V5UHJlc3MgPT0gS2V5XzEuS2V5LkQpIHtcbiAgICAgICAgICAgIG5ld0VudGl0eSA9IHNlbGVjdGVkRW50aXR5ICsgbHZsc1BlckNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXlQcmVzcyA9PSBLZXlfMS5LZXkuTEVGVCB8fCBrZXlQcmVzcyA9PSBLZXlfMS5LZXkuQSkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHkgLSBsdmxzUGVyQ29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbnRpdGllcy5oYXMobmV3RW50aXR5KSkge1xuICAgICAgICAgICAgbmV3RW50aXR5ID0gc2VsZWN0ZWRFbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlZCBzZWxlY3RlZFxuICAgICAgICB0aGlzLmVjcy5zZXRCQignc2VsZWN0ZWQnLCBuZXdFbnRpdHkpO1xuICAgICAgICB0aGlzLmVjcy5nZXRDb21wb25lbnRzKHNlbGVjdGVkRW50aXR5KS5nZXQoTWVudVRleHRfMS5NZW51VGV4dCkuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lY3MuZ2V0Q29tcG9uZW50cyhuZXdFbnRpdHkpLmdldChNZW51VGV4dF8xLk1lbnVUZXh0KS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZSA9IDA7XG4gICAgfVxufVxuZXhwb3J0cy5VcGRhdGVTZWxlY3RlZCA9IFVwZGF0ZVNlbGVjdGVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN3aXRjaENvbGxpc2lvbiA9IHZvaWQgMDtcbmNvbnN0IFBvc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vQ29tcG9uZW50cy9Qb3NpdGlvblwiKTtcbmNvbnN0IFN3aXRjaF8xID0gcmVxdWlyZShcIi4uL0NvbXBvbmVudHMvU3dpdGNoXCIpO1xuY29uc3QgU3lzdGVtXzEgPSByZXF1aXJlKFwiLi4vRW5naW5lL1N5c3RlbVwiKTtcbmNsYXNzIFN3aXRjaENvbGxpc2lvbiBleHRlbmRzIFN5c3RlbV8xLlN5c3RlbSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1JlcXVpcmVkID0gbmV3IFNldChbU3dpdGNoXzEuU3dpdGNoXSk7XG4gICAgfVxuICAgIHVwZGF0ZShnYW1lLCBlbnRpdGllcykge1xuICAgICAgICAvLyBjb25zdCBwbGF5ZXJJRCA9IHRoaXMuZWNzLmJsYWNrQm9hcmQuZ2V0KCdwbGF5ZXIgaWQnKTtcbiAgICAgICAgY29uc3QgcGxheWVySUQgPSB0aGlzLmVjcy5nZXRCQigncGxheWVyIGlkJyk7XG4gICAgICAgIGNvbnN0IHBsYXllclBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMocGxheWVySUQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgZm9yIChsZXQgaWQgb2YgZW50aXRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN3aXRjaFBvcyA9IHRoaXMuZWNzLmdldENvbXBvbmVudHMoaWQpLmdldChQb3NpdGlvbl8xLlBvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmIChzd2l0Y2hQb3MuZXF1YWxzKHBsYXllclBvcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzd2l0Y2hDb3VudCA9IHRoaXMuZWNzLmdldEJCKCdzd2l0Y2ggY291bnQnKSAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5lY3Muc2V0QkIoJ3N3aXRjaCBjb3VudCcsIHN3aXRjaENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVjcy5yZW1vdmVFbnRpdHkoaWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5Td2l0Y2hDb2xsaXNpb24gPSBTd2l0Y2hDb2xsaXNpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTEVWRUxTID0gdm9pZCAwO1xuZXhwb3J0cy5MRVZFTFMgPSB7IFwiMTFfNFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLS0tLVgtLVwiLCBcIi0tLy8tLS0tWC0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLVgtLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YWFgtLVgtLVwiLCBcIi0tLS0tLS0tWC0tWCMqLS1YLS1cIiwgXCItLS0tLS0tLVgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tWFgtLVgtLVwiLCBcIi0tJi0tLS0tWC0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzlcIjogW1wiQC0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0tJi0tLS0tXCIsIFwiLS0tLS0tLS0tLSMtLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKi0tLS0tWFhYWFhYWFhYLU9cIl0sIFwiMTVfMFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0mLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS1eXl5eLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0mLS1cIiwgXCItLV5eXl4tLV5eXl5eXl5eXi0tXCIsIFwiLS1eXi0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSYtLS0tLS0tLSotLS0tKi0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI5XzJcIjogW1wiQC0tLS0tLS0tLS1eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLSMtLSMtLS0tWC0jWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS1YLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tXl5eXl5eLU9cIl0sIFwiMV8xMlwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0jWFhYWC0tLVwiLCBcIi0tLS0tLS0tJi0tLVhYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tKi0tLS0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzEzXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYLS0jWFhYWC0tXCIsIFwiLS0tLS0tWFhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tKi0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjlfM1wiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLVgtLS0vL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tXFxcXFxcXFwvLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxNV8xXCI6IFtcIkAtLV5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS1eXi0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tXl4tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLV5eLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tXl4tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS1eXi0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tXl4tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0qLS1cIiwgXCItLS1eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjE3XzNcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tI1gtLS0tLS0tXi0tLS0tLS1cIiwgXCItLVhYLS0tLVgtLV4tLS0tWC0tXCIsIFwiLS1YLS0tLVhYLS1eLS0tWFgtLVwiLCBcIi0tLS0tLVhYWC0tXi0tWFhYLS1cIiwgXCItLS0tLS1YIyotLS0tLVgjKi0tXCIsIFwiLS0tLS0tWFhYLS0mLS1YWFgtLVwiLCBcIi0tLS0tLS1YWC0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLVgtLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiM184XCI6IFtcIkAtWFgtLS0tLS0tLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLVhYLS0tWFhYLS0tLVwiLCBcIi0tWFgtIy1YWC0jLVhYWC0tLS1cIiwgXCItLVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS0qWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tLS0tLS0tJi0tLS1PXCJdLCBcIjExXzVcIjogW1wiQC1YWFgtLV5eXl5eXl5eXl4tLVwiLCBcIi0tI1hYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS1eXl5eXl5eXl5eLU9cIl0sIFwiM18xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tI1hYWFgtLSNYWFgtLVwiLCBcIi0tLSYtLS1YWFhYLS0tWFhYLS1cIiwgXCItLS0tLS0tLSotLS0tLS0qLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxM181XCI6IFtcIkAtWFhYLS1eXl5eXl5eXl5eLS1cIiwgXCItLSNYWC0tLS0tLS0tLSojWC0tXCIsIFwiLS0tWFgtLS0tLS1YLS1YWFgtLVwiLCBcIi0tLVhYLS0tLS1YWC0tWFgtLS1cIiwgXCItLS0tLS0tLS1YWFgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tWCMqLS1YLS0tLVwiLCBcIi0tLS0tLS0tLVhYWC0tWC0tLS1cIiwgXCItLS1YWC0tLS0tWFgtLVgtLS0tXCIsIFwiLS0tWFgtLS0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWC0tXl5eXl5eXl5eXi1PXCJdLCBcIjNfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYLS0jWFhYLS1cIiwgXCItLS0tLS0tWFhYWC0tLVhYWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tKi0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiMV84XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0qWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0tLS0tLS1PXCJdLCBcIjExXzdcIjogW1wiQC1eXl5eXl5eXl5eLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS1YLS0tLVhYWC0tXCIsIFwiLS1YWFgtLS1YWC0tLS1YWFgtLVwiLCBcIi0tWCpYLS1YWFgtLS0tWFgtLS1cIiwgXCItLVgmLS0tWCMqLS0tLVhYLS0tXCIsIFwiLS1YKlgtLVhYWC0tLS0tLS0tLVwiLCBcIi0tWFhYLS0tWFgtLS0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS1YLS0tLVhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS1YWFgtLVwiLCBcIi0tXl5eXl5eXl5eXi0tWFhYLU9cIl0sIFwiMTVfM1wiOiBbXCJALS0tXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLS0tLVwiLCBcIi0tLS0tLS0tWC0tXi0tLS1YLS1cIiwgXCItLS0tLS0tWFgtLV4tLS1YWC0tXCIsIFwiLS0tLS0tWFhYLS1eLS1YWFgtLVwiLCBcIi0tLS0tLVgjKi0tLS0tWCMqLS1cIiwgXCItLS0tLS1YWFgtLSYtLVhYWC0tXCIsIFwiLS0tLS0tLVhYLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLV5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxXzExXCI6IFtcIkAtWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS0qWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0mLS0tLS1PXCJdLCBcIjlfMVwiOiBbXCJALS0tLS0tLS0tLV5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0tWC0jLS1cIiwgXCItLS0tLS0tLS0tLS0tLVgtLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS1YLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS1eXl5eXl4tT1wiXSwgXCI5XzBcIjogW1wiQC0tLS0tLS0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSotLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLV5eXl5eLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0mLS0tXCIsIFwiLS0tLS0tLS0tLS0tXl5eXl4tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tXl5eLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKi0tLVwiLCBcIi0tKi0tLS0tLV5eXl5eXl5eLU9cIl0sIFwiMV8xMFwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0mLS1YWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tWFhYLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIxNV8yXCI6IFtcIkAtLV5eXi0tXl5eXl5eXl5eLS1cIiwgXCItLS1eXl4tLS0tLS0tLS0qIy0tXCIsIFwiLS0tXl5eLS0tLS0tWC0tWFgtLVwiLCBcIi0tLV5eXi0tLS0tWFgtLVhYLS1cIiwgXCItLS0tKi0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tXl5eLS0tLVgjKi0tWC0tLVwiLCBcIi0tLS0mLS0tLS1YWFgtLVgtLS1cIiwgXCItLS1eXl4tLS0tLVhYLS1YLS0tXCIsIFwiLS0tXl5eLS0tLS0tWC0tWC0tLVwiLCBcIi0tLV5eXi0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXl4tLV5eXl5eXl5eXi1PXCJdLCBcIjExXzZcIjogW1wiQC1eXl5eXl5eXl5eLS1YWFgtLVwiLCBcIi0tLS0tLVgtLVgtLS0tWFhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tWFhYLS1cIiwgXCItLSNYLSNYLSNYLS0tLVhYWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS1YWC0tLVwiLCBcIi0tXl5eXl5eXl5eXi0tWFhYLU9cIl0sIFwiMV85XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYWFgtLS1cIiwgXCItLVhYLS1YWFgtLS0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0qWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFgtLS1cIiwgXCItLSMtLS0tJi0tLS0tLVhYLS1PXCJdLCBcIjNfMTVcIjogW1wiQC0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLSNYWFhYLS0jWFhYLS1cIiwgXCItLS0tLS0tWFhYWC0tLVhYWC0tXCIsIFwiLS0tLS0tLS0qLS0tLS0tKi0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfNFwiOiBbXCJALS1eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tWC0tWC0tLS1YWC0tXCIsIFwiLS0tLS0tLVgtLVheLS0tWCotLVwiLCBcIi0tLV5eLS1YWFhYXl4tLVgmLS1cIiwgXCItLS0tLS0tWC0tWF4tLS1YKi0tXCIsIFwiLS0tXl4tLVgtLVgtLS0tWFgtLVwiLCBcIi0tLV5eLS0tLS0vL1xcXFxcXFxcLy9cXFxcLS1cIiwgXCItLS1eXi0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy0tXCIsIFwiLS0tXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzExXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSNYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjEzXzBcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLSMtLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTFfMlwiOiBbXCJALS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tXi0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tJi0tLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS1eXl5eXl5eXl4tT1wiXSwgXCIxN180XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0jWC0jWC0jWC0jWC0jWC0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLVgtLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjVfOVwiOiBbXCJALS0tLV4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS1eLS1YWFhYWFhYWFgtT1wiXSwgXCIxXzE0XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0jWFhYWFhYLS0mLS0tXCIsIFwiLS0tLS0tLVhYWFhYWC0tLS0tLVwiLCBcIi0tLS0tLS0tKi0tLS0tLS0tLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjlfNFwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLVgtLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YXi0tLVgtLVwiLCBcIi0tLS0tLS0tWFhYWF5eLS1YLS1cIiwgXCItLS0tLS0tLVgtLVheLS0tWC0tXCIsIFwiLS0tLS0tLS1YLS1YLS0tLVgtLVwiLCBcIi0tJi0tLS0tLS0tLy9cXFxcXFxcXC8vLS1cIiwgXCItLS0tLS0tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxNV82XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS1YLS1YLS0tLVhYLS1cIiwgXCItLVgqWC0tWC0tWF4tLS1YKi0tXCIsIFwiLS1YJi0tLVhYWFheXi0tWCYtLVwiLCBcIi0tWCpYLS1YLS1YXi0tLVgqLS1cIiwgXCItLVhYWC0tWC0tWC0tLS1YWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS8vXFxcXFxcXFwvL1xcXFwtLVwiLCBcIi0tXFxcXC8vLS0tLS1cXFxcXFxcXC8vXFxcXFxcXFwvLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjlfNVwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0vXFxcXFxcXFwtWC0tLS0tLS0tLSotLVwiLCBcIi0tXFxcXC8vLVgtLS0tLS1YLS1YLS1cIiwgXCItLS0tLS1YLS0tLS1YWC0tWC0tXCIsIFwiLS0mLS0tWC0tLS1YWFgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tWCMqLS1YLS1cIiwgXCItLSYtLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tWC0tLS0tWFgtLVgtLVwiLCBcIi0tL1xcXFxcXFxcLVgtLS0tLS1YLS1YLS1cIiwgXCItLVxcXFwvLy1YLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxXzE1XCI6IFtcIkAtLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYLS0jWFhYWC0tXCIsIFwiLS0tLVhYWFhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tKi0tLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjVfOFwiOiBbXCJALS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS0tLSMtLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0jLS0tIy0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tJi0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tKi0tWFhYWFhYWFgtT1wiXSwgXCIxN181XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLSpYLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS0mLS0tWCMqLS1YIyotLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLVhYLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjExXzNcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLSMtLS0tLVgtLVgjKi0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLVhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTNfMVwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWFgtLV5eXl4tLVwiLCBcIi0tIy0tLS0tWCMqLS0tLS0mLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzEwXCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tI1hYWC0tXCIsIFwiLS0tLS0jLS0tLSYtLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLSotLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcLy8tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLSotLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjNfMTJcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tI1hYWFgtLSotLS1cIiwgXCItLS0tLS0tLS1YWFhYLS0tLS0tXCIsIFwiLS0tLS0tLS0tLSotLS0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTNfM1wiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLy8tLS0tLS0tLVgtLVhYLS1cIiwgXCItLS0tLS0tLS0tLVhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YIyotLVgtLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tWC0tLVwiLCBcIi0tJi0tLS0tLS0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIxMV8xXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS1eLS1YWC0tXCIsIFwiLS0mLS0tLS0tLS0tXi0tWC0tLVwiLCBcIi0tLS0tLS0tLS0tLV4tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjlfN1wiOiBbXCJALVhYWFhYLS1eXl5eXl5eXi0tXCIsIFwiLS1YWFhYWC0tLS0tLS0tLSotLVwiLCBcIi0tWFhYWFgtLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYLS0tLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFgtLVgtLVwiLCBcIi0tLS0mLS0tLS0tWCMqLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tWFhYWC0tLS0tWFgtLVgtLVwiLCBcIi0tWFhYWFgtLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWC0tXl5eXl5eXl4tT1wiXSwgXCIxXzE3XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSNYWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tWFhYWC0tLVwiLCBcIi0tWFhYWFhYWC0tLS0qLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE1XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tI1gtLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YLS0tWC0tWC0tLS1YWFgtLVwiLCBcIi0tLS0tLVgtLVheLS0tWCpYLS1cIiwgXCItLS0tLS1YWFhYXl4tLVgmLS0tXCIsIFwiLS0tLS0tWC0tWF4tLS1YKlgtLVwiLCBcIi0tLS0tLVgtLVgtLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0vL1xcXFxcXFxcLy9cXFxcXFxcXC0tXCIsIFwiLS0tLS0tLS0tXFxcXFxcXFwvL1xcXFxcXFxcLy8tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiN184XCI6IFtcIkAtLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tKi0tLS0tKi0tLSotLS0tXCIsIFwiLS0tXl5eLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0mLS0tLS0tIy0tLSMtLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjdfOVwiOiBbXCJALS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLSotLS0tLSotLS0jWFgtLVwiLCBcIi0tLV5eXi0tLS0tLS0tLVhYLS1cIiwgXCItLS0tJi0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCIxNV80XCI6IFtcIkAtLS1eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tJi0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS1YWC0tLVhYLS1YLS1cIiwgXCItLS0tLS1YWFgtLVhYWC0tWC0tXCIsIFwiLS0tLS0tWCMqLS1YIyotLVgtLVwiLCBcIi0tLS0tLVhYWC0tWFhYLS1YLS1cIiwgXCItLS0tLS0tWFgtLS1YWC0tWC0tXCIsIFwiLS0tLS0tLS1YLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjFfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLSNYWFhYLS1cIiwgXCItLS0tJi0tWFhYLS0tWFhYWC0tXCIsIFwiLS0tLS0tLVhYWC0tLS0qLS0tLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiOV82XCI6IFtcIkAtWFhYWFgtLV5eXl5eXl5eLS1cIiwgXCItLSNYWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLSNYLSMtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS1YWFhYLS0tLVgtLVgtLS0tXCIsIFwiLS0tWFhYWC0tLS1YLS1YLS0tLVwiLCBcIi0tLVhYWFgtLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYLS1eXl5eXl5eXi1PXCJdLCBcIjExXzBcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tKi0tLS0qLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSYtLS0tJi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0qLS0tLSotLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTNfMlwiOiBbXCJALS0tLS1eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLVhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tIy0tLS0tLS1YIyotLVgjLS1cIiwgXCItLS0tLS0tLS0tWFhYLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tXl5eXl5eXl5eXl4tT1wiXSwgXCIzXzEzXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYLS0tLS0jWFhYWC0tXCIsIFwiLS0jLS1YWC0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSotLS0tKi0tLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjE0XzNcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLSMtLS0tLVgjKi0tWC0jWC0tXCIsIFwiLS0tLS0tLS1YWFgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiOF8xXCI6IFtcIkAtLS0tLS0tLS0tLS1eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0jLS0jLS0tLS0tWCMtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tXl5eXi1PXCJdLCBcIjdfMTBcIjogW1wiQC1eXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tKlgtLS0tLS0tLS0jWFhYLS1cIiwgXCItLSYtLS0tLS0tLS0tLVhYWC0tXCIsIFwiLS0qWC0tLS0tLSMtLS0tKi0tLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tXl5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiMTBfN1wiOiBbXCJALV5eXl5eXl5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tWC0tLS1YWFhYLS1cIiwgXCItLVhYLS0tWFgtLS0tWFhYWC0tXCIsIFwiLS0qWC0tWFhYLS0tLVhYWFgtLVwiLCBcIi0tJi0tLVgjKi0tLS1YWFhYLS1cIiwgXCItLSpYLS1YWFgtLS0tWFhYWC0tXCIsIFwiLS1YWC0tLVhYLS0tLS0tWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS0tWC0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tWFgtLS0tXCIsIFwiLS1eXl5eXl5eXl4tLVhYWFgtT1wiXSwgXCI1XzE1XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0qLS0tXCIsIFwiLS1YWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFgtLS0tIy0tLSMtLS0jLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEyXzVcIjogW1wiQC1eXl5eXl5eXl5eXi0tWFgtLVwiLCBcIi0tLS0tLVgtLVgtLS0tLVhYLS1cIiwgXCItLS1YLS1YLS1YLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLVhYLS1cIiwgXCItLSNYLSNYLSNYLS0tLS1YWC0tXCIsIFwiLS0tWC0tWC0tWC0tLS0tWFgtLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS1YLS1YLS0tLS0tLS0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tXl5eXl5eXl5eXl4tLVhYLU9cIl0sIFwiMF84XCI6IFtcIkAtLS0tLSMtLS1YLS1YWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0vLy0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFgtLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLS0tLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0jLS0tJi0tWFhYWC1PXCJdLCBcIjBfOVwiOiBbXCJALS0tLS0jLS0tLVhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tLy8tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLS1YWFhYWFgtLVwiLCBcIi0tJi0tLVhYLS0tWFhYWFhYLS1cIiwgXCItLS0tLS1YWC0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tIy0tLS1YWFhYWFgtT1wiXSwgXCIxMl80XCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLVhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLVhYWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS1YIyotLVgtI1gtLVwiLCBcIi0tLS0tLS0tWFhYLS1YLS1YLS1cIiwgXCItLS0tLS0tLS1YWC0tWC0tWC0tXCIsIFwiLS0mLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjVfMTRcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tI1hYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0tLS0tLS0jLS0jLS0tLSotLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfNlwiOiBbXCJALVhYWFgtLV5eXl5eXl5eXi0tXCIsIFwiLS0jWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLSNYLSNYLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFhYLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYWC0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWFgtLS0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYLS1eXl5eXl5eXl4tT1wiXSwgXCI3XzExXCI6IFtcIkAtXl5eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tWFhYLS0tLVhYWFhYWFhYLS1cIiwgXCItLVgqWC0tLS0tLSNYWFhYWC0tXCIsIFwiLS1YJi0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tWCpYLS0tLS0tLS0qLS0tLS1cIiwgXCItLVhYWC0tLS1YWFhYWFhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLVhYWFhYWFhYLS1cIiwgXCItLV5eXl5eLS1YWFhYWFhYWC1PXCJdLCBcIjBfMThcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiOF8wXCI6IFtcIkAtLS0tLS0tLS0tLV5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0jLS0jLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tJi0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS1eXl5eXi1PXCJdLCBcIjE0XzJcIjogW1wiQC0tLS1eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YWC0tLVgtLVwiLCBcIi0tLS0tLS0tLS1YWFgtLVhYLS1cIiwgXCItLSMtLS0tLS0tWCMqLS1YIy0tXCIsIFwiLS0tLS0tLS0tLVhYWC0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS1YLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tXl5eXl5eXl5eXl5eLU9cIl0sIFwiMTRfMFwiOiBbXCJALS1eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLS0qLS0tLSotLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLV5eLS0tLS0tJi0tLS0mLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0tXl4tLS0tLV5eXi0tXl4tLVwiLCBcIi0tLV5eLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1eXi0tLS0tLSotLS0tKi0tXCIsIFwiLS0tXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCI4XzJcIjogW1wiQC0tLS0tLS0tLS1eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLy9cXFxcLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVxcXFxcXFxcLy0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tXl5eXl5eLU9cIl0sIFwiMTZfMlwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tWC0tWC0tLS0tKi0tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS1YLS1YLS0tLV5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tXl5eXl4tLVwiLCBcIi0tI1gtI1gtI1gtLS0tLSYtLS1cIiwgXCItLS1YLS1YLS1YLS1eXl5eXi0tXCIsIFwiLS0tWC0tWC0tWC0tLS1eXl4tLVwiLCBcIi0tLVgtLVgtLVgtLS0tLS0tLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0qLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIxMF80XCI6IFtcIkAtLVhYLS1eXl5eXl5eXl5eLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtI1gtI1gtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS0tLS0tLS0tLS1cIiwgXCItLS1YWC0tXl5eXl5eXl5eXi1PXCJdLCBcIjVfMTZcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLSNYWFhYLS0qLS0tI1hYLS1cIiwgXCItLS0tWFhYWC0tLS0tLS1YWC0tXCIsIFwiLS0tLS0qLS0tLS0jLS0tLSotLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl85XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0jLVhYWFgtLS1cIiwgXCItLVhYLS1YWFgtLS0tLVhYLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tWFhYWFhYWFhYLS0tWFgtLS1cIiwgXCItLVhYWFhYWFhYWC0tLVhYLS0tXCIsIFwiLS0qWFhYWFhYWFgtLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFgtLS1cIiwgXCItLSMtLS0tJi0tLS0tLVhYLS1PXCJdLCBcIjEyXzZcIjogW1wiQC1eXl5eXl5eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS1YWC0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tKlgtLVhYWC0tLS0tLSotLS1cIiwgXCItLSYtLS1YIyotLS0tLS0tLS0tXCIsIFwiLS0qWC0tWFhYLS0tLS0tLSMtLVwiLCBcIi0tWFgtLS1YWC0tLS1YWFhYLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS0vLy0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tXl5eXl5eXl5eLS1YWFhYLU9cIl0sIFwiMl84XCI6IFtcIkAtWFgtLVhYWC0tLS0tLS0tLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWC0tWFhYLS0tWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tLVhYLSMtLS1cIiwgXCItLVhYLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tWFhYWFhYWFhYLS0tLVhYLS1cIiwgXCItLVhYWFhYWFhYWC0tLS1YWC0tXCIsIFwiLS0qWFhYWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSMtLS0tJi0tLS0tLS0tLS1PXCJdLCBcIjEwXzVcIjogW1wiQC1YWFgtLS1eXl5eXl5eXl4tLVwiLCBcIi0tI1hYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0jWC0jWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLVhYLS0tLS1YLS1YLS1YLS1cIiwgXCItLS1YWC0tLS0tWC0tWC0tWC0tXCIsIFwiLS0tWFgtLS0tLS0tLS0tLS0tLVwiLCBcIi0tWFhYLS0tXl5eXl5eXl5eLU9cIl0sIFwiN18xMlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWC0tWFgqI1hYKiNYWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWCojWFgtLVhYLS1YWCojLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCIxNl8zXCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tXl4tLS0tLS1YWC0tLVhYLS1cIiwgXCItLV5eXl4tLS1YWFgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tWCMqLS1YIyotLVwiLCBcIi0tXl5eXi0tLVhYWC0tWFhYLS1cIiwgXCItLV5eLS0tLS0tWFgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLVgtLVwiLCBcIi0tJi0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfM1wiOiBbXCJALS0tLS0tLS0tWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLS0tLS0tLS1YLS0tLVhYLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1YWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tWC0tLVwiLCBcIi0tLS0tIy0tWCMmLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tWC0tLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tLVgtLV5eXl4tT1wiXSwgXCIxNF8xXCI6IFtcIkAtLS0tXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYWC0tXl5eXi0tXCIsIFwiLS0jLS0tLS1YIyotLS0tLSYtLVwiLCBcIi0tLS0tLS0tWFhYLS1eXl5eLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1eXi0tXCIsIFwiLS0tLS0tLS0tLVgtLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLV5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfN1wiOiBbXCJALVhYWFhYWC0tXl5eXl5eXi0tXCIsIFwiLS0jWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tJi0tLS0tLS1YLSNYLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0tWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tLVhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLS1YWFhYWC0tLS0tLS0tLS0tXCIsIFwiLS1YWFhYWFgtLV5eXl5eXl4tT1wiXSwgXCIxNF81XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYLS1YLS1cIiwgXCItLS0tLS1YXi0tLVgqWC0tWC0tXCIsIFwiLS1YWFhYWF5eLS1YJi0tLVgtLVwiLCBcIi0tLS0tLVheLS0tWCpYLS1YLS1cIiwgXCItLS0tLS1YLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tLy9cXFxcXFxcXC8vXFxcXFxcXFwtLVgtLVwiLCBcIi0tLS0tLVxcXFxcXFxcLy9cXFxcXFxcXC8vLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjZfOFwiOiBbXCJALS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0qLS0tLS0tLS0jWFgtLVwiLCBcIi0tLS1eXl4tLS0tLS0tLVhYLS1cIiwgXCItLS0tLSYtLS0tLSMtLS0tKi0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtT1wiXSwgXCI1XzEzXCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSotLS0qLS0tXCIsIFwiLS0tLS0mLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjEwXzFcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS1eLS0tWC0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLVgtIy0tXCIsIFwiLS0tLS0tLS0tLSYtLS1YLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tWC0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiMTJfM1wiOiBbXCJALS0tLS0tXl5eXl5eXl5eXi0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLy8tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tWFgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tWFhYLS0tWC0tLVwiLCBcIi0tLS0tLS0tLVgjKi0tLVgtLS1cIiwgXCItLS0tLS0tLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS0tLS0tLVhYLS0tWC0tLVwiLCBcIi0tJi0tLS0tLS0tWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLV5eXl5eXl5eXl4tT1wiXSwgXCIxMl8yXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS0tLS0tLS0tLS0tKi0tXCIsIFwiLS0vLy0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLVhYWC0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YIyotLVgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYLS1YLS1cIiwgXCItLS0tLS0tLS0tLS1YWC0tWC0tXCIsIFwiLS0mLS0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjEwXzBcIjogW1wiQC0tLS0tLS1eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0qLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS1eXl5eLS1cIiwgXCItLS0tLSMtLS0tLS0tLS0tJi0tXCIsIFwiLS0tLS0tLS0tLSYtLV5eXl4tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLV5eLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSotLVwiLCBcIi0tKi0tLS0tXl5eXl5eXl5eLU9cIl0sIFwiNV8xMlwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLSMtLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI2XzlcIjogW1wiQC0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0qLS0tLS0tLS0jWFhYLS1cIiwgXCItLS1eXl4tLS0tLS0tLVhYWC0tXCIsIFwiLS0tLSYtLS0tLSMtLS0tKi0tLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS1eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0tXl5eLS1YWFhYWFhYWFgtLVwiLCBcIi0tLV5eXi0tWFhYWFhYWFhYLU9cIl0sIFwiMTRfNFwiOiBbXCJALV5eXl5eXl5eXl5eXi0tWC0tXCIsIFwiLS0tLS0tWC0tLS0tLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS0tWC0tLS1YLS1cIiwgXCItLS1YLS1YLS0tWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tWFhYLS0tLVgtLVwiLCBcIi0tI1gtI1gtLVgjKi0tLS1YLS1cIiwgXCItLS1YLS1YLS1YWFgtLS0tWC0tXCIsIFwiLS0tWC0tWC0tLVhYLS0tLVgtLVwiLCBcIi0tLVgtLVgtLS0tWC0tLS1YLS1cIiwgXCItLS1YLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS1eXl5eXl5eXl5eXl4tLSYtT1wiXSwgXCI4XzZcIjogW1wiQC0tLV5eXl5eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tLVhYLS0tLVhYWFgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YWFgtLS1cIiwgXCItLS0tLS1YIyotLS0tWFgtLS0tXCIsIFwiLS0tLS0tWFhYLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS1YWC0tLS1YWFhYLS1cIiwgXCItLS0tLS0tLVgtLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLVhYWFgtLVwiLCBcIi0tLS1eXl5eXl5eLS1YWFhYLU9cIl0sIFwiOF80XCI6IFtcIkAtLS0tLSMtLS0tXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0vLy0tWFgtLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLVhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS1YIyotLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLS1YWC0tLS0tLS1YWC0tXCIsIFwiLS0mLS0tWFgtLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0tLV5eXl5eXi1PXCJdLCBcIjE2XzRcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLVgtLVgtLVgtLVgtLS1cIiwgXCItLS1YLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS0tLS1cIiwgXCItLSNYLSNYLSNYLSNYLS0tLS0tXCIsIFwiLS0tWC0tWC0tWC0tWC0tLS0tLVwiLCBcIi0tLVgtLVgtLVgtLVgtLS0vLS1cIiwgXCItLS1YLS1YLS1YLS1YLS0tXFxcXC0tXCIsIFwiLS0tWC0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNF85XCI6IFtcIkAtLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tIy0tLS0qLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC1PXCJdLCBcIjVfMTBcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMTBfMlwiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS1eLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tXi0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLV4tLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1eLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tLS0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLSYtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCIxMl8wXCI6IFtcIkAtLS0tLV5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tLSotLS0tKi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS1eXl4tLV5eLS1cIiwgXCItLS0tLS0tLV5eXl5eXl5eXi0tXCIsIFwiLS0jLS0tLS0tLS0mLS0tLSYtLVwiLCBcIi0tLS0tLS0tXl5eXl5eXl5eLS1cIiwgXCItLS0tLS0tLS0tXl5eLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tKi0tLS0qLS1cIiwgXCItLS0tLS1eXl5eXl5eXl5eXi1PXCJdLCBcIjEyXzFcIjogW1wiQC0tLS0tXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS1eLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tXi0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLV4tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS1eLS0tWFhYLS1cIiwgXCItLSMtLS0tLS0tLS0tLVgjKi0tXCIsIFwiLS0tLS0tLS0tLSYtLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLV5eXl5eXl5eXl5eLU9cIl0sIFwiMTBfM1wiOiBbXCJALS0tLS0tLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tIy0tLS0tWC0tWCMqLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tXl5eXl5eXl4tT1wiXSwgXCI1XzExXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0jWC0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0tLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfOFwiOiBbXCJALVhYLS0tLS0tLS1YWFgtLS0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFgtLS1YWC0tLVhYWC0tLS1cIiwgXCItLVhYLSMtWFgtIy1YWFgtIy0tXCIsIFwiLS1YWC0tLS0tLS0tWFhYLS0tLVwiLCBcIi0tWFhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLVhYWFgtLS0tWFhYWFhYWC0tXCIsIFwiLS1YWFhYLS0tLVhYWFhYWFgtLVwiLCBcIi0tKlhYWC0tLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLS0tLS0tLSYtLS0tT1wiXSwgXCIxNl81XCI6IFtcIkAtXl5eXl5eXl5eXl5eXl5eLS1cIiwgXCItLS0tLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0tLS0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tWFgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLSpYLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS0mLS0tWC0jWC0jWC0jWC0tLVwiLCBcIi0tKlgtLVgtLVgtLVgtLVgtLS1cIiwgXCItLVhYLS1YLS1YLS1YLS1YLS0tXCIsIFwiLS1cXFxcXFxcXC0tWC0tWC0tWC0tWC0tLVwiLCBcIi0tLy8tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV5eXl5eXl5eXl5eXl5eXi1PXCJdLCBcIjhfNVwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWC0tXl5eXl5eXl4tLVwiLCBcIi0tLS0tWFgtLS0tXl5eLS0tLS1cIiwgXCItLS0tLVhYLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS8vXFxcXFxcXFwtLVwiLCBcIi0tIy0tLS0tLS0tLS1cXFxcXFxcXC8vLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS1YWC0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tWFgtLS0tXl5eLS0tLS1cIiwgXCItLS0tLVhYLS1eXl5eXl5eXi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI4XzhcIjogW1wiQC1YWFhYWFgtLV5eXl5eXl4tLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLVgtLVgtLVwiLCBcIi0tWFhYWC0tLS0tLS1YLS1YLS1cIiwgXCItLVhYWFgtLS0tLS0tWC0jWC0tXCIsIFwiLS0tKi0tLS0tLS0tLVgtLVgtLVwiLCBcIi0tWFhYWFhYLS0tLS1YLS1YLS1cIiwgXCItLVhYWFhYWC0tLS0tWC0tWC0tXCIsIFwiLS1YWFhYWFgtLS0tLS0tLS0tLVwiLCBcIi0tWFhYWFhYLS1eXl5eXl5eLU9cIl0sIFwiNl83XCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLS0tKi0tLS0tXl5eXi0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLS1eXl5eLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjBfMTBcIjogW1wiQC0tLS0tIy0tLVhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YWFhYWFhYLS1cIiwgXCItLS8vLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tWFhYWC0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tWFhYLS1cIiwgXCItLSYtLS1YWC0tWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVhYWFhYWFgtLVwiLCBcIi0tLS0tLSMtLS1YWFhYWFhYLU9cIl0sIFwiNF81XCI6IFtcIkAtLS0tLS0tIy0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1YWC0tXCIsIFwiLS0tLS0jLS0tLS0tLS0mKiMtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS1YWC0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS1YWFhYWC1PXCJdLCBcIjJfMTVcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tI1hYWFgtLS0tLS1cIiwgXCItLS0tLSYtLS1YWFhYLS0tWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0tLVgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiMl8zXCI6IFtcIkAtLS0tLS0tIy0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS1YLS0mLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLSotLS0tLSMtLS0mLS0tLS1PXCJdLCBcIjBfMVwiOiBbXCJALS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLy8tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tLS0tLVwiLCBcIi0tLS0tLSMtLSYtLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tWC0tJi0tLVwiLCBcIi0tJi0tLS0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tJi0tLS0tT1wiXSwgXCIwXzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLS0tLS0tLS0tLS0tLS1cIiwgXCItLS8vLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0mLS0mLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSYtLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLU9cIl0sIFwiMl8yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0mLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS0tLS1PXCJdLCBcIjJfMTRcIjogW1wiQC0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWC0tLS0tI1hYWFgtLS1cIiwgXCItLS0tWFgtLS0tLS1YWFhYLS0tXCIsIFwiLS0tLS0tLS0qLS0tLSotLS0tLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLU9cIl0sIFwiNF80XCI6IFtcIkAtLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLVhYWC0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS1YWC0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgqLS1cIiwgXCItLSotLS0tLSotLSYtLVhYLS1PXCJdLCBcIjBfMTFcIjogW1wiQC0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS1YWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tIy0tWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLSYtLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLU9cIl0sIFwiNl82XCI6IFtcIkAtLS0tLVhYWFhYLS1eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWC0tLS0qIy0tXCIsIFwiLS0vLy0tWFhYWFgtLS0tWFgtLVwiLCBcIi0tLS0tLVhYWFhYLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tIy0tLS0tLVgtLS1cIiwgXCItLS0tLS1YWFhYWC0tLS1YLS0tXCIsIFwiLS0mLS0tWFhYWFgtLS0tWC0tLVwiLCBcIi0tLS0tLVhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLS1YWFhYWC0tXl5eXi1PXCJdLCBcIjhfOVwiOiBbXCJALV5eXl4tLVhYWFhYWFhYWC0tXCIsIFwiLS0jWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVgtLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLSotLS0jWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLSMtLS0tKi0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1eXl5eLS1YWFhYWFhYWFgtT1wiXSwgXCI2XzRcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLSMtLV5eXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tIy0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS1YWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiMF8xM1wiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLy8tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLVhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tJi0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzZcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLS0tJi0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tKi0tWFhYWFhYLU9cIl0sIFwiMThfNFwiOiBbXCJALV5eXl5eXl5eXl5eXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tKiMtLVwiLCBcIi0tLS0tLVgtLS0tWC0tLVhYLS1cIiwgXCItLS0tLVhYLS0tWFgtLS1YWC0tXCIsIFwiLS0tLVhYWC0tWFhYLS0tWC0tLVwiLCBcIi0tLS1YIyotLVgjKi0tLVgtLS1cIiwgXCItLS0tWFhYLS1YWFgtLS1YLS0tXCIsIFwiLS0tLS1YWC0tLVhYLS0tWC0tLVwiLCBcIi0tLS0tLVgtLS0tWC0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1eXl5eXl5eXl5eXl5eXl4tT1wiXSwgXCIyXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0jWFhYWC0tXCIsIFwiLS0tLS1YWFhYWC0tLVhYWFgtLVwiLCBcIi0tLS0tWFhYWFgtLS0tKi0tLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjJfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tJi0tJi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLSotLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCIwXzJcIjogW1wiQC0tLS0tIy0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS0tLS0tLS0tLS1cIiwgXCItLS8vLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tJi0tJi0tJi0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS0tLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLS0tLS0tLS0tLVwiLCBcIi0tLS0tLSMtLS0tLS0tLS0tLU9cIl0sIFwiMF8zXCI6IFtcIkAtLS0tLSMtLS1YLS0tLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0vLy0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLSYtLSYtLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0mLS0tWFgtLVgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tLS0tLS1PXCJdLCBcIjJfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLSotLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0tLS0tT1wiXSwgXCIyXzE3XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFgtLSNYWFhYLS0tXCIsIFwiLS1YWFhYWFhYLS0tWFhYWC0tLVwiLCBcIi0tLSotLS0tLS0tLS0qLS0tLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjE4XzVcIjogW1wiQC1eXl5eXl5eXl5eXl5eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0qLS1cIiwgXCItLS0tLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS1YWC0tLVhYLS0tWFgtLVgtLVwiLCBcIi0tKlgtLVhYWC0tWFhYLS1YLS1cIiwgXCItLSYtLS1YIyotLVgjKi0tWC0tXCIsIFwiLS0qWC0tWFhYLS1YWFgtLVgtLVwiLCBcIi0tWFgtLS1YWC0tLVhYLS1YLS1cIiwgXCItLVxcXFxcXFxcLS0tLVgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tXl5eXl5eXl5eXl5eXl5eLU9cIl0sIFwiNF83XCI6IFtcIkAtLS0tLVhYWFhYWC0tXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0vLy0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tIy0tLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0mLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS0jLS1cIiwgXCItLS0tLS1YWFhYWFgtLV5eXi1PXCJdLCBcIjBfMTJcIjogW1wiQC0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLS1YWFhYWFhYWFhYLS1cIiwgXCItLS8vLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLSYtLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLVhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLU9cIl0sIFwiNl81XCI6IFtcIkAtLS0tLVhYWC0tXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0vLy0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS1YLS1YLS1cIiwgXCItLS0tLS1YWFgtLS0tWC0tWC0tXCIsIFwiLS0tLS0tWFhYLS0tLVgtI1gtLVwiLCBcIi0tLS0tLS0tLS0tLS1YLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tWC0tWC0tXCIsIFwiLS0mLS0tWFhYLS0tLVgtLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWFgtLV5eXl5eXi1PXCJdLCBcIjZfMVwiOiBbXCJALS0tLS0tLS0tLVgtLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLV4tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tJi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS1eXl4tT1wiXSwgXCIwXzE2XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0mLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tXl4tT1wiXSwgXCIyXzEzXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tIy0tWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjJfNVwiOiBbXCJALS0tLS0tLSMtLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWC0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tWC0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLVgtLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tJi0tT1wiXSwgXCIwXzdcIjogW1wiQC0tLS0tIy0tLVgtLVhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYLS1YLS1YWFhYLS1cIiwgXCItLS8vLS1YWC0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0tWC0tWFhYWC0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYWFgtLVwiLCBcIi0tLS0tLVhYLS1YLS0tLS0tLS1cIiwgXCItLSYtLS1YWC0tWC0tLS0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVhYLS0tLVwiLCBcIi0tLS0tLSMtLS0mLS1YWFhYLU9cIl0sIFwiMF82XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS1YLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tWC0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLVgtLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS1YLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tJi1PXCJdLCBcIjJfNFwiOiBbXCJALS0tLS0tLSMtLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLVgtLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS1YLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tWC0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLVgtLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCIyXzEyXCI6IFtcIkAtLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0vLy0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLSNYWFhYLS0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWC0tLVwiLCBcIi0tLS0tLS0tIy0tLS0qLS0tLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0mLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC1PXCJdLCBcIjRfMlwiOiBbXCJALS0tLS0tLSMtLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXl4tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLSYtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLV5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0qLS0tLS0jLS0tLS0tXl4tT1wiXSwgXCIwXzE3XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS1YWC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjZfMFwiOiBbXCJALS0tLS0tLS0tLS0tLV5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tJi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tLS1eXl4tT1wiXSwgXCI2XzJcIjogW1wiQC0tLS0tLS0tLS1YLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tXl5eLU9cIl0sIFwiMF8xNVwiOiBbXCJALS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS1YWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLVhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzBcIjogW1wiQC0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS8tLVwiLCBcIi0tKi0tLS0tKi0tLS0tLS1cXFxcLU9cIl0sIFwiMl8xMFwiOiBbXCJALS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLS0tLVwiLCBcIi0tLS0tIy0tWFhYLS0mLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tIy0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWFhYWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0qLS0tLS1YWFhYWFhYWFgtT1wiXSwgXCIyXzZcIjogW1wiQC0tLS0tLS0jLS0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVgtLVhYLS1cIiwgXCItLS0tLSMtLS0tLS1YLS1YWC0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tWFgtLVwiLCBcIi0tKi0tLS0tIy0tLSYtLVhYLU9cIl0sIFwiMF80XCI6IFtcIkAtLS0tLSMtLS1YLS1YLS0tLS1cIiwgXCItLVxcXFxcXFxcLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0vLy0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tLS0tLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tJi0tXCIsIFwiLS0mLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS0jLS0tJi0tJi0tLS1PXCJdLCBcIjBfNVwiOiBbXCJALS0tLS0jLS0tWC0tWC0tLS0tXCIsIFwiLS1cXFxcXFxcXC0tWFgtLVgtLVgtLS8tLVwiLCBcIi0tLy8tLVhYLS1YLS1YLS1cXFxcLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tLS0tLS0tLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tWFgtLVgtLVgtLS0tLVwiLCBcIi0tJi0tLVhYLS1YLS1YLS0tLS1cIiwgXCItLS0tLS1YWC0tWC0tWC0tLS0tXCIsIFwiLS0tLS0tIy0tLSYtLSYtLS0tT1wiXSwgXCIyXzdcIjogW1wiQC0tLS0tLS0jLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLVhYWFhYLS1cIiwgXCItLS0tLS0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLSMtLS0tLS0tLSYtLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS1YWC0tWFhYWFgtLVwiLCBcIi0tKi0tLS0tIy0tLVhYWFhYLU9cIl0sIFwiMl8xMVwiOiBbXCJALVhYLS1YWFgtLVhYWC0tLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFgtLVhYWC0tWFhYLS0tLS1cIiwgXCItLVhYLS1YWFgtLVhYWC0jLS0tXCIsIFwiLS1YWC0tWFhYLS1YWFgtLS0tLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWC0tLVwiLCBcIi0tKlhYWFhYWFhYWFhYWFgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0jLS0tLSYtLS0tJi0tLS0tT1wiXSwgXCI0XzFcIjogW1wiQC0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0qLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tLS0tLU9cIl0sIFwiMF8xNFwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tIy0tLS1YWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCI2XzNcIjogW1wiQC0tLS0tLS0tLVgtLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tWFgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tWFhYLS0tLS1YLS1cIiwgXCItLS0tLSMtLVgjJi0tLS0tWC0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tLVgtLVwiLCBcIi0tL1xcXFxcXFxcLS0tLVhYLS0tLS1YLS1cIiwgXCItLVxcXFwvLy0tLS0tWC0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLSMtLVwiLCBcIi0tKi0tLS0tLS1YLS0tXl5eLU9cIl0sIFwiMV8yXCI6IFtcIkAtLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS8vXFxcXC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1cXFxcXFxcXC8tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLSYtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLSotLS0tLS0tLSYtLS0tLS1PXCJdLCBcIjNfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tJi0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0tLS0tLS0tT1wiXSwgXCI1XzZcIjogW1wiQC0tLS0tWFhYWFgtLV5eXl4tLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYLS0tLS0qLS1cIiwgXCItLS8vLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1YLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYLS0tLS1YLS1cIiwgXCItLSYtLS1YWFhYWC0tLS0tWC0tXCIsIFwiLS0tLS0tWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYLS1eXl5eLU9cIl0sIFwiNl8xMlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWC0tWFgtLVhYKiNYWC0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLVgtLVhYLS1YWC0tWFgtLS0tXCIsIFwiLS1YLS1YWC0tWFgtLVhYLS0tLVwiLCBcIi0tWComWFgqI1hYLS1YWCojLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI3XzRcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tLSotLS0tLSotLS1cIiwgXCItLS0tLSMtLV5eXi0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tJi0tLS0tLSMtLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS1YWFhYLS1cIiwgXCItLVxcXFwvLy0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiN181XCI6IFtcIkAtLS0tLVhYWC0tXl5eXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFgtLS0tLS0tLS0tXCIsIFwiLS0vLy0tWFhYLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tLVhYLS1cIiwgXCItLS0tLS1YWFgtLS0tLVhYWC0tXCIsIFwiLS0tLS0tWFhYLS0tLS1YIyotLVwiLCBcIi0tLS0tLS0tLS0tLS0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLS1YWC0tXCIsIFwiLS0mLS0tWFhYLS0tLS0tLVgtLVwiLCBcIi0tLS0tLVhYWC0tLS0tLS0tLS1cIiwgXCItLS0tLS1YWFgtLV5eXl5eXi1PXCJdLCBcIjZfMTNcIjogW1wiQC1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tI1hYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0qLS0tKi0tLSotLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLU9cIl0sIFwiNV83XCI6IFtcIkAtLS0tLVhYWFhYWC0tXl5eLS1cIiwgXCItLVxcXFxcXFxcLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0vLy0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS1YLS1cIiwgXCItLS0tLS0tLSotLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tLSMtLS0tLS1YLS1cIiwgXCItLS0tLS1YWFhYWFgtLS0tWC0tXCIsIFwiLS0mLS0tWFhYWFhYLS0tLVgtLVwiLCBcIi0tLS0tLVhYWFhYWC0tLS0jLS1cIiwgXCItLS0tLS1YWFhYWFgtLV5eXi1PXCJdLCBcIjNfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tLS0tT1wiXSwgXCIxXzNcIjogW1wiQC0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWC0tLS1cIiwgXCItLS0tLSMtLSYtLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tWC0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLVgtLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YLS0tLVwiLCBcIi0tKi0tLS0tLS0tJi0tJi0tLU9cIl0sIFwiNF8xNlwiOiBbXCJALVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tI1hYWFgtLS0tLSNYWFgtLVwiLCBcIi0tLS1YWFhYLS0tLS0tWFhYLS1cIiwgXCItLS0tLSotLS0tKi0tLS0qLS0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS1YWFhYWFhYWFhYWFhYWFgtT1wiXSwgXCI0XzE0XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS0tLSNYWC0tXCIsIFwiLS0tLS0mLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tIy0tIy0tLS0qLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjFfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tIy0tJi0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0mLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0mLS0tLS0tT1wiXSwgXCIzXzNcIjogW1wiQC0tLS0tLS0jLS0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLS0tLS1cIiwgXCItLS0tLSMtLS0tLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tWFgtLVgtLS0tLS1cIiwgXCItLVxcXFwvLy0tLVhYLS1YLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tKi0tLVwiLCBcIi0tKi0tLS0tIy0tLSYtLS0tLU9cIl0sIFwiNV81XCI6IFtcIkAtLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0tLS0tJi0tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLV5eXi0tWFhYWC0tXCIsIFwiLS0tLS0jLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFgtLS1cIiwgXCItLS9cXFxcXFxcXC0tLV5eXi0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tKi0tLS0tLVgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLSotLS0tLV5eXi0tWFhYWC1PXCJdLCBcIjlfOFwiOiBbXCJALV5eXl5eXl4tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYWFhYLS1cIiwgXCItLS0tLVhYLS0tLVhYWFhYWC0tXCIsIFwiLS0tLVhYWC0tLS0tLSNYWFgtLVwiLCBcIi0tLS1YIyotLS0tLS0tWFhYLS1cIiwgXCItLS0tWFhYLS0tLS0tLS0qLS0tXCIsIFwiLS0tLS1YWC0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLVgtLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS1eXl5eXl5eLS1YWFhYWFgtT1wiXSwgXCI2XzExXCI6IFtcIkAtLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tKi0tLSotLS0qLS0tXCIsIFwiLS0jLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tIy0tLSMtLS0jLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC1PXCJdLCBcIjdfN1wiOiBbXCJALS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLS0qLS0tLS0qLS0tKi0tLVwiLCBcIi0tLS1eXl4tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSYtLS0tLS0jLS0tIy0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtLVwiLCBcIi0tLS1eXl4tLVhYWFhYWFhYLS1cIiwgXCItLS0tXl5eLS1YWFhYWFhYWC0tXCIsIFwiLS0tLV5eXi0tWFhYWFhYWFgtT1wiXSwgXCI3XzZcIjogW1wiQC0tLS1YWFhYWFgtLV5eXl4tLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS0tLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLVgtLVwiLCBcIi0tLS0tLS0qLS0tLS0tLVhYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS1YIy0tXCIsIFwiLS0tLS0tLS0jLS0tLS0tWFgtLVwiLCBcIi0tLS0tWFhYWFhYLS0tLS1YLS1cIiwgXCItLS0tLVhYWFhYWC0tLS0tLS0tXCIsIFwiLS0tLS1YWFhYWFgtLS0tLS0tLVwiLCBcIi0tLS0tWFhYWFhYLS1eXl5eLU9cIl0sIFwiNl8xMFwiOiBbXCJALS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS1eLS0tLS0tLS0qLS0tKi0tLVwiLCBcIi0tXl4tLS0tLS0tLS0tLS0tLS1cIiwgXCItLV4tLS0tLSMtLS0jLS0tIy0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtT1wiXSwgXCI1XzRcIjogW1wiQC0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS1YWFhYLS1cIiwgXCItLS0tLS0tLS0mLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tLS0tLS0tXl5eLS0tLS0tLS1cIiwgXCItLS0tLSMtLV5eXi0tLS0mLS0tXCIsIFwiLS0tLS0tLS1eXl4tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tXl5eLS1YWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0qLS0tWFhYWC0tXCIsIFwiLS0tLS0tLS1eXl4tLVhYWFgtLVwiLCBcIi0tKi0tLS0tXl5eLS1YWFhYLU9cIl0sIFwiM18yXCI6IFtcIkAtLS0tLS0tIy0tLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0tLS0tJi0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS0tLS1eLS1PXCJdLCBcIjFfMFwiOiBbXCJALS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tJi0tJi0tJi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0tLS0tLS0tLS0tT1wiXSwgXCI0XzE1XCI6IFtcIkAtWFhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLSNYWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLSNYWFhYLS0tLS0jWC0tXCIsIFwiLS0tLS0tWFhYWC0tLS0tLVgtLVwiLCBcIi0tLS0tLS0qLS0tLSotLS0tLS1cIiwgXCItLS1YWFhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tWFhYWFhYWFhYWFhYWFgtLVwiLCBcIi0tLVhYWFhYWFhYWFhYWFhYLS1cIiwgXCItLVhYWFhYWFhYWFhYWFhYWC1PXCJdLCBcIjRfMTFcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tXFxcXFxcXFwtLVhYWFhYWFhYWFhYLS1cIiwgXCItLS8vLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSotLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLSMtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLSYtLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiMV80XCI6IFtcIkAtLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0jLS0mLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLSotLS0tLS0tLSYtLS1YWC1PXCJdLCBcIjNfNlwiOiBbXCJALS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tIy0tLS0mLS0mLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YWFhYWFgtLVwiLCBcIi0tXFxcXC8vLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0qLS0tLS0qLS1YWFhYWFgtT1wiXSwgXCI1XzBcIjogW1wiQC0tLS0tLS0tLS0tLS1eLV4tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS1eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLSYtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLV4tLVwiLCBcIi0tKi0tLS0tKi0tLS0tXi1eLU9cIl0sIFwiN18yXCI6IFtcIkAtLS0tLS0tIy0tLV5eXl5eLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tXi0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLV4tLS0tXCIsIFwiLS0tLS0jLS0tLS0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tJi0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLVhYLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLS0tLS1cIiwgXCItLSotLS0tLSMtLS1eXl5eXi1PXCJdLCBcIjdfM1wiOiBbXCJALS0tLS0tLS0tWC0tXl5eXi0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tWC0tLVwiLCBcIi0tLS0tLS0tLS1YLS0tLVgtLS1cIiwgXCItLS0tLS0tLS1YWC0tLS1YLS0tXCIsIFwiLS0tLS0tLS1YWFgtLS0tWC0tLVwiLCBcIi0tLS0tIy0tWCMmLS0tLVgtLS1cIiwgXCItLS0tLS0tLVhYWC0tLS1YLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tWFgtLS0tWC0tLVwiLCBcIi0tXFxcXC8vLS0tLS1YLS0tLVgtLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0jLS0tXCIsIFwiLS0qLS0tLS0tLVgtLV5eXl4tT1wiXSwgXCI4XzEwXCI6IFtcIkAtXl5eXi0tWFhYWFhYWFhYLS1cIiwgXCItLS0tLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tWFgtLS0tWFhYWFhYWFhYLS1cIiwgXCItLSpYLS0tLS0tKi0tLSNYWC0tXCIsIFwiLS0mLS0tLS0tLS0tLS0tWFgtLVwiLCBcIi0tKlgtLS0tLS0tIy0tLS0qLS1cIiwgXCItLVhYLS0tLVhYWFhYWFhYWC0tXCIsIFwiLS1cXFxcXFxcXC0tLS1YWFhYWFhYWFgtLVwiLCBcIi0tLy8tLS0tWFhYWFhYWFhYLS1cIiwgXCItLV5eXl4tLVhYWFhYWFhYWC1PXCJdLCBcIjVfMVwiOiBbXCJALS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tXl4tLVwiLCBcIi0tLS0tIy0tIy0tWC0tLV5eLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1eXi0tXCIsIFwiLS0vXFxcXFxcXFwtLS0tLS1YLS0tXl4tLVwiLCBcIi0tXFxcXC8vLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLS0tLS0tXCIsIFwiLS0qLS0tLS0qLS0mLS0tXl4tT1wiXSwgXCIzXzdcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFgtLS0tLS1cIiwgXCItLS0tLSMtLSMtLVhYLS0mLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWFhYWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tKi0tWFhYWFhYLU9cIl0sIFwiMV81XCI6IFtcIkAtLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0mLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLSotLS0tLS0tLSYtLVhYWC1PXCJdLCBcIjRfMTBcIjogW1wiQC0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tKi0tLSNYLS1cIiwgXCItLSMtLS0tLS0tLS0tLS0tWC0tXCIsIFwiLS0tLS0tLS0jLS0tIy0tLS0tLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLS1YWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLVhYWFhYWFhYWFhYLU9cIl0sIFwiNF8xMlwiOiBbXCJALS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS0tLSotLS0tLS0jWFgtLVwiLCBcIi0tIy0tLS0tLS0tJi0tLVhYLS1cIiwgXCItLS0tLS0tLSMtLS0tLS0tKi0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtT1wiXSwgXCIxXzdcIjogW1wiQC0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tWFhYWFhYLS1cIiwgXCItLS0tLSMtLSYtLVhYWC0tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tLS0tWFhYLS1cIiwgXCItLVxcXFwvLy0tLS0tLVhYWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YWFhYWFgtLVwiLCBcIi0tKi0tLS0tLS0tWFhYWFhYLU9cIl0sIFwiM181XCI6IFtcIkAtLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLVhYWC0tXCIsIFwiLS0tLS0jLS0jLS1YLS1YWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFhYLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLVgtLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS1YLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tWFgtLS1cIiwgXCItLSotLS0tLSotLSYtLVhYWC1PXCJdLCBcIjVfM1wiOiBbXCJALS0tLS0tLSMtLS1YLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLVgtLV4tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tWC0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLVgtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tWC0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLVgtLS0jLS1cIiwgXCItLS0tLS0tLVhYLS1YLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tJi0tLS0tT1wiXSwgXCI3XzFcIjogW1wiQC0tLS0tLS0tLS1YLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tWC0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLVgtLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS1eXl4tLVwiLCBcIi0tLS0tLS0tLS0tWC0tLS0tLS1cIiwgXCItLS0tLSMtLSMtLVgtLS0tLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS0jLS0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tKi0tLS0tKi0tJi0tLS0tLU9cIl0sIFwiN18wXCI6IFtcIkAtLS0tLS0tLS0tLS0tXi0tLS1cIiwgXCItLS0tLS0tLS0tLS0tLV4tLS0tXCIsIFwiLS0tLS0tLS0tLS0tLS1eLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tXl5eLS1cIiwgXCItLS0tLS0tLS0tLS0tLS0tLS0tXCIsIFwiLS0tLS0jLS0jLS0mLS0tLS0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tIy0tLVwiLCBcIi0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgXCItLSotLS0tLSotLS0tLS0tLS1PXCJdLCBcIjVfMlwiOiBbXCJALS0tLS0tLSMtLS0tLS1eLS0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tXi0tLVwiLCBcIi0tLS0tLS0tWFgtLS0tLV4tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS1eXi0tXCIsIFwiLS0tLS0tLS1YWC0tLS0tLS0tLVwiLCBcIi0tLS0tIy0tLS0tLSYtLS0tLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0vXFxcXFxcXFwtLS1YWC0tLS0tLS0tLVwiLCBcIi0tXFxcXC8vLS0tWFgtLS0tLS0jLS1cIiwgXCItLS0tLS0tLVhYLS0tLS0tLS0tXCIsIFwiLS0qLS0tLS0jLS0tLS0tLS0tT1wiXSwgXCIzXzRcIjogW1wiQC0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLS0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tWC0tLVhYLS1cIiwgXCItLS0tLSMtLSMtLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tLS0tLVwiLCBcIi0tL1xcXFxcXFxcLS0tLS0tWC0tLS0tLS1cIiwgXCItLVxcXFwvLy0tLS0tLVgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tLS1YLS0tWFgtLVwiLCBcIi0tKi0tLS0tKi0tJi0tLVhYLU9cIl0sIFwiMV82XCI6IFtcIkAtLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0tLS0tLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLS0tLS0tLS0tLS1YWFhYWC0tXCIsIFwiLS0tLS0jLS0mLS0tWFhYWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWC0tLS1cIiwgXCItLS9cXFxcXFxcXC0tLS0tLS0tLS0tLS0tXCIsIFwiLS1cXFxcLy8tLS0tLS0tLS0tWFgtLVwiLCBcIi0tLS0tLS0tLS0tLVhYWFhYLS1cIiwgXCItLSotLS0tLS0tLS1YWFhYWC1PXCJdLCBcIjRfMTNcIjogW1wiQC0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tLS0jWFhYWC0tI1hYLS1cIiwgXCItLSMtLS0tLVhYWFgtLS1YWC0tXCIsIFwiLS0tLS0tLS0tKi0tLS0tLSotLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLS1cIiwgXCItLS0tLVhYWFhYWFhYWFhYWC0tXCIsIFwiLS0tLS1YWFhYWFhYWFhYWFgtLVwiLCBcIi0tLS0tWFhYWFhYWFhYWFhYLU9cIl0gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEdhbWVfMSA9IHJlcXVpcmUoXCIuL0VuZ2luZS9HYW1lXCIpO1xuY29uc3QgR2FtZVNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvR2FtZVNjZW5lXCIpO1xuY29uc3QgUGxheWVyTG9zdFNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvUGxheWVyTG9zdFNjZW5lXCIpO1xuY29uc3QgUGxheWVyV29uU2NlbmVfMSA9IHJlcXVpcmUoXCIuL1NjZW5lcy9QbGF5ZXJXb25TY2VuZVwiKTtcbmNvbnN0IFNlbGVjdGlvblNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvU2VsZWN0aW9uU2NlbmVcIik7XG5jb25zdCBTdGFydFNjZW5lXzEgPSByZXF1aXJlKFwiLi9TY2VuZXMvU3RhcnRTY2VuZVwiKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZV8xLkdhbWUoKTtcbmNvbnN0IHN0YXJ0U2NlbmUgPSBuZXcgU3RhcnRTY2VuZV8xLlN0YXJ0U2NlbmUoKTtcbmNvbnN0IHNlbGVjdGlvblNjZW5lID0gbmV3IFNlbGVjdGlvblNjZW5lXzEuU2VsZWN0aW9uU2NlbmUoKTtcbmNvbnN0IGdhbWVTY2VuZSA9IG5ldyBHYW1lU2NlbmVfMS5HYW1lU2NlbmUoKTtcbmNvbnN0IHBsYXllckxvc3RTY2VuZSA9IG5ldyBQbGF5ZXJMb3N0U2NlbmVfMS5QbGF5ZXJMb3N0U2NlbmUoKTtcbmNvbnN0IHBsYXllcldvblNjZW5lID0gbmV3IFBsYXllcldvblNjZW5lXzEuUGxheWVyV29uU2NlbmUoKTtcbmNvbnN0IHN0YXJ0SW5kZXggPSBnYW1lLmFkZFNjZW5lKHN0YXJ0U2NlbmUpO1xuY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBnYW1lLmFkZFNjZW5lKHNlbGVjdGlvblNjZW5lKTtcbmNvbnN0IGdhbWVJbmRleCA9IGdhbWUuYWRkU2NlbmUoZ2FtZVNjZW5lKTtcbmNvbnN0IGxvc3RJbmRleCA9IGdhbWUuYWRkU2NlbmUocGxheWVyTG9zdFNjZW5lKTtcbmNvbnN0IHdvbkluZGV4ID0gZ2FtZS5hZGRTY2VuZShwbGF5ZXJXb25TY2VuZSk7XG5zdGFydFNjZW5lLnNjZW5lSW5kZXggPSBzZWxlY3Rpb25JbmRleDtcbnNlbGVjdGlvblNjZW5lLnNjZW5lSW5kZXggPSBnYW1lSW5kZXg7XG5nYW1lU2NlbmUucGxheWVyTG9zdEluZGV4ID0gbG9zdEluZGV4O1xuZ2FtZVNjZW5lLnBsYXllcldvbkluZGV4ID0gd29uSW5kZXg7XG5nYW1lU2NlbmUuc2VsZkluZGV4ID0gZ2FtZUluZGV4O1xuZ2FtZVNjZW5lLm1haW5NZW51SW5kZXggPSBzdGFydEluZGV4O1xucGxheWVyTG9zdFNjZW5lLnNjZW5lSW5kZXggPSBzdGFydEluZGV4O1xucGxheWVyV29uU2NlbmUuc2NlbmVJbmRleCA9IHN0YXJ0SW5kZXg7XG5nYW1lLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=