var ground
var playerS,playerK
var computer 
var goal
var gk,gkS,gkLeft,gkRight,gkDown,gkUp
var arrow,arrowS,arrowL,arrowR
var gameState=0;

 function preload(){
 groundImg=loadImage("Images/ground.png");
 goalImg=loadImage("Images/Goal.png")
 ballImg=loadImage("Images/ball.jpg")
playerSImg=loadImage("Images/k.png")
playerKImg=loadImage("Images/kick.png")
gkS=loadImage("Images/gk.png")
gkLeft=loadImage("Images/gkl.png")
gkRight=loadImage("Images/gkr.png")
gkup=loadImage("Images/gkup.png")
arrowS=loadAnimation("Images/left.png","Images/left.png","Images/left.png","Images/left.png","Images/up.jpg","Images/up.jpg","Images/up.jpg","Images/up.jpg","Images/up.jpg","Images/right.png","Images/right.png","Images/right.png","Images/right.png")
arrowL=loadAnimation("Images/left.png")
arrowR=loadAnimation("Images/right.png")
arrowU=loadAnimation("Images/up.jpg")


 }
 function setup(){
 createCanvas(1200,1200)    
 ground=createSprite(600,600,800,1200)    
 ground.addImage("groundImg",groundImg)
 ground.scale=1.5

 goal=createSprite(600,70,50,50)
 goal.addImage("goalImg",goalImg)
 goal.scale=0.35

 ball=createSprite(600,600,10,10)
ball.addImage("ballImg",ballImg)
ball.scale=0.45
 
playerS=createSprite(560,670,40,40)
playerS.addImage("playerSImg",playerSImg)
playerS.addImage("playerKImg",playerKImg)
playerS.scale=0.50

gk=createSprite(600,125,40,40)
gk.addImage("gkS",gkS)
gk.addImage("gkLeft",gkLeft)
gk.addImage("gkRight",gkRight)
gk.addImage("gkup",gkup)
gk.debug = true;
arrow=createSprite(595,550,30,10)
arrow.addAnimation("arrowS",arrowS) 
arrow.addAnimation("arrowU",arrowU)
arrow.addAnimation("arrowR",arrowR)
arrow.addAnimation("arrowL",arrowL)
gk.scale=1.2
  
}


 function draw(){
background(0)     ;
if(gameState===0){
    arrow.changeAnimation("arrowS",arrowS)   
    if(keyDown("SPACE")){
        gameState=1;
    }    
}
else if(gameState===1){
    
    if(keyDown("UP_ARROW")){
        arrow.changeAnimation("arrowU",arrowU)
        playerS.changeImage("playerKImg",playerKImg)
        ball.velocityX=0
        ball.velocityY=-3
    }
    else if(keyDown("LEFT_ARROW")){
        arrow.changeAnimation("arrowL",arrowL)
        //addImage and Velocity 
        playerS.changeImage("PlayerKImg",playerKImg)
        ball.velocityX=random(-1,-0.2)
        ball.velocityY=-4
    }
    else if(keyDown("RIGHT_ARROW")){
        arrow.changeAnimation("arrowR",arrowR)
        //AddImage and Velocity 
        playerS.changeImage("PlayerKImg",playerKImg)
        ball.velocityX=random(0.3,1)
        ball.velocityY=-4
    }
    if(ball.x<600 && ball.y<230){
        gk.changeImage("gkLeft",gkLeft) 
        gk.scale=0.8
        playerS.changeImage("playerSImg",playerSImg)
        gk.setCollider("rectangle",-70,0,40,30)
        ball.depth =gk.depth + 1

    }
    else if(ball.x>600 && ball.y<230){
        gk.changeImage("gkRight",gkRight) 
        gk.scale=0.8
        playerS.changeImage("playerSImg",playerSImg)
        gk.setCollider("rectangle",70,0,40,30)
        ball.depth =gk.depth + 1
    }
    else if(ball.x===600 && ball.y<230){
        gk.changeImage("gkup", gkup)
        ball.depth =gk.depth + 1 
        gk.scale=1
        playerS.changeImage("playerSImg",playerSImg)
        gk.setCollider ("rectangle",0,-90,40,40)
    }
    if (ball.isTouching(gk)){
        ball.velocityX = 0
        ball.velocityY = 0 
    }
   
}
console.log(gameState)
drawSprites()    ;
stroke ("black")
fill ( "black")
text(" x:"+mouseX+" y:"+mouseY,mouseX,mouseY)
}
    
 