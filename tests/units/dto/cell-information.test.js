import CellInformationDto from '../../../src/dto/cell-information.dto';

describe('CellInformationDto', () => {
  let cellInformationDto;
  const dataMock = {
    indexRow: jest.fn(),
    indexCol: jest.fn(),
    cellTag: jest.fn(),
  };

  beforeEach(() => {
    cellInformationDto = new CellInformationDto(dataMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('indexRow', () => {
    test('should return indexRow = 10', () => {
      const data = {
        indexRow: 10,
      };

      dataMock.indexRow(data.indexRow);

      expect(cellInformationDto.indexRow).toBeCalledWith(data.indexRow);
      expect(cellInformationDto.indexRow).toBeCalledTimes(1);
    });
  });

  describe('indexCol', () => {
    test('should return indexCol = 20', () => {
      const data = {
        indexCol: 20,
      };

      dataMock.indexCol(data.indexCol);

      expect(cellInformationDto.indexCol).toBeCalledWith(data.indexCol);
      expect(cellInformationDto.indexCol).toBeCalledTimes(1);
    });
  });

  describe('cellTag', () => {
    test('should return cellTag = {}', () => {
      const data = {
        cellTag: {},
      };

      dataMock.cellTag(data.cellTag);

      expect(cellInformationDto.cellTag).toBeCalledWith(data.cellTag);
      expect(cellInformationDto.cellTag).toBeCalledTimes(1);
    });
  });
});
