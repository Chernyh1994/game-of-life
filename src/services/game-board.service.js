import CellInformationDto from '../dto/cell-information.dto';

/**
 * GameBoardService class.
 */
class GameBoardService {
  /**
   * Number of game board rows.
   *
   * @access private
   * @type number
   */
  #numberRows;

  /**
   * Number of game board cols.
   *
   * @access private
   * @type number
   */
  #numberCols;

  /**
   * Cells matrix.
   *
   * @access private
   * @type array
   */
  #matrix;

  /**
   * @function Constructor.
   * @constructor
   */
  constructor(GameSettingDto) {
    this.#numberRows = GameSettingDto.numberRows;
    this.#numberCols = GameSettingDto.numberCols;
  }

  /**
   * @function Generate Cells matrix.
   * @access public
   * @return object
   */
  createCellMatrix() {
    this.#matrix = new Array(this.#numberRows);

    for (let i = 0; i < this.#numberRows; i++) {
      this.#matrix[i] = new Array(this.#numberCols);

      for (let j = 0; j < this.#numberCols; j++) {
        this.#matrix[i][j] = 0;
      }
    }

    return { numberRows: this.#numberRows, numberCols: this.#numberCols };
  }

  /**
   * @function Change cell status to life.
   * @access public
   * @param dto:CellInformationDto
   * @return void
   */
  reviveCell(dto) {
    this.#matrix[dto.indexRow][dto.indexCol] = 1;
    dto.cellTag.setAttribute('data-cell', 'life');
    dto.cellTag.setAttribute('class', 'life');
  }

  /**
   * @function Change cell status to dead.
   * @access public
   * @param dto:CellInformationDto
   * @return void
   */
  killCell(dto) {
    this.#matrix[dto.indexRow][dto.indexCol] = 0;
    dto.cellTag.setAttribute('data-cell', 'dead');
    dto.cellTag.setAttribute('class', 'dead');
  }

  /**
   * @function For each cell of the matrix, check the status of life or death.
   * @access public
   * @return void
   */
  startGame() {
    for (let i = 0; i < this.#numberRows; i++) {
      for (let j = 0; j < this.#numberCols; j++) {
        const cell = document.querySelector(`[data-row="${i}"][data-colum="${j}"]`);
        const countNeighbors = this.#countNeighbors(i, j);
        const dtoCell = new CellInformationDto({
          indexRow: i,
          indexCol: j,
          cellTag: cell,
        });
        // eslint-disable-next-line no-mixed-operators
        const isLife = countNeighbors < 2 || countNeighbors > 3 && this.#matrix[i][j] === 1;
        const isDead = countNeighbors === 3 && this.#matrix[i][j] === 0;

        if (isDead) {
          this.reviveCell(dtoCell);
        }

        if (isLife) {
          this.killCell(dtoCell);
        }
      }
    }
  }

  /**
   * @function Change the status of all cells to dead.
   * @access public
   * @return void
   */
  killAllCells() {
    for (let i = 0; i < this.#numberRows; i++) {
      for (let j = 0; j < this.#numberCols; j++) {
        this.#matrix[i][j] = 0;
      }
    }

    this.startGame();
  }

  /**
   * @function Change status of all cells randomly to dead or life.
   * @access public
   * @return void
   */
  randomizeCells() {
    for (let i = 0; i < this.#numberRows; i++) {
      for (let j = 0; j < this.#numberCols; j++) {
        const isTrue = Math.random() < 0.4;
        if (isTrue) {
          this.#matrix[i][j] = 1;
        } else {
          this.#matrix[i][j] = 0;
        }
      }
    }

    this.startGame();
  }

  /**
   * @function Count the number of live cell neighbors.
   * @access private
   * @param row:number
   * @param col:number
   * @return number
   */
  #countNeighbors(row, col) {
    let count = 0;

    if (row - 1 >= 0) {
      count += this.#isLife(row - 1, col);
    }
    if (row - 1 >= 0 && col - 1 >= 0) {
      count += this.#isLife(row - 1, col - 1);
    }
    if (row - 1 >= 0 && col + 1 < this.#numberCols) {
      count += this.#isLife(row - 1, col + 1);
    }
    if (col - 1 >= 0) {
      count += this.#isLife(row, col - 1);
    }
    if (col + 1 < this.#numberCols) {
      count += this.#isLife(row, col + 1);
    }
    if (row + 1 < this.#numberRows) {
      count += this.#isLife(row + 1, col);
    }
    if (row + 1 < this.#numberRows && col - 1 >= 0) {
      count += this.#isLife(row + 1, col - 1);
    }
    if (row + 1 < this.#numberRows && col + 1 < this.#numberCols) {
      count += this.#isLife(row + 1, col + 1);
    }

    return count;
  }

  /**
   * @function Check cell is life.
   * @access private
   * @param row:number
   * @param col:number
   * @return number
   */
  #isLife(row, col) {
    if (this.#matrix[row][col] === 1) {
      return 1;
    }

    return 0;
  }
}

export default GameBoardService;
