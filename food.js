function Food(){
  this.food =createVector(floor(random(width)),floor(random(height)));
  
  this.show = function(){
    fill();
    rect(this.food.x,this.food.y,15,15);
  }
  this.update = function(){
    rect(this.food.x,this.food,y,15,15);
  }
  this.ate = function(snake){
    if(abs(dist(snake.x,snake.y,this.x,this.y))<15){
      return true;
    }
  }
}