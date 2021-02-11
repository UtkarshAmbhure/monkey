var PLAY = 1;
var END = 0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0
var ground

var score=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500)
  
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
ground.x = ground.width /2;
  console.log(ground.x);

  
}


function draw() {
background(255);
  
 stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20)
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  
  text("Survival Time:"+ survivalTime,100,50)
  

  if(ground.x<50){
    ground.x=ground.width/2}
  
  if(keyDown("space")&& monkey.y >= 260) {
    monkey.velocityY = -12; 
    }
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  Spawnbanana();
  SpawnStone();
  drawSprites();
  
}

function Spawnbanana(){
  if (frameCount % 80 === 0){
   var banana = createSprite(400,200,10,40);
    banana.y = Math.round(random(150,200));
    console.log(banana.y)
   banana.velocityX = -6;        
   banana.scale=0.10
    banana.addAnimation("banana",bananaImage) }

}

function SpawnStone(){
if (frameCount % 90 === 0){
   var obstacle = createSprite(400,315,20,20); 
   obstacle.velocityX = -6;
    obstacle.addAnimation("stone",obstaceImage)          
    obstacle.scale = 0.20;
    
    obstacle.lifetime = 300;
    
  
}
  
}


