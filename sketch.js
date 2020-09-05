const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(5000,400);
    engine = Engine.create();
    world = engine.world;
    /*platform = new Ground(150, 305, 300, 170);
    box1 = new Box(750,320,70,70);
    box2 = new Box(880,320,70,70);
    pig1 = new Pig(1200, 350);
    log1 = new Log(810,300,300, PI/2);
    box3 = new Box(750,280,70,70);
    box4 = new Box(880,280,70,70);
    pig3 = new Pig(12000, 220);
    log3 =  new Log(810,260,300, PI/2);
    box5 = new Box(810,210,70,70);
    log4 = new Log(810,10,150, PI/7);
    log5 = new Log(870,100000,150, -PI/7);
    
    log6 = new Log(230,180,80, PI/2);*/

    ground = new Ground(600,height,10000,20);
    bird = new Bird(200,50);
 
    block1 = new Box(530,235,30,40);
    block2 = new Box(560,235,30,40);
    block3 = new Box(590,235,30,40);
    block4 = new Box(620,235,30,40);
    block5 = new Box(650,235,30,40);
    block6 = new Box(680,235,30,40);
    block7 = new Box(710,235,30,40);
    block8 = new Box(740,235,30,40);
    block9 = new Box(770,235,30,40);
    block10 = new Box(800,235,30,40);
    

    block11 = new Box(560,195,30,40);
    block12 = new Box(590,195,30,40);
    block13 = new Box(620,195,30,40);
    block14 = new Box(650,195,30,40);
    block15 = new Box(680,195,30,40);
    block16 = new Box(710,195,30,40);
    block17 = new Box(740,195,30,40);
    block18 = new Box(770,195,30,40);
 
    block19 = new Box(590,155,30,40);
    block20 = new Box(620,155,30,40);
    block21 = new Box(650,155,30,40);
    block22 = new Box(680,155,30,40);
    block23 = new Box(710,155,30,40);
    block24 = new Box(740,155,30,40);

    block25 = new Box(620,115,30,40);
    block26 = new Box(650,115,30,40);
    block27 = new Box(680,115,30,40);
    block28 = new Box(710,115,30,40);

    block29 = new Box(650,75,30,40);
    block30 = new Box(680,75,30,40);

    /*block31 = new Box(850,235,30,40);
    block32 = new Box(880,235,30,40);
    block33 = new Box(910,235,30,40);
    block34 = new Box(940,235,30,40);
    block35 = new Box(970,235,30,40);
    block36 = new Box(1000,235,30,40);
    block37 = new Box(1300,235,30,40);
    block38 = new Box(1600,235,30,40);
    block39 = new Box(1900,235,30,40);
    block40 = new Box(2200,235,30,40);
    block41 = new Box(2500,235,30,40);
    block42 = new Box(2800,235,30,40);
    block43 = new Box(3100,235,30,40);
    block44 = new Box(3400,235,30,40);
    block45 = new Box(3700,235,30,40);
    block46 = new Box(4000,235,30,40);
    block47 = new Box(4300,235,30,40);
    block48 = new Box(4600,235,30,40);
    block49 = new Box(4900,235,30,40);
    block50 = new Box(5200,235,30,40);

    block51 = new Box(880,195,30,40);
    block52 = new Box(910,195,30,40);
    block53 = new Box(940,195,30,40);
    block54 = new Box(970,195,30,40);
    block55 = new Box(1000,195,30,40);
    block56 = new Box(1300,195,30,40);
    block57 = new Box(1600,195,30,40);
    block58 = new Box(1900,195,30,40);
    block59 = new Box(2200,195,30,40);
    block60 = new Box(2500,195,30,40);
    block61 = new Box(2800,195,30,40);
    block62 = new Box(3100,195,30,40);
    block63 = new Box(3400,195,30,40);
    block64 = new Box(3700,195,30,40);
    block65 = new Box(4000,195,30,40);
    block66 = new Box(4300,195,30,40);
    block67 = new Box(4600,195,30,40);
    block68 = new Box(4900,195,30,40);*/


    slingshot = new SlingShot(bird.body,{x:200, y:50});

}

function draw(){
    background("white");
    Engine.update(engine);
    /*strokeWeight(4);
    box1.display();
    box2.display();
    
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    platform.display();
    log6.display();*/
    ground.display();
    bird.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();

    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();

    block25.display();
    block26.display();
    block27.display();
    block28.display();

    block29.display();
    block30.display();

    /*block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    //block38.display();
    //block39.display();
    //block40.display();

    /*block41.display();
    block42.display();
    block43.display();
    block44.display();
    block45.display();
    block46.display();
    block47.display();
    block48.display();
    block49.display();*/

    /*block50.display();
    block51.display();
    block52.display();
    block53.display();
    block54.display();*/

    //block55.display();
    //block56.display();
    //block57.display();
    //block58.display();

    //block59.display();
    //block60.display();

    //block61.display();
    //block62.display();
    //block63.display();
    //block64.display();
    //block65.display();
   // block66.display();
   // block67.display();
    //block68.display();*/

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
     World.remove(world,bird.body);
     bird = new Bird(200,50)
     //console.log("here");
     slingshot.attach(bird.body);
    }
}