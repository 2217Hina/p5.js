

function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,360,100,100,100);
    background(0);
    for(i=0;i<200;i++){
    fill(random(130,180),100,100,100);
    rect(random(width),random(height),random(30),random(100));
    }
  }

  function draw() {
   
    
  }