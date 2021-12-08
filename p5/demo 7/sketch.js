// Sep 29, 2021

// <---How to Add Media--->
// var img; //give your image a variable
//
// function preload() {
//   img = loadImage("media/cat.png");
// }
//
// function setup() {
//   createCanvas(600,600);
//   // img = loadImage("cat.png"); // load the image
// }
//
// function draw() {
//   background(255,0,0);
//   imageMode(CENTER);
//   // image(img,0,0); //(img, xpos, ypos, width, height);
//   for (i=0; i <10; i+=3){ //change i++ to i+=2 will change the spacing
//     for (j=0; j<10; j+=2){
//       push();
//       translate(i*10, j*40);
//       spinningKitty();
//       pop();
//     }
//   }
// }
//
// function spinningKitty() {
//   let speedMax = 500;
//   let speed = frameCount%speedMax;
//   let grow = map(speed, 0, speedMax-1, 0.1, 1.4);
//
//   push();
//   translate(width/2, height/2);
//   rotate((frameCount/width) * PI * 2);
//   scale(grow);
//   image(img, 0, 0);
//   pop();
// }

// //<---How to Add Media--->
// var kitty;
// var cat;
//
// function preload() {
//   kitty = loadImage("media/kitty.png")
//   cat = loadImage("media/cat.png")
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(20);
//   imageMode(CENTER);
//
//   for (var i = 0; i < 10; i+=3){
//     image(cat, (i*25), i*25,
//       cat.width*(i+1)/10,
//       cat.height*(i+1)/10); //image
//   /// .width .height
//   /// cat.width ///(give me the width of the cat in pixels)
//   }
// }

// //<------>https://editor.p5js.org/melodyloveless/sketches/IzVVhKRcI
// let happyTrees;
//
// function preload() {
//   happyTrees = loadImage("media/trees.jpeg");
// }
//
// function setup() {
//   createCanvas(400,500);
//   happyTrees.loadPixels(); // loading in loadPixels
//   background(0);
//   noStroke();
//   rectMode(CENTER);
// }
//
// function draw() {
//   fill(happyTrees.get(mouseX, mouseY), 100);
//   rect(mouseX,mouseY, 200, 300);
// }

// //<---Sound (didn't work ://)--->
// var cat;
// var meow;
//
// function preload() {
//   cat = loadImage("media/cat.png")
//   meow = loadSound("media/meow.mp3")
// }
//
// function setup() {
//   createCanvas(500,500);
// }
//
// function draw() {
//   background(20);
//   imageMode(CENTER);
//     image(cat,width/2,height/2);
//
//   if(frameCount === 30){
//     meow.play(); //make sure it isn't commented out in html
//   }
// }

// //<---Video--->
// var bgColor = [255,0,0];
// var vid;
// var vidStatus = "off";
//
// function setup() {
//   createCanvas(300,300);
//   vid = createVideo("cat.mp4");
// }
//
// function draw() {
//   background(255,0,0);
//   fill(255);
//   select('video').position(200,120); //move the video on the canvas
//   vid.play();
// }

//<---Video Interactive--->
var bgColor = [255,0,0]; //array for background color
var vid;
var vidStatus = "off";

function setup() {
  createCanvas(300,300);
  vid = createVideo("cat.mp4");
}

function draw() {
  background(bgColor);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  text(vidStatus, width/2, height/2);
  select('video').position(300,0); //reposition the video

  if (mouseIsPressed) {
    vid.play();
    bgColor = [0,0,255]; //blue
    vidStatus = "on";
  } else {
    vid.pause();
    vidStatus = "off";
    bgColor = [255,0,0]; //red
  }
}
