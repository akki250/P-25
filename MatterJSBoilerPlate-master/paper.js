class Paper {
    constructor(x, y,width ,height,angle) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':3.0
      }
      this.body = Bodies.circle(x, y,100,options,100);
         
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      
    
      
      fill("white");
      circle(100,100,50);
      pop();
    }
  };








