
var size = 50;
//define the images
var japan;
var rome;
var egypt;
var cali;

function setup() {
  createCanvas(1440,600);
  japan = loadImage("japan.jpg");
  rome = loadImage("rome.jpeg");
  egypt = loadImage("egypt.jpeg");
  cali = loadImage("cali.jpeg");
}

function draw() {
  background(0,0,255);
  image(japan,0,0,360,600); //place image in the CENTER
  image(rome,360,0,360,600);
  image(egypt,720,0,360,600);
  image(cali,1080,0,360,600);
  translate (mouseX+35, mouseY-18);
  scale(.5);
  rotate(75 / 10);
  butterFly();
}

function butterFly() {
  //body
  fill(255,255,0);
  noStroke();
  rect(0,0, size, size*3);

  //antenna
  fill(0);
  triangle(25, 0, 0, -5, -50, -40); //left
  triangle(25, 0, 50, -5, 100, -40); //right

  //wings
  fill(255,0,0);
  noStroke();
  triangle(25, 25, -5, 200, -50, 70); //left
  triangle(25, 25, 55, 200, 100, 70); //right
}
