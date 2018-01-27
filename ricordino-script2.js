var p1 = document.querySelectorAll('p.price')[0];
//html da modificare per il prezzo in alto
var html = '<span>+ iva</span>';
p1.children[0].insertAdjacentHTML('afterend', html);

document.getElementById('prezzoSotto').style.display = 'block';
//document.querySelectorAll('p.price')[0].children[0].innerText="€58.50";
var p2 = document.querySelectorAll('p.price')[1];
p2.children[0].innerText="€26.7";

//html da modificare per il prezzo in basso
var html2 = '<span class="inclusaiva"> iva esclusa</span>';
p2.children[0].insertAdjacentHTML('afterend', html2);


var qty = document.querySelector('input.input-text.qty.text');

qty.onchange = function(){
	v = document.querySelector('input.input-text.qty.text').value;
	v = parseInt(v);
	//iva = (((0.89*v)*22)/100);
	document.querySelectorAll('p.price')[1].children[0].innerText="€"+Number(((0.89*v)).toFixed(2));

};

