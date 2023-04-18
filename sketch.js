var naruto,naruto_running;
var ground,groungImage
var backgroundImage
var score=0
var invisibleGround
var newImage;
var obsticles
var obs
var noddles,noddlesImage,noddlesGroup
var gamestate="play"
var soundHAPPY, soundSAD
var reset,reset_i

function preload(){
   naruto_running = loadImage("Assets/giphy.gif");
backgroundImage= loadImage("Assets/bgny.jpg")
    groundImage = loadImage("Assets/ground.png")
   obsticlesImage= loadImage("Assets/rock.png")
   noddlesImage= loadImage("Assets/Ramen-Bowl.png")
   soundSAD= loadSound("Assets/sad.sound.wav")
   soundHAPPY= loadSound("Assets/happy.sound.wav")
    reset_i= loadImage("Assets/reset.png")
}

function setup(){
    createCanvas(700,300);

       naruto=createSprite(60,160,20,50);
        naruto.addImage( naruto_running)
        naruto.scale=0.3
        naruto.debug=true
        naruto.setCollider("rectangle",0,0,200,410)

       ground=createSprite(300,300,600,20)
       ground.addImage(groundImage)

     
      reset=createSprite(350,150)
       reset.addImage(reset_i)
       reset.scale = 0.03


   /* obsticles= createSprite(120,180,30,20)
    obsticles.addImage(obsticlesImage)
    obsticles.scale=0.03*/
obs=new Group()
noddlesGroup=new Group()

ground.x = ground.width /2;
 // ground.velocityX = -7;
 

  invisibleGround = createSprite(200,230,400,10);
  invisibleGround.visible = false;

  
}
function draw(){
    background (backgroundImage)
    if(gamestate==="play"){
        ground.velocityX = -7;
  
        obsticles1()
        noddles1()

        if(keyDown("SPACE")&& naruto.y>=100){
            naruto.velocityY=-8
    } 
reset.visible=false
     

    if(ground.x<100){
        ground.x=ground.width/2;
        ground . velocityX= -4
    }

    if(obs.isTouching (naruto)){

        gamestate="end"
        soundSAD.play()
    }

    if(noddlesGroup.isTouching(naruto)){

        noddlesGroup[0].destroy()
        score+=5
        soundHAPPY.play()
    }
    
    }
    
   // obsticles1()
 //noddles1()
   // if(keyDown("SPACE")&& naruto.y>=100){
     //   naruto.velocityY=-8
      

 
  // if(ground.x<100){
    //    ground.x=ground.width/2;
      //  ground . velocityX= -4
   // }

if(gamestate==="end"){

obs.destroyEach()
ground.velocityX=0

gameOver()
reset.visible=true

}



    naruto. velocityY=naruto.velocityY+0.5

naruto.collide(invisibleGround)
drawSprites()   

//if(obs.isTouching (naruto)){

  //  obs[0].destroy()
//}
//if(noddlesGroup.isTouching(naruto)){

    //noddlesGroup[0].destroy()
   // score+=5
//}




 textSize(20);
text(`Score:${score}`, width - 200, 50);
textAlign(CENTER, CENTER);

}

    


function obsticles1(){

    if(frameCount%90==0){
         obsticles=createSprite(600,200,30,50)
         obsticles.addImage(obsticlesImage)
           obsticles.velocityX=-3
          obsticles.scale=0.03
       obs.add(obsticles)
       obsticles.debug=true
    }
    

    
    
}


function noddles1(){
    if(frameCount%80==0){
    noddles=createSprite(random(300,600),70,30,50)
    noddles.addImage(noddlesImage)
    noddles.velocityX=-3
    noddles.scale=0.09
    noddlesGroup.add(noddles)
    noddles.debug=true
}}
function gameOver(){
    swal ({
        title:`G@ME OVER `,
        text:" OOps,better luck next time...!!!",
        imageUrl:"https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize:"100x100",
        confirmBottonText:"TH@NKS FOR PL@YING"
    })
}
