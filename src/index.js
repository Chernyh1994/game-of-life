import GameBoardSizeDto from './dto/game-board-size.dto';
import GameBoardService from './services/game-board.service';
import GameBoardDraw from './draws/game-board.draw';

const dtoSizeGameBoard = new GameBoardSizeDto(45, 100);
const gameBoardService = new GameBoardService(dtoSizeGameBoard);
const gameBoardDraw = new GameBoardDraw(gameBoardService);

gameBoardDraw.initGame();
