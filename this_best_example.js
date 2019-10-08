class Car {
  setDrivingSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound;
  }
}

var MyCar = new Car();
MyCar.setDrivingSound("Vrooom");
console.log(MyCar.drive()); // Vrooom

var truck = {
  sound: "FOOOOOOOO",
  truckDrive: MyCar.drive
};

console.log(truck.truckDrive()); // FOOOOOOOO
