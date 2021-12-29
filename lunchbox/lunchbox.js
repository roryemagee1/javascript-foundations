class LunchBox {
  constructor({owner, madeOf, shape, color}) {
    this.owner = owner;
    this.material = madeOf;
    this.shape = shape;
    this.color = color;
    this.snacks = [];
  };

  acquireSnack(fruitSnack) {
    this.snacks.push(fruitSnack);
    fruitSnack.isInLunchBox = true;
  };

  findHealthySnacks() {
    var healthySnacks = [];
    for (var j = 0; j < this.snacks.length; j++) {
      for (var i = 0; i < this.snacks[j].type.length; i++) {
        if (((this.snacks[j].type[i] == 'F') || (this.snacks[j].type[i] == 'f')) && (this.snacks[j].type[i + 1] == 'r') && (this.snacks[j].type[i + 2] == 'u') && (this.snacks[j].type[i + 3] == 'i') && (this.snacks[j].type[i + 4] == 't')) {
          healthySnacks.push(this.snacks[j].type);
        };
      };
    };
    return healthySnacks;
  };

};

module.exports = LunchBox;
