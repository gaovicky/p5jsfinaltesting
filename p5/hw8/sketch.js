class Sticker {
  constructor(ypos, width, height, fillColor){
    this.height = height;
    this.width = width;
    this.fillColor = fillColor;
    this.ypos = ypos
  }
  display(){
    noStroke();
    fill(this.fillColor); //black
    rectMode(CENTER);
    rect(350, this.ypos, this.width, this.height);
  }
} // Tutorial 8.1 Class and Objects, Xin Xin. https://editor.p5js.org/xinxin/sketches/3xyY1z0pM

var ATW = [];
var count;
var rippedPaper;
var sticker1;
var sticker2;
var colorList = [
  [194, 65, 51], //red
  [194, 50, 105], //pink
  [181, 76, 16], //orange
  [54, 79, 17], //green
  [79, 54, 17] //brown
];
var img = [];

function preload() {
  //"All Too Well" by Taylor Swift
  ATW = loadStrings("alltoowell.txt"); //https://genius.com/Taylor-swift-all-too-well-10-minute-version-taylors-version-live-acoustic-lyrics
  paper = loadImage("paper.png"); //https://lehightonlibrary.com/canva-white-card-stock-paper-with-one-ripped-edge/
  for (let i = 1; i < 6; i++) {
    img[i] = loadImage('alltoowell' + i + '.png');
  } // images found on @taylorswift on Instagram https://www.instagram.com/p/CWMo1KDsD6g/
}

function setup() {
  createCanvas(700,800);
  background(paper);
  textFont('Courier New');

  //params for RiTa.concordance() //removes "THE" (stop words)
  let params = {ignoreStopWords: true,
    ignorePunctuation: true,
    ignoreCase: true
  };

  count = RiTa.concordance(ATW.join(" "), params);

  textAlign(CENTER, CENTER);
  print(count);
  noLoop();

  let randomColorPos = int(random(colorList.length));
  sticker1 = new Sticker(140, random(100, 200), 40, colorList[randomColorPos]);
  sticker2 = new Sticker(600, random(100, 200), 40, colorList[randomColorPos]);
}

function draw() {

  for (var i in count) {
    if (count.hasOwnProperty(i)) {
      // list of random colors for text
      let c = [
        [35, 103, 55], //green
        [211, 132, 28], //orange
        [144, 4, 4] //red
      ];

      fill(random(c));

      //scale size of text using map()
      let x = count[i];
      let scaleText = map(x, 0, 20, 8, 200); //smallest word is 8 largest is 200

      textSize(scaleText); //smallest the word can be is 8px

      // text i (current key), x pos, y pos
      text(i, random(width), random(0,730));
    }
  }

  push();
  scale(.5);
  image(img[1], 120, 300);
  pop();

  push();
  sticker1.display();
  sticker2.display();
  pop();
}

function mousePressed() {
  push();
  scale(.5);
  image(img[5], 120, 300);
  pop();

  push();
  sticker1.display();
  sticker2.display();
  pop();
}
