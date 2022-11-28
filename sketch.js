//vars
let mainMenu = true
let mousePos
let savedTimer

//typing
let textInput
let enterButton

//Data vars
//let circlesData = []
//let typingData = []
//let wiresData = []

//Images
let circles
let typing
let wires

//Buttons
let circleExerciseButton
let typingExerciseButton
let wiresExerciseButton
let mainMenuButton
//let dataMenuButton

//Exercises
let exerciseName = ""
let exerciseChoice = null //1 is circles, 2 is typing, 3 is wires

function setup() {
  createCanvas(600, 600)
  exerciseNameText = text(exerciseName, 0, 0)
  circleExerciseButton = createButton("Tracking\nCircles")
  circleExerciseButton.size(110, 60)
  circleExerciseButton.style("font-size", '18px')
  circleExerciseButton.mousePressed(loadExercise1).center()
  typingExerciseButton = createButton("Quick Type")
  typingExerciseButton.size(110, 60)
  typingExerciseButton.style("font-size", '18px')
  typingExerciseButton.mousePressed(loadExercise2).center()
  wiresExerciseButton = createButton("Connection")
  wiresExerciseButton.size(110, 60)
  wiresExerciseButton.style("font-size", '18px')
  wiresExerciseButton.mousePressed(loadExercise3).center()
  mainMenuButton = createButton("Main Menu")
  mainMenuButton.size(180,50)
  mainMenuButton.style("font-size", '20px')
  mainMenuButton.mousePressed(loadMainMenu).center().hide()
  //dataMenuButton = createButton("Data Menu")
  //dataMenuButton.mousePressed(loadDataMenu).center()
  replayButton = createButton("Replay")
  replayButton.size(90,30)
  replayButton.style("font-size", '16px')
  replayButton.mousePressed(replay).center().hide()
  textInput = createElement("textarea", "").hide()
  enterButton = createButton('Enter')
  enterButton.size(70,30)
  enterButton.style("font-size", '18px')
  enterButton.mousePressed(enter).hide()
  loadMainMenu()
}
function preload(){
  //load images
  soundFormats('mp3', 'ogg', 'wav')
  outputVolume(.4)
  hitTargetSound = loadSound('hitTarget.wav')
  connectWireSound = loadSound('connectWire.wav')
  wrongEnterSound = loadSound('wrongEnter.wav')
  winGameSound = loadSound('winGame.wav')
}
function draw() {
  mousePos = new Vector(mouseX, mouseY)
  if(exerciseChoice == 1 && drawCircle){
    clearArea()
    checkNextPoint()
    push()
    fill('white')
    stroke('red')
    strokeWeight(2)
    circle(cPos.x, cPos.y, circleDiameter)
    circle(cPos.x, cPos.y, circleDiameter / 2)
    circle(cPos.x, cPos.y, 1)
    pop()
  }
  updateTimer()
}
function updateTimer(){
  if(activeTimer){
    push()
    stroke('white')
    fill('white')
    rect(10,520,180,70)
    fill("black")
    textSize(32)
    text("Time: " + timer, 40, 560)
    if (frameCount % 60 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer ++;
    }
    pop()
  }else if(!activeTimer && exerciseChoice > 0){
    push()
    push()
    fill('#00ff26')
    strokeWeight(5)
    rect(0, 500, 200, 100)
    pop()
    fill("black")
    textSize(32)
    text("Time: " + savedTimer, 40, 560)
    pop()
  }
}
function resetTimer(){
  savedTimer = timer
  activeTimer = false
  timer = 0
}
function mousePressed(){
  if(exerciseChoice == 1){
    checkClick()
  }
  else if(exerciseChoice == 3){
    for(let i = 0; i < pairs.length;i++){
      if(pairs[i].checkValid()){
        break
      }
    }
  }
}

function clearCanvas(){
  push()
  fill('white')
  stroke('black')
  rect(0, 0, 600, 600)
  pop()
  
}

function getRandX(){
  return floor(random(220, 580))//exact so it doesnt go on lines
}
function getRandY(){
  return floor(random(220, 580))
}
function clearArea(){
  push()
  fill('white')
  stroke('black')
  strokeWeight(5)
  rect(200, 200, 400, 400)
  pop()
}
function replay(){
  if(exerciseChoice == 1){
    loadExercise1()
  }
  else if(exerciseChoice == 2){
    loadExercise2()
  }
  else if(exerciseChoice == 3){
    loadExercise3()
  }
}
class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  } 
}
function getDist(vector1, vector2){
  var x = vector1.x - vector2.x
  var y = vector1.y - vector2.y
  return sqrt(pow(x, 2) + pow(y, 2));
}
