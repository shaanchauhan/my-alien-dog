function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(20, 130, 240);
  fill(80, 200, 60); rect(0, 380, 600, 250); fill(255);
  //left leg
  rect(210, 320, 20, 60);
  //right leg
  rect(370, 320, 20, 60);
  //tail
  rect(410, 260, 100, 20);
  //body
  rect(180, 230, 250, 100);
  //collar
  fill(200, 0, 0); square(135, 205, 100); fill(255);
  //left ear
  square(145, 185, 25);
  //right ear
  square(196, 185, 25);
  //head
  square(140, 210, 90);
  //nose
  square(168, 255, 30);
  //left eye
  fill(0); square(155, 230, 15);
  //right eye
  square(197, 230, 15); fill(255);
}