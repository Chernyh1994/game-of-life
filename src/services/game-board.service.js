import CellInformationDto from '../dto/cell-information.dto';

class GameBoardService {
  #numberRows;

  #numberCols;

  #matrix;

  constructor(DtoSizeGameBoard) {
    this.#numberRows = DtoSizeGameBoard.numberRows;
    this.#numberCols = DtoSizeGameBoard.numberCols;
  }

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

  reviveCell(dto) {
    this.#matrix[dto.indexRow][dto.indexCol] = 1;
    dto.cellTag.setAttribute('data-cell', 'life');
    dto.cellTag.setAttribute('class', 'life');
  }

  killCell(dto) {
    this.#matrix[dto.indexRow][dto.indexCol] = 0;
    dto.cellTag.setAttribute('data-cell', 'dead');
    dto.cellTag.setAttribute('class', 'dead');
  }

  startGame() {
    for (let i = 0; i < this.#numberRows; i++) {
      for (let j = 0; j < this.#numberCols; j++) {
        const cell = document.querySelector(`[data-row="${i}"][data-colum="${j}"]`);
        const countNeighbors = this.#countNeighbors(i, j);
        const dtoCell = new CellInformationDto(i, j, cell);
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

  killAllCells() {
    for (let i = 0; i < this.#numberRows; i++) {
      for (let j = 0; j < this.#numberCols; j++) {
        this.#matrix[i][j] = 0;
      }
    }

    this.startGame();
  }

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

  #isLife(row, col) {
    if (this.#matrix[row][col] === 1) {
      return 1;
    }

    return 0;
  }
}

export default GameBoardService;
