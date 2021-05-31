const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ground,ball

function setup() {
  createCanvas(800,400)
  engine=Engine.create()
  world=engine.world
  var ground1={
    isStatic:true
  }
  ground=Bodies.rectangle(200,300,400,20,ground1)
  World.add(world,ground)
  var ball1={
    restitution:1
  }
  ball=Bodies.circle(200,100,20,ball1)
  World.add(world,ball)
}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,40,40)


}