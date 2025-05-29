'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal instanceof Herbivore) {
      if (animal.hidden === false) {
        animal.health -= 50;
      }

      const idx = Animal.alive.indexOf(animal);

      if (animal.health <= 0 && idx !== -1) {
        Animal.alive.splice(idx, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
