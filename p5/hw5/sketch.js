var clickCount = 0; // counter starts at 0
var soundFx;
var yellowSun = {
  size: 500,
  display: function(){
    translate(windowWidth/2, windowHeight-100);
    fill(249, 214, 73); // yellow
    ellipse(0, 0, this.size, this.size);
  }
} // sun properties
var cloud = {
  x: 100,
  y: 100,
  w: 75,
  h: 55
}; //cloud properties
var movingText = {
  x:25,
  y:150,
  message: "GOOD MORNING",
  message1: "right arrow = grow",
  message2: "left arrow = shrink",
  message3: "B = birds",
  display: function() {
    fill(214, 63, 63);
    textSize(30);
    textStyle(BOLDITALIC); //make the text bold and italic
    text(this.message1, this.x, this.y);
    text(this.message2, this.x, this.y + 50);
    text(this.message3, this.x, this.y + 100);
    textSize (40);
    textStyle(BOLD); //make the text bold
    text(this.message, this.x, this.y - 50);
    this.x += .5; //moving the text slowly
    if (movingText.x > (windowWidth-450)){
      movingText.x = 25; // move text back to the left when it reaches the end of the screen
    }
  }
}; //text properties

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Georgia'); //change the font to Georgia
  soundFx = loadSound("birds.wav"); // load sound ("bird song.wav" by evey1985 on freesound.org)
}

function draw() {
  background(173, 232, 244); //sky blue
  noStroke();

  //sun
  push();
  yellowSun.display();
  pop();

  //text
  push();
  movingText.display();
  pop();

  //clouds
  push();
  translate(0, windowHeight-250);
  scale(2);
  fill(255, 254, 250); //off white
  moreClouds((clickCount % 10) + 4 ); // starts off with 4 clouds
  pop();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    clickCount ++;
    yellowSun.size += 20;
  } else if (keyCode === LEFT_ARROW) {
    clickCount --;
    yellowSun.size -= 20;
  } else if(keyCode === 66) {
    soundFx.play();
  } // "b" on keyboard
} // interactive component via keyboard (line 95)

function moreClouds(cloudCount) {
  let cloudDistance = (windowWidth- 920) / (cloudCount -1);
  for (let i = 0; i < cloudCount; i++){
    ellipse(cloud.x + (i * cloudDistance), cloud.y - 20, cloud.w, cloud.h);
    ellipse(cloud.x - 55 + (i * cloudDistance), cloud.y - 5, cloud.w, cloud.h);
    ellipse(cloud.x + 50 + (i * cloudDistance), cloud.y, cloud.w, cloud.h);
    ellipse(cloud.x + 20 + (i * cloudDistance), cloud.y + 15, cloud.w, cloud.h);
    ellipse(cloud.x - 30 + (i * cloudDistance), cloud.y + 13, cloud.w, cloud.h);
  }
} // cloud tutorial by 'Matthew Mena-Landry' on Youtube (line 111)

//-------------------------------------

// // <---p5.js tutorial--->
// black rect center. turns white when left arrow pressed and black when right.
// keyPressed example 1
// let value = 0;
// function draw() {
//   fill(value);
//   rect(25, 25, 50, 50);
// }
// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     value = 255;
//   } else if (keyCode === RIGHT_ARROW) {
//     value = 0;
//   }
// }

// // <---Tutorial by 'Matthew Mena-Landry' on Youtube, Title: p5.js Web Editor|clouds --->
// //https://www.youtube.com/watch?v=7THh5OwvRUI
// let cloudx = 100;
// let cloudy = 100;
//
// function setup() {
//   createCanvas(600,400);
// }
//
// function draw() {
//   background(155,186,189);
//   makeCloud(cloudx, cloudy);
//   makeCloud(cloudx + 100, cloudy + 100);
// }
//
// function makeCloud(cloudx, cloudy) {
//   fill(250);
//   noStroke();
//   ellipse(cloudx, cloudy, 70, 50);
//   ellipse(cloudx + 10, cloudy + 10, 70, 50);
//   ellipse(cloudx - 20, cloud + 10, 70, 50);
// }
