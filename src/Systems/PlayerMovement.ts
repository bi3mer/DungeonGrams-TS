import { Engine, System, Entity, Key, CommonComponents } from "../WorldEngine";
import { C } from "../Components";
const Position2d = CommonComponents.Position2d;

export class PlayerMovement extends System {
  componentsRequired = new Set<Function>([Position2d, C.Render, C.Player]);
  private timeSinceLastMove = 5;

  update(engine: Engine, entities: Set<Entity>): void {
    this.timeSinceLastMove += engine.delta;
    if (this.timeSinceLastMove < 0.08) {
      return;
    }

    this.timeSinceLastMove = 0;

    let playerID = entities.values().next().value;
    let pos = this.ecs.getComponents(playerID).get(Position2d);
    const x = pos.getX();
    const y = pos.getY();

    for(let key of engine.keyDown) {
      switch(key) {
        case Key.A:
        case Key.LEFT:
          this.ecs.setBB('player turn', false);
          pos.setX(x - 1);
          break;
        case Key.S:
        case Key.DOWN:
          this.ecs.setBB('player turn', false);
          pos.setY(y + 1);
          break;
        case Key.D:
        case Key.RIGHT:
          this.ecs.setBB('player turn', false);
          pos.setX(x + 1);
          break;
        case Key.W:
        case Key.UP:
          this.ecs.setBB('player turn', false);
          pos.setY(y - 1);
          break;
        // nothing to do in the default case
      }
    }
  }
}