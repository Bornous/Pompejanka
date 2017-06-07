
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
	
	var poczatekTygodnia;
	var koniecTygodnia;
	
	var dayTemp;
	
	
	
	
//Ustalenie ilości dni w miesiącu
		if(mies==2)
		else{	
			if(mies==1 || mies==3 || mies==5 || mies==7 || mies==8 || mies==10 || mies==12){
					
					}
			if(mies==4 || mies==6 || mies==9 || mies==11)
		}
		
	var liczba_dni_w_miesiacu=31;

	
	//Petla obliczajaca nr tygodnia i jego poczatek
	var i;
	for(i=0;dzien_temp<dzien && mies_temp<=mies && rok_temp<=rok;){
		
		if(rok_temp==rok)m=1;
		if(first_mies==mies)d=1;
		
		
		
		i++;
		
		first_sunday++;
		if(d==1) dzien_temp=first_sunday;
		
		
		if(i+temp==7 ){
	
			tydzien++;
			i=0;
			temp=0;
			
			if(tydzien>53 || (tydzien>=51 && 31-first_sunday<=3)){
				tydzien=1;
				
			} 
			
			butIsThereAnyProblem=0;
		}
		
		if(first_sunday==liczba_dni_w_miesiacu){
			
			aDaysProblemSolution=first_sunday-i;
			andThemies=first_mies;
			andAYear=rok_temp;
			butIsThereAnyProblem=1;
			
			first_mies++;
			if(m==1)mies_temp=first_mies;
			first_sunday=0;	
			temp=i;
			i=0;
			if(liczba_dni_w_miesiacu==31 && first_mies!=8)liczba_dni_w_miesiacu=30;
			else liczba_dni_w_miesiacu=31;
			if(first_mies==2 && rok_temp%4==0 && rok_temp%100!=0)liczba_dni_w_miesiacu=29;
            else if(first_mies==2){
                    liczba_dni_w_miesiacu=28;
                    if(rok_temp%400==0)liczba_dni_w_miesiacu++;
            }

            if(first_mies==13){
                rok_temp++;
                first_mies=1;
				liczba_dni_w_miesiacu=31;
            }
		}
		
		
	}
	

//Sprawdzanie sytuacji specjalnych - przelom roku/miesiaca
	if(butIsThereAnyProblem==1){
		var second_sunday=aDaysProblemSolution;
		var second_mies=andThemies;
		var second_year=andAYear;
		rok=andAYear;
	}
	else{
		var second_sunday=first_sunday-i;
		var second_mies=mies;
		var second_year=rok;
		
	}
	
	if(second_mies==1 || second_mies==3 || second_mies==5 || second_mies==7 || second_mies==8 || second_mies==10 || second_mies==12)liczba_dni_w_miesiacu=31;
	if(second_mies==4 || second_mies==6 || second_mies==9 || second_mies==11) liczba_dni_w_miesiacu=30;
	if(second_mies==2 && second_year%4==0 && second_year%100!=0) liczba_dni_w_miesiacu=29;
            else if(second_mies==2){
                    liczba_dni_w_miesiacu=28;
                    if(second_year%400==0) liczba_dni_w_miesiacu++;
            }
	
	
	//Petla obliczajaca koniec tygodnia 
	
	var j=1;
	for(j=1;j<7;j++){
		
		if(second_sunday==liczba_dni_w_miesiacu){
			
			second_mies++;
			second_sunday=0;	

			if(liczba_dni_w_miesiacu==31 && second_mies!=8)liczba_dni_w_miesiacu=30;
			else liczba_dni_w_miesiacu=31;
			
			if(second_mies==2 && second_year%4==0 && second_year%100!=0)liczba_dni_w_miesiacu=29;
            else if(second_mies==2){
                    liczba_dni_w_miesiacu=28;
                    if(second_year%400==0) liczba_dni_w_miesiacu++;
            }

            if(second_mies==13){
				second_sunday=0;
                second_year++;
                second_mies=1;
				liczba_dni_w_miesiacu=31;
            }
		}
		
		
		second_sunday++;
		
		
		
	}
	
	

	
	

		
		// Handle Loaded Imports
	function handleLoad(event) {
	console.log('Loaded import: ' + event.target.href);
		//document.write('udalosie');
	}
		 
		// Handle Errors.
	function handleError(event) {
	console.log('Error loading import: ' + event.target.href);
		//document.write('nie udal osie ' + event.target.href);
	}

	
	//Wypisywanie danych o tygodniu
	var mies_s="";
	var d_s="";
	var d_ss="";
	var mies_ss="";
	
	
	
	function daty(){
		
		if(butIsThereAnyProblem==1){
			dzien=aDaysProblemSolution;
			mies=andThemies;
		}
		else{
			dzien=first_sunday-i;			
		}
		
		
		
		if(dzien<10)		d_s="0"+dzien;
		else  						d_s=dzien;
		
		
		
		
		if (second_sunday<10)	d_ss="0"+second_sunday;
		else  									d_ss=""+second_sunday;
		
		if(mies<10)			mies_s="0"+mies;
		else 						mies_s=mies;
		
		if(second_mies<10)			mies_ss="0"+second_mies;
		else 										mies_ss=second_mies;
		
		if(tydzien<10) 		tydzien="0"+tydzien;
		
		rr=rok-2000;
		second_rr=second_year-2000;
		
		poczatekTygodnia=d_s+"."+mies_s+"."+rr;
		koniecTygodnia=d_ss+"."+mies_ss+"."+second_rr;
		
		
		
		//document.getElementById("miesiac1").innerHTML =miesiac;
		//document.getElementById("tydz").innerHTML =tydzien+" ("+d_s+"."+mies_s+"."+rok+" - "+d_ss+"."+mies_ss+"."+second_year+")";
		//document.getElementById("begining").innerHTML =d_s+"."+mies_s+"."+rr;
		//document.getElementById("ending").innerHTML =d_ss+"."+mies_ss+"."+second_rr;
		
		//zapisanie daty w sesji w php
		
		zapis = new XMLHttpRequest();
		 zapis.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("miesiac1").innerHTML = this.responseText;
			document.getElementById("tydz").innerHTML = tydzien+" ("+d_s+"."+mies_s+"."+rr+" - "+d_ss+"."+mies_ss+"."+second_rr+")";
        }
    };
		zapis.open("GET","panel_ustalenie_dat.php?pocz="+poczatekTygodnia+"&koni="+koniecTygodnia+"&tt="+tydzien+"&rr="+rr+"&miesiac="+miesiac,true);
		zapis.send();
		
	}
	

	
	
	/*function do_dat(){
		
		var adres= 'panel_HomePage.php?pocz='+poczatekTygodnia+'&koni='+koniecTygodnia;
		window.location.href = adres;
		
	}*/
	
	
	//DRUKOWANIE

		
			//pojedycza parafia
			
			function PrintPar(elem)
		{
			
		   Popup($(elem).html());
		}

		function Popup(data) 
		{
		   var mywindow = window.open("", "to_print", "height=500,width=600");
		   var html = "<html><head>"+
		   "<style>body{background-color: white;font-size: 24px;color: black;max-width:900px;} .dottedline{height: 7px;padding: 2px;margin-bottom: 5px;border-bottom: 2px dotted #444444;} #resultt{max-width:610px;margin-left:auto;margin-right:auto;margin-top:20px;} .kol1{padding-left: 20px;min-width: 130px;max-width: 130px;max-hight: 60px;min-hight: 60px;border:2px black solid;float:left;	background-color: white;} .kol2{padding-left:20px;max-width: 400px;min-width: 400px;max-hight: 60px;border:2px black solid;float:left;background-color: white;}.kol3{clear:both;}</style></head>"+
		   "<body onload=window.focus(); window.print(); window.close()><div id='resultt'><br/>"+
		   data+
		   "</div><div class='dottedline'></div></body></html>";

		   mywindow.document.write(html);
		   mywindow.print();
		   mywindow.document.close();
		   return true;			
		}
		
		//caly dziekanat
		
			function PrintAllPar(elemAll)
		{
			
		   PopupAll($(elemAll).html());
		}

		function PopupAll(dataAll) 
		{
		   var mywindow = window.open("", "to_print", "height=950,width=700");
		   var html = "<html><head>"+
		   "<style>body{background-color: white;font-size: 20px;color: black;max-width:900px;} .dottedline{height: 7px;padding: 2px;margin-bottom: 5px;border-bottom: 2px dotted #444444;} #Wwyniki{max-width:610px;margin-left:auto;margin-right:auto;}.tab{width: 610px;padding:5px;border: 3px solid black;text-align: left;color: black;}.mtab{width: 400px;}.mtab2{width: 170px;float:left;}.mtab3{width: 200px;float:left;}.nonePrint{display:none;} a{color:black;text-decoration:none;}</style></head>"+
		   "<body onload=window.focus(); window.print(); window.close()><div id='resultt'>"+
		   dataAll
		   "</div><div class='dottedline'></div></body></html>";

		   mywindow.document.write(html);
		   mywindow.print();
		   mywindow.document.close();
		   return true;			
		}
		
	// Funkcje - linki
	
		function stronaGlowna() 					{ window.location.href = "panel_HomePage.php";}
		var gazeta="";
		function zmianaZW(gazeta)	{ 
			if(gazeta=="MAŁY GOŚĆ NIEDZIELNY")document.getElementById("doPoprawy").innerHTML= "<br>Wprowadź poprawną ilość zwrotów:<br><form action='panel_ZmienZW_send.php' method='get'><input class='noneNet' type='number_format' name='gnd' value='bez_zmian'/><input class='noneNet' type='number_format' name='ndz' value='bez_zmian'/><input type='number_format' name='mgn' value='0'/><br><input type='submit' value='ZMIEŃ'  class='option txtopt'  /></form>";
			if(gazeta=="GOŚĆ NIEDZIELNY")document.getElementById("doPoprawy").innerHTML= "<br>Wprowadź poprawną ilość zwrotów:<br><form action='panel_ZmienZW_send.php' method='get'><input class='noneNet' type='number_format' name='mgn' value='bez_zmian'/><input class='noneNet' type='number_format' name='ndz' value='bez_zmian'/><input type='number_format' name='gnd' value='0'/><br><input type='submit' value='ZMIEŃ'  class='option txtopt'  /></form>";
			if(gazeta=="NIEDZIELA")document.getElementById("doPoprawy").innerHTML= "<br>Wprowadź poprawną ilość zwrotów:<br><form action='panel_ZmienZW_send.php' method='get'><input class='noneNet' type='number_format' name='gnd' value='bez_zmian'/><input class='noneNet' type='number_format' name='mgn' value='bez_zmian'/><input type='number_format' name='ndz' value='0'/><br><input type='submit' value='ZMIEŃ'  class='option txtopt'  /></form>";
			//if(!gazeta)document.getElementById("doPoprawy").innerHTML="Błąd - brak wymaganych danych. Odśwież stronę (klawisz F5)"
		}
		//var idUSR;
		function USRdelete(idUSR){window.location.href="panel_ZmienUSR_delete.php?idUSR="+idUSR;}
		
		function dodajParafie()		{window.location.href="panel_Dodaj.php";}
		
		function wyszukaj()			{window.location.href="panel_Znajdz.php";}
		
		function doDruczek(adres) 	{window.location.href=adres;}
		
		function zmienZW()			{window.location.href="panel_zmienZW.php";}
		
		function deletePar()			{window.location.href="panel_zmienDEL.php";}
		
		function zmianaParafii()		{window.location.href="panel_zmienNAZ.php";}
		
		function zmianaUser()		{window.location.href="panel_zmienUSR.php";}
		
		function zmianaNAK()		{window.location.href="panel_zmienNAK.php";}
		
		
		var tt=tydzien;
		var rrr=rok-2000;
		
		function zakoncz()			{
			window.location.href="panel_zakoncz.php?tt="+tt+"&rrr="+rrr+"&baza=bazamgn";
			}

			
		function znajdzParafie(dekanatDoZnalezienia){
			if(dekanatDoZnalezienia=="")	{
				document.getElementById("spis2").innerHTML= "";
				return;
				}	
			else		{
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("spis2").innerHTML = this.responseText;
							}
						};
					
					xmlhttp.open("GET","panel_ZmienZW_znajdzParafie.php?dekanatDoZnalezienia="+dekanatDoZnalezienia,true);
					xmlhttp.send();
				
				
				}
		
		}
		
		function znajdzParafieDEL(dekanatDoZnalezienia){
			if(dekanatDoZnalezienia=="")	{
				document.getElementById("spis2").innerHTML= "";
				return;
				}	
			else		{
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("spis2").innerHTML = this.responseText;
							}
						};
					
					xmlhttp.open("GET","panel_ZmienDEL_znajdzParafie.php?dekanatDoZnalezienia="+dekanatDoZnalezienia,true);
					xmlhttp.send();
				
				
				}
		
		}
		
		function znajdzParafieNAZ(dekanatDoZnalezienia){
			if(dekanatDoZnalezienia=="")	{
				document.getElementById("spis2").innerHTML= "";
				return;
				}	
			else		{
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("spis2").innerHTML = this.responseText;
							}
						};
					
					xmlhttp.open("GET","panel_ZmienNAZ_znajdzParafie.php?dekanatDoZnalezienia="+dekanatDoZnalezienia,true);
					xmlhttp.send();
				
				
				}
		
		}
		
		function znajdzZW(parafia){
					
				if(parafia==" ")	{
				document.getElementById("DaneParafi").innerHTML= " Wybrano puste pole, prosze wybrac konkretna parafie.";
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
									document.getElementById("DaneParafi").innerHTML = this.responseText;
							}
						};
					
					xmlhttp2.open("GET","panel_ZmienZW_wczytajDane.php?ParafiaDoZnalezienia="+parafia,true);
					xmlhttp2.send();
			}
				
				
		
		}
		
		function znajdzNAZ(parafia){
					
				if(parafia==" ")	{
				document.getElementById("DaneParafi").innerHTML= " Wybrano puste pole, prosze wybrac konkretna parafie.";
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
									document.getElementById("DaneParafi").innerHTML = this.responseText;
							}
						};
					
					xmlhttp2.open("GET","panel_ZmienNAZ_wczytajDane.php",true);
					xmlhttp2.send();
			}
				
				
		
		}
		
		
		
		
		
		function wygaszenie(){
			
			document.getElementById("feedback").innerHTML= " ";
			
			
		}
		
		function zmienDaneUSR(idUSR){
			
			if(idUSR=="")	{
				document.getElementById("AllUsers").innerHTML= " Nie wybrano żadnego użytkownika.";
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
					//xmlhttp2.contentType="charset=UTF-8";
					xmlhttp2.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("AllUsers").innerHTML = this.responseText;
							}
						};
					
					xmlhttp2.open("GET","panel_ZmienUSR_wczytajDane.php?id="+idUSR,true);
					xmlhttp2.send();
			}
				
			
		}
		
		function dodajUSR(){
			
			
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp2 = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
					}
					//xmlhttp2.contentType="charset=UTF-8";
					xmlhttp2.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("AllUsers").innerHTML = this.responseText;
							}
						};
					
					xmlhttp2.open("GET","panel_ZmienUSR_formADD.php",true);
					xmlhttp2.send();
			}
				
	function znajdzParafieNAK(dekanatDoZnalezienia){
			if(dekanatDoZnalezienia=="")	{
				document.getElementById("spis2").innerHTML= "";
				return;
				}	
			else		{
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xmlhttp = new XMLHttpRequest();
					} else {
						// code for IE6, IE5
						xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					xmlhttp.onreadystatechange = function ()	{
							if(this.readyState == 4 && this.status ==200)	{
									document.getElementById("spis2").innerHTML = this.responseText;
							}
						};
					
					xmlhttp.open("GET","panel_ZmienNAK_znajdzParafie.php?dekanatDoZnalezienia="+dekanatDoZnalezienia,true);
					xmlhttp.send();
				
				
				}
		
		}
		
function znajdzNAK(parafia){
					
				if(parafia==" ")	{
				document.getElementById("DaneParafi").innerHTML= " Wybrano puste pole, prosze wybrac konkretna parafie.";
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
									document.getElementById("DaneParafi").innerHTML = this.responseText;
							}
						};
					
					xmlhttp2.open("GET","panel_ZmienNAK_wczytajDane.php?ParafiaDoZnalezienia="+parafia,true);
					xmlhttp2.send();
			}
				
				
		
		}
		
		