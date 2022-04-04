import MovingObject from "./moving_object";

class Enemy extends MovingObject{
  constructor(position){
    super({pos: position, color: 'red', radius: 10, vel: [0,0]})
    // debugger;
  }
  
  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 360);
    ctx.fill();
    ctx.closePath();
  }



}
export default Enemy;