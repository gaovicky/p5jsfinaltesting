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

var rain = []; //"rain" properties

var appa; //define "Team Avatar on Appa" image by malice7222 on RedBubble

function setup() {
  createCanvas(windowWidth,windowHeight);
  textFont('Georgia'); //change font to Georgia
  appa = loadImage("appa.png");
}

function draw() {
  background(bg[pos]);

  for (var i = 0; i < rain.length; i++) {
    noStroke();
    fill(255);
    ellipse(rain[i][0], rain[i][1], 10, 80);
    rain[i][1] += 1;
  }

  textAlign(CENTER);
  rectMode(CENTER); //Text wraps acts like a rect(), so I have to center it

  fill(119, 117, 117);
  textSize(18);
  text("click for more :)", width/2, windowHeight-100, windowWidth/2, 80);

  fill(89);
  textSize(30);
  text("Avatar: The Last Airbender Quotes", width/2, (height/2)-200, windowWidth/2, 80);

  fill(0);
  textSize(18);
  text(quotes[pos], width/2, height/2, windowWidth/2, 80);
  textSize(18);
  text(Nm[pos], width/2, (height/2)+100);

  print (pos);

  image(appa,mouseX-100,mouseY-100,200,200); // appa as the cursor
}

function mousePressed() {
  pos = round(random(0,9)); //randomizes the quotes
  rain.push([100, 100]); //adding the "rain" in different locations
  rain.push([200, 600]);
  rain.push([300, 300]);
  rain.push([400, 700]);
  rain.push([500, 50]);
  rain.push([width-50, 600]);
  rain.push([width-400, 100]);
  rain.push([width-300, 400]);
  rain.push([width-100, 200]);
  rain.push([width-20, 50]);
}
