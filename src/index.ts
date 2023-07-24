import { Engine } from "./WorldEngine";
import { Scene } from "./Scenes";

const engine = new Engine();
engine.displayFPS = false;

const startScene = new Scene.StartMenu();
const selectionScene = new Scene.SelectLevel();
const gameScene = new Scene.Game();
const playerLostScene = new Scene.PlayerLost();
const playerWonScene = new Scene.PlayerWon();

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