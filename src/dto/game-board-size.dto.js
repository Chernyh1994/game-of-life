class GameBoardSizeDto {
  #numberRows;

  #numberCols;

  constructor(numberRows, numberCols) {
    this.#numberRows = numberRows;
    this.#numberCols = numberCols;
  }

  get numberRows() {
    return this.#numberRows ?? 10;
  }

  get numberCols() {
    return this.#numberCols ?? 20;
  }
}

export default GameBoardSizeDto;
