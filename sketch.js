var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;

function setup() {

  canvas = createCanvas(700,700);
  ball1 = createSprite(200, 200, 20, 20);
  ball2 = createSprite(200, 200, 20, 20);
  ball3 = createSprite(200, 200, 20, 20);
  ball4 = createSprite(200, 200, 20, 20);
  ball5 = createSprite(200, 200, 15, 15);
  ball6 = createSprite(200, 200, 15, 15);
  ball7 = createSprite(200, 200, 15, 15);
  ball8 = createSprite(200, 200, 15, 15);

  ball1.velocityX = +3;
  ball1.velocityY = +3;

  ball2.velocityX = -3;
  ball2.velocityY = -3;

  ball3.velocityX = +3;
  ball3.velocityY = -3;

  ball4.velocityX = -3;
  ball4.velocityY = +3;


  ball5.velocityX = +2;
  ball5.velocityY = +3;

  ball6.velocityX = -2;
  ball6.velocityY = -3;

  ball7.velocityX = +2;
  ball7.velocityY = -3;

  ball8.velocityX = -2;
  ball8.velocityY = +3;
  ball1.shapeColor = "blue";

  ball2.shapeColor = "blue";

  ball3.shapeColor = "blue";

  ball4.shapeColor = "blue";

  ball5.shapeColor = "red";

  ball6.shapeColor = "red";

  ball7.shapeColor = "red";

  ball8.shapeColor = "red";
  
}

function draw() {
  background("Yellow");

  edges = createEdgeSprites();

  ball1.bounceOff(edges);

  ball2.bounceOff(edges);

  ball3.bounceOff(edges);

  ball4.bounceOff(edges);

  ball5.bounceOff(edges);

  ball6.bounceOff(edges);

  ball7.bounceOff(edges);

  ball8.bounceOff(edges);
  drawSprites();
}