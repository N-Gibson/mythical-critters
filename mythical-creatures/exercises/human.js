class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.scared = false;
  }
  noticesOgre() {
    this.encounterCounter++;
  if(this.encounterCounter === 3) {
    return this.scared = true;
  } else if(this.encounterCounter === 6) {
    return this.scared = true;
    } else {
      return this.scared = false;
    }
  }
}

module.exports = Human;