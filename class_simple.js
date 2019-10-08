class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


  greet = () => {
    return `Hello ${this.firstName}`;
  };
}

var john = new Person("john", "doe");
console.log(john.greet());
