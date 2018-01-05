var game = new Phaser.Game(1300, 610, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
//var config, game;config = {  width: 1000,  height: 700,  renderer: Phaser.AUTO, forceSetTimeOut: true};game = new Phaser.Game(config);

ParteRoda = function(x, y, index){
    this.x = x;
    this.y = y;
    this.index = index;
    //this.numeroInimigo = Math.floor(Math.random()*10); //pra comparar com faseCor e dizer se o jogador acertou
    //this.acertado; //diz se o objeto foi acertado

    //this.minSpeed = -75;
    //this.maxSpeed = 75;
    //this.vy = Math.random()*(this.maxSpeed - this.minSpeed+1)-this.minSpeed;
    
    this.ParteRoda_sprite = game.add.sprite(this.x, this.y, "cor"+index);
    this.ParteRoda_sprite.anchor.setTo(0.5, 0.5);
    this.ParteRoda_sprite.scale.setTo(0.7, 0.7);

    this.ParteRoda_sprite.inputEnabled = true;
    this.ParteRoda_sprite.events.onInputDown.add(this.verificaAcerto, this, 0, 5); //evento, então pode rodar sempre
    this.ParteRoda_sprite.input.pixelPerfectOver = true; //ignora transparência pro hover
    this.ParteRoda_sprite.input.pixelPerfectClick = true; //ignora transparência pro click
    this.ParteRoda_sprite.input.useHandCursor = true;

    this.ParteRoda_sprite.events.onInputOver.add(function(){this.ParteRoda_sprite.scale.setTo(0.75);}, this); //hover
    this.ParteRoda_sprite.events.onInputOut.add(function(){this.ParteRoda_sprite.scale.setTo(0.7);}, this);
}
ParteRoda.prototype.rodarRoda = function(){ //função pra rodar o objeto
    this.ParteRoda_sprite.angle += 0.5;
}
var maiorAuxiliarCoresFundo = 3;
ParteRoda.prototype.verificaAcerto = function(){ //função pra verificar acerto
    // console.log(faseCor);
    // if(this.index == faseCor){
    //     console.log("ACERTOU MALUCO");
    // }
    if(maiorAuxiliarCoresFundo == 0){
        maiorAuxiliarCoresFundo = 3;
    }
    switch(faseHarmonia){ //cada case é pra uma harmonia porque cada uma é específica
        case 0: //---------------------------------monocromatica
            if(this.index == (faseCor+1)%12){ //se essa cor é uma das cores dessa harmonia //%12 é pra encaixar na qtd de posições //talvez esses ifs podem ser substituidos por uma função com laço dentro
                coresNecessariasParaHarmonia[0];
                // botaoCertoApertado(0);   //PRA AJEITAR
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false; //mudar hamonia e cor da fase
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
        case 1: //---------------------------------análoga
            if(this.index == (faseCor+1)%12){
                coresNecessariasParaHarmonia[0] = true;
                // botaoCertoApertado(0);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor+11)%12){
                coresNecessariasParaHarmonia[1] = true;
                // botaoCertoApertado(1);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                // maiorAuxiliarCoresFundo = 0;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
        case 2: //---------------------------------complementar
            if(this.index == (faseCor+6)%12){
                coresNecessariasParaHarmonia[0] = true;
                // botaoCertoApertado(0);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                // maiorAuxiliarCoresFundo = 0;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
        case 3: //---------------------------------triádica
            if(this.index == (faseCor+4)%12){
                coresNecessariasParaHarmonia[0] = true;
                // botaoCertoApertado(0);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor+8)%12){
                coresNecessariasParaHarmonia[1] = true;
                // botaoCertoApertado(1);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                // maiorAuxiliarCoresFundo = 0;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
        case 4: //---------------------------------complementar dividido
            if(this.index == (faseCor+5)%12){
                coresNecessariasParaHarmonia[0] = true;
                // botaoCertoApertado(0);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor+7)%12){
                coresNecessariasParaHarmonia[1] = true;
                // botaoCertoApertado(1);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                // maiorAuxiliarCoresFundo = 0;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
        case 5: //---------------------------------dupla complementar
            if(this.index == (faseCor+2)%12){
                coresNecessariasParaHarmonia[0] = true;
                // botaoCertoApertado(0);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor+6)%12){
                coresNecessariasParaHarmonia[1] = true;
                // botaoCertoApertado(1);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor+8)%12){
                coresNecessariasParaHarmonia[2] = true;
                // botaoCertoApertado(2);
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                // maiorAuxiliarCoresFundo = 0;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
    }

        // console.log(maiorAuxiliarCoresFundo);
    
    // function botaoCertoApertado(index){
    //     coresNecessariasParaHarmonia[index] = true;
    //     console.log("iurraaa");
    // } 
}

function ACAO(){
    // console.log("POWE");
    if(coresNecessariasParaHarmonia.every(auxVerificaArray)){ //verica se todos no array estão true e retorna true
        console.log("ganhoooooooooo");
        pontos +=10;
        pontosText.setText(pontos + " Pontos");
        // maiorAuxiliarCoresFundo = 3;
        randomiza();
    }else{
        // maiorAuxiliarCoresFundo = 3;
        randomiza();
        console.log("AAAAAAAAA");

    }
    function auxVerificaArray(value, index, ar){
        return value == true;
    }
    rodada++;
    textTimer.setText("RODADA " + rodada);
}

var bot_checar;

var pontos = 0;//pontuação do jogador
var pontosText;
var timer; //timer pra auxiliar no tempo
var textTimer;//texto que vai escrever o tempo na tela
var minutos = 2;//minutos do timer
var segundos = 10;//variável que vai contar os segundos

var coresNecessariasParaHarmonia = [];
var coresRoda = [];
var faseCor = 0;
var faseHarmonia = 5;
var harmoniasParaDestaque = [ //A IDEIA É TER UM ARRAY DE NOMES DAS FONTES TIPO TERROR, ROMANTICO, FUTURISTA 
    "MONOCROMÁTICA",
    "ANÁLOGA",
    "COMPLEMENTAR",
    "TRIÁDICA",
    "COMPLEMENTAR DIVIDIDO",
    "DUPLA COMPLEMENTAR"
];
var coresParaDestaque = [ //A IDEIA É TER UM ARRAY DE NOMES DAS FONTES TIPO TERROR, ROMANTICO, FUTURISTA 
    "#ed0676",
    "#9b1169",
    "#340861",
    "#0154a9",
    "#06b9e0",
    "#027143",
    "#3a940a",
    "#83ba32",
    "#f4f419",
    "#f9a333",
    "#f2241a"
];
var textao;
var circulosBG = [];

function render () {
}

function preload(){
    game.load.spritesheet('bot_checar', 'roda/bot.png', 200, 200);

    game.stage.disableVisibilityChange = true;

    for(var i=0; i<12; i++){
        game.load.image('cor'+i, 'roda/'+i+'.png');
    }
    game.load.image('ai', 'roda/r1.png');

    verificaQuantidadeCoresParaHarmonia();
}


function create() {
    carregaCoresFundo();
    circulosBG[3].tint = coresHexaHexa[faseCor];
    circulosBG[2].tint = 0xeeeeee;
    circulosBG[1].tint = 0xdddddd;
    circulosBG[0].tint = 0xcccccc;
    // setInterval(function(){faseCor = Math.floor(Math.random() * (coresParaDestaque.length-1 - 0)) + 0;}, 24000);
    //setInterval(function(){faseHarmonia = Math.floor(Math.random() * (harmoniasParaDestaque.length-1 - 0)) + 0;}, 4000);
    // setInterval(verificaQuantidadeCoresParaHarmonia, 24000);
    // setInterval(function(){randomiza();}, 10000);
    for(var i=0; i<12; i++){
        coresRoda[i] = new ParteRoda(game.world.centerX, game.world.centerY+aaaa, i);
    }



    textTimer = game.add.text(game.world.centerX+480, 50, "RODADA " + rodada, { font: 'bold 20pt Poppins', fill: "#eee" });
    pontosText = game.add.text(game.world.centerX+495,90, pontos + " Pontos", { font: 'bold 20pt Poppins', fill: "#eee" });
    // textTimer = game.add.text(game.world.centerX+250, 50, "TEMPO " + minutos +":" + segundos+ "", { font: 'bold 20pt Arial', fill: "#000" });
    // pontosText = game.add.text(1100,50, pontos + " Pontos", { font: 'bold 20pt Arial', fill: "#000" });
    // timer = game.time.create(false); //false pra ele não se autodestruir
    // timer.loop(1000, updateCounter, this); //updateCounte vai acontecer nesse contexto a cada 1s
    // timer.start(); //starta o timer


    bot_checar = game.add.button(game.world.centerX +6, game.world.centerY+aaaa, 'bot_checar', ACAO, this, 2, 1, 0);
    bot_checar.anchor.setTo(0.5);
    textao = game.add.text(game.world.centerX, 70, harmoniasParaDestaque[faseHarmonia], { font: "65px Poppins", fill: "#ddd", align: "center" });
    textao.anchor.setTo(0.5);
}
function update() {
    // game.stage.backgroundColor = coresParaDestaque[faseCor];
    textao.text = harmoniasParaDestaque[faseHarmonia];

    for(var i=0; i<12; i++){
        coresRoda[i].rodarRoda();
    }

}


function verificaQuantidadeCoresParaHarmonia(){ //verifica quantidade de cores pra harmonia e cria um array com essa quantidade
    switch(faseHarmonia){ //dependendo da harmonia eu vou ter uma quantidade de cores a serem apertadas, crio array de Y posições
        case 0: //---------------------------------monocromatica
            coresNecessariasParaHarmonia = new Array(1); //só um porque acho que vai ser só um botão/camada/cor
            break;
        case 1: //---------------------------------análoga
            coresNecessariasParaHarmonia = new Array(2);
            break;
        case 2: //---------------------------------complementar
            coresNecessariasParaHarmonia = new Array(1);
            break;
        case 3: //---------------------------------triádica
            coresNecessariasParaHarmonia = new Array(2);
            break;
        case 4: //---------------------------------complementar dividido
            coresNecessariasParaHarmonia = new Array(2);
            break;
        case 5: //---------------------------------dupla
            coresNecessariasParaHarmonia = new Array(3);
            break;
    }

    for (var i = 0; i < coresNecessariasParaHarmonia.length; i++) { //nenhuma posição foi apertada, todas false
        coresNecessariasParaHarmonia[i] = false;
    }
}

function randomiza(){
	faseCor = Math.floor(Math.random() * (coresParaDestaque.length-1)) + 0;
	faseHarmonia = Math.floor(Math.random() * (harmoniasParaDestaque.length-1)) + 0;
	verificaQuantidadeCoresParaHarmonia();
    circulosBG[3].tint = coresHexaHexa[faseCor];
    circulosBG[2].tint = 0xeeeeee;
    circulosBG[1].tint = 0xdddddd;
    circulosBG[0].tint = 0xcccccc;
}

var aaaa = 320;
function carregaCoresFundo(){
    for (var i = 0; i < 4; i++) {
        circulosBG[i] = game.add.sprite(game.world.centerX, game.world.centerY+aaaa, 'ai');
        circulosBG[i].anchor.setTo(0.5, 0.5);
        circulosBG[i].scale.setTo((0.8 - 0.1*i));
        // circulosBG[i].tint = coresHexaHexa[i];
    }
}
var coresHexaHexa = [ //A IDEIA É TER UM ARRAY DE NOMES DAS FONTES TIPO TERROR, ROMANTICO, FUTURISTA 
    "0xed0676",
    "0x9b1169",
    "0x340861",
    "0x0154a9",
    "0x06b9e0",
    "0x027143",
    "0x3a940a",
    "0x83ba32",
    "0xf4f419",
    "0xf9a333",
    "0xf2241a",
    "0xf2241a"
];

var rodada = 1;
function updateCounter() {
	// minutos--;

	// if(minutos>=0){
	// 	if(segundos>0){
	// 		segundos--;
	// 	}else{
	// 		minutos--;
	// 		segundos = 59;
	// 	}
	// }else{
	// 	//bloco zerando tudo aqui
	// }

 //    if (segundos < 10) {
 //        textTimer.setText("TEMPO " + minutos +":" + "0" + segundos);
 //    } else {
 //        textTimer.setText("TEMPO " + minutos +":" + segundos);
 //    }


	if(segundos>1){
		segundos--;
	}else{
		// rodada++;
		segundos = 10;
	}
    if (segundos < 10) {
        textTimer.setText("RODADA " + rodada + "\n" + "TEMPO " + "0" + segundos);
    } else {
        textTimer.setText("RODADA " + rodada + "\n" + "TEMPO " + segundos);
    }
}