<?php
		
		//DO PRZEBUDOWY ZEBY ZLICZALO ILE RAZY JUZ SIE DANA OSOBA ZAPISALA
		
	session_start();
	require_once "daneDoPolaczenia.php";
	if(isset($_GET['nazwisko']) AND isset($_GET['imie'])){
		
		$bazaDanych = @new mysqli($host, $uzytkownik_bazy,$haslo_uzytkownika,$baza);
		mysqli_query($bazaDanych,"SET NAMES UTF8");
		
		if ($bazaDanych->connect_errno!=0)
			{
					echo "Error: ".$bazaDanych->connect_errno;
			}
			
		else
			{ 
				
				$zapytanieNaz="SELECT * FROM zapisy WHERE nazwisko='".$_GET['nazwisko']."' ";
				$zapytanieImieNAz="SELECT * FROM zapisy WHERE nazwisko='".$_GET['nazwisko']."' AND imie='".$_GET['imie']."' ";
				
				if($ileZNazwiska= $bazaDanych->query($zapytanieNaz) AND $ileZNazImienia= $bazaDanych->query($zapytanieNaz) ){
					if( $_GET['nazwisko']=="Jurek") echo"Dziękuję za ... Tomek? Znowu Ty? Ech... Znaczy, nie zrozum mnie źle, to w sumie fajnie, że się modlisz tyle.";
					else{
						//echo "nazwisko=".$ileZNazwiska->num_rows." imie i nazwisko=".$ileZNazImienia->num_rows;
					}
					
				}
				
				
				$bazaDanych->close();
			}
		
		
	}
	
?>
