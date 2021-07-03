var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleimg;
var leaf;
var leaf1,leaf2,leaf3;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleimg = loadImage("apple.png");
  leaf1 = loadImage("leaf.png");
  leaf2 = loadImage("orangeLeaf.png");
  leaf3 = loadImage("redImage.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  var create = Math.round(random(1,2));

  if (frameCount % 80 === 0){
    if (create === 1){
      createApple();
    }
    else {
      createLeaves();
    }
  }
 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = World.mouseX;

 
  drawSprites();
}

function createApple(){
apple = createSprite(random(50,350),40,10,10)
apple.addImage(appleimg);
apple.velocityY = 2;
apple.lifetime = 200;
apple.scale = 0.1;
}

function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10)
  leaf.velocityY = 2;
  leaf.lifetime = 200;
  leaf.scale = 0.1;
  

var rand = Math.round(random(1,3));
switch(rand) {
  case 1: leaf.addImage(leaf1);
          break;
  case 2: leaf.addImage(leaf2);
          break;
  case 3: leaf.addImage(leaf3);
          break;
 
  default: break;
}
}