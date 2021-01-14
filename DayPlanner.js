$(document).ready(function(){

    // Displays the current date in the webpage
    // The current date is taken from the user's date/time settings on their computer
    var currentDate = luxon.DateTime.local();
    $("#currentDay").text("Today's date is: " + currentDate.toLocaleString());

    // The following variable will get the current time based on the user's system
    var currentTime = currentDate.toLocaleString(luxon.DateTime.TIME_SIMPLE);
    console.log(currentTime);
    // The following variable will get the current hour based on the user's system
    var currentHour = currentDate.hour;
    console.log(currentHour);

    // Adds a new <div> element with the id of "timeBlocks" to the <div> with a class of "container"
    // This will be where all the individual timeblocks will be displayed
    var timeBlocks = "<div id = 'timeBlocks' class = 'time-block'></div>"
    $(".container").append(timeBlocks); 

    // Each number in the array coresponds to a particular timeslot
    // 7 = 7am - 8am, 13 = 1pm - 2pm, 18 = 6pm - 7pm etc.
    var blocks = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    // This loops creates a series of <div>s, each with an id coresponding to
    // one of the values in the "blocks" variable.
    // It then creates a textfield input & an input button and appends them to the aforementioned <div>s.
    for(var i = 0; i < blocks.length; i++){
        // var timeSlot = "<div class = 'timeSlot'></div>";
        // console.log(blocks[i]);
        // $(".timeSlot").attr("id", blocks[i]);
        // $("#timeBlocks").append(timeSlot);

        var timeSlot = "<div id = " + blocks[i] + " class = 'row hour'></div>";
        $("#timeBlocks").append(timeSlot);

        var textInput = "<input type = 'text' id = 'textInput' class = '" + blocks[i] + " col-md-11 col-sm-11' name = 'textInput'>";
        $("#" + blocks[i]).append(textInput);

        var saveBtn = "<input type = 'button' id = 'saveBtn' class = '" + blocks[i] + " saveBtn col-md-1 col-sm-1'>"
        $("#" + blocks[i]).append(saveBtn);
        
    }

    // The following loop compares the value of each index from "blocks" (which were previously assigned as classes to each timeslot)
    // with the currentHour
    // Depending on whether currentHour is greater than, lesser than or equal to the value of each index
    // the background colour of the element will change.
    // This allows the background colour for past, present and future timeslots to be different.
    for(var i = 0; i < blocks.length; i++){
        // console.log(blocks[i]);

        if(currentHour > blocks[i]){
            // console.log(blocks[i]);
            $("." + blocks[i]).addClass("past");
        } else if(currentHour < blocks[i]){
            // console.log(blocks[i]);
            $("." + blocks[i]).addClass("future");
        } else if(currentHour == blocks[i]){
            // console.log(blocks[i]);
            $("." + blocks[i]).addClass("present");
        } else{
            console.log("nope");
        }
    }
    
})