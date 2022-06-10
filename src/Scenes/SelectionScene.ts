import { LEVELS } from "../levels"; 
import { C } from "../Components";
import { UpdateSelected } from "../Systems/SelectionScene/UpdateSelected";
import { RenderMenuTextSystem } from "../Systems/SelectionScene/RenderMenuText";
import { Engine, ECSScene, Key } from "../WorldEngine";

export class SelectionScene extends ECSScene {
  public sceneIndex: number = 0;
  private sortedLevels: Array<string>;
  
  constructor() {
    super();
    
    this.sortedLevels = [];
    for(let key in LEVELS) {
      this.sortedLevels.push(key);
    }
    
    this.sortedLevels.sort();
  }
  
  public onEnter(engine: Engine): void { 
    for(let i = 0; i < this.sortedLevels.length; ++i) {
      const id = this.addEntity();
      const selected = i == 0;
      this.addComponent(id, new C.MenuText(this.sortedLevels[i], i, selected));
    }

    this.setBB('selected', 0);
    
    this.addSystem(0, new UpdateSelected());
    this.addSystem(10, new RenderMenuTextSystem());
  }
  
  public onExit(engine: Engine): void { 
    this.clear();
  }
  
  public customUpdate(engine: Engine): number {
    if (engine.keyDown.has(Key.ENTER)) {
      const selected = this.getBB('selected');
      engine.setBB('level', this.getComponents(selected).get(C.MenuText).name);
      return this.sceneIndex;
    }

    return -1;
  }
}