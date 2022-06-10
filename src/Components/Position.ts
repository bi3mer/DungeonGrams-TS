import { Component } from "../WorldEngine";

export class Position extends Component {
  public oldX: number;
  public oldY: number;

  constructor(public x: number, public y: number) { 
    super(); 

    this.oldX = x;
    this.oldY = y;
  }

  public equals(other: Position): boolean {
    return this.x == other.x && this.y == other.y;
  }

  public hash(): number {
    // Cantor pairing function
    return ((this.x + this.y)*(this.x + this.y + 1)/2) + this.y;
  }

  public updateOld(): void {
    this.oldX = this.x;
    this.oldY = this.y;
  }
}