//TRONCOSO DELFINA (91446/3)
//video:
let p=7;
let impantallas = new Array(p);
let immariposas =[] ;
let estado=0;
let botonjugar, botonmenu, botoncomojugar, botoncreditos, botonvolverajugar, botoninicio;
let red, mariposa3;
let cant =20;
let contador=0;
let tiempo= 0;
let x=[], y=[], velX=[], velY=[], r=[], atrapada=[];
//-------------------------------




function preload() {

  for ( let i = 0; i < p; i++ ) {
    impantallas[i] = loadImage( "data/pantalla" + i + ".png" );
  }
  red= loadImage("data/red.png");
  mariposa3= loadImage("data/mariposa3.png");
}

function setup() {
  createCanvas(600, 600);

  valores();
}


function draw() {

  print(mouseX);
  print(mouseY);
  //print(frameCount);


  botonjugar= (mouseX > 73 && mouseY > 490 && mouseX < 274 && mouseY < 566);
  botonmenu= (mouseX > 320 && mouseY > 494 && mouseX < 522 && mouseY < 575);
  botoncomojugar= (mouseX > 195 && mouseY > 246 && mouseX < 413 && mouseY < 310);
  botoncreditos= (mouseX > 195 && mouseY > 344 && mouseX < 413 && mouseY < 408);
  botoninicio= (mouseX > 224 && mouseY > 447 && mouseX < 404 && mouseY < 517);
  botonvolverajugar= (mouseX > 224 && mouseY > 348 && mouseX < 404 && mouseY < 438);

  switch(estado) {


    //------- pantalla: 0 principal
  case 0:
    image( impantallas[0], 0, 0 );

    break;
    //------- pantalla: 1 menu
  case 1:
    image( impantallas[1], 0, 0 );
    break;
    //------- pantalla: 2 creditos
  case 2:
    image( impantallas[2], 0, 0 );
    break;
    //------- pantalla: 3 como juegar
  case 3:
    image( impantallas[3], 0, 0 );
    break;
    //------- pantalla: 4 juego
  case 4:
    image( impantallas[4], 0, 0 );
    push()
      imageMode(CENTER);
    image(red, mouseX, mouseY, 70, 70);
    textSize(20)
      text(contador, 100, 41, 50, 50);
    text(tiempo/100, 220, 41, 50, 50);
    pop()
      actualizarElemento();
    //----------
    tiempo++
      if (tiempo>=30*frameRate()&&contador<30) {
      estado=6
    }
    if (contador>=15) {
      estado=5
    }
    break;
    //------- pantalla:5 ganaste
  case 5:
    image( impantallas[5], 0, 0 );


    break;
    //------- pantalla: 6 perdiste
  case 6:
    image( impantallas[6], 0, 0 );
    break;
  }
}

//EVENTOS (CREACION DE BOTONES)
function mouseClicked() {  //botones

  if ( estado == 0 && botonjugar) {
    estado = 4;
  }
  if ( estado == 0 && botonmenu) {
    estado = 1;
  }
  if ( estado == 5 && botonvolverajugar) {
    estado = 4;
    contador=0
      tiempo=0
      actualizarElemento();
      for ( let i=0; i<cant; i++ ) {
          atrapada[i]=false;}
  }
  if ( estado == 5 && botoninicio) {
    estado = 0;
  }
  if ( estado == 6 && botonvolverajugar) {
    estado = 4;
    contador=0
      tiempo=0
      actualizarElemento();
      
      for ( let i=0; i<cant; i++ ) {
          atrapada[i]=false;}
  }
  if ( estado == 6 && botoninicio) {
    estado = 0;
  }
  if ( estado == 1 && botoncomojugar) {
    estado = 3;
  }
  if ( estado == 1 && botoncreditos) {
    estado = 2;
  }
  if ( estado == 1 && botonX()) {
    estado = 0;
  }
  if ( estado == 2 && botonX()) {
    estado = 1;
  }
  if ( estado == 3 && botonX()) {
    estado = 1;
  }
  //COLISION-------------------------
  if (estado==4) {
    for ( let i=0; i<cant; i++ ) {
      if (dist ( x[i], y[i], mouseX, mouseY)< r[i]&& !atrapada[i]) {
        print (x[i]+"    "+ y[i] );
        contador++
          atrapada[i]=true;
      }
    }
  }
}

//para botones de X

function botonX() {
  return dist(mouseX, mouseY, 559, 559) <= 35;
}

function valores() {
  for ( let i=0; i<cant; i++ ) {
    //i -> 0 , 1 , 2 , 3
    atrapada[i]=false;
    r[i] = 20;
    x[i] = random( r[i], width-r[i] );
    y[i] = random( r[i], height/2 );
    velX[i] = random(-2, 2);
    velY[i] = random(-2, 2);
  }
}


function actualizarElemento() {
  moverMariposas();
  dibujarmariposa();
}

function moverMariposas() {
  for ( let i=0; i<cant; i++ ) {
    // i -> 0 , 1 , 2 , 3
    //comportamiento de movimiento
    x[i]+=velX[i];
    y[i]+=velY[i];
    //evaluar lo limites:
    if ( y[i] >= height-r[i] ) {
      y[i] = height-r[i];
      velY[i] = -velY[i];
    }
    if ( y[i] <= 0+r[i] ) {
      y[i] = 0+r[i];
      velY[i] = -velY[i];
    }
    //limites horizontales (comportamiento toroidal)
    if ( x[i] > width+r[i]  ) {
      x[i] = 0-r[i];
    }
    if ( x[i] < 0-r[i] ) {
      x[i] = width+r[i];
    }
  }
}
function dibujarmariposa() {
  for ( let i=0; i<cant; i++ ) {
    //dibujo
    if (!atrapada[i]) {
      push();
      imageMode(CENTER);
      image ( mariposa3, x[i], y[i], 55, 55)
        pop();
    }
  }
}
