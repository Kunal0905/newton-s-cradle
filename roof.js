class Roof{
    constructor(bodyA,bodyB){
        var op = {
            bodyA : body1,
            bodyB : body2,
            length : 50,
            stiffness : 0.05
        }
        this.body = Matter.Constraint.create(op)
        World.add(world,this.body)
    }
    display(){
        var a = this.body.bodyA.position
        var b = this.body.bodyB.position
        line(a.x,a.y,b.x,b.y)
    }
}