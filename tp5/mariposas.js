class Mariposas {

  constructor(d) {
    this.mariposa3=d;
    this.atrapada = false;
    this.x= random(50,450);
    this.y= random(-3500,-10);
    this.velX= random(0.2);
    this.velY= random(0.2) ;
    this.r = 20;
  }

  actualizarElemento(d,f) {
    this.moverMariposas();
    this.dibujarmariposa();

  }

  moverMariposas() {
    //mover en caida hacia abajo
    this.y += this.velX+3;
    //if (this.y > height) {
    //  this.y = 0;
    //  this.x = random(width);
    //}
  }

  dibujarmariposa() {
      if (!this.atrapada) {
        push();
        imageMode(CENTER);
        image(this.mariposa3, this.x, this.y, 55, 55);
        pop();
      }
    
  }
  }
  
