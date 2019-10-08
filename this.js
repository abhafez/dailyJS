function Person (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function greetPerson (person) {
  return `Greetings ${person.firstName}, ${person.lastName}`
}

class Greet {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello = () => `Greetings ${this.firstName}, ${this.lastName}`
}

let johnDow = new Person('John', 'Doe');
console.log(greetPerson(johnDow));

let johnSnow = new Greet('John', 'Snow');
console.log(johnSnow.sayHello());