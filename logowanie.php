<?php

	session_start();
	require("daneDoPolaczenia.php");
	
?>
<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pompejanka</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="panel_scripts.js"></script>
	<link href="CSS/panel_styles_BETA.css" rel="stylesheet" type="text/css">
	
	
	
</head>

<body >

	
	<div id="contener" >
		
				<form action="admin.php" method="POST">
				Haslo:
				<input type="password" name="haslo" />
				<input type="submit"  value="Loguj"/>
				
				
				</form>
			
			
			</div>
		
			
     </div>
	
</body>
</html>