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
      //let radians = (angle * Math.PI) / 180;
      //let newX = this.position.x + Math.cos(radians);
      //let newY = this.position.y + Math.sin(radians);
      //this.position.x = newX;
      //this.position.y = newY;
    }
    return this.driving;
  }

  start() {
    if (this.status === false) {
      this.driving = true;
    }
    return this.driving;
  }

  break() {
    if (this.status === true) {
      this.driving = false;
    }
    return this.driving;
  }
}

const corolla = new Car();
console.log(corolla.start());
