var bullet, bulletSpeed, bulletWeight;
var wall, wallThickness;

function setup() {
  createCanvas(1600,400);

  bulletSpeed = random(223, 321);
  bulletWeight = random(30, 52);
  wallThickness = random(22, 83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = bulletSpeed;

  wall = createSprite(1200, 200, wallThickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0, 0, 0); 

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed / (wallThickness*wallThickness*wallThickness)
    if(damage < 10){
      fill("Green");
      textSize(40);
      text("Effective!", 700, 50);
      bullet.shapeColor = color(0, 255, 0);
    }
    if(damage > 10){
      fill("Red");
      textSize(40);
      text("Not Effective!"+damage, 700, 50);
      bullet.shapeColor = color(255, 0, 0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  } else{
    return false;
  }
}