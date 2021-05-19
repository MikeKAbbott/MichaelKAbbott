//Michael Abbott
//Basic clock made with p5js
let fade;
let fadeRate = 7;

function setup() {
  const canvas = createCanvas(50, 46);
  canvas.parent("cursor");
  fade = 0;
}

function draw() {
  background(255);
  strokeWeight(5);
  noStroke();
  fadeRate = fade <= 0 ? 7 : fadeRate;
  fadeRate -= fade > 255 ? 7 : 0; 
  fade += fadeRate;
  let c = color(228, 72, 91, fade);
  fill(c);
  rect(width/2 - 20, height/2, 6, 50);
}