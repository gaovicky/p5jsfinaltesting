//Oct 12, 2021 & Oct 13, 2021

// <---Video 1: Introduction to Functions with Parameters--->
// function setup() {
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   background (200, 255, 200);
//
//   /////old method
//   // push();
//   // translate(300,-250);
//   // drawBlueCircle();
//   // pop(); // end translation
//   // drawBlueCircle();
//
//   /////new method
//   drawBlueCircle(width/2, height/2, 200);
//   drawBlueCircle(width/2 + 200, height/2 - 300, 200);
// }
//
// function drawBlueCircle(circleX, circleY, circleDiameter) {
//   fill(0,0,255); // blue
//   noStroke(); // no outline
//   ellipse(width/2, height/2, 100, 100);
// }

// <---Video 2: Function w/ Parameters (pt.1)--->
// function setup() {
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   background (50);
//   stroke(255)
//   strokeWeight(8);
//   noFill();
//
//   push();
//   translate(mouseX, mouseY);
//   if (mouseIsPressed) {
//     makeThreeEyes();
//   } else {
//     makeTwoEyes();
//   }
//   makeThreeEyes();
//   pop();
// }
// ////// Two Eyeballs
// function makeTwoEyes() {
//   for ( let i = 0; i < 2; i++){ // i<2 means two eyeball
//     ellipse(-50 + (i * 100), -25, 40, 40); //first eyeball is 0*100, second eyeball is 1*100
//   }
//   arc(0, 25, 100, 50, 0, PI);
// }
//
// ////// Three Eyeballs
// function makeThreeEyes() {
//   for ( let i = 0; i < 3; i++){ // i<2 means two eyeball
//     ellipse(-50 + (i * 50), -25, 40, 40); //first eyeball is 0*100, second eyeball is 1*100
//   }
//   arc(0, 25, 100, 50, 0, PI);
// }
///////Another method
// var clickCount = 0; // counter starting at 0
//
// function setup() {
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   background (50);
//   stroke(255)
//   strokeWeight(8);
//   noFill();
//
//   push();
//   translate(mouseX, mouseY);
//   happyFace((clickCount % 4) + 2);
//   pop();
// }
//
// function mousePressed() {
//   clickCount++; // clickCount variable that represents numbers
//   print((clickCount % 4) + 2);
// }
//
// function happyFace(eyeCount) {
//   let eyeDistance = 100 / (eyeCount -1);
//   for (let i = 0; i < eyeCount; i++){
//     ellipse(-50 + (i * eyeDistance), -25, 40, 40);
//     // print(-50 + (i * eyeDistance));
//   }
//   arc(0, 25, 100, 50, 0, PI);
// }

// <---Video 3: Function w/ Parameters (pt.2)--->
// var clickCount = 0; // counter starting at 0
//
// function setup() {
//   createCanvas(windowWidth,windowHeight);
// }
//
// function draw() {
//   background (50);
//   stroke(255)
//   strokeWeight(8);
//   noFill();
//
//   push();
//   translate(mouseX, mouseY); // follows mouse
//   happyFace((clickCount % 4) + 2); // max 5 eyes
//   pop();
// }
//
// function mousePressed() {
//   clickCount++; // clickCount variable that represents numbers
//   print(getEyeSize(clickCount % 4) + 2);
// }
//
// function getEyeSize(count) {
//   // as the # of eyes increases, the size decreases
//   return 50 - (count * 5);
// }
//
// function happyFace(eyeCount) {
//   let eyeDistance = 100 / (eyeCount -1); //scales distance of eyes
//   for (let i = 0; i < eyeCount; i++){
//     ellipse(-50 + (i * eyeDistance), -25,
//     getEyeSize(eyeCount),
//     getEyeSize(eyeCount));
//   }
//   arc(0, 25, 100, 50, 0, PI);
// }

// <---Video 4: Using Arrays to Call Functions--->
// var callOrder = [drawSquare,
//   drawCircle,
//   drawTriangle,
//   drawCircle,
//   drawSquare];
//
// function setup() {
//   createCanvas(400,400);
//   noLoop();
// }
//
// function draw() {
//   background("#f9c74f"); // golden
//   stroke("#277da1"); // teal
//   strokeWeight(8);
//   noFill();
//
//   for (var i = 0; i < callOrder.length; i++){
//     push();
//     translate(100 + (i * 50), 200);
//     callOrder[i]();
//     pop();
//   }
//   ////// old method
//   // for(var i = 0; i < 5; i++){
//   //   push();
//   //   translate(100 + (i * 50), 200);
//   //   if(i == 0 || i == 4) {
//   //     drawSquare();
//   //   } else if (i == 1 || i == 3) {
//   //     drawCircle();
//   //   } else if (i == 2){
//   //     drawTriangle();
//   //   }
//   //   pop();
//   // }
// }
//
// function drawSquare() {
//   rectMode(CENTER);
//   rect(0, 0, 40, 40);
// }
// function drawCircle() {
//   ellipse(0, 0, 40, 40);
// }
// function drawTriangle() {
//   triangle(0, -20, 20, 20, -20, 20);
// }

// <---Video 5: Randomly drawing shapes to screen--->
// function setup() {
//   createCanvas(400,400);
//   background("#f9c74f"); // golden
// }
//
// function draw() {
//     strokeWeight(8);
//     noFill();
//
//     randomlyDrawing([
//       drawSquare, drawTriangle, drawCircle
//     ]);
//   }
//
// function drawSquare() {
//   rectMode(CENTER);
//   rect(0, 0, 40, 40);
// }
// function drawCircle() {
//   ellipse(0, 0, 40, 40);
// }
// function drawTriangle() {
//   triangle(0, -20, 20, 20, -20, 20);
// }
//
// function randomlyDrawing(funcs) {
//   /// take a list of possible things to drawing
//   /// randomly choose one from the list
//
//   // generate random #, max is length of list of Functions
//   // floor -> rounds to nearest int (whole #)
//   let choice = floor(random(0, funcs.length));
//   push();
//   stroke(random(255));
//   translate(random(width), random(height));
//   scale(random(5));
//   rotate(random(PI * 2));
//   funcs[choice]();
//   pop();
// }

// <---Video 6: Functions Inside of Objects--->
// var bubble = {
//   x: 200,
//   y: 150,
//   display: function(){ //name function
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(this.x, this.y, 20, 20);
//   },
//   move: function(){
//     this.x = this.x + random(-1,1);
//     this.y = this.y + random(-1,1);
//   }
// }
//
// function setup() {
//   createCanvas(600,400);
// }
//
// function draw() {
//   background(0);
//   bubble.move();
//   bubble.display();
// }
//
// //////old method
// // function move() {
// //   bubble.x = bubble.x + random(-1,1);
// //   bubble.y = bubble.y + random(-1,1);
// // }
// // function display() {
// //   stroke(255);
// //   strokeWeight(4);
// //   noFill();
// //   ellipse(bubble.x, bubble.y, 24, 24);
// // }

//<---Video 7: Functions with Parameters and Objects and Methods--->
var shapes = []; // an array for storing rectangle properties

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,255,150);
  rectMode(CENTER);
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].display();
    shapes[i].update();
    // print(shapes[i].ypos); //uncomment to see ypos printed to console
  }

  /// removes items in our array
  // if the value for the yposition is greater than the height of the canvas,
  // remove that value from the array
  for (let i = shapes.length - 1; i >= 0; i--) {
    if (shapes[i].ypos > height) {
        shapes.splice(i, 1);
    }
  }

}

function mousePressed() {
  // when mouse is Pressed, randomnly push one of the following objects into the array 'shapes'

  let newRect = {
    xpos: mouseX,
    ypos: mouseY,
    fillColor: random(255),
    display: function() {
      fill(this.fillColor); //color
      rect(this.xpos, this.ypos, 50, 25); //rectangle
    },
    update: function() {
      this.ypos += 1;
    }
  } // end newRect
  let newCircle = {
    size: floor(random(50)), //use integers
    xpos: mouseX,
    ypos: mouseY,
    fillColor: random(255),
    display: function() {
      fill(this.fillColor); //fill
      ellipse(this.xpos, this.ypos, this.size, this.size); // circle
    }, // display
    update: function() {
      this.ypos += 1;
    }
  } //end newCircle

  let shapeOptions = [newRect, newCircle];
  let randomShape = floor(random(2)); // random # 0 or 1

  shapes.push(shapeOptions[randomShape]);
  // shapes.push(newRect);
}
