var y = 99;
var y2 = 90
var movement;

var x = 40;
var x2 = 360;

function setup() {
  createCanvas(400, 400);
  movement = (Math.random(5,15));
}
function draw() {
background(220);
ellipse(x,175,30,60);
ellipse(x2,175,30,60);
ellipse(200,200,300,400);
triangle(220, 250, 180, 250, 200, 220);
square(220,100,100,);
square(80,100,100,);
ellipse(270,150,100,90);
ellipse(130,150,100,90);
strokeWeight(10);
point(130,150);
point(270,150);
point(275,150);
point(270,155);
point(270,145);
point(265,150);
point(125,150);
point(135,150);
point(130,155);
point(130,145);
strokeWeight(5);
line(200,400,200,350)
line(220,400,220,350)
line(180,400,180,350)
line(160,390,160,350)
line(140,380,140,260)
line(120,370,120,310)
line(100,350,100,310)
line(240,390,240,350)
line(260,380,260,260)
line(280,370,280,310)
line(300,350,300,310)
line(160,320,240,320)
line(200,290,200,260)
line(220,290,220,260)
line(240,290,240,260)
line(180,290,180,260)
line(160,290,160,260)
strokeWeight(10);
//left eyebrow
rect(90,y2,70,10);
//right eyebrow
rect(240,y,70,10);
strokeWeight(5);
strokeWeight(20);
rect(60,60,280,10);
rect(80,-5,240,50);
rect(80,-25,240,50);
rect(80,-45,240,50);
strokeWeight(5);
line(180, 130, 220, 130)
line(50, 150, 80, 140)
line(350, 150, 320, 140)
strokeWeight(10)
line(80, 145, 180, 145);
line(220, 145, 320, 145);
strokeWeight(5)
textSize(12);
text("Seth Terry",300,390 );
text("Not Heisenberg",30,390 );
  
if(x >= 200 || x <= 0)
{
    x += movement;
}

 x += movement;


if(x2 >= 200 || x2 <= 0)
{
    x2 += -movement;
}



  
  
if (y >= 90 && y <= 1) {
    movement *= -1;
  }
 y = 90 + movement;
 
if (y2 >= 90 || y2 <= 1) {
    movement *= -1;
  }
 y2 += movement;
  
}
