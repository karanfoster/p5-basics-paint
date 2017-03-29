var a = 50;
var b = 50;
var newWidth = 50;
var newHeight = a + b;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(50);
}

//draw function loops forever
function draw(){
    //background(50);
    if(mouseIsPressed){
        noStroke();
        fill(150,0,255,255,100);
   rect(mouseX,mouseY,newWidth,newHeight); 
        
    }
}