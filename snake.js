function Snake() {
  this.x = width/2;
  this.y = height/2;
  this.len = 8;
  this.tale = [];
  this.ySpeed = 0;
  this.xSpeed = 10;

  this.show = function() {
    stroke(0, 255, 0, 50);
    strokeWeight(10);
    /*var tail = createVector(this.x, this.y);
  this.tale.push(tail);

  if (this.tale > this.len) {
    this.tale.splice(0, 1);
  }*/
    //for(var i = this.tale.length-1; i>0;i--){
    point(this.x, this.y);
    //print(this.tale);
      
    //}
    //stroke(0, 255, 0, 50);
    //strokeWeight(10);
    /*beginShape();
    for (var i = 0; i < this.tale.length; i++) {
      var head = this.tale[i];
      vertex(head.x, head.y);
    }
    endShape();*/
  }

  this.update = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    /*for (var i = 0; i < this.tale.length; i++) {
      this.tale[i].x = this.xSpeed;
      this.tale[i].y = this.ySpeed;
    }*/
  }
  this.moveLeft = function() {
    this.xSpeed = -2;
    this.ySpeed = 0;
    if (this.x <= 0) {
      this.x = width;
    }
    this.x -= 5;
  }

  this.moveRight = function() {
    this.xSpeed = 2;
    this.ySpeed = 0;
    if (this.x >= width) {
      this.x = 0;
    }
    this.x += 5;
  }

  this.moveUp = function() {
    this.xSpeed = 0;
    this.ySpeed = -2;
    if (this.y <= 0) {
      this.y = height;
    }
    this.y -= 5;
  }

  this.moveDown = function() {
    this.xSpeed = 0;
    this.ySpeed = 2;
    if (this.y >= height) {
      this.y = 0;
    }
    this.y += 5;
  }
}