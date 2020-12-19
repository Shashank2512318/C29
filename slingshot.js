class Slingshot {
    constructor(Body, point) {
        var options= {
            bodyA:Body,
            pointB:point,
            stiffness:0.04,
            length:10
          }
        
          this.Image1= loadImage("sprites/sling1.png");
          this.Image2= loadImage("sprites/sling2.png");
          this.Image3= loadImage("sprites/sling3.png");
          
          this.sling= Constraint.create(options);
          World.add(myworld, this.sling);
    }




    display() {
        
        push();
        image(this.Image1, 220, 230);
        image(this.Image2, 195, 190);
        if(this.sling.bodyA!= null) {
        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.pointB;
        strokeWeight(10);
        stroke(48, 22, 8);
        if(pointA.x< 220) {
        line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+15);
        line(pointA.x-20, pointA.y, pointB.x+25, pointB.y+15);
        image(this.Image3, pointA.x-20, pointA.y, 10, 20);
        } else {
            line(pointA.x+20, pointA.y, pointB.x-20, pointB.y+15);
            line(pointA.x+20, pointA.y, pointB.x+25, pointB.y+15);
            image(this.Image3, pointA.x+25, pointA.y+5, 10, 20);
        }    
    }
        pop();

    }


    fly() {
        this.sling.bodyA= null;



    }
}