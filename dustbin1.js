class trashCan 
{

    constructor(x, y)
{
var options= {

'isStatic': true, 
//'restitution': 3, 
'density': 5

}
this.body= Bodies.rectangle(x, y, 200, 250, options);
this.height= 250; 
this.width= 200; 
this.image= loadImage("dustbingreen.png");
World.add(world, this.body);


 }

 display(){


    var pos= this.body.position; 

    push()
    translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 200, 250);
    pop()
 }
}