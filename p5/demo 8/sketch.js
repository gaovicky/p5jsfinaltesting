// Oct 4, 2021

// // <--Array (list of data)-->
// var greetings = ["hello", "hi", "hola"]; //first item start off counting with 0
// var bg = [
//   [255,0,0], [0,255,0], [0,0,255]
// ]; //background color - red, green, blue
// var pos = 0; //starting position
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(bg[pos]);
//   // noLoop(); //makes it easier to read in console
//   textAlign(CENTER);
//   textSize(100);
//   text(greetings[pos], width/2, height/2);
// }
//
// function mousePressed() {
//   pos = round(random(0,2));
//   // pos += 1; //(addition assignment operator)<- increasing by one every time the mouse is pressed
//   // // print(pos); //print in console
//   //
//   // if (pos == 3){ //restarts after 3
//   //   pos = 0;
//   // }
// }

// // <--Click on screen and draw a shape-->
// var xpos = 0; /// x position
// var ypos = 0; /// y position
// var hasClicked = false;
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(200);
//   if (hasClicked){ //if true... draw rectangle
//     rect(xpos, ypos, 50, 25);
//   }
//   ypos += 1;
// }
//
// function mousePressed() {
//   hasClicked = true;
//   print(hasClicked);
//   xpos = mouseX;
//   ypos = mouseY;
// }

// // <--falling colored rectangles-->
// var xpos = [100, 300, 400]; /// x position
// var ypos = 0; /// y position
// var c = [
//   [255,0,0], [0,255,0], [255,255,0]
// ]
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(200);
//   rectMode(CENTER);
//   for (i=0; i < xpos.length; i++){ //starting value, go until end of list
//     fill(c[i]);
//     rect(xpos[i], (i*100)+ypos, 50, 25);
//   }
//   ypos += 1;
//   // print(xpos);
//
//   if (ypos >= height){
//     ypos = 0;
//   }
// }

// // <--Rectangle falling when clicked (only Y)-->
// var rectY = []; //empty list
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(200);
//   rectMode(CENTER);
//   for (i=0; i < rectY.length; i++){ //starting value, go until end of list
//     rect(200, rectY[i], 50, 25);
//     rectY[i] +=1;
//   }
// }
//
// function mousePressed() {
//   // rectY.push(height/2); //push into rectY
//   rectY.push(mouseY);
//   print(rectY);
// }

// // <--Rectangle falling when clicked (X and Y) & random color-->
// var rectXY = []; //store X Y position
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(200);
//   rectMode(CENTER);
//   for (i=0; i < rectXY.length; i++){ //starting value, go until end of list
//     fill(rectXY[i][2]);
//     rect(rectXY[i][0], rectXY[i][1], 50, 25);
//     rectXY[i][1] +=1;
//   }
// }
//
// function mousePressed() {
//   rectXY.push([mouseX, mouseY, random(255)]);
//   print(rectXY);
// }

// // <--OBJECTS -- assign text-->
// var rectProp = []; // rectangle properties
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(200);
//   rectMode(CENTER);
//   for (i=0; i < rectProp.length; i++){ //starting value, go until end of list
//     fill(rectProp[i].fillColor);
//     rect(rectProp[i].xpos, rectProp[i].ypos, 50, 25);
//     rectProp[i].ypos +=1;
//   }
// }
//
// function mousePressed() {
//   rectProp.push({
//     xpos: mouseX,
//     ypos: mouseY,
//     fillColor: random(255)
//   });
//
//   print(rectProp);
// }

// <--How to remove data from array-->
var rectProp = []; // rectangle properties

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(200);
  rectMode(CENTER);
  for (i=0; i < rectProp.length; i++){ //starting value, go until end of list
    fill(rectProp[i].fillColor);
    rect(rectProp[i].xpos, rectProp[i].ypos, 50, 25);
    rectProp[i].ypos +=100;
    print(rectProp[i].ypos);
  }
  ////////// this for loop deletes
  for (var i = rectProp.length -1; i>=0; i--){
    if (rectProp[i].ypos > height){
      rectProp.splice(i,1);
    }
  }
}

function mousePressed() {
  rectProp.push({
    xpos: mouseX,
    ypos: mouseY,
    fillColor: random(255)
  });

  print(rectProp);
}
