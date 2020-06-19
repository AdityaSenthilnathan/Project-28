class Paper {
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution:0.3,
            friction: 100.5,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,radius, options);
        this.rad = radius;
        World.add(world, this.body);
        this.img = loadImage('paper.png');
         this.a = createSprite(5,5,20,20);
        var paperlabel = 'paper';
        this.a.addImage(this.img); 
    }
    display(){
        
        var pos = this.body.position;
        //let c = color(255, 204, 0); 
        fill(0, 0, 255);
        //circle(pos.x,pos.y, 2 * this.rad);
         this.a.x = pos.x;
         this.a.y = pos.y;
         this.a.scale = .5;
        //(this.img,pos.x,pos.y);

    }
}
