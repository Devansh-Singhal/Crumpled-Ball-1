 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 var ball,ground,side,side1,side2;

function setup() {
	 createCanvas(800, 700);
  
	
	 engine = Engine.create();
	 world = engine.world;

	 ball = new Ball(100, 600, 20);

     ground = new Ground(400, 680, 800, 20);
  
	 side = new Dustbin(550, 620, 20, 100);
     side1 = new Dustbin(635, 660, 150, 20);
     side2 = new Dustbin(720, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ball.display();

  ground.display();

  side.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(ball.body, ball.body.position, 
{x:60, y: -60})
	}

  }


