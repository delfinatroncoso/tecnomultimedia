
class Juego {

  constructor(a, b, c, d) {
    this.p = 8;
    this.immariposas = b ;
    this.pantallajuego4 = a;
    //this.estado = 0;
    this.red= c;
    this.mariposa3 =d;
    this.contador = 0;
    this.tiempo = 0;
    this.cant =100;

    this.objbotones = new Botones();  // creo el objeto botones de la clase Botones

    this.mariposas=[];
    for (let i=0; i< this.cant; i++) {
      this.mariposas[i] = new Mariposas(d);
    }
  }

  mouseClicked() { //colisiones del juego

    for (let i=0; i< this.cant; i++) {
      if (dist(this.mariposas[i].x, this.mariposas[i].y, mouseX, mouseY) < this.mariposas[i].r && !this.mariposas[i].atrapada) {
        this.contador++;
        this.mariposas[i].atrapada = true;
      }
    }
  }
  pantallajuego() {
    image(this.pantallajuego4, 0, 0);
    push();
    imageMode(CENTER);
    image(this.red, mouseX, mouseY, 90, 90);
    textSize(20);
    text(this.contador, 100, 41, 50, 50);
      text(this.tiempo / 100, 220, 41, 50, 50);
    pop();
    for (let i=0; i<(this.cant); i++) {
      this.mariposas[i].actualizarElemento();
    }
    this.tiempo++;
  }
  
  ganaste(){
    return (this.contador >=25)
    
    
  }
  
  perder(){
    return (this.tiempo>= (20*frameRate()) && this.contador<25)
  }
  
  reinicio(){
    this.contador=0
    this.tiempo=0
    this.cant=100
    for (let i=0; i<(this.cant); i++) {
    this.mariposas[i].reinicioLadrillos();
    }
    
    }
  
  }
