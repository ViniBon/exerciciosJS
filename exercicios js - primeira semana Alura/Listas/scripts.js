/* 1. Crie uma lista chamada pessoa, coloque valores dentro dela como: nome (string), idade (inteiro), CPF (string), altura (decimal), se é maior de idade ou não (valor booleano true ou false). */

let nome = 'Patricia';
let idade = 30;
let cpf = 54394817410;
let altura = 1.56;
let maioridade = true;

let pessoa = [nome,idade,cpf,altura,maioridade];

/* 2. Crie um programa que recebe uma quantidade máxima de 10 de letras e ao final exibe todas elas no console. */

let letras = [];

while(letras.length <= 9){
    letras.length <= 9 ? letras.push(prompt('Digite uma letra')): letras.push(prompt('Digite a ultima letra'))
        if(letras.length == 10) {
            for( let i = 0; i < 10 ; i++){
                console.log(letras[i]);
        }
    }
}

/* 3. Considerando o exercício anterior, refaça ele criando uma lista que irá armazenar as letras e em seguida mostre no console:

a) A primeira letra digitada
b) A quarta letra digitada
c) A quinta letra digitada
d) A última letra digitada
e) O tamanho da lista criada
 */
let letras = [];

while(letras.length <= 9){
    letras.length <= 9 ? letras.push(prompt('Digite uma letra')): letras.push(prompt('Digite a ultima letra'))
        if(letras.length == 10) {
            console.log(letras[0]);
            console.log(letras[3]);
            console.log(letras[4]);
            console.log(letras[9]);
            console.log(letras.length);
    }
}