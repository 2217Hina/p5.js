function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    background(13,38,63);
    X = width/4;
    Y = height/2;
    W = width/2;
    
    for(i = 0; i < 10;i++){
     fill(0,0,255,60);
     circle(X,Y,W);
     circle(X + W,Y,W);
     X = X/2;
     W = W/2;
    
    }
    
    
    
  }