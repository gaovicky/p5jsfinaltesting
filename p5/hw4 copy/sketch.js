//Source: https://www.pastemagazine.com/tv/netflix/avatar-the-last-airbender-quotes/ & https://www.cbr.com/avatar-last-airbender-inspiring-quotes/
//first item start off counting with 0
var pos = 0; //starting position
var quotes = [
  "Life happens wherever you are, whether you make it or not.",
  "In the darkest of times, hope is something you give yourself.",
  "Sometimes life is like a dark tunnel. You can’t always see the light at the end of the tunnel. But if you just keep moving you will come to a better place.",
  "When we hit out lowest point we are open to change.",
  "The greatest illusion of this world is the illusion of separation. Things you think are separate and different are actually one and the same. We are all one people, but we live as if divided.",
  "It’s easy to do nothing, it’s hard to forgive.",
  "Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place.",
  "There's no different angle, no clever solution, no trickety trick that's gonna move that rock. You gotta face it head-on.",
  "I know sometimes it hurts more to hope and it hurts more to care. But you have to promise me that you won’t stop caring.",
  "Failure is only the opportunity to try again, only more wisely this time.",
];
//who said the quote
var Nm = [
  "-Uncle Iroh",
  "-Zuko",
  "-Uncle Iroh",
  "-Aang",
  "-Guru Pathik",
  "-Aang",
  "-Uncle Iroh",
  "-Toph",
  "-Katara",
  "-Uncle Iroh"
];
//background color
var bg = [
  [244, 216, 205], //blush
  [240, 157, 162], //pink
  [255, 201, 163], //orange
  [255, 233, 163], //yellow
  [255, 220, 103], //mustard
  [222, 244, 198], //lightgreen
  [198, 242, 243], //lightblue
  [130, 211, 168], //green
  [174, 227, 235], //blue
  [183, 195, 243] //purple
];

var cloud = {
  x: 100,
  y: 100,
  w: 75,
  h: 55
}; //cloud properties

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(bg[pos]);

  cloud.x += .5; // x = x+1

  if (cloud.x>width){
    cloud.x = 0;
  }

  makeCloud(); // cloud tutorial found below

  textAlign(CENTER);
  rectMode(CENTER);
  fill(119, 117, 117);
  textSize(18);
  text("click for more :)", width/2, windowHeight-100, windowWidth/2, 80);

  fill(89);
  textSize(30);
  text("Avatar: The Last Airbender Quotes", width/2, (height/2)-200, windowWidth/2, 80);

  fill(0);
  textSize(18);
  text(quotes[pos], width/2, height/2, windowWidth/2, 80); //Text wraps acts like a rect()
  textSize(18);
  text(Nm[pos], width/2, (height/2)+100);

  print (pos);
}

function mousePressed() {
  pos = round(random(0,9));
  // pos += 1; //(addition assignment operator)<- increasing by one every time the mouse is pressed
  // if (pos == 10){ //restarts after 10
  //   pos = 0;
  // }
}

function makeCloud() {
  fill(250);
  noStroke();
  ellipse(cloud.x, cloud.y - 20, cloud.w, cloud.h);
  ellipse(cloud.x - 55, cloud.y - 5, cloud.w, cloud.h);
  ellipse(cloud.x + 50, cloud.y, cloud.w, cloud.h);
  ellipse(cloud.x + 20, cloud.y + 15, cloud.w, cloud.h);
  ellipse(cloud.x - 30, cloud.y + 13, cloud.w, cloud.h);
}

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
