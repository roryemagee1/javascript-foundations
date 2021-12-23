// var correctCount = 0;

class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  };

  collectRiddle(riddleInput) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddleInput);
    } else {
      this.riddles.splice(0, 1);
      this.riddles.push(riddleInput);
    };
  };

  attemptAnswer(answerInput) {
    var correctCount = 0;
    var riddlesRemaining = this.riddles.length;
    var finalAnswer = ""
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answerInput) {
        finalAnswer = this.riddles[i].answer;
        this.riddles.splice(i, 1);
        correctCount++;
        riddlesRemaining = this.riddles.length;
      };
      if ((correctCount >= 1) && (riddlesRemaining >= 1)) {
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else if (riddlesRemaining === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${finalAnswer}"???`;
      };
    };
    if (correctCount === 0) {
      this.heroesEaten++;
    };
  };

};

module.exports = Sphinx;
