class Log extends Base {
    constructor(x, y, h, angle) {
       super(x, y, 20, h, angle);
        
       this.Image= loadImage("sprites/wood2.png")
         
          Matter.Body.setAngle(this.body, angle);
          


    }


}