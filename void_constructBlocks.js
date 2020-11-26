function constructBlocks(){
  for (let i = 0; i < max; i++) {    
    blocks[i] = [];
    for (let j = 0; j < max; j++) {
      let x = i * (w / sizeOfGrid) + (w / (sizeOfGrid * 2));
      let y = j * (w / sizeOfGrid) + (w / (sizeOfGrid * 2));
      blocks[i][j] = new Block(x, y, i, j);
    }
  }
}
