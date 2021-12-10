class Hobbit {
  constructor({name}, age = 0) {
    this.name = name;
    this.age = age;
    this.adult = false;
    this.old = false;
    this.hasRing = false;

    };

  celebrateBirthday() {
    this.age = this.age + 1;
    if (this.age < 33) {
      this.adult = false;
    } else {
      this.adult = true;
    };
    if (this.age < 101) {
      this.old = false
    } else {
      this.old = true;
    };
  };

  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      this.hasRign = false;
      return 'You can\'t have it!';
    };
  };

};

var frodo = new Hobbit('Frodo');
console.log(frodo);









module.exports = Hobbit;
