class Stone {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.01
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.x = x
      this.y = y
      this.width = 90;
      this.height = 90;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('gray')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };