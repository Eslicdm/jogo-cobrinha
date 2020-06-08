let canvas = document.getElementById("snake");
let canvas = canvas.getContext("2d"); // renderiza o desenho do canvas e reconhece que é 2d
let box = 32; // define o quadrado do canvas

function criarBG() { // define o canvas
  context.fillStyle = "lightgreen"; // cor do canvas
  context.fillRect(0, 0, 16 * box, 16 * box); // Desenha o canvas. Posições: x, y, altura, largura
}

// aplica as funções
criarBG();

let jogo = setInterval(iniciarJogo, 100);