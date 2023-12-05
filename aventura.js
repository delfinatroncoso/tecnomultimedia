
class Aventura {

  constructor(a, b, c) {
    this.botones=c;
    this.impantallas=a;
    this.textos = b ;
    this.estado=0;
    this.objbotones = new Botones();  // creo el objeto botones de la clase Botones
    this.juego = new Juego(pantallajuego4, immariposas, red, mariposa3); // creo el objeto juego de la clase Juego
  }

  draw() {
    console.log(mouseX)
      console.log(mouseY)

      switch(this.estado) {

      //------- pantalla: 0
    case 0:
      image( this.impantallas[0], 0, 0 );

      break;

      ////------- pantalla: 1
    case 1:
      this.lineasdetexto (1);
      this.lineasdebotones(0);

      break;

      ////------- pantalla: 2
    case 2:
      this.lineasdetexto (2);
      this.lineasdebotones(2);

      break;

      ////------- pantalla: 3
    case 3:
      this.lineasdetexto (3);
      this.lineasdebotones(4);
      break;

      ////------- pantalla: 4
    case 4:
      this.lineasdetexto (4);
      textSize(20);
      text(this.botones[6], 170, 530, 600, 600);//sig

      break;

      ////------- pantalla: 5
    case 5:
      this.lineasdetexto (5);
      textSize(20);
      text(this.botones[7], 170, 530, 600, 600);//sig

      break;

      ////------- pantalla: 6
    case 6:
      this.lineasdetexto (6);
      textSize(20);
      text(this.botones[8], 175, 540, 600, 600);//fin
      break;

      ////------- pantalla: 7
    case 7:
      this.lineasdetexto (7);
      this.lineasdebotones(9);
      break;

      ////------- pantalla: 8
    case 8:
      this.lineasdetexto (8);
      text(this.botones[11], 175, 540, 500, 500);//fin

      break;

      ////------- pantalla: 9
    case 9:
      this.lineasdetexto (9);
      text(botones[12], 175, 540, 500, 500);//fin
      break;

      ////------- pantalla: 10
    case 10:
      this.lineasdetexto (10);
      text(this.botones[13], 175, 540, 500, 500);//fin
      break;

      ////------- pantalla: 11
    case 11:
      this.lineasdetexto (11);
      text(this.botones[14], 175, 540, 500, 500);//fin
      break;

      ////------- pantalla: 12
    case 12:
      image( this.impantallas[12], 0, 0 );

      break;

      ////------- pantalla: 13 FIN
    case 13:
      image( this.impantallas[13], 0, 0 );

      break;

      ////------- pantalla: 14 PRE-JUEGO
    case 14:
      image( this.impantallas[14], 0, 0 );



      break;

      ////------- pantalla: 14 JUEGO
    case 15:
      this.juego.pantallajuego();

      if (this.juego.ganaste()) {
        this.estado=9;
       this.juego.reinicio();

      }

      if (this.juego.perder()) {
        this.estado=16;
       this.juego.reinicio();

      }

      break

        ////------- pantalla: 16 PERDISTE
      case 16:
      image( this.impantallas[15], 0, 0 );
      break;
    }
  }

  //AGREGAR EL RECORRIDO DE LAS FUNCIONES QUE ESTAN EN OTRAS CLASES
  mouseClicked() {

    this.juego.mouseClicked()

      if ( this.estado == 0 && this.objbotones.botonCuadrado(190, 500, 220, 90)) { //boton comenzar
      this.estado = 1;
    }
    //-------------- pantalla1
    else if ( this.estado == 1) {
      if (this.objbotones.botonCuadrado(43, 522, 190, 584)) { //botonA
        this.estado = 3;
      }
      if (this.objbotones.botonCuadrado(420, 523, 567, 585)) {  //botonB
        this.estado = 2;
      }
    }
    //-------------- pantalla2
    else if  ( this.estado == 2) {
      if (this.objbotones.botonCuadrado(43, 522, 190, 584)) {
        this.estado = 6;
      }
      if (this.objbotones.botonCuadrado(420, 523, 567, 585)) {
        this.estado = 7;
      }
    }
    //-------------- pantalla3
    else if  ( this.estado == 3) {
      if (this.objbotones.botonCuadrado(43, 522, 190, 584)) {
        this.estado = 4;
      }
      if (this.objbotones.botonCuadrado(420, 523, 567, 585)) {
        this.estado = 5;
      }
    }//-------------- pantalla4
    else if  ( this.estado == 4) {
      if (this.objbotones.botonCuadrado(117, 520, 485, 578)) { //boton de siguiente
        this.estado = 8;
      }
    }//-------------- pantalla5
    else if  ( this.estado == 5) {
      if (this.objbotones.botonCuadrado(117, 520, 485, 578)) {
        this.estado = 14;
      }
    }//-------------- pantalla6
    else if  (this.estado == 6) {
      if (this.objbotones.botonCuadrado(164, 525, 402, 582)) { //boton de fin
        this.estado = 13;
      }
    }//-------------- pantalla7
    else if  (this.estado == 7) {
      if (this.objbotones.botonCuadrado(43, 522, 190, 584)) {
        this.estado = 10;
      }
      if (this.objbotones.botonCuadrado(420, 523, 567, 585)) {
        this.estado = 11;
      }
    }//-------------- pantalla8
    else if  (this.estado == 8) {
      if (this.objbotones.botonCuadrado(164, 525, 402, 582)) {
        this.estado = 13;
      }
    }//-------------- pantalla9
    else if  (this.estado == 9) {
      if (this.objbotones.botonCuadrado(164, 525, 402, 582)) {
        this.estado = 13;
      }
    }//-------------- pantalla10
    else if  (this.estado == 10) {
      if (this.objbotones.botonCuadrado(164, 525, 402, 582)) {
        this.estado = 13;
      }
    }
    //-------------- pantalla11
    else if  (this.estado == 11) {
      if (this.objbotones.botonCuadrado(164, 525, 402, 582)) {
        this.estado = 13;
      }
    }
    //-------------- pantalla14// ES LA PANTALLA anterior DEL JUEGO
    else if  (this.estado == 14) {
      if (this.objbotones.botonCuadrado(200, 510, 200, 80)) {//boton jugar
        this.estado = 15;
        //this.juego.reinicio;
      }
    }
    //---------------creditos

    else if (this.estado==13) {
      if (this.objbotones.botoncreditos()) {
        this.estado=12;
      }
    } else if (this.estado==12) {
      if (this.objbotones.botonvolver()) {
        this.estado=13;
      }
    }
  }

  keyPressed() {
    if ( this.estado==13 && key == 'r') { //RESETEA VARIABLES CUANDO APRETO R
      this.estado=0
        //this.juego.reiniciar
    }
    if (this.estado==16 && key == 'c') { //reinicia el juego
      this.estado=15
  
    }
  }

  //---------------------------------------------------

  lineasdetexto(arreglo) {
    image(this.impantallas[arreglo], 0, 0 );
    this.ajustesdetextos();
    text(this.textos[arreglo], 25, 32, 560, 190);
  }

  lineasdebotones(arreglo) {
    textSize(13);
    textAlign(CENTER);
    text(this.botones[arreglo+1], 44, 517, 140, 567);
    text(this.botones[arreglo], 420, 519, 135, 500);
  }

  ajustesdetextos() {
    textSize(14);
    textAlign(LEFT);
    fill(0);
  }
}
