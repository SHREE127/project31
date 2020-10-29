class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }

      this.body = Bodies.circle(x,y,10,options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){

      fill("white")
      ellipseMode(RADIUS)
      ellipse(0,0,this.width,this.height)

      var pos = [this.body.position.x,this.body.position.y]
      this.trajectory.push(pos);
      
      for  (var i=0; i< this.trajectory.length; i++){
  
        ellipse(this.trajectory[i][0],this.trajectory[i][1])
      }

      //var plinkos=[]

    }
}
