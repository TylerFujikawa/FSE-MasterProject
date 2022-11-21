//vars
let mainMenu = true
let mousePos

//Data vars
let circlesData = []
let typingData = []
let wiresData = []

//Images
let circles
let typing
let wires

//Buttons
let circleExerciseButton
let typingExerciseButton
let wiresExerciseButton
let mainMenuButton
let dataMenuButton

//Exercises
let exerciseName = "Circles"
let exerciseChoice = null //1 is circles, 2 is typing, 3 is wires

function setup() {
  createCanvas(400, 400)
  
  circleExerciseButton = createButton("Circles")
  circleExerciseButton.mousePressed(loadExercise1).center()
  typingExerciseButton = createButton("Typing")
  typingExerciseButton.mousePressed(loadExercise2).center()
  wiresExerciseButton = createButton("Wires")
  wiresExerciseButton.mousePressed(loadExercise3).center()
  mainMenuButton = createButton("Main Menu")
  mainMenuButton.mousePressed(loadMainMenu).center().hide()
  dataMenuButton = createButton("Data Menu")
  dataMenuButton.mousePressed(loadDataMenu).center()
  replayButton = createButton("Replay")
  replayButton.mousePressed(replay).center().hide()
  loadMainMenu()
}
function preload(){
  //load images
  circles = "circles.png"
  typing = "typing.png"
  wires = "wire.png"
}
function draw() {
  mousePos = new Vector(mouseX, mouseY)
  if(exerciseChoice == 1 && drawCircle){
    clearArea()
    checkNextPoint()
    fill('white')
    stroke('red')
    strokeWeight(1)
    circle(cPos.x, cPos.y, circleDiameter)
  }
  updateTimer()
}
function updateTimer(){
  if(activeTimer){
    stroke('white')
    fill("white")
    rect(220,70,60,20)
    fill("black")
    textSize(16)
    text("Time: " + timer, 250, 80)
    if (frameCount % 60 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer ++;
    }
  }
}
function resetTimer(){
  activeTimer = false
  timer = 0;
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
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
}
function getRandX(){
  return floor(random(110, 390))//exact so it doesnt go on lines
}
function getRandY(){
  return floor(random(110, 390))
}
function clearArea(){
  fill('white')
  stroke('black')
  rect(100, 100, 300, 300)
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
