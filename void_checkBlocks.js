function checkBlocks(){
  //check if block is clicked
  if (!running) {
    for (let i = 0; i < sizeOfGrid; i++) {
      for (let j = 0; j < sizeOfGrid; j++) {       
        blocks[i][j].checkIfClicked();
      }
    }
  }
}
