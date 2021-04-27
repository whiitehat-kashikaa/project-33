class Snow {
    constructor(x,y) {
      var options = {
          friction : 1,
          density : 1
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("snow4.webp");


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);

      if(frameCount % 5 === 0){
        if(pos.x > width || pos.y > height){
          Matter.Body.setPosition(this.body, {x : random(0 , 800) , y : random(0 , 800)});
        }
    }
    }
  }