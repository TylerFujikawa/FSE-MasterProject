const defaultSpeed = 1
const speedIncrement = .75
const circleDiameter = 30
const pointCheckDistance = 5
const hitBuffer = 1
let cSpeed = defaultSpeed
let cPos = new Vector(300,300)
let nextPoint = new Vector(300,300)
let unit = new Vector(0,0)
let currentCircle = 0//max is 4
let drawCircle = false

function circlesExercise(){
  exerciseChoice = 1
  drawCircle = true
  newCircle()
  activeTimer = true
}
function checkNextPoint(){
  if(getDist(cPos, nextPoint) <= pointCheckDistance){
    nextPoint = new Vector(getRandX(), getRandY())
    unit = getDirectionUnitVector(cPos, nextPoint)
  }
  else{
    moveCircle()
  }
}
function getDirectionUnitVector(vec1, vec2){//normalized
  component = new Vector(vec2.x - vec1.x, vec2.y - vec1.y)
  magnitude = sqrt(pow(component.x, 2) + pow(component.y, 2))
  return new Vector(component.x / magnitude, component.y / magnitude)
}
function moveCircle(){
  v = new Vector(unit.x * cSpeed, unit.y * cSpeed)
  cPos = new Vector(cPos.x + v.x, cPos.y + v.y)
}
function newCircle(){
  cPos = new Vector(getRandX(), getRandY())
  nextPoint = new Vector(getRandX(), getRandY())
  unit = getDirectionUnitVector(cPos, nextPoint)
}
function checkClick(){
  let dist = getDist(mousePos, cPos)
  if(dist <= (circleDiameter / 2) + hitBuffer){
    console.log("target hit")
    currentCircle += 1
    cSpeed += speedIncrement
    newCircle()
    if(currentCircle == 5){
      circlesReset()
    }else{
      hitTargetSound.play()
    }
  }
}
function circlesReset(){
  winGameSound.play()
  drawCircle = false
  clearArea()
  //circlesData.push(timer)
  resetTimer()
  timer = 0
  cSpeed = defaultSpeed
  currentCircle = 0
}
