
class Juego {

  constructor(a, b, c, d) {
    this.p = 8;
    this.impantallas=a;
    this.immariposas = b ;
    this.estado = 0;
    this.red= c;
    this.mariposa3 =d;
    this.contador = 0;
    this.tiempo = 0;
    this.cant =100;

    this.botones = new Botones();      // creo el objeto botones de la clase Botones

    this.mariposas=[];
    for (let i=0; i< this.cant; i++) {
      this.mariposas[i] = new Mariposas(d);
    }
  }

  mouseClicked() {

    for (let i=0; i< this.cant; i++) {
      if (this.estado == 4) {   //MALDITAS COLISIONESSSSSSSS
        if (dist(this.mariposas[i].x, this.mariposas[i].y, mouseX, mouseY) < this.mariposas[i].r && !this.mariposas[i].atrapada) {
          this.contador++;
          this.mariposas[i].atrapada = true;
        }
      }
    }

    //BOTONES

    if (this.estado == 0 && this.botones.estoydentro(73, 490, 274, 566)) {
      this.estado = 4;
    }
    if (this.estado == 0 && this.botones.estoydentro(320, 494, 522, 575)) {
      this.estado = 1;
    }
    if (this.estado == 5 && this.botones.estoydentro(224, 348, 404, 438)) {
      this.estado = 4;
      this.contador = 0;
      this.tiempo = 0;

      for (let i =0; i < this.cant; i++) {
        this.mariposas[i].actualizarElemento();
        this.mariposa[i].atrapada = false;
      }
    }
    if (this.estado == 5 && this.botones.estoydentro(224, 447, 404, 517)) {
      this.estado = 0;
    }
    if (this.estado == 6 && this.botones.estoydentro(224, 348, 404, 438)) {
      this.estado = 4;
      this.contador = 0;
      this.tiempo = 0;
      this. cant=50
      
        for (let i = 0; i < this.cant; i++) {
        this.mariposas[i].actualizarElemento();
        this.mariposas[i].atrapada = false;
      }
    }
    if (this.estado == 6 && this.botones.estoydentro(224, 447, 404, 517)) {
      this.estado = 0;
    }
    if (this.estado == 1 && this.botones.estoydentro(195, 246, 413, 310)) {
      this.estado = 3;
    }
    if (this.estado == 1 && this.botones.estoydentro(195, 344, 413, 408)) {
      this.estado = 2;
    }
    if (this.estado == 1 && this.botones.botonX()) {
      this.estado = 0;
    }
    if (this.estado == 2 && this.botones.botonX()) {
      this.estado = 1;
    }
    if (this.estado == 3 && this.botones.botonX()) {
      this.estado = 1;
    }
  }

  draw() {

    //ESTADOS/PANTALLAS
    switch (this.estado) {
    case 0:
      image(this.impantallas[0], 0, 0);
      break;
    case 1:
      image(this.impantallas[1], 0, 0);
      break;
    case 2:
      image(this.impantallas[2], 0, 0);
      break;
    case 3:
      image(this.impantallas[3], 0, 0);
      break;
    case 4:
      this.pantalla4();
      break;
    case 5:
      image(this.impantallas[5], 0, 0);
      break;
    case 6:
      image(this.impantallas[6], 0, 0);
      break;
    }
  }

  //este metodo es todo lo que debe ocurrir al entrar en la pantalla 4 (de juego), lo hice como un metodo
  //aparte por una cuestion de organizacion, aunque podria haber estado directamente dentro del case 4

  pantalla4() {
    image(this.impantallas[4], 0, 0);
    push();
    imageMode(CENTER);
    image(this.red, mouseX, mouseY, 90, 90);
    textSize(20);
    text(this.contador, 100, 41, 50, 50);
    console.log(this.tiempo)
      text(this.tiempo / 100, 220, 41, 50, 50);
    pop();
    for (let i=0; i<(this.cant); i++) {
      this.mariposas[i].actualizarElemento();
    }
    this.tiempo++;

    console.log((20 * frameRate()))

      if (this.tiempo >= (20 * frameRate() ) && this.contador<25) {
      this.estado = 6;
    }

    if (this.contador >= 25) {
      this.estado = 5;
    }
  }
}
