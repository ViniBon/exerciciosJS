/* Ao errar a senha por 3 vezes seguidas, o cartão de banco do usuário é bloqueado. Thayná estava tentando fazer compras e errou sua senha por 3 vezes seguidas, até que recebeu a seguinte mensagem: “Senha incorreta. Seu cartão foi bloqueado. Se deseja ir a uma agência, digite “A” ou se deseja desbloquear com sua chave de segurança, digite “D”.

Se Thayná digitar “A”, uma mensagem será exibida para ela, dizendo que será um prazer atendê-la em uma agência
Se Thayná digitar “D”, a mensagem será exibida será: “Digite a chave de segurança que foi enviada para seu e-mail cadastrado.”
Para fins de testes, considere que a chave de segurança que Thayná recebeu é 9999
Se Thayná digitar corretamente a chave, ela receberá uma mensagem pedindo para redefinir a senha
Se Thayná digitar incorretamente a chave, ela deverá ir a uma agência e deve ser avisada sobre isso
Crie a lógica por trás de toda essa situação. */

localStorage.setItem("senhaBanco","960120");

let senha = JSON.parse(localStorage.getItem("senhaBanco"));

for(let i = 0; i <= 2 ; i++){
    let entrada = parseInt(prompt("Olá, digite sua senha para entrar no sistema"));
    entrada == senha ? alert("Bem vindo!") : alert("Senha errada, tente novamente");
        if(i == 2){
            alert("Você errou sua senha muitas vezes, seu cartão foi bloqueado!");
            let avanca = false
                while(avanca == false){
                    entrada = prompt("Se deseja ir a uma agência, digite A ou se deseja desbloquear com sua chave de segurança, digite D.")
                    if(entrada == "A" || entrada == "D"){ avanca = true };
        }
    }

    if(entrada == "A"){
        alert("Vai ser um prazer atendê-lo(a) em uma agência, até mais!")
    }else if(entrada == "D"){
            entrada = parseInt(prompt("Digite uma chave de segurança que foi enviado ao seu e-mail!"));
            entrada == 9999 ? entrada = parseInt(prompt("Redefina sua senha por favor (6 números)")) : alert("Chave de segurança incorreta, vá à uma agência!");

    }
    localStorage.setItem("senhaBanco", JSON.stringify(entrada));
}