function drawButtons(){
  rectMode(CORNER);
  strokeWeight(w / 100);
  
  textAlign(CENTER, CENTER);
  if (running) {
    //stop button
    stroke(255);
    fill(255, 0, 0);
    rect(w + (width/30), width/30, width/3.75, width/7.5);
    fill(255);
    textSize(width / 10);
    noStroke();
    text("stop", w + ((width - w) / 2), height / (20/3));
  } else {
    //start button
    stroke(255);
    fill(0, 255, 0);
    rect(w + (width/30), width/30, width/3.75, width/7.5);
    fill(255);
    textSize(width / 10);
    noStroke();
    text("start", w + ((width - w) / 2), height / (20/3));

    //random button
    stroke(255);
    fill(0, 0, 255);
    rect(w + (width/30), width/5, width/3.75, width/7.5);
    fill(255);
    textSize(22 * w / 200);  
    noStroke();
    text("random", 5 * width / 6, 9 * (height / 22));

    //clear button
    stroke(255);
    fill(255, 0, 0);  
    rect(w + (width/30), 11 * width / 30, width/3.75, width/7.5);
    fill(255);
    textSize(width / 10);
    noStroke();
    text("clear", 5 * width / 6, 5 * (height / (23/3)));
  }

  //draw grid
  strokeWeight(w / (sizeOfGrid * 50));
  stroke(255, 0, 0);
  for (let i = 0; i <= sizeOfGrid; i++) {
    line((i * w / sizeOfGrid), 0, (i * w / sizeOfGrid), w);
    line(0, (i * w / sizeOfGrid), w, (i * w / sizeOfGrid));
  }
}
