class Fish {
  constructor(x, y, width, height, xSpeed, ySpeed, colorVal){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
    this.xSpeed = xSpeed; //moving 1 pixel per frame
    this.ySpeed = ySpeed;
    this.colorVal = colorVal;
  }
  move() {
    this.x -= this.xSpeed;
    // if past edge of canvas on x pos
    if (this.x > width || this.x < -100){
      this.x = width; //move fish back to the right when it reaches the left
    }
    //y position
    this.y -= this.ySpeed;
    if(this.y > height || this.y < 0){
      this.ySpeed *= -1;
    }
  } // end move()
  display() {
    noStroke();
    fill(this.colorVal);
    ellipse(this.x, this.y, this.width, this.height);
    triangle(this.x+30,this.y,this.x+90,this.y-40,this.x+90,this.y+40); //tail
    fill(52, 45, 42);
    ellipse(this.x-30, this.y-6, 17); //eye
  }
} //end of Fish (reference starts on line 111)

var fishList = []; //empty array for objects
var colorList = [
  [229, 74, 39], //yellow
  [255, 141, 79], //orange
  [254, 194, 90] //light orange
];
var starfish;

function setup() {
  createCanvas(800,400);
  starfish = loadImage("pixarPeach.png"); //https://pixar.fandom.com/wiki/Peach
  for (i = 0; i < 20; i++){
    let randomColorPos = int(random(colorList.length));
    fishList[i] = new Fish(random(width), //starting x pos
      random(height), //starting y pos
      120,100, // size
      random(2), //xSpeed
      random(3), // ySpeed
      colorList[randomColorPos]); // color
  }
}
function draw() {
  background(130, 167, 254); //blue
  push();
  drawPlants(100);
  drawPlants(200);
  drawPlants(300);
  drawPlants(400);
  drawPlants(500);
  drawPlants(600);
  drawPlants(700);
  pop(); //draw plants in different x positions
  for (i = 0; i < fishList.length; i++){
    fishList[i].move();
    fishList[i].display();
  }
  image(starfish,30,20,250,250); //image of starfish
  fill(48, 48, 255, 80);
  rect(0,0,800,400); //blue tint

  push();
  textD();
  pop(); //draw text in foreground
}

function mousePressed() {
  var colorList = [
    [229, 74, 39, 150], //yellow
    [255, 141, 79, 150], //orange
    [254, 194, 90, 150] //light orange
  ];
  for (i = 0; i < 20; i++){
      let randomColorPos = int(random(colorList.length));
      fishList[i] = new Fish(random(width), //starting x pos
        random(height), //starting y pos
        120,100, // size
        random(2), //xSpeed
        random(3), // ySpeed
        colorList[randomColorPos]); // color
    }
} //make the fishes transparent when the mouse is pressed

function drawPlants(x) {
  blendMode(MULTIPLY);
  fill(3, 117, 28); //green
  ellipse(x, 180, 23, 180);
  ellipse(x, 300, 30, 160);
  ellipse(x, 380, 20, 80);
} //plants properties

function textD() {
  fill(247, 238, 255);
  textSize(50);
  textStyle(BOLD); //make the text bold
  textAlign(CENTER);
  text("Click on a fish", 610, 380);
} //text properties

//<---REFERENCE--->
///// Drawing Fish https://editor.p5js.org/Zach.Lo/sketches/Rwm6jMMXj
// fisharray =[]
// colorarray = ['#b04119','yellow','blue']
//
// function setup() {
//   setInterval(spawn,1000)
//   createCanvas(400, 400);
// }
// function Fish(x,y,filler,speed,size){
// this.x = x
//   this.y = y
//   this.filler = filler
//   this.speed = speed
//   this.size = size
//
// //movement
// this.swim = function(){
// this.x -= speed
// }
// this.drawFish = function(){
// fill(this.filler)
//   ellipse(this.x,this.y,this.size,this.size-((this.size)/2))
//   triangle(this.x+30,this.y,this.x+80,this.y-30,this.x+80,this.y+30)
// fill(20)
//   ellipse(this.x-20,this.y,10,10)
// }
// }
// function spawn(){
// var h = new Fish(random(500,700),random(1,400),random(colorarray),random(1,4),random(90,130))
// fisharray.push(h)
// }
//
// function draw() {
//   background(220);
//   noStroke()
//   for(var h of fisharray){
//   h.drawFish()
//   h.swim()
//   }
// }
