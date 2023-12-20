
class Botones {

  botonCuadrado (x, y, anc, alt) {
    return (mouseX > x && mouseY > y && mouseX < anc+x && mouseY < alt+y);
  }

  botoncreditos() {
    return dist(mouseX, mouseY, 420, 500) <= 45;
  }
  botonvolver() {
    return dist (mouseX, mouseY, 550, 550) <=30;
  }
}
