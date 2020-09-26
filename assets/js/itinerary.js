$(document).ready(function () {

    var dropDownThree = document.querySelector(".threeDay")
    var dropDownFive = document.querySelector(".fiveDay")
    var dropDownSeven= document.querySelector(".sevenDay")
    var feedbackEl = document.querySelector("#feedback");



    // add current day and date with moments to #currentDay jumbotron
    var update = function () {
    document.querySelector("#currentDay").innerHTML = moment().format('LLLL');
    }
    setInterval(update, 1000);



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
        $(feedbackEl).attr("class", "feedback")
        setTimeout(function() {
        feedbackEl.setAttribute("class", "feedback hide");
        }, 1000);
        feedbackEl.textContent = "Your Itinerary Has Been Saved!" ;    
    }); 

    //add button to clear local storage and refresh the page
    $("#confirmClear").click(function () {
        localStorage.clear()
        location.reload();
        
    });

    readFromLocalStorage();
});


