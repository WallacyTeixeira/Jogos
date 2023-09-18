// Seleciona todos os elementos HTML com o atributo 'data-cell' (as células do jogo)
const cellElements = document.querySelectorAll("[data-cell]");

// Seleciona o elemento do tabuleiro (board) por seu atributo 'data-board'
const board = document.querySelector("[data-board]");

// Seleciona o elemento de mensagem de vitória por seu atributo 'data-winning-message-text'
const winningMenssageTextElement = document.querySelector(
  "[data-winning-menssage-text]"
);

// Seleciona o elemento de mensagem de vitória por seu atributo 'data-winning-message'
const winningMenssage = document.querySelector("[data-winning-menssage]");

// Seleciona o botão de reiniciar o jogo por seu atributo 'data-restart-button'
const restartButton = document.querySelector("[data-restart-button]");

// Variável para controlar de quem é a vez (X ou Círculo)
let isCircleTurn;

// Matriz que contém todas as combinações vencedoras possíveis no jogo
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Função para iniciar o jogo
const startGame = () => {
  // Define que não é a vez do círculo
  isCircleTurn = false;

  // Remove todas as classes 'circle' e 'x' das células, desvincula os eventos de clique e adiciona novamente o evento de clique com 'once: true' para que só possa ser clicado uma vez
  for (const cell of cellElements) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  }

  // Define a classe CSS para indicar de quem é a vez (círculo ou x)
  setBoardHoverClass();

  // Esconde a mensagem de vitória
  winningMenssage.classList.remove("show-winning-menssage");
};

// Função para encerrar o jogo (pode ser uma vitória ou empate)
const endGame = (isDraw) => {
  if (isDraw) {
    // Se for um empate, exibe a mensagem "Velha!"
    winningMenssageTextElement.innerText = "Velha!";
  } else {
    // Se não for empate, exibe qual jogador venceu
    winningMenssageTextElement.innerText = isCircleTurn
      ? "O Venceu!"
      : "X Venceu!";
  }
  // Exibe a mensagem de vitória
  winningMenssage.classList.add("show-winning-menssage");
};

// Função para verificar se algum jogador venceu
const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer);
    });
  });
};

// Função para verificar se o jogo empatou
const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

// Função para marcar uma célula com o símbolo (X ou Círculo)
const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

// Função para definir a classe CSS do tabuleiro para indicar de quem é a vez
const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

// Função para alternar a vez entre X e Círculo
const swapTurns = () => {
  isCircleTurn = !isCircleTurn;

  setBoardHoverClass();
};

// Função para lidar com o clique em uma célula
const handleClick = (e) => {
  // Obtém a célula clicada
  const cell = e.target;

  // Determina o símbolo a ser colocado (X ou Círculo)
  const classToAdd = isCircleTurn ? "circle" : "x";

  placeMark(cell, classToAdd);

  // Verifica se houve uma vitória
  const isWin = checkForWin(classToAdd);

  // Verifica se o jogo empatou
  const isDraw = checkForDraw();

  // Se houve uma vitória, encerra o jogo
  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    // Se o jogo empatou, encerra o jogo como empate
    endGame(true);
  } else {
    // Caso contrário, troca de jogador
    swapTurns();
  }
};

// Inicia o jogo quando a página é carregada
startGame();

// Adiciona um ouvinte de evento para o botão de reiniciar o jogo
restartButton.addEventListener("click", startGame); 
