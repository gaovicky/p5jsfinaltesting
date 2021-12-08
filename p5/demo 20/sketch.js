//<---Nov 15, 2021--->
// function setup() {
//
//   createCanvas(400, 400);
//   textSize(24);
//   textAlign(CENTER);
// }
//
// function draw() {
//
//   background(220);
//
//   text(RiTa.VERSION, 200, 200);
// }

// rhyme generator https://editor.p5js.org/melodyloveless/sketches/OPMcqslK3
// ^^ reference is also in this linking

//<---sounds like--->
// /* Rhyme Generator made with RiTa and p5.js
// Text (title and instructions) written in the html file
// */
//
// var field, button;
//
// function setup() {
//   createCanvas(400, 300);
//   field = createInput();
//   button = createButton("Get rhymes!");
//   button.mousePressed(findRhymes);
//   background(0);
//   textSize(36);
//   noStroke();
//   fill(255);
// }
//
// function draw() {
// }
//
// function findRhymes() {
//   background(0);
//   // Rita.rhymes - https://rednoise.org/rita/reference/RiTa/rhymes/index.html
//   let rhymes = RiTa.soundsLike(field.value());
//   // print(rhymes);
//   // print(rhymes.join(" "));
//   if (rhymes.length > 0) {
//     text(rhymes.join(" "),
//       10, 10, width-10, height-10);
//   }
// }

// //<---WORD CLOUD - concordance function, more time appear, larger the word is going to be, random word position--->
// var raven = [];
// var count;
//
// function preload() {
//   //"The Raven" by Edgar Allen Poe
//   raven = loadStrings("raven_complete.txt");
// }
//
// function setup() {
//   createCanvas(700,800);
//   background(0);
//
//   //params for RiTa.concordance() //removes "THE" (stop words)
//   let params = {ignoreStopWords: true,
//     ignorePunctuation: true,
//     ignoreCase: true // raven and Raven are the same
//   };
//
//   count = RiTa.concordance(raven.join(" "), params);
//
//   textAlign(CENTER, CENTER);
//   print(count);
//   noLoop();
// }
//
// function draw() {
//   clear();
//   blendMode(DIFFERENCE);
//
//   for (var i in count) {
//     if (count.hasOwnProperty(i)) {
//       // fill(random(255)); // text color
//       // list of random colors for text
//       let c = [
//         [255,0,0], //red
//         [255,255,255] //white
//       ];
//
//       fill(random(c));
//
//       //scale size of text using map()
//       let x = count[i];
//       let scaleText = map(x, 0, 20, 5, 200); //smallest word is 5 largest is 200
//
//       textSize(scaleText); //smallest the word can be is 5px
//
//       // text i (current key), x pos, y pos
//       text(i, random(width), random(height));
//     }
//   }
//
//   // let size=25;
//   // textSize(size);
//   // fill(255);
//   //
//   // for (i = 0; i < raven.length; i++){
//   //   text(raven[i], 0, size + (size * i));
//   // }
// }

//<---generating random words--->
/////rita tags
var size = 50;

function setup() {
  createCanvas(700,800);
  background(0);
  fill(255); //white text
  textSize(size);
  textAlign(CENTER, CENTER);
  text("Click for word", width/2, height/2);
}

function draw() {

}

function mousePressed() {
  background(0); //new background ("erases old")
  let n1 = RiTa.randomWord({pos: "nn"}); //noun
  let n2 = RiTa.randomWord({pos: "nn"}); //noun
  let adj = RiTa.randomWord({pos: "jj"}); //adjective

  let rhyme = RiTa.rhymes(adj);
  let randomNum = int(random(rhyme.length));
  let randomWord = rhyme[randomNum];
  // print(rhyme);

  if (randomWord == undefined) { // if nothing rhymes with word
    //find a word that sounds similar
    let soundsSimilar = RiTa.soundsLike(adj);
    let newRandomNum = int(random(soundsSimilar.length));
    let newWord = soundsSimilar[newRandomNum];

    text("The " + n1 + " is " + adj, width/2, height/2);
    text("The " + n2 + " is " + newWord, width/2, height/2 + size);
    print("similar");
  } else {
    text("The " + n1 + " is " + adj, width/2, height/2);
    text("The " + n2 + " is " + randomWord, width/2, height/2 + size);
    print("rhyme");
  }
  // print(RiTa.pos("cat"));
}
