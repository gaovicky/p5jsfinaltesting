// Oct 20, 2021

// // <==GUI: SLIDER ==>
// /////// move ellipse when slider moves
// var slider1; // position of ellipse
// var slider2; // size of ellipse
//
// function setup() {
//   createCanvas (400,400);
//   // slider = createSlider(0, 100, 20); //(min, max, where the slider begins)
//   slider1 = createSlider(0, width, width/2);
//   slider2 = createSlider(10, 200); // size (min, max)
// }
//
// function draw() {
//   background(0);
//   ellipse(slider1.value(), height/2, slider2.value(), slider2.value());
//
//   // let valSlider = slider1.value();
//   // print(valSlider); //slider is in the middle by default
// }

// <== change background color, diff way to resize ellipse ==>
var slider1; // position of ellipse
var slider2; // size of ellipse
var bgcolor;
var size;
var sizeMin = 10; //min ellipse size
var sizeMax = 200; //max ellipse size


function setup() {
  createCanvas (400,400);
  bgcolor = 255/2; // middle gray
  slider1 = createSlider(0, width, width/2);
  slider2 = createSlider(sizeMin, sizeMax); // size (min, max)
}

function draw() {
  background(bgcolor);
  bgcolor = map(slider1.value(), 0, width, 0, 255);
  ellipse(slider1.value(), height/2, slider2.value(), slider2.value());
}
