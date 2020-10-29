const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions=[];
var particles=[];
var plinkos=[];

var divisionHeight=300

function setup() {
  createCanvas(480,700);

  engine = Engine.create();
  world = engine.world;
  
  ground= new Ground(240,680,480);

  division1= new Divider(5,620);
  division2= new Divider(65,620);
  division3= new Divider(125,620);
  division4= new Divider(185,620);
  division5= new Divider(245,620);
  division6= new Divider(305,620);
  division7= new Divider(365,620);
  division8= new Divider(425,620);
  division9= new Divider(475,620);

  plinko1= new Plinko(50,70)

 for  (var i=40; i<=width; i=i+50){

    plinkos.push(new Plinko(i,75))
  
  }
  for  (var i=15; i<=width-10; i=i+50){
  
    plinkos.push(new Plinko(i,175))
  
  }


Engine.run(engine)
}
function draw() {

  Engine.update(engine);
  
  background("black"); 

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();

  plinko1.display();
  drawSprites();
}