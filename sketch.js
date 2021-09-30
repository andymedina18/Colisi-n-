var staticRec, movingRec;

function setup() {
  createCanvas(1200, 800);
  
  staticRec = createSprite(400, 200, 80, 50);
  staticRec.shapeColor = "green";

  movingRec = createSprite(800, 550, 50, 80);
  movingRec.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

  console.log(movingRec.x - staticRec.x);

  //Algoritmo de choque
  if (staticRec.x - movingRec.x < staticRec.width/2 + movingRec.width/2
    && movingRec.x - staticRec.x < staticRec.width/2 + movingRec.width/2 
    && staticRec.y - movingRec.y < staticRec.width/2 + movingRec.width/2
    && movingRec.y - staticRec.y < staticRec.width/2 + movingRec.width/2) {
    
    staticRec.shapeColor = "red";
    movingRec.shapeColor = "red";
  } else {
    staticRec.shapeColor = "green";
    movingRec.shapeColor = "green";
  }

  drawSprites();
}