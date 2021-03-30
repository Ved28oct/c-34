const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball1,box1,box2,box3,box4,box5;
var sling;

//console.log(arr[2][0]);


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ball1=new Ball(200,200,80);
    sling=new SlingShot(ball1.body,{x:500,y:50});
    box1=new Box(700,380,70,70);
    box2=new Box(700,310,70,70);
    box3=new Box(700,260,70,70);
    box4=new Box(700,190,70,70);
    box5=new Box(700,120,70,70);
}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
   ball1.display();
    sling.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});


}




