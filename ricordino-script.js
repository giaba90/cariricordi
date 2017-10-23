document.querySelectorAll('p.price')[0].children[0].innerText="€35";
document.querySelectorAll('p.price')[1].children[0].innerText="€35";

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

	if(sceltaDedica.options[sceltaDedica.selectedIndex].value == "Voglio che scegliate voi una dedica e a proposito vi fornisco i seguenti suggerimenti"){
		document.querySelector('.dedica-personalizzata').style.display = 'none';
		document.querySelector('.suggerimenti-dedica').style.display = 'block';
	}else if(sceltaDedica.options[sceltaDedica.selectedIndex].value == "Fornisco io la dedica da inserire") {
    	document.querySelector('.dedica-personalizzata').style.display = 'block';
    	document.querySelector('.suggerimenti-dedica').style.display = 'none';
	}
	else{
		document.querySelector('.dedica-personalizzata').style.display = 'none';
    	document.querySelector('.suggerimenti-dedica').style.display = 'none';
	}

};

var sceltaSfondo = document.getElementById('sfondo');

sceltaSfondo.onchange = function(){

	if(sceltaSfondo.options[sceltaSfondo.selectedIndex].value == "Inserisco dei suggerimenti per la scelta degli sfondi"){
		document.querySelector('input.wcj_product_input_fields').style.display = 'none';
		document.querySelector('label[for="wcj_product_input_fields_local_1"]').style.display = 'none';
		document.querySelector('.upsfondo').style.display = 'none';
		document.querySelector('.suggerimento-sfondo').style.display = 'block';
	}else if(sceltaSfondo.options[sceltaSfondo.selectedIndex].value == "Carico un file immagine che vorrei che venissero utilizzati come sfondo") {
    	document.querySelector('.upsfondo').style.display = 'block';
    	document.querySelector('input.wcj_product_input_fields').style.display = 'block';
    	document.querySelector('label[for="wcj_product_input_fields_local_1"]').style.display = 'block';
    	document.querySelector('.suggerimento-sfondo').style.display = 'none';
	}
	else{
		document.querySelector('.upsfondo').style.display = 'none';
		document.querySelector('input.wcj_product_input_fields').style.display  = 'none';
		document.querySelector('label[for="wcj_product_input_fields_local_1"]').style.display = 'none';
    	document.querySelector('.suggerimento-sfondo').style.display = 'none';
	}

};

//document.querySelector('p.price').children[0].innerText="€2.00"

var qty = document.querySelector('input.input-text.qty.text');

qty.onchange = function(){
	v = document.querySelector('input.input-text.qty.text').value;
	v = parseInt(v);
	if(v > 10 && v <= 50 ){
		q = v - 10;
		document.querySelectorAll('p.price')[0].children[0].innerText="€"+((2.50*q)+35);
		document.querySelectorAll('p.price')[1].children[0].innerText="€"+((2.50*q)+35);
	}
	else if(v > 50){
		q = v - 50;
		document.querySelectorAll('p.price')[0].children[0].innerText="€"+((2.00*q)+135);
		document.querySelectorAll('p.price')[1].children[0].innerText="€"+((2.00*q)+135);
	}
	else{
		document.querySelectorAll('p.price')[0].children[0].innerText="€"+3.50*v;
		document.querySelectorAll('p.price')[1].children[0].innerText="€"+3.50*v;
	}
};

