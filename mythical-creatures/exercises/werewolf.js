class Werewolf {
  constructor(name, form = 'human', hungry = false) {
    this.name = name;
    this.form = form;
    this.hungry = hungry;
  };

  completeTransformation() {
    if (this.form === 'human') {
      this.form = 'wolf';
      this.hungry = true;
      return 'Aaa-Woooo!';
    } else if (this.form === 'wolf') {
      this.form = 'human';
      this.hungry = false;
      return 'Where am I?';
    };
  };

  eatVictim(victim) {
    if (this.form === 'human') {
      return `No way am I eating Baby, I'd like a burger!`
    } else {
      victim.alive = false;
      this.form = 'human';
      return `Yum, ${victim.name} was delicious.`
    };
  };

};

module.exports = Werewolf;
