var Snowman = require('./Snowman');

class Human {
  constructor(name, materials) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    };
  };

  gatherMaterials(item, amount) {
    this.materials[item] += amount;
  };

  buildASnowman() {
    var snowman = new Snowman(this.materials);
    return snowman;
  };

  placeMagicHat() {
    var snowman = this.buildASnowman();
    snowman.canWearMagicHat();
    if (snowman.magicHat) {
      return 'Woah, this snowman is coming to life!';
    } else if (!snowman.magicHat) {
      return 'I guess I didn\'t build it correctly.';
    };
  };

};

module.exports = Human;
