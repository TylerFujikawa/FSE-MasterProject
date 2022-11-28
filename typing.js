let exampleText1 = "Type the following sentence:"
let exampleText2 = "the quick brown fox jumps over the lazy dog"


let neededSentence = "the quick brown fox jumps over the lazy dog";
let returnStatement = "FAIL";
let returnColor;

function typingExercise(){
  exerciseChoice = 2
  activeTimer = true
  textInput.value("")
  
  textInput.show()
  textInput.position(295, 390)
  textInput.style('height', "60px")
  textInput.style('width', "200px")
  textInput.style('padding', "6px 10px")
  textInput.style('font-size', "17px")
  textInput.style('rows', "10")
  textInput.style('cols', "100")
  textInput.style('textAlign', 'center')
  
  enterButton.show().position(370, 470)
  
  push()
  textSize(30)
  textAlign(CENTER, CENTER);
  text(exampleText1, 250, 250, 300)
  textSize(18)
  text(exampleText2, 300, 330, 200)
  pop()
}
function enter(){
  if(neededSentence === textInput.value()){
    setReturnStatement("CORRECT", 1)
    enterButton.hide()
    winGameSound.play()
    resetTimer()
  }else{
    setReturnStatement("WRONG", 2)
    wrongEnterSound.play()
  }
}
function setReturnStatement(val, colo){
  let color1
  push()
  stroke('white')
  fill('white')
  rect(340, 525, 120, 50)
  pop()
  push()
  textSize(25)
  textAlign(CENTER, CENTER)
  if(colo == 1){
    color1 = "green"
  }else{
    color1 = "red"
  }
  fill(color1)
  text(val, 400, 550)
  pop()
}
