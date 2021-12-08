//Sep 27, 2021

//<---translate--->
// var size = 30;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//     background (200);
//     noFill();
//     strokeWeight(10);
//
//     // mouse face
//     push(); // pushing a setting in
//     translate(mouseX, mouseY);
//     ellipse (0, 0, size, size);
//     ellipse(100, 0, size, size);
//     arc(50, 50, 100, 50, 0, PI); //arc(x,y,width,height)
//     pop(); // where the translation stops
//
//     // center face
//     translate(width/2-50, height/2);
//     ellipse (0, 0, size, size);
//     ellipse(100, 0, size, size);
//     arc(50, 50, 100, 50, 0, PI);
// }

// //<---creating your own function (include top code)--->
// var size = 30;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//     background (200);
//     noFill();
//     strokeWeight(10);
//
//     // mouse face
//     push(); // pushing a setting in
//     translate(mouseX, mouseY);
//     makeFace();
//     pop(); // where the translation stops
//
//     // center face
//     translate(width/2-50, height/2);
//     makeFace();
// }
//
// function makeFace() {
//   ellipse (0, 0, size, size);
//   ellipse(100, 0, size, size);
//   arc(50, 50, 100, 50, 0, PI);
// }

// //<---add for loop--->
// var size = 30;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//     background (200);
//     noFill();
//     strokeWeight(10);
//
//     // center face
//     for (i=0; i< 10; i++){
//       translate(10* i, 10 * i);
//       makeFace();
//       // print(20 * i);
//     }
// }
//
// function makeFace() {
//   ellipse (0, 0, size, size);
//   ellipse(100, 0, size, size);
//   arc(50, 50, 100, 50, 0, PI);
// }

// //<---transformation hold scale--->
// var size = 30;
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//     background (200);
//     noFill();
//     strokeWeight(10);
//
//     let speed = sin(frameCount/100);
//
//     let oscillating = map(speed, -1, 1, 0.5, 2);
//     let oscillating2 = map(speed, -1, 1, 2, 0.5);
//     // print(speed);
//
//     push();
//     translate(width/2-150, height/2);
//     // scale(oscillating); //1 is original
//     scale(oscillating, oscillating2); // x and y axis
//     makeFace();
//     pop();
//
//     scale(oscillating2, random(2,10));
//     makeFace();
// }
//
// function makeFace() {
//   ellipse (0, 0, size, size);
//   ellipse(100, 0, size, size);
//   arc(50, 50, 100, 50, 0, PI);
// }

// //<---rotate--->
// var size = 30;
//
// function setup() {
//   createCanvas(900,500);
// }
//
// function draw() {
//     background (200);
//     noFill();
//     strokeWeight(10);
//
//     let speed = sin(frameCount/100); // -1,1
//     let oscillating = map(speed, -1, 1, 0.5, 2);
//     let oscillating2 = map(speed, -1, 1, 2, 0.5);
//
//     let speedMax = 500; //for speed2
//     let speed2 = frameCount%speedMax; // growing speed
//
//     let movement1 = map(speed2, 0, speedMax-1, 0, PI);
//
//     // print(speed);
//
//     push();
//     translate(width/2-150, height/2);
//     // rotate(QUARTER_PI);
//     rotate(movement1);
//     scale(oscillating);
//     makeFace();
//     pop();
//
// }
//
// function makeFace() {
//   ellipse (0, 0, size, size);
//   ellipse(100, 0, size, size);
//   arc(50, 50, 100, 50, 0, PI);
// }

//<---rotate--->
var size = 30;

function setup() {
  createCanvas(400,400);
}

function draw() {
    background (200);
    noFill();
    strokeWeight(10);

    translate(width/2, height/2);
    rectMode(CENTER);

    rotate((mouseX/width) * 2 * PI);
    // print(mouseX/width * PI);
    rect(0, 0, size, size);

}

function makeFace() {
  ellipse (0, 0, size, size);
  ellipse(100, 0, size, size);
  arc(50, 50, 100, 50, 0, PI);
}
