var snakes;
var food;
var snakeCoord = [];
var snakeLen = 20;
var leftOn = false;
var rightOn = true;
var upOn = false;
var downOn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakes = new Snake();
  background(0);
}

function draw() {

  stroke(255, 0, 0);
  if (upOn === true) {
    snakes.moveUp();
  }
  if (downOn === true) {
    snakes.moveDown();
  }
  if (leftOn === true) {
    snakes.moveLeft();
  }
  if (rightOn === true) {
    snakes.moveRight();
  }
  /*for(var i = snakeCoord.length-1; i>0;i++){
    snakeCoord[i].update();
    snakeCoord[i].show();
  }*/
  snakes.update();
  snakes.show();
}

function keyPressed() {
  /*if(keyCode == ENTER){
    //snakeCoord.push(new Snake());
  }*/
  if (keyCode == UP_ARROW) {
    upOn = true;
    downOn = false;
    leftOn = false;
    rightOn = false;
  } else if (keyCode == DOWN_ARROW) {
    upOn = false;
    downOn = true;
    leftOn = false;
    rightOn = false;
  } else if (keyCode == LEFT_ARROW) {
    upOn = false;
    downOn = false;
    leftOn = true;
    rightOn = false;
  } else if (keyCode == RIGHT_ARROW) {
    upOn = false;
    downOn = false;
    leftOn = false;
    rightOn = true;
  }
}