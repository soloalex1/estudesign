
function despausar() {//despausa o jogo (é chamada quando se clica na tela com o jogo pausado)
    game.paused = !game.paused;
}
function getRandomInt(min, max) {//função que retorna um numero inteiro 
  return Math.floor(Math.random() * (max - min)) + min;
}

var game = new Phaser.Game(1300, 590, Phaser.CANVAS, 'jogo', { preload: preload, create: create, update: update}); /*height tava 640*/
var tipografias = [];//vertor com as tipografias que aparecerão na tela

//Classe tipografia. Ela possui um tema, uma velocidade, uma identidade e uma posição no vetor
Tipografia = function() {
    this.tema;//ex: terror, amor, glamour
    this.velocidade;
    this.identidade;
    this.posicao;
    var textSprite;//o textSprite vai servir para usar os atributos de velocidade e body do phaser. Ele será vazio, de modo que somente text irá aparecer na tela
    this.posX;
}

//A função criar palavra é o início de tudo. Ela checa qual é a identidade da tipografia antes de definir qual sua fonte e tamanho.
Tipografia.prototype.criarPalavra = function() {

    /*Primeiro: definir um tema (terror, amor, futurista, etc)
    Segundo: definir a identidade (qual tipo de fonte vai ser (ex: Poppins Medium, Verdana))
    Terceiro: definir o Sprite, atrelar um text a ele e deixá-lo clicável, dando a ele a função/evento clicar
    */

    //PRIMEIRO

    this.tema = getRandomInt(1,5);//definindo tema
    console.log(this.tema);  
    /*
    1 = fantasia
    2 = impressionismo
    3 = bauhaus
    4 = monalisa
    */

    this.identidade = getRandomInt(1,6);//sorteando uma nove identidade
    this.velocidade = getRandomInt(100,150);//sorteando a nova velocidade 
    
    //SEGUNDO
    this.posX = 200 + getRandomInt(0,4)*250;
    for (var i = 1; i < totalTipoNaTela; i++) {
        if (this.posX == tipografias[i].posX) {
            this.posX = 200 + getRandomInt(0,4)*250;            
        }
    }

    //TERCEIRO: definir a identidade

    if (this.tema == 1) {//fantasia
        switch (this.identidade) {
            case 1: 
               this.textSprite = game.add.sprite(this.posX, 100, "fantasia1");
            break;
            case 2:
                this.textSprite = game.add.sprite(this.posX, 100, "fantasia2");
            break;
            case 3:
                this.textSprite = game.add.sprite(this.posX, 100, "fantasia3");
            break;
            case 4:
                this.textSprite = game.add.sprite(this.posX, 100, "fantasia4");
            break;
            case 5:
                this.textSprite = game.add.sprite(this.posX, 100, "fantasia5");
            break;
            default:
            break;
        }
    }
    else if (this.tema == 2) {//impressionismo
        switch (this.identidade) {
            case 1: 
               this.textSprite = game.add.sprite(this.posX, 100, "manuscrita1");
            break;
            case 2:
                this.textSprite = game.add.sprite(this.posX, 100, "manuscrita2");
            break;
            case 3:
                this.textSprite = game.add.sprite(this.posX, 100, "manuscrita3");
            break;
            case 4:
                this.textSprite = game.add.sprite(this.posX, 100, "manuscrita4");
            break;
            case 5:
                this.textSprite = game.add.sprite(this.posX, 100, "manuscrita5");
            break;
            default:
            break;
        }
    }
    else if (this.tema == 3) {//bauhaus
        switch (this.identidade) {
            case 1: 
               this.textSprite = game.add.sprite(this.posX, 100, "sem_serifa1");
            break;
            case 2:
                this.textSprite = game.add.sprite(this.posX, 100, "sem_serifa2");
            break;
            case 3:
                this.textSprite = game.add.sprite(this.posX, 100, "sem_serifa3");
            break;
            case 4:
                this.textSprite = game.add.sprite(this.posX, 100, "sem_serifa4");
            break;
            case 5:
                this.textSprite = game.add.sprite(this.posX, 100, "sem_serifa5");
            break;
            default:
            break;
        }
    }
    else if (this.tema == 4) {//monalisa
        switch (this.identidade) {
            case 1: 
               this.textSprite = game.add.sprite(this.posX, 100, "serifada1");
            break;
            case 2:
                this.textSprite = game.add.sprite(this.posX, 100, "serifada2");
            break;
            case 3:
                this.textSprite = game.add.sprite(this.posX, 100, "serifada3");
            break;
            case 4:
                this.textSprite = game.add.sprite(this.posX, 100, "serifada4");
            break;
            case 5:
                this.textSprite = game.add.sprite(this.posX, 100, "serifada5");
            break;
            default:
            break;
        }
    }
    // this.textSprite.alpha = 1; //botei um alphasim só pra letra não ficar chapada
    this.textSprite.anchor.setTo(0.5, 0.5);
    this.textSprite.events.onInputOver.add(function(){this.textSprite.scale.setTo(1.03); this.textSprite.input.useHandCursor = true;}, this); //hover
    this.textSprite.events.onInputOut.add(function(){this.textSprite.scale.setTo(1);}, this);
    //this.textSprite.anchor.setTo(0, 0);

    game.physics.enable(this.textSprite, Phaser.Physics.ARCADE);//adicionando a física para usar as propriedade de body (somete disponíveis em sprites) 
    this.textSprite.body.velocity.y = this.velocidade;//definindo a velocidade da letra para ser a mesma do construtor
    this.textSprite.inputEnabled = true;
    this.textSprite.events.onInputDown.addOnce(tipografias[this.posicao].clicar, this);//quando o texto for clicado, chama função clicar somente para o obejto da posição certa
}

//Função Loop que vai checar se a tipografia chegou ao fim da tela.
Tipografia.prototype.atualiza = function() {
    if (this.textSprite.world.y -50 >= game.world.height) {//condição
        if (this.tema == temaTela) {//caso o tema seja o mesmo, então o jogador deixou passar a correta, o que significa que ele perdeu
            console.log("Perdeu, playboy. Deixou passar o certo");
            console.log("Tema da Fonte = "+this.tema+" /Tema da tela = "+temaTela);
            perdeu();
        } else {//caso não seja o mesmo tema, vamos reaproveitar a tipografia que caiu e apenas redefini-la
            pontos+=5;
            pontosText.setText(pontos + " Pontos");
            tipografias[this.posicao].textSprite.kill();//matamos o sprite
            tipografias[this.posicao].criarPalavra();//redefinimos ela
        }
    }
}

// function auxx(esse){
//     var aaa = 0.001;
//     if(esse.textSprite.alpha >= 1 || esse.textSprite.alpha <= 0.2){
//         aaa = !aaa;
//     }
//     esse.textSprite.alpha += aaa;
//     console.log(esse.textSprite.alpha);
// }

//QUANDO A TIPOGRAFIA FOR CLICADA, ESSA FUNÇÃO SERÁ CHAMADA. ELA IRÁ CHECAR SE A TIPOGRAFIA CLICADA TEM O MESMO TEMA DA TELA OU NÃO

Tipografia.prototype.clicar = function() {
    if(this.tema == temaTela) {//checando se elas tem o mesmo tema da tela
        tipografias[this.posicao].textSprite.kill();//destruindo o sprite
        this.criarPalavra();//criando um novo
        pontos+=10;//adicionando pontos
        pontosText.setText(pontos + " Pontos");
        console.log("ACERTOU");
    } else {
        console.log("Perdeu, playboy. Clicou no errado.");
        perdeu();
    }
}

//---------------------------FIM DA CLASSE TIPOGRAFIA------------------------------------

//A primeira coisa a se fazer é criar um vetor com todas as tipografias já prontas, já definindo suas posições.
for (var i = 0; i < 11; i++) {
    tipografias[i] = new Tipografia();
    tipografias[i].posicao = i;
}

var temaTela = 1;//tema da tela
var pontos = 0;//pontuação do jogador
var totalTipoNaTela = 1;//total de tipografias na tela
var pontosText;//texto dos pontos que vai ser exibido na tela
var timer; //timer pra auxiliar no tempo
var total = 0;//variável que vai contar os segundos
var textTimer;//texto que vai escrever o tempo na tela
var minutos = 0;//minutos do timer
var mudaTemaSafe = true;

function updateCounter() {
    total++;
    if (total%4 == 0) {
        if (mudaTemaSafe) {
            temaTela = getRandomInt(1,5);
            var temaTelaIndicativo = "";
            switch (temaTela) {
                case 1:
                    temaTelaIndicativo = "fantasia";
                break;
                case 2:
                    temaTelaIndicativo = "impressionismo";
                break;
                case 3:
                    temaTelaIndicativo = "bauhaus";
                break;
                case 4:
                    temaTelaIndicativo = "monalisa";
                break;
                default:
                break;
            }
            c.frame = temaTela-1;
            console.log(temaTela);
        }
    }

    if (total >= 60) {
        minutos++;
        total = 0;
    }
    if (total < 10) {
        textTimer.setText("TEMPO " + minutos +":" + "0" + total);
    } else {
        textTimer.setText("TEMPO " + minutos +":" + total);
    }

    if (total%30 == 0) {
        if (totalTipoNaTela < 11) {
            addTipo();
        }    
    }
}
function addTipo() {
    tipografias[totalTipoNaTela].criarPalavra();
    totalTipoNaTela++;
}

function preload() {

    for(var i = 1; i < 6; i++) {
        game.load.image("fantasia"+i.toString(),"img/fantasia"+i.toString()+".png");
    }
        for(var i = 1; i < 6; i++) {
        game.load.image("manuscrita"+i.toString(),"img/manuscrita"+i.toString()+".png");
    }
        for(var i = 1; i < 6; i++) {
        game.load.image("sem_serifa"+i.toString(),"img/sem_serifa"+i.toString()+".png");
    }
        for(var i = 1; i < 6; i++) {
        game.load.image("serifada"+i.toString(),"img/serifada"+i.toString()+".png");
    }

    game.load.spritesheet("bg","img/bg.png",1300,640,4);
}
var c;
function create() {
    c = game.add.sprite(0,0,"bg");
    for (var i = 0; i < totalTipoNaTela; i++) {
        tipografias[i].criarPalavra();
    }
    textTimer = game.add.text(game.world.centerX+250, 50, "TEMPO " + minutos +":" + total+ "0", { font: 'bold 20pt Poppins Medium', fill: "#000" });
    pontosText = game.add.text(1100,50, pontos + " Pontos", { font: 'bold 20pt Poppins Medium', fill: "#000" });
    
    timer = game.time.create(false);

    //  Set a TimerEvent to occur after 2 seconds
    timer.loop(1000, updateCounter, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();
    game.inputEnabled = true;
}

function update() {
    for (var i = 0; i < totalTipoNaTela; i++) {
        if (tipografias[i] != null) {
            tipografias[i].atualiza();
            if (tipografias[i].textSprite.world.y <= game.world.height - 100) {
                    mudaTemaSafe = true;
            } else {
                mudaTemaSafe = false;
            }
        }
    }

}

function perdeu() {
    modal3.style.display = "block";//abre o pop up de derrota
    game.stage.backgroundColor = 0x666666;//background
    game.paused = true;//FIM DE JOGO PRAYBOY
    pontos = 0;
    total = 0;
    temaTela = 1;
    totalTipoNaTela = 1;
    pontosTotaisUsuario += pontos;
}
function reiniciar() {
    game.paused = false;
    pontos = 0;
    total = 0;
    temaTela = 1;
    minutos = 0;
    totalTipoNaTela = 1;
    game.state.restart();
}
function naoReiniciar() {
    window.location.href = "telaInicio.php";
}