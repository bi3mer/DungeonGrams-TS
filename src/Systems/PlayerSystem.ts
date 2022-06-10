import { Engine, System, Entity, Key, CommonComponents } from "../WorldEngine";
import { C } from "../Components";
const Position2d = CommonComponents.Position2d;


export class PlayerSystem extends System {
  componentsRequired = new Set<Function>([Position2d, C.Render, C.Player]);
  private timeSinceLastMove = 5;

  constructor() {
    super();
  }

  update(engine: Engine, entities: Set<Entity>): void {
    this.timeSinceLastMove += engine.delta;
    if (this.timeSinceLastMove < 0.08) {
      return;
    }

    this.timeSinceLastMove = 0;

    let playerID = entities.values().next().value;
    let pos = this.ecs.getComponents(playerID).get(Position2d);
    const x = pos.x;
    const y = pos.y;

    for(let key of engine.keyDown) {
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