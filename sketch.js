let x = 0;
let velocity = 2;

functionSetup(){
createCanvas(600, 400);
}

function draw(){
  background(220);

x += velocity;

if(x > width){
  x = 0
}

circle(x, 200, 20);
}
