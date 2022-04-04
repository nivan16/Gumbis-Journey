class GameView{
  constructor(ctx, game){
    this.ctx = ctx;
    this.game = game;
  }

  start(){
    this.game.bindPlayerControls(this.ctx)
    setInterval(() => {
      // this.game.moveObjects();  //for when i make npcs!
      
      this.game.draw(this.ctx); //this will draw the npcs!
    }, 30)
  }
  // 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
}
export default GameView;