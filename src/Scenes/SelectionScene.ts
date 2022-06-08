import { Game } from "../Engine/Game";
import { ECSScene } from "../Engine/ECSScene";
import { LEVELS } from "../levels"; 
import { MenuText } from "../Components/SelectionScene/MenuText";
import { UpdateSelected } from "../Systems/SelectionScene/UpdateSelected";
import { RenderMenuTextSystem } from "../Systems/SelectionScene/RenderMenuText";
import { Key } from "../Engine/Key";

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
  
  public onEnter(game: Game): void { 
    for(let i = 0; i < this.sortedLevels.length; ++i) {
      const id = this.addEntity();
      const selected = i == 0;
      this.addComponent(id, new MenuText(this.sortedLevels[i], i, selected));
    }

    this.blackBoard.set('selected', 0);
    
    this.addSystem(0, new UpdateSelected());
    this.addSystem(10, new RenderMenuTextSystem());
  }
  
  public onExit(game: Game): void { 
    this.clear();
  }
  
  public customUpdate(game: Game): number {
    if (game.keyDown.has(Key.ENTER)) {
      const selected = this.blackBoard.get('selected');
      game.blackBoard.set('level', this.getComponents(selected).get(MenuText).name);
      return this.sceneIndex;
    }

    return -1;
  }
}