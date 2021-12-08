var xpos = 20; //starting x position
var ypos = 160; //starting y position
var step = 90; //space between circles

function setup() {
  createCanvas(500,500);
}

function draw() {
  if (mouseIsPressed) {
    background(255,210,210);
    fill (255);
    for (var i = 0; i < 6; i++){
        for (let j = 0; j < 8; j++) {
          ellipse(xpos+(step*i), ypos+(step*j), 30, 30);
        }
    }
    let w='calm down';
    textSize(32);
    text(w,120,100);
  }

  else {
    background(235, 4, 80);
    noStroke();
    fill (255);
    for (var i = 0; i < width; i++){
        for (let j = 0; j < 8; j++) {
          ellipse(250+(sin(frameCount/5)*450), ypos+(step*j), 50, 30);
        }
    }
    let w='*panicking*';
    textSize(32);
    text(w,120,100);
    let n='click and hold to...';
    textSize(20);
    text(n,120,130);
  }
}
