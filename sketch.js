var fixedRect, movingRect, A, B;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 5;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  


  A = createSprite(800, 400, 50, 80);
  A.shapeColor = "blue";
  A.debug = true;
  A.velocityX = -5;
  B = createSprite(1000,200,80,30);
 B.shapeColor = "white";
 B.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if(istouching(movingRect,B)){

    movingRect.shapeColor = "red";
    B.shapeColor = "red";
    }
  else{
    movingRect.shapeColor = "green";
    B.shapeColor = "green";
  }

  bounceoff(fixedRect,A);
  drawSprites();
}

function istouching(C,D){

  if (C.x - D.x < D.width/2 + C.width/2
    && D.x - C.x < D.width/2 + C.width/2
    && C.y - D.y < D.height/2 + C.height/2
    && D.y - C.y < D.height/2 + C.height/2) {
  
      return true;
}
else {
return false;
  }
}

function bounceoff(C,D){
 
  if(C.x - D.x < D.width/2 + C.width/2
    && D.x - C.x < D.width/2 + C.width/2){

C.velocityX = C.velocityX*(-1)
D.velocityX = D.velocityX*(-1)
  }
  if(C.y - D.y < D.height/2 + C.height/2
    && D.y - C.y < D.height/2 + C.height/2){

      C.velocityY = C.velocityY*(-1)
      D.velocityY = D.velocityY*(-1)



  }





}