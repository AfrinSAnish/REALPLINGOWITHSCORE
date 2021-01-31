var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=300;
var score =0;
var particle;
var ground
var count=0;

var text1= 500;
var text2=100

var GameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  Engine.update(engine);

  textSize(20)
  text(text1,20,550)
  text(text1,100,550)
  text(text1,175,550)
  text(text1,250,550)
  text(text1,350,550)
  text(text2,425,550)
  text(text2,500,550)
  text(text2,580,550)
  text(text2,660,550)
  text(text2,730,550)

  text("Score:"+score,20,120)

  ground.display();

  //if(GameState!="end"){
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }
  // }
  // if(frameCount%60===0){
   //  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
  // }
 
 // if(GameState!="end"){
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
  //}

   //if(GameState!="end"){
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   //}
  }

 if (particle != null){
  particle.display();
  if (particle.body.position.y > 600){
      if (particle.body.position.x < 350){
          score=score+500 ;
          particle = null ;
        //  console.log("Hi")
         // console.log(particle.body.position.x)
    }
  }
}

console.log(GameState)
if(particle!=null){
  particle.display();

if (particle != null){
  particle.display();
  if (particle.body.position.y > 600){
      if (particle.body.position.x > 350){
          score=score+100 ;
          particle = null ;
        //  console.log("Hello")
         // console.log(particle.body.position.x)
  }
}
}
}

if(count>=5){
  GameState="end"
}

if(GameState==="end"){
  textSize(20)
  text("GAME OVER",width/2-50,height/2+50)
  text("<PRESS SPACE TO PLAY AGAIN>",width/2-150,height/2+90)
 // text2=" ";
}
}


function mousePressed(){
  if(GameState!=="end"&&count<=4)
  {
    count=count+1;
  particle=new Particle(mouseX,10,10,10);
  console.log("HI IM HERE"+"   "+ particle.body.position.x)
  }
}

function keyPressed(){
  if(keyCode ===32){
    GameState="play";
    count=0
  }
}