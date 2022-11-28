let nameX = 0
const nameY = 120
function loadExercise1(){//circles
  outline()
  exerciseName = "Tracking Circles"
  nameX = 230
  loadExerciseOverlay()
  circleExerciseButton.hide()
  typingExerciseButton.show()
  wiresExerciseButton.show()
  circlesExercise()
}
function loadExercise2(){//typing
  outline()
  exerciseName = "Quick Type"
  nameX = 290
  loadExerciseOverlay()
  circleExerciseButton.show()
  typingExerciseButton.hide()
  wiresExerciseButton.show()
  typingExercise()
}
function loadExercise3(){//wires
  outline()
  exerciseName = "Connection"
  nameX = 290
  loadExerciseOverlay()
  circleExerciseButton.show()
  typingExerciseButton.show()
  wiresExerciseButton.hide()
  wiresExercise()
}

function loadExerciseOverlay(){
  clearCanvas()
  outline()
  //outlines
  push()
  strokeWeight(10)
  rect(0,0,600,600)
  
  //top bar
  strokeWeight(5)
  rect(200,0,400,200)
  textSize(48)
  text(exerciseName,nameX,nameY)//exercise name text
  
  //side bar
  rect(0,0,200,600)
  mainMenuButton.position(10, 50).show()
  circleExerciseButton.position(45,150)
  typingExerciseButton.position(45,250)
  wiresExerciseButton.position(45,350)
  //dataMenuButton.position(10,355)
  replayButton.position(55, 450).show()
  textInput.hide()
  enterButton.hide()
  
  //dividers
  push()
  strokeWeight(3)
  line(20, 120, 180, 120)
  line(20, 430, 180, 430)
  pop()
  
  //timer area
  rect(0, 500, 200, 100)
  pop()
  resetTimer()
}

//scrapped idea
function loadDataMenu(){
  exerciseChoice = 0
  outline()
  clearCanvas()
  //main page
  mainMenuButton.position(165,350).show()
  circleExerciseButton.position(25,50).show()
  typingExerciseButton.position(25,150).show()
  wiresExerciseButton.position(25,250).show()
  //dataMenuButton.position(160,325).hide()
  replayButton.hide()
  textInput.hide()
  enterButton.hide()
  
  exerciseChoice = 0
  
  resetTimer()
  
  //border
  push()
  strokeWeight(5)
  rect(0,0,400,400)
  strokeWeight(5)
  line(0,100,400,100)
  line(0,200,400,200)
  line(0,300,400,300)
  pop()
}
function loadMainMenu(){
  exerciseChoice = 0
  outline()
  clearCanvas()
  //main page
  mainMenuButton.hide()
  circleExerciseButton.position(50,350).show()
  typingExerciseButton.position(250,350).show()
  wiresExerciseButton.position(450,350).show()
  //dataMenuButton.position(160,325).show()
  replayButton.hide()
  textInput.hide()
  enterButton.hide()
  
  resetTimer()
  
  //border rect
  push()
  strokeWeight(10)
  rect(0,0,600,600)
  
  //Title
  textSize(64)
  textAlign(CENTER, CENTER)
  push()
  fill('#05daff')
  stroke('black')
  strokeWeight(3)
  text('Reaction',300,100)
  pop()
  
  //Subtitle
  textSize(16)
  text('To help recovering stroke victims with their fine-motor skills using exercises based on speed.',150,145,300,50)
  
  //Exercises
  textSize(36)
  text('Exercises',300,300)
  
  //Data
  //textSize(24)
  //text('Data',200,300)
  
  //Footer
  textSize(16)
  text('Created By:\nTyler Fujikawa, Yashashwi Gautom, Truong Luong, Sachin Rama',300,570)
  pop()
  
  //Debug
  //loadExercise1()
  //loadExercise2()
  //loadExercise3()
}
function outline(){
  push()
  strokeWeight(10)
  rect(0,0,600,600)
  pop()
}
