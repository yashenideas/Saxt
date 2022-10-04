

	var canvas = document.querySelector("canvas");


	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var c = canvas.getContext('2d');
// c.fillStyle = 'rgba(255,0,0,0.5)';
// // 	c.fillReact(x,y, width,height);
// 	c.fillRect(100,100, 100,100);
// 	c.fillStyle = 'rgba(0,0,255,0.5)';
// 	c.fillRect(400,100, 100,100);
// 	c.fillStyle = 'rgba(0,255,0,0.5)';
// 	c.fillRect(300,300, 100,100);
// 	console.log(canvas);

// 	c.beginPath();
// 	// c.moveTo(x,y);
// 	c.moveTo(50,300);

// 	//to create a line to to
//     //new point c.lineTo(x,y);
// 	c.lineTo(300,100);
// 	// you need stroke method for showing
// 	c.lineTo(400,300); 
// 	c.strokeStyle = "#fa97c3";
// 	c.stroke();

// 	//Ark circle 
// // c.arc(x:Int, y:Int, r:Int,startAngle:
// // 	Float, endAngle:Float,
// // 	drawCounterClockwise:Bool(false));
// for (var i = 0; i <336; i++) {
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;
// 	var r = Math.random() * 250;
// 	var g = Math.random() * 250;
// 	var b = Math.random() * 250;
// 	var a = Math.random() * 250;
// 	c.beginPath();
// 	c.arc(x, y, 30, 0, Math.PI*2,false);
// 	c.strokeStyle="rgba("+r+","+g+","+b+","+a+")";
// 	c.stroke();
// }
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;
// var dx = (Math.random() - 0.5)*12;
// var dy = (Math.random() - 0.5)*12;
// var radius = 30;

var mouse = {
	x:undefined,
	y:undefined
}
	var colorArray = [];
for (var i = 0; i <5; i++) {
	var r = Math.random() * 250;
	var g = Math.random() * 250;
	var b = Math.random() * 250;
	var a = Math.random() * 250;
	 var one  = "rgba("+r+","+g+","+b+","+a+")"; 
   colorArray.push(one); 
}
var maxRadius = 40;
var minRadius = 1 ;
window.addEventListener('mousemove',
	function(event){
		mouse.x = event.x;
		mouse.y = event.y; 
});

window.addEventListener('resize',function(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	init();
});

function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
	this.draw = function(){ 
		c.beginPath();
		c.arc(this.x, this.y , this.radius, 0, Math.PI*2,false);
		 c.fillStyle = this.color;
		 
		c.fill();
	}

	this.update = function(){
	if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		this.dx= -this.dx;	

	} 

	if (this.y + this.radius > innerHeight || this.y - this.radius < 0  ){
		this.dy = -this.dy;
	}
	this.x+= this.dx;
	this.y+= this.dy;this.draw();

	//interactivity

		if(mouse.x-this.x < 50 && mouse.x - this.x > -50
			&& mouse.y - this.y < 50 && mouse.y - this.y > -50
			){ 
				if(this.radius < maxRadius){
					this.radius+=1;
				}	
			}else if(this.radius > minRadius){
				this.radius -=1;
			}
		 
		this.draw();
	}

}


var circleArray = [];

for (var i = 0; i < 600; i++) { 
	var radius = Math.random()*3 +1;
	var x = Math.random() * (innerWidth - radius *2) + radius;
	var y = Math.random() * (innerHeight - radius *2) + radius;
	var dx = (Math.random() - 0.5)*8;
	var dy = (Math.random() - 0.5)*8;
	
	circleArray.push(new Circle(x,y,dx,dy,radius)); 

} 
	function init(){
		var circleArray = [];
  for (var i = 0; i < 600; i++) { 
	var radius = Math.random()*3 +1;
	var x = Math.random() * (innerWidth - radius *2) + radius;
	var y = Math.random() * (innerHeight - radius *2) + radius;
	var dx = (Math.random() - 0.5)*8;
	var dy = (Math.random() - 0.5)*8;
	
	circleArray.push(new Circle(x,y,dx,dy,radius)); 

} 
	}

console.log(circleArray);
function animate(){
	requestAnimationFrame(animate); 
	c.clearRect(0,0,innerWidth, innerHeight); 
			for (var i = 0; i < circleArray.length; i++) {
		 	circleArray[i].update();
			}
		 }

animate();