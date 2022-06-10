import { Collider } from "../Components/Collider";
import { Engine, System, Entity, CommonComponents } from "../WorldEngine";

const Position2d = CommonComponents.Position2d;

export class PlayerCollision extends System {
  componentsRequired = new Set<Function>([Collider]);

  update(engine: Engine, entities: Set<Entity>): void {
    const playerID = this.ecs.getBB('player id');
    const playerPos = this.ecs.getComponents(playerID).get(Position2d);

    for(let id of entities) {
        const pos = this.ecs.getComponents(id).get(Position2d);
        if (pos.equals(playerPos)) {
            playerPos.x = playerPos.oldX;
            playerPos.y = playerPos.oldY;
        }
    }

    playerPos.updateOld();
  }
}