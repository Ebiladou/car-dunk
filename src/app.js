class Car {
  constructor() {
    this.driving = false;
    this.status = this.driving;
    this.direction = 0;
  }

  steer(angle) {
    if (this.status === true) {
      this.direction += angle;
      this.direction %= 360;
    }
    return this.driving;
  }

  start() {
    if (this.status === false) {
      this.driving = true;
      this.status = this.driving;
    }
    return this.driving;
  }

  break() {
    if (this.status === true) {
      this.driving = false;
      this.status = this.driving;
    }
    return this.driving;
  }
}
class FlyingCar extends Car {
  constructor() {
    super();
    this.altitude = 0;
  }

  fly(distance) {
    this.altitude = Math.max(0, this.altitude + distance);
    return this.altitude;
  }
}

const corolla = new FlyingCar()
console.log(corolla.fly(-0));