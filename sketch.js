var tomimg1
var gardenimg
var jerry,tom,jerryimg;

function preload() {
    tomimg1=loadAnimation("images/cat1.png")
    jerryimg=loadAnimation("images/mouse1")
    gardenimg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600)
tom.addAnimation("tomsleeping",tomimg1)
tom.scale=0.2;

jerry=createSprite(870,200)
jerry.addAnimation("mouseeating",jerryimg)
jerry.scale=0.2;
}








function draw() {

    background(gardenimg);
    //Write condition here to evalute if tom and jerry collide



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
