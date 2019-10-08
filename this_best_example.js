class Car {
  setDrivingSound(sound) {
    this.sound = sound;
  }

  drive() {
    return this.sound;
  }
}

const MyCar = new Car();
MyCar.setDrivingSound('Vrooom');
console.log(MyCar.drive()); // Vrooom

const truck = {
  sound: 'FOOOOOOOO',
  truckDrive: MyCar.drive,
};

console.log(truck.truckDrive()); // FOOOOOOOO
