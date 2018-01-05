<!DOCTYPE html>
<html lang="pt-br">
	<head>
	</head>
	<body>
		<header id="main-header">
				<figure>
					<!-- <a href="telaInicio.php"><img id="logo" src="img/logo-horizontal.png" alt="Chibata" title="Chibata"></a> -->
				</figure>
				<div id="menuicon-container">
					<i id="menu-icon" onclick="openNav(); guardarDados(1)"><img src="img/menu-icon.svg"></i>
				</div> <!-- botei há pouco tempo pra guardar dados na entrada do menu
				</span>
				<!-- <span>
					<i id="menu-icon" onclick="openNav(); guardarDados(1)"><img src="img/menu-icon.svg"></i>
				</span> -->
		</header>
		<div id="mySidenav" class="sidenav">
		<!-- <span class="fa-stack fa-2x" id="close-stack">
			<i class="fa fa-circle fa-stack-2x"></i>
			<i class="fa fa-times fa-stack-1x closebtn" href="javascript:void(0)" aria-hidden="true" onclick="closeNav(); guardarDados(1)"></i>
		</span> -->
		<div id="closeicon-container">
			<i onclick="closeNav(); guardarDados(1)"><img src="img/close-icon.svg"></i>
		</div>
			  	<header id="side-header">
			  		<form id="menu-selection">
				  		<span class="btn btn-link" id="btn-desafio">DESAFIOS</span>
				  		<span class="btn btn-link" id="btn-conq">CONQUISTAS</span>
				  	</form>
			  	</header>
			  	<section id="desafios">
		  			  	<div class="tema" id="tema1">
		  			  		<span class="tema-bg"></span>
		  			  		<span class="tema-conteudo"></span>
		  			  	</div>
		  			  	<div class="tema" id="tema2">
		  			  		<span class="tema-bg"></span>
		  			  		<span class="tema-conteudo"></span>
		  			  	</div>
		  			  	<div class="tema" id="tema3">
		  			  		<span class="tema-bg"></span>
		  			  		<span class="tema-conteudo"></span>
		  			  	</div>
			  	</section>
			  	<section id="conquistas">
			 		<div id="medalhas-tipo-content">
			 			<h2 class="user-titulo"></h2>
				 		<span class="medalhas medalhaBronze medalha-block"></span>
				 		<span class="medalhas medalhaPrata medalha-block"></span>
				 		<span class="medalhas medalhaOuro medalha-block"></span>
			 		</div>
			 		<div id="medalhas-cor-content">
			 			<h2 class="user-titulo-naoAtivo">Colorista Iniciante</h2>
				 		<span class="medalhas medalhaBronze medalha-block"></span>
				 		<span class="medalhas medalhaPrata medalha-block"></span>
				 		<span class="medalhas medalhaOuro medalha-block"></span>
			 		</div>
				</section>
				<span id="barra-vert"></span>
			  	<div id="menu2">
				 	<div id="perfil">
				 		<!-- <img id="avatar" src="img/avatar2.png"> -->
				 		<span id="user-avatarMenu">
							<span class="setas setaVem setasHeader" onclick="mudaAvatar(1, 50, 163.5, 1)"></span>
							<span class="setas setaVai setasHeader" onclick="mudaAvatar(-1, 50, 163.5, 1)"></span>
				 		</span>
				 		<!-- <div id="avatar-container">
				 			<span id="escolhaAvatar"></span>
				 			<span class="setas" id="setaVem" onclick="anteriorAvatar()"></span>
				 			<span class="setas" id="setaVai" onclick="proximoAvatar()"></span>
				 		</div> -->

				 		<h4 class="user-titulo">Tipógrafo Iniciante</h4>
				 		<h3 id="user-nome" contenteditable="true"></h3>
				 		<!-- <i class="fa fa-pencil fa-2x"></i> -->
				 		<!-- <span id="pencil"> </span> -->
			  		</div>
			  		<section id="abas">
					<section id="aba-referencias">
				  		<section class="sidebolinha">
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<br>
				 		</section>
						<a href="#" id="refer">REFERÊNCIAS</a>
						<div id="content-ref">
							<h3>Referências utilizadas</h3>
							<br>
							<h4 style="text-align: left;"><strong>Para o mini desafio das fontes:</strong></h4>
							<a style="display: block; font-weight: bolder; font-size: 20px; text-align: left;" href="http://www.des1gnon.com/2012/12/aprenda-como-escolher-a-fonte-certa-parte-1/" target="_blank">- DES1GNON</a>
							<a style="display: block; font-weight: bolder; font-size: 20px; text-align: left;" href="https://www.designerd.com.br/como-escolher-fonte-ideal-para-cada-tipo-de-imagem/" target="_blank">- DESIGNERD</a>
							<a style="display: block; font-weight: bolder; font-size: 20px; text-align: left;" href="http://xuti.net/2003/02/fontes-aprenda-a-usa-las/" target="_blank">- XUTI</a>
						</div>
					</section>
					<section class="aba-menu" id="aba-sobre">
				 		<section class="sidebolinha">
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<svg width="10" height="10"><circle cx="3" cy="3" r="3" stroke="none" fill="rgb(56, 56, 56)"/></svg>
							<br>
						</section>
						<a href="#" id="about">SOBRE</a>
						<div id="content-sobre">
								<h3>Desenvolvido para a disciplina <strong>Projeto Integrado I</strong></h3>
								<br>
								<h4><strong>Alunos:</strong></h4>
								<ul>
									<li>Alexandre Machado</li>
									<li>João Victor de Alencar</li>
									<li>Izac Sidarta</li>
									<li>Letícia Cavalcante</li>
									<li>Tiego Campos</li>
								</ul>
								<img src="img/Logo-Chibata-Rosa.png" id="sobre-img">
								<br>
								<a href="http://ufc.br" target="_blank"><img src="img/brasao-ufc.png" id="ufc-logo"></a>
								<a href="http://smd.virtual.ufc.br" target="_blank"><img src="img/smd-logo.png" id="smd-logo"></a>
							</div>
					</section>
					</section>
					<!-- <section id="sobre-hover">
						<a href="#" id="fecha-sobre-hover">FECHA</a>
					</section> -->
				</div>
		</div>
	</body>
</html>