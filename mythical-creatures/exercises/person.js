class Person {
  constructor(name, mood = 'frightened') {
    this.name = name;
    this.mood = mood;
  };
};

var dude = new Person('bob', 'happy')
console.log(dude);

module.exports = Person;
