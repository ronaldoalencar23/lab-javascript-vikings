// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(thedamage) {
    this.health = this.health - thedamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health, strength);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(thedamage) {
    this.health = this.health - thedamage;

    if (this.health > 0) {
      return `${this.name} has received ${thedamage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(thedamage) {
    this.health = this.health - thedamage;

    if (this.health > 0) {
      return `A Saxon has received ${thedamage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxonInjuried = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.pop(saxon);
    }
    return saxonInjuried;
  }
  saxonAttack() {
    let saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let vikingInjuried = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.pop(viking);
    }
    return vikingInjuried;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
