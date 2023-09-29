let entrada;
let user1 = {};

function calculaInvestimento(valor, periodo = 1) {
	let valorFinalInvestimento;
	let frasePeriodo =  periodo == 1 ? `mês` : `meses`;

	if (valor >= 1 && valor < 100) {
		valorFinalInvestimento = valor*((1 + 0.012)**periodo);
		return alert(`O seu investimento no periodo de ${periodo} ${frasePeriodo} irá resultar em um montante final de R$${valorFinalInvestimento.toFixed(2)}.`);
	}else if(valor >= 100 && valor < 500){
		valorFinalInvestimento = valor*((1 + 0.0178)**periodo);
		return alert(`O seu investimento no periodo de ${periodo} ${frasePeriodo} irá resultar em um montante final de R$${valorFinalInvestimento.toFixed(2)}.`);
	}else{
		if (periodo == 12) {
			valorFinalInvestimento = valor*((1 + 0.044)**periodo);
			return alert(`O seu investimento no periodo de ${periodo}  ${frasePeriodo} irá resultar em um montante final de R$${valorFinalInvestimento.toFixed(2)}.`);
		}else{
			valorFinalInvestimento = valor*((1 + 0.026)**periodo);
			return alert(`O seu investimento no periodo de ${periodo} ${frasePeriodo} irá resultar em um montante final de R$${valorFinalInvestimento.toFixed(2)}.`);
		}
	}
}

function cadastro(user){
	entrada = prompt("Bem vindo ao Nubanco! Como deseja ser chamado?");
	user1.apelido = entrada;

	user1.sexo = ""
	
	while(user1.sexo == ""){
		entrada = prompt(`${user1.apelido}, selecione seu sexo
1 - Masculino
2- Feminino
3 - Outro
`);
			switch(entrada){
			case "1":
				user1.sexo = "M";
				break;
			case "2":
				user1.sexo = "F";
				break;
			case "3":
				user1.sexo = "O";
				break;
			default:
				alert("Inválido");
		};
	}
	
	if(user1.sexo == "M"){
	entrada = alert(`${user1.apelido}, precisamos de uma foto sua, por favor aperte o botão "OK" para tirar a foto`);
	alert(`
▓▓▓▓
▒▒▒▓▓
▒▒▒▒▒▓
▒▒▒▒▒▒▓
▒▒▒▒▒▒▓
▒▒▒▒▒▒▒▓
▒▒▒▒▒▒▒▓▓▓
▒▓▓▓▓▓▓░░░▓
▒▓░░░░▓░░░░▓
▓░░░░░░▓░▓░▓
▓░░░░░░▓░░░▓
▓░░▓░░░▓▓▓▓
▒▓░░░░▓▒▒▒▒▓
▒▒▓▓▓▓▒▒▒▒▒▓
▒▒▒▒▒▒▒▒▓▓▓▓
▒▒▒▒▒▓▓▓▒▒▒▒▓
▒▒▒▒▓▒▒▒▒▒▒▒▒▓
▒▒▒▓▒▒▒▒▒▒▒▒▒▓
▒▒▓▒▒▒▒▒▒▒▒▒▒▒▓
▒▓▒▓▒▒▒▒▒▒▒▒▒▓
▒▓▒▓▓▓▓▓▓▓▓▓▓
▒▓▒▒▒▒▒▒▒▓
▒▒▓▒▒▒▒▒▓
	`);
	}else if(user1.sexo == "F"){
	entrada = alert(`${user1.apelido}, precisamos de uma foto sua, por favor aperte o botão "OK" para tirar a foto`);
	alert(`
────────██████████████████████───────
──────██████████████████████████──────
────██████████████████████████████────
────████████████████████████████████──
──████████▒▒▒▒██████████████████████──
──██████▒▒▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██████████──
──██████▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒██████████
██████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒████▒▒████
██████▒▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒▒▒████
██████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████
██████▒▒░░░░▒▒██▒▒▒▒██▒▒░░░░▒▒████████
████████░░░░▒▒▒▒████▒▒▒▒░░░░██████████
████████████▒▒▒▒▒▒▒▒▒▒▒▒██████████████
──██──████████████▒▒▒▒██████████──██──
────────────────██▒▒▒▒██──────██──────
	`);	
	}else{
	entrada = alert(`${user1.apelido}, precisamos de uma foto sua, por favor aperte o botão "OK" para tirar a foto`);
	alert(`
░░░░░░░░░░░░░░░░░░░░░▄▀░░▌
░░░░░░░░░░░░░░░░░░░▄▀▐░░░▌
░░░░░░░░░░░░░░░░▄▀▀▒▐▒░░░▌
░░░░░▄▀▀▄░░░▄▄▀▀▒▒▒▒▌▒▒░░▌
░░░░▐▒░░░▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒█
░░░░▌▒░░░░▒▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄
░░░░▐▒░░░░░▒▒▒▒▒▒▒▒▒▌▒▐▒▒▒▒▒▀▄
░░░░▌▀▄░░▒▒▒▒▒▒▒▒▐▒▒▒▌▒▌▒▄▄▒▒▐
░░░▌▌▒▒▀▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▒█▄█▌▒▒▌
░▄▀▒▐▒▒▒▒▒▒▒▒▒▒▒▄▀█▌▒▒▒▒▒▀▀▒▒▐░░░▄
▀▒▒▒▒▌▒▒▒▒▒▒▒▄▒▐███▌▄▒▒▒▒▒▒▒▄▀▀▀▀
▒▒▒▒▒▐▒▒▒▒▒▄▀▒▒▒▀▀▀▒▒▒▒▄█▀░░▒▌▀▀▄▄
▒▒▒▒▒▒█▒▄▄▀▒▒▒▒▒▒▒▒▒▒▒░░▐▒▀▄▀▄░░░░▀
▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▄▒▒▒▒▄▀▒▒▒▌░░▀▄
▒▒▒▒▒▒▒▒▀▄▒▒▒▒▒▒▒▒▀▀▀▀▒▒▒▄▀
	`);
	}

	entrada = parseInt(prompt("Digite sua idade"));
	let escritaIdade = entrada - 18 == 1? `falta ${18 - entrada} ano para o seu cadastro ser liberado.`: `faltam ${18 - entrada} anos para o seu cadastro ser liberado.`;
	if(entrada < 18){
		alert(`Você não pode criar uma conta no aplicativo Nubanco,${escritaIdade} `);
		return;
	}
	
	user.senha = 0
	while(user.senha == 0){
		entrada = prompt(`Para continuarmos, insira uma senha numerica de 6 digitos para ter acesso ao seu aplicativo`);
		entrada.length < 6 ? entrada = 0 : console.log("");
		entrada.length > 6 ? entrada = 0 : console.log("");
	
		if(entrada.length == 6 && typeof Number(entrada) == "number"){
			entrada = Number(entrada);
			confirm = parseInt(prompt(`Insira sua senha novamente`));
			if(entrada === confirm){
			alert(`Cadastro realizado com sucesso`);
			user.senha = entrada;
		}	
		}else{ entrada = 0; }

	}

	
}

function investimento(user){
	if(user.apelido == ""){
		alert("Você não possui uma conta para simular um investimento!");
		return;
	}
	entrada = parseInt(prompt(`Olá ${user.apelido}, insira o valor do investimento que deseja aplicar.`));
	let valor = entrada;
	if (entrada < 0) {
		alert("Não é possivel submeter números negativos!");
		return;
	}
	if (entrada >= 1 && entrada < 100) {
		entrada = prompt(`${user.apelido}, você pode investir no plano:
1 - Start, que tem o rendimento de 1,2% ao mês, e pode ter o valor retirado da operação a qualquer momento.`);
	}else if(entrada >= 100 && entrada < 500){
		entrada = prompt(`${user.apelido}, você pode investir nos planos:
1 - Start, que tem o rendimento de 1,2% ao mês, e pode ter o valor retirado da operação a qualquer momento.
2 - Plus, que rende 1,78% ao mês, e que o valor investido mais o rendimento pode ser retirado apenas após 30 dias.
`);
	}else{
		entrada = prompt(`${user.apelido}, você pode investir nos planos:
1 - Start, que tem o rendimento de 1,2% ao mês, e pode ter o valor retirado da operação a qualquer momento.
2 - Plus, que rende 1,78% ao mês, e que o valor investido mais o rendimento pode ser retirado apenas após 30 dias.
3 - Pro, que tem a taxa de rendimento variada de acordo com o tempo em que o dinheiro ficará preso no serviço. O mínimo são 6 meses, e a taxa é de 2,6% ao mês, mas se ele deixar pelo menos 1 ano, o rendimento será de 4,4% ao mês.
`);
	}

		switch (entrada) {
			case "1":
				entrada = parseInt(prompt("Digite o periodo que deseja: 1 até 12 meses.(O dinheiro pode ser retirado antes do término do primeiro mês, mas a simulação necessita ao menos 1.)"));
				calculaInvestimento(valor, entrada);
				break;
			case "2":
				entrada = parseInt(prompt("Digite o periodo que deseja: 1 até 12 meses."));
				calculaInvestimento(valor, entrada);
			break;
			case "3":
				entrada = parseInt(prompt("Digite o periodo que deseja: 6 ou 12 meses."));
				calculaInvestimento(valor, entrada);
				break;
			default:
				alert("Inválido!");
				break;
		}
	
}

cadastro(user1);
investimento(user1);

