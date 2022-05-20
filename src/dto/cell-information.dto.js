/**
 * CellInformationDto constructor function.
 */
function CellInformationDto({
  indexRow,
  indexCol,
  cellTag,
}) {
  /**
   * The index of the row in the matrix of cells.
   *
   * @access public
   * @type number
   */
  this.indexRow = indexRow;
  /**
   * The index of the col in the matrix of cells.
   *
   * @access public
   * @type number
   */
  this.indexCol = indexCol;
  /**
   * HTML cell tag.
   *
   * @access public
   * @type object
   */
  this.cellTag = cellTag;
}

export default CellInformationDto;
