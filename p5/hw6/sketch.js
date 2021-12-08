var song;
var amp; //like volume
var button;
var frog = {
  size: 300,
  eyeSize: 120,
  pupilSize: 60,
  display: function() {
    translate(width/2, height/2 + 20);
    fill(72, 153, 49); //green
    ellipse(0, 0, this.size + 20, this.size);
    fill(255);
    ellipse(-70, -120, this.eyeSize, this.eyeSize); //left eye
    ellipse(70, -120, this.eyeSize, this.eyeSize); //right eye
    fill(0);
    ellipse(-60, -120, this.pupilSize, this.pupilSize); //left eye
    ellipse(60, -120, this.pupilSize, this.pupilSize);
  }
}; //frog body
var movingText = {
  x:-300,
  message: "statistics statistics statistics statistics statistics statistics",
  display: function(y) {
    fill(214, 63, 63); //red
    textSize(50);
    textStyle(BOLD); //make the text bold
    text(this.message, this.x, y);
    this.x += .05; //moving the text slowly
    if (movingText.x > 10){
      movingText.x = -300; // move text back to the left when it reaches 20
    }
  }
}; //text properties


function setup() {
  createCanvas(500,500);
  song = loadSound("TTstat.mp4", loaded); //Source: https://youtu.be/BvWefB4NGGI
  amp = new p5.Amplitude();
  background(51);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(231, 193, 143); //tan

  //text
  push();
  movingText.display(55);
  movingText.display(105);
  movingText.display(155);
  movingText.display(205);
  movingText.display(255);
  movingText.display(305);
  movingText.display(355);
  movingText.display(405);
  movingText.display(455);
  pop();

  //frog
  push();
  frog.display();
  pop();

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 0, 600); // we know the max volume is 0.3
  fill(255, 92, 138); //pink
  ellipse(width/2, height/2 + 30, 250, diam);
}

function togglePlaying() {
  if(!song.isPlaying()) {
    song.play();
    song.setVolume(0.3); // max volume
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}
