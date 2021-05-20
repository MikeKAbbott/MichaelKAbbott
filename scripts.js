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



const phrases = ["I'm a coder!", "I'm a musician!", "I'm a proud cat dad!", "And a biker!"];
let ul = document.getElementById("about-list");
let i = 0;
function addPhrases(){
  setTimeout(function(){
    ul.innerHTML += "<li><p>" + phrases[i] + "</p></li>";
    i++;
    if(i < phrases.length){
      addPhrases();
    }
  },1000)
  
  
}

setInterval(() => {
  i = 0;
  ul.innerHTML = "";
  addPhrases();

}, 5000);

