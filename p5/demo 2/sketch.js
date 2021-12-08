//September15,2021
//inspect>console to check your work

// // <<---Review Week 1--->>
// function setup() {
//   createCanvas(windowWidth,windowHeight); //needs to be refreshed at each size
// }
//
// function draw() {
//   // shortcut for black is -> background (0)
//   background(255,255,0);
//   // fill(255,0,mouseX);
//   fill(255,0,mouseX/3);
//   // ellipse(200,200,100,100); // ellipse (x,y,width,height)
//   // ellipse(width/2,height/2,100,100); // (drawn in the center)
//   // ellipse(windowWidth/2,windowHeight/2,100,100);
//   ellipse(mouseX,mouseY,100,100);
//   // print(mouseX);
//   // print("hello");
//   // print("mouseX:", mouseX);
//   // print("mouseY:", mouseY);
//   // text(mouseX,50,50);
// }

// // <<---CONDITIONALS--->>
// function setup() {
//   createCanvas(windowWidth,windowHeight); //needs to be refreshed at each size
// }

// function draw() {
//   background(255,255,0);
//   fill(255,0,mouseX/3);
//
//   // if (mouseIsPressed) {
//   //   ellipse(100,100,100,100);
//   // }
//   // else {
//   //   rect(100,100,100,100);
//   // }
//
//   // if (mouseY<150){
//   //   ellipse(100,100,100,100);
//   // }
//   // else {
//   //   rect(100,100,100,100);
//   // }
//   // print(mouseY);
//
//   if (mouseY < height/2){
//     ellipse(width/2,height/2,100,100);
//   }
//   else {
//     rect(width/2,height/2,100,100);
//   }
//   print(mouseY);
// }

// <<---Adding Variables--->>
// var size = 300;
//
// function setup() {
//   createCanvas(windowWidth,windowHeight); //needs to be refreshed at each size
// }
//
// function draw() {
//   background(255,255,0);
//   ellipse(width/2,height/2,size,size);
//   ellipse(width/4,height/4,size/3,size/3);
// }

// <<--Adding Variables pt 2-->>
var size = 300;
var r = 100; //must equal a number for mousePressed function
var g = 100;
var xpos = 100;

function setup() {
  createCanvas(windowWidth,windowHeight); //needs to be refreshed at each size
}

function draw() {
  background(r,255,0);
  // r = random(20,255); //random number from 20 to 255
  fill(r,g,100);
  ellipse(xpos/2,height/2,size,size);
  ellipse(mouseX + xpos/4, mouseY + height/4, size/3, size/3);
}

function mousePressed() {
  r = random(20,255);
  g = random(100,255);
  size = random(50,400);
  xpos = random(0,windowWidth);
}
