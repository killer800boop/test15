
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    lane = new plane(400,690,810,10)
	  hammer1 = new hammer(600,300,100,20)
    stone1 = new stone(500,400,60,60)
    rubber1 = new rubber(80,400,30)
    sand1 = new sand(200,400,5)
    sand2 = new sand(210,400,5)
    sand3 = new sand(220,400,5)
    sand4 = new sand(230,400,5)
    sand5 = new sand(230,400,5)
    iron1 = new iron(450,400,80,80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  lane.display()
  hammer1.display()
  stone1.display()   
  rubber1.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display() 
  sand5.display()  
  iron1.display() 
  
  drawSprites();
 
}



