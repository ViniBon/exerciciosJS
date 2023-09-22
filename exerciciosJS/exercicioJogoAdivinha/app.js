let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let input = document.querySelector("input");
let novoJogo = document.querySelector("#reiniciar");

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

exibirMensagemInicial() ;

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!")
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa" ;
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        novoJogo.removeAttribute("disabled");
    }else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número é menor que seu chute.");
        }else{
            exibirTextoNaTela("p", "O número é maior que seu chute.");
        }
        input.value = "";
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    input.value = "";
    tentativas = 1;
    exibirMensagemInicial();
    novoJogo.setAttribute("disabled", true);
}