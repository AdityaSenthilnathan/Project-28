class DustBin {
    
    constructor(x,y,wid, hei){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,wid, hei, options);
        World.add(world, this.body);
         this.wid = wid;
         this.hei = hei;
        this.img = loadImage("dustbingreen.png");      
    }
    display(){
        
        
        
        
        image(this.img, 1200, 400);
        this.img.resize(200, 200);
        
    }
}