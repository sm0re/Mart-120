var x = 465;
var y = 50;

var diameter = 45;
var speedy = 1;
var circles = [];
var staticCircles = [];

// Function to setup the enviroment
function setup() {
  createCanvas(1000, 1000);
  obstacleMovement();
}

// Function to place object on mouse click
function mousePressed() {
  
  staticCircles.push({
    x: mouseX,
    y: mouseY
  });
}


function drawBackground() {
  background(0, 0, 0); // Background Color
  noStroke();
  fill(121, 77, 0); // Exit Door Color
}

function createBorders(thickness)
{
  // top border
  fill(255, 255, 0);
  rect(0,0,width,thickness);
  // left border
  rect(0,0,thickness,height);
  // bottom border
  rect(0, height-thickness,width, thickness);
  // right upper border
  rect(width-thickness,0,thickness,height);
}

function drawExit() {
  square(x, y, diameter);
  textSize(40);
  text('DOOR', 440, 985);
  fill(255, 0, 0); // EXit Text Color
}

function drawCharacter()
{
  rect(400,990,200,25);
  fill(255, 255, 255); // Character Color
}

function drawObstacles() 
{
   
  for (i = 0; i < circles.length; i++) {
    fill(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    circle(circles[i].x, circles[i].y, Math.floor(Math.random() * 25) + 25);
    if (circles[i].x >= width - diameter / 2) {
      circles[i].x = (diameter / 2) + 1;
    }

    if (circles[i].x <= diameter / 2) {
      circles[i].x = width - diameter / 2;
    }

    if (circles[i].y >= height - diameter / 2) {
      circles[i].y = (diameter / 2) + 1;
    }

    if (circles[i].y <= diameter / 2) {
      circles[i].y = height - diameter / 2;
    }

    circles[i].x += circles[i].speedyX;
    circles[i].y += circles[i].speedyY;
  }

  for (i = 0; i < staticCircles.length; i++) {
    fill(255,55,55);
    circle(staticCircles[i].x,staticCircles[i].y, 40);
  }
}

function obstacleMovement() {
    for (i = 0; i < 10; i++) {
    var randInt1 = Math.round(Math.random());
    if (randInt1 == 0) {
      randInt1 = -1;
    }

    var randInt2 = Math.round(Math.random());
    if (randInt2 == 0) {
      randInt2 = -1;
    }

    circles.push({
      x: Math.floor(Math.random() * (800 - diameter/2)) + diameter/2,
      y: Math.floor(Math.random() * (600 - diameter/2)) + diameter/2,
      diameter: Math.floor(Math.random() * 25) + 25,
      speedyX: randInt1,
      speedyY: randInt2
    });
      
    
  }
}

function characterMovement()
{
  
  endScreen()
  
    // Up and down movement using arrow keys
    if (keyIsDown(UP_ARROW)) {
      if (y > 0) {
        y -= 5;
      }
    } else if (keyIsDown(DOWN_ARROW)) {
      if (y < height - diameter || x > 400 && x < 600) {
        y += 5;
      }

    }

    // Movement to left and right using arrow keys
    if (keyIsDown(RIGHT_ARROW)) {
      if (x < width - diameter) {
        x += 5;
      }
    } else if (keyIsDown(LEFT_ARROW)) {
      if (x > 0) {
        x -= 5;
        
    }
}
}

function endScreen() {
  // If 'player' is touching exit then switch to congrats screen
  if (y >= height) {
    
    fill(255, 255, 255);
    textSize(150);
    background(0,0,0);
    text('Congrats!', 160, 450);
    textSize(100);
    text('You Have Won', 150, 700);
    
  }
}


// Fucntion to draw
function draw() {
  
  drawBackground();
  
  drawCharacter();
  
  drawExit();
  
  characterMovement();
  
  drawObstacles();
  
  createBorders(5);
}
// END OF SCRIPT
