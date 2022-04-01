class MovingObject{
  constructor(options){
    this.pos = options.pos;
    this.vel = options.vel;
    //these two will be different since I will use my own sprite(s?)!
    this.color = options.color;
    this.radius = options.radius;
  }

  draw(ctx){
    // ctx.clearRect(1,,900,90);
    ctx.beginPath();
    ctx.fillStyle = 'black'
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360)
    ctx.fill();
    ctx.stroke();
    // debugger;
  }
  //need to figure out proper velocity
  move(moves){
    this.pos[0] += moves[0];
    this.pos[1] += moves[1];
  }

}
export default MovingObject;
