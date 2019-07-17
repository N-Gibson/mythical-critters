class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    if(this.wolf === true) {
      this.hungry = true;
    }
  }
  eat(victim) {
    if(this.hungry === false) {
      return;
    } else {
      victim.alive = false;
    }
  }
}

module.exports = Werewolf;