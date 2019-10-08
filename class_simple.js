class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    return `Hello ${this.firstName}`;
  }
}

const john = new Person('john', 'doe');
console.log(john.greet()); // Hello john
