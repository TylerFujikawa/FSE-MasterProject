function typingExercise(){
  //variables
  let neededSentence = "The quick brown fox jumps over the lazy dog";
  let returnStatement = "";
  let returnColor;
  //Gather response
  var response = prompt("Type the following sentence:\nThe quick brown fox jumps over the lazy dog")
  var pass = neededSentence.localeCompare(response)
  if(pass == 0){
    returnStatement = "SUCCESS";
    return true;
  }
  else{
    returnStatement = "FAILURE";
    return false;
  }
  textSize(25)
  textAlign(CENTER, CENTER);
}