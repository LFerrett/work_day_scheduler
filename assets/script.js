// Utilizes moment.js to set what day it is
var todayIs = moment();

// 
$(document).ready(function(){
    $("#todayIs").text(todayIs.format("MMMM Do, YYYY"));
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

