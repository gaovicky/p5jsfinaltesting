// Nov 3, 2021

// <---17.4 Amplitude Analysis - p5.js Sound Tutorial--->
//// volume influence size of ellipse
// var song;
// var button;
// var amp;
//
// function setup() {
//   createCanvas(200,200);
//   song = loadSound("rainbow.mp3", loaded);
//   amp = new p5.Amplitude();
//   background(51);
// }
//
// function loaded() {
//   button = createButton("play");
//   button.mousePressed(togglePlaying);
// }
//
// function draw() {
//   background(51);
//
//   var vol = amp.getLevel();
//   var diam = map(vol, 0, 0.3, 10, 200); // we know the max volume is 0.3
//
//   fill(255, 0, 255);
//   ellipse(width/2, height/2, diam, diam);
// }
//
// function togglePlaying() {
//   if(!song.isPlaying()) {
//     song.play();
//     song.setVolume(0.3); // max volume
//     button.html("pause");
//   } else {
//     song.stop();
//     button.html("play");
//   }
// }

//<---17.9 Sound Visualization Graphing Amplitude - p5.js Sound Tutorial--->
// var song;
// var amp; //like volume
// var button;
//
// var volhistory = []; //array
//
// function toggleSong() {
//   if(song.isPlaying()) {
//     song.pause();
//   } else {
//     song.play();
//   }
// }
//
// function preload() {
//   song = loadSound('this-dot-kp.mp3');
// }
//
// function setup() {
//   createCanvas(200,200);
//   button = createButton('toggle');
//   button.mousePressed(toggleSong);
//   song.play();
//   amp = new p5.Amplitude();
// }
//
// function draw() {
//   background(0);
//
//   push();
//   var vol = amp.getLevel();
//   volhistory.push(vol);
//   stroke(255);
//   noFill();
//   var currentY = map(vol, 0, 1, height, 0);
//   translate(0, height/2 - currentY);
//   beginShape();
//   for (var i = 0; i < volhistory.length; i++){
//     var y = map(volhistory[i], 0, 1, height, 0); //0 is centered, 1 is at top(0)
//     point(i, y);
//   }
//   endShape();
//   pop();
//
//   if (volhistory.length > width - 50) {
//     volhistory.splice(0,1);
//   }
//
//   stroke(255, 0 , 0);
//   line(volhistory.length, 0, volhistory.length, height);
//   // ellipse(100, 100, 200, vol * 200);
// }

// <--- 17.8 Microphone Input - p5.js Sound Tutorial --->
////p5 audio in (Object) -- must be http
////circle growing and shrinking as you speak
// var mic;
//
// function setup() {
//   createCanvas(200,200);
//   mic - new p5.AudioIn();
//   mic.start();
// }
// function draw() {
//   background(0);
//   var vol = mic.getLevel();
//   ellipse(100, 100, 200, vol*200);
//   console.log(vol);
// }

// <--- 17.2 Play and Pause Button - p5.js Sound Tutorial --->
// var song;
// var button;
//
// function setup() {
//   createCanvas(200,200);
//   song = loadSound("rainbow.mp3", loaded);
//   button = createButton("play");
//   button.mousePressed(togglePlaying);
//   background(51);
// }
//
// function loaded() {
//   console.log("loaded");
// }
//
// function togglePlaying() {
//   if(!song.isPlaying()) {
//     song.play();
//     song.setVolume(0.3);
//     button.html("stop")l
//     // button.html("pause");
//   } else {
//     // song.pause(); //plays from where it stopped
//     song.stop(); //stop and rewinds
//     button.html("play");
//   }
// }

// <--- 17.3 Timing, Jumps and Cues - p5.js Sound Tutorial --->
var song;
var button;
var jumpButton;

function setup() {
  createCanvas(200,200);
  song = loadSound("rainbow.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  background(51);

  song.addCue(2, changeBackground, color(0,0,255)); //need time in seconds, function that gets called
  song.addCue(4, changeBackground, color(0,255,255));
  song.addCue(6, changeBackground, color(255,255,255));
}

// function changeBackground() {
//   background(random(255), random(255), random(255));
// }

function changeBackground(col) {
  background(col);
}

function jumpSong() {
  var len = song.duration(); //total duration of the song in seconds
  var t = random(len); //0 is the beginning of the song
  console.log(t);
  song.jump(t);
}

function draw() {
  //background(song.currentTime() * 10, 0, 255);
}
