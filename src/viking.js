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
  if(health) {
    return `${name} has received ${damage} points of damage`;
  }
}

// Saxon
class Saxon extends Soldier {}

// War
class War {}
