var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var f2, f1;
var s1;
var passedFinish = 0;
var gold, bronze, silver;

function preload(){
  track = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("car4.png");
  ground = loadImage("ground.png");
  f2 = loadImage("f1.png");
  s1 = loadSound("sliding.mp3");
  gold = loadImage("gold.png");
  silver = loadImage("silver.png");
  bronze = loadImage("bronze.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacle = new Group();
  for(var i = 0 ; i<5; i++)
  {
    
  w = random(200, 950);
  h = random(-height*4, height-300);
  f1 = createSprite(w, h);
  f1.addImage("obstacle", f2);
  obstacle.add(f1);
  }
  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if(finishedPlayers === 4)
   {
     game.update(2);
   }
   if (gameState === 2) {
     console.log("End");
     game.displayRank();
   }

  }
 
  












