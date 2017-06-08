<!DOCTYPE HTML>
<html lang="pl">
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>Pompejanka</title>
	<script src="jquery/jquery-1.11.1.min.js"></script>
	<script src="panel_scripts.js"></script>
	<link href="CSS/panel_styles_BETA.css" rel="stylesheet" type="text/css">
	
	
	
</head>

<body>
<?php
	session_start();
	require_once "daneDoPolaczenia.php";
	if(isset($_POST['dataMonth'])){
		
		$dzien=$_POST['dataDay'];
		$Miesiac=$_POST['dataMonth'];
		$year=$_POST['year'];
		$imie=htmlentities($_POST['imie'], ENT_QUOTES, "UTF-8");
		$nazwisko=htmlentities($_POST['nazwisko'], ENT_QUOTES, "UTF-8");
		$email=htmlentities($_POST['email'], ENT_QUOTES, "UTF-8");
		$id_dnia=$_POST['id'];
		
		
		$bazaDanych = @new mysqli($host, $uzytkownik_bazy,$haslo_uzytkownika,$baza);
		mysqli_query($bazaDanych,"SET NAMES UTF8");
		
		if ($bazaDanych->connect_errno!=0)
			{
				header('Location: index.php');	
			}
			
		else
			{ 
					echo "Udalo sie polaczy z baza";
						$zapytanie="UPDATE zapisy SET imie='".$imie."',nazwisko='".$nazwisko."',email='".$email."' WHERE id_dnia='".$id_dnia."' ";
						$sukcesy=0;
						if($bazaDanych->query($zapytanie) ){
							$sukcesy++;
						}
					
				
					
					

				$bazaDanych->close();	
			}
		
		header('Location: index.php');
		
	}

	
?>
</body>
</html>
