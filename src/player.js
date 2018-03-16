const Roll = require('roll'), roll = new Roll();
const _ = require('lodash');

class Stats {
  constructor(strength, life, observation){
    this.level = 1;
    this.exp = 0;
    this.strength = strength;
    this.life = life;
    this.observation = observation;
  }

  displayStats() {
    const strStrength = _.padStart(this.strength, 3,' ');
    const strObservation = _.padStart(this.observation, 3,' ');
    const strLife = _.padStart(this.life, 3,' ');
    return  "+----------+-------------+------+\n"+
            "| STRENGTH | OBSERVATION | LIFE |\n"+
            "+----------+-------------+------+\n"+
            "|      "+strStrength+" |         "+strObservation+" |  "+strLife+" |\n"+
            "+----------+-------------+------+"
  }
}

class Player {
  constructor(id, name, stats) 
  {
    this.id = id;
    this.name = name;
    this.stats = stats;
  }

  getStats() {
    return this.stats.displayStats();
  }
  
}

class PlayerFactory {
  constructor(randomizer) {
    this.randomizer = randomizer || ( dices => roll.roll(dices).result);
  }
  create(id, name) {
    const stats = new Stats(this.randomizer("1D6+3"),this.randomizer("2D6+5"),this.randomizer("1D6+3"));
    return new Player(id, name, stats);
  }
}

module.exports = PlayerFactory;