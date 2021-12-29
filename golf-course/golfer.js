class Golfer {
  constructor({name, handicap}) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.confidence = 0;
  };

  calculateAvg(parValue) {
    var averageValue = (this.handicap + parValue);
    return `I usually shoot a ${averageValue} on average.`
  };

  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration += 500;
    } else if (golfCourse.difficulty === 'moderate') {
      this.frustration += 100;
    };
  };

  hitTheRange() {
    this.confidence += 10;
  };

  simulatePractice(degree, golfer) {
    golfer.confidence += (degree * 10);
  };

  marvel(golfCourse) {
    var statement = 'I love the ';
    for (var i = 0; i < golfCourse.features.length-1; i++) {
      statement += (golfCourse.features[i] + ' and ');
    };
    statement += (golfCourse.features[golfCourse.features.length-1] + ' on this course!');
    return statement;
  };

  whatYaShoot(shot) {
    if (shot === -2 || shot === -1) {
      this.frustration += (-(shot * (-1) * 10 + 10))
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else if (shot === 0) {
      this.frustration += (-10);
      return 'Booyah!';
    } else if (shot === 1 || shot === 2 || shot === 3 || shot === 4) {
      this.frustration += 20;
      return 'Doh!';
    };
  };

};

module.exports = Golfer;
