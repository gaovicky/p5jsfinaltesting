var ding;
var button; // button will "bake" a cupcake
var pos = 0; // starting position
var frosting = [
  [255, 155, 220], //strawberry
  [130, 144, 255], //blueberry
  [73, 39, 25], // chocolate
  [247, 241, 226], //vanilla
  [255, 230, 156] //banana
]; // frosting color
var cakeColor = [
  [70, 44, 33], // chocolate
  [242, 222, 198], // vanilla
  [255, 253, 182], //lemon
  [254, 191, 149], //carrot
  [243, 99, 99] //red velvet
]; // cake color
var cupcakeName = [
  "Strawberry Chocolate",
  "Blueberry Vanilla",
  "Chocolate Lemon",
  "Vanilla Carrot",
  "Banana Red Velvet"
];
var bakeryText = {
  message: "Sweet Delights",
  display: function(x,y) {
    fill(255, 162, 162); //pink
    textSize(70);
    textStyle(BOLD);
    text(this.message, x, y);
  }
}
var oven = {
  w: 400,
  h: 460,
  display: function() {
    translate(300,340);
    stroke(151, 121, 204); // purple
    strokeWeight(3);
    rectMode(CENTER);
    fill(162, 108, 255); // dark purple
    rect(-120, 245, 30, 40, 3); // left leg
    rect(120, 245, 30, 40, 3); // right leg
    fill(188, 163, 251); // light purple
    rect(0, 0, this.w, this.h, 20); // large rectangle has a radius of 20
    fill(200, 184, 228); // dusty light purple
    rect(0, 50, 270, 190); // oven window
    fill(162, 108, 255); // dark purple
    rect(0, -50, 290, 20); // oven door handle
    ellipse(-130,-180, 30, 30); // first knob
    ellipse(-80,-180, 30, 30); // second knob
    ellipse(80,-180, 30, 30); //  third knob
    ellipse(130,-180, 30, 30); // last knob
    line(-200, -90, 200, -90); // top line
    line(-200, 175, 200, 175); // bottom line
  }
} //inspo: https://image.shutterstock.com/image-vector/kawaii-cooking-kitchen-oven-icon-260nw-1789139135.jpg
var cupcake = {
  w: 80,
  h: 80,
  display: function() {
    translate(300, 410); // middle of oven window
    strokeWeight(3);
    stroke(80); //grey
    fill(frosting[pos]); // frosting color
    ellipse(0, 0, this.w, this.h);
    fill(cakeColor[pos]); // cake color
    quad(-42, 0, -28, 43, 28, 43, 42, 0);
    //trapezoid: https://p5js.org/reference/#/p5/quad
    noStroke();
    textAlign(CENTER);
    fill(80);
    textSize(26);
    text(cupcakeName[pos], 0, -55);
    // cupcake name
  }
}

function preload(){
  // load oven soundfx: https://freesound.org/people/sethlind/sounds/265012/
  ding = loadSound("ovending.wav");
}

function setup() {
  createCanvas(600,725);
  background(251, 241, 201); // pastel yellow
  textFont('Garamond'); // change the font to Garamond

  push();
  bakeryText.display(5,50); //top text
  bakeryText.display(162,708); //bottom text
  pop();

  push();
  oven.display();
  pop();

  button1 = createButton("Bake");
  button1.position(250,140); // move button between the knobs
  button1.mousePressed (function() {
    if (ding.isPlaying() == false) {
      ding.play();
      pos = round(random(0,4));
      push();
      cupcake.display();
      pop();
      button2 = createButton("Eat");
      button2.addClass('button2');  // add class on p5.js: https://editor.p5js.org/aferriss/sketches/BJnHtrpnz
      button2.position(251,185);
      button2.mousePressed(eatCupcake);
    }
  }); // when a button is pressed, a cupcake appears & the "ding!" sound plays
  ///// reference below
}

function draw() {
}

function eatCupcake() {
  push();
  oven.display();
  pop();// redraw oven
}

//===================References=======================

//<--- button.mousePressed (function() {}); Guide --->
/////https://p5js.jp/examples/hello-p5-song.html
// function setup() {
//   createCanvas(720, 400);
//   var div = createDiv("Click to play notes or ")
//   div.id("instructions");
//   var button = createButton("play song automatically.");
//   button.parent("instructions");
//   // Trigger automatically playing
//   button.mousePressed(function() {
//     if (!autoplay) {
//       index = 0;
//       autoplay = true;
//     }
//   });
//
//   // A triangle oscillator
//   osc = new p5.TriOsc();
//   // Start silent
//   osc.start();
//   osc.amp(0);
// }
