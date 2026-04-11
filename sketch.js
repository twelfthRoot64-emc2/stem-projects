let canvas;
let x = 0;
let y = 0;
let scale1 = 50;
let velocitySliderX;
let velocitySliderY;
let button;
let isPaused = true;
let font;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.mousePressed(setPosition);
  velocitySliderX = createSlider(-5, 5, 2);
  velocitySliderY = createSlider(-5, 5, 2);
  button = createButton("Play");
  button.mousePressed(toggleSim);
}

function toggleSim(){
  isPaused = !isPaused;
  
  if(isPaused){
    button.html("Play");
  }
  else{
    button.html("Pause");
  }
}

function setPosition(){
  x = mouseX-width/2;
  y = height/2 - mouseY;
}

function draw(){
  background(300);
  translate(width/2, height/2);
  scale(1, -1);
  
  stroke('black');
  strokeWeight(5);
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
  
  for(let i = -10; i <= 0; i++){
    let xPos = i * scale1;
    
    strokeWeight(3);
    line(xPos, -5, xPos, 5);
    
    push();
    scale(1, -1);
    strokeWeight(0.5);
    text(i, xPos - 9, -10);
    pop();
  }
  
  for(let i = 1; i <= 10; i++){
    let xPos = i * scale1;
    
    strokeWeight(3);
    line(xPos, -5, xPos, 5);
    
    push();
    scale(1, -1);
    strokeWeight(0.5);
    text(i, xPos - 5, -10);
    pop();
  }
  
  for(let i = 1; i <= 10; i++){
    let yPos = i * scale1;
    
    strokeWeight(3); 
    line(-5, yPos, 5, yPos);
    
    push();
    scale(1, -1);
    strokeWeight(0.5);
    text(-i, -20, yPos + 5);
    pop();
    
  }
  
  for(let i = -10; i <= -1; i++){
    let yPos = i * scale1;
    
    strokeWeight(3);
    line(-5, yPos, 5, yPos);
    
    push();
    scale(1, -1);
    strokeWeight(0.5);
    text(-i, -20, yPos + 5);
    pop();
  }
  
  let velocityX = velocitySliderX.value();
  let velocityY = velocitySliderY.value();
  
  if(!isPaused){
  x += velocityX;
  y += velocityY;
  }
  
  circle(x, y, 10)
}
