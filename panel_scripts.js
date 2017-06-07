
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
		
				
		function ToOtwarcie(){
			
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("ErrorLog").innerHTML = this.responseText;
							}
						};
					
					xmlhttp.open("GET","otwarcieNowegoMiesiaca.php?newM="+mies+"&year="+rok,true);
					xmlhttp.send();
				
				
				
		
		}
		
		function ustawienieAktualnegoMiesiaca(){
				window.location.href="index.php?m="+mies;
		}
	
	
		/*
	function zapisanie(var data){
				
				if(data=="")	{
				document.getElementById("Error").innerHTML= " NAstąpił niespodziewany błąd.";
				return;
				}	
			else		{
					
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp2 = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp2.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("Error").innerHTML = this.responseText;
							}
						};
					
					xmlhttp2.open("GET","panel_ZmienZW_wczytajDane.php?ParafiaDoZnalezienia="+parafia,true); //do zmiany
					xmlhttp2.send();
			}
				
		
	}*/
	