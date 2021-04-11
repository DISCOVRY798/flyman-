var block;
var cloud;
var jumper;
var man;  
var cap;
var bg;
var topEdge;
var cloudGroup,blockGroup,jumperGroup;

var  bg_img,block_img ,cloud_img ,jumper_img ,man_img, cap_img;

function preload () {

block_img = loadImage ("Images/block1 (1).jpg");
cloud_img = loadImage ("Images/cloud2.png");
jumper_img = loadImage ("Images/jumper.jpg");
man_img = loadImage ("Images/flying man.png");
cap_img = loadImage ("Images/flying cap.png");
//bg_img=loadImage ("Images/background.jpg")
}

function setup() {
createCanvas(1200,800)

topEdge=createEdgeSprites();
cloudGroup=new Group();
blockGroup=new Group();
jumperGroup=new Group();
//cloud = createSprite(200,100,30,40);
//cloud.addImage(cloud_img)
man = createSprite(800,600,100,80)
man.addImage(man_img)

//bg=createSprite(0,600,2000,1200)
//bg.addImage(bg_img);
//bg.velocityY=2;
}

function draw() {
  background("white");  
if (keyDown("space")){
man.velocityY=-13
}
console.log(man.y)
man.velocityY=man.velocityY+0.3 
//man.x=mouseX
if (keyDown("left_arrow")){
man.x=man.x-5

}

if (keyDown("right_arrow")){
man.x=man.x+5

}
  spawnClouds();
spawnBlocks();
spawnJumpers();
man.bounceOff(topEdge)
//blockGroup.bounceOff(edges);
//jumperGroup.bounceOff(edges);
//cloudGroup.bounceOff(edges);

if(man.isTouching(blockGroup)){
man.velocityY=0;
}

//block.bounceOff(edges);
  drawSprites();
}
function spawnClouds() {
  if (frameCount%200===0){

  cloud=createSprite(600,600,30,40);
  cloud.addImage(cloud_img);
  //cloud.velocityY=3
  cloud.velocityX=3;
  cloud.scale=0.5
  cloud.lifetime=400;
  cloud.y=random(50,600);
  cloudGroup.add(cloud);
  cloud.lifetime=500
}
}

function spawnBlocks() {
 if (frameCount%100===0){
  block=createSprite(200,400,50,50);
 block.addImage(block_img);
 block .velocityX=3
 block .scale=0.5
 block.y=random(20,800);
 blockGroup.add(block);
 block.lifetime=450
 } 
}


function spawnJumpers() {
 if (frameCount%400===0){
 jumper =createSprite(200,400,50,50);
 jumper.addImage(jumper_img);
 jumper .velocityX=3
 jumper.scale=0.5
jumper.y=random(100,600);
jumperGroup.add(jumper);
jumper.lifetime=500
 } 
}



