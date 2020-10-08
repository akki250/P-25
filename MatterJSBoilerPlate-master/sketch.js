
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper=new Paper(20,100);
	ground=new Ground(400,295,800,5);
	dustbinL=new Dustbin(550,250,10,100,PI);
	dustbinR=new Dustbin(650,250,10,100,PI);
	dustbinB=new Dustbin(600,250,100,10,PI);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
 	
  	background("lightblue");
	 
  drawSprites();
  ground.display();
 paper.display();
 
 dustbinL.display();
 dustbinR.display();
dustbinB.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1500});
	}
}
