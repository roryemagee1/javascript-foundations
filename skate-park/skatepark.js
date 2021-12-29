var Skater = require('./skater.js');

class Skatepark {
  constructor({name, year, type, features, isPrivate = false, price = 0}) {
    this.name = name;
    this.yearFounded = year;
    this.style = type;
    this.features = features;
    this.isPrivate = isPrivate;
    this.cost = price;
    this.occupants = [];
  };

  admit(skater) {
    if (this.occupants.length >= 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.';
    };
    if (!this.isPrivate) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    } else if ((this.isPrivate) && (skater.money >= this.cost)) {
      skater.money += -(this.cost);
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    } else {
      return 'Sorry, you don\'t have enough money.';
    };
  };

};

module.exports = Skatepark;
