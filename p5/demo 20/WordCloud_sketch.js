//<---Nov 15, 2021--->
//<---WORD CLOUD - concordance function, more time appear, larger the word is going to be, random word position--->
var raven = [];
var count;

function preload() {
  //"The Raven" by Edgar Allen Poe
  raven = loadStrings("raven_complete.txt");
}

function setup() {
  createCanvas(700,800);
  background(0);

  //params for RiTa.concordance() //removes "THE" (stop words)
  let params = {ignoreStopWords: true,
    ignorePunctuation: true,
    ignoreCase: true // raven and Raven are the same
  };

  count = RiTa.concordance(raven.join(" "), params);

  textAlign(CENTER, CENTER);
  print(count);
  noLoop();
}

function draw() {
  clear();
  blendMode(DIFFERENCE);

  for (var i in count) {
    if (count.hasOwnProperty(i)) {
      // fill(random(255)); // text color
      // list of random colors for text
      let c = [
        [255,0,0], //red
        [255,255,255] //white
      ];

      fill(random(c));

      //scale size of text using map()
      let x = count[i];
      let scaleText = map(x, 0, 20, 5, 200); //smallest word is 5 largest is 200

      textSize(scaleText); //smallest the word can be is 5px

      // text i (current key), x pos, y pos
      text(i, random(width), random(height));
    }
  }

  // let size=25;
  // textSize(size);
  // fill(255);
  //
  // for (i = 0; i < raven.length; i++){
  //   text(raven[i], 0, size + (size * i));
  // }
}
