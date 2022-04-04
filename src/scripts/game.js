import Enemy from "./enemy";
import Character from "./main_character";
import Npc from "./npc";
import {Util} from './util';

class Game {
  constructor(options){
    this.bindPlayerControls = this.bindPlayerControls.bind(this);
    this.player = new Character({ pos: [window.innerWidth / 2.1, window.innerHeight / 2.2], vel: [0, 0], radius: 10, color: 'white' });
    this.npc = new Npc();
    this.dimX = options.dimX;
    this.dimY = options.dimY;
    this.enemies = [];
    this.addEnemies();
  }

  addEnemies(){
    for (let i = 0; i < 5; i++) {
      //this ungodly code is to specify the bounds of the enemies when they spawn! (at random positions)
      let enemy = new Enemy([Math.floor(Math.random() * (window.innerWidth / 1.6 - this.dimX) + this.dimX), Math.floor(Math.random() * (window.innerHeight / 1.3 - this.dimY) + this.dimY)])
      this.enemies.push(enemy)
    }
  }

  renderLevel(ctx){
    ctx.clearRect(1, 1, 1000, 1000);
    ctx.strokeStyle = "black";
    ctx.fillStyle = 'transparent';
    ctx.lineWidth = 5;
    ctx.strokeRect(window.innerWidth / 5.8, 30, window.innerWidth / 1.6, window.innerHeight / 1.3);
    ctx.stroke();
  }
  draw(ctx){
    //this will be responsible drawing the hostile npcs! and maybe main character too!
    // ctx.clearRect(window.innerWidth / 5.8, 30, window.innerWidth / 1.6, window.innerHeight / 1.3);
    this.renderLevel(ctx)


    this.npc.draw(ctx);


    this.enemies.forEach((enemy)=>{
      // i made a mistake here by only doing positive velocities :c
      enemy.vel = [Util.randomVel(), Util.randomVel()]
      enemy.move()
      enemy.draw(ctx);
    });
    
  }

  bindPlayerControls(ctx){
    let that = this;
    document.addEventListener('keydown', function (e) {
      if (e.code === 'KeyW') {
        const up = [0, -1];
        that.player.vel[0] += up[0]
        that.player.vel[1] += up[1]
        // that.player.move();
      }
      else if (e.code === 'KeyS') {
        const down = [0, 1];
        that.player.vel[0] += down[0]
        that.player.vel[1] += down[1]
        // that.player.move();
      }
      else if (e.code === 'KeyA') {
        const left = [-1, 0];
        that.player.vel[0] += left[0]
        that.player.vel[1] += left[1]
        // that.player.move();
      }
      else if (e.code === 'KeyD') {
        const right = [1, 0];
        that.player.vel[0] += right[0]
        that.player.vel[1] += right[1]
        // that.player.move();
      }
      that.player.move();
    })
  }



}
export default Game;