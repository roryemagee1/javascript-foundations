
var Stark = require('./stark');

class Direwolf {
  constructor(name, home = 'Beyond the Wall', size = 'Massive', huntsWhiteWalkers = true) {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = huntsWhiteWalkers;
  };

  protect(stark) {
    // var stark1 = new Stark(stark);
    if (stark.location === this.home && this.starksToProtect.length < 2) {
      this.huntsWhiteWalkers = false;
      stark.safe = true;
      this.starksToProtect.push(stark);
    };
  };

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (this.starksToProtect[i].name === stark.name) {
        stark.safe = false;
        this.starksToProtect.splice(i, 1);
      };
    };
  };

};

module.exports = Direwolf;
