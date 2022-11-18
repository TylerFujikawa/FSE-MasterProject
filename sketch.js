//vars
let mainMenu = true

//Data vars
let circleData = []
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
  
  loadMainMenu()
}
function preload(){
  //load images
  circles = "circles.png"
  typing = "typing.png"
  wires = "wire.png"
}
function draw() {
  //Default exercise screen
  cMousePos = new Vector(mouseX,mouseY)
    //show the exercises
  if(exerciseChoice == 3){
    if(activeTimer){
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

class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  } 
}