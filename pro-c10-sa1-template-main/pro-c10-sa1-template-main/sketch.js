var player_walking_right
var player_walking_left
var prison_background
var player
var player2
var scene
var zombieIMG, zombie
var shooterIMG, shooter
var edge1, edge2, edge3, edge4
function preload(){
prison_background = loadImage("pri.jpg")
zombieIMG = loadAnimation("zombie1.png", "zombie2.png", "zombie3.png")
shooterIMG = loadAnimation("shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png","shooter_1.png", "shooter_2.png", "shooter_3.png")
}
function setup()  
{
  createCanvas(1128,634)

  scene = createSprite(600,300,1128,634);
  scene.addImage(prison_background);
  scene.scale = 2
  edge1 = createSprite(1130, 400, 10, 1000)
  edge2 = createSprite(35, 400, 10, 1000)
  edge1 = createSprite(550, 620, 10000, 10)
  edge2 = createSprite(550, -2, 10000, 10)
  prison_background
  zombie = createSprite(500, 550, 50, 50)
  zombie.scale = 1
  zombie.addAnimation("zombie_walk", zombieIMG)
  shooter = createSprite(300, 550)
  shooter.addAnimation("shooter_walk", shooterIMG)
  shooter.scale = 0.2
}

function draw() 
{
  if(keyDown("left") && zombie.x > 80) {
zombie.x = zombie.x-7
}   
if(keyDown("right") && zombie.x < 1080) {
  zombie.x = zombie.x+7
}   
if(keyDown("up") && zombie.y > 60 && zombie.y > 350) {
    zombie.y = zombie.y-30
}   
if(zombie.y < 540){
  zombie.y = zombie.y + 10
}
//edge1 = createSprite(1130, 400, 10, 1000)
//edge2 = createSprite(35, 400, 10, 1000)
//edge1 = createSprite(550, 620, 10000, 10)
//edge2 = createSprite(550, -2, 10000, 10)
//zombie.velocityX = -1
//zombie.velocityY = -1
//zombie.velocityX = 1
//zombie.velocityY = 1
//shooter.velocityX = 1
//shooter.velocityY = -3

//createEdgeSprites();
//if(edge1.isTouching(shooter)||edge2.isTouching(shooter)||edge3.isTouching(shooter)||edge4.isTouching(shooter)){
 //   shooter.x = 550
  //}

drawSprites()
}