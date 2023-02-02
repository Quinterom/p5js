function setup() {
  // put setup code here
  createCanvas(400, 400);
}

let t=0;

function draw() {
  // put drawing code here
  background(25);
  x=200+cos(t)*120;
  y=200+sin(t)*120;
  circle(x,y,10);
  t+=0.1;

}

