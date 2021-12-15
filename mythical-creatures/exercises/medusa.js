var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(statue);
    } else {
      this.statues.push(statue);
      var person = new Person(this.statues[0].name);
      person.mood = 'relieved';
      this.statues.splice(0, 1);
    }
    return person
  };

};




module.exports = Person;
module.exports = Statue;
module.exports = Medusa;
