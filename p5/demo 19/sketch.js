// Nov 10, 2021
// //<---Blend Mode--->
// function setup() {
//   createCanvas(400, 400);
// }
//
// function draw() {
//   clear(); //only used in certain cases, get a scence of math
//   blendMode(ADD); //BLEND is the default setting || https://p5js.org/reference/#/p5/blendMode
//   background(0); // black
//   noStroke();
//   // // r g b a
//   // // alpha - transparency
//   // fill(0, 255, 0, 255); // green
//   // ellipse(width/2-50, height/2, 200, 200);
//   // fill(0, 0, 255, 100); // blue
//   // ellipse(width/2+50, height/2, 200, 200);
//   fill(255, 0, 0); // red
//   ellipse(width/2-50, height/2, 200, 200);
//   fill(0, 255, 0); // green
//   ellipse(width/2+50, height/2, 200, 200);
//   fill(0, 0, 255);
//   ellipse(width/2, height/2-100, 200, 200);
//   // red 255 0 0
//   // +
//   // green 0 255 0
//   // = yellow 255 255 0
//
// }

// //<---Difference, Multiply--->
// function setup() {
//   createCanvas(400, 400);
// }
//
// function draw() {
//   clear();
//   blendMode(DIFFERENCE);
//   background(255, 0, 0); // red bg
//   noStroke(); // no outline
//   // fill(255, 0, 0); // red
//   // /// bg red - shape red
//   // /// red - red = black
//   // ///   255 0 0 (red)
//   // /// - 255 0 0 (red)
//   // /// = 0 0 0 (black)
//   fill(255,255,0); // yellow
//   /// bg red - shape yelow
//   /// red - yellow = green
//   ///   255 255 0 (yellow)
//   /// - 255 0 0 (red)
//   /// = 0 255 0 (green)
//   ellipse(width/2, height/2, 200, 200);
// }

// //<---circles bouncing with blend mode--->
// class Circle {
//   constructor(x, y, size, xSpeed, ySpeed, colorVal){
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.xSpeed = xSpeed; //moving 1 pixel per frame
//     this.ySpeed = ySpeed;
//     this.colorVal = colorVal;
//   }
//   move() {
//     // x position
//     // x pos + xSpeed (1 [right] or -1 [left])
//     this.x += this.xSpeed;
//     // if past edge of canvas on x pos
//     if (this.x > width || this.x < 0){
//       // 1 * -1 = -1... -1 * -1 = 1
//       this.xSpeed *= -1;
//     }
//     //y position
//     this.y += this.ySpeed;
//     if(this.y > height || this.y < 0){
//       // 1 * -1 = -1... -1 * -1 = 1
//       this.ySpeed *= -1;
//     }
//   } // end move()
//   display() {
//     strokeWeight(5);
//     fill(this.colorVal);
//     // fill(random(255), random(255), random(255));
//     ellipse(this.x, this.y, this.size);
//   }
// }
//
// var circleList = []; //empty array for objects
// var colorList = [
//   [255,255,0], //yellow
//   [0,0,255] //blue
// ]
//
// function setup() {
//   createCanvas(500,500);
//   for (i = 0; i < 12; i++){
//     let randomColorPos = int(random(colorList.length));
//
//     circleList[i] = new Circle(random(width), //starting x pos
//       random(height), //starting y pos
//       random(200), // size
//       random(4), //xSpeed
//       random(3), // ySpeed
//       colorList[randomColorPos]); // color
//     // print(circleList.length);
//   }
// }
// function draw() {
//   clear();
//   blendMode(DIFFERENCE);
//   background(0);
//   for (i = 0; i < circleList.length; i++){
//     circleList[i].move();
//     circleList[i].display();
//   }
// }

//<---circles bouncing with blend mode ADD CAMERA--->
class Circle {
  constructor(x, y, size, xSpeed, ySpeed, colorVal){
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = xSpeed; //moving 1 pixel per frame
    this.ySpeed = ySpeed;
    this.colorVal = colorVal;
  }
  move() {
    // x position
    // x pos + xSpeed (1 [right] or -1 [left])
    this.x += this.xSpeed;
    // if past edge of canvas on x pos
    if (this.x > width || this.x < 0){
      // 1 * -1 = -1... -1 * -1 = 1
      this.xSpeed *= -1;
    }
    //y position
    this.y += this.ySpeed;
    if(this.y > height || this.y < 0){
      // 1 * -1 = -1... -1 * -1 = 1
      this.ySpeed *= -1;
    }
  } // end move()
  display() {
    strokeWeight(5);
    fill(this.colorVal);
    // fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.size);
  }
}

var circleList = []; //empty array for objects
var colorList = [
  [255,255,0,100], //yellow
  [0,0,255,100] //blue
];
let capture;

function setup() {
  createCanvas(500,500);
  capture = createCapture(VIDEO);
  capture.hide();
  for (i = 0; i < 12; i++){
    let c = [255, 255, 0];
    let randomColorPos = int(random(colorList.length));
    circleList[i] = new Circle(random(width), //starting x pos
      random(height), //starting y pos
      random(200), // size
      random(4), //xSpeed
      random(3), // ySpeed
      colorList[randomColorPos]); // color
    // print(circleList.length);
  }
}
function draw() {
  // clear();
  blendMode(DIFFERENCE);
  background(0);
  image(capture, 0, 0, width, width * capture.height / capture.width); // 0,0 is position
  for (i = 0; i < circleList.length; i++){
    circleList[i].move();
    circleList[i].display();
  }
}

function mousePressed() {
  clear();

  var colorList = [
    [random(255),random(255),0,255], //yellow
    [0,0,random(255),255] //blue
  ];

  for (i = 0; i < 12; i++){
    let c = [255, 255, 0];
    let randomColorPos = int(random(colorList.length));
    circleList[i] = new Circle(random(width), //starting x pos
      random(height), //starting y pos
      random(200), // size
      random(4), //xSpeed
      random(3), // ySpeed
      colorList[randomColorPos]); // color
    // print(circleList.length);
  }
}
