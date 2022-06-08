import { Entity } from "../../Engine/Entity";
import { Game } from "../../Engine/Game";
import { System } from "../../Engine/System";
import { MenuText } from "../../Components/SelectionScene/MenuText";
import { Key } from "../../Engine/Key";

export class UpdateSelected extends System {
  componentsRequired = new Set<Function>([MenuText]);
  lastUpdate = 10;

  update(game: Game, entities: Set<Entity>): void {
    this.lastUpdate += game.delta;
    if (this.lastUpdate < 0.2) {
      return;
    }

    let keyPress = Key.INVALID;
    for(let key of game.keyDown) {
      if (key == Key.DOWN || key == Key.UP || Key.RIGHT || Key.LEFT) {
        keyPress = key;
        break;
      }
    }

    if (keyPress == Key.INVALID) {
      return;
    }

    
    // find selected
    let selectedEntity = 0;
    for(let entity of entities.values()) {
      const m = this.ecs.getComponents(entity).get(MenuText);
      if(m.selected) {
        m.selected = false;
        selectedEntity = entity;
        break;
      }
    }

    const lvlsPerColumn = 18;
    let newEntity: number;
    if(keyPress == Key.UP) {
      newEntity = selectedEntity - 1;
    } else if (keyPress == Key.DOWN) {
      newEntity =  selectedEntity + 1;
    } else if (keyPress == Key.RIGHT) {
      newEntity = selectedEntity + lvlsPerColumn;
    } else {
      newEntity = selectedEntity - lvlsPerColumn;
    }

    if(!entities.has(newEntity)) {
      newEntity = selectedEntity;
    }
   
    // updated selected
    this.ecs.getComponents(newEntity).get(MenuText).selected = true;
    this.lastUpdate = 0;
  }
}