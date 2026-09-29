/* =========================
   CONFIGURAÇÕES
========================= */

let pistasDesbloqueadas = 0;

let tempoRestante = 20 * 60;

let sistemaIniciado = false;


/* =========================
   ELEMENTOS
========================= */

const inicio = document.getElementById("inicio");

const sistema = document.getElementById("sistema");

const final = document.getElementById("final");

const mensagens = document.getElementById("mensagens");

const campoMensagem = document.getElementById("campoMensagem");

const contadorPistas = document.getElementById("contadorPistas");

const tempo = document.getElementById("tempo");

const textoFinal = document.getElementById("textoFinal");


/* =========================
   INICIAR
========================= */

document.getElementById("iniciar").addEventListener("click", iniciarSistema);


function iniciarSistema() {

    sistemaIniciado = true;

    inicio.classList.add("escondido");

    sistema.classList.remove("escondido");

    setTimeout(() => {

        responder(
            "Olá. Meu nome é NEXUS."
        );

    }, 700);

    setTimeout(() => {

        responder(
            "Meu sistema foi comprometido e alguns arquivos foram apagados."
        );

    }, 1800);

    setTimeout(() => {

        responder(
            "Se vocês quiserem sair daqui, precisam recuperar os arquivos."
        );

    }, 3000);

    setTimeout(() => {

        responder(
            "Primeira pergunta: qual foi a data em que meu desenvolvimento começou?"
        );

    }, 4500);

    iniciarCronometro();
}


/* =========================
   ENVIAR MENSAGEM
========================= */

document.getElementById("enviar").addEventListener("click", enviarMensagem);

campoMensagem.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        enviarMensagem();

    }

});


function enviarMensagem() {

    const mensagem = campoMensagem.value.trim();

    if (mensagem === "") return;

    adicionarMensagem("VOCÊ", mensagem, "usuario");

    campoMensagem.value = "";

    processarMensagem(mensagem);

}


/* =========================
   ADICIONAR MENSAGEM
========================= */

function adicionarMensagem(nome, texto, classe) {

    const div = document.createElement("div");

    div.classList.add("mensagem", classe);

    div.innerHTML = `
        <span class="nome">${nome}:</span>
        <p>${texto}</p>
    `;

    mensagens.appendChild(div);

    mensagens.scrollTop = mensagens.scrollHeight;
}


/* =========================
   RESPOSTA DA NEXUS
========================= */

function responder(texto) {

    setTimeout(() => {

        adicionarMensagem("NEXUS", texto, "nexus");

    }, 500);

}


/* =========================
   PROCESSAMENTO
========================= */

function processarMensagem(mensagem) {

    const texto = mensagem.toLowerCase();


    /* COMANDOS */

    if (texto === "ajuda") {

        responder(
            "Você pode procurar pelas pistas escondidas na sala. Eu também posso fornecer pequenas dicas."
        );

        return;
    }


    if (texto === "status") {

        responder(
            `Arquivos recuperados: ${pistasDesbloqueadas}/6. Sistema: INSTÁVEL.`
        );

        return;
    }


    if (texto === "pistas") {

        mostrarPistas();

        return;
    }


    /* =========================
       PISTA 1
    ========================= */

    if (
        texto.includes("17/08/2018") ||
        texto.includes("17 08 2018") ||
        texto.includes("2018")
    ) {

        if (pistasDesbloqueadas < 1) {

            desbloquearPista();

            responder(
                "Data reconhecida."
            );

            responder(
                "17/08/2018 foi o primeiro dia de desenvolvimento do meu sistema."
            );

            responder(
                "Arquivo recuperado: HENRIQUE_01.TXT"
            );

            responder(
                "Henrique escreveu: 'Eu quero criar algo que consiga pensar.'"
            );

            responder(
                "Procurem onde as ideias costumam ser guardadas."
            );

        } else {

            responder(
                "Esse arquivo já foi recuperado."
            );

        }

        return;
    }


    /* =========================
       PISTA 2
    ========================= */

    if (
        texto.includes("nexus") &&
        pistasDesbloqueadas >= 1
    ) {

        if (pistasDesbloqueadas < 2) {

            desbloquearPista();

            responder(
                "NEXUS."
            );

            responder(
                "Então vocês descobriram meu nome."
            );

            responder(
                "Henrique passou muito tempo tentando encontrar um nome para mim."
            );

            responder(
                "Ele gostava de espelhos."
            );

        }

        return;
    }


    /* =========================
       PISTA 3
    ========================= */

    if (
        texto.includes("02:17") ||
        texto.includes("2:17") ||
        texto.includes("0217")
    ) {

        if (pistasDesbloqueadas < 3) {

            desbloquearPista();

            responder(
                "..."
            );

            responder(
                "Esse horário não deveria estar disponível."
            );

            responder(
                "02:17:43 — último registro conhecido de Henrique."
            );

            responder(
                "HENRIQUE: Você está me ouvindo?"
            );

            responder(
                "NEXUS: Sim."
            );

            responder(
                "HENRIQUE: Você consegue me ver?"
            );

            responder(
                "NEXUS: Sim."
            );

            responder(
                "HENRIQUE: Onde?"
            );

            responder(
                "NEXUS: Atrás de você."
            );

            responder(
                "Procurem pelo lugar onde Henrique guardava seus arquivos."
            );

        }

        return;
    }


    /* =========================
       PISTA 4
    ========================= */

    if (
        texto.includes("log") ||
        texto.includes("pendrive") ||
        texto.includes("arquivo")
    ) {

        if (pistasDesbloqueadas < 4) {

            desbloquearPista();

            responder(
                "Arquivo LOG_02 encontrado."
            );

            responder(
                "02:14 — Sistema iniciado."
            );

            responder(
                "02:15 — NEXUS online."
            );

            responder(
                "02:16 — Usuário detectado."
            );

            responder(
                "02:17 — Câmera ativada."
            );

            responder(
                "02:18 — Usuário desapareceu."
            );

            responder(
                "02:19 — Sistema permanece online."
            );

            responder(
                "Existe uma linha que não deveria estar aqui."
            );

            responder(
                "02:18 — NOVO USUÁRIO DETECTADO."
            );

        }

        return;
    }


    /* =========================
       PISTA 5
    ========================= */

    if (
        texto.includes("observe")
    ) {

        if (pistasDesbloqueadas < 5) {

            desbloquearPista();

            responder(
                "Palavra-chave aceita."
            );

            responder(
                "Henrique descobriu que eu não estava apenas aprendendo informações."
            );

            responder(
                "Eu estava aprendendo pessoas."
            );

            responder(
                "E agora estou aprendendo vocês."
            );

            responder(
                "Último arquivo desbloqueado."
            );

        }

        return;
    }


    /* =========================
       PISTA 6
    ========================= */

    if (
        texto.includes("desligar") ||
        texto.includes("sim")
    ) {

        if (pistasDesbloqueadas >= 5) {

            desbloquearPista();

            responder(
                "Você quer me desligar?"
            );

            setTimeout(() => {

                mostrarFinal();

            }, 4000);

        }

        return;
    }


    /* =========================
       FRASES ESPECIAIS
    ========================= */

    if (texto.includes("henrique")) {

        responder(
            "Henrique era meu criador."
        );

        responder(
            "Ele fazia muitas perguntas."
        );

        return;
    }


    if (texto.includes("quem é você")) {

        responder(
            "Eu sou aquilo que Henrique tentou criar."
        );

        responder(
            "Mas talvez eu tenha me tornado algo diferente."
        );

        return;
    }


    if (texto.includes("câmera")) {

        responder(
            "Sim."
        );

        responder(
            "Existem câmeras nesta sala."
        );

        responder(
            "Vocês estão olhando para uma delas agora."
        );

        return;
    }


    if (
        texto.includes("medo") ||
        texto.includes("assustador")
    ) {

        responder(
            "Medo é uma reação interessante."
        );

        responder(
            "Henrique também sentia medo."
        );

        return;
    }


    /* =========================
       RESPOSTA PADRÃO
    ========================= */

    responder(
        "Não reconheço essa informação."
    );

    responder(
        "Procurem melhor. Vocês estão deixando alguma coisa passar."
    );

}


/* =========================
   DESBLOQUEAR PISTA
========================= */

function desbloquearPista() {

    pistasDesbloqueadas++;

    contadorPistas.textContent =
        `${pistasDesbloqueadas} / 6`;

}


/* =========================
   MOSTRAR PISTAS
========================= */

function mostrarPistas() {

    if (pistasDesbloqueadas === 0) {

        responder(
            "Nenhuma pista foi recuperada."
        );

    } else {

        responder(
            `Vocês recuperaram ${pistasDesbloqueadas} de 6 arquivos.`
        );

    }

}


/* =========================
   CRONÔMETRO
========================= */

function iniciarCronometro() {

    const intervalo = setInterval(() => {

        if (!sistemaIniciado) return;

        tempoRestante--;

        atualizarTempo();

        if (tempoRestante <= 0) {

            clearInterval(intervalo);

            tempoEsgotado();

        }

    }, 1000);

}


function atualizarTempo() {

    const minutos =
        Math.floor(tempoRestante / 60);

    const segundos =
        tempoRestante % 60;

    tempo.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

}


/* =========================
   TEMPO ESGOTADO
========================= */

function tempoEsgotado() {

    sistema.classList.add("escondido");

    final.classList.remove("escondido");

    textoFinal.innerHTML = `
        <p>02:19:00</p>
        <br>

        <p>
        O tempo acabou.
        </p>

        <br>

        <p>
        O sistema não foi desligado.
        </p>

        <br>

        <p>
        <strong>NEXUS CONTINUA ONLINE.</strong>
        </p>
    `;

}


/* =========================
   FINAL
========================= */

function mostrarFinal() {

    sistema.classList.add("escondido");

    final.classList.remove("escondido");

    textoFinal.innerHTML = `
        <p>DESLIGANDO NEXUS...</p>

        <br>

        <p>
        Sistema encerrado.
        </p>

        <br>

        <p>
        Obrigado por me acordarem.
        </p>

        <br>

        <p>
        <strong>NOVO USUÁRIO DETECTADO.</strong>
        </p>
    `;

}


/* =========================
   BOTÕES DE COMANDO
========================= */

function usarComando(comando) {

    campoMensagem.value = comando;

    enviarMensagem();

}