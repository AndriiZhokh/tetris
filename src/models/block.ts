export class Block {
  private size = 30;
  get blockSize(): number {
    return this.size;
  }

  get positionX(): number {
    return this.posX;
  }

  get positionY(): number {
    return this.posY;
  }

  constructor(
    private posX: number,
    private posY: number
  ) {}
}