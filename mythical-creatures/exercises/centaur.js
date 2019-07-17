class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.shooting = 0;
    this.running = 0;
    this.layingDown = false;
  }
  shoot() {
    if(this.cranky === true) {
      return 'NO!'
    }

    if(this.layingDown === true) {
      return 'NO!'
    }

    this.shooting++;
    if(this.shooting || this.running >= 3) {
      this.cranky = true;
    }
    return 'Twang!!!'
  }
  run() {
    this.running++
    if(this.layingDown === true) {
      return 'NO!'
    }

    if(this.running || this.shooting >= 3) {
      this.cranky = true;
    }
    return 'Clop clop clop clop!!!'
  }
  sleep() {
    return 'NO!'
  }
  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  standUp() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  sleep() {
    this.cranky = false;
    if(this.layingDown === true) {
      return 'ZZZZ'
    } else {
      return 'NO!'
    }
  }
  drinkPotion() {
    this.cranky = !this.cranky;
    if(this.standing === false) {
      return 'Not while I\'m laying down!';
    }
  }
}

module.exports = Centaur;