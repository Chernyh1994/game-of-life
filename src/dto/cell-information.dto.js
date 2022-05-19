class CellInformationDto {
  #indexRow;

  #indexCol;

  #cellTag;

  constructor(indexRow, indexCol, cellTag) {
    this.#indexRow = indexRow;
    this.#indexCol = indexCol;
    this.#cellTag = cellTag;
  }

  get indexRow() {
    return this.#indexRow;
  }

  get indexCol() {
    return this.#indexCol;
  }

  get cellTag() {
    return this.#cellTag;
  }
}

export default CellInformationDto;
