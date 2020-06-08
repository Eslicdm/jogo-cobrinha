let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho do canvas e reconhece que é 2d
let box = 32; // define o quadrado do canvas
snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

function criarBG() { // define o canvas
  context.fillStyle = "lightgreen"; // cor do canvas
  context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o canvas. Posições: x, y, altura, largura
}

function criarCobrinha() { // cria a cobrinha
  for(i = 0; i < snake.length; i++) { 
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box) // O fillRect cria a estrutura
  }
}

// aplica as funções
criarBG();
criarCobrinha();

let jogo = setInterval(iniciarJogo, 100);