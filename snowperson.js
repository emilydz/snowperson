let hue = 0;
let name = prompt("What's your name?", "human");

function setup() {
  createCanvas(1000, 800);
  colorMode(HSB, 255);
}

function draw() {
  background(hue, 255, 255);
  hue += 0.5;
  if (hue > 255) hue = 0;
  //snowperson legs
  fill("#f1f1f1");
  strokeWeight(5);
  stroke(0);
  //bottom
  ellipse(500, 650, 300);
  //middle
  ellipse(500, 450, 250);
  //top
  ellipse(500, 250, 200);
  //hat brim
  strokeWeight(20);
  stroke(0);
  line(400, 150, 620, 180);
  //hat body
  fill(0);
  quad(460, 80, 560, 90, 560, 170, 460, 150);
  //eyes
  stroke(0);
  strokeWeight(10);
  point(470, 250);
  point(520, 250);
  //mouth
  noFill();
  strokeWeight(5);
  arc(490, 290, 50, 40, 0, HALF_PI);
  //glasses
  strokeWeight(1);
  fill(40, 400, 100, 127);
  ellipse(470, 265, 40);
  ellipse(520, 265, 40);
  //glasses frame
  stroke(0);
  line(400, 240, 450, 260);
  line(540, 260, 600, 240);
  line(490, 260, 500, 260);
  //arms
  strokeWeight(5);
  line(377, 430, 300, 600);
  line(623, 430, 680, 600);

  //greeting
  strokeWeight(1);
  fill(0);
  if (mouseIsPressed) {
    textSize(60);
  } else {
    textSize(30);
  }
  text(('Welcome to the party, ' + name + '!'), mouseX, mouseY);
}
