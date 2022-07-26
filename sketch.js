var seaImg, shipImg
var sea, ship;
function preload(){
 seaImg = loadImage("sea.png")
 shipImg = loadAnimation( "ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  ship = createSprite(130,270,30,30);

  sea.addImage (seaImg)

  ship.addAnimation("r",shipImg)
  
}

function draw() {
  background("blue"); 
  sea.velocityX = -3
  ship.scale = 0.3
  if (sea.x < 0) {

    sea.x = sea.width/2
  }
  
  
  drawSprites();

 
}
