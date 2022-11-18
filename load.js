function loadExercise1(){
  exerciseName = "Circles"
  loadExerciseOverlay()
  circleExerciseButton.hide()
  typingExerciseButton.show()
  wiresExerciseButton.show()
}
function loadExercise2(){
  exerciseName = "Typing"
  loadExerciseOverlay()
  circleExerciseButton.show()
  typingExerciseButton.hide()
  wiresExerciseButton.show()
  typingExercise()
}
function loadExercise3(){
  exerciseName = "Wires"
  loadExerciseOverlay()
  circleExerciseButton.show()
  typingExerciseButton.show()
  wiresExerciseButton.hide()
  wiresExercise()
}

function loadExerciseOverlay(){
  clearCanvas()
  //outlines
  strokeWeight(10)
  rect(0,0,400,400)
  strokeWeight(5)
  
  //top bar
  rect(100,0,300,100)
  textSize(32)
  text(exerciseName,250,50)//exercise name text
  
  //side bar
  rect(0,0,100,400)
  mainMenuButton.position(10, 50).show()
  circleExerciseButton.position(20,125)
  typingExerciseButton.position(20,200)
  wiresExerciseButton.position(20,275)
  dataMenuButton.position(10,355)
}

function loadDataMenu(){
  clearCanvas()
  //main page
  mainMenuButton.position(165,350).show()
  circleExerciseButton.position(25,50).show()
  typingExerciseButton.position(25,150).show()
  wiresExerciseButton.position(25,250).show()
  dataMenuButton.position(160,325).hide()
  
  //border
  strokeWeight(5)
  rect(0,0,400,400)
  strokeWeight(5)
  line(0,100,400,100)
  line(0,200,400,200)
  line(0,300,400,300)
}
function loadMainMenu(){
  clearCanvas()
  //main page
  mainMenuButton.hide()
  circleExerciseButton.position(25,230).show()
  typingExerciseButton.position(175,230).show()
  wiresExerciseButton.position(325,230).show()
  dataMenuButton.position(160,325).show()
  
  //border
  strokeWeight(10)
  rect(0,0,400,400)
  
  //Title
  textSize(32)
  textAlign(CENTER, CENTER);
  text('Trainer',200,50)
  
  //Subtitle
  textSize(12)
  text('To help recovering stroke victims with their fine-motor skills',100,70,200,50)
  
  //Exercises
  textSize(24)
  text('Exercises',200,175)
  
  //Data
  textSize(24)
  text('Data',200,300)
  
  //Footer
  textSize(10)
  text('Created By: Tyler Fujikawa, Yashashwi Gautom, Truong Luong, Sachin Rama',200,385)
}