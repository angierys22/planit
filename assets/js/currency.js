var from_currencyEl = document.querySelector('#from_currency');
var from_ammountEl = document.querySelector('#from_ammount');
var to_currencyEl = document.querySelector('#to_currency');
var to_ammountEl = document.querySelector('#to_ammount');
var rateEl = document.querySelector('#rate');
var exchange = document.querySelector('#exchange');

from_currencyEl.addEventListener('change', calculate);
from_ammountEl.addEventListener('input', calculate);
to_currencyEl.addEventListener('change', calculate);
to_ammountEl.addEventListener('input', calculate);

exchange.addEventListener('click', () => {
	var temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {
	var from_currency = from_currencyEl.value;
	var to_currency = to_currencyEl.value;
	
	// $.ajax({
	// 	url: 'https://api.exchangerate-api.com/v4/latest/'+from_currency+"&appid=ff1a0ed2a5120e8d14f12d01",
	// 	method: "GET",

	// })
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		var rate = res.rates[to_currency];
		rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	})
}

calculate();
