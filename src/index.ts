import { Game } from "./Engine/Game";
import { GameScene } from "./Scenes/GameScene";
import { PlayerLostScene } from "./Scenes/PlayerLostScene";
import { PlayerWonScene } from "./Scenes/PlayerWonScene";
import { SelectionScene } from "./Scenes/SelectionScene";
import { StartScene } from "./Scenes/StartScene";

const game = new Game();
const startScene = new StartScene();
const selectionScene = new SelectionScene();
const gameScene = new GameScene();
const playerLostScene = new PlayerLostScene();
const playerWonScene = new PlayerWonScene();

const starIndex = game.addScene(startScene);
const selectionIndex = game.addScene(selectionScene);
const gameIndex = game.addScene(gameScene);
const lostIndex = game.addScene(playerLostScene);
const wonIndex = game.addScene(playerWonScene);

startScene.sceneIndex = selectionIndex;
selectionScene.sceneIndex = gameIndex;

gameScene.scenePlayerLostIndex = lostIndex;
gameScene.scenePlayerWonIndex = wonIndex;

playerLostScene.sceneIndex = starIndex;
playerWonScene.sceneIndex = starIndex;

game.start();