class Paper{
  constructor(x, y, r) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0,
          density:1.2
      }
      this.body = Bodies.circle(x, y, (r-20)/2, options);
      this.radius = r;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.radius,this.radius)
      pop();
      
    }
}