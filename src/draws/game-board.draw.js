import HtmlTagManager from '../helpers/html-tag-manager';
import CellInformationDto from '../dto/cell-information.dto';

/**
 * GameBoard class.
 */
class GameBoardDraw {
  /**
   * GameBoardService dependency injection.
   *
   * @access private
   * @type GameBoardService
   */
  #GameBoardService;

  /**
   * Game interval ID.
   *
   * @access private
   * @type number
   */
  #gameIntervalId;

  /**
   * @function Constructor.
   * @constructor
   */
  constructor(GameBoardService) {
    this.#GameBoardService = GameBoardService;
  }

  /**
   * @function Initialisation Game.
   * @access public
   * @return void
   */
  initGame() {
    this.#drawGameBoard();
    this.#handlerCell();
    this.#handlerStartStopBtn();
    this.#handlerClearBtn();
    this.#handlerRandomBtn();
  }

  /**
   * @function Draw game board to HTML.
   * @access private
   * @return void
   * @throws Error
   */
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

  /**
   * @function Clicking on a handler cell.
   * @access private
   * @return void
   * @throws Error
   */
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

  /**
   * @function Clicking on a handler start-stop button.
   * @access private
   * @return void
   * @throws Error
   */
  #handlerStartStopBtn() {
    HtmlTagManager.getBtnStartStop().addEventListener('click', () => {
      try {
        const status = HtmlTagManager.getBtnStartStop().getAttribute('data-status');

        if (status === 'start') {
          this.#drawStopButton();
          this.#startGame();
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

  /**
   * @function Draw start button.
   * @access private
   * @return void
   */
  #drawStartButton() {
    HtmlTagManager.getBtnStartStop().setAttribute('data-status', 'start');
    HtmlTagManager.getBtnStartStop().innerHTML = 'Start';
  }

  /**
   * @function Draw stop button.
   * @access private
   * @return void
   */
  #drawStopButton() {
    HtmlTagManager.getBtnStartStop().setAttribute('data-status', 'stop');
    HtmlTagManager.getBtnStartStop().innerHTML = 'Stop';
  }

  /**
   * @function Start game.
   * @access private
   * @return void
   */
  #startGame() {
    this.#gameIntervalId = setInterval(() => this.#GameBoardService.startGame(), 300);
  }

  /**
   * @function Stop game.
   * @access private
   * @return void
   */
  #stopGame() {
    clearInterval(this.#gameIntervalId);
  }

  /**
   * @function Clicking on a handler clear button.
   * @access private
   * @return void
   * @throws Error
   */
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

  /**
   * @function Clicking on a handler random button.
   * @access private
   * @return void
   * @throws Error
   */
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
