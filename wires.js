//Wires
let shapeSizeDiameter = 20
let pairs = []
let startPos
let endPos
let activeWire = 0
let activeTimer = false
let timer = 0

function wiresExercise(){
  //setup the locations of circles
  exerciseChoice = 3
  push()
  noStroke()
  pairs.push(new Pair('red', 1))
  pairs.push(new Pair('green', 2))
  pairs.push(new Pair('blue', 3))
  activeTimer = true
  pop()
}
  
function checkFinished(){
  for(let i = 0; i < pairs.length;i++){
    if(!pairs[i].done){
      return
    }
  }
  pairs = []
  winGameSound.play()
  resetTimer()
}

class Pair{
  constructor(colorChoice, id, firstCircle, secondCircle, active, c1, c2){
    this.done = false
    this.id = id
    this.firstCircle = new Vector(getRandX(),getRandY())
    this.secondCircle = new Vector(getRandX(),getRandY())
    this.colorChoice = colorChoice
    push()
    fill(this.colorChoice)
    this.c1 = circle(this.firstCircle.x,this.firstCircle.y,shapeSizeDiameter)
    this.c2 = circle(this.secondCircle.x,this.secondCircle.y,shapeSizeDiameter)
    this.active = 0 //0 is none, 1 is first, 2 is second
    pop()
  }
  checkValid(){
    if(activeWire == 0 || activeWire == this.id){
      var distFirst = getDist(mousePos, this.firstCircle)
      var distSecond = getDist(mousePos, this.secondCircle)
      if(distFirst <= shapeSizeDiameter / 2){
        if(this.active == 0){
          this.active = 1
          startPos = mousePos
          activeWire = this.id;
          return true
        } else if(this.active == 2){
          this.endLine()
          return true
        }
      }else if(distSecond <= shapeSizeDiameter / 2){
        if(this.active == 0){
          this.active = 2
          startPos = mousePos
          activeWire = this.id;
          return true
        }else if(this.active == 1){
          this.endLine()
          return true
        }
      }
    }
    return false
  }
  endLine(){
    connectWireSound.play()
    push()
    noStroke()
    fill(this.colorChoice)
    this.c1 = circle(this.firstCircle.x,this.firstCircle.y,shapeSizeDiameter)
    this.c2 = circle(this.secondCircle.x,this.secondCircle.y,shapeSizeDiameter)
    this.active = 0 //0 is none, 1 is first, 2 is second
    pop()
    push()
    stroke(this.colorChoice)
    strokeWeight(5)
    line(this.firstCircle.x, this.firstCircle.y, this.secondCircle.x, this.secondCircle.y)
    pop()
    activeWire = 0;
    this.done = true
    checkFinished()
  }
  
}
