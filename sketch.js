let quantity = 100; // quantity of data points in array
let dataMax = 100; // max for each point of data (min=0)

let wp, hm; // width per data point rectangle, height multiplier, both for vizualizer

let arr = []; // array of data

let uz = []; // unsorted zones

function setup() {
  createCanvas(900,900);
  wp = width  / quantity;
  hm = height / dataMax;

  fillArray();
}

function draw() {
  background(0);
  drawArray();
}

function drawArray() {
  fill(255);
  strokeWeight(1);
  stroke(0);

  for (var i = 0; i < arr.length; i++) {
    rect(i*wp,height-(arr[i]*hm),wp,arr[i]*hm);
  }
}

function fillArray() {
  for (var i = 0; i < quantity; i++) {
    arr[i] = random(dataMax);
  }
}

function stepSort() {

}
