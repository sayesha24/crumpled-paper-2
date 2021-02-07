class Paper {

constructor(x, y){

var options={

    'isStatic': false, 
    'restitution': 0.3, 
    'friction': 0.5, 
    'density': 1.2


}
this.body= Bodies.circle(x, y, 55, options);
this.radius= 55; 
this.image= loadImage("paper.png"); 
Matter.Body.setVelocity(this.body, {x:19, y:-8}); 

World.add(world, this.body);
}
display(){

var pos= this.body.position; 
var angle= this.body.angle;

push()
translate(pos.x, pos.y);
rotate(angle);
fill("white");
imageMode(CENTER);
image(this.image, 0, 0, 55);
pop()
}
}