


class Stark {
  constructor({name, area}, location = 'Winterfell', safe = false) {
    this.name = name;
    this.area = area;
    if (this.area) {
      this.location = area
    } else {
    this.location = location;
    };
    this.safe = safe;
  };

  sayHouseWords() {
    if (!this.safe) {
      return 'Winter is Coming';
    } else if (this.safe) {
      return 'The North Remembers';
    };
  };

  callDirewolf(wolfName, callLocation) {
    var Direwolf = require('./direwolf');
    var direwolfx = new Direwolf(wolfName, callLocation);
    direwolfx.starksToProtect.push(this);
    direwolfx.home = this.location;
    this.safe = true;
    return direwolfx;
  };

};

module.exports = Stark;
