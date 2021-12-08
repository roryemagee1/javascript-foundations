var foodCount = 0;

class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  };

  greet() {
    return `Hi, ${this.rider}!`
  };

  eat() {
    foodCount = foodCount + 1;
    if (foodCount === 3) {
      this.hungry = false;
    };
  };

};

module.exports = Dragon;
