var actionCount = 0;

class Centaur {
  constructor({name, type}, cranky = false, standing = true, layingDown = false) {
    this.name = name;
    this.breed = type;
    this.cranky = cranky;
    this.standing = standing;
    this.layingDown = layingDown
  };

  shootBow() {
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      actionCount++;
      if (actionCount >= 3) {
        this.cranky = true;
      };
      return 'Twang!!!';
    };
  };

  run() {
    if (this.cranky || this.layingDown) {
      return 'NO!';
    } else {
      actionCount++;
      if (actionCount >= 3) {
        this.cranky = true;
      };
      return 'Clop clop clop clop!!!';
    };
  };

  sleep() {
    if (this.standing) {
      return 'NO!';
    } else if (this.layingDown) {
      this.cranky = false;
      return 'ZZZZ';
    };
  };

  layDown() {
    this.standing = false;
    this.layingDown = true;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };

  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else if (this.layingDown) {
      return 'Not while I\'m laying down!';
    };
  };

};




module.exports = Centaur;
