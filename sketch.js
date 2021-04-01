const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground,stage1,stage2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var box21,box22,box23,box24,box25

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,600,1200,20);
    stage1= new Ground(380,400,250,10);
    stage2= new Ground(900,300,350,10);
    
    box1=new Box(900,200,40,50);
    box2=new Box(860,200,40,50);
    box3=new Box(820,200,40,50);
    box4=new Box(780,200,40,50);
    box5=new Box(940,200,40,50);
    box6=new Box(980,200,40,50);
    box7=new Box(1020,200,40,50);

    box8=new Box(900,100,40,50);
    box9=new Box(860,100,40,50);
    box10=new Box(820,100,40,50);
    box11=new Box(940,100,40,50);
    box12=new Box(980,100,40,50);

    box13=new Box(900,30,40,50);
    box14=new Box(860,30,40,50);
    box15=new Box(940,30,40,50);

    box16=new Box(900,10,40,50);

    box17=new Box(400,300,40,50);
    box18=new Box(440,300,40,50);
    box19=new Box(360,300,40,50);
    box20=new Box(320,300,40,50);

    box21=new Box(400,200,40,50);
    box22=new Box(360,200,40,50);

    box23=new Box(380,100,40,50);
}

function draw(){
    background(rgb(253,253,170));
    Engine.update(engine);
    fill("rgb(128,200,225)");
    textSize(32);
    text("draw the hexagonal stone and release it,to launch it towards the blocks",20,40)
   

    ground.display();
    stage1.display();
    stage2.display();
    
    fill("pink")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("turquoise")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("purple")
    box13.display();
    box14.display();
    box15.display();

    fill("rgb(253,253,120)")
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    fill("purple")
    box21.display();
    box22.display();

    fill("pink")
    box23.display();
}
