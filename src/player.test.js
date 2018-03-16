const PlayerFactory = require('./player');

describe('Player tests', () => {
  const randomizer = jest.fn();
  const playerFactory = new PlayerFactory(randomizer);
  it('should create new Player with name and id', () => {
    const player = playerFactory.create(1, 'igu');
    expect(player.name).toEqual('igu');
  });
  it('should initialize Player with level 1 and 0 exp', () => {
    const player = playerFactory.create(1, 'igu');
    expect(player.stats.level).toEqual(1);
    expect(player.stats.exp).toEqual(0);
  });
  it('should initialize Player with random strength, life and observation', () => {
    randomizer.mockReturnValueOnce(5)
              .mockReturnValueOnce(10)
              .mockReturnValueOnce(4);

    const player = playerFactory.create(1, 'igu');

    expect(randomizer.mock.calls[0]).toEqual(['1D6+3']);
    expect(player.stats.strength).toEqual(5);
    expect(randomizer.mock.calls[1]).toEqual(['2D6+5']);
    expect(player.stats.life).toEqual(10);
    expect(randomizer.mock.calls[2]).toEqual(['1D6+3']);
    expect(player.stats.observation).toEqual(4);
  });
  it('should display Player\'s stats', () => {
    randomizer.mockReturnValueOnce(5)
              .mockReturnValueOnce(10)
              .mockReturnValueOnce(4);
    const player = playerFactory.create(1, 'igu');

    expect(player.getStats()).toEqual("+----------+-------------+------+\n"+
                                      "| STRENGTH | OBSERVATION | LIFE |\n"+
                                      "+----------+-------------+------+\n"+
                                      "|        5 |           4 |   10 |\n"+
                                      "+----------+-------------+------+");
  });
});