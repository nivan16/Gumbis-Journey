class Npc{
  constructor(options){
    this.position = [600, 80]
  }
  draw(ctx){
    ctx.beginPath()
    ctx.fillStyle = 'lightpurple'
    ctx.arc(this.position[0], this.position[1], 10, 0, 360)
    ctx.fill();
    ctx.closePath();
  }
}
export default Npc;