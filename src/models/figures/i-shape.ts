import { Position } from '../../interfaces/position';
import { Shape } from './shape';

export class IShape extends Shape {
  shapeOptions: Position[][] = [
    [
      { x: this.pos.x - 1, y: this.pos.y },
      { ...this.pos },
      { x: this.pos.x + 1, y: this.pos.y },
      { x: this.pos.x + 2, y: this.pos.y },
    ],
    [
      { ...this.pos },
      { ...this.pos, y: this.pos.y + 1 },
      { ...this.pos, y: this.pos.y + 2 },
      { ...this.pos, y: this.pos.y + 3 },
    ],
  ];
}
