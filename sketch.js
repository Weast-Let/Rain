const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var AmmountOfDrops = []
var maxDrops = 100;

function preload(){
    
}

function setup(){
   var canvas = createCanvas(600,1200)
    
   engine = Engine.create();
   world = engine.world;

   for(var i=0; i<maxDrops; i++){
       var r = new Rain();
    AmmountOfDrops.push(r)
   }
}

function draw(){
    background("black")

    Engine.update(engine);

    for(var i=0; i<maxDrops; i++){
      AmmountOfDrops[i].display();
    }

}   

