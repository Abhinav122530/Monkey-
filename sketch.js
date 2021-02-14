
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var SurvivalTime = 0;
var score =0;
var invisibleGround,ground;
var obstacles,obstaceImage;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(800,400);
  ground  = createSprite(300,250,800,5);
  ground.x=ground.width/2;
  ground.velocityX=-3;
   
  
  
  
  monkey = createSprite(50,230,10,10);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  invisibleGround = createSprite(200,270,400,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  bananaGroup= new Group();
  
}


function draw() {
  background("white");
  stroke("white")
  textSize(20);
  fill("white");
  text("Score:"+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime =Math.ceil(frameCount/frameRate());
   
  monkey.collide(invisibleGround);
  if(keyDown("space")&&monkey.y>=100){
    monkey.velocityY = -3;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
        
  
  monkey.velocityY = monkey.velocityY + 0.8;
  drawSprites();
  Food();
  Obstacles();
}
function Food(){
  if (frameCount%100===0){
  banana = createSprite(200,100,10,10);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(120,200));
  banana.velocityX=-2;
  banana.lifetime=50;
  bananaGroup.add(banana);
  banana.scale=0.09;
  }
  
}
function Obstacles(){
  if (frameCount%300===0){
    obstacles=createSprite(200,230,10,10);
    //obstcles.x = Math.round(random(120,200));
    obstacles.addImage(obstaceImage)
    obstacles.scale = 0.1;
    obstacles.velocityX=-2;
    obstacles.lifetime=150;
     }
}





