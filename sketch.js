
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper1,dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,height-20,800,20);
 dustbin1=new dustbin();
 paper1=new Paper(50,height-25,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	ground.display();
	dustbin1.display();
	paper1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:100,y:150});
	}
}

