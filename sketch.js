var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
   
   music = loadSound("music.mp3");
   
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";

    block3= createSprite(490,580,200,30);
    block3.shapeColor = "pink";

    block4= createSprite(700,580,200,30);
    block4.shapeColor = "purple";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
ball.velocityX = 5;
ball.velocityY = 5;
}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(0,0,255);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "pink";
        music.play();
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "purple";
        music.stop();
    }

    drawSprites();
}