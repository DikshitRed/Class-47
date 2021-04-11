var soldier;
var soldierImg;
var terrorist;
var terroristImg;
var gun;
var gunImg;
var bullet;
var bg;
var bgImg;
var hostage;
var hostageImg;
var knife;
var knifeImg;
var police;
var policeImg;

function preload(){
soldierImg = loadImage("Hero Image.png");
terroristImg = loadImage("Villian Image.png");
gunImg = loadImage("Gun Image.png");
bgImg = loadImage("Bg Image.jpg");
hostageImg = loadImage("Hostage Image.png");
knifeImg = loadImage("Knife Image.png");
policeImg = loadImage("Police Group Image.png");
}
function setup() {
  createCanvas(1000,800);
  
  terrorist = createSprite(850,700,20,20);
  terrorist.addImage(terroristImg);

  soldier = createSprite(250,700, 20, 20);
  soldier.addImage(soldierImg);

  gun = createSprite(285,700,20,20);
  gun.addImage(gunImg);

  bullet = createSprite(300,690,20,5);

  hostage = createSprite(820,750,20,20);
  hostage.addImage(hostageImg);

  knife = createSprite(900,690,20,20);
  knife.addImage(knifeImg);
}

function draw() {
  background(bgImg);
  textSize(50);
  fill("black");
  text("Police Shooting Game", 250, 100);
  

  if(keyDown("space")){
    bullet.velocityX = 100;
    terrorist.destroy();
    knife.destroy();
  }
  
  if(terrorist.destroy){
    police = createSprite(850,700,20,20);
    police.addImage(policeImg);
    textSize(35);
    fill("brown");
    text("Congratulations Officer! You did a good job", 250,400);
  }
  drawSprites();
}



