function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,360,100,100,100);
    
  }

  function draw() {
   
     background(0);
     noStroke();
     for(i=0;i<100;i++){
     fill(random(360),100,100,60)
     circle(random(width),random(height),50);
     }
  }