class Fairy {
  constructor(name, dust = 10, disposition = 'Good natured') {
    this.name = name;
    this.dust = dust;
    this.clothes = {dresses: ['Iris']};
    this.disposition = disposition;
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust += 1;
  };

  believe() {
    this.dust += 10;
  };

  makeDresses(dressesArray) {
    for (var i = 0; i < dressesArray.length; i++) {
      this.clothes.dresses.push(dressesArray[i]);
    };
  };

  becomeProvoked() {
    this.disposition = 'Vengeful';
  };

  replaceInfant(infant) {
    if ((this.disposition === 'Vengeful') && (this.humanWards.length < 3)) {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant);
    };
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    };
    return infant;
  };

};

module.exports = Fairy;
