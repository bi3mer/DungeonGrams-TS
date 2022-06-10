import { Engine } from "./WorldEngine";
import { GameScene } from "./Scenes/GameScene";
import { PlayerLostScene } from "./Scenes/PlayerLostScene";
import { PlayerWonScene } from "./Scenes/PlayerWonScene";
import { SelectionScene } from "./Scenes/SelectionScene";
import { StartScene } from "./Scenes/StartScene";

const engine = new Engine();
const startScene = new StartScene();
const selectionScene = new SelectionScene();
const gameScene = new GameScene();
const playerLostScene = new PlayerLostScene();
const playerWonScene = new PlayerWonScene();

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