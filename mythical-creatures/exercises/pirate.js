class Pirate {
  constructor(name, job = 'scallywag', cursed = false) {
    this.name = name;
    this.job = job;
    this.cursed = cursed;
    this.booty = 0;
  };

  robShip() {
    if (this.booty === 500) {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    } else {
      this.booty = this.booty + 100;
      return 'YAARRR!'
    };
  };

  liftCurse() {
    if (this.cursed === true) {
      this.booty = this.booty - 300;
      this.cursed = false;
      return 'Your curse has been lifted!';
    } else {
      return 'You don\'t need to lift a curse!';
    };
  };

};

module.exports = Pirate;
