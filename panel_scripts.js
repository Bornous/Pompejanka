
	var dzisiaj= new Date();	
	var dzien = dzisiaj.getDate();
	var dzien_tyg = dzisiaj.getDay();
	var mies = dzisiaj.getMonth();
	var rok = dzisiaj.getFullYear();

	var dni = new Array("Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela");
	var miesiace= new Array("styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień");
	var miesiac = miesiace[mies];
	var dzien_tygodnia=dni[dzien_tyg];
	mies++;

	var dayTemp;
	
	
	
	
//Ustalenie ilości dni w miesiącu
		var liczba_dni_w_miesiacu;

		if(mies==2){
			if(rok%4==0)	liczba_dni_w_miesiacu=29;
			else liczba_dni_w_miesiacu=28;
			if(rok%100==0) liczba_dni_w_miesiacu--;
			if(rok%400==0) liczba_dni_w_miesiacu++;
		}
		else{	
			if(mies==1 || mies==3 || mies==5 || mies==7 || mies==8 || mies==10 || mies==12) liczba_dni_w_miesiacu=31;
			if(mies==4 || mies==6 || mies==9 || mies==11) liczba_dni_w_miesiacu=30;
		}
		
	
	//Wygenerowanie listy tabeli
	function pokazTabelke(){
		var zeroDay= "";
		var zeroMonth="";
		if (mies<10)zeroMonth="0";
		
		var tabelka=' <div class="wiersz naglowek"> <div class="data" > Data </div><div class="imie"> Imię i nazwisko </div><div class="czesc">Część błagalna lub dziękczynna </div> <div class="endfloat"></div> </div>';
		
		for(var i=1;i<=liczba_dni_w_miesiacu;i++){
			if (i<10)zeroDay="0";
			else zeroDay="";
		
			
			if(i<=30){
				if(i%3==0)tabelka= tabelka+ '<div class="wiersz blue"> <div class="data" >'+zeroDay+i+'-'+zeroMonth+mies+'-'+rok+ '</div><div class="imie">Jan Kowalski </div><div class="czesc">błagalna </div> <div class="endfloat"></div> </div> ';
				else {
					
					if(i%13==0)tabelka= tabelka+ '<div class="wiersz blue"> <div class="data" >'+zeroDay+i+'-'+zeroMonth+mies+'-'+rok+ '</div><div class="imie">Marek Kowalski </div><div class="czesc">błagalna </div> <div class="endfloat"></div> </div> ';
					else tabelka= tabelka+ '<div class="wiersz green"> <div class="data" >'+zeroDay+i+'-'+zeroMonth+mies+'-'+rok+ '</div><div class="imie">Wolne </div><div class="czesc">błagalna </div> <div class="endfloat"></div> </div> '
				}
				
			}
			
		}
		document.getElementById("main").innerHTML=tabelka;
	}
		
		function linkToOtwarcie(){
			window.location.href="otwarcieNowegoMiesiaca.php";
			
			
		}
		
		function goHome(){
			window.location.href="index.php?m="+mies+"&d="+dzien+"&y="+rok;
			
			
		}
		
				
		function ToOtwarcie(){
			
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					/*xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("ErrorLog").innerHTML = this.responseText;
							}
						};*/
					
					xmlhttp.open("GET","otwarcieNowegoMiesiaca.php?newM="+mies+"&year="+rok,true);
					xmlhttp.send();
				
				
				
		
		}
		
		function ToOtwarcie2(){
			
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					/*xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("ErrorLog").innerHTML = this.responseText;
							}
						};*/
					var kolejnyMies=mies+1;
					xmlhttp.open("GET","otwarcieNowegoMiesiaca.php?newM="+kolejnyMies+"&year="+rok,true);
					xmlhttp.send();
				
				
				
		
		}
		
		function ustawienieAktualnegoMiesiaca(){
				window.location.href="index.php?m="+mies+"&d="+dzien+"&y="+rok;
		}
		
		function ustawienieAktualnegoMiesiacaAdmin(){
				window.location.href="admin.php?m="+mies+"&d="+dzien+"&y="+rok;
		}
		
		function dajForm(id,daySign,monthSign,yearSign){
			var formularz='<div id="podziekowanie" class="center"></div><div class="formularz" >	<form action="zapisDoBazy.php" method="post" ><input class="hide" name="dataDay" type="number" value="'+daySign+'"/><input class="hide" name="dataMonth" type="number" value="'+monthSign+'"/><input class="hide" name="year" type="number" value="'+yearSign+'"/><input class="hide" name="id" type="number" value="'+id+'"/><div id="firstPerson"></div><div id="onlyPerson"><div  class="nazwaPola FormFontsize">Imię:</div ><div  class="zawartosc"> <input  type="text" id="imieOsoby" name="imie" onchange="testNaDlugoscImienia(this.value)"/></div ><div id="errorImie" class="center"></div><div class="nazwaPola FormFontsize">Nazwisko:</div ><div  class="zawartosc"> <input type="text" name="nazwisko"   onchange="podziekowanie(this.value), testNaDlugoscNazwiska(this.value)"/></div ><div id="errorNazwisko" class="center"></div></div><div id="secondPerson"></div><div class="endfloat"></div><div  class="nazwaPola FormFontsize">Email:</div ><div  class="zawartosc"> <input type="text" name="email"  /></div >Zaznacz, jeśli będziesz odmawiać z drugą osobą: <input name="isTwoPerson" type="checkbox" onchange="daj2Form()"/><br/><input class="przycisk FormFontsize" type="submit" value="ZAPISZ MNIE" /> <br/><br/> <div class="przycisk FormFontsize przyciskGoHome" onclick="goHome()">Wróć do głównej strony</div> </form>	</div>';
			
			var zeroDay="";
			//var zeroMonth="";
			
			if(daySign<10)	zeroDay="0";
			//if(monthSign<10)	zeroMonth="0";
			
			var ktoryDzien='<div class="center">Zapisujesz się na :<div class="dataPrzyZapisie"> '+zeroDay+daySign+'-'+monthSign+'-'+yearSign+' </div>Wpisz proszę swoje dane. <br/>Adres email bedzie wykorzystany tylko przy wysłaniu przypomnienia w dniu, na który się zapisujesz.</div>';
			
			document.getElementById("main").innerHTML=formularz;
			document.getElementById("topmenu").innerHTML=ktoryDzien;
		}
		var isNotClickedSecondPreson=true;
		
		function daj2Form()
		{
				
			if(isNotClickedSecondPreson){
				var formularz='<div  class="nazwaPola FormFontsize">Imię:</div ><div  class="zawartosc"> <input  type="text" id="imie2Osoby" name="imie2" onchange="testNaDlugoscImienia2(this.value)"/></div ><div id="errorImie2" class="center"></div><div class="nazwaPola FormFontsize">Nazwisko:</div ><div  class="zawartosc"> <input type="text" name="nazwisko2"   onchange="podziekowanie(this.value), testNaDlugoscNazwiska2(this.value)"/></div ><div id="errorNazwisko2" class="center"></div><div  class="nazwaPola FormFontsize">';
				var formFirstPerson='<div  class="nazwaPola FormFontsize">Imię:</div ><div  class="zawartosc"> <input  type="text" id="imieOsoby" name="imie1" onchange="testNaDlugoscImienia(this.value)"/></div ><div id="errorImie" class="center"></div><div class="nazwaPola FormFontsize">Nazwisko:</div ><div  class="zawartosc"> <input type="text" name="nazwisko1"   onchange="podziekowanie(this.value), testNaDlugoscNazwiska(this.value)"/></div ><div id="errorNazwisko" class="center"></div>';
				document.getElementById("secondPerson").innerHTML=formularz;
				document.getElementById("onlyPerson").innerHTML="";
				document.getElementById("firstPerson").innerHTML=formFirstPerson;
				isNotClickedSecondPreson=false;
			}
			else {
				var formFirstPerson='<div  class="nazwaPola FormFontsize">Imię:</div ><div  class="zawartosc"> <input  type="text" id="imieOsoby" name="imie" onchange="testNaDlugoscImienia(this.value)"/></div ><div id="errorImie" class="center"></div><div class="nazwaPola FormFontsize">Nazwisko:</div ><div  class="zawartosc"> <input type="text" name="nazwisko"   onchange="podziekowanie(this.value), testNaDlugoscNazwiska(this.value)"/></div ><div id="errorNazwisko" class="center"></div>';
				document.getElementById("secondPerson").innerHTML="";
				document.getElementById("onlyPerson").innerHTML=formFirstPerson;
				document.getElementById("firstPerson").innerHTML="";
				isNotClickedSecondPreson=true;
			}
			
		}		
		
		
		var counter=0;
		function countF(){
				if(counter>3){
					counter=0;
					window.location.href="logowanie.php";
				
				}
				else counter++;
		}
	
		
		
	function podziekowanie(nazwisko){
		var imie=document.getElementById("imieOsoby").value;
		if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp2 = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp2.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("podziekowanie").innerHTML=this.responseText;
							}
						};
					
					xmlhttp2.open("GET","znajdzOsobe.php?nazwisko="+nazwisko+"&imie="+imie,true); //do zmiany
					xmlhttp2.send();
	}
	
	function testNaDlugoscImienia(tekstDoSprawdzenia){
		//document.getElementById("podziekowanie").innerHTML=document.getElementById("errorImie").innerHTML;
		if(tekstDoSprawdzenia.length>16)	document.getElementById("errorImie").innerHTML="<p class='red'>Wpisane imie musi mieć mniej niż 16 znaków.<br>Ilość wpisanych znaków: "+tekstDoSprawdzenia.length+"</p> ";
		else document.getElementById("errorImie").innerHTML="";
		
	}
	
	function testNaDlugoscNazwiska(tekstDoSprawdzenia){
		//document.getElementById("podziekowanie").innerHTML=tekstDoSprawdzenia;
		if(tekstDoSprawdzenia.length>20)document.getElementById("errorNazwisko").innerHTML="<p class='red'>Wpisane nazwisko musi mieć mniej niż 20 znaków.<br>Ilość wpisanych znaków: "+tekstDoSprawdzenia.length+"</p> ";
		else document.getElementById("errorNazwisko").innerHTML="";
	}
	
	function testNaDlugoscImienia2(tekstDoSprawdzenia){
		//document.getElementById("podziekowanie").innerHTML=document.getElementById("errorImie").innerHTML;
		if(tekstDoSprawdzenia.length>16)	document.getElementById("errorImie2").innerHTML="<p class='red'>Wpisane imie musi mieć mniej niż 16 znaków.<br>Ilość wpisanych znaków: "+tekstDoSprawdzenia.length+"</p> ";
		else document.getElementById("errorImie2").innerHTML="";
		
	}
	
	function testNaDlugoscNazwiska2(tekstDoSprawdzenia){
		//document.getElementById("podziekowanie").innerHTML=tekstDoSprawdzenia;
		if(tekstDoSprawdzenia.length>20)document.getElementById("errorNazwisko2").innerHTML="<p class='red'>Wpisane nazwisko musi mieć mniej niż 20 znaków.<br>Ilość wpisanych znaków: "+tekstDoSprawdzenia.length+"</p> ";
		else document.getElementById("errorNazwisko2").innerHTML="";
	}



	/*
		
	function zapisane(var day){
				
								
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp2 = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp2.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									window.location.href="index.php";
							}
						};
					
					xmlhttp2.open("GET","zapis.php?ParafiaDoZnalezienia="+parafia,true); //do zmiany
					xmlhttp2.send();
			
				
		
	}
	*/