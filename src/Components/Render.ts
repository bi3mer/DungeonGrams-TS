import { Component } from "../Engine/Component";

export class Render extends Component {
  constructor(public color: string, public character: string) { 
    super(); 
  }
}