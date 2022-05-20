import HtmlTagManager from '../healpers/html-tag-manager';
import CellInformationDto from '../dto/cell-information.dto';

/**
 * GameBoard class.
 */
class GameBoardDraw {
  #GameBoardService;

  #gameIntervalId;

  constructor(GameBoardService) {
    this.#GameBoardService = GameBoardService;
  }

  initGame() {
    this.#drawGameBoard();
    this.#handlerCell();
    this.#handlerStartStopBtn();
    this.#handlerClearBtn();
    this.#handlerRandomBtn();
  }

  #drawGameBoard() {
    try {
      const { numberRows, numberCols } = this.#GameBoardService.createCellMatrix();
      const table = HtmlTagManager.createTable();

      for (let i = 0; i < numberRows; i++) {
        const tr = HtmlTagManager.createTr();
        table.appendChild(tr);

        for (let j = 0; j < numberCols; j++) {
          const td = HtmlTagManager.createTd();
          td.setAttribute('class', 'dead');
          td.setAttribute('data-row', `${i}`);
          td.setAttribute('data-colum', `${j}`);
          td.setAttribute('data-cell', 'dead');
          tr.appendChild(td);
        }
      }

      HtmlTagManager.getBoardTag().appendChild(table);
    } catch (e) {
      console.log(e.message);
    }
  }

  #handlerCell() {
    HtmlTagManager.getBoardTag().addEventListener('click', (event) => {
      try {
        const { target } = event;
        const cellStatus = target.getAttribute('data-cell');
        const indexRow = target.getAttribute('data-row');
        const indexCol = target.getAttribute('data-colum');
        const dtoCell = new CellInformationDto({
          indexRow,
          indexCol,
          cellTag: target,
        });

        if (cellStatus === 'dead') {
          this.#GameBoardService.reviveCell(dtoCell);
        }

        if (cellStatus === 'life') {
          this.#GameBoardService.killCell(dtoCell);
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  }

  #handlerStartStopBtn() {
    HtmlTagManager.getBtnStartStop().addEventListener('click', () => {
      try {
        const status = HtmlTagManager.getBtnStartStop().getAttribute('data-status');

        if (status === 'start') {
          this.#drawStopButton();
          this.#gameIntervalId = setInterval(() => this.#GameBoardService.startGame(), 300);
        }

        if (status === 'stop') {
          this.#drawStartButton();
          this.#stopGame();
        }
      } catch (e) {
        console.log(e.message);
      }
    });
  }

  #drawStartButton() {
    HtmlTagManager.getBtnStartStop().setAttribute('data-status', 'start');
    HtmlTagManager.getBtnStartStop().innerHTML = 'Start';
  }

  #drawStopButton() {
    HtmlTagManager.getBtnStartStop().setAttribute('data-status', 'stop');
    HtmlTagManager.getBtnStartStop().innerHTML = 'Stop';
  }

  #stopGame() {
    clearInterval(this.#gameIntervalId);
  }

  #handlerClearBtn() {
    HtmlTagManager.getBtnClear().addEventListener('click', () => {
      try {
        this.#drawStartButton();
        this.#stopGame();
        this.#GameBoardService.killAllCells();
      } catch (e) {
        console.log(e.message);
      }
    });
  }

  #handlerRandomBtn() {
    HtmlTagManager.getBtnRandom().addEventListener('click', () => {
      try {
        this.#GameBoardService.randomizeCells();
      } catch (e) {
        console.log(e.message);
      }
    });
  }
}

export default GameBoardDraw;
