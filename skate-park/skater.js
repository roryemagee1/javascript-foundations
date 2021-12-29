var SkatePark = require('./skatepark.js');

class Skater {
  constructor({name, skill, tricks, cash}) {
    this.name = name;
    this.skill = skill;
    this.tricks = tricks;
    this.money = cash;
    this.frustration = 0;
  };

  practice(trickAttempted) {
    if (!this.tricks[trickAttempted]) {
      this.frustration++;
    };
    if (this.frustration === 3) {
      this.tricks[trickAttempted] = true;
      this.frustration = 0;
      return `I just learned to ${trickAttempted}!!!`;
    };
  };

};

module.exports = Skater;
