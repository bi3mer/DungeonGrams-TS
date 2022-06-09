import { Player } from "../Components/Player";
import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { Key } from "../Engine/Key";
import { System } from "../Engine/System";

export class PlayerSystem extends System {
  componentsRequired = new Set<Function>([Position, Render, Player]);
  private timeSinceLastMove = 5;

  constructor() {
    super();
  }

  update(game: Game, entities: Set<Entity>): void {
    this.timeSinceLastMove += game.delta;
    if (this.timeSinceLastMove < 0.08) {
      return;
    }

    this.timeSinceLastMove = 0;

    let playerID = entities.values().next().value;
    let pos = this.ecs.getComponents(playerID).get(Position);
    const x = pos.x;
    const y = pos.y;

    for(let key of game.keyDown) {
      switch(key) {
        case Key.A:
        case Key.LEFT:
          pos.x -= 1;
          break;
        case Key.S:
        case Key.DOWN:
          pos.y += 1;

          break;
        case Key.D:
        case Key.RIGHT:
          pos.x += 1
          break;
        case Key.W:
        case Key.UP:
          pos.y -= 1;
          break;
        // nothing to do in the default case
      }
    }
  }
}