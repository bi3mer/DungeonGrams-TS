import { Component } from "../Component";

export class Position2d extends Component {
  private oldX: number;
  private oldY: number;
  private changed = false;

  constructor(private x: number, private y: number) { 
    super(); 

    this.oldX = x;
    this.oldY = y;
  }

  public equals(other: Position2d): boolean {
    return this.x == other.x && this.y == other.y;
  }

  // Cantor pairing function
  public hash(): number {
    return ((this.x + this.y)*(this.x + this.y + 1)/2) + this.y;
  }

  // Cantor pairing function
  public oldHash(): number {
    return ((this.oldX + this.oldY)*(this.oldX + this.oldY + 1)/2) + this.oldY;
  }

  public updated(): boolean {
    return this.changed;
  }

  public set(x: number, y: number) {
    this.changed = true;
    this.x = x;
    this.y = y;
  }

  public setX(x: number) {
    this.changed = true;
    this.x = x;
  }

  public setY(y: number) {
    this.changed = true;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public acceptChange() {
    this.changed = false;
    this.oldX = this.x;
    this.oldY = this.y;
  }

  public rejectChange() {
    this.changed = false;
    this.x = this.oldX;
    this.y = this.oldY;
  }
}