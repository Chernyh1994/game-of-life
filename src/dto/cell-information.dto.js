function CellInformationDto({
  indexRow,
  indexCol,
  cellTag,
}) {
  this.indexRow = indexRow ?? null;
  this.indexCol = indexCol ?? null;
  this.cellTag = cellTag ?? null;
}

export default CellInformationDto;
