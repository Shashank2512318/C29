class Base {
    constructor(x, y, w, h, angle) {
        var options={
   
            restitution: 0.5,
            friction:1
        
          }
        this.Image= loadImage("sprites/base.png")
          this.body= Bodies.rectangle(x,y,w,h,options);
          World.add(myworld,this.body);

this.w= w;
this.h= h;

    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y)
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("red");
        //this.body.position.x= mouseX;
        //this.body.position.y= mouseY;
        imageMode(CENTER);
        image(this.Image ,0, 0, this.w, this.h);
        pop();
    }
}