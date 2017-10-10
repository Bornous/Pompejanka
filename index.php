<?php

	session_start();
	require("daneDoPolaczenia.php");
	
	if(isset($_GET['m']) AND isset($_GET['d']) AND isset($_GET['y'])){
		$_SESSION['actualMonth']=$_GET['m'];
		$_SESSION['actualDay']=$_GET['d'];
		$_SESSION['actualYear']=$_GET['y'];
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
					if($_SESSION['actualDay']>=15){
						$kolejnyMies=$_SESSION['actualMonth']+1;
						if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$_SESSION['actualMonth']."' OR dataMonth='".$kolejnyMies."' ") ){
							if($wczytaneDane->num_rows==0){
								$_SESSION['brakMiesiaca']=true;
								
							}
						}
						else{
							//echo "Error przy pobieraniu danych z mysql!";
						}
					}
					else{
						if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$_SESSION['actualMonth']."' ") ){
							if($wczytaneDane->num_rows==0){
								$_SESSION['brakMiesiaca']=true;
								
							}
						}
						else{
							//echo "Error przy pobieraniu danych z mysql!";
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
			if(!isset($_SESSION['actualMonth']) OR !isset($_SESSION['actualDay']) OR !isset($_SESSION['actualYear'])){
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
				
				if($_SESSION['brakMiesiaca']){
					echo "<div id='nowyMiesiac' onclick='ToOtwarcie()'>Rozpocznij nowy miesiąc</div>";
				}
				else{
					echo '<div class="wiersz naglowek"> <div class="data" > Data </div><div class="imie"> Imię i nazwisko </div><div class="czesc">Część błagalna lub dziękczynna </div> <div class="endfloat"></div> </div>';
					$numerPetli=1;
					foreach ( $wczytaneDane as $kafelek){
						if($_SESSION['actualDay']<15 OR ($_SESSION['actualDay']>=15 AND $numerPetli>=10 AND $numerPetli<=55)){
								$zeroDay="";
								if( $kafelek['dataDay']<10) 	$zeroDay= "0";
								if( $kafelek['dataMonth']<10) $kafelek['dataMonth']="0".$kafelek['dataMonth'];
								?>
									<div <?php if($kafelek['imie']==' ')echo 'class="wiersz green"'; else echo 'class="wiersz blue"' ;echo " data-id='".$kafelek['id_dnia']."' data-value='".$kafelek['dataDay']."' month-value='".$kafelek['dataMonth']."' year-value='".$kafelek['dataYear']."' "; if($kafelek['imie']==' '){?> onclick="dajForm(this.getAttribute('data-id'),this.getAttribute('data-value'),this.getAttribute('month-value'),this.getAttribute('year-value'))" <?php }?>> <div class="data" ><?php echo $zeroDay.$kafelek['dataDay']."-".$kafelek['dataMonth']."-".$kafelek['dataYear'];?></div><div class="imie"><?php if($kafelek['imie']==' ')echo "Wolny dzień - można się zapisać!";echo $kafelek['imie']." ".$kafelek['nazwisko'];?> </div><div class="czesc"> <?php if($kafelek['numerPomp']<=27)echo "Błagalna"; else echo "Dziękczynna";?></div> <div class="endfloat"></div> </div> 
								
								<?php
								
						}
						$numerPetli++;
					}
				}
				
				?>
			
			
			</div>
			<?php require("szkielet/footer.php");?>
			
     </div>
	
</body>
</html>