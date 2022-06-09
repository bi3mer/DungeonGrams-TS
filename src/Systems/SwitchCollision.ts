import { Position } from "../Components/Position";
import { Render } from "../Components/Render";
import { Switch } from "../Components/Switch";
import { Entity } from "../Engine/Entity";
import { Game } from "../Engine/Game";
import { System } from "../Engine/System";

export class SwitchCollision extends System {
  componentsRequired = new Set<Function>([Switch]);

  update(game: Game, entities: Set<Entity>): void {
    // const playerID = this.ecs.blackBoard.get('player id');
    const playerID = this.ecs.getBB('player id');
    const playerPos = this.ecs.getComponents(playerID).get(Position);
    
    for(let id of entities) {
        const switchPos = this.ecs.getComponents(id).get(Position);
        if(switchPos.equals(playerPos)) {
            const switchCount = this.ecs.getBB('switch count') - 1;
            this.ecs.setBB('switch count', switchCount);
            this.ecs.removeEntity(id);
            break;
        }
    }
  }
}