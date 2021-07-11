import { Board } from './models/board';
import { Block } from './models/block';

const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 600;
canvas.style.borderColor = '#000';
canvas.style.borderWidth = '1px';
canvas.style.borderStyle = 'solid';

const ctx = canvas.getContext('2d');

const blocks = [new Block(0, 0), new Block(1, 1), new Block(2, 2), new Block(3, 3), new Block(4, 4), new Block(5, 5), new Block(4, 6), new Block(3, 7), new Block(2, 8), new Block(1, 9)];

window.onload = () => {
  const board = new Board(ctx);
  const body = document.querySelector('body');
  body.appendChild(canvas);
  ctx.fillStyle = "#FF0000";

  blocks.forEach(block => board.pushToStack(block));
}