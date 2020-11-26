function checkButtons(){
  //start / stop
  if (mouseX > w + (width/30) && mouseX < width - (width / 30)) {
    if (mouseY > width / 30 && mouseY < (width/30) + (width/7.5)) {
      if (running) {
        running = false;
      } else {
        running = true;
      }
    }
  }

  //random
  if (mouseX > w + (width/30)  && mouseX < width - (width / 30) ) {
    if (mouseY > width / 5  && mouseY < width / 5 + width/7.5) {
      if (!running) {
        for (let i = 0; i < max; i++) {
          for (let j = 0; j < max; j++) {       
            blocks[i][j].randomize();
            s = 0;
          }
        }
      }
    }
  }

  //clear
  if (mouseX > w + (width/30)  && mouseX < width - (width / 30) ) {
    if (mouseY > 11 * width / 30 && mouseY < 11 * width / 30 + width/7.5 ) {
      if (!running) {
        for (let i = 0; i < max; i++) {
          for (let j = 0; j < max; j++) {       
            blocks[i][j].alive = false;
            s = 0;
          }
        }
      }
    }
  }
}
