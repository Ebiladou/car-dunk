function Car() {
  this.driving = false;
  this.direction = { x: 0, y: 0 };
  let status = this.driving;

  this.steer = function () {
    //let status = this.driving;
    if (status === true) {
      let radians = (angle * Math.PI) / 180;
      let newX = this.position.x + Math.cos(radians);
      let newY = this.position.y + Math.sin(radians);
      this.position.x = newX;
      this.position.y = newY;
    }
    return this.driving;
  };

  this.start = function () {
    //let status = this.driving;
    if (status === false) {
      this.driving = true;
    }
    return this.driving;
  };

  this.break = function () {
    //let status = this.driving;
    if (status === true) {
      this.driving = false;
    }
    return this.driving;
  };
}

const corolla = new Car();
console.log(corolla.start());