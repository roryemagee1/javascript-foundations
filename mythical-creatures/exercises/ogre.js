var Human = require('./human');

class Ogre {
  constructor({name, abode}, home = 'Swamp') {
    this.name = name;
    this.home = home;
    this.abode = abode;
    if (this.abode) {
      this.home = abode;
    };
    this.swings = 0;
    // this.human = new Human();
  };

  encounter(human) {
    human.encounterCounter++;
    if ((human.encounterCounter % 3 === 0) && (human.encounterCounter !== 0)) {
      this.swingAt(human);
    };
  };

  swingAt(human) {
    this.swings++;
    if ((this.swings % 2 === 0) && (this.swings !== 0)) {
      human.knockedOut = true;
    };
  };

  apologize(human) {
    human.knockedOut = false;
  };

};

module.exports = Ogre;
