$(document).ready(function () {

    // vars
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
var currentHour = moment().hour();
// var saveBtn = document.querySelector(".saveBtn") ---> did not need ..doesnt work for multi lines 

// add current day and date with moments to #currentDay
var update = function () {
    document.querySelector("#currentDay").innerHTML = moment().format('LLLL');
}
setInterval(update, 1000);


    //  - read value from time property
    function readFromLocalStorage() {
        //(this is to look for anything saved previously in local storage)
        //assign as text back in element (using its class (.description) and id (specific to each hour)
        $("#hour9  .description").val(localStorage.getItem("hour9"));
        $("#hour10 .description").val(localStorage.getItem("hour10"));
        $("#hour11 .description").val(localStorage.getItem("hour11"));
        $("#hour12 .description").val(localStorage.getItem("hour12"));
        $("#hour13 .description").val(localStorage.getItem("hour13"));
        $("#hour14 .description").val(localStorage.getItem("hour14"));
        $("#hour15 .description").val(localStorage.getItem("hour15"));
        $("#hour16 .description").val(localStorage.getItem("hour16"));
        $("#hour17 .description").val(localStorage.getItem("hour17"));
        
        //use for loop
        for (i = 0; i < hours.length; i++) {
            // check current hour vs time slot (to determine color of text area)
            // assign proper class (.past .present .future) based on comparison to current hour (<,>, === or <=, >=, ===)
            if (hours[0] == currentHour){
                $("#hour9")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[0] < currentHour) {
                $("#hour9")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[0] > currentHour) {
                $("#hour9")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[1] == currentHour) {
                $("#hour10")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[1] < currentHour) {
                $("#hour10")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[1] > currentHour) {
                $("#hour10")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[2] == currentHour) {
                $("#hour11")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[2] < currentHour) {
                $("#hour11")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[2] > currentHour) {
                $("#hour11")
                    .addClass("future")
                    .removeClass("present past")
            };

            if (hours[3] == currentHour) {
                $("#hour12")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[3] < currentHour) {
                $("#hour12")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[3] > currentHour) {
                $("#hour12")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[4] == currentHour) {
                $("#hour13")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[4] < currentHour) {
                $("#hour13")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[4] > currentHour) {
                $("#hour13")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[5] == currentHour) {
                $("#hour14")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[5] < currentHour) {
                $("#hour14")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[5] > currentHour) {
                $("#hour14")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[6] == currentHour) {
                $("#hour15")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[6] < currentHour) {
                $("#hour15")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[6] > currentHour) {
                $("#hour15")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[7] == currentHour) {
                $("#hour16")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[7] < currentHour) {
                $("#hour16")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[7] > currentHour) {
                $("#hour16")
                    .addClass("future")
                    .removeClass("present past");
            };

            if (hours[8] == currentHour) {
                $("#hour17")
                    .addClass("present")
                    .removeClass("future past")
            }
            else if (hours[8] < currentHour) {
                $("#hour17")
                    .addClass("past")
                    .removeClass("future present")
            }
            else if (hours[8] > currentHour) {
                $("#hour17")
                    .addClass("future")
                    .removeClass("present past")
            }
            setInterval(update, 1000);
            console.log(hours[i], currentHour)
        };
    };
    
    // add click event to save button class to run function
    $(".saveBtn").click(function writeToLocalStorage() {
        //(this is to save a value from the text area to local storage, using the hour as the key when save button is clicked)
        var textIn = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textIn);
        alert("You're Appointment has been Saved!")
    }); 

var confirmCancel;

    //add button to clear local storage and refresh the page
    $("#clear").click(function () {
        confirmCancel = confirm("Taking the day? If so hit Ok to cancel all appointments");
        if (confirmCancel) {
        alert("Treat Yo Self!")
        localStorage.clear()
        location.reload()
        }
        else {
        alert("YOURE A HUSTLER BABY!")
        }
    });
    
    readFromLocalStorage();
});




