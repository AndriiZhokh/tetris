import { Figures } from './enums/figures';

const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 600;
canvas.style.borderColor = '#000';
canvas.style.borderWidth = '1px';
canvas.style.borderStyle = 'solid';

const ctx = canvas.getContext('2d');

window.onload = () => {
  const body = document.querySelector('body');

  body.appendChild(canvas);
  body.appendChild(startButton());

  ctx.fillStyle = "#FF0000";
  const board = generateBoard();
}

/**
 * @returns {number[][]}
 */
function generateBoard(): number[][] {
  const row = [];
  const stackOfRows = [];
  for(let i = 0; i < 10; i++) {
    row.push(0);
  }

  for(let i = 0; i < 20; i++) {
    stackOfRows.push(row);
  }

  return stackOfRows;
}

function start(): void {
  randomFigure();
}

// TODO: generate random figure from enum
function randomFigure(): void {
  Math.random();
  const listOfFigures = Object.keys(Figures)
}

function startButton(): HTMLButtonElement {
  const button = document.createElement('button');
  button.innerText = 'Start';

  button.addEventListener('click', start);

  return button;
}