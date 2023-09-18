// Obtém uma referência para os botões e a lâmpada por meio de seus IDs
const botaoLig = document.getElementById("botaoLig"); // Obtém o botão de ligar
const botaoDes = document.getElementById("botaoDes"); // Obtém o botão de desligar
const resetar = document.getElementById("resetar"); // Obtém o botão de resetar
const lamp = document.getElementById("lamp"); // Obtém a imagem da lâmpada

// Inicializa uma variável para contar os cliques, começando em 0
var contClik = 0;

// Função para ligar a lâmpada
function lampON() {
  // Verifica se o número de cliques é menor que 10
  if (contClik < 10) {
    // Muda a imagem da lâmpada para a versão acesa
    lamp.src = "img/LampadaAcessa.png";
    // Incrementa a contagem de cliques
    contClik++;
    // Exibe um alerta com o total de cliques
    alert(`Lâmpada ligada! Total de cliques: ${contClik}`);
  } else {
    // Se houver mais de 10 cliques, chama a função que quebra a lâmpada
    lampDeuRuim();
    // Exibe um alerta informando que a lâmpada quebrou
    alert("A lâmpada quebrou!");
  }
}

// Função para desligar a lâmpada
function lampOFF() {
  // Muda a imagem da lâmpada de volta para a versão apagada
  lamp.src = "img/LampadaApagada2.png";
}

// Função para resetar o estado da lâmpada
function resetarEstado() {
  // Retorna a imagem da lâmpada para a versão apagada
  lamp.src = "img/LampadaApagada2.png";
  // Reinicia a contagem de cliques
  contClik = 0;
  // Reativa o evento de clique no botão de ligar
  botaoLig.addEventListener("click", lampON);
  // Reativa o evento de clique no botão de desligar
  botaoDes.addEventListener("click", lampOFF);
}

// Função para quando a lâmpada quebra
function lampDeuRuim() {
  // Muda a imagem da lâmpada para a versão quebrada
  lamp.src = "img/LampadaQuebrado3.png";
  // Remove o evento de clique no botão de ligar (a lâmpada não pode ser ligada novamente)
  botaoLig.removeEventListener("click", lampON);
  // Remove o evento de clique no botão de desligar (a lâmpada não pode ser desligada novamente)
  botaoDes.removeEventListener("click", lampOFF);
}

// Adiciona eventos de clique aos botões
botaoLig.addEventListener("click", lampON); // Quando o botão de ligar é clicado, chama a função lampON
botaoDes.addEventListener("click", lampOFF); // Quando o botão de desligar é clicado, chama a função lampOFF
resetar.addEventListener("click", resetarEstado); // Quando o botão de resetar é clicado, chama a função resetarEstado
