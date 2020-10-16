
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	dusIMG = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600,700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground =new Ground(width/2, 675, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	
	

	 dustbinObj=new Dustbin(1200,657.2);
	 paperObject=new Paper(200,450,70);
    
	 

	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height:800,
		  wireframes: true
		}
	  });
  
	  Engine.run(engine);
	  Render.run(render);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
 

  drawSprites();
  paperObject.display();
  ground.display();
  dustbinObj.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-80});
  
	}
}



