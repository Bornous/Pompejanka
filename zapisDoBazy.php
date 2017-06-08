<?php
	session_start();
	require_once "daneDoPolaczenia.php";
	if(isset($_GET['dataMonth'])){
		
		$dzien=$_GET['dataDay'];
		$Miesiac=$_GET['dataMonth'];
		$year=$_GET['year'];
		$imie=htmlentities($_POST['imie'], ENT_QUOTES, "UTF-8");
		$nazwisko=htmlentities($_POST['nazwisko'], ENT_QUOTES, "UTF-8");
		$email=htmlentities($_POST['email'], ENT_QUOTES, "UTF-8");
		$id_dnia=$_POST['id'];
		
		
		$bazaDanych = @new mysqli($host, $uzytkownik_bazy,$haslo_uzytkownika,$baza);
		mysqli_query($bazaDanych,"SET NAMES UTF8");
		
		if ($bazaDanych->connect_errno!=0)
			{
					echo "Error: ".$bazaDanych->connect_errno;
			}
			
		else
			{ 
					echo "Udalo sie polaczy z baza";
						$zapytanie="UPDATE zapisy SET imie='".$imie."',nazwisko='".$nazwisko."',email='".$email."' WHERE id_dnia='".$id_dnia."' ";
						
						if($bazaDanych->query($zapytanie) ){
							$sukcesy++;
						}
					
				
					echo ". Pomyślnie zaaplikowano ".$sukcesy." rekordów. ";
					

				$bazaDanych->close();	
			}
		
		
		
	}
	
?>

