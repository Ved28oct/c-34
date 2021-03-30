class Ball {
    constructor(x,y,radius){
        this.body=Bodies.circle(x,y,radius);
        this.r=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x,pos.y,this.r,this.r);

    }
}