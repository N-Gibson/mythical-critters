class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust = 20;
  }
  makeDresses(newDresses) {
    for(var i = 0; i < this.clothes.dresses.length; i++) {
      this.clothes.dresses.push(newDresses);
    }
  }
}

module.exports = Fairy;