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

// update position
x += velocity;

// reset when it goes off screen
if (x > width) {
x = 0;
}

// draw object
circle(x, 200, 20);
}
