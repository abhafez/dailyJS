/**
 * @param {String} firstName
 * @param {String} lastName
 */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

/**
 * @param {*} person
 * @returns {String}
 */
function greetPerson(person) {
  return `Greetings ${person.firstName}, ${person.lastName}`;
}

let johnDow = new Person("functional", "person");
console.log(greetPerson(johnDow)); // Greetings functional, person

/**
 * @class Greet
 */
class Greet {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * @memberof Greet
   */
  sayHello() {
    return `Greetings ${this.firstName}, ${this.lastName}`;
  }
}

let johnSnow = new Greet("oop", "person");
console.log(johnSnow.sayHello()); // Greetings oop, person
