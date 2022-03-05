var canvas = document.querySelector('canvas');
console.log(canvas);
 
//create our superobject , get the 2d context of canvas to superobject.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d'); 

// we need to define gravitional force to make our object fall to ground.
const G = 10;
//while an object has released from any height , the gravitional force Fg = m * G

function createBall() {
    this.x = innerWidth / 2;
    this.y = innerHeight / 2;
    this.radius = 75; // we will use radius to draw our object and also as a weight of our object.
    this.dy = 10;
    this.draw = function()  {
        c.beginPath();
        c.arc(this.x , this.y, this.radius , 0 , Math.PI * 2 , false);
        c.strokeStyle = 'blue';
        c.fillStyle = 'blue';
        c.fill();
        c.stroke();
    }
    
    this.fall = function() {
        if(this.y > innerHeight - this.radius || this.y < 0 + this.radius) {
            this.dy = -this.dy * 0.92;
        }
        else {
            this.dy += 1;
        }
        this.y += this.dy;
        this.draw();
    }
}

var ball = new createBall();
function animate() {
    c.clearRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(animate);
    ball.fall();
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Do nothing if the event was already processed
        }
      
        switch (event.key) {
          
          case "ArrowLeft":
            ball.x -= 50;
            break;
          case "ArrowRight":
            ball.x += 50;
            break;
          default:
            return; // Quit when this doesn't handle the key event.
        }
      
        // Cancel the default action to avoid it being handled twice
        event.preventDefault();
      }, true);
}
animate();



