var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;

var division1;
var division2;
var division3;
var division4;
var division5;
var division6;
var division7;
var division8;
var division9;
var division10;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  division1 = new Divisions(80, 650, 20, 300);
  division2 = new Divisions(160, 650, 20, 300);
  division3 = new Divisions(240, 650, 20, 300);
  division4 = new Divisions(320, 650, 20, 300);
  division5 = new Divisions(400, 650, 20, 300);
  division6 = new Divisions(480, 650, 20, 300);
  division7 = new Divisions(560, 650, 20, 300);
  division8 = new Divisions(640, 650, 20, 300);
  division9 = new Divisions(720, 650, 20, 300);
  division10 = new Divisions(800, 650, 20, 300);

  //create division objects
  //for (var k = 0; k <=80; k = k + 80) {
    //divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  //}

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for(var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 50; j <=width; j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  

  
   
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
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
  division10.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10,))
     }
//spawnParticles();

}

function spawnParticles(){
  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10), 10, 10))
    particles = new Particle(Math.round(random(2, 800)), Math.round(random(2, 500)), 5)
    particle1.display();
    }
  
}





 






