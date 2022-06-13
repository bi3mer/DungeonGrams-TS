import { Component } from "../WorldEngine/";
import { Position2d } from "../WorldEngine/src/Components/Position2d";

export class Enemy extends Component {
  constructor(public startPosition: Position2d) { 
    super(); 
  }
}