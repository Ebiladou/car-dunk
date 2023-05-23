function Car() {
  this.driving = false;
  let status = this.driving;
  this.direction = 0;
  //this.direction = { x: 0, y: 0 };
  
  this.steer = function () {
    if (status === true) {
      this.direction += angle;
      this.direction %= 360;
      //let radians = (angle * Math.PI) / 180;
      //let newX = this.position.x + Math.cos(radians);
      //let newY = this.position.y + Math.sin(radians);
      //this.position.x = newX;
      //this.position.y = newY;
    }
    return this.driving;
  };

  this.start = function () {
    if (status === false) {
      this.driving = true;
    }
    return this.driving;
  };

  this.break = function () {
    if (status === true) {
      this.driving = false;
    }
    return this.driving;
  };
}

const corolla = new Car();
console.log(corolla.start());