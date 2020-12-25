class Dog {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.image = loadImage("images/dogImg.png");
        
        World.add(world, this.body);
    }
    display( ) {
        var pos = this.body.position;
        //rect(pos.x, pos.y, this.w, this.h);
        image(this.image, 250, 200, this.w, this.h);
        
    }
};