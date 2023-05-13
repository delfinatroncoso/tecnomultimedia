
//Debe haber al menos 3 pantallas, donde cada pantalla posea una imagen y un texto
//El texto en la pantalla debe utilizar una fuente de Processing y tener algún tipo de animación (movimiento, fade, escalado, etc)
//La transición entre una pantalla y otra debe ser automática por tiempo.
//Al finalizar debe haber un botón que permita reiniciar la misma.
//OPCIONAL: Puede haber un botón al inicio para iniciar la presentación.
//TRONCOSO DELFINA (91546/3)
//__________________________________________________________________________________________


PImage inicio, mariposap1, mariposap2, mariposap3, mariposap4, final5,imboton;
PFont tipografia1;
int texto;
float posY=600;
String estado;
int contador;


void setup() {
  size ( 640, 480);

  //carga fuentes

  tipografia1= loadFont("mvboli.vlw");

  //carga imagenes
  inicio= loadImage("inicio.png");
  mariposap1= loadImage("mariposap1.png");
  mariposap2= loadImage("mariposap2.png");
  mariposap3= loadImage("mariposap3.png");
  mariposap4= loadImage("mariposap4.png");
  final5= loadImage("final5.png");
  imboton= loadImage("imboton.png");

  //otras variables
  texto= (frameCount); 
  estado="inicio";
  //contador=frameCount;
}

void draw () {
  println(frameCount);
  println(mouseX);
  println(mouseY);
  println(posY);


  //_________________________________________________

  //pantalla de inicio

  if (estado.equals("inicio")) {
    image(inicio, 0, 0);
    contador++;
    if ( contador >= 250 ) {  
      estado = "p1";
      contador = 0;
    }
  }
  //-------------------------------------
  //pantalla 1
  if (estado.equals("p1")) {

    background(#F5FAC7);
    image(mariposap1, 0, 0);
    textFont(tipografia1);
    textSize(20);
    fill(0);

    textAlign(CENTER);
    text("CARACTERISTICAS \nGENERALES", 190, 45);
    text("MARIPOSA MORPHO AZUL", 190, 110);
    textSize(19);
    textAlign(RIGHT);
    text(" Esta mariposa es característica \npor tener alas de color azul \nmetálico, con los extremos de \ncolor negro. El par superior \ntiene pequeñas motas de color \nblanco. \n\n*Son muy grandes: miden entre \n9,5 a 15 centímetros. Los machos \nson más grandes que las hembras\n*La mariposa morpho azul es de \nhábitosdiurnos y son muy \nsolitarias: solamente se juntan \ncon otras morpho cuando es \ntiempo de reproducirse\n*No emiten sonidos: tienen un llamado\nórgano de Vogel que es análogo a un \noído timpánico, con los que pueden \ndetectar el vuelo de aves depredadoras", 630, posY);

    texto= frameCount;

    if (posY>=30) {
      posY--;
    }
    contador++;
    if ( contador >= 700 ) {  
      estado = "p2";
      contador = 0;
         posY=height; 

    }
  }
  //-------------------------------------
  //pantalla 2
  if (estado.equals("p2")) {

    image(mariposap2, 0, 0);
    textAlign(CENTER);
    textSize(40);
    text("HABITAT", 335, 60);
    textSize(20);
 
    
    if (posY>=30){
      posY--;
      //text(" Esta especie de mariposa diurna \nvive en los bosques tropicales desde \nMéxico, pasando América Central \nhasta América del Sur. \nAdemás, suelen volar cerca \ndel suelo y por dentro de \nla selva. \nCabe destacar que solamente \nsalen al sol y a zonas \nabiertas cuando necesitan \ncalentarse.", 480, posY+95);
    }
          text(" Esta especie de mariposa diurna \nvive en los bosques tropicales desde \nMéxico, pasando América Central \nhasta América del Sur. \nAdemás, suelen volar cerca \ndel suelo y por dentro de \nla selva. \nCabe destacar que solamente \nsalen al sol y a zonas \nabiertas cuando necesitan \ncalentarse.", 480, posY+95);

    contador++;
    if ( contador >= 500 ) {  
      estado = "p3";
      contador = 0;
     posY=height; 

    
  }
  }
  //-------------------------------------
  
  //pantalla 3
  if (estado.equals("p3")) {


      image(mariposap3, 0, 0);
      textAlign(CENTER);
      textSize(40);
      text("ALIMENTACIÓN", 335, 60);
      textSize(20);
      if (posY>=30){
      posY--;
    }
      text("Estas mariposas tienen una \nlengua enrollada llamada \nespiritrompa, que funciona \ncomo un popote para succionar. \nSu alimento tiene que ser \nforzosamente líquido, y se \nalimentan particularmente de \nfrutas en descomposición, aunque \ndurante su estadio de larva, se \nalimentan de una gran gama \nde plantas.", 480, posY+95);

    contador++;
    if ( contador >= 500 ) {  
      estado = "p4";
      contador = 0;
    posY=height; 

  
    }
  }
  //-------------------------------------
  
  //pantalla 4
  if (estado.equals("p4")) {


      image(mariposap4, 0, 0);
      textAlign(CENTER);
      textSize(40);
      text("SIGNIFICADO", 335, 60);
      textSize(20);
      if (posY>=30){
      posY--;
    }
      text("Hay animales que tienen \nsimbolismos para el hombre, \ny encontrarse con mariposas \nazules significa que ahora se \ntendrá buena suerte o que los \ndeseos están por cumplirse. Por \notro lado, cabe mencionar que \nno es posible encontrar \nmorphos azules fuera de su \nhábitat, pues están restringidas \na características ambientales \nmuy particulares.", 480, posY+95);

    contador++;
    if ( contador >= 500 ) {  
      estado = "final";
      contador = 0;
     posY=height; 

  
    }
  }
    //-------------------------------------
   //pantalla final
   

  if (estado.equals("final")) {


    image(final5, 0, 0);
    
    stroke(2);
    textAlign(CENTER);
    textSize(20);
    fill(#B4B4EE);
    circle(214,381,150);
    fill(0);
    text("Click aqui \npara volver a ver",214,381);
    
    

  }
}
  //-------------------------------------
   //boton pantalla final
   
   
  void mousePressed() {
    
    if (estado.equals("final")) {

  if( dist(214,381,mouseX, mouseY) < 150/2 ){
      estado = "inicio";
  
  
  
  
  
  }
  
  
  }
  }
