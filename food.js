class Food {
    constructor(x,y){
   this.body= createSprite(x,y)
  this.image1=loadImage("apple.png")
  this.image2=loadImage("grapes.png")
  this.image3=loadImage("banana.png")
  this.body.debug = false
  this.body.setCollider("circle",0,0,100)
  var rand=random([1,2,3])
  switch(rand){
    case 1:this.body.addImage(this.image1);break;
    case 2:this.body.addImage(this.image2);break;
    case 3:this.body.addImage(this.image3);break;
    
  }
  this.body.scale=0.2
    } 
}