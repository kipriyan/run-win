// Creating variables

var myX = 100, myY = 565,vragX = 770,vragY = 550,vrag1X = 1770,vrag1Y = 550,vrag2X = 1770,vrag2Y = 550,skorostY=5,X=800,Y=600,jivoti=15,t,br,fonX=0,fonY=0,plX=800,plY=480;
var kebabche = new Image();
kebabche.src="test3.png";
var lol = new Image();
lol.src="nosht1.png";
var lol3 = new Image();
lol3.src="1155_img_gallery.jpg";
var lol7 = new Image();
lol7.src="dojo.png";
//var pepo=["pepo_0.png","pepo_1.png","pepo_2.png","pepo_3.png","pepo_4.png","pepo_5.png","pepo_6.png","pepo_7.png","pepo_8.png",];
var brkartinka=0;
function update() {
    ++t;
    brkartinka+=0.3;
    if(brkartinka>8){
        brkartinka=0;
    }
    if(t==30){
        t=0
    }
myY=myY+skorostY;
    if(myY>=565){
       myY=myY-skorostY;
    }


   
vragX-=4;
    plX-=4;
   if(vragX<=0){
       vragX=800;
   }
    if(plX<=-300){
        plX=800;
    }
    vrag1X-=7;
   if(vrag1X<=0){
       vrag1X=1500;
   }
  vrag2X-=6;
   if(vrag2X<=0){
       vrag2X=3000;
   }
    skorostY+=0.1;
    fonX-=1;
     if(areColliding(myX,myY,30,30,plX,plY,300,20)){
      myY=plY-30;
         if(isKeyPressed[32]){
            skorostY=-5;  
         }
 }
}

function draw() {

    context.fillStyle = "red";
          context.drawImage(lol7,fonX,fonY,80000,600); 
 // context.drawImage(pepo[Math.floor(brkartinka)],myX, myY, 30,30);
context.drawImage(lol,myX, myY, 30,30);
      context.drawImage(kebabche, vragX, vragY, 50,50);
      context.drawImage(kebabche,vrag1X, vrag1Y, 50,50);
          context.drawImage(kebabche,vrag2X, vrag2Y, 50,50);
    context.fillRect(plX,plY,300,20);
  context.drawImage(lol3,X,Y,800,600); 
  for(br=0;br<jivoti;++br){
      context.fillRect(br*35,0,30,10);    
  }
       if(areColliding(myX,myY,30,30,vragX,vragY,30,30)){
  --jivoti;
      vragX=800;       
   }
       if(areColliding(myX,myY,30,30,vrag1X,vrag1Y,30,30)){
           --jivoti;
  vrag1X=1500;
   }
           if(areColliding(myX,myY,30,30,vrag2X,vrag2Y,30,30)){
           --jivoti;
  vrag2X=3000;
   }
          context.font="50px Times New Roman";
           context.fillText(jivoti,100,300);
           if(jivoti<=0){
               X=0;
               Y=0;
                        context.fillStyle = "black";  
                 context.font="80px Times New Roman";
           context.fillText("game over",100,300);
           }
};

function keyup(key) {
    // Show the pressed keycode in the console
   
    console.log("Pressed", key);
};

function mouseup() {
    if(myY>=540){
 skorostY=-5;
    }
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};