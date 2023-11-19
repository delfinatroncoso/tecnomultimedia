
//TRONCOSO DELFINA
//Video:

let juego;


let impantallas = [];//
let immariposas = [];
let red;
let mariposa3;


function preload() {  //cargo imagenes
  for (let i = 0; i < 7; i++) {
    impantallas[i] = loadImage("data/pantalla" + i + ".png");
  }
  red = loadImage("data/red.png");
  mariposa3 = loadImage("data/mariposa3.png");
}


function setup() {
  createCanvas(600, 600);
  juego = new Juego(impantallas, immariposas, red, mariposa3); // creo el objeto juego de la clase Juego
}

function draw() {
 juego.draw();
}

function mouseClicked() {
  juego.mouseClicked();
  
}
