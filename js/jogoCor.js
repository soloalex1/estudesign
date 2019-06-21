const game = new Phaser.Game(1300, 610, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

ParteRoda = function(x, y, index){
    this.x = x;
    this.y = y;
    this.index = index;
    
    this.ParteRoda_sprite = game.add.sprite(this.x, this.y, `cor${index}`);
    this.ParteRoda_sprite.anchor.setTo(0.5, 0.5);
    this.ParteRoda_sprite.scale.setTo(0.7, 0.7);

    this.ParteRoda_sprite.inputEnabled = true;
    this.ParteRoda_sprite.events.onInputDown.add(this.verificaAcerto, this, 0, 5); //evento, então pode rodar sempre
    this.ParteRoda_sprite.input.pixelPerfectOver = true; //ignora transparência pro hover
    this.ParteRoda_sprite.input.pixelPerfectClick = true; //ignora transparência pro click
    this.ParteRoda_sprite.input.useHandCursor = true;

    this.ParteRoda_sprite.events.onInputOver.add(() => this.ParteRoda_sprite.scale.setTo(0.75), this); //hover
    this.ParteRoda_sprite.events.onInputOut.add(() => this.ParteRoda_sprite.scale.setTo(0.7), this);
}
ParteRoda.prototype.rodarRoda = () => this.ParteRoda_sprite.angle += 0.5; //função pra rodar o objeto

let maiorAuxiliarCoresFundo = 3;
ParteRoda.prototype.verificaAcerto = () => { //função pra verificar acerto
    if(maiorAuxiliarCoresFundo == 0) maiorAuxiliarCoresFundo = 3;
	
    switch(faseHarmonia){ //cada case é pra uma harmonia porque cada uma é específica
        case 0: //---------------------------------monocromatica
            if(this.index == (faseCor + 1) % 12){ //se essa cor é uma das cores dessa harmonia //%12 é pra encaixar na qtd de posições //talvez esses ifs podem ser substituidos por uma função com laço dentro
                coresNecessariasParaHarmonia[0];
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            } else {
                coresNecessariasParaHarmonia[0] = false; //mudar hamonia e cor da fase
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
        case 1: //---------------------------------análoga
            if(this.index == (faseCor + 1) % 12){
                coresNecessariasParaHarmonia[0] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor + 11) % 12){
                coresNecessariasParaHarmonia[1] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            } else {
                coresNecessariasParaHarmonia[0] = false;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
        case 2: //---------------------------------complementar
            if(this.index == (faseCor + 6) % 12){
                coresNecessariasParaHarmonia[0] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            } else {
                coresNecessariasParaHarmonia[0] = false;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
        case 3: //---------------------------------triádica
            if(this.index == (faseCor + 4) % 12){
                coresNecessariasParaHarmonia[0] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor + 8) % 12){
                coresNecessariasParaHarmonia[1] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            } else {
                coresNecessariasParaHarmonia[0] = false;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
        case 4: //---------------------------------complementar dividido
            if(this.index == (faseCor + 5) % 12){
                coresNecessariasParaHarmonia[0] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor + 7) % 12){
                coresNecessariasParaHarmonia[1] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
        case 5: //---------------------------------dupla complementar
            if(this.index == (faseCor + 2) % 12){
                coresNecessariasParaHarmonia[0] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor + 6) % 12){
                coresNecessariasParaHarmonia[1] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            if(this.index == (faseCor + 8) % 12){
                coresNecessariasParaHarmonia[2] = true;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }else{
                coresNecessariasParaHarmonia[0] = false;
                maiorAuxiliarCoresFundo--;
                circulosBG[maiorAuxiliarCoresFundo].tint = coresHexaHexa[this.index];
                break;
            }
            break;
    }
}

function ACAO(){
    if(coresNecessariasParaHarmonia.every(auxVerificaArray)){ //verica se todos no array estão true e retorna true
        pontos += 10;
        pontosText.setText(pontos + " Pontos");
        randomiza();
    } else {
        randomiza();
    }
	
    function auxVerificaArray(value, index, ar){
        return value == true;
    }
	
    rodada++;
    textTimer.setText("RODADA " + rodada);
}

let bot_checar;

let pontos = 0;//pontuação do jogador
let pontosText;
let timer; //timer pra auxiliar no tempo
let textTimer;//texto que vai escrever o tempo na tela
let minutos = 2;//minutos do timer
let segundos = 10;//variável que vai contar os segundos

let coresNecessariasParaHarmonia = [];
let coresRoda = [];
let faseCor = 0;
let faseHarmonia = 5;
const harmoniasParaDestaque = [ //A IDEIA É TER UM ARRAY DE NOMES DAS FONTES TIPO TERROR, ROMANTICO, FUTURISTA 
    "MONOCROMÁTICA",
    "ANÁLOGA",
    "COMPLEMENTAR",
    "TRIÁDICA",
    "COMPLEMENTAR DIVIDIDO",
    "DUPLA COMPLEMENTAR"
];

const coresParaDestaque = [ 
    "#ed0676", "#9b1169",
    "#340861", "#0154a9",
    "#06b9e0", "#027143",
    "#3a940a", "#83ba32",
    "#f4f419", "#f9a333",
    "#f2241a"
];

let textao;
let circulosBG = [];

function render () {
}

function preload(){
    game.load.spritesheet('bot_checar', 'roda/bot.png', 200, 200);

    game.stage.disableVisibilityChange = true;

    for(let i=0; i<12; i++){
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
    coresRoda.forEach(i => i = new ParteRoda(game.world.centerX, game.world.centerY + aaaa, i);
		      
    textTimer = game.add.text(game.world.centerX + 480, 50, `RODADA ${rodada}`, { font: 'bold 20pt Poppins', fill: '#EEE' });
    pontosText = game.add.text(game.world.centerX + 495, 90, `${pontos} Pontos`, { font: 'bold 20pt Poppins', fill: "#EEE" });

    bot_checar = game.add.button(game.world.centerX + 6, game.world.centerY + aaaa, 'bot_checar', ACAO, this, 2, 1, 0);
    bot_checar.anchor.setTo(0.5);
    textao = game.add.text(game.world.centerX, 70, harmoniasParaDestaque[faseHarmonia], { font: "65px Poppins", fill: "#ddd", align: "center" });
    textao.anchor.setTo(0.5);
}

function update() {
    textao.text = harmoniasParaDestaque[faseHarmonia];
    coresRoda.forEach(i => i.rodarRoda());
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

	coresNecessariasParaHarmonia.forEach(i => i = false);
}

function randomiza(){
	faseCor = Math.floor(Math.random() * (coresParaDestaque.length - 1)) + 0;
	faseHarmonia = Math.floor(Math.random() * (harmoniasParaDestaque.length - 1)) + 0;
	verificaQuantidadeCoresParaHarmonia();
    circulosBG[3].tint = coresHexaHexa[faseCor];
    circulosBG[2].tint = 0xeeeeee;
    circulosBG[1].tint = 0xdddddd;
    circulosBG[0].tint = 0xcccccc;
}

let aaaa = 320;
function carregaCoresFundo(){
    for (let i = 0; i < 4; i++) {
        circulosBG[i] = game.add.sprite(game.world.centerX, game.world.centerY + aaaa, 'ai');
        circulosBG[i].anchor.setTo(0.5, 0.5);
        circulosBG[i].scale.setTo((0.8 - 0.1*i));
    }
}
var coresHexaHexa = [ //A IDEIA É TER UM ARRAY DE NOMES DAS FONTES TIPO TERROR, ROMANTICO, FUTURISTA 
    "0xed0676", "0x9b1169",
    "0x340861", "0x0154a9",
    "0x06b9e0", "0x027143",
    "0x3a940a", "0x83ba32",
    "0xf4f419", "0xf9a333",
    "0xf2241a", "0xf2241a"
];

let rodada = 1;
function updateCounter() {

	segundos = (segundos > 1) ? segundos-- : 10;

	let timerText = (segundos < 10) ? 
	(`RODADA ${rodada} 
	TEMPO 0${segundos}`) :
	(`RODADA ${rodada}
	TEMPO ${segundos}`);

	textTimer.setText(timerText);
}
