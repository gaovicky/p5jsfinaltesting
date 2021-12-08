//Sep 22, 2021

// var startingX = 30; //starting X position
// var size = 50;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(100,100,255);
//   //start at 0 grow by one and stop when i equals 4
//   for(let i = 4; i > 5; i++){
//     ellipse(startingX + (i * (size + 30)), height/2, size, size);
//     print(startingX + (i * size));
//   }
//
//   noLoop();
//
// }

// ---------------------

// var startingX = 30; //starting X position
// var size = 50;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(100,100,255);
//
//   for(let i = 4; i > 0; i--){
//     print(i);
//     ellipse (startingX + (i * size), height/2, size, size);
//   }
//
//   noLoop();
// }

// ---------------------------------
// <<-----nested for loop---->>
// var startingX = 0; //starting X position
// var size = 60;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(100,100,255);
//
//   for (let i = 0; i < width; i++){
//     for (let j=0; j < height; j++) {
//       ellipse (startingX + (i * size), height/8 + (j * size), size, size);
//     }
//   }
//
// }

// -------------------
// var startingX = 0; //starting X position
// var size = 60;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(100,100,255);
//
//   for (let i = 20; i < 400; i += 20){ //increase by 20 each time
//     line (i, 0, i + (i/2), 80); // top line
//     line (i + (i/2), 80, i * 1.2, 120); // bottom line --> top of this line lines up with the bottom of 'line74'
//     // print(i);
//   }
//   noLoop();
// }

// -------------------
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(100,100,255);
//   textSize(100);
//   frameRate(1); //redefine frame rate of the sketch
//   text(frameCount, width/2, height/2);
//   // print(frameCount); //shows the number of times this looped
// }

//---------------------
// var loopState = false;
//
// function setup() {
//   createCanvas(500,500);
//   // background(100,100,255);
// }
//
// function draw() {
//   background(100,100,255);
//   noStroke();
//   // ellipse(frameCount%500, height/2, 50, 50);
//   fill(frameCount%256,100,100);
//   ellipse(frameCount%500, height/2, 50, 50+(frameCount%200));
//   // print(frameCount%500); //modulo is an operator that shows the remainder of the equation it's checking
//
//   // print (3%3); //number of remainder I have for this to be divisible by 3
//   //
//   // noLoop();
// }
//
// // function mousePressed() {
// //   loop();
// // }
// //
// // function mouseReleased() {
// //   noLoop();
// // }
//
// function mousePressed() {
//   if (loopState === true) {
//     loop();
//     loopState = false;
//   } else {
//     noLoop();
//     loopState = true;
//   }
// }

// --------------------------------
// // <<---sin--->> "changes over time" in brightspace
// var size = 50;
//
// function setup() {
//   createCanvas(500,200);
//   // background(100,100,255);
// }
//
// function draw() {
//   background(100,100,255);
//   noStroke();
//   // ellipse(center of oscillation,__,__,__)
//   // divide frameCount with larger number will slow it down
//   ellipse((width/2) + (sin(frameCount/8)* (width/5)), height/2, size, size);
//
//   // print(sin(6));
// }
// ----------------------
// var size = 50;
//
// function setup() {
//   createCanvas(500,500);
//   // background(100,100,255);
// }
//
// function draw() {
//   background(100,100,255);
//   noStroke();
//   for (i=0; i < 5; i++) {
//     for (j=0; j < 6; j++) {
//       ellipse(100 + (i * size) + (sin(frameCount/(i+10))*(i*10)),
//       (j * 50) + (j*20),
//       size, size);
//     }
//   }
// }
// -----------------------
var size = 50;

function setup() {
  createCanvas(500,500);
  // background(100,100,255);
}

function draw() {
  background(100,100,255);
  noStroke();
  // frameRate(1);

  let range = 200;
  let change1 = frameCount%range;
  ///map (**name of variable we are trying to scale/map**, original range "min," original"max" )
    /// new range min, new range max
    /// min = value A; max = value B
    let change2 = map(change1, 0, 255, 255, 0);


  background(change1, change2, 0);
  print("change1", change1);
  print("change2", change2);
}
