// Utilizes moment.js to set what day it is
var todayIs = moment();

// function to have jQuery detect the state of readiness and will only run once the DOM is ready for JavaScript code to execute
$(document).ready(function(){
    // captures the current date and time and places it in the jumbotron
    $("#todayIs").text(todayIs.format("MMMM Do, YYYY"));

    // initilizes the save button to save anything captured inside
    $(".saveBtn").on("click", function(){
        var plannerText = $(this).siblings(".makeNum").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);
    }); 
    
    // assigns every time block a number and checks local storage to see if there's any text in the block
    $("#9 .makeNum").val(localStorage.getItem("9"));
    $("#10 .makeNum").val(localStorage.getItem("10"));
    $("#11 .makeNum").val(localStorage.getItem("11"));
    $("#12 .makeNum").val(localStorage.getItem("12"));
    $("#13 .makeNum").val(localStorage.getItem("13"));
    $("#14 .makeNum").val(localStorage.getItem("14"));
    $("#15 .makeNum").val(localStorage.getItem("15"));
    $("#16 .makeNum").val(localStorage.getItem("16"));
    $("#17 .makeNum").val(localStorage.getItem("17"));
    $("#18 .makeNum").val(localStorage.getItem("18"));

    // Checks the current hour and then assigns colors using CSS id of each time block if its in the past, present or future
    function timeChange(){
        var currentHour = moment().hour();
        
        $('.time-block').each(function(){
            var currentTime = parseInt($(this).attr("id"));
            if (currentTime < currentHour){
                $(this).addClass("past");
            } else if (currentTime === currentHour){
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {$(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
            }
        })
    }
    timeChange();
    var timeInterval = setInterval(timeChange, 1000);
});

