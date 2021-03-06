const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron1 = new Iron(600,400)
    rubber = new Rubber(400,300,50)
    rubber1 = new Rubber(400,300,50)
    rubber2 = new Rubber(400,300,5)
    rubber3 = new Rubber(400,300,5)
    rubber4 = new Rubber(400,300,5)
    rubber5 = new Rubber(400,300,5)
    stone = new Stone(400,400)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer.display();
    iron1.display();
    rubber.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    stone.display();

    
 
}