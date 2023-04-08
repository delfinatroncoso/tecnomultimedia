
  PImage delfi;
  
void setup(){
  size (800,800);
  background(#72C989);
  
delfi=loadImage ("www.jpeg");
  
}

void draw (){
   

//madera
  noStroke();
  fill(201,173,114,100);
  quad(0,60,0,250,795,450,810,230);
  
  
  fill(0);
  
  triangle(410,120,410,325,660,120); //ala derecha
  triangle(410-250,120,400,325,650-250,120);//ala izquierda
  
  ellipse(529,120,260,35);
  ellipse(529-250,120,237,35);
  fill(35,131,214);
    ellipse(500,117,190,35);
  triangle(410,120,410,285,595,118); //ala derecha2
    ellipse(300,120,190,35);
  triangle(205,120,400,285,650-250,118); //ala derecha2

  
  
  strokeWeight(5); //antenas

  stroke(0);
  line(405,104,383,36);
  line(405,104,435,36);
  
    //lineas
  stroke(0,75);
  line(190,173-60,599,173-60);
  line(217,143,580,143);
  line(237,173,580,173);
  line(287,173+30,535,173+30);
  line(297,173+60,510,173+60);
  line(340,173+90,450,173+90);
  
  //detalles alas
  noStroke();
  fill(255);
  circle(568,140,5);
  circle(513,182,5);
  circle(514,104,5);
  circle(439,234,5);
  
  circle(568-300,140,5);
  circle(513-200,182,5);
  circle(514-200,104,5);
  circle(439-90,234,5);






  fill(93,78,47); //cuerpo
  noStroke();
  ellipse(405,190,40,200);
  triangle(393,110,416,108,404,85);
  
  //imagen 
  image(delfi,0,400);
  
  //nombre
  textSize(20);
  fill(101,31,178,10);
  text("Delfina Troncoso",612,27);
  



  

  
}
