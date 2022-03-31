var playerPaddle = createSprite(390,200 , 10,70);
var computerPaddle = createSprite(10, 200, 10,70);
var ball = createSprite(200,200,15,15);
var ps=0
var cs=0
var gamestate="start"

ball.shapeColor = "yellow";
playerPaddle.shapeColor="Blue";
computerPaddle.shapeColor="Red";
rect(200,10,10,40);
rect.shapeColor = "green";

function mboundary(){
  for(var num=0; num<400; num = num+30){
    strokeWeight(2);
    line(200,num,200,num+10);
  }
}
 function reset(){
   ball.x=200 
   ball.y=200
   ball.setVelocity(0,0)
   gamestate="end"
 }
 
 function why(){
    fill("red")
    textSize(30)
    text("You lost!",150,180)
 }
  

function draw() {
  background("orange");
   
  if (gamestate=="score"){
    ps=0
    cs=0
    textSize(20)
    text("Press space to start again",90,200)
    if (keyDown("space")) {
      
      gamestate="start"
    }
    
  }
     
  if (gamestate=="start"){
        if (keyDown("space")) {
        ball.setVelocity(4,2)
        gamestate="play"
   }
  }
    
  if (gamestate=="play"){
    if (keyDown("up")) { 
      playerPaddle.y = playerPaddle.y-7};
      
    if (keyDown("down")) {playerPaddle.y = playerPaddle.y+7}
      computerPaddle.y = ball.y;
      
      if(ball.x>405 ){
      cs=cs+1
      reset();
   }
   
    if (ball.x<0){
      ps=ps+1
      reset()
   }
   
  }
  if (gamestate=="end"){
    
    if(ps==5 ){
      gamestate="score"
    }
    else{gamestate="start"}
  
    if(cs==5 ){
      gamestate="score"
   }
     else{gamestate="start"}
    
  }
  
  
  mboundary();
  createEdgeSprites();
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  textSize(20)
  text(ps,210,20)
  textSize(20)
  text(cs,180,20)
  playerPaddle.collide(edges);
  drawSprites();
  
}



