var dog,dogImage1
var foodStock,foodS

function preload()
{
  dogImage1=loadImage("images/dogImg.png")
  dogimg=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog =createSprite(250,300,150,150)
  dog.addImage(dogimg)
  dog.scale=0.20


  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  textSize(30);

}


function draw() {  
  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage1)
     
   
  }

  drawSprites();
  
  fill("red")
  text("food remaining:"+foodS,170,200);
  text("note:press UP_RROW key to feed drago milk",130,10,300,20);

}


//function to rad values from DB
function readStock(data){
  foodS=data.val();
}


//Function to write value in DB
function writeStock(x){
  if(x<=0){
    x=0
    }else{
      x=x-1;
    }
  database.ref('/').update({
food:x
  })
}

