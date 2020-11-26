class Block { 
  constructor(x, y, i, j) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.j = j;   

    this.neighbours = 0;
    this.alive = false;

    this.prevI = this.i - 1;    
    this.prevJ = this.j - 1;    
    this.nextI = this.i + 1;
    this.nextJ = this.j + 1; 

    if (this.nextI == max) {
      this.nextI = 0;
    }
    if (this.nextJ == max) {
      this.nextJ = 0;
    }
    if (this.prevI == -1) {
      this.prevI = max - 1;
    }
    if (this.prevJ == -1) {
      this.prevJ = max - 1;
    }
  }

   randomize() {
    if (random(1) > 0.5) {
      this.alive = false;
    } else {
      this.alive = true;
    }
  }

   show() {
    if (this.alive) {
      rectMode(CENTER);
      fill(0, 255, 0);
      square(this.x, this.y, w / sizeOfGrid);
    }
  }

   checkNeighbours() {
    this.neighbours = 0;

    // -1, 0
    if (blocks[this.prevI][this.j].alive) {
      this.neighbours++;
    }

    // 1, 0 
    if (blocks[this.nextI][this.j].alive) {
      this.neighbours++;
    }

    // 0, -1
    if (blocks[this.i][this.prevJ].alive) {
      this.neighbours++;
    }

    // 0, 1
    if (blocks[this.i][this.nextJ].alive) {
      this.neighbours++;
    }

    // -1, -1
    if (blocks[this.prevI][this.prevJ].alive) {
      this.neighbours++;
    }

    // 1, 1
    if (blocks[this.nextI][this.nextJ].alive) {
      this.neighbours++;
    }

    // -1, 1
    if (blocks[this.prevI][this.nextJ].alive) {
      this.neighbours++;
    }

    // 1, -1
    if (blocks[this.nextI][this.prevJ].alive) {
      this.neighbours++;
    }
  }

   checkIfAlive() {
    if (this.alive) {
      if (this.neighbours < 2) {
        this.alive = false;
      } else if (this.neighbours == 2 || this.neighbours == 3) {
        this.alive = true;
      } else if (this.neighbours > 3) {
        this.alive = false;
      }
    } else {
      if (this.neighbours == 3) {
        this.alive = true;
      }
    }
  }

   checkIfClicked() {
    if (mouseX > this.x - ((w / sizeOfGrid - 1)/2)  && mouseX < this.x + ((w / sizeOfGrid - 1)/2)) {
      if (mouseY > this.y - ((w / sizeOfGrid - 1)/2)  && mouseY < this.y + ((w / sizeOfGrid - 1)/2)) {
        if (!this.alive) {
          this.alive = true;
          for (let i = 0; i < sizeOfGrid; i++) {
            for (let j = 0; j < sizeOfGrid; j++) { 
              //show alive blocks
              blocks[i][j].show();
            }
          }
        } else if (this.alive) {
          this.alive = false;
          for (let i = 0; i < sizeOfGrid; i++) {
            for (let j = 0; j < sizeOfGrid; j++) { 
              //show alive blocks
              blocks[i][j].show();
            }
          }
        }
      }
    }
  }
}
