
let objAventura;

let impantallas = [];
let textos = [];
let botones = [];
let p = 16;
let pantallajuego4;//
let immariposas = [];
let red;
let mariposa3;


function preload() {  //cargo imagenes
  for (let i = 0; i < p; i++) {
    impantallas[i] = loadImage("data/pantalla" + i + ".png");
  }
  //agrego textos con for y arreglos
  for ( let a = 0; a < p; a++ ) {
    textos = loadStrings("data/textos.txt");
  }

  //agrego botones con for y arreglos
  for ( let b = 0; b < p+2; b++ ) {
    botones = loadStrings("data/botones.txt");
  }

  red = loadImage("data/red.png");
  mariposa3 = loadImage("data/mariposa3.png");
  pantallajuego4= loadImage("data/pantallajuego4.png")
}

function setup() {
  createCanvas(600, 600)
    objAventura = new Aventura (impantallas, textos, botones,red,immariposas,pantallajuego4) //creacion del objeto objAventura de la clase Aventura
}


function draw() {
  objAventura.draw();
}

function mouseClicked() {
  objAventura.mouseClicked();
}

function keyPressed() {
  objAventura.keyPressed();
}
