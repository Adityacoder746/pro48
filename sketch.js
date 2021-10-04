var score = 0
var gameState = "play"
function setup() {
  createCanvas(800,800);
  snake = new Snake(200,200)
  food = new Food(400,400)
  poison = new Poison(300,300)
  edges = createEdgeSprites()
}

function draw() {
  background(0);  
  textSize(20)
  snake.body.collide(edges)
  text("score "+score,width-200,50)
  drawSprites();
  if(gameState==="end"){
    textSize(50)
    text("Gameover",width/2,height/2)

  }
  
  if(snake.body.isTouching(food.body)){
    food.body.destroy()
    score++
    
  }
  if(snake.body.isTouching(poison.body)){
    snake.body.velocityY = 0
    snake.body.velocityX = 0
    gameState = "end"
  }
  if(gameState==="play"){
  if(keyDown(RIGHT_ARROW)){
    snake.body.velocityX=5
    snake.body.velocityY= 0
    snake.body.rotation= 90
  }

  if(keyDown(LEFT_ARROW)){
    snake.body.velocityX=-5
    snake.body.velocityY=0
    snake.body.rotation= -90
  }

  if(keyDown(UP_ARROW)){
    snake.body.velocityY=-5
    snake.body.velocityX=0
    snake.body.rotation= 0
  }

  if(keyDown(DOWN_ARROW)){
    snake.body.velocityY=5
    snake.body.velocityX=0
    snake.body.rotation=-180
  }

  if(frameCount%100===0){
    food.body.destroy()
    food=new Food(random(50,750),random(50,750))
  }

  if(frameCount%250===0){
    poison = new Poison(random(50,750),random(50,750))
  }
}
}