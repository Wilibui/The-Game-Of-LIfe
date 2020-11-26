function checkScrolbar(){
  if (mouseX >= 1.05 * w && mouseX <= 1.45 * w) {
    if (mouseY >= 0.785 * w  && mouseY <= 0.815 * w) {
      zoomBar.x = mouseX;
    }
    if (mouseY >= 0.835 * w  && mouseY <= 0.865 * w) {
      speedBar.x = mouseX;
    }
  }
}
