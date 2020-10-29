class Ground {
    constructor(x,y,width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,10,options);
      this.width = width;
      this.height = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };