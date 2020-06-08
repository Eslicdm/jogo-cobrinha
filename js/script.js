let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); // renderiza o desenho do canvas e reconhece que é 2d
let box = 32; // define os quadrados do canvas
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}

let direction = "right";

let food = { // cria a comidinha em lugar aleatório
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
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

function drawFood() { // desenha a comidinha
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

// define as direções de movimento de acordo com os botões apertados, o keyCode define a tecla
function update(event) {
  if(event.keyCode == 65 && direction != "right") direction = "left";
  if(event.keyCode == 87 && direction != "down") direction = "up";
  if(event.keyCode == 68 && direction != "left") direction = "right";
  if(event.keyCode == 83 && direction != "up") direction = "down";
}

function iniciarJogo() {
  // faz a cobra atravessar e sair do outro lado
  if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
  if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
  if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
  if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

  // finaliza o jogo com impacto
  for(i = 1; i < snake.length; i++) {
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
      clearInterval(jogo);
      alert("Game Over"); 
    }
  }
  
  // aplica as funções
  criarBG();
  criarCobrinha();
  drawFood();

  // Cria a movimentação da cobrinha
  let snakeX = snake[0].x
  let snakeY = snake[0].y 

  // Adiciona um quadrado a mais na caixa de acordo com o movimento da cobra simulando um movimento
  if(direction == "right") snakeX += box;
  if(direction == "left") snakeX -= box;
  if(direction == "up") snakeY -= box;
  if(direction == "down") snakeY += box;

  // A cobrinha come a comida
  if(snakeX != food.x || snakeY != food.y) {
    snake.pop()
  } else {
    food.x = Math.floor(Math.random() * 15 + 1) * box;
    food.y = Math.floor(Math.random() * 15 + 1) * box;
  }

  // Cria um novo corpo para a cobrinha
  let newHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead); // Unshift adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado
}

let jogo = setInterval(iniciarJogo, 100);