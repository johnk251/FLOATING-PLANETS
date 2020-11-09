



//CREATING CLASS PARTICLES TO HOLD ALL PROPERTIES ASSOCIATED WITH EACH PARTICLE
class particle{
constructor(){
//position vector for every particle
this.pos=createVector();
//random velocity for each particle
this.vel=createVector(random(-0.001,0.001),random(-0.01,0.01),random(-0.01,0.01))
//random acceleration for each particle
this.force=createVector(random(-0.001,0.001),random(-0.001,0.001),random(-0.001,0.001))
//random radius for each particle
this.r=random(20)
}
//rendering  particle as sphere with random radius
show(){
push()
noStroke()
translate(this.pos.x,this.pos.y,this.pos.z)
sphere(this.r);

pop()
}
//moving particles on the canvas 
move(x){
this.vel.add(this.force)
this.pos.add(this.vel)
this.vel.limit(x)

}
//checking edges and multipling the particle position with zero if particle move out of canvas
check_edges(){
if(this.pos.x>=width/2){
  
  this.pos.mult(0)
}
if(this.pos.y>=height/2){
  
  this.pos.mult(0)
}
if(this.pos.x<=-width/2){

  this.pos.mult(0)
}
if(this.pos.y<=-height/2){

  this.pos.mult(0)
}
if(this.pos.z<=-1000){
  
  this.pos.mult(0)
}
if(this.pos.z>=1000){
  
 this.pos.mult(0)
}

}








}









//initialising global variables
//defining the number of particle
let particles_size=500
let x=0
//array to store all particles
let particles=[]
//array to store all texture images
let image=[]


//preload all planet skin textures as images and adding them to image array
function preload(){

  img1 = loadImage('neptune.jpg');
  image.push(img1)
  img2 = loadImage('mars.jpg');
  image.push(img2)
  img3 = loadImage('venus.jpg');
  image.push(img3)
  img4 = loadImage('earth.jpg');
  image.push(img4)
  img5 = loadImage('jupiter.jpg');
  image.push(img5)
  img6 = loadImage('saturn.jpg');
  image.push(img6)
  img7 = loadImage('uranus.jpg');
  image.push(img7)
  img8 = loadImage('mercury.jpg');
  image.push(img8)
}


function setup() {
   
createCanvas(displayWidth*0.90,displayHeight*0.90,WEBGL)

background(0)
  
 //adding particles to particles array as new particle class instant
for (let i=0;i<particles_size;i++){
  particle[i]=new particle();
}

}

function draw() {
  
 //set canvas background color 
background(0)
//looping through all particles and images texture
  for (let i=0;i<particles_size;i++){
   
//map image array size to particle array size    
   let index=map(i,0,particles_size,0,7)
    texture(image[floor(index)])
    particle[i].show();
    particle[i].move(random(2,5));
    particle[i].check_edges();
   
    


  }


}


