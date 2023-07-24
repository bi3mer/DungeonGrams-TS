import { Component } from "../WorldEngine";

export class MenuText extends Component {
  constructor(
    public name: string, 
    public order: number, 
    public selected: boolean,
    public beaten: boolean) { 
    super(); 
  }
}