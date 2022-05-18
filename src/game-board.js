class GameBoard {
  #boardWrap;

  #numberRows;

  #numberColumns;

  constructor(boardWrap, numberRows, numberColumns) {
    this.#boardWrap = boardWrap;
    this.#numberRows = numberRows;
    this.#numberColumns = numberColumns;
  }

  drawGameBoard() {
    this.#boardWrap.appendChild(this.#createTable());
  }

  #createTable() {
    const tableTag = document.createElement('table');
    tableTag.classList.add('game-board');
    this.#createRows(tableTag);

    return tableTag;
  }

  #createRows(tableTag) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.#numberRows; i++) {
      const trTag = document.createElement('tr');
      this.#createColumns(trTag, i);
      tableTag.appendChild(trTag);
    }
  }

  #createColumns(rowTag, rowNumber) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.#numberColumns; i++) {
      const tdTag = document.createElement('td');
      tdTag.classList.add('cell');
      tdTag.classList.add('cell--die');
      tdTag.setAttribute('data-id', `${rowNumber}_${i}`);
      rowTag.appendChild(tdTag);
    }
  }
}

export default GameBoard;
