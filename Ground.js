class Ground {
    
    constructor(x,y,wid, hei){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,wid, hei, options);
        World.add(world, this.body);
         this.wid = wid;
         this.hei = hei;
        
    }
    display(){
        var pos = this.body.position;
        fill(255, 204, 0);
        rect(pos.x,pos.y, this.wid, this.hei);
        //fill = color("white");
    }
}