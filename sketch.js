var path,boy,cash,diamonds,jewelry,sword,apple,poison;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg,appleImg,poisonImg,winImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup,appleG,poisonG;

//Estados do Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Map.jpg");
  boyImg = loadAnimation("Steve.png");
  cashImg = loadImage("Bread.png");
  diamondsImg = loadImage("Filé.png");
  jewelryImg = loadImage("Cake.png");
  swordImg = loadImage("Spider.png");
  endImg =loadAnimation("fimdeJogo.png");
  appleImg =loadImage("Golden_Apple.gif");
  poisonImg =loadImage("Spider2.png");
  winImg =loadAnimation("Survivor.png");
}

function setup(){
  
  createCanvas(650,400);
// Movendo fundo
path=createSprite(800,200);
path.addImage(pathImg);
path.velocityX = -5;


//criando menino correndo
boy = createSprite(70,200,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();
appleG=new Group();
poisonG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.y = World.mouseY;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //código para reiniciar o fundo
  if(path.x < -100 ){
    path.x = width/1;
  }
  
    createCash();
    createDiamonds();
    createjewelry();
    createSword();
    createApple();
    createPoison();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+1;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+3;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();

       treasureCollection= treasureCollection + 5;
    }else if (appleG.isTouching(boy)) {
appleG.destroyEach();

treasureCollection= treasureCollection + 10; 
    }else if (poisonG.isTouching(boy)){
      poisonG.destroyEach();
      treasureCollection= treasureCollection - 3; 
    }
    else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;

         boy.addAnimation("SahilRunning",endImg);

        boy.x=325;
        boy.y=200;
        boy.scale=0.6;
        
         cashG.destroyEach();
         diamondsG.destroyEach();
         jewelryG.destroyEach();
         swordGroup.destroyEach();
         appleG.destroyEach();
        
        cashG.setVelocityXEach(0);
        diamondsG.setVelocityXEach(0);
        jewelryG.setVelocityXEach(0);
        swordGroup.setVelocityXEach(0);
        appleG.setVelocityXEach(0);
        poisonG.setVelocityXEach(0);
     
    }
  }
  if (World.frameCount % 7200 == 0) {
    boy.addAnimation("SahilRunning",winImg);
gameState=END;

    boy.x=325;
    boy.y=200;
    boy.scale=0.6;
    
     cashG.destroyEach();
     diamondsG.destroyEach();
     jewelryG.destroyEach();
     swordGroup.destroyEach();
     appleG.destroyEach();
    
    cashG.setVelocityXEach(0);
    diamondsG.setVelocityXEach(0);
    jewelryG.setVelocityXEach(0);
    swordGroup.setVelocityXEach(0);
    appleG.setVelocityXEach(0);
    poisonG.setVelocityXEach(0);
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Comida: "+ treasureCollection,10,385);
  text("Caça Norturna",10,30);
  textSize(10)
  fill(255)
  text("Você tem 4 Minutos para voltar para Casa com o máximo de comida que você pudê pegar.",245,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(600,Math.round(random(50, 350), 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.3;
  cash.velocityX = -4;
  cash.lifetime = 175;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(600,Math.round(random(50, 350), 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.3;
  diamonds.velocityX = -4;
  diamonds.lifetime = 175;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(600,Math.round(random(50, 350), 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityX = -5;
  jewelry.lifetime = 175;
  jewelryG.add(jewelry);
  }
}

function createApple() {
  if (World.frameCount % 500 == 0) {
  var apple = createSprite(600,Math.round(random(50, 350), 10, 10));
  apple.addImage(appleImg);
  apple.scale=0.3;
  apple.velocityX = -12;
  apple.lifetime = 50;
  appleG.add(apple);
  }
}

function createSword(){
  if (World.frameCount % 450 == 0) {
  var sword = createSprite(600,Math.round(random(50, 200), 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.07;
  sword.velocityX = -6;
  sword.lifetime = 90;
  swordGroup.add(sword);
  }
}
function createPoison(){
  if (World.frameCount % 350 == 0) {
  var poison = createSprite(600,Math.round(random(200, 350), 10, 10));
  poison.addImage(poisonImg);
  poison.scale=0.03;
  poison.velocityX = -8;
  poison.lifetime = 90;
  poisonG.add(poison);
  }
}
