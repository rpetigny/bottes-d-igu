const WorldFactory = require('./world');
const moment = require('moment');

describe('World test', () => {
  const worldFactory = new WorldFactory();
  it('should initialize with default dates', () => {
    const now = new Date(moment.utc("2018-01-01").valueOf());
    Date.now = jest.fn(() => now);
    const world = worldFactory.create();
    
    expect(world.creationDate.valueOf()).toEqual(moment.utc("2018-01-01").valueOf());
    expect(world.regenerationDate.valueOf()).toEqual(moment.utc("2018-01-01").valueOf());
  });
});