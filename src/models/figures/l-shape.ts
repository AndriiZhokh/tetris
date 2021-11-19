import { Shape } from './shape';
import { Position } from '../../interfaces/position';

export class LShape extends Shape {
  shapeOptions: Position[][] = [
    [
      { x: this.pos.x - 1, y: this.pos.y - 1 },
      { ...this.pos, x: this.pos.x - 1 },
      { ...this.pos },
      { ...this.pos, x: this.pos.x + 1 },
    ],
  ];
}
