class Snowman {
  constructor(snowmanDetails) {
    this.snowballs = snowmanDetails.snowballs;
    this.coal = snowmanDetails.coal;
    this.buttons = snowmanDetails.buttons;
    this.carrots = snowmanDetails.carrots;
    this.magicHat = false;
  };

  canWearMagicHat() {
    if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
      this.magicHat = false;
    } else {
      this.magicHat = true;
    };
  };

};

module.exports = Snowman;
