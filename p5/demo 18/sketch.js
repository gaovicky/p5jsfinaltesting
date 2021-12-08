//Nov 8, 2021

// //<---Building class that draws circles--->
// //Class -> Template for objects
// class Circle {
//   constructor(x, y, xSpeed){
//     this.x = x;
//     this.y = y;
//     this.xSpeed = 1; //moving 1 pixel per frame
//   } //constructor (looks like function), put parameters in the ()
//   move() {
//     this.x += this.xSpeed;
//     /// x += 1;
//     if(this.x > width){
//       this.x = 0;
//     }
//   }//add this class function, like a method
// } //properties about Circle
// var ellipse1, ellipse2; //first instance of class Circle
//
// function setup() {
//   createCanvas(500,500);
//   ellipse1 = new Circle(200, 400);
//   ellipse2 = new Circle(300, 400);
// }
//
// function draw() {
//   background(255,0,0);
//   ellipse(ellipse1.x, ellipse1.y, 70);
//   ellipse1.move();
//   ellipse(ellipse2.x, ellipse2.y, 50);
//   ellipse2.move();
// }

// //<---Conditionals--->
/////Circles bouncing back and forth
// class Circle {
//   constructor(x, y, xSpeed, ySpeed){
//     this.x = x;
//     this.y = y;
//     this.xSpeed = 1; //moving 1 pixel per frame
//     this.ySpeed = 1;
//   }
//   move() {
//     // x position
//     // x pos + xSpeed (1 [right] or -1 [left])
//     this.x += this.xSpeed;
//     // if past edge of canvas on x pos
//     if(this.x > width || this.x < 0){
//       // 1 * -1 = -1... -1 * -1 = 1
//       this.xSpeed *= -1;
//     }
//     //y position
//     this.y += this.ySpeed;
//     if(this.y > height || this.y < 0){
//       // 1 * -1 = -1... -1 * -1 = 1
//       this.ySpeed *= -1;
//     }
//   }
// }
// var ellipse1, ellipse2; //first instance of class Circle
//
// function setup() {
//   createCanvas(500,500);
//   ellipse1 = new Circle(200, 400);
//   ellipse2 = new Circle(300, 400);
// }
//
// function draw() {
//   background(255,0,0);
//   ellipse(ellipse1.x, ellipse1.y, 70);
//   ellipse1.move();
//   ellipse(ellipse2.x, ellipse2.y, 50);
//   ellipse2.move();
//   print(ellipse1.xSpeed);
// }

// // <---Another way to work with size--->
// ///Circles bouncing back and forth
// class Circle {
//   constructor(x, y, size, xSpeed, ySpeed){
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.xSpeed = 1; //moving 1 pixel per frame
//     this.ySpeed = 1;
//   }
//   move() {
//     // x position
//     // x pos + xSpeed (1 [right] or -1 [left])
//     this.x += this.xSpeed;
//     // if past edge of canvas on x pos
//     if(this.x > width || this.x < 0){
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
//     ellipse(this.x, this.y, this.size);
//   }
// }
// var ellipse1, ellipse2; //first instance of class Circle
//
// function setup() {
//   createCanvas(500,500);
//   ellipse1 = new Circle(200, 400, 70);
//   ellipse2 = new Circle(300, 400, 50);
// }
//
// function draw() {
//   background(255,0,0);
//   ellipse1.display();
//   ellipse1.move();
//   ellipse2.display();
//   ellipse2.move();
// }

// //<---Using For Loops--->
// ///// Have the circles moving around random sizes
// class Circle {
//   constructor(x, y, size, xSpeed, ySpeed){
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.xSpeed = 1; //moving 1 pixel per frame
//     this.ySpeed = 1;
//   }
//   move() {
//     // x position
//     // x pos + xSpeed (1 [right] or -1 [left])
//     this.x += this.xSpeed;
//     // if past edge of canvas on x pos
//     if(this.x > width || this.x < 0){
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
//     ellipse(this.x, this.y, this.size);
//   }
// }
//
// var circleList = []; //empty array for objects
//
// function setup() {
//   createCanvas(500,500);
//   for (i = 0; i < 12; i++){
//     circleList[i] = new Circle(random(width), random(height), random(200));
//     // print(circleList.length);
//   }
// }
//
// function draw() {
//   background(255,0,0);
//   for (i = 0; i < circleList.length; i++){
//     circleList[i].move();
//     circleList[i].display();
//   }
// }

//<---Using For Loops--->
///// Add random Colors
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
var randomColor = []; //for storing list of random colors

function setup() {
  createCanvas(500,500);
  for (i = 0; i < 12; i++){
    let c = [255, 255, 0];
    randomColor[i] = [random(255), random(255), random(255)];
    circleList[i] = new Circle(random(width), //starting x pos
      random(height), //starting y pos
      random(200), // size
      random(4), //xSpeed
      random(3), // ySpeed
      randomColor[i]); // color
    // print(circleList.length);
  }
}
function draw() {
  background(255,0,0);
  for (i = 0; i < circleList.length; i++){
    circleList[i].move();
    circleList[i].display();
  }
}
