/* Iremos criar um sistema de criação de conta no nosso banco.
Faça a captura dos seguintes dados juntamente com o tratamento dessas informações seguindo as regras de negócio descritas abaixo:

1- Data de nascimento: 'Qual a sua data de nascimento? (DD/MM/AAAA)'
2- Número do CPF: 'Qual o seu CPF? (xxx.xxx.xxx-xx)'
3- Nome completo: 'Digite o seu nome completo:'
4- E-mail: 'Agora nos diga qual é o seu melhor email:'
5- Celular para contato: 'Digite um número de celular válido: '
6- Telefone para contato: 'Digite um número de telefone para contato. Caso não possua clique em OK para prosseguir.'
7- Endereço: 'Qual o seu endereço? (R. das Flores, 195, Bairro Tristeza)'
8- Cidade e estado: 'Qual cidade e estado você mora? (Porto Alegre - RS)'
9- Profissão: 'Conta para nós, qual é a sua profissão?'
10- Salário: 'E qual a sua renda mensal aproximada?'
11- Criação de senha: 'Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência):'

Com todos os dados recolhidos, crie um objeto chamado cliente para armazenar os dados desse cliente.

*/


let cliente1 = {
    nomeCompleto:"", //certo
    cpf:"", //certo
    idade:"",
    email:"", //certo
    celular:"", //certo
    telefone:"", //certo
    endereco:"", //certo
    cidadeEestado:"", //certo
    profissao:"", //certo
    salario:0, //certo
    senha:"" //certo
};

let input;


function cadastro(user){
    let finalizado = false;

    /*  VALIDAÇÃO NOME COMPLETO
   */

    while(finalizado == false){

        while(user.nomeCompleto == ""){
            input = prompt("Digite seu nome completo.");
            let verificaNomeCompleto = input.split(" ");
            
                if (verificaNomeCompleto.length == 1) {
                    alert("O nome precisa ser completo!");
                }else if(verificaNomeCompleto.length > 1){
                    verificaNomeCompleto.forEach((texto,index) => {
                        completo = texto[0].toUpperCase()+texto.substring(1).toLowerCase();
                        index == 0 ?user.nomeCompleto += `${completo}`:user.nomeCompleto += ` ${completo}`
                    });
                }
        }
        
        nome = user.nomeCompleto.split(" ")[0];

        while(user.endereco == ""){
            input = prompt(`${nome}, digite seu endereço, como no exemplo a seguir: R. das Flores, 195, Bairro Tristeza.`);
            input == ""? alert("Por favor, digite o endereço!") : user.endereco = input;
        }

        while(user.cidadeEestado == ""){
            input = prompt(`${nome}, digite em que cidade e estado reside, como no exemplo a seguir: Porto Alegre - RS.`);
            input == ""? alert("Por favor, digite a cidade e estado!") : user.cidadeEestado = input;
        }

        while(user.profissao == ""){
            input = prompt(`${nome}, digite a sua profissão.`);
            input == ""? alert("Por favor, digite sua profissão!") : user.profissao = input;
        }

        while(user.salario == 0){
            input = parseFloat(prompt(`${nome}, digite o seu salário mensal.`));
            input == ""? alert("Por favor, digite seu salário!") : user.salario = input;
        }

    /*     VALIDAÇÃO CPF
        1 - Verificação de CPF: se CPF contém ou não contém 11 caracteres
        Opção 1: Verificamos aqui e seu CPF parece ser um número inválido. Tente novamente.
        Opção 2: Tudo certo! Vamos prosseguir. 
    */

        while(user.cpf == ""){
            input = prompt(`${nome}, digite seu CPF.`);
            verificaCpf = Number(input);

            if (isNaN(verificaCpf) ) {
                alert("Digite apenas numeros, e sem espaços, por favor!");
            }else if ( String(verificaCpf).length < 11 || String(verificaCpf).length > 11){
                alert("CPF inválido, por favor digite novamente!");
            }else if (String(verificaCpf).length == 11){
                trataCpf = String(verificaCpf).split("");

                    trataCpf.forEach((numero,index) => {
                        if (index == 2 || index == 5) {
                            numero += ".";
                            itemCpf = numero;
                        }else if (index == 8){
                            numero += "-";
                            itemCpf = numero;
                        }else{
                            itemCpf = numero;
                        }
                        user.cpf += itemCpf;
                    });
            }
        }

        /* VALIDAÇÃO E-MAIL
        2- Verificar e-mail: se contém @ é válido, senão é inválido
        Se inválido: Ops! Tem certeza que esse e-mail está correto? Tente novamente.  */

        while(user.email == ""){
            input = prompt(`${nome}, digite seu email.`);
            verificaEmail = input;

            verificaEmail.indexOf("@") == -1 ? alert("Seu email precisa conter um @!") : user.email = verificaEmail;
        }

    /*
        VALIDAÇÃO CELULAR E TELEFONE  
    3- Verificar se há dois números para contato: celular é obrigatório e telefone é opcional
        Se celular retornar undefined: Repita a instrução para perguntar novamente um número de celular
        Se telefone retornar undefined: Tratar para que essa informação não apareça como undefined no texto de confirmação, e sim algo como Telefone: não informado */

        while(user.celular == ""){
            input = prompt(`${nome}, digite seu número de celular com o DDD ( OBRIGATÓRIO ) .`);
            verificaCelular = Number(input);

            if (isNaN(verificaCelular) ) {
                alert("Digite apenas numeros, por favor!");
            }else if ( String(verificaCelular).length < 11 || String(verificaCelular).length > 11){
                alert("Número inválido, por favor digite novamente!");
            }else if (String(verificaCelular).length == 11){
                trataCelular = String(verificaCelular).split("");

                    trataCelular.forEach((numero,index) => {
                        if (index == 0) {
                            itemCelular = "("+numero;
                        }else if (index == 1){
                            itemCelular = numero+")";
                        }else if (index == 6){
                            itemCelular = numero+"-";
                        }else{
                            itemCelular = numero;
                        }
                        user.celular += itemCelular;
                    });

                    while(user.telefone == ""){
                        input = prompt(`${nome}, digite seu número de telefone com DDD ( OPCIONAL, envie vazio )`);

                            if (input == "") {
                                user.telefone = "Não informado";
                                break;
                            }
                            verificaTelefone = Number(input);

                            if (isNaN(verificaTelefone) ) {
                                alert("Digite apenas numeros, por favor!");
                            }else if ( String(verificaTelefone).length < 10 || String(verificaTelefone).length > 10){
                                alert("Número inválido, por favor digite novamente!");
                            }else if (String(verificaTelefone).length == 10){
                                trataTelefone = String(verificaTelefone).split("");

                                trataTelefone.forEach((numero,index) => {
                                if (index == 0) {
                                    itemTelefone = "("+numero;
                                }else if (index == 1){
                                    itemTelefone = numero+")";
                                }else if (index == 5){
                                    itemTelefone = numero+"-";
                                }else{
                                    itemTelefone = numero;
                                }
                            user.telefone += itemTelefone;
                        });
                    }
                }
            }
        }

        /* 
        VALIDAÇÃO IDADE
        4- Verificação de idade (desafio): se maior ou menor de idade
        Opção 1: Verificamos aqui e você pode abrir a sua conta conosco!
        Opção 2: Ops! Você ainda não tem a idade mínima para abrir uma conta conosco. Daqui X anos você poderá tentar novamente! */

        while(user.idade == 0){
            input = prompt(`${nome}, digite sua idade.`);
            let verificaIdade = Number(input);

            if (isNaN(verificaIdade)) {
                alert("Digite apenas números, por favor!");
            }else if(verificaIdade < 18){
                periodo = 18 - verificaIdade;
                textoPeriodo = periodo > 1 ? "anos" : "ano";
                alert(`Você ainda não tem idade mínima para abrir um conta em nossa rede, daqui ${periodo} ${textoPeriodo} você podera efetuar seu cadastro.`);
                break;
            }
            user.idade = verificaIdade;
        }
        
        /* 
        VALIDAÇÃO SENHA
        5- Verificação de senha: a senha deve conter quatro caracteres numéricos que não podem ser uma sequência e não podem se repetir.
        Senha inválida: repita a instrução. */
        
        while(user.senha == ""){
            input = prompt(`${nome}, digite uma senha númerica de 4 digitos diferentes.`);
            let verificaSenha = input.split("").map((num)=>{
                return Number(num);
            });
            let senha = [];

            let repete = true;
            let sequencia = true;
            let contador = 0;
            let contador2 = 0;

            verificaSenha.forEach((numero, index = 0) => {;
                
                if(index > 0 && numero == verificaSenha[index - 1] || numero == verificaSenha[index + 1] || numero == verificaSenha[index + 2] || numero == verificaSenha[index + 3]){
                    contador2++;     
                }
                if(numero - 1 == verificaSenha[index - 1]){
                    contador++;
                }else if(numero - 1 == verificaSenha[index + 1] || numero - 1 == verificaSenha[verificaSenha.length -1]){
                    contador++;
                } 

                    senha.push(numero);
                        
                    if (contador2 > 0) {
                        repete = false;
                    }else if(contador == 3){
                        sequencia = false;
                    }
            });
            
            if(!repete){
                alert("Você não pode inserir números repetidos!");
                user.senha = "";
            }else if (!sequencia) {
                alert("Você não pode inserir uma sequencia númerica como senha!");
                user.senha = "";
            }else{
                senha.forEach((num) =>{
                    user.senha += String(num);
                })
            }
        }
        

    /*  Você deve informar uma mensagem com todos os dados tratados para o usuário realizar a verificação deles e confirmar. */
        confirmaCadastro = false;
        while(confirmaCadastro == false){
            input = prompt(`
${nome}, aqui estão seus dados informados:

Nome completo: ${user.nomeCompleto}
Idade: ${user.idade}
Endereço: ${user.endereco}
Cidade e Estado: ${user.cidadeEestado}
Profissão: ${user.profissao}
Salário: ${user.salario}
CPF: ${user.cpf}
Celular: ${user.celular}
Telefone: ${user.telefone}
Cidade e Estado: ${user.cidadeEestado}
E-mail: ${user.email}

Deseja finalizar o cadastro? (s/n)`);
            resposta = input.toLowerCase();

            if (resposta == "s") {
                alert(`Cadastro realizado com sucesso`);

                    if (user.salario > 1000 && user.salario <= 3000) {
                        limite = (20*user.salario)/100;
                        alert(`Parabéns ${nome}, você desbloqueou um cartão de crédito do TokyoBank com limite de R$${limite}`);
                    }else if (user.salario > 3000 && user.salario <= 5000 ){
                        limite = (28*user.salario)/100;
                        alert(`Parabéns ${nome}, você desbloqueou um cartão de crédito do TokyoBank com limite de R$${limite}`);
                    }else if (user.salario > 5000){
                        limite = (31*user.salario)/100;
                        alert(`Parabéns ${nome}, você desbloqueou um cartão de crédito do TokyoBank com limite de R$${limite}`);
                    }

                    confirmaCadastro = true;
                    finalizado = true

            }else if (resposta == "n"){
                alert(`${nome}, as portas estão abertas, sinta-se a vontade.`);
                confirmaCadastro = true;
                cliente1 = {nomeCompleto:"",cpf:"", idade:"",email:"", celular:"", telefone:"", endereco:"", cidadeEestado:"", profissao:"", 
    salario:0, senha:0};
                finalizado = true;
            }
        }

    }
}

cadastro(cliente1);



