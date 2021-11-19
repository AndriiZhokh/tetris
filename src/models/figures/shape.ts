import { Position } from '../../interfaces/position';

export class Shape {
  protected pos: Position = { x: 4, y: -1 };
  protected shapeOptions: Position[][] = null;
  get options() {
    return this.shapeOptions;
  }
  get shapeYPosition() {
    return this.pos.y;
  }
  public freeze = false;

  updatePosition(direction: string): void {
    if (this.freeze) return;

    switch (direction) {
      case 'down':
        this.pos = { ...this.pos, y: this.pos.y + 1 };
        this.updateOptions();
        break;
      default:
        break;
    }
  }

  protected updateOptions(): void {
    this.shapeOptions = this.shapeOptions.map(options => options.map(option => ({ x: option.x, y: option.y + 1 })));
  }
}