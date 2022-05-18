import GameBoard from './game-board';

const boardTag = document.getElementById('board');
const board = new GameBoard(boardTag, 50, 100);

board.drawGameBoard();
