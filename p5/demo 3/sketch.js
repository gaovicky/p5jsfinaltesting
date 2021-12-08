//sep 20,2021

// function setup() {
//   createCanvas(400,400);
//   background(255,255,0);
// }
//
// function draw() {
//   // background(255,255,0);
//
//   //--nesting--
//   // rectMode(CENTER);
//   //
//   // if (mouseY > height/2){
//   //   fill (255);
//   //   ellipse(width/2, height/2, 50, 50);
//   //
//   //   //nest one if statement into another
//   //   if (mouseX > width/2) {
//   //     fill(0,0,255);
//   //     rect(width/2, height/2, 20, 20);
//   //   }
//   // }
//
//   //--drawing brush--move the background to the setup
//   noStroke();
//   // fill(0);
//   // print(keyCode);
// }
//
// function mouseDragged() {
//   ellipse(mouseX, mouseY, 10, 10);
//   //81 = q 87 = w
//   // print(keyCode); //value for each key can be found in the console
//   if (keyCode === 81) { //q
//     print("test!");
//     fill(0); //black
//   } else if (keyCode === 87) { //w
//     fill(random(255),random(255), random(255));
//   } else {
//     fill(255); //white
//   }
// }
//
// //--ink clears whenever mouse is pressed
// // function mousePressed() {
// //   background(255,255,0);
// // }
//
// //--ink clears whenever any key is pressed
// function keyPressed() {
//   if (keyCode === 13) {
//     background(255,255,0);
//   }
// }

//---------------------------
// var lightSwitch = false;
//
// function setup() {
//   createCanvas(400,400);
// }
//
// function draw() {
//   background (255,0,0);
//
//   if (lightSwitch === true) {
//     // lightSwitch = true; // on
//     // print(lightSwitch);
//     fill(255,255,0); // yellow
//     ellipse(width/2, height/2, 100, 100);
//   } else {
//     // lightSwitch = false; //off
//     background(0);
//     fill(0);
//     // print(lightSwitch);
//   }
//
//   // if(mouseIsPressed === true) {
//   //   background(255,0,0);
//   // } else {
//   //   background(255,255,0);
//   // }
// }
//
// function mousePressed() {
//   // when you first push mouse, change the state to the opposite
//   // if (lightSwitch === true) {
//   //   lightSwitch = false;
//   //   print(lightSwitch);
//   // } else {
//   //   lightSwitch = true;
//   //   print(lightSwitch);
//   // }
//   lightSwitch = !lightSwitch; //logical operator
// }

// ----------------------
// function setup() {
//   createCanvas(400,400);
// }
//
// function draw() {
//   background (255,0,0);
//   noLoop();
//   ellipse(mouseX, mouseY, 50, 50);
// }
//
// // function mousePressed() {
// //   noLoop();
// // }
// //
// // function mouseReleased() {
// //   loop();
// // }

// ----------------------
// var size = 50;
//
// function setup() {
//   createCanvas(400,400);
// }
//
// function draw() {
//   background (255,0,0);

//   // ellipse(100 + (size * 0), height/2, size, size);
//   // ellipse(100 + (size * 1), height/2, size, size);
//   // ellipse(100 + (size * 2), height/2, size, size);
//   // ellipse(100 + (size * 3), height/2, size, size);
// // ^^^for loops has less code than the four ellipse above^^
//   for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 20; j++) {
//       ellipse(10 + (size * i), //x position
//       (height/2 - 100) + (size * j), //y position
//       size/3, size/3);
//     } // j for loop
//   } // i for loop
//
// }

// ----------------------
var size = 50;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background (255,0,0);

  strokeWeight(2);

  // //// line (x1, y1, x2, y2)
  // line(20,40,80,80);
  // line(80,40,140,80);
  // line(140,40,200,80);
  // line(200,40,260,80);

  for (let i = 20; i < 400; i +=20){
    line(i, 0, i + 1/2, 80);
    line(i + i/2, 80, i * 1/2, 120);
    // print(i);
  }
  // noLoop();
}
