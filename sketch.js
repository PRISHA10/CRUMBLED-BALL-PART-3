const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var  ground;
var  circle;
var  leftrect,centrerect,rightrect;
var sling  

function preload(){
	dustbinImg=loadImage("greendustbin.png");
}
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	leftrect= new Box(480,575,20,100);
	centrerect= new Box(560,635,180,20);
	rightrect= new Box(640,575,20,100);
    circle = new Paper (120,156,50);
	Sling = new launcher(circle.body,{x:200,y:200})

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background('yellow');
  push ()
  fill ('grey')
  rect(ground.position.x,ground.position.y,width,10)
  pop ()
  rightrect.display();
  centrerect.display();
  leftrect.display();
  circle.display();
  Sling.display();
  image(dustbinImg,460,500,200,150)
  
}


function mouseDragged(){
 Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})	
}

function mouseReleased(){
Sling.fly()
}