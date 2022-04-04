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
    ctx.fillStyle = "green"
    ctx.fillRect(window.innerWidth / 5.8, 30, window.innerWidth / 1.6, window.innerHeight / 1.3);
    ctx.fill();
  }
  draw(ctx){
    //this will be responsible drawing the hostile npcs! and maybe main character too!
    // ctx.clearRect(window.innerWidth / 5.8, 30, window.innerWidth / 1.6, window.innerHeight / 1.3);
    this.renderLevel(ctx)

    this.player.draw(ctx);

    this.npc.draw(ctx);


    this.enemies.forEach((enemy)=>{
      // i made a mistake here by only doing positive velocities :c
      let newVec = [Util.randomVel(), Util.randomVel()]
      enemy.move(newVec)
      enemy.draw(ctx);
    });
    
  }

  bindPlayerControls(ctx){
    let that = this;
    document.addEventListener('keydown', function (e) {
      if (e.code === 'KeyW') {
        that.player.move([0, -1])
      }
      else if (e.code === 'KeyS') {
        that.player.move([0, 1])
      }
      else if (e.code === 'KeyA') {
        that.player.move([-1, 0])
      }
      else if (e.code === 'KeyD') {
        that.player.move([1, 0])
      }

    })
  }



}
export default Game;