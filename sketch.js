var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, paperIMG ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	 
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	


	ground = new Ground (900,620, 1800, 10);
	paper1 = new Paper (250, 250, 30);
	dustbin1 = new DustBin (400 + 900,610, 200, 20);
	dustbin2 = new DustBin (490 + 900,500, 20, 200);
	dustbin3 = new DustBin (310 + 900,500, 20, 200);
	sling = new Slingshot (paper1.body, {x: 200, y: 200});
	Engine.run(engine);
	
  
}


function draw() {

  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin3.display();
  dustbin2.display();
  sling.display();
  
  //console.log(paper1.body.position);
  
  drawSprites();

 
}

//function keyIsDown("down")

function mouseDragged(){
	Matter.Body.setPosition(paper1.body, {x: mouseX, y: mouseY});
 
	

}

function mouseReleased(){

sling.fly();

}