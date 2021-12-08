// Oct 25, 2021

// // <---Working with header 1--->
// var header1; // declaring - it's a thing
// var randomBG; // for random background
//
// function setup() {
//   createCanvas(200,200);
//   //assign a random number for bg when sketch's first loaded
//   randomBG = [random(255),random(255),random(255)];
//   background(255,0,0);
//   header1 = createElement('h1', "My interactive sketch");
//   header1.style("color", "blue");
//   // header1.style("background-color", "rgb(255,255,0)"); //random color when you refresh
//
//   header1.style("background-color", "rgb(" + randomBG + ")");
//   // let header2 = createElement('h2', 'By Jane Doe');
//   // print(randomBG);
// }
//
// function draw() {
//   // put drawing code here
// }
//
// function mousePressed() {
//   randomBG = [random(255), random(255), random(255)];
//   header1.style("background-color", "rgb(" + randomBG + ")");
// }

// //<---check cookKids_index.html--->
// function setup() {
//   createCanvas(200,200);
// }
//
// function draw() {
//   background(255,0,0);
// }

// //<---Sad Robot (check robotExtended_index.html)--->
// var field; //text field
// var button;
//
// function setup() {
//   createCanvas (400,400);
//   button = createButton("Are you happy?");
//   field = createInput("");
//   button.mousePressed(checkText); //when button is pressed check the text
// }
//
// function draw() {
//   background(50);
//   fill(255); //white
//   textSize(40);
//   text(field.value(), 10, 40, width-20, height-20);
// }
//
// function checkText() {
//   //check the text -> respond accordingly
//   let currentText = "Human: " + field.value(); // text in field
//
//   let human = createP(currentText); //response is stored
//   human.class('human');
//   let robot;
//
//   if (currentText == "Human: Yes" || currentText == "Human: yes") { // \\ is for comparison, it means "or"
//     robot=createP("Robot: Hooray!");
//   } else if (currentText == "No"){
//     robot=createP("Robot: Sad to hear this. Please tell me more.")
//   } else {
//     robot=createP("Robot: Interesting. Please tell me more.")
//   }
//   robot.class('robot');
// }

// // <---hiding and showing---> https://p5js.org/reference/#/p5.Element
// // https://github.com/processing/p5.js/wiki/Beyond-the-canvas
// var text;
//
// function setup() {
//   let canvas = createCanvas(400,200); //needed to move canvas
//   text = createP('Hover over canvas to hide text');
//   canvas.position(300,50); //move canvas
//   canvas.mouseOver(textHide); //when our mouse is over the canvas, it disappears
//                               //-> gone forever if you didn't build something for when it appears
//   canvas.mouseOut(textShow);
// }
//
// function draw() {
//   background(50);
// }
//
// function textHide() {
//   text.hide();
// }
//
// function textShow() {
//   text.show();
// }
