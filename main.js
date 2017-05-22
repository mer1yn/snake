var canvas = null;
var context = null;
var snake = null;

var directions = [0,0,0,0,0];
var direction = 0;

function main(){
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');
  snake = new Snake();

}

var fps = setInterval(function(){
  clear();



  update();
  snake.show();




  directions.push(direction);
  directions.splice(0,1);
  console.log(directions);
},100);

function Snake(){
  this.x = 0;
  this.y = 0;
  this.dots = [new Dot(0,0), new Dot(0,20), new Dot(0,40), new Dot(0,60),new Dot(0,80)];

  this.show = function(){
    this.dots.forEach(function(dot){
      dot.show();
    })
  }
}

function Dot(x,y){
  this.x = x;
  this.y = y;
  this.height = 20;
  this.width = 20;

  this.show = function(){
    context.fillStyle = 'white';
    context.fillRect(this.x,this.y,this.width, this.height);
  }
}

function update(){
  for (var i = 0; i < snake.dots.length; i++) {
    switch (directions[i]) {
      case 0:
        snake.dots[i].y += 20;
        break;
      case 1:
        snake.dots[i].x += 20;
        break;
      case 2:
        snake.dots[i].y -= 20;
        break;
      case 3:
        snake.dots[i].x -= 20;
        break;
    }
  }
}

function clear(){
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width, canvas.height);
}

document.addEventListener("keydown",function(e){
  switch (e.key) {
    case "ArrowUp":
      if (direction != 0) {
        direction = 2;
      }
      break;
    case "ArrowDown":
      if (direction != 2) {
        direction = 0;
      }
      break;
    case "ArrowLeft":
      if (direction != 1) {
        direction = 3;
      }
      break;
    case "ArrowRight":
      if (direction != 3) {
        direction = 1;
      }
      break;
    default:
      console.log("ggg");
  }
});
