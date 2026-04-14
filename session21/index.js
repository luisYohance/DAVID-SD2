// console.log("Hello World!");
// Imitates real-world descriptions and real-world objects

// let arr = [1, 2, 3];

// let obj = {
//   name: "Carlo",
//   age: 22,
// };

// console.log(typeof arr);
// console.log(typeof obj);

// let person = {
//   completeName: "Juan Dela Cruz",
//   age: 25,
//   height: 160,
//   weight: 85,
//   contactNumber: [1234, 4567],
//   address: {
//     houseNo: 1,
//     brgy: "Del Pilar",
//     city: "CSFP",
//   },
// };

// console.log(person);

// //Dot notation
// //Access values inside an object property

// console.log(person.completeName);
// console.log(
//   `Hi, my name is ${person.completeName} and I am ${person.age} years old!`,
// );

// console.log(person["completeName"]);

// //Updating a value via dot notation
// person.completeName = "Johnley Kot";

// person.email = "jdoe@mail.com";
// console.log(person);

// // Class and Objects
// class Animal {
//   constructor(name, breed, color, kind) {
//     this.name = name;
//     this.breed = breed;
//     this.color = color;
//     this.kind = kind;
//   }

//   makeSound() {
//     console.log("Woof! Woof!");
//   }
// }

// let dog = new Animal("Bruno", "Aspin", "Brown", "Dog");
// console.log(dog.name);
// dog.makeSound();
// let cat = new Animal("Luna", "Puspin", "Gray", "Cat");
// cat.makeSound = function () {
//   console.log("Meow! Meow!");
// };

// console.log(cat);
// cat.makeSound();

// let trex = new Animal("Rex", "Dino", "Green", "Dinosaur");
// trex.makeSound = function () {
//   console.log("Roar! Roar!");
// };

// console.log(
//   `Contact Number: ${person.contactNumber[0]}-${person.contactNumber[1]}\n` +
//     `House #${person.address.houseNo} of Brgy. ${person.address.brgy}, ${person.address.city}`,
// );

// [SECTION] Pokemon

class Pokemon {
  constructor(name, level, health, mana, maxMana) {
    // add additional option for max health and maxMana
    this.name = name;
    this.level = level;
    this.maxHealth = health * level;
    this.health = this.maxHealth;
    this.maxMana = maxMana ?? 100; // safe guard for max mana
    this.mana = this.maxMana;
  }

  tackle = function (target) {
    let damage = 20;
    let manaGain = 40;
    let newMana = Math.min(this.mana + manaGain, this.maxMana);

    target.health -= damage;
    console.log(
      `${this.name} used tackle attack! ${target.name} took ${damage} damage!\n${this.name} gained ${newMana - this.mana} mana!`,
    );
    this.mana = newMana;

    if (target.health <= 0) {
      console.log(`${target.name} fainted, ${this.name} wins!`);
    }
  };

  useSkill1 = function (target) {
    let s1Name;
    let manaCost;
    let damage;

    switch (this.name) {
      case "Pikachu":
        damage = 150;
        manaCost = 50;
        s1Name = "Thunderbolt";
        break;
      case "Charmander":
        damage = 150;
        manaCost = 50;
        s1Name = "Flamethrower";
        break;
    }

    if (manaCost <= this.mana) {
      target.health -= damage;
      console.log(
        `${this.name} used ${s1Name}! ${target.name} took ${damage} damage!`,
      );
      this.mana -= manaCost;
      console.log(`${this.name} spent ${manaCost} mana.`);
      if (target.health <= 0) {
        console.log(`${target.name} fainted, ${this.name} wins!`);
      }
    } else {
      console.log(`${this.name} has insufficient mana!`);
    }
  };

  usePotion = function () {
    let heal = 150;
    let newHealth = Math.min(this.health + heal, this.maxHealth);

    console.log(
      `${this.name} uses a Potion! ${this.name} restores ${newHealth - this.health} health!`,
    );
  };
}
let pikachu = new Pokemon("Pikachu", 5, 100, 100);
console.log(pikachu);

let charmander = new Pokemon("Charmander", 5, 100, 100);
console.log(charmander);

pikachu.tackle(charmander);
charmander.usePotion();
charmander.useSkill1(pikachu);
pikachu.useSkill1(charmander);
charmander.useSkill1(pikachu);
pikachu.usePotion();
pikachu.tackle(charmander);
charmander.useSkill1(pikachu);
charmander.tackle(pikachu);
pikachu.tackle(charmander);
charmander.tackle(pikachu);
pikachu.tackle(charmander);
charmander.useSkill1(pikachu);
pikachu.tackle(charmander);
charmander.tackle(pikachu);

// let heal = (500 <= this.health+150) ? 500-this.health : 150;
