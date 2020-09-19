$(document).ready(function () {


    var dropDownThree = document.querySelector(".threeDay")
    var dropDownFive = document.querySelector(".fiveDay")
    var dropDownSeven= document.querySelector(".sevenDay")


        //  - read value from time property
        function readFromLocalStorage() {
        //(this is to look for anything saved previously in local storage)
        //assign as text back in element (using its class (.description) and id (specific to each hour)
        $(".dayOne  .description").val(localStorage.getItem("day1"));
        $(".dayTwo .description").val(localStorage.getItem("day2"));
        $(".dayThree .description").val(localStorage.getItem("day3"));
        $(".dayFour .description").val(localStorage.getItem("day4"));
        $(".dayFive .description").val(localStorage.getItem("day5"));
        $(".daySix .description").val(localStorage.getItem("day6"));
        $(".daySeven .description").val(localStorage.getItem("day7"));
        }
        
        
        //add dropdown menu visible/invisible by day count
        $(dropDownThree).on("click", function(){
        $(".dayOne") .addClass("visible").removeClass("invisible"),
        $(".dayTwo") .addClass("visible").removeClass("invisible"),
        $(".dayThree").addClass("visible").removeClass("invisible"),
        $(".dayFour").addClass("invisible") .removeClass("visible"),        
        $(".dayFive").addClass("invisible").removeClass("visible"),
        $(".daySix").addClass("invisible").removeClass("visible"),
        $(".daySeven").addClass("invisible").removeClass("visible") 
        })
        
        $(dropDownFive).on("click", function(){
            $(".dayOne") .addClass("visible").removeClass("invisible"),
            $(".dayTwo").addClass("visible").removeClass("invisible"),
            $(".dayThree").addClass("visible") .removeClass("invisible"),
            $(".dayFour").addClass("visible").removeClass("invisible"),
            $(".dayFive").addClass("visible").removeClass("invisible"),
            $(".daySix").addClass("invisible").removeClass("visible"),
            $(".daySeven").addClass("invisible").removeClass("visible")
        })
    
        $(dropDownSeven).on("click", function(){
            $(".dayOne").addClass("visible").removeClass("invisible"),
            $(".dayTwo").addClass("visible").removeClass("invisible"),
            $(".dayThree").addClass("visible").removeClass("invisible"),
            $(".dayFour").addClass("visible").removeClass("invisible"),
            $(".dayFive").addClass("visible").removeClass("invisible"),
            $(".daySix").addClass("visible").removeClass("invisible"),
            $(".daySeven") .addClass("visible").removeClass("invisible") 
        })
    

    
    // add click event to save button class to run function
    $(".saveBtn").click(function writeToLocalStorage() {
        //(this is to save a value from the text area to local storage
        var textIn = $(this).siblings(".description").val();
        var day = $(this).parent().attr("id");
        localStorage.setItem(day, textIn);
        alert("You're Iternarary has been Saved!")
    }); 

var confirmCancel;

    //add button to clear local storage and refresh the page
    $("#clear").click(function () {
        confirmCancel = confirm("Decided to Wing it? If so hit Ok to clear your Itenarary");
        if (confirmCancel) {
        alert("Act like a local!")
        localStorage.clear()
        location.reload()
        }
        else {
        alert("Your a travel Genius!")
        }
    });

    readFromLocalStorage();
});



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
