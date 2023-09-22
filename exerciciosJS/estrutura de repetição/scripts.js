/* 1. Com as estruturas de repetição
for e while, faça o que se pede:

a) Mostre os números de 1 a 50 na tela, dizendo se é par ou ímpar: */

//exemplo
/* ` 1 é ímpar
    2 é par
  3 é ímpar` */
//...
/* ` 49 é ímpar
  50 é par` */


for( let i = 1; i<= 50 ; i++){
i%2 == 0? console.log(`${i} é par`) : console.log(`${i} é impar`);
}

let i = 1;
while( i <= 50){
i%2 == 0? console.log(`${i} é par`) : console.log(`${i} é impar`);
i++
}

/* b) Mostre apenas os múltiplos de 3 entre 1 e 100:

3 6 9 12 ... 93 96 99
‌ */

for( let i = 1; i<= 100 ; i++){
i%3 == 0? console.log(i) : console.log("");
}

/* c) Mostre a seguinte sequência (de 100 até 0, pulando de dois em dois):

100 98 96 94 92 ... 6 4 2 0 */

for( let i = 100; i >= 0 ; i--){
i%2 == 0? console.log(i) : console.log("");
}

/* 2.O jogo do PIM é um jogo em que o Sílvio Santos pedia para os participantes de seu programa contar de

1 até 40 da seguinte forma:

"1, 2, 3, PIM, 5, 6, 7, PIM, 9, 10, 11, PIM, 13, 14, 15, PIM, 17, 18, 19, PIM, 21, 22, 23, PIM, 25, 26, 27, PIM, 29, 30, 31, PIM, 33, 34, 35, PIM, 37, 38, 39, PIM!"
Ou seja, quando o número era múltiplo de 4, o jogador tinha que falar PIM ao invés do número! Crie uma lógica que executa o jogo do PIM corretamente. */

for( let i = 1; i <= 40 ; i++){
i%4 == 0? console.log("PIM") : console.log(i);
}