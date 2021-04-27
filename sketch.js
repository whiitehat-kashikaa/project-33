// variables

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundimage, kidImage;
var kids, snowSprite;
var snowlings;

function preload(){

  //loading images
  backgroundimage = loadImage("snow1.jpg");
  kidImage = loadImage("kid jumping.png")
}

function setup() {

  // canvas
  createCanvas(800,700);

  // creating world
  engine = Engine.create();
  world = engine.world;

  // creating sprites
  kids = createSprite(400, 400, 50, 50);
  kids.addImage(kidImage);
  kids.scale = 0.5;

  snowlings = new Snow(0,0);
}

function draw() {

  // setting a background

  if(backgroundimage){
   background(backgroundimage);
  }

  Engine.update(engine);
  
  // walking

  if(kids.x < 800 && kids.x > 0 && kids.y > 0 && kids.x < 700){
  kids.x += 3;
  }
  else{
  kids.x = 400;
  }

  // display

  snowlings.display();
  drawSprites();
  
}