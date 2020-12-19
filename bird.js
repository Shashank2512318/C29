class Bird extends Base {
    constructor(x, y) {
        super(x, y, 50, 50, 0);

        this.Image= loadImage("sprites/bird.png");
        



    }

    display() {
        
        super.display();

        //this.body.position.x= mouseX;
        //this.body.position.y= mouseY;
        
    }
}