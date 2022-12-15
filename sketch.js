var gamestate="start"

function preload(){
 bg1=loadImage("bg1.jpg")
 bg2=loadImage("bg2.jpg")
 start=loadImage("start.png")
 mobile=loadImage("car.png")
 sph=loadImage("super heart.png")
 nasty=loadImage("germ.png")
 stacks=loadImage("paper.png")
 hero=loadImage("savior.png")
 cv=loadImage("virus.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  playButton=createSprite(width/2,height/2)
  playButton.addImage(start)

  car=createSprite(width/2,height-200)
  car.addImage(mobile)
  car.scale=0.5

  obstacles=new Group()
  saviors=new Group()
  addSprites(saviors,10,sph,0.5)
  addSprites(saviors,10,hero,0.5)
  addSprites(obstacles,10,nasty,0.5)
  addSprites(obstacles,10,stacks,0.5)
  addSprites(obstacles,10,cv,0.5)
}

function draw() { 
  if(gamestate=='start'){
    background(bg1);
    car.visible=false
    saviors.setVisible(false)
    if(mousePressedOver(playButton)){
      gamestate="play"
    }
  }
  if(gamestate=="play"){
    background("white")
    car.visible=true
    playButton.visible=false

    image (bg2,0,-height*19,width,height*20)

    camera.position.x=width/2
    camera.position.y=car.y-250


    if(keyIsDown(UP_ARROW)){
      car.y-=15
    }
    if(keyIsDown(LEFT_ARROW)&&car.x>100){
      car.x-=15
    }
    if(keyIsDown(RIGHT_ARROW)&&car.x<width-100){
      car.x+=15
    }
    
  }

  
  drawSprites();

}
function addSprites(group,number,image,scale,positions=[]){
  for(var i=0;i<number;i++){
    var x,y
    if(positions.length>0){
      x=positions[i].x
      y=positions[i].y
      image=positions[i].image
    }
    else{
      x=random (150,width-150)
      y=random (-height*19,height-400)
    }
    var sprite=createSprite(x,y)
    sprite.addImage(image)
    sprite.scale=scale
    group.add(sprite)
  }
}