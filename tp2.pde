
//TRONCOSO DELFNA (91546/3)
//LINK A VIDEO: https://youtu.be/LCXYRJGU8Mw


color cf;  //color de fondo
color cc; //color de circulos
int t;  //tamaño circulos
PImage imagentp;
float tamMax;
float tamMin;

void setup() {
  size( 800, 400 ); //Resolución de 800x400 LISTO
  noStroke();

  //DECLARACION DE VARIABLES---------------------
  cf = color( 255 ); //color de fondo
  cc =color( 0 ); // color de los circulos
  t = height / 14;  // tamaño de los circulos
  imagentp= loadImage("imagentp.png"); //imagen
  tamMax = 40;
  tamMin = 5;
}

void draw() {
  background( cf );
  image (imagentp, 0, 0);//La imagen de referencia debe estar ubicada a la izquierda LISTO
  println(mouseX);
  println(mouseY);

  translate( 400, 0 ); //translado el 0

  //POSICION DE DIBUJO DE LOS CIRCULOS- //Ciclos FOR anidados.LISTO

  for ( int x = 0+1; x < 14; x ++ ) {  //();X ES 0, SI X ES MENOR QUE 10 ENTONCES SUMALE 1
    for ( int y = 0+1; y < 14; y ++ ) {  //LO MISMO PERO CON Y



      //calculos: CON FUNCION
      float _m = calcularDistMapMouse( x*t, y*t, 5, 40 ); //asignando valores a la funcion propia calcularDistMapMouse
      //dibujo: CON FUNCION
      modulo( x, y, t, _m );  ////--Al menos 1 función propia con parámetros (al menos 1) que NO retorna un valor
    }
  }
}
//-------------------------- funciones propias
void modulo( int x, int y, int t, float m ) { //dibujo
  fill( cc );
  circle( x*t, y*t, m );
}
//Algunas funciones matemáticas: dist(), map(), random().
//Al menos 1 función propia con parámetros (al menos 1) que  RETORNA un valor
float calcularDistMapMouse( int x2, int y2, int escMin, int escMax ) { //llama a la funcion
  float d = dist( mouseX, mouseY, x2, y2 );  //distancia entre dos puntos
  float m = escMax-map( d, 0, 500, escMin, escMax );  //transformo la escala distancia en escala tamaño modulo
  return m;
}

void keyPressed() {
  //Condicionales (if - else). LISTO
  //Eventos (mouse y/o teclado): modificación de variables. LISTO

  if ( key == 'f' ) {  //CAMBIA COLOR DE FONDO
    cf = color( random(0, 100), random(0, 100), random(0, 100) );
  }
  if ( key == 'c' ) {  //CAMBIA COLOR DE CIRCULOS
    cc = color( random(100, 255), random(100, 255), random(100, 255) );
  }

  if ( key == 'r' ) { //RESETEA VARIABLES CUANDO APRETO R
    reiniciar();
  }
}
//-------------
//Reiniciar el programa: volver variables a estado original.LISTO
//reiniciar variables
//Al menos 1 función propia con parámetros (al menos 1) que NO RETORNA un valor---

void reiniciar() {
  cf = color( 255 );
  cc= color( 0 );
  t = height / 14;
}
