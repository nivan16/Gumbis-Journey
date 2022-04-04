import MovingObject from "./moving_object";
class Character extends MovingObject{
  constructor(options){
    super(options)
    this.attrTest()
  }
  attrTest(){
    console.log(this.pos);
  }
}
export default Character;