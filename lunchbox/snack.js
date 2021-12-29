class Snack {
  constructor(type) {
    this.deliciousLevel = 'extra';
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
  };

  getEaten() {
    this.amount += -10;
    if (this.amount <= 20) {
      this.cuttingItClose = true;
    };
  };

  checkForHealthy() {
    for (var i = 0; i < this.type.length; i++) {
      if (((this.type[i] == 'F') || (this.type[i] == 'f')) && (this.type[i + 1] == 'r') && (this.type[i + 2] == 'u') && (this.type[i + 3] == 'i') && (this.type[i + 4] == 't')) {
        return true;
      };
    };
    return false;
  };

};

module.exports = Snack;

var snackTest = new Snack('muchfruit');

console.log(snackTest.type.length);
console.log(snackTest);
console.log(snackTest.type[1]);
