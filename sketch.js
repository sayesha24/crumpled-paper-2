
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj,groundObject	
var world;
var paper1  
var dustbin2;


function preload(){

dustbin2= loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1= new Paper(200, 200);
	//dustbin2= new trashCan(1200, 530);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 
  groundObject.display();
  dustbinObj.display();
  paper1.display();
  
  //dustbin2.display();
  
}

