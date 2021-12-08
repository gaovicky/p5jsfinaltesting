//Oct 18, 2021
// var myFont;
//
// function preload(){
//   myFont = loadFont ("Fanwood.otf"); //.otf is in the same folder
// }
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(50);
//   textSize(80);
//   textAlign(CENTER, CENTER); //(__, vertical alignment) top, bottom, center, baseline
//   // stroke(255, 0, 0);
//   // strokeWeight(10);
//   noStroke();
//   fill(0,255,0); // green
//   ellipse(width/2, height/2, 10, 10);
//   fill(245, 203, 92);  //yellow
//   rectMode(CENTER); // other option: CORNER, CENTER
//   textLeading(50);
//   textFont('myFont'); // web safe fonts: https://www.w3schools.com/cssref/css_websafe_fonts.asp
//   // text - ('text you want to write',
//   //         x position, y position,
//   //         width of imaginary box, height of said box)
//   // text("hello everyone it's the hamster dance", width/2, height/2, 600, 100);
//   text("hello everyone it's the hamster dance", width/2, height/2, 500);
// }

// <--- STRING: store a sequence of letters --->
// var myFont;
// var myString = "cat dog"; // string = data type
//
// function preload(){
//   myFont = loadFont ("Fanwood.otf"); //.otf is in the same folder
// }
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(50);
//   textSize(80);
//   textAlign(CENTER, CENTER); //(__, vertical alignment) top, bottom, center, baseline
//   // stroke(255, 0, 0);
//   // strokeWeight(10);
//   noStroke();
//   fill(0,255,0); // green
//   ellipse(width/2, height/2, 10, 10);
//   fill(245, 203, 92);  //yellow
//   rectMode(CENTER); // other option: CORNER, CENTER
//   textLeading(50);
//   textFont('myFont'); // web safe fonts: https://www.w3schools.com/cssref/css_websafe_fonts.asp
//   // text - ('text you want to write',
//   //         x position, y position,
//   //         width of imaginary box, height of said box)
//   // text("hello everyone it's the hamster dance", width/2, height/2, 600, 100);
//   text(myString, width/2, height/2, 500);
//   // print(myString.length); //see the length of the string including the space
//   print(myString.substring(0,3)); //technically stopping at twos
// }

// <--- sketch show u a portion of the string at a time --->
// var myFont;
// var myString = "cat dog! fish"; // string = data type
// var counter = 0;
//
// function preload(){
//   myFont = loadFont ("Fanwood.otf"); //.otf is in the same folder
// }
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(50);
//   frameRate(1);
//
//   textSize(80);
//   textAlign(CENTER, CENTER); //(__, vertical alignment) top, bottom, center, baseline
//   noStroke();
//   fill(0,255,0); // green
//   ellipse(width/2, height/2, 10, 10);
//   fill(245, 203, 92);  //yellow
//   rectMode(CENTER); // other option: CORNER, CENTER
//   textLeading(50);
//   textFont('myFont'); // web safe fonts: https://www.w3schools.com/cssref/css_websafe_fonts.asp
//   // text - ('text you want to write',
//   //         x position, y position,
//   //         width of imaginary box, height of said box)
//   // text("hello everyone it's the hamster dance", width/2, height/2, 600, 100);
//   text(myString.substring(counter, counter+1), width/2, height/2, 500);
//
//   counter ++; // every time canvas is drawn, increase counter
//
//   if (counter > myString.length) {
//     counter = 0;
//   }
// }

// <--- type and have text appear -- keyTyped()--->
// var myFont;
// var contents = ""; // this is string for storing text
//
// function preload(){
//   myFont = loadFont ("Fanwood.otf"); //.otf is in the same folder
// }
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw() {
//   background(50);
//
//   textSize(50);
//   // textAlign(CENTER, CENTER); //(__, vertical alignment) top, bottom, center, baseline
//   noStroke();
//   fill(245, 203, 92);  //yellow
//   textFont('Arial'); // web safe fonts: https://www.w3schools.com/cssref/css_websafe_fonts.asp
//   // text - ('text you want to write',
//   //         x position, y position,
//   //         width of imaginary box, height of said box)
//   text(contents, 50, 50);
// }
//
// function keyTyped(){
//   if (key === 'Enter') {
//     contents += '\n'; // \n = line break
//   } else {
//     contents += key;
//   }
//   print(contents.length);
// }
//
// function keyReleased() {
//   if (keyCode == BACKSPACE){
//     contents = contents.substring(0, contents.length-1); //contents will equal itself minus 1
//   }
//   print(contents.length);
// }

//<--- Another way with working with text (scattered text, random red)--->
// var newString = "Life is short and art long";
// var words = newString.split(" "); // split the string where there is a space
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw () {
//   background(50);
//   noLoop();
//   textSize(50);
//   noStroke();
//   fill(245, 203, 92);
//   textFont('Arial');
//
//   for (let i=0; i < words.length; i++){
//     fill(random(255),0,0);
//     text(words[i], random(width), random(height));
//     // text(words[0], random(width), random(height)); //just shows the first word
//   }
// }

// <---REAL TEXT MOUSE (map function (best to scale one range of number to another))--->
// var newString = "Life is short and art long";
// var words = newString.split(" "); // split the string where there is a space
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw () {
//   background(50);
//   textSize(50);
//   noStroke();
//   fill(245, 203, 92); // yellow
//   textFont('Arial');
//   textAlign(CENTER);
//
//   // scales values from the mouse ---> width of canvas to length of string
//   let scaleText = map(mouseX, 0, width, 0, newString.length);
//
//   // print(scaleText);
//   // print(mouseX);
//
//   text(newString.substring(0, scaleText), width/2, height/2);
// }

// <---Working with quotations--->
// // var newString = "Cat's Cradle";
// var newString = "The president's dog said \"yeah yeah yeah\"";
// var words = newString.split(" "); // split the string where there is a space
//
// function setup() {
//   createCanvas(800,800);
// }
//
// function draw () {
//   background(50);
//   textSize(50);
//   noStroke();
//   fill(245, 203, 92); // yellow
//   textFont('Arial');
//   textAlign(CENTER);
//
//   // scales values from the mouse ---> width of canvas to length of string
//   let scaleText = map(mouseX, 0, width, 0, newString.length);
//
//   // print(scaleText);
//   // print(mouseX);
//
//   text(newString, width/2, height/2);
// }

// <---Including .txt---> (save .txt from Brightspace)
var raven; //variable for assigning to text
var size = 25;

function preload() {
  raven = loadStrings('Raven_EdgarAllenPoe_excerpt.txt')
}

function setup() {
  createCanvas(800,800);
}

function draw () {
  background(50);
  noLoop();
  textSize(size);
  noStroke();
  // fill(245, 203, 92); // yellow
  for (let i = 0; i < raven.length; i++){
    // fill(50+(i*20));
    fill(255);
    text(raven[i], 50, 50+i*50);
  }
  print(raven);
}

function mousePressed() {
  shuffle(raven, true); //randomize the order of elements in an array
}
