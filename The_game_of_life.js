let blocks = [];
let running = false;
let sizeOfGrid;
let speed;
let w;
let max;
let s = 0;
let idk = 0;

function setup() {
  if (windowHeight <= 2* windowWidth/3) {
    createCanvas(3*windowHeight/2, windowHeight);
  } else { 
    createCanvas(windowWidth, 2*windowHeight/3);
  }
  w = 2 * width / 3;
  max = 1000;
  zoomBar = new Scrolbar(0.8 * w, 40, 1, 1000, "Size");
  speedBar = new Scrolbar(0.85 * w, 1, 20, 1, "Speed");

  sizeOfGrid =  map(zoomBar.x, 1.05 * w, 1.45 * w, zoomBar.min, zoomBar.max);
  speed =  map(speedBar.x, 1.05 * w, 1.45 * w, speedBar.min, speedBar.max);

  constructBlocks();
  drawCanon(0, 0);
}

function draw() {
  background(0);

  zoomBar.show();
  speedBar.show();
  drawButtons();
  update(); 
  steps();
}

function mouseClicked() {
  checkButtons();
  checkBlocks();
  checkScrolbar();
}
function mouseDragged() {

  checkScrolbar();
}
