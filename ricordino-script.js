var nome = document.getElementById('inserisci-nome');
nome.onchange = function(){

	if(nome.options[nome.selectedIndex].value == "si") {
    	document.querySelector('.nome').style.display = 'block';
	}else{
		document.querySelector('.nome').style.display = 'none';
	}

};

var cognome = document.getElementById('inserisci-cognome');

cognome.onchange = function(){

	if(cognome.options[cognome.selectedIndex].value == "si") {
    	document.querySelector('.cognome').style.display = 'block';
	}else{
		document.querySelector('.cognome').style.display = 'none';
	}

};

var nascita = document.getElementById('inserisci-nascita');

nascita.onchange = function(){

	if(nascita.options[nascita.selectedIndex].value == "si") {
    	document.querySelector('.nascita').style.display = 'block';
	}else{
		document.querySelector('.nascita').style.display = 'none';
	}

};

var morte = document.getElementById('inserisci-morte');

morte.onchange = function(){

	if(morte.options[morte.selectedIndex].value == "si") {
    	document.querySelector('.morte').style.display = 'block';
	}else{
		document.querySelector('.morte').style.display = 'none';
	}

};


var sceltaDedica = document.getElementById('dedica');

sceltaDedica.onchange = function(){

	if(sceltaDedica.options[sceltaDedica.selectedIndex].value == "Fornita dal cliente") {
    	document.querySelector('.dedica-personalizzata').style.display = 'block';
	}else{
		document.querySelector('.dedica-personalizzata').style.display = 'none';
	}

};

//document.querySelector('p.price').children[0].innerText="€2.00"

var qty = document.querySelector('input.input-text.qty.text');

qty.onchange = function(){
	v = document.querySelector('input.input-text.qty.text').value;
	v = parseInt(v);
	if(v > 10 && v <= 50 ){
		document.querySelector('p.price').children[0].innerText="€2.50";
	}
	else if(v > 50){
		document.querySelector('p.price').children[0].innerText="€2.00";
	}
	else{
		document.querySelector('p.price').children[0].innerText="€3.50";
	}
};