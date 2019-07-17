class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
  }
  swingAt(human) {
    if(human.scared === true) {
      this.swings++;
    }
  }
}

module.exports = Ogre;