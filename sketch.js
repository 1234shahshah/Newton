
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var bob1=createSprite(120,600,50,50)
var bob2=createSprite(240,600,50,50)
var bob3=createSprite(360,600,50,50)
var bob4=createSprite(480,600,50,50)
var bob5=createSprite(600,600,50,50)
rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0) 
rope2=new Rope(bob2.body,roof.body,-bobDiameter*2,0) 
rope3=new Rope(bob3.body,roof.body,-bobDiameter*2,0) 
rope4=new Rope(bob4.body,roof.body,-bobDiameter*2,0) 
rope5=new Rope(bob5.body,roof.body,-bobDiameter*2,0) 
var roof = createSprite(400,100,700,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



