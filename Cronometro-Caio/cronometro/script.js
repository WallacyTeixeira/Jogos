// script.js
let tempoAtual = 0;
let interval;
let emExecucao = false;

function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function atualizarTempo() {
    tempoAtual++;
    document.querySelector('.tempo').textContent = formatarTempo(tempoAtual);
}

document.querySelector('.iniciar').addEventListener('click', () => {
    if (!emExecucao) {
        interval = setInterval(atualizarTempo, 1000);
        emExecucao = true;
    }
});

document.querySelector('.parar').addEventListener('click', () => {
    clearInterval(interval);
    emExecucao = false;
});

document.querySelector('.zerar').addEventListener('click', () => {
    clearInterval(interval);
    emExecucao = false;
    tempoAtual = 0;
    document.querySelector('.tempo').textContent = formatarTempo(tempoAtual);
});
