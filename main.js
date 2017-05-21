var canvas = null;
var context = null;
var direction = 0;

var snake = null;

(function(){
  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');


  snake = new Snake();
  console.log(snake);
})();

var fps = setInterval(function(){
  erase();

  update();

  snake.show();

},100);


function erase(){
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function Snake(){
  this.x = 0;
  this.y = 0;
  this.width = 20;
  this.height = 20;

  this.show = function(){
    context.fillStyle = 'white';
    context.fillRect(this.x,this.y, this.width, this.height);
  }
}

function update(){
  switch (direction) {
    case 0:
      snake.y += 20;
      break;
    case 1:
      snake.x += 20;
      break;
    case 2:
      snake.y -= 20;
      break;
    case 3:
      snake.x -= 20;
      break;

  }
}


document.addEventListener("keydown",function(e){
  console.log(e.key);
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
