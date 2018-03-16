const moment = require("moment");

class World {
  constructor(map) {
    this.creationDate = moment.utc();
    this.regenerationDate = this.creationDate;
    this.map = map;
  }
}

class WorldFactory {
  create() {
    const map = {};
    return new World(map);
  }

  createMap() {

  }
}

class Region {
  constructor(x, y) {
    this.players = [];
    this.x = x;
    this.y = y;
  }
}

class SafeRegion extends Region {
  constructor(x, y) {
    super(x, y);
  }
}
class Inn extends SafeRegion {}
class Shop extends SafeRegion {
  constructor(x, y, items) {
    super(x, y);
    this.items = items;
  }
}

class HostileRegion extends Region {
  constructor() {
    super(this);
    this.monsters = [];
  }
}
class TrainCamp extends HostileRegion {}
class AdvancedTrainCamp extends HostileRegion {}
class LowLand extends HostileRegion {}
class Forest extends HostileRegion {}
class Barren extends HostileRegion {}
class Castle extends HostileRegion {}

module.exports = WorldFactory;
