var Material = require("../src/material.js");

class Craft {
  constructor({type, materials}) {
    this.name = type;
    this.materials = materials;
    this.completed = false;
  };

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  };

  calculateProjectTotal() {
    var total = 0;
    for (var i = 0; i < this.materials.length; i++) {
      total += (this.materials[i].price * this.materials[i].amount);
    };
    return total;
  };

};

module.exports = Craft;
