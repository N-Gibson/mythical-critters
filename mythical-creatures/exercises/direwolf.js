class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }
  protect(stark) {
    this.huntsWhiteWalkers = false;
    stark.safe = true;
    if(this.home === stark.location && this.starksToProtect.length < 2) {
        this.starksToProtect.push(stark);
    }
  }
  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      this.starksToProtect.shift(stark);
    }
    stark.safe = false;
  }
}

module.exports = Direwolf