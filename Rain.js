class Rain {
    constructor(x, y, r) {
        this.body = null;
        this.radius = null;
    }

    setup(){
        var x = random(1200)
        var y = random(400);
        var r = random(5) + 10;
        this.body = Bodies.circle(x, y, r)
        this.radius = r;
        World.add(world, this.body)
    }

    display() {

        if(this.body === null){
            this.setup();
        }

        push()
        translate(this.body.position.x, this.body.position.y)
  //      circleMode(CENTRE)
        circle(0, 0, this.radius)
        pop()

        if(this.body.position.y > 600){
            this.body = null;
        }
    }



}
