import { Component } from "../../Engine/Component";

export class MenuText extends Component {
  constructor(public name: string, public order: number, public selected: boolean) { 
    super(); 
  }
}