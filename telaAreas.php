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
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/tudoInterface.js"></script>
	</head>
	<body>
		<?php include_once "header.php"; ?>
		<h2 class="title-selection">Por qual conceito você gostaria de começar?</h2>
		<section class="row">
			<div id = "tipoSelection" class="bt-concept">
				<img src="img/btn-tipo.png">
			</div>
			<div id = "layoutSelection" class="bt-concept">
				<img src="img/btn-layout.png">
			</div>
			<div id = "corSelection" class="bt-concept">
				<img src="img/btn-cor.png">
			</div>
		</section>
	</body>
</html>