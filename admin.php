<?php

	session_start();
	require("daneDoPolaczenia.php");
	if($_POST["haslo"]!="Tamara48@")header('Location: index.php');
	
	if(isset($_GET['m'])){
		$_SESSION['actualMonth']=$_GET['m'];
	}
	
	if(isset($_SESSION['actualMonth'])){
				
		$bazaDanych = @new mysqli($host, $uzytkownik_bazy,$haslo_uzytkownika,$baza);
		mysqli_query($bazaDanych,"SET NAMES UTF8");
		
		if ($bazaDanych->connect_errno!=0)
			{
					echo "Error: ".$bazaDanych->connect_errno;
			}
			
		else
			{ 	
					$_SESSION['brakMiesiaca']=false;
					$_SESSION['brakKolejnegoMiesiaca']=false;
					$kolejnyMiesiac=$_SESSION['actualMonth']+1;
					if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$_SESSION['actualMonth']."' ") ){
						if($wczytaneDane->num_rows==0){
							$_SESSION['brakMiesiaca']=true;
							
						}
					}
					if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$kolejnyMiesiac."' ") ){
						if($wczytaneDane->num_rows==0){
							$_SESSION['brakKolejnegoMiesiaca']=true;
							
						}
					}
				
					

				$bazaDanych->close();		
			}
	
	}
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

<body <?php 
			if(!isset($_SESSION['actualMonth'])){
				echo 'onload="ustawienieAktualnegoMiesiaca()"';
				}

?>>

	
	<div id="contener" >
		
	
			<?php require("szkielet/nieuzupelnione.php");?>
			<?php require("szkielet/topbar.php");?>
			<?php require("szkielet/topmenu.php");?>
			<div id="main" class="fontsize" >
				<?php /*<div class="dottedline" ></div>
				<div id="ErrorLog"><?php
				if($_SESSION['brakMiesiaca']){
					echo "Brak miesiaca";
				}
				
				?>
				</div>
				<div class="dottedline" ></div>
				
				
				<?php*/
				
				if($_SESSION['brakMiesiaca']) echo "<div id='nowyMiesiac' onclick='ToOtwarcie()'>Nie utworzono jeszcze bierzącego miesiąca</div>";
				
			
				if($_SESSION['brakKolejnegoMiesiaca'])echo "<br/><div id='nowyMiesiac' onclick='ToOtwarcie2()'>Utwórz kolejny miesiąc</div>";
			
				
				
				?>
			
			
			</div>
			<?php require("szkielet/footer.php");?>
			
     </div>
	
</body>
</html>