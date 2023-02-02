let t=0;
let p1;
let p2;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  p1=new Paleta();
  p2=new Paleta();
}



function draw() {
  // put drawing code here
  background(25);
  x=200+cos(t)*120;
  y=200//200+sin(t)*120;
  p1.display();
  p2.display();
  p2.x=400-p2.width;

  circle(x,y,20);
  t+=0.1;

}


class Paleta {
  constructor() {
    this.x = 0;
    this.y =200/2;
    this.width = 15;
    this.height = 80;
    this.speed = 1;

  }
  // move() {
  //   this.x += random(-this.speed, this.speed);
  //   this.y += random(-this.speed, this.speed);
  // }
  display() {
    rect(this.x, this.y, this.width, this.height );
  }
}





// let bug; // declarar objeto

 

// function setup() {

//   createCanvas(710, 400);

//   // crear objeto

//   bug = new Jitter();

// }

 

// function draw() {

//   background(50, 89, 100);

//   bug.move();

//   bug.display();

// }

 

// // clase Jitter

// class Jitter {

//   constructor() {

//     this.x = random(width);

//     this.y = random(height);

//     this.diameter = random(10, 30);

//     this.speed = 1;

//   }

 

//   move() {

//     this.x += random(-this.speed, this.speed);

//     this.y += random(-this.speed, this.speed);

//   }

 

//   display() {

//     ellipse(this.x, this.y, this.diameter, this.diameter);

//   }

// }