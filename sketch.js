let x = 0;
let y = 0;
let velocitySlider;
let button;
let isRunning = true;

function setup(){
  createCanvas(windowWidth, windowHeight);
  velocitySlider = createSlider(-5, 5, 2);
  button = createButton("Pause");
  button.mousePressed(toggleSim);
  translate(width/2, height/2)
}

function toggleSim(){
  isRunning = !isRunning;
}

function mousePressed(){
  x = mouseX;
  y = mouseY;
}

function draw(){
  background(300);
  
  stroke('black');
  strokeWeight(5);
  line(0, height/2, width, height/2);
  line(width/2, height, width/2, 0);
  
  let velocity = velocitySlider.value();
  
  x += velocity;
  
  if(x>width){
    x = 0;
  }
  
  circle(x, y, 10)
}
