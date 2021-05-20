//Michael Abbott
console.log("Oh jeez, did I mess something up? So sorry about this, please let me know by sending me an email! mikekabbott@gmail.com")



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
