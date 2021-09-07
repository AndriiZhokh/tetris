import { Game } from './models/game';

const canvas = document.createElement('canvas');
canvas.width = 300;
canvas.height = 600;
canvas.style.borderColor = '#000';
canvas.style.borderWidth = '1px';
canvas.style.borderStyle = 'solid';

const ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const startBtn = startButton();

  body.appendChild(canvas);
  body.appendChild(startBtn);

  ctx.fillStyle = "#FF0000";
  const game = new Game(ctx);

  startBtn.addEventListener('click', game.start.bind(game));
});

function startButton(): HTMLButtonElement {
  const button = document.createElement('button');
  button.innerText = 'Start';

  return button;
}
