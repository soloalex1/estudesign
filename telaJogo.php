<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<title>estuDesign</title>

		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="author" content="Equipe Chibata">
		<meta name="description" content="Uma aplicação para ensino de design de uma forma inovadora.">
		<link rel="icon" href="img/icon.png">
		<link rel="stylesheet" href="css/font-awesome-4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="css/normalize.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<script type="text/javascript" src="js/phaser.min.js"></script>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/tudoInterface.js"></script>
		<script type="text/javascript" src="js/jogoTipo.js"></script>
	</head>
	<body>
		<?php include_once "header.php"; ?>
		<section id="game">
			<!-- The Modal -->
			<div id="myModal" class="modal">
			  <!-- Modal content -->
			  <div class="modal-content">
			  	<span class="close"><img src="img/x_fechar.png"></span>
			    <header>
			      <h2>Instruções</h2>
			    </header>
			    <div class="modal-body">
			      <p>Clique na palavra com a tipografia que se adequa ao contexto proposto na tela do jogo para fazer pontos e testar seus conhecimentos. Caso tenha alguma dúvida, visite a seção “conteúdo”.</p>
			    </div>
			    <button id="btn_praticar"class= "btnJogo">Praticar</button>
			  </div>
			</div>

			<!-- Modal DOIS -->

			<div id="myModal2" class="modal2">
			  <!-- Modal content -->
			  <div class="modal-content2">
			  	<span class="close2"><img src="img/x_fechar.png"></span>
			    <header>
			      <h2>Jogo Pausado</h2>
			    </header>
			    <div class="modal-body2">
			    </div>
			    <button id="btn_reiniciar"class= "btnJogo">Reiniciar Partida</button>
			    <button id="btn_instrucoes"class= "btnJogo">Instruções</button>
			    <button id="btn_sairPause"class= "btnJogo">Voltar</button>
			  </div>
			</div>

			<div id="myModal3" class="modal3">
			  <!-- Modal content -->
			  <div class="modal-content3">
			    <header>
			      <h2>Não foi dessa vez :( </h2>
			    </header>
			    <button id="btn_tentarNovamente"class= "btnJogo">Tentar Novamente</button>
			    <button id="btn_sairDerrota" class= "btnJogo">Sair</button>
			  </div>
			</div>

			<header id="header_jogo">Que tipo é?</header>
			<section id="game_screen">
				<div id="menuDicas">
					<div id="dicas">
					<div>
					<h2>Dicas</h2>
						<b>Serifadas:</b>
						<p>Lembra dos grandes escritos em pedras na antiga Roma onde através deles os imperadores mostravam sua autoridade e seriedade sobre o assunto tratado? É exatamente onde normalmente é usado esse tipo de fonte. Uma aplicação mais séria como um jornal que necessita de respeito e talvez até mostrar um tradicionalismo é um local onde podemos ver a aplicação nos dias de hoje. Sofisticadas, clássicas e sólidas, as fontes sem serifas são uma boa pedida para aplicações que necessitam dessas características. Dependendo da forma da fonte e da serifa, conseguimos também uma sensação de elegância e tradição.
						</p>
						<br>
						<b>Sem serifa:</b><p>Aquele título que parecia mais uma bailarina de tão suave, leve e claro? É claro que seria uma tipografia sem serifa! Em fontes não serifadas podemos observar estabilidade e objetividade. Para leituras, ela é excelente. Ideal para facilitar uma leitura rápida. Bastante utilizada na publicidade pela facilidade e rapidez de leitura que a torna bastante simples e eficiente. No entanto, algumas fontes não-serifadas mais finas e com um formato diferenciado conseguem transmitir uma sensação de bom gosto e elegância.
						</p>
						<br>
						<b>Fantasia:</b><p>Sua característica em comum é justamente não ter muitas características em comum! São fontes que representam um tema, uma idéia, em sua própria forma. Podemos encontrar no tema “terror” por exemplo, fontes que suas bordas são “escorridas”, como sangue. Ou então em forma de balão de festa, e por aí vai. Por serem muito específicas, geralmente são de pouco uso nos materiais em geral. É importante que sejam utilizadas com cautela, pois dependendo do tipo de aplicação, fogem completamente ao tema. E outra: geralmente são de baixa leitura. Nem pense em escrever um texto inteiro com essas fontes!
						</p>
						<br>
						<b>Manuscritas:</b><p>São predominantemente serifadas, grossas e projetadas para que pudessem ser lidas à distância; altura-x tende a ser próxima da altura da fonte. Em alguns tipos, as transições entre hastes são inexistentes, em outros, são acentuados, dando uma ênfase vertical nos tipos;
						</p>
						<br>
					</div>
					</div>
					<div id="contents" onclick="abreFechaMenu()">CONTEÚDO</div>
				</div>
				<div id="jogo"></div>
				<button id="btn_pause"><img src="img/btn_pause.png"></button>
			</section>
		</section>
	</body>
</html>