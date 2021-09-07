import { Position } from '../../interfaces/position';

export class IShape {
  private pos: Position = { x: 4, y: 0 };
  private options: Position[][] = [
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

  getOptions(index: number): Position[] {
    return this.options[index];
  }

  private updateOptions(): void {
    this.options = [
      [
        { ...this.pos, x: this.pos.x - 1 },
        { ...this.pos },
        { ...this.pos, x: this.pos.x + 1 },
        { ...this.pos, x: this.pos.x + 2 },
      ],
      [
        { ...this.pos },
        { ...this.pos, y: this.pos.y + 1 },
        { ...this.pos, y: this.pos.y + 2 },
        { ...this.pos, y: this.pos.y + 3 },
      ],
    ];
  }

}
