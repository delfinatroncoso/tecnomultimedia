//link video:https://youtu.be/wlA0WM70VMs
//Troncoso delfina julieta (91546/3)


int p = 14;
int ach= 147;
int alt= 62;
int estado, e;
String textofin;
PImage[] impantallas =  new PImage[p];
String[] textos = new String[p];
String[] botones = new String[p+1];
boolean botoncomenzar, botonA, botonB, botondefin, botondesig;
PFont tipografia;



void setup() {
  size ( 600, 600);
  estado=0;

  //agrego imagenes a traves de un for con arreglo
  for ( int i = 0; i < p; i++ ) {
    impantallas[i] = loadImage( "data/pantalla" + i + ".png" );
  }

  //agrego textos con for y arreglos
  textos = loadStrings("textos.txt");
  for ( int a = 0; a < p; a++ ) {
  }

  //agrego botones con for y arreglos
  botones = loadStrings("botones.txt");
  for ( int b = 0; b < p+2; b++ ) {
  }
}
void draw() {
  println(mouseX);
  println(mouseY);

  botoncomenzar= (mouseX > 190 && mouseY > 500 && mouseX < 410 && mouseY < 573);
  botonA= (mouseX > 43 && mouseY > 522 && mouseX < 190 && mouseY < 584);
  botonB=(mouseX > 420 && mouseY > 523 && mouseX < 567 && mouseY < 585);
  botondefin=(mouseX > 164 && mouseY > 525 && mouseX < 402 && mouseY < 582);
  botondesig=(mouseX > 117 && mouseY > 520 && mouseX < 485 && mouseY < 578);

  println(estado);

  switch(estado) {


    //------- pantalla: 0
  case 0:
    image( impantallas[0], 0, 0 );
    break;

    ////------- pantalla: 1
  case 1:
    lineasdetexto (1);
    lineasdebotones(0);

    break;

    ////------- pantalla: 2
  case 2:
    lineasdetexto (2);
    lineasdebotones(2);
    break;

    ////------- pantalla: 3
  case 3:
    lineasdetexto (3);
    lineasdebotones(4);
    break;

    ////------- pantalla: 4
  case 4:
    lineasdetexto (4);
    textSize(20);
    text(botones[6], 170, 530, 600, 600);//sig

    break;

    ////------- pantalla: 5
  case 5:
    lineasdetexto (5);
    textSize(20);
    text(botones[7], 170, 530, 600, 600);//sig
    break;

    ////------- pantalla: 6
  case 6:
    lineasdetexto (6);
    textSize(20);
    ajustesdebotonesfinal();
    text(botones[8], 175, 540, 600, 600);//fin
    break;

    ////------- pantalla: 7
  case 7:
    lineasdetexto (7);
    lineasdebotones(9);
    break;

    ////------- pantalla: 8
  case 8:
    lineasdetexto (8);
    ajustesdebotonesfinal();
    text(botones[11], 175, 540, 500, 500);//fin

    break;

    ////------- pantalla: 9
  case 9:
    lineasdetexto (9);
    ajustesdebotonesfinal();
    text(botones[12], 175, 540, 500, 500);//fin
    break;

    ////------- pantalla: 10
  case 10:
    lineasdetexto (10);
    text(botones[13], 175, 540, 500, 500);//fin
    break;

    ////------- pantalla: 11
  case 11:
    lineasdetexto (11);
    ajustesdebotonesfinal();
    text(botones[14], 175, 540, 500, 500);//fin
    break;

    ////------- pantalla: 12
  case 12:
    image( impantallas[12], 0, 0 );

    break;

    ////------- pantalla: 13 FIN
  case 13:
    image( impantallas[13], 0, 0 );

    break;
  }
}
//EVENTOS (CREACION DE BOTONES Y RESET )
void mouseClicked() {  //botones

  if ( estado == 0 && botoncomenzar) {
    estado = 1;
  }
  //-------------- pantalla1
  else if ( estado == 1) {
    if (botonA) {
      estado = 3;
    }
    if (botonB) {
      estado = 2;
    }
  }
  //-------------- pantalla2
  else if  ( estado == 2) {
    if (botonA) {
      estado = 6;
    }
    if (botonB) {
      estado = 7;
    }
  }
  //-------------- pantalla3
  else if  ( estado == 3) {
    if (botonA) {
      estado = 4;
    }
    if (botonB) {
      estado = 5;
    }
  }//-------------- pantalla4 
  else if  ( estado == 4) {
    if (botondesig) {
      estado = 8;
    }
  }//-------------- pantalla5 
  else if  ( estado == 5) {
    if (botondesig) {
      estado = 9;
    }
  }//-------------- pantalla6
  else if  ( estado == 6) {
    if (botondefin) {
      estado = 13;
    }
  }//-------------- pantalla7
  else if  ( estado == 7) {
    if (botonA) {
      estado = 10;
    }
    if (botonB) {
      estado = 11;
    }
  }//-------------- pantalla8
  else if  ( estado == 8) {
    if (botondefin) {
      estado = 13;
    }
  }//-------------- pantalla9
  else if  ( estado == 9) {
    if (botondefin) {
      estado = 13;
    }
  }//-------------- pantalla10
  else if  ( estado == 10) {
    if (botondefin) {
      estado = 13;
    }
  }
  //-------------- pantalla11
  else if  ( estado == 11) {
    if (botondefin) {
      estado = 13;
    }
  }
}

void keyPressed() {

  if ( key == 'r') { //RESETEA VARIABLES CUANDO APRETO R
    reiniciar();
  }
}

void mousePressed() {  //boton de creditos 

  if ( estado == 13 && botoncreditos(400, 500, 150) ) { //va del fin del juego a los creditos
    estado = 12;
  }
  if ( estado == 12 && botoncreditos(550, 550, 70) ) { //vuelve de los creditos al fin del juego
    estado = 13;
  }
}

// FUNCIONES PROPIAS

//para ajustes de texto - sin parametros sin return
void ajustesdetextos() {
  textSize(14);
  textAlign(LEFT);
  fill( 0 );
}
void ajustesdebotonesfinal() {
  textSize(20);
  fill(#F05EC7);
}


//para reinicar la aventura
void reiniciar() {
  estado= 0;
}
//con parametros con return
boolean botoncreditos( int x, int y, int r ) {  //con parametros con return
  return dist(mouseX, mouseY, x, y) <= r;
}

//con parametros sin return

//para optimizar lineas de texto
void lineasdetexto(int arreglo) {
  image( impantallas[arreglo], 0, 0 );
  ajustesdetextos();
  text(textos[arreglo], 25, 32, 560, 190);
}

//para optimizar lineas de botones
void lineasdebotones(int arreglo) {
  textSize(13);
  textAlign(CENTER);
  text(botones[arreglo+1], 44, 517, 140, 567);
  text(botones[arreglo], 420, 519, 135, 500);
}
