function preload() {
  //load game assets
 pimage=loadImage("frog.png")
 simage=loadImage("swamp.png")
 wimage=loadImage("worm.png")

}

score=0
function setup() {
  createCanvas(600,600);
  samp=createSprite(300,300,600,600)
    samp.addImage(simage)
    samp.scale=2.5
 player=createSprite(0,0,50,50)
 player.addImage(pimage)
 player.scale=.4

 objgroup=new Group()
}

function draw() {
  background("yellow");  
  player.x=mouseX
  player.y=mouseY
  if(frameCount%30==0){
 objgen()
   
  }
for(i=0;i<objgroup.length;i=i+1){
var t=objgroup.get(i)
if(player.isTouching(t)){
  t.destroy()
  t=null
  score = score+1 
}
  
}
drawSprites()
textSize(20)
text("your scoreis="+score,400,100)
}
function objgen(){
obj=createSprite(random(50,500),random(50,500),20,20)
obj.addImage(wimage)
obj.scale=random(.1,.4)
obj.shapeColor="violet"
obj.velocityX=random(-3,3)
obj.velocityY=random(-3,3)
objgroup.add(obj)


}

