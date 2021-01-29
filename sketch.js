var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(500,400,30,60);
  car.shapeColor = "red";
  car.velocityX = 4;

  wall = createSprite(1000,400,100,180);
  wall.shapeColor = "white";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(fixedRect,movingRect)){
     textSize(40); fill("red"); 
     text("is touched",200,300); 
};

 BounceOff(car, wall);

  drawSprites();
}
