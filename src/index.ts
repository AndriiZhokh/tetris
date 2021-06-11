import { Board } from './models/board';
import { Block } from './models/block';

const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 600;
canvas.style.borderColor = '#000';
canvas.style.borderWidth = '1px';
canvas.style.borderStyle = 'solid';

const ctx = canvas.getContext('2d');

const block = new Block();

function findBlockIndex(field: Block[][]) {
  return field.map((row, index) => {
    return row
      .map((cell, cellIndex) => cell ? [ cellIndex, index ] : null)
      // .filter(cell => !!cell)
      // .reduce((result, row) => ([...result, ...row]), []);
  });
}

const draw = (field: Block[][]) => {
  // console.log(field);

  const blocksCoordinates = findBlockIndex(field);
  console.log(blocksCoordinates);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(block.positionX, block.positionY, block.size, block.size);
  block.moveDown(canvas);
}

window.onload = () => {
  const board = new Board();
  const field = board.getGameField();
  const body = document.querySelector('body');
  body.appendChild(canvas);
  ctx.fillStyle = "#FF0000";

  setInterval(draw.bind(null, field), 1000);
}