class Magician {
  constructor({name, assistant, clothing}, favoriteAccessory = 'top hat', confidencePercentage = 10) {
    this.name = "The Great " + name;
    this.assistant = assistant;
    this.favoriteAccessory = favoriteAccessory;
    if (clothing) {
    this.favoriteAccessory = clothing;
    this.clothing = clothing;
    };
    this.confidencePercentage = confidencePercentage;
  };

  performIncantation(incantation) {
    return incantation.toUpperCase() + "!";
  };

  performTrick() {
    if (this.favoriteAccessory === 'top hat') {
      this.confidencePercentage = this.confidencePercentage + 10;
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      this.confidencePercentage = this.confidencePercentage + 10;
      return 'PULL DOVE FROM SLEEVE';
    };
  };

  performShowStopper() {
    if ((this.confidencePercentage >= 100) && (this.assistant === true)) {
      return 'WOW! The magician totally just sawed that person in half!';
    } else {
      return 'Oh no, this trick is not ready!';
    }
  }

};

module.exports = Magician;
