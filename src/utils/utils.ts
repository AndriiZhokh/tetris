import { IShape } from '../models/figures/i-shape';
import { LShape } from '../models/figures/l-shape';
export enum Figures {
  I_SHAPE, 
  L_SHAPE,
}

export const createRandomFigure = () => {
  const index = Math.floor(Math.random() * 2);
  const shape = Figures[ index ];

  if (shape === Figures[ 0 ]) {
    return new IShape();
  }

  return new LShape();
}
