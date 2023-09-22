let titulo = document.querySelector("h1").innerHTML = "Hora do Desafio";

function botaoClicado() {
    console.log("O botão foi clicado!")
}

/* Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você. */

function cidadeBrasil() {
    cidade = prompt("Diga uma cidade do Brasil.");
    return alert(`Estive em ${cidade} e lembrei de você`);
}
/* 
Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado. */

function amoJs() {
    alert(`Eu amo JS`);
}
/* 
Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta. */

function soma() {
    n1 = parseInt(prompt("Digite um número"));
    n2 = parseInt(prompt("Digite mais um número"));
    let soma = n1+n2;
    return alert(`A soma dos números é ${soma}.`);
}

