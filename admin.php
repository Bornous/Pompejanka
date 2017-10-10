<?php

	session_start();
	require("daneDoPolaczenia.php");
	if($_POST["haslo"]!="Tamara48@")header('Location: index.php');
	
	if(isset($_GET['m']) AND isset($_GET['d']) AND isset($_GET['y'])){
		$_SESSION['actualMonth']=$_GET['m'];
		$_SESSION['actualDay']=$_GET['d'];
		$_SESSION['actualYear']=$_GET['y'];
	}
	else { if( !isset($_SESSION['actualMonth'])  OR !isset($_SESSION['actualDay']) OR !isset($_SESSION['actualYear'])) header('Location: index.php');}
	
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
					$_SESSION['brakDnia']=false;
					$_SESSION['manyDays']=false;
					$kolejnyMiesiac=$_SESSION['actualMonth']+1;
					if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$_SESSION['actualMonth']."' ") ){
						if($wczytaneDane->num_rows==0){
							$_SESSION['brakMiesiaca']=true;
							
						}
					}
					if( $wczytaneDane2 = $bazaDanych->query("SELECT * FROM zapisy WHERE dataMonth='".$kolejnyMiesiac."' ") ){
						if($wczytaneDane2->num_rows==0){
							$_SESSION['brakKolejnegoMiesiaca']=true;
							
						}
					}
				
					
					if( $wczytaneDane3 = $bazaDanych->query("SELECT * FROM zapisy WHERE dataDay='".$_SESSION['actualDay']."' AND dataMonth='".$_SESSION['actualMonth']."' AND dataYear='".$_SESSION['actualYear']."'   ") ){
						if($wczytaneDane3->num_rows==0){
							$_SESSION['brakDnia']=true;
							
						}
						if($wczytaneDane3->num_rows>1){
							$_SESSION['manyDays']=true;
						}
					}
					else echo"Cos nie halo";

				
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
				echo 'onload="ustawienieAktualnegoMiesiacaAdmin()"';
				}

?>>

	
	<div id="contener" >
		
	
			<?php require("szkielet/nieuzupelnione.php");?>
			<?php require("szkielet/topbar.php");?>
			<?php require("szkielet/topmenu.php");?>
			<div id="main" class="fontsize" >
				<?php echo "<div>";
							if($_SESSION['manyDays']==false AND $_SESSION['brakDnia']==false){
								foreach($wczytaneDane3 as $rekord){
										if( $wczytaneDaneMailowe = $bazaDanych->query("SELECT * FROM mailing WHERE id_dnia='".$rekord['id_dnia']."' ") ){
												if($wczytaneDaneMailowe->num_rows==0){
												echo "Mail nie zostal wyslany i nie bylo proby wyslania go.";
								
												}
												else{
													echo "Byla proba wyslania maila. Nie wiem jeszcze z jakim skutkiem.";
												}
										}
								}
							}
							else echo "Cos nie tak z wyszukiwaniem dnia.";
							
				
				echo "</div>";
				
				if($_SESSION['brakMiesiaca']) echo "<div id='nowyMiesiac' onclick='ToOtwarcie()'>Nie utworzono jeszcze bierzącego miesiąca</div>";
				
			
				if($_SESSION['brakKolejnegoMiesiaca'])echo "<br/><div id='nowyMiesiac' onclick='ToOtwarcie2()'>Utwórz kolejny miesiąc</div>";
			
				
				$bazaDanych->close();		
				?>
			
			
			</div>
			<?php require("szkielet/footer.php");?>
			
     </div>
	
</body>
</html>