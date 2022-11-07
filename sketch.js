//vars
let mainMenu = true
let currentExercise = null

//Data vars
let scores

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
  if(currentExercise != null){
    //show the exercises
  }
}

function clearCanvas(){
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
}
function getRandX(){
  return floor(random(105, 395))//exact so it doesnt go on lines
}
function getRandY(){
  return floor(random(105, 395))
}
