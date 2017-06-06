<?php

	session_start();
	require("daneDoPolaczenia.php");
	$bazaDanych = new mysqli($host, $uzytkownik_bazy,$haslo_uzytkownika,$baza);
	
	
	
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Pompejanka</title>
	<script src="jquery/jquery-1.11.1.min.js"></script>
	<script src="panel_scripts.js"></script>
	<link href="CSS/panel_styles_BETA.css" rel="stylesheet" type="text/css">
	
	
	
</head>

<body onload="pokazTabelke()">

	
	<div id="contener" >
		
	
			<?php require("szkielet/nieuzupelnione.php");?>
			<?php require("szkielet/topbar.php");?>
			<?php require("szkielet/topmenu.php");?>
			<div id="main"  >
			
				<div class="dottedline" ></div>
			
			
			
			</div>
			<?php require("szkielet/footer.php");?>
			
     </div>
	
</body>
</html>