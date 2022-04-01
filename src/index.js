import MovingObject from './scripts/moving_object.js'
let mover = new MovingObject({ pos: [300, 700], vel: [0, 0], radius: 10, color: 'blue' });

document.addEventListener("DOMContentLoaded",function(){
  let canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d')
  canvas.width = 1000;
  canvas.height = 1000;

  ctx.fillStyle = "green"
  ctx.fillRect(450, 50, 900, 800);
  ctx.fill();
  
  // ctx.beginPath();
  // ctx.fillStyle = "purple"
  // ctx.arc(200, 200, 50, 0, 2* Math.PI)
  // ctx.strokeStyle = "orange";
  // ctx.lineWidth = 10;
  // ctx.stroke();
  // ctx.fill();
  
  mover.draw(ctx);


})

document.addEventListener('keydown', function (e) {
  let canvas = document.getElementById("canvas")
  const ctx = canvas.getContext('2d')
  if(e.code === 'KeyW'){
    mover.move([0, -1])
    mover.draw(ctx);
  }
  else if (e.code === 'KeyS') {
    mover.move([0, 1])
    mover.draw(ctx);
  }
  else if (e.code === 'KeyA') {
    mover.move([-1, 0])
    mover.draw(ctx);
  }
  else if (e.code === 'KeyD') {
    mover.move([1, 0])
    mover.draw(ctx);
  }

})


