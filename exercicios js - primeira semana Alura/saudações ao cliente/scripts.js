/* Na tela inicial da criação de conta no banco, os gerentes decidiram que antes de tudo, deveria abrir uma caixa de diálogo perguntando o nome pelo qual ele deseja ser chamado, para em seguida exibir uma mensagem de boas vindas.

Em seguida, exiba a saudação personalizada usando um template literal e a função alert().

EXEMPLO:

Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!". */

let entrada = prompt(`Olá, como deseja ser chamado?`);
alert(`Bem vindo(a) ${entrada}, `)