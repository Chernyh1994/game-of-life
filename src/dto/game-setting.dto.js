/**
 * GameSettingDto constructor function.
 */
function GameSettingDto({
  numberRows,
  numberCols,
}) {
  /**
   * Number of game board rows.
   *
   * @access public
   * @type number
   */
  this.numberRows = numberRows ?? 10;
  /**
   * Number of game board cols.
   *
   * @access public
   * @type number
   */
  this.numberCols = numberCols ?? 20;
}

export default GameSettingDto;
