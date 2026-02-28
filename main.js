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

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2027-12-05T00:00:00");
const tempoObjetivo2 = new Date("2026-12-05T00:00:00");
const tempoObjetivo3 = new Date("2028-01-30T00:00:00");
const tempoObjetivo4 = new Date("2030-01-01T00:00:00");

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
        
        // Atualiza os elementos no HTML usando o índice i
        document.getElementById("dias" + i).textContent = valores[0];
        document.getElementById("horas" + i).textContent = valores[1];
        document.getElementById("min" + i).textContent = valores[2];
        document.getElementById("seg" + i).textContent = valores[3];
    }
}

function comecaCronometro() {
    atualizaCronometro(); // Chama uma vez logo de cara
    setInterval(atualizaCronometro, 1000); // Depois atualiza a cada 1 segundo
}

comecaCronometro();