/* No Brasil, uma pessoa é obrigada a votar se tiver idade entre 18 e 70 anos. Acima de 70 anos o voto é opcional, assim como para quem tem 16 ou 17 anos. Quem ainda não completou 16 anos não pode votar. Através de estruturas condicionais, crie um programa que dirá se uma pessoa pode ou não votar, de acordo com a idade que será armazenada em uma variável.

■ Se desejar, você pode utilizar o prompt() e pedir para que a pessoa usuária digite uma idade! */

let entrada = prompt("Digite sua idade");

if(entrada > 70 || entrada == 16 || entrada == 17){

alert("O voto é opcional");

}else if(entrada <= 70 && entrada >= 18){

alert("O voto é obrigatório");

}else{

alert("Não tem idade para votar");

}