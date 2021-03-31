var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
//var score = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
	youWin=loadImage("images/you-win-1.jpg")

}

function setup() {
	createCanvas(800, 653);

	 fairyVoice.play();

	fairy = createSprite(130, 500);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.setCollider("rectangle",0,0,1000,1300);

	star = createSprite(random(150,750),30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

    var starBody_op={
	restitution:1	
	}
 
	starBody = Bodies.circle(star.x , star.y , 5 , starBody_op);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  /*fill("yellow");
  text(mouseX+","+mouseY,mouseX,mouseY);
  fill("yellow");
  textSize(30);
  textStyle(BOLDITALIC);
  text("Score:"+score,60,65);*/
  //star.debug = true;
  star.x = starBody.position.x;
  star.y = starBody.position.y;
  //fill("yellow");
  //text(mouseX+","+mouseY,mouseX,mouseY);
  //ellipseMode(RADIUS);
  //ellipse(starBody.position.x,starBody.position.y,20,20);
  var starBody_opt={
	isStatic:true
  }
  
  if(star.isTouching(fairy)){
	  //score = score + 1;
	  star.velocityY=0;
	  
	// fairy.velocityX=0
	 starBody = Bodies.circle( star.x, star.y , 5 , starBody_opt);
	 star.addImage(starImg);
	 fairy.x=400;
	 star.x=525;
	 star.y =475;
	 star.display();
	}
	  /*
	  star = createSprite(random(150,750),30);
      
      star.scale = 0.2;	
	  star.x = starBody.position.x;
      star.y = starBody.position.y;
	  Engine.update(engine);
	  star.velocityY=5;
	  //return star,starBody;
	  //return starBody;*/
	  
  

if(keyDown(LEFT_ARROW)){
		fairy.x = fairy.x-10;
	}
	if (keyDown(RIGHT_ARROW)) {
		fairy.x = fairy.x+10;
	  }

	 /* if(score===100){
		  background(youWin);
		  star.velocityY=0;
		  starBody.velocityY=0;
		  //fairy.addImage(youWin)
		  fairy.remove();
		  starBody.remove();
		  star.remove();*/
	  
  drawSprites();

}

function keyPressed() {
	//write code here
	
	
}
