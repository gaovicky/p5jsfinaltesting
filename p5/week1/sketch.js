
var r = 30; //must equal a number for mousePressed function
var g = 144;
var size = 70;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(r,g,255);
  // body
  noStroke();
  fill (0,0,128);
  ellipse(width/2,height/2,600,1200);
  // mouth
  fill(123,104,238);
  ellipse(width/2,height/2,600,250);
  // 'open' and 'close' mouth
  if (mouseY < height/2){
    noStroke();
    fill(220,20,60);
    ellipse(width/2,height/2,200,100);
  }
  else {
    fill(220,20,60);
    ellipse(width/2,height/2,450,100);
  }
  // cursor
  fill(225);
  ellipse(mouseX/3, mouseY/2, size, size);
  ellipse(mouseX/2, mouseY/3, size/2, size/2);
  ellipse(mouseX/3, mouseY/4, size/3, size/3);
}
