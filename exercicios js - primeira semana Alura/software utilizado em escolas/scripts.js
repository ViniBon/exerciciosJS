/*1 Eles querem implementar um sistema para o cálculo de médias de cada turma, pois a escola criará uma gincana a cada mês, focando em uma disciplina específica. Para o mês atual, a disciplina escolhida é Matemática e o professor regente deve inserir as notas de todos os alunos da turma no sistema que você irá criar utilizando inicialmente e para testes o
prompt().
a) Exiba a mensagem: “Insira as notas de seus alunos. Quando acabar digite “SAIR”

b) Com o alert() exiba o resultado da média da turma após receber a mensagem “SAIR”

■ Lembre-se que a função prompt() retorna as entradas como strings */

let sair = false;
let notas = [];
let soma = 0;
let media = 0;
let j;

while(sair === false){
let entrada = prompt("Insira as notas, quando terminar digite 'SAIR'");
if(entrada === "SAIR" || entrada === "sair"){
sair = true;
for(let i = 0; i < notas.length; i++){
soma += notas[i];
if(i+1 == notas.length){
j = i+1
media = soma/j;
}
}

        alert("A média da turma é "+media);

}else{
    entrada = parseFloat(entrada);
    notas.push(entrada);
}
}
/* 
2. A diretoria também quer saber como anda o rendimento escolar dos alunos. Por isso, o sistema de notas dos alunos deve ter um funcionalidade com as seguintes regras:

Todos os professores devem inserir as notas de seus alunos no sistema, e o sistema calcula a média desse aluno
A média mínima esperada para a aprovação é 7.0
A diretoria solicita receber um e-mail sobre os alunos que não atingiram a média no bimestre, constando:
Nome do aluno ou aluna
Disciplina em que ficou abaixo da média
Média do bimestre nesta disciplina
Para testes e aprendizado, você pode utilizar o console.log ou o document.write()
 */

let notas = [];
let soma = 0;
let media = 0;
let nomeAluno;
let disciplina;

nomeAluno = prompt("Insira o nome do aluno");
disciplina = prompt("Insira o nome da disciplina");

while(notas.length < 2){
entrada = prompt("Insira as notas");
entrada = parseFloat(entrada);
notas.push(entrada);

if(notas.length == 2){
    for(let i = 0; i < 2 ; i++){
        soma += notas[i];
    }
media = soma/2;
}
}

if(media >= 7){
alert(`O aluno ${nomeAluno} foi aprovado na disciplina de ${disciplina} com a media de ${media}.`);
}else{
alert(`O aluno ${nomeAluno} foi reprovado na disciplina de ${disciplina} com a media de ${media}.`);
}

/* 
3. Após a diretoria aprovar tudo, eles querem que o software receba uma atualização! Agora esse sistema também possibilitará que o líder de uma turma seja escolhido conforme algumas regras. O software deve receber os 3 alunos mais indicados para a seleção, e com isso ele deve receber os seguintes dados:

a )Média escolar desses alunos em Língua Portuguesa

b) Em caso de empate, será avaliada a média escolar em Matemática

Sua função deve receber como parâmetro o nome dos alunos e as médias nas duas disciplinas. */

let maior;

let aluno1 = {
nome:"Hugo",
turma:"A1",
medias: {
matematica:8.9,
portugues:9.5
}
};

let aluno2 = {
nome:"Tais",
turma:"A1",
medias: {
matematica:9,
portugues:9.5
}
};

let aluno3 = {
nome:"Erick",
turma:"A1",
medias: {
matematica:9.5,
portugues:7.5
}
};

if(aluno1.medias.portugues == aluno2.medias.portugues ){
	aluno1.medias.matematica > aluno2.medias.matematica ? maior = aluno1: maior = aluno2;
}else{
	aluno1.medias.portugues > aluno2.medias.portugues ? maior = aluno1 : maior = aluno2;
}

 if(maior.medias.portugues == aluno3.medias.portugues){
	maior.medias.matematica > aluno3.medias.matematica ? maior = maior : maior = aluno3;
}else{
	maior.medias.portugues > aluno3.medias.portugues ? maior = maior : maior = aluno3;
}

console.log("O representante da turma sera "+maior.nome);
 