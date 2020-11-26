class Scrolbar {
  constructor(h, i, min, max, name) {
    this.i = i;
    this.min = min;
    this.max = max;
    this.x = map(this.i, this.min, this.max, 1.05 * w, 1.45 * w);
    this.h = h;
    this.name = name;
  }
  
  show() {
    stroke(255);
    strokeWeight(10);
    textSize(25);
    textAlign(RIGHT,CENTER);
    //line
    line(w + (width/30), this.h, w + (width/30) + width/3.75, this.h);
    //text
    noStroke();
    fill(255);
    text(this.name ,w + (width/30) + width/3.75, this.h - 25);
    strokeWeight(30);
    stroke(255, 0, 0);
    //point
    point(this.x, this.h);
  }
}
