function steps(){  
  //show number of generations
  textAlign(RIGHT, BOTTOM);
  fill(255);
  textSize(width / 13);
  if (steps > 99999) {
    textSize(width / 20);
  }
  if (s > 999999) {
    textSize(width / 17);
  }
  if (s > 9999999) {
    textSize(width / 19);
  }
  if (s > 99999999) {
    textSize(width / 21);
  }
  if (s > 999999999) {
    textSize(width / 23);
  }
  text(s, w + (width/30) + width/3.75, height);
}
