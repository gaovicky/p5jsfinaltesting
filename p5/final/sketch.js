var weather;
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=11769368576be5c3583c2050bd6ad840'; //apiKey
var units = '&units=metric';
var input;
var rain = [];
var cloudx = 0;

function setup() {
  createCanvas(500,500);

  var button = select('#submit');
  button.mousePressed(weatherResults); //shows results when mouse is pressed

  input = select('#city');

  for (i = 0; i < 100; i++) {
    rain[i] = new drawRain();
  }
}

function weatherResults() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(78, 129, 247); //blue
  fill(50);
  noStroke();
  textSize(24);
  textAlign(CENTER,CENTER);
  text("weather forecast", 250, 250);
  if (weather) {
    if (weather.weather[0].main === "Clouds") {
      background(150, 195, 255); //sky blue
      drawCloud(cloudx-250,100);
      drawCloud(cloudx+20,80);
      drawCloud(cloudx+400,100);
      drawCloud(cloudx,250);
      drawCloud(cloudx+250,200);
      drawCloud(cloudx+370,330);
      drawCloud(cloudx+100,400);
      drawCloud(cloudx-200,450);
      drawCloud(cloudx-300,300);
      drawCloud(cloudx+420,480);
      cloudx+=.5; //speed of cloud
      if (cloudx>380){
        cloudx = 50;
      } //when some clouds reach the end, it will move back
    } else if (weather.weather[0].main === "Clear") {
      background(78, 129, 247); //blue
      drawSun();
    } else if (weather.weather[0].main === "Rain") {
      background(86, 89, 93); //grey
      for (i = 0; i < rain.length; i++) {
        rain[i].fallingRain();
      }
    } else if (weather.weather[0].main === "Haze") {
      ellipse(100,100,50,50);
    } else if (weather.weather[0].main === "Mist") {
      rect(100,100,100,300);
    } else if (weather.weather[0].main === "Snow") {
      rect(100,100,500,300);
    } else {
      ellipse(100,100,200,400);
    }
    print(weather.weather[0].main);
    fill(50);
    noStroke();
    textSize(24);
    textAlign(CENTER,CENTER);
    text(weather.weather[0].description, 250, 250);
  }
}

class drawRain {
  constructor() {
    this.x = random(-30,530);
    this.y = random(0,-4000);
    this.length = 30;
  }

  fallingRain() {
    noStroke();
    fill(198, 215, 255); //light blue
    ellipse(this.x, this.y, 4, this.length);
    this.y = this.y + 6 // + frameCount/60;
    if (this.y > 500) {
      this.y = 0;
    }
    if (this.length < 0) {
      this.length = 0;
    }
  }
}

function drawSun() {
  fill(255, 218, 118); //yellow
  stroke(255, 218, 118); //yellow
  strokeWeight(8);
  push();
    scale(1);
    translate(250, 250); //center of screen
    rotate(radians(frameCount / 8)); //low rotation
    ellipse(0, 0, 180, 180);
    line(0, -210, 0, -120); //top
    line(0, 120, 0, 210); //bottom
    line(-135, -135, -90, -90); //top left
    line(135, -135, 90, -90); //top right
    line(-210, 0, -120, 0); //left
    line(120, 0, 210, 0); //right
    line(-135, 135, -90, 90); //bottom left
    line(135, 135, 90, 90); //bottom right
  pop();
  noFill();
}

function drawCloud(cloudx,cloudy) {
  noStroke();
  fill(255, 254, 250); //off white
  push();
  ellipse(cloudx, cloudy - 20, 75, 55);
  ellipse(cloudx - 55, cloudy - 5, 75, 55);
  ellipse(cloudx + 50, cloudy, 75, 55);
  ellipse(cloudx + 20, cloudy + 15, 75, 55);
  ellipse(cloudx - 30, cloudy + 13, 75, 55);
  pop();
}

// function drawSnow() {
//   //nsert code of snow https://p5js.org/examples/simulate-snowflakes.html
// }

//<---REFERENCES--->
// Rain:
// https://editor.p5js.org/son/sketches/ry8-HnOAQ
// Sun:
// https://editor.p5js.org/monicawen/sketches/HkU-BCJqm
// Snow:
// https://p5js.org/examples/simulate-snowflakes.html
// Cloud:
// https://editor.p5js.org/mena-landry/sketches/D7ql4Nd3V
//
// Current Weather Data for over 200,000 cities:
// https://openweathermap.org/current
//
// 10.5: Working with APIs in Javascript - p5.js Tutorial https://youtu.be/ecT42O6I_WI
// 10.6: API Query with User Input - p5.js Tutorial https://youtu.be/4UoUqnjUC2c
