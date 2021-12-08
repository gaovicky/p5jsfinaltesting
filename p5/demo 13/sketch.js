// Oct 20, 2021

// <== TEXT ==>
// var field; //text field
//
// function setup() {
//   createCanvas (400,400);
//   field = createInput("Write Something");
// }
//
// function draw() {
//   background(50);
//   fill(255); //white
//   textSize(40);
//   text(field.value(), 10, 40, width-20, height-20);
// }

// <== Add a button/ interactivity ==>
var field; //text field
var button;

function setup() {
  createCanvas (400,400);
  button = createInput("Are you happy?");
  field = createInput("Write Something");
  button.mousePressed(checkText); //when button is pressed check the text
}

function draw() {
  background(50);
  fill(255); //white
  textSize(40);
  text(field.value(), 10, 40, width-20, height-20);
}

function checkText() {
  //check the text -> respond accordingly
  let currentText = field.value(); // text in field

  createP(currentText); //response is stored

  if (currentText == "Yes" || currentText == "yes") { // \\ is for comparison, it means "or"
    createP("Hooray!");
  } else if (currentText == "No"){
    createP("Sad to hear this. Please tell me more.")
  } else {
    createP("Interesting. Please tell me more.")
  }
}
