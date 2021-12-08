//Oct 6, 2021

// <---Object Name--->
// var x = 0;
// var y = 200;
// var size = 50;

//declared 3 property for one object
var circle1 = {
  x: 0,
  y: 200,
  size: 50
};

function setup() {
    createCanvas(500,500);
}

function draw() {
  background (255, 200, 200);
  ellipse(circle1.x, circle1.y, circle1.size, circle1.size);
  circle1.x += 1; // x = x+1

  if (circle1.x>width){
    circle1.x = 0;
  }
}

// //<---Data Visualization--->
// //https://drive.google.com/file/d/1ur1l3iKhn_xRK8fuIpCXB3K_2yixDjU-/view
//
// var dv; //deathvalley
// var size = 3;
// var canvasWidth = size * 365;
// var maxRange = 130; //130 is the highest temp of 2011
//
// function preload() {
//   dv = loadTable('deathvalley_20112021.csv',
// 'csv', 'header');
// }
//
// function setup() {
//   createCanvas(canvasWidth,500);
// }
//
// function draw() {
//   background(0);
//   noStroke();
//   fill(255, 255, 0);
//   textSize(50);
//   text("0", 5, height); // min (bottom)
//   text(maxRange/2, 5, height/2); // middle
//   text(maxRange, 5, 50); // max (top)
//
//   for (var i = 0; i < 365; i++){
//
//     /////// minimum temperatures in 2011
//     fill(255); //red
//     let minTempY = map(dv.getNum(i, "TMIN"), 0, maxRange, height, 0);
//     ellipse((i*size)%canvasWidth,
//       minTempY,
//       size, size
//     );
//
//     /////// maximum temperatures in 2011
//     fill(255,0,0); //white
//     let maxTempY = map(dv.getNum(i, "TMAX"), 0, maxRange, height, 0);
//     ellipse((i*size)%canvasWidth,
//       maxTempY,
//       size, size
//     );
//
//   }
//   print(dv.getNum(0, "TMIN")); //double check the values
//
// }
