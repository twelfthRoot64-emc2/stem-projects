let x = 0;          // position
let velocity = 2;   // constant speed
 
function setup() {
createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
background(220);
line(0, height/2, width, height/2);
line(width/2, 0, width/2, height);

// update position
x += velocity;

// reset when it goes off screen
if (x > width) {
x = 0;
}

// draw object
circle(x, 200, 20);
}
