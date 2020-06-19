class Slingshot {
    constructor(A, B){
        var options = {
            length: 20,
            stiffness: 0.04,
            bodyA: A,
            pointB: B

        }
        this.Slingshot = Matter.Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    fly() {
        this.Slingshot.bodyA = null;

    }
    display() {
        if (this.Slingshot.bodyA){
        line(this.Slingshot.bodyA.position.x, this.Slingshot.bodyA.position.y, this.Slingshot.pointB.x, this.Slingshot.pointB.y);
    }
    }


}