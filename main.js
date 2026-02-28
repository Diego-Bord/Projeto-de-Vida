// Lógica de troca de abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Configuração dos Cronômetros
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2030-01-04T00:00:00");
const tempoObjetivo2 = new Date("2028-01-03T00:00:00");
const tempoObjetivo3 = new Date("2026-12-02T00:00:00");
const tempoObjetivo4 = new Date("2027-12-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal > 0) {
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const valores = calculaTempo(tempos[i]);
        
        // Atualiza o HTML e garante que sempre tenha 2 dígitos (ex: 05 em vez de 5)
        document.getElementById("dias" + i).textContent = valores[0];
        document.getElementById("horas" + i).textContent = valores[1].toString().padStart(2, '0');
        document.getElementById("min" + i).textContent = valores[2].toString().padStart(2, '0');
        document.getElementById("seg" + i).textContent = valores[3].toString().padStart(2, '0');
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();