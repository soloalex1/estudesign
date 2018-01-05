<!DOCTYPE html>
<html>
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
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/tudoInterface.js"></script>
	</head>
	<body>
		<?php include_once "header.php"; ?>
		<h2 class="title-selection" id="login-title">Nos diga como você é!</h2>
		<section id="login-container">
		<div id="avatar-container">
			<span id="avatarLogin"></span>
			<span class="setas setaVem setasLogin" onclick="mudaAvatar(1, 100, 280, 2)"></span>
			<span class="setas setaVai setasLogin" onclick="mudaAvatar(-1, 100, 280, 2)"></span>
		</div>
		<div id="name-container">
			<form id="nomeFeice-Nome"> 
				<input type="text" name="usertname" value="" placeholder="Qual seu nome?"> 
			</form>
            <a id="nomeFeice-Feice" href="pimba.php"></a>
		</div>
		<!-- <form> --><a id="login" href="telaAreas.php" onclick="guardarDados(2)">LOGIN</a><!-- <input id="login" type="submit" value="Login" onClick="check()"/></form> -->
		</section>
</body>
</html>