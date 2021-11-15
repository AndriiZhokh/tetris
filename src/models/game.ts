import { IShape } from './figures/i-shape';

export class Game {
  private timerId: NodeJS.Timeout;

  public stack: IShape[] = [];

  constructor(private ctx: CanvasRenderingContext2D) {}

  start(): void {
    this.pushToStack();

    this.timerId = setInterval(() => this.moveDown(), 1000);
  }

  pause(): void {
    clearInterval(this.timerId);
  }

  draw(): void {
    this.stack.forEach(figure => figure.options[0].forEach(position => {
      this.ctx.fillRect(position.x * 30, position.y * 30, 30, 30);
    }))
  }

  undraw(): void {
    this.stack.forEach(figure => figure.options[0].forEach(position => {
      this.ctx.clearRect(position.x * 30, position.y * 30, 30, 30);
    }));
  }

  moveDown(): void {
    this.detectBottomCollision();
    this.undraw();
    this.stack.forEach(figure => figure.updatePosition('down'));
    this.draw();
  }

  private pushToStack(): void {
    this.stack.push(new IShape());
  }


  detectBottomCollision(): void {
    this.stack = this.stack.filter((element) => element.shapeYPosition !== 19);
  }
}