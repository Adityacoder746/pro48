class Poison {
    constructor(x,y){
   this.body= createSprite(x,y)
  this.image=loadImage("poison.png")
  this.body.debug = false
  this.body.setCollider("circle",0,0,100)
  this.body.addImage(this.image)
  this.body.lifetime=100
  this.body.scale=0.2
    } 
}