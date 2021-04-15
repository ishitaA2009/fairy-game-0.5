const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload() {
    backgroundImg = loadImage("images/forest2.jfif");
    fairyImg = loadImage("images/fairy.png")
}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-20);
    engine = Engine.create();
    world = engine.world;

    fairy = createSprite(displayWidth/2,200);
    fairy.addImage(fairyImg);
    fairy.scale=0.3;
    fairy.velocity=1;
    
    edges = createEdgeSprites();
}

function draw(){

    background(backgroundImg);
    Engine.update(engine);
    
    if(fairy.x<displayWidth){
    fairy.x+=1;
    }
    
    

    drawSprites();
}

