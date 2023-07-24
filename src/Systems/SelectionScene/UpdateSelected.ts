import { Engine, System, Entity, Key } from "../../WorldEngine";
import { C } from "../../Components";

export class UpdateSelected extends System {
  componentsRequired = new Set<Function>([C.MenuText]);
  lastUpdate = 10;


  update(engine: Engine, entities: Set<Entity>): void {
    this.lastUpdate += engine.delta;
    if (this.lastUpdate < 0.2) {
      return;
    }

    let keyPress = Key.INVALID;
    for(let key of engine.keyDown) {
      if (key == Key.DOWN || key == Key.UP || Key.RIGHT || Key.LEFT) {
        keyPress = key;
        break;
      }
    }

    if (keyPress == Key.INVALID) {
      return;
    }

    // get selected entity and new entity index
    let selectedEntity = this.ecs.getBB('selected');
    const lvlsPerColumn = 18;
    let newEntity: number;
    if(keyPress == Key.UP || keyPress == Key.W) {
      newEntity = selectedEntity - 1;
    } else if (keyPress == Key.DOWN || keyPress == Key.S) {
      newEntity =  selectedEntity + 1;
    } else if (keyPress == Key.RIGHT || keyPress == Key.D) {
      newEntity = selectedEntity + lvlsPerColumn;
    } else if (keyPress == Key.LEFT || keyPress == Key.A) {
      newEntity = selectedEntity - lvlsPerColumn;
    } else {
      newEntity = selectedEntity;
    }

    if(!entities.has(newEntity)) {
      newEntity = selectedEntity;
    }
   
    // updated selected
    this.ecs.setBB('selected', newEntity);
    this.ecs.getComponents(selectedEntity).get(C.MenuText).selected = false;
    this.ecs.getComponents(newEntity).get(C.MenuText).selected = true;
    this.lastUpdate = 0;
  }
}