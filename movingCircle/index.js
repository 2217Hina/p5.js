let ball = {
    X: 100.0,Y: 100.0,
    diameter: 40,
    r:23 , g:30 , b:60
  }
  
  
  function setup() {
    createCanvas(windowWidth,windowHeight);
    background(125);
  }
  
  function draw() {
    noStroke();
    fill(ball.r,ball.g,ball.b);
    circle(ball.X,ball.Y,ball.diameter);
    ball.X = ball.X + 1;
    ball.Y = ball.Y + 1;
    
    noStroke();
    fill(ball.r + 60,ball.g + 60,ball.b + 60);
    circle(width - ball.X,ball.Y,ball.diameter);
    ball.X = ball.X + 1;
    ball.Y = ball.Y + 1;
    
    noStroke();
    fill(ball.r + 10,ball.g + 30,ball.b + 125);
    circle(ball.X,height - ball.Y,ball.diameter);
    ball.X = ball.X + 1;
    ball.Y = ball.Y + 1;
    
    noStroke();
    fill(ball.r + 60,ball.g + 80,ball.b + 80);
    circle(width - ball.X,height - ball.Y,ball.diameter);
    ball.X = ball.X + 1;
    ball.Y = ball.Y + 1;
    
    
    
    
  }