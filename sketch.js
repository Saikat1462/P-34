const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg

function preload() {
  backgroundImg = loadImage("bg2.jpg");
}

function setup() {
  var canvas = createCanvas(1500,760);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,height,1200,20);
  block1 = new Block(500,335,30,40);

}

function draw() {
  background(backgroundImg)
  Engine.update(engine);

  ground.display();
  block1.display();

}

