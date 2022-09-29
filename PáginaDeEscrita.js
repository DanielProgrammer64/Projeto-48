//var Space
//////////////////////


var Cube;
var enemyBoss;
var enemy1,
enemy2,
enemy3,
enemy4,
enemy5,
enemy6,
enemy7;
var backgroundImg;
var Canvas;


var PLAY = 0;
var END = 1;
var gameState = PLAY;

var invisibleGround, ground;
var Spikes;
var block;
var block2,
block3,
block4;

var barreiraDireita;
var barreiraEsquerda;
var orb;

////////////////////////

function preload(){
backgroundImg = loadImage("Outro.png");
Cubeimg = loadImage("Owen.png");
Spikesimg = loadImage("Spike.png");
blockimg = loadImage("block.png");
block2img = loadImage("block.png");
block3img = loadImage("block.png");
block4img = loadImage("block.png");
orbimg = loadImage("orb.png");
}
//////////////////

function setup(){
Canvas = createCanvas(2048,1154);

Cube = createSprite(100,785,100,100);
Cube.addImage("Cubeimg", Cubeimg)
Cube.scale = 0.55;

invisibleGround = createSprite(660,825,30000,5);
invisibleGround.visible = false;

Spikes = createSprite(600,805);
Spikes.addImage("Spikesimg", Spikesimg)
Spikes.scale = 1;

block = createSprite(300,800);
block.addImage("blockimg", blockimg);
block.scale = 0.4;

block2 = createSprite(550,650);
block2.addImage("blockimg", blockimg);
block2.scale = 0.4;

block3 = createSprite(700,600);
block3.addImage("blockimg", blockimg);
block3.scale = 0.4;

block4 = createSprite(850,550);
block4.addImage("blockimg", blockimg);
block4.scale = 0.4;

orb = createSprite(400, 700);
orb.addImage("orbimg", orbimg);
orb.scale = 0.2

}
/////////////////////////

function draw(){

image(backgroundImg,0, 0, 2048, 1154);

  if(keyIsDown(RIGHT_ARROW)){
  Cube.position.x = Cube.position.x +10;
  }
  if(keyIsDown(LEFT_ARROW)){
  Cube.position.x = Cube.position.x -10;  
  }
  if(keyIsDown(DOWN_ARROW)){
  Cube.position.y = Cube.position.y +10;    
  } 
  if(keyIsDown(UP_ARROW)){
  Cube.position.y = Cube.position.y -10;    
  }

  
Cube.collide(invisibleGround);
drawSprites();    

Cube.collide(block);
Cube.collide(block2);
Cube.collide(block3);
Cube.collide(block4);

}


