function update() {
  //show alive blocks
  for (let i = 0; i < sizeOfGrid; i++) {
    for (let j = 0; j < sizeOfGrid; j++) { 
      blocks[i][j].show();
    }
  }

  //resize grid
  sizeOfGrid = round(map(zoomBar.x, 1.05 * w, 1.45 * w, zoomBar.min, zoomBar.max));
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      blocks[i][j].x = i * (w / sizeOfGrid) + (w / (sizeOfGrid * 2));
      blocks[i][j].y = j * (w / sizeOfGrid) + (w / (sizeOfGrid * 2));
    }
  }

  //recalculate speed
  speed = map(speedBar.x, 1.05 * w, 1.45 * w, speedBar.min, speedBar.max);
  
  if (idk >= speed) {
    idk = 0;  
    //calculate number of generations
    if (running) {
      s++;
    } 
    
    //check number of neighbours
    for (let i = 0; i < max; i++) {
      for (let j = 0; j < max; j++) { 
        if (running) {
          blocks[i][j].checkNeighbours();
        }
      }
    }

    //check if block can survive
    for (let i = 0; i < max; i++) {
      for (let j = 0; j < max; j++) { 
        if (running) {
          blocks[i][j].checkIfAlive();
        }
      }
    }
  }
  idk++;
}
