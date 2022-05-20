import GameSettingDto from '../../../src/dto/game-setting.dto';

describe('GameSettingDto', () => {
  let gameSettingDto;
  const dataMock = {
    numberRows: jest.fn(),
    numberCols: jest.fn(),
  };

  beforeEach(() => {
    gameSettingDto = new GameSettingDto(dataMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('numberRows', () => {
    test('should return numberRows = 120', () => {
      const data = {
        numberRows: 120,
      };

      dataMock.numberRows(data.numberRows);

      expect(gameSettingDto.numberRows).toBeCalledWith(data.numberRows);
      expect(gameSettingDto.numberRows).toBeCalledTimes(1);
    });
  });

  describe('numberCols', () => {
    test('should return numberCols = 240', () => {
      const data = {
        numberCols: 240,
      };

      dataMock.numberCols(data.numberCols);

      expect(gameSettingDto.numberCols).toBeCalledWith(data.numberCols);
      expect(gameSettingDto.numberCols).toBeCalledTimes(1);
    });
  });
});
