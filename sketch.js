const START=0;
const PLAY=1;
const END=2;
var bg,formBg
var form,game;
var gameState=START;


function preload(){
bg=loadImage("../download.jpg");
formBg=loadImage("../download-_1_.png");
}


function setup() {
  createCanvas(displayWidth-10,displayHeight-200);
  //createSprite(400, 200, 50, 50);
  
  
}

function draw() {
// if(gameState===START){
//   game.start();
// }
//  if(gameState===PLAY){
// // game.play();

// }
form=new Form();
form.display();
  
 

  drawSprites();
}