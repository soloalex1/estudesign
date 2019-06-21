//////////////////////////////////////////////////////////////////////////// GERAL /////////////////////////////////////////////////////////////////////////// 
let avatarIndex;
let pontosTotaisUsuario;

//se é o primeiro inicio (avatar = indefinido), avatar é zero; se não é indefinido (avatar = 0/1/2/... e por isso ele já foi setado pro localstorage), avatar é igual ao localstorage
if(avatarIndex == undefined){ //se tiver com bug de não passar o avatar do menu, talvez seja por essas condições e por não setar logo o avatarIndex como zero, mas isso causa outro bug
	avatarIndex = 0;
}else if(localStorage.getItem("avatarIndex") != null){
	avatarIndex = localStorage.getItem("avatarIndex");
}

///abre e fecha menu lateral
function openNav() {
   	document.getElementById("mySidenav").style.width = "100%";
   	game.paused = true;
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if (modal.style.display == "none" && modal2.style.display == "none" && modal3.style.display == "none" && menuzinhoTopzeraAberto == false) {
    	game.paused = false;
    }
}

//muda entre as telas de desafios e conquistas
$(document).ready(function(){
	$('#btn-desafio').click(i => {
		i.preventDefault();
		$(this).css('color', '#652D90');
		$(this).css('font-size', '160%');
		$('#btn-conq').css('color', '#C9C9C9');
		$('#btn-conq').css('font-size', '140%');
		$('#conquistas').fadeOut(600);
		$('#desafios').fadeIn(600);
		$('#conquistas').css('display', 'none');
		$('#desafios').css('display', 'flex');
	});
	$('#btn-conq').click(i => {
		i.preventDefault();
		$(this).css('color', '#652D90');
		$(this).css('font-size', '160%');
		$('#btn-desafio').css('color', '#C9C9C9');
		$('#btn-desafio').css('font-size', '140%');
		$('#desafios').fadeOut(500);
		$('#conquistas').fadeIn(500);
		$('#desafios').css('display', 'none');
		$('#conquistas').css('display', 'block');
	});
	$('#menu-icon').click(() => {
		$('#mySidenav').css('width', '100%');
	});
	$('.closebtn').click(() => {
		$('#mySidenav').css('width', '0');
	});


	$('#aba-sobre').click(() => {
		if($('#aba-sobre').css("top") != "-385px"){
			$('#aba-sobre').css({"top": "-385px"});
			$('#aba-referencias').css({"top": "400px"});
		}else{
			$('#aba-sobre').css({"top": "50px"});
			$('#aba-referencias').css({"top": "-10px"});
		}
	});
	$('#aba-referencias').click(() => {
		if($('#aba-referencias').css("top") != "-385px"){
			$('#aba-referencias').css({"top": "-385px"});
			$('#aba-sobre').css({"top": "400px"});
		}else{
			$('#aba-referencias').css({"top": "-10px"});
			$('#aba-sobre').css({"top": "50px"});
		}
	});
	$('#aba-sobre').click(() => {
		if($('#content-sobre').css('opacity') == 1){
			$('#content-sobre').css('opacity', "0");
		}else{
			$('#content-sobre').css('opacity', "1");
		}
	});
	$('#aba-referencias').click(() => {
		if($('#content-ref').css('opacity') == 1){
			$('#content-ref').css('opacity', "0");
		}else{
			$('#content-ref').css('opacity', "1");
		}
	});

	$('.tema').hover(() => {{ //para os temas do menu
		$(this).find('span.tema-bg').css('opacity', '0.2');
		$(this).find('span.tema-conteudo').css('background-position-y', '0px');
	}, function(){
		$(this).find('span.tema-bg').css('opacity', '0');
		$(this).find('span.tema-conteudo').css('background-position-y', '120px');
	});
});

//faz o ajuste pra pular cada avatar certinho e bota ele na posição da imagem
//maisMenos = avatar vai ou vem, posXInicial = x da imagem, offset = quanto precisa ser pulado, indicador = qual dupla de setas vem o clique
function mudaAvatar(maisMenos, posXInicial, offset, indicador) {
	if(avatarIndex==0){
		avatarIndex = (maisMenos > 0) ? (avatarIndex + maisMenos) % 12 : 11;
	}else{
		avatarIndex = (avatarIndex + maisMenos) % 12;
	}

	(indicador == 1) ? 
		($('#user-avatarMenu').css("background-position-x", posXInicial - offset*avatarIndex +"px"))
		: ($('#avatarLogin').css("background-position-x", posXInicial - offset*avatarIndex +"px"))

	guardarDados(3);
}

//verifica quem chamou guardarDados e seta no localstorage
function guardarDados(indicador) {
	if(indicador == 1){ //pro menu, ele salva o nome do texto de um elemento, e salva o avatar e o titulo do localstorage
		let nomeSalvar = $('#user-nome').text();
		localStorage.setItem('avatarIndex', localStorage.getItem("avatarIndex"));

		verificaTitulo();
		let titulo = localStorage.getItem("titulo");
		$('.user-titulo').html(titulo);

	}else if(indicador == 2){ //pro login, ele salva o nome do input do usuário e salva o avatar da variável
		let nomeSalvar = $('form#nomeFeice-Nome input').val();
		localStorage.setItem('avatarIndex', avatarIndex);
	}else{
		let nomeSalvar = $('#user-nome').text(); //só pra mudar o avatar, assim, serve pro menu e login... ele salva nome do texto de um elemento e o avatar da variável
		localStorage.setItem('avatarIndex', avatarIndex);
	}

		localStorage.setItem('nome', nomeSalvar);
}
//dá load no nome que tá no menu, seta a posição da imagem do avatar e seta o título; só executa uma vez, dentro de verificaInicio() 
function carregarDados(){
	let nomeSalvo = localStorage.getItem("nome");
	$('#user-nome').html(nomeSalvo);

	let posAvatarSalvo =  50-localStorage.getItem("avatarIndex")*163.5+"px"; //35 posição inicial. 220 é o offset da visualização no menu
	$('#user-avatarMenu').css("background-position-x", posAvatarSalvo);
	console.log(posAvatarSalvo);

	let titulo = localStorage.getItem("titulo");
	$('.user-titulo').html(titulo);
}

//verificações que vão acontecer no início da aplicação; só executa uma vez na abertura de cada página
function verificaInicio(){
	if(window.location.pathname == "/estuDEsign_v.1.9.4/telaInicio.php"){
		if(localStorage.getItem('jaLogou') == "true"){
			$('#comecar').attr('href', 'telaJogo.php');
			////////////////////////////////////////////////////////////////////////////////ALTERAR O PATH DA CONDIÇÃO A CADA VERSÃO
		}else{
		    localStorage.setItem('nome', "Designer Anônimo");
		    localStorage.setItem('avatarIndex', 0);
		    localStorage.setItem('titulo', "Tipógrafo Iniciante");
		    localStorage.setItem('pontosTotaisUsuario', 0);
		}
	}
	$('a#login').click(function(){ //coisas específicas do login
	    localStorage.setItem('jaLogou', true);
	})

	carregarDados();
}

//executa sempre que cada página carrega toda
$(document).ready(() => {
	verificaInicio();

	$('html, body').animate({ scrollTop: $('#jogo').offset().top + 100 }, 1000);

	if(window.location.pathname == "/estuDEsign_v.1.9.4/telaJogo.php"){ //pra diminuir o menu na tela de jogo
		$('#menuicon-container').css({"top":"2px"});
	}
	if(window.location.pathname == "/estuDEsign_v.1.9.4/telaJogo.php"){ //pra diminuir o menu na tela de jogo
		$('#menuicon-container').css({"top":"2px"});
	}
})

function verificaTitulo(){
	let pontosAux = localStorage.getItem("pontosTotaisUsuario");
	if(pontosAux < 100){
		localStorage.setItem('titulo', "Tipógrafo Iniciante");
	}
	if(pontosAux >= 100){
		localStorage.setItem('titulo', "TIPO BRONZE");
		$('#medalhas-tipo-content span.medalhaBronze').removeClass('medalha-block');
	}
	if(pontosAux >= 300){
		localStorage.setItem('titulo', "TIPO PRATA");
		$('#medalhas-tipo-content span.medalhaPrata').removeClass('medalha-block');
	}
	if(pontosAux >= 500){
		localStorage.setItem('titulo', "TIPO OURO");
		$('#medalhas-tipo-content span.medalhaOuro').removeClass('medalha-block');
	}
}

//////////////////////////////////////////////////////////////////////////// TELA AREAS /////////////////////////////////////////////////////////////////////////// 
$(document).ready(() => { 

	$("#tema1").click(() => {
		// jogoTipografia = true;
		localStorage.setItem("jogoTipografia", true);
		window.location.href = "telaJogo.php";
	});
	$("#tipoSelection").click(() => {
		// jogoTipografia = true;
		localStorage.setItem("jogoTipografia", true);
		window.location.href = "telaJogo.php";
	});
	$("#layoutSelection").click(() => {
		// jogoLayout = true;
		localStorage.setItem("jogoLayout", true);
		window.location.href = "telaJogo.php";
	});
	$("#corSelection").click(() => {
		// jogoCor = true;
		localStorage.setItem("jogoCor", true);
		window.location.href = "telaJogo.php";
	});
});


//////////////////////////////////////////////////////////////////////////// TELA JOGO /////////////////////////////////////////////////////////////////////////// 
let jogoAtual = 1;
function passaJogo() {
	if (jogoAtual >= 1 && jogoAtual < 3) {
		jogoAtual++;
		document.getElementById("numJogo").innerHTML = jogoAtual;
	}
}
function voltaJogo() {
	if (jogoAtual <= 3 && jogoAtual >= 2) {
		jogoAtual--;
		document.getElementById("numJogo").innerHTML = jogoAtual;
	}
}

let menuzinhoTopzeraAberto = false;

function abreFechaMenu(){
	menuzinhoTopzeraAberto ? $('#menuDicas').css('right','0px') : $('#menuDicas').css('right','-500px')
	game.paused = (game.paused && modal.style.display == "none") ? false : true;
	menuzinhoTopzeraAberto = !menuzinhoTopzeraAberto;
}
	
let modal, modal2, modal3;

//------------------------funções que vão administrar as instruções do jogo de Tipografia
$(document).ready(() => {
	// Get the modal
	game.paused = true;

	modal = document.getElementById('myModal');
	modal2 = document.getElementById('myModal2');
	modal3 = document.getElementById('myModal3');
	
	modal.style.display = "block";
	modal2.style.display = "none";
	modal3.style.display = "none";

	// Get the button that opens the modal
	const btn_praticar = document.getElementById("btn_praticar");
	const btn_pause = document.getElementById("btn_pause");
	const btn_sairPause = document.getElementById("btn_sairPause");
	const btn_reiniciar = document.getElementById("btn_reiniciar");
	const btn_instrucoes = document.getElementById("btn_instrucoes");
	const btn_tentarNovamente = document.getElementById("btn_tentarNovamente");
	const btn_sairDerrota = document.getElementById("btn_sairDerrota");

	// Get the <span> element that closes the modal
	const span = document.getElementsByClassName("close")[0];
	const span2 = document.getElementsByClassName("close2")[0];

	// When the user clicks the button, open the modal 
	btn_praticar.onclick = () => {
	    modal.style.display = "none";//após as instruções iniciais, começa o jogo
	    if (modal2.style.display == "none") {
	    	game.paused = false;	    	
	    }
	}

	btn_pause.onclick = () => {
	    modal2.style.display = "block";//abre o menu pause
	    game.paused = true;
	}

	btn_sairPause.onclick = () => {//fecha menu pause
	    modal2.style.display = "none";
	    game.paused = false;
	}

	btn_reiniciar.onclick = () => {//reinicia o jogo
	    modal2.style.display = "none";		
	    reiniciar();
	}

	btn_tentarNovamente.onclick = () => {//reinicia o jogo
	    modal3.style.display = "none";		
	    reiniciar();
	}
	btn_sairDerrota.onclick = () => {//reinicia o jogo
		naoReiniciar();
		console.log("saiu");
	}

	btn_instrucoes.onclick = () => {
	    modal.style.display = "block";//mostra as instruções novamente
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = () => {
	    modal.style.display = "none";
	    game.paused = false;
	}
	span2.onclick = () => {
	    modal2.style.display = "none";
	    game.paused = false;
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = () => {
	    if (event.target == modal) {
	        modal.style.display = "none";
	        game.paused = false;
	    }
	    if (event.target == modal2) {
	        modal2.style.display = "none";
	        game.paused = false;
	    }
	}
});
