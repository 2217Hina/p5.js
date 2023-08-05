function setup() {
    createCanvas(600, 600);
    background(0,13,63);
  }
  
  function draw() {
    fill(255,0,0,50);
    circle(mouseX,mouseY,10);
    fill(0,255,0,50);
    circle(width - mouseX,mouseY,10);
    fill(0,0,255,50);
    circle(mouseX,height - mouseY,10);
    fill(125,60,60,50);
    circle(width - mouseX,height - mouseY,10);
  }