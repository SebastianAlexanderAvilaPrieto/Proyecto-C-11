var boat, boat_shiping;
var sea, seaImg;

function preload(){
  boat_shiping = loadAnimation("ship-1.png", "ship-2.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200, 200, 400, 20);
  sea.addImage("sea", seaImg);
  sea.scale = 0.3;
  
  boat = createSprite(200, 200, 50, 50);
  boat.addAnimation("shiping", boat_shiping);
  boat.scale = 0.3;
}

function draw() {
  background("lightblue");
  drawSprites();
  sea.velocityX = -2;
  if (sea.x < 0) {
    sea.x = sea.width/7;
  }
}