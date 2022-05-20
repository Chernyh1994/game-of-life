import GameSettingDto from './dto/game-setting.dto';
import GameBoardService from './services/game-board.service';
import GameBoardDraw from './draws/game-board.draw';

const gameSettingDto = new GameSettingDto({
  numberRows: 45,
  numberCols: 100,
});
const gameBoardService = new GameBoardService(gameSettingDto);
const gameBoardDraw = new GameBoardDraw(gameBoardService);

gameBoardDraw.initGame();
