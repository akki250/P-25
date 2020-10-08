class Dustbin {
    constructor(x, y,width ,height,angle) {
      var options = {
        'isStatic':true,
        'density':15.0,
        'friction': 10,
        'restitution':0.1,
      };
      this.body = Bodies.rectangle(x, y, width,height,angle);
      this.width = width;
      this.height = height;
      this.angle = angle;   
      World.add(world, this.body);
    };
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
      
        
        fill("white");
        rect(0,0, this.width, this.height,this.angle);
        pop();
    };
  };