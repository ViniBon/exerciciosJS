/* Atribua valores coerentes para as variáveis abaixo e apresente as mesmas com o
console.log(). A variável pessoaBrasileira deverá receber um valor booleano (true ou false). */

/* var nome
var idade
var alturaEmMetro
var pessoaBrasileira */

let nome = "Julia";

let idade = 22;

let alturaEmMetro = 1.66;

let pessoaBrasileira = true;


console.log(pessoaBrasileira );

console.log(alturaEmMetro );

console.log(idade );

console.log(nome );


/* Crie 5 variáveis e atribua valores, respeitando os tipos de dados a serem armazenados. Em seguida, em uma variável chamada
profissional, concatene as variáveis abaixo formando uma string que faça sentido com os dados informados e apresente essa variável com o método document.write() em algum arquivo.html ou utilizando o console.log().

a. nome (string)
b. telefone (string)
c. se possui convênio médico ou não (booleano)
d. profissão (string)
e. salário (number)
 */
let nome = "João";

let telefone = 47998765321;

let convenio = true;

let profissao = "Marceneiro";

let salario = 2400;


let profissional = `Meu nome é ${nome}, atualmente trabalho como ${profissao}, ${convenio == true ? "tenho convenio médico e ganho" : "e ganho"} RS${salario} por mês. Vou deixar meu número pois desejo muito uma oportunidade melhor, ${telefone}. Obrigado! `


document.write( ` <div> ${profissional} </div> ` )

/* 
3. Crie uma lógica que armazene dois números inteiros em duas variáveis. Em seguida, troque o valor dessas variáveis e exiba na tela. Por exemplo, uma variável ae outra b, em algum momento avai valer b, e bvai valer a, mas quando a = b, o valor inicial de apode ser perdido, atenção! */


let a = 1;

let b = 2;

let aux;;


aux = a;

a = b;

b = aux;


/* 
a - 2

b - 1 
*/