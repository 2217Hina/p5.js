

function setup() {
    createCanvas(windowWidth,windowHeight);
    colorMode(HSB,360,100,100,100);
     background(0);
     noStroke();
    
     for(i=0;i<30;i++){
     fill(random(290,330),100,100,60)
     circle(random(width),random(0, height/5),50);
     }
    for(i=0;i<30;i++){
     fill(random(290,330),100,90,60)
     circle(random(width),random( height/5,height/5*2),40);
     }
    for(i=0;i<30;i++){
     fill(random(290,330),100,90,60)
     circle(random(width),random(height/5*2,height/5*3),30);
     }
    for(i=0;i<30;i++){
     fill(random(290,330),100,60,60)
     circle(random(width),random(height/5*3,height/5*4),20);
     }
    for(i=0;i<10;i++){
     fill(random(290,330),100,50,60)
     circle(random(width),random(height/5*4,height),20);
     }
    
  }

  function draw() {
   
    
  }