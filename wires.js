//Wires
let shapeSizeDiameter = 15
let pairs = []
let startPos
let endPos
let activeWire = 0
let activeTimer = false
let timer = 0

function wiresExercise(){
  //setup the locations of circles
  exerciseChoice = 3
  noStroke()
  pairs.push(new Pair('red', 1))
  pairs.push(new Pair('green', 2))
  pairs.push(new Pair('blue', 3))
  activeTimer = true
}

function mousePressed(){
  //if mouse location is less than 15 above or below and
  //less than 15 left or right, then it
  if(exerciseChoice == 3){
    mousePos = new Vector(mouseX,mouseY)
    for(let i = 0; i < pairs.length;i++){
      if(pairs[i].checkValid(mousePos)){
        break
      }
    }
  }
}
  
function checkFinished(){
  for(let i = 0; i < pairs.length;i++){
    if(!pairs[i].done){
      return
    }
  }
  activeTimer = false
  wiresData.push(timer)
}

class Pair{
  constructor(colorChoice, id, firstCircle, secondCircle, active, c1, c2){
    this.done = false
    this.id = id
    this.firstCircle = new Vector(getRandX(),getRandY())
    this.secondCircle = new Vector(getRandX(),getRandY())
    this.colorChoice = colorChoice
    fill(this.colorChoice)
    this.c1 = circle(this.firstCircle.x,this.firstCircle.y,shapeSizeDiameter)
    this.c2 = circle(this.secondCircle.x,this.secondCircle.y,shapeSizeDiameter)
    this.active = 0 //0 is none, 1 is first, 2 is second
  }
  checkValid(mousePos){
    if(activeWire == 0 || activeWire == this.id){
      var distFirst = this.getDist(mousePos, this.firstCircle)
      var distSecond = this.getDist(mousePos, this.secondCircle)
      if(distFirst < shapeSizeDiameter / 2){
        if(this.active == 0){
          this.active = 1
          startPos = mousePos
          activeWire = this.id;
          return true
        } else if(this.active == 2){
          push()
          stroke(this.colorChoice)
          line(this.firstCircle.x, this.firstCircle.y, this.secondCircle.x, this.secondCircle.y)
          pop()
          activeWire = 0;
          this.done = true
          checkFinished()
          return true
        }
      }else if(distSecond < shapeSizeDiameter / 2){
        if(this.active == 0){
          this.active = 2
          startPos = mousePos
          activeWire = this.id;
          return true
        }else if(this.active == 1){
          push()
          stroke(this.colorChoice)
          line(this.firstCircle.x, this.firstCircle.y, this.secondCircle.x, this.secondCircle.y)
          pop()
          activeWire = 0;
          this.done = true
          checkFinished()
          return true
        }
      }
    }
    return false
  }
  getDist(vector1, vector2){
    var x = vector1.x - vector2.x
    var y = vector1.y - vector2.y
    return sqrt(pow(x, 2) + pow(y, 2));
  }
  
}
