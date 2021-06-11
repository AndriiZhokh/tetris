export class Block {
  public positionX = 0;
  public positionY = 0;
  public size = 30;

  constructor() {}

  moveDown(canvas: HTMLCanvasElement) {
      if (this.positionY === canvas.height - this.size) return;
      this.positionY += 30;
  }
}