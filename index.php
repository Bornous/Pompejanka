<?php

	session_start();
	require("daneDoPolaczenia.php");
	
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
					if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$_SESSION['actualMonth']."' ") ){
						if($wczytaneDane->num_rows==0){
							$_SESSION['brakMiesiaca']=true;
							
						}
					}
					else{
						//echo "Error przy pobieraniu danych z mysql!";
					}

				$bazaDanych->close();		
			}
	
	}
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

<body <?php 
			if(!isset($_SESSION['actualMonth'])){
				echo 'onload="ustawienieAktualnegoMiesiaca()"';
				}

?>>

	
	<div id="contener" >
		
	
			<?php require("szkielet/nieuzupelnione.php");?>
			<?php require("szkielet/topbar.php");?>
			<?php require("szkielet/topmenu.php");?>
			<div id="main"  >
				<div id="ErrorLog"><?php
				if($_SESSION['brakMiesiaca']){
					echo "Brak miesiaca";
				}
				
				?>
				</div>
				<div class="dottedline" ></div>
				
				
				<?php
				
				if($_SESSION['brakMiesiaca']){
					echo "<div id='nowyMiesiac' onclick='ToOtwarcie()'>Rozpocznij nowy miesiąc</div>";
				}
				else{
					echo '<div class="wiersz naglowek"> <div class="data" > Data </div><div class="imie"> Imię i nazwisko </div><div class="czesc">Część błagalna lub dziękczynna </div> <div class="endfloat"></div> </div>';
					foreach ( $wczytaneDane as $kafelek){
						
						if( $kafelek['dataDay']<10) 	$kafelek['dataDay']= "0".$kafelek['dataDay'];
						if( $kafelek['dataMonth']<10) $kafelek['dataMonth']="0".$kafelek['dataMonth'];
						?>
							<div <?php if($kafelek['imie']==' ')echo 'class="wiersz green"'; else echo 'class="wiersz blue"'; echo "value='".$kafelek['dataDay']."'"?> onclick="zapis()" > <div class="data" ><?php echo $kafelek['dataDay']."-".$kafelek['dataMonth']."-".$kafelek['dataYear'];?></div><div class="imie"><?php if($kafelek['imie']==' ')echo "Wolny dzień - można się zapisać!";echo $kafelek['imie']." ".$kafelek['nazwisko'];?> </div><div class="czesc"> <?php if($kafelek['numerPomp']<=27)echo "Błagalna"; else echo "Dziękczynna";?></div> <div class="endfloat"></div> </div> 
						
						<?php
						
						
					}
				}
				
				?>
			
			
			</div>
			<?php require("szkielet/footer.php");?>
			
     </div>
	
</body>
</html>