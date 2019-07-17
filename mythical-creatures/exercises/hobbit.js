class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.old = false;
    this.hasRing = false;
    this.isShort = true;
    if(this.name === "Frodo") {
      this.hasRing = true;
    }
  }
  celebrateBirthday() {
    this.age++;
    if(this.age <= 32){
      this.adult = false;
    } else if(this.age >= 101){
      this.old = true;
    } else { this.adult = true;
    }
  }
}

module.exports = Hobbit