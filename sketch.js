// variaveis bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametrobolinha = 20;
let raio = diametrobolinha/2;

//  variaveis velocidade
let xvelocidade = 4;
let yvelocidade = 6;

// variaveis raquete
let xraquete = 10;
let yraquete = 155;
let larguraraquete = 10;
let alturaraquete = 90;
let xraqueteoponente = 580;
let yraqueteoponente = 155;

let meuplacar = 0;
let placaroponente = 0;

let trilha;
let ponto;
let raquetada;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  
}

function draw() {
  background(0);
  desenhabolinha();
  movimentabolinha();
  verificaborda();
  desenharaquete(xraquete, yraquete);
  desenharaquete(xraqueteoponente, yraqueteoponente)
  movimentaraquete();
  movimentaraqueteoponente();
  colisaoraquete();
  placar();
  contabilizaplacar();
  
}

function desenhabolinha () {
  circle(xbolinha,ybolinha,diametrobolinha);
  color(255,255,255)}
  
function movimentabolinha(){
  xbolinha += xvelocidade;
  ybolinha += yvelocidade;
}
    
function verificaborda(){
  if(xbolinha > (width - raio)|| xbolinha < (0 + raio)) {
   xvelocidade = xvelocidade * (-1); 
  }
  if(ybolinha > (height - raio) || ybolinha < (0 + raio)){
    yvelocidade = yvelocidade * (-1);
  }
}
function desenharaquete (x, y){
  rect(x, y, larguraraquete, alturaraquete);
  color(255,255,255);}
  
function movimentaraquete(){
  if(keyIsDown (UP_ARROW)) {
    yraqueteoponente -= 10;
  }
  if(keyIsDown (DOWN_ARROW)) {
    yraqueteoponente += 10;
  }
}
function movimentaraqueteoponente(){
  if(keyIsDown (87)) {
    yraquete -= 10;
  }
  if(keyIsDown (83)) {
    yraquete += 10;
  }
}
function colisaoraquete(){
  if(xbolinha - raio <= xraquete + larguraraquete && 
     ybolinha + raio >= yraquete &&
    ybolinha - raio <= yraquete + alturaraquete){
    xvelocidade *= -1;
    raquetada.play();
  }
  if(xbolinha + raio >= xraqueteoponente && 
     ybolinha + raio >= yraqueteoponente &&
    ybolinha - raio <= yraqueteoponente + alturaraquete){
    xvelocidade *= -1;
    raquetada.play();
  }
}

function placar(){
  text(meuplacar, 250, 20);
  text(placaroponente, 350, 20)
  
}
function placar(){
  fill('orange');
  rect(130, 5, 40, 25);
  rect(430, 5, 40, 25);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(meuplacar, 150, 25);
  text(placaroponente, 450, 25);
}
function contabilizaplacar(){
  if(xbolinha - raio <= 0){
    placaroponente += 1;
    ponto.play();
  }
  if(xbolinha + raio >= width){
    meuplacar += 1;
    ponto.play();
  }
  }
function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3")
  ponto = loadSound("ponto.mp3")
}

  



  
  
  





  
