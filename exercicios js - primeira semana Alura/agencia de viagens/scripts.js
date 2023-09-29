/* → Uma agência de viagens precisa de um programa que converta moedas estrangeiras para o real brasileiro. Uma agente de viagens está fazendo as seguintes pesquisas para um casal que está se planejando para viajar:

1. Crie o programa para a agência que irá converter os valores, de real para dólar neozelandês, baht tailandês e colón costarriquenho, e vice-versa. Apresente os valores convertidos no console, utilizando console.log().

🌏 Destino: Nova Zelândia Passagens aéreas: R$ 13996 Diária hotel: NZ $ 79,15 Guia local: NZ $ 200

→ Pesquise a cotação atual do dólar neozelandês ou use: R$ 1,00 = NZ $ 3,25

🌏 Destino: Tailândia Passagens aéreas: R$ 9160 Diária hotel: THB 590 Guia local: THB 235

→ Pesquise a cotação atual do baht tailandês ou use: R$ 0,15 = THB 1,00

🌎 Destino: Costa Rica Passagens aéreas: R$ 5119 Diária hotel: CRC 2300 Guia local: CRC 3150

→ Pesquise a cotação atual do colón costarriquenho ou use: R$ 0,0089 = CRC 1,00 */
let viagem = {
    nomeCliente:"",
    destino:"",
    destinoCompleto:"",
    valorPassagem:0,
    diariaHotel:0,
    valorGuia:0,
    custoFixo:0,
    dias:0
};



function preencheViagem(viagem){
    
    let key = false;
    
    while(key == false){
        while(viagem.nomeCliente == ""){
            viagem.nomeCliente = prompt("Insira seu nome!");
        }
        while(viagem.destino == ""){
            viagem.destino = parseInt(prompt(`Qual é o seu destino?
            1 - Nova Zelândia
            2 - Tailândia
            3 - Costa Rica
            `));
            switch (viagem.destino) {
                case 1:
                    viagem.destino = "NZ";
                    viagem.destinoCompleto ="Nova Zelândia";
                    break;
                case 2:
                    viagem.destino = "T";
                    viagem.destinoCompleto ="Tailândia";
                    break;  
                case 3:
                    viagem.destino = "CR";
                    viagem.destinoCompleto ="Costa Rica";
                    break;  
                default:
                    viagem.destino = "";
                    alert("Apenas as 3 opções!");
                    break;
            }
        }
        while(viagem.dias == 0){
            viagem.dias = parseInt(prompt(`Quantos dias pretende passar no país?`));
        }
        key = true;
    }

    if(viagem.destino == "NZ"){
        /* 1NZD = 2,95
        Diária hotel: NZ $ 79,15
        Guia local: NZ $ 200 */
        viagem.valorPassagem = 13996;
        viagem.diariaHotel = 79.15*2.95;
        viagem.valorGuia = 200*2.95;
        viagem.custoFixo = (viagem.valorGuia+viagem.valorPassagem+(viagem.diariaHotel*viagem.dias)).toFixed(2);
    }else if(viagem.destino == "T"){
        /* 1THB = 0,14
        Diária hotel: THB 590 
        Guia local: THB 235 */
        viagem.valorPassagem = 9160;
        viagem.diariaHotel = 590*0.14;
        viagem.valorGuia = 235*0.14;
        viagem.custoFixo = (viagem.valorGuia+viagem.valorPassagem+(viagem.diariaHotel*viagem.dias)).toFixed(2);
    }else{
        /* 1CRC = 0,0092
       Diária hotel: CRC 2300
        Guia local: CRC 3150 */
        viagem.valorPassagem = 5119;
        viagem.diariaHotel = 2300*0.0092;
        viagem.valorGuia = 3150*0.0092;
        viagem.custoFixo = (viagem.valorGuia+viagem.valorPassagem+(viagem.diariaHotel*viagem.dias)).toFixed(2);
    }
};

preencheViagem(viagem);

alert(`Olá senhor(a) ${viagem.nomeCliente}, É um prazer termos você como cliente e estamos ansiosos para que sua viagem possa ocorrer em breve! Aqui estão as informações da sua viagem:
Destino - ${viagem.destinoCompleto};
Valor das passagens - R$${viagem.valorPassagem.toFixed(2)};
Diária do hotel/x dias - R$${viagem.diariaHotel.toFixed(2)}, ${viagem.dias} dias: R$${viagem.dias*viagem.diariaHotel.toFixed(2)};
Valor do guia local - R$${viagem.valorGuia.toFixed(2)};
Custo fixo total: R$${viagem.custoFixo};
`)