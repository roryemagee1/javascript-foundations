class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
  };

  isWhite() {
    return false;
  };

  says(statement) {
    return `**;* ${statement} *;**`
  }

};

module.exports = Unicorn;
