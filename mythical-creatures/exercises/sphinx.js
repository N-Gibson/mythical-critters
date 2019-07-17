class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle)
    if(this.riddles.length > 3) {
      this.riddles.shift();
    }
  }
  // attemptAnswer(riddle) {
  //  if(riddle.answer === this.riddles.answer) {
  //  this.riddles.pop()
  //  return 'That wasn\'t that hard, I bet you don\'t get the next one'
  //   }
  // } 
  attemptAnswer(riddle) {
    for(var i = 0; i < this.riddles.length; i++) {
      if(riddle.answer === this.riddles.answer) (
        this.riddles.splice(riddle[i], 1)
        )
        console.log(this.riddles);
    }
  }
}

module.exports = Sphinx