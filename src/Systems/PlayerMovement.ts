import { Engine, System, Entity, Key, CommonComponents } from "../WorldEngine";
import { C } from "../Components";
const Position2d = CommonComponents.Position2d;

export class PlayerMovement extends System {
  componentsRequired = new Set<Function>([Position2d, C.Render, C.Player]);
  private timeSinceLastMove = 5;

  private updateTimeStep(): void {
    const timeStep: number = this.ecs.getBB('time step');
    this.ecs.setBB('time step', timeStep + 1);
  }

  update(engine: Engine, entities: Set<Entity>): void {
    this.timeSinceLastMove += engine.delta;
    if (this.timeSinceLastMove < 0.08) {
      return;
    }

    this.timeSinceLastMove = 0;

    let playerID = entities.values().next().value;
    const components = this.ecs.getComponents(playerID);
    const  player = components.get(C.Player);
    let pos = components.get(Position2d);
    const x = pos.getX();
    const y = pos.getY();

    for(let key of engine.keyDown) {
      let playerMoved = false;
      switch(key) {
        case Key.A:
        case Key.LEFT:
          this.updateTimeStep();
          playerMoved = true;
          player.stamina -= 1;
          pos.setX(x - 1);
          break;
        case Key.S:
        case Key.DOWN:
          this.updateTimeStep();
          playerMoved = true;
          pos.setY(y + 1);
          player.stamina -= 1;
          break;
        case Key.D:
        case Key.RIGHT:
          this.updateTimeStep();
          playerMoved = true;
          pos.setX(x + 1);
          player.stamina -= 1;
          break;
        case Key.W:
        case Key.UP:
          this.updateTimeStep();
          playerMoved = true;
          pos.setY(y - 1);
          player.stamina -= 1;
          break;
        case Key.SPACE:
          player.stamina -= 1;
          playerMoved = true;
          this.updateTimeStep();
          break;
        // nothing to do in the default case
      }

      if(playerMoved) break;
    }

    if (player.stamina <= 0) {
      this.ecs.setBB('game over', -1);
    }
  }
}