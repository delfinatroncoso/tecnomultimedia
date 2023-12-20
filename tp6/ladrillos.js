class Mariposas {

  constructor(d) {
    this.mariposa3=d;
    this.atrapada = false;
    this.x= random(50, 450);
    this.y= random(-3500, -10);
    this.velX= random(0.2);
    this.r = 25;
  }

  actualizarElemento(d, f) {
    this.moverMariposas();
    this.dibujarmariposa();
  }

  moverMariposas() {
    //mover en caida hacia abajo
    this.y += this.velX+3;
  }

  dibujarmariposa() {
    if (!this.atrapada) {
      push();
      imageMode(CENTER);
      image(this.mariposa3, this.x, this.y, 55, 55);
      pop();
    }
  }

  reinicioLadrillos() {
    this.x= random(50, 450);
    this.y= random(-3500, -10);
    this.velX= random(0.2);
    this.atrapada = false;
  }
}
