var Craft = require("../src/craft.js");

class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  };

  useMaterial(used) {
    if (this.amount >= used) {
      this.amount += -(used);
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    } else {
      return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    };
  };

  calculateMaterialCost() {
    return (this.price) * (this.amount);
  };

};

module.exports = Material;
