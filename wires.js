//Wires
let shapeSizeRadius = 15
let locs = []

function wiresExercise(){
  noStroke()
  fill('red')
  locs = [getRandX(),getRandY(),getRandX(),getRandY(),getRandX(),getRandY(),getRandX(),getRandY(),getRandX(),getRandY(),getRandX(),getRandY(),]
  circle(locs[0],locs[1],shapeSizeRadius)
  circle(locs[2],locs[3],shapeSizeRadius)
  fill('green')
  circle(locs[4],locs[5],shapeSizeRadius)
  circle(locs[6],locs[7],shapeSizeRadius)
  fill('blue')
  circle(locs[8],locs[9],shapeSizeRadius)
  circle(locs[10],locs[11],shapeSizeRadius)
  
  
  //3 shapes x2 spawned randomly on page
  //shapes have an invis button over it
  //timer when started
  //when one shape is clicked, is starts drawing a line from that shape. (x,y)
  //have to click on other shape
  //on start, spawn the shapes
  //on update, draw the lines
}
