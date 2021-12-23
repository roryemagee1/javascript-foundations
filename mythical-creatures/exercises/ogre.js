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
  };

  swingAt(human) {
    // var noticed = this.human.noticesOgre();
    // console.log(noticed);
    // if (noticed) {
      this.swings++;
    // };
  };

};

module.exports = Ogre;
