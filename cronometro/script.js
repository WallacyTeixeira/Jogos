// Inicialização de variáveis
let tempoAtual = 0;  // Armazena o tempo atual em segundos
let interval;        // Armazena o identificador do intervalo usado para atualizar o tempo
let emExecucao = false;  // Indica se o cronômetro está em execução

// Função para formatar o tempo no formato HH:MM:SS
function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Função para atualizar o tempo e exibi-lo na página
function atualizarTempo() {
    tempoAtual++;  // Incrementa o tempo atual em 1 segundo
    document.querySelector('.tempo').textContent = formatarTempo(tempoAtual);  // Atualiza a exibição do tempo na página
}

// Event listener para o botão "Iniciar"
document.querySelector('.iniciar').addEventListener('click', () => {
    if (!emExecucao) {  // Verifica se o cronômetro não está em execução
        interval = setInterval(atualizarTempo, 1000);  // Inicia um intervalo de 1 segundo para atualizar o tempo
        emExecucao = true;  // Define que o cronômetro está em execução
    }
});

// Event listener para o botão "Parar"
document.querySelector('.parar').addEventListener('click', () => {
    clearInterval(interval);  // Para o intervalo de atualização do tempo
    emExecucao = false;  // Define que o cronômetro não está mais em execução
});


// Event listener para o botão "Zerar"
document.querySelector('.zerar').addEventListener('click', () => {
    clearInterval(interval);  // Para o intervalo de atualização do tempo
    emExecucao = false;  // Define que o cronômetro não está mais em execução
    tempoAtual = 0;  // Reseta o tempo atual para zero
    document.querySelector('.tempo').textContent = formatarTempo(tempoAtual);  // Atualiza a exibição do tempo na página
});
