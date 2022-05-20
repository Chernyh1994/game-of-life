function GameSettingDto({
  numberRows,
  numberCols,
}) {
  this.numberRows = numberRows ?? 10;
  this.numberCols = numberCols ?? 20;
}

export default GameSettingDto;
