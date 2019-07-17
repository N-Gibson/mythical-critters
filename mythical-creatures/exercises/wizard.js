class Wizard {
  constructor(literal) {
    this.name = literal.name;
    this.bearded = true;
    this.isRested = true;
    this.counter = 0
    if (literal.bearded === false) {
      this.bearded = literal.bearded;
    }
  }
  incantation(powers) {
    return powers.toUpperCase();
  }
  cast() {
    this.counter++;
    if (this.counter > 3) {
      this.isRested = false;
      return;
    }
    return 'I SHALL NOT CAST!';
  }
}

module.exports = Wizard;