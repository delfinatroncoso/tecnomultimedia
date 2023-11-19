
class Botones {

  //metodos para saber si estoy dentro de los botones

  botonX() {
    return dist(mouseX, mouseY, 559, 559) <= 35;
  }
  estoydentro (x, x1, y, y1) {
    return (mouseX > x && mouseY > x1 && mouseX < y && mouseY < y1);
  }

  
}
