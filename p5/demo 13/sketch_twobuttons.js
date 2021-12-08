// Oct 20, 2021

// // <==DOM: Document Object Model==>
// function setup() {
//   createCanvas (100,100);
//   createElement('h1','Another header');
//   createP("Another sentence");
// }
//
// function draw() {
//   background(50);
// }
//
// function mousePressed() {
//   createP("I am" + round(random(0,100)) + "years old");
// }

// // <==Reset==>
// var counter = 0;
//
// function setup() {
//   createCanvas (100,100);
// }
//
// function draw() {
//   background(50);
// }
//
// function mousePressed() {
//   createP("I am" + round(random(0,100)) + "years old");
//   counter++;
//   if (counter > 4) {
//     counter = 0;
//     removeElements(); // removes all elements on p5 after 4 clicks
//   }
// }

// // <== GUI: Graphical User Interface (Buttons, sliders)==>
// var button;
// var bgcolor;
//
// function setup() {
//   createCanvas (100,100);
//   bgcolor = (255); //bg color to start white
//   button = createButton("Click me");
//   button.mousePressed(randomColor); // if mouse is Pressed, trigger randomColor() (function)
// }
//
// function draw() {
//   background(bgcolor);
// }
//
// function randomColor() { //used to be mousePressed
//   // bgcolor = random(255); // greyscale
//   bgcolor = [random(255),random(255),random(255)];
// }

// <== Generate random shapes when button is pushed, move button, and move canvas ==>
var button1; // button1 generates new shape
var button2; // button2 will clear the canvas
var rectColor; // random colors when I click
var myCanvas;

function setup() {
  myCanvas = createCanvas (400,400);
  background(50); // in setup() so only drawn once

  button1 = createButton("Click Me");
  button2 = createButton("Clear");
  button1.position(0,0); // position of button
  button2.position(100,0); // position button 2 (clear)
  button1.mousePressed(randomRectangles);
  button2.mousePressed(clearCanvas);
  myCanvas.position(0,30); // move the canvas
}

function draw() {
}

// custom function
function randomRectangles(){
  rectColor = [random(255),random(255),random(255)];
  fill(rectColor);
  rect(random() * width, random() * height,
  random(width), random(height));
}

function clearCanvas() {
  background(50); //redraw background
}
