let cidade1 = {nome:"Belo Horizonte",qtdClientes:23,faturamento:2950, lucro: 0};
let cidade2 = {nome:"São Pulo",qtdClientes:12,faturamento:3950, lucro: 0};
let cidade3 = {nome:"Salvador",qtdClientes:11,faturamento:1329, lucro: 0};
let cidade4 = {nome:"Campo Grande",qtdClientes:10,faturamento:2412, lucro: 0};
let cidade5 = {nome:"Curitiba",qtdClientes:8,faturamento:626, lucro: 0};

let somaClientes = cidade1.qtdClientes+cidade2.qtdClientes+cidade3.qtdClientes+cidade4.qtdClientes+cidade5.qtdClientes;

console.log(`Nas capitais de BH, SP, BA, MS e PR, Jéssica possui ${somaClientes} clientes.`);

console.log(`Faturamento médio por cliente:
${cidade1.nome}: ${Math.round(cidade1.faturamento/cidade1.qtdClientes)}
${cidade2.nome}: ${Math.round(cidade2.faturamento/cidade2.qtdClientes)}
${cidade3.nome}: ${Math.round(cidade3.faturamento/cidade3.qtdClientes)}
${cidade4.nome}: ${Math.round(cidade4.faturamento/cidade4.qtdClientes)}
${cidade5.nome}: ${Math.round(cidade5.faturamento/cidade5.qtdClientes)}
`);

let totalClientes = cidade1.qtdClientes+cidade2.qtdClientes+cidade3.qtdClientes+cidade4.qtdClientes+cidade5.qtdClientes;
let totalFaturamento = cidade1.faturamento+cidade2.faturamento+cidade3.faturamento+cidade4.faturamento+cidade5.faturamento;
console.log(`Faturamento médio por cliente nas cinco cidades onde Jéssica mais tem clientes ativos é de R$${totalFaturamento/totalClientes}`);


let frete
cidade1.nome == "São Paulo" ? frete = 14: frete = 9;
cidade1.lucro = (((cidade1.faturamento - frete)*20)/100);

cidade2.nome == "São Paulo" ? frete = 14: frete = 9;
cidade2.lucro = (((cidade2.faturamento - frete)*20)/100);

cidade3.nome == "São Paulo" ? frete = 14: frete = 9;
cidade3.lucro = (((cidade3.faturamento - frete)*20)/100);

cidade4.nome == "São Paulo" ? frete = 14: frete = 9;
cidade4.lucro = (((cidade4.faturamento - frete)*20)/100);

cidade5.nome == "São Paulo" ? frete = 14: frete = 9;
cidade5.lucro = (((cidade5.faturamento - frete)*20)/100);

console.log(`Lucro por cidades
${cidade1.nome}: ${cidade1.lucro}
${cidade2.nome}: ${cidade2.lucro}
${cidade3.nome}: ${cidade3.lucro}
${cidade4.nome}: ${cidade4.lucro}
${cidade5.nome}: ${cidade5.lucro}
`)