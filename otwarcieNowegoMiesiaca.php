<?php
	session_start();
	require_once "daneDoPolaczenia.php";
	if(isset($_GET['newM'])){
		
		$nowyMiesiac=$_GET['newM'];
		$year=$_GET['year'];
		
		
		if($nowyMiesiac==2){
			if(rok%4==0)	$liczba_dni_w_mies=29;
			else$liczba_dni_w_mies=28;
			if(rok%100==0)$liczba_dni_w_mies--;
			if(rok%400==0)$liczba_dni_w_mies++;
		}
		else{	
			if($nowyMiesiac==1 || $nowyMiesiac==3 || $nowyMiesiac==5 || $nowyMiesiac==7 || $nowyMiesiac==8 || $nowyMiesiac==10 || $nowyMiesiac==12)$liczba_dni_w_mies=31;
			if($nowyMiesiac==4 || $nowyMiesiac==6 || $nowyMiesiac==9 || $nowyMiesiac==11)$liczba_dni_w_mies=30;
		}
		
					
		$bazaDanych = new mysqli($host, $uzytkownik_bazy,$haslo_uzytkownika,$baza);
		mysqli_query($bazaDanych,"SET NAMES UTF8");
		
		if ($bazaDanych->connect_errno!=0)
			{
					echo "Error: ".$bazaDanych->connect_errno;
			}
			
		else
			{ 
					echo "Udalo sie polaczy z baza";
					if( $wczytaneDane = $bazaDanych->query("SELECT * FROM zapisy ") ){
						$iloscWynikow=$wczytaneDane->num_rows;
						if($iloscWynikow%54==0)	$dzienPompejanki=1;
						else										$dzienPompejanki=$iloscWynikow+1;
						echo " i wyszukac rekordy: ".$iloscWynikow." petla: ";
					}
					else{
						echo "Nie mozna polaczyc sie z bazom!";
					}
					$sukcesy=0;
					for( $i=1;$i<=$liczba_dni_w_mies;$i++){
						echo " ".$i." ".$dzienPompejanki;
						$zapytanie="INSERT INTO zapisy ( dataDay, dataMonth, dataYear , imie, nazwisko, email, numerPomp) VALUES ('".$i."', '".$nowyMiesiac."', '".$year."' , ' ' , ' ', ' ' , '".$dzienPompejanki."' )";
						if($bazaDanych->query($zapytanie) ){
							$sukcesy++;
						}
						
						if($dzienPompejanki==54)$dzienPompejanki=1;
						else $dzienPompejanki++;
						
					}
				
					echo " . Pomyślnie zaaplikowano ".$sukcesy." rekordów. NOwyM=".$nowyMiesiac." a year to ".$year." liczba dni w mies ".$liczba_dni_w_mies;
					

				$bazaDanych->close();	
			}
		
		$_SESSION['brakMiesiaca']=false;
		
	}
	
?>

