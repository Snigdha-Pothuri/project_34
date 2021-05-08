var database
var x
var y
var pencil
var position
function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
pencil=createSprite(200,200,20,20)
} 

function draw(){
 background(46,139,87);
 database.ref("Drawing").on("value",readPosition)
 pencil.x=mouseX
 pencil.y=mouseY
 drawSprites();
  
 fill(255,255,254);
 textSize(15);
database.ref("Drawing").update({
x:pencil.x,
y:pencil.y
})
drawSprites();
}
function readPosition(data){
  position = data.val();
  pencil.x=position.x;
  pencil.y=position.y;
}
