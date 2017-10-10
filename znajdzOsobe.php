<?php
		
		//DO PRZEBUDOWY ZEBY ZLICZALO ILE RAZY JUZ SIE DANA OSOBA ZAPISALA
		
	session_start();
	require_once "daneDoPolaczenia.php";
	if(isset($_GET['nazwisko']) AND isset($_GET['imie']) AND $_GET['nazwisko']!=""){
		
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
					
					$czyMamSpecjalnyTekst=false;
					
					if($_GET['nazwisko']=="Jurek" AND  ($_GET['imie']=="Tomek" OR $_GET['imie']=="Tomasz") ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Dziękuję za ... Tomek? Znowu Ty? Ech... Znaczy, nie zrozum mnie źle, to w sumie fajnie, że się modlisz tyle.<br>";
						}
					if($_GET['nazwisko']=="Ziarkiewicz" AND $_GET['imie']=="Patrycja"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Hej Patrycja :D Dobrze, że jesteś ;)";
						}
					if($_GET['nazwisko']=="Kasprzak" AND $_GET['imie']=="Wiktoria"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"<p class='greenText' >Hej Wiki, cieszę się, że jesteś ;)</p>";
						}
					if($_GET['nazwisko']=="Ruszniak" AND $_GET['imie']=="ks. Przemek"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Szczęść Boże, ta strona to był wspaniały pomysł ;) Z Bogiem ! ";
						}
					if($_GET['nazwisko']=="Grabarczuk" AND $_GET['imie']=="Mieczysław"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Dobrze, że się modlisz, ale pamiętaj że mama ma dla Ciebie jeszcze sporo zadań do zrobienia w domu ;) ";
						}
					if($_GET['nazwisko']=="Zlot" AND $_GET['imie']=="Kinga"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Pamiętaj, że gra na skrzypcach też może być modlitwą ;) ";
						}
					if($_GET['nazwisko']=="Zlot" AND $_GET['imie']=="Sylwia"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Modlitwa może więcej niż dziesięć nieprzespanych nocy nad książkami ;) ";
						}
					if($_GET['nazwisko']=="Ostańska" AND $_GET['imie']=="Agnieszka"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Zawierz problemy Bogu, to sama nie będziesz musiała się o nie martwić ;) ";
						}
					if($_GET['nazwisko']=="Samborski" AND $_GET['imie']=="Patryk"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"CSSy Ci zrobię... Mówiłeś... To nic trudnego... Mówiłeś... ";
						}
					if($_GET['nazwisko']=="Grabarczuk" AND $_GET['imie']=="Paweł"  ){ 
						$czyMamSpecjalnyTekst=true;
						echo"Zająłbyś się tymi mailami, a nie tak się lenisz... Znaczy w sumie się nie lenię, ale cóż.";
						}
						
						
						
					if($czyMamSpecjalnyTekst==false){
						$liczbaN=$ileZNazwiska->num_rows;
						$liczbaNI=$ileZNazImienia->num_rows;
						if($liczbaN==$liczbaNI AND $liczbaN>2){
							$liczbaN++;
							echo "To już ".$liczbaN.". raz kiedy podejmujesz się modlitwy za nasz Ruch. Dziękujemy !!! ";
						}
						else if($liczbaNI>2 ) echo "To już ".$liczbaN.". raz kiedy podejmujesz się modlitwy za nasz Ruch. Dziękujemy !!! ";
					}
					
				}
				
				
				$bazaDanych->close();
			}
		
		
	}
	
?>
