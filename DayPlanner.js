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
    for(var i = 0; i < blocks.length; i++){
        // var timeSlot = "<div class = 'timeSlot'></div>";
        // console.log(blocks[i]);
        // $(".timeSlot").attr("id", blocks[i]);
        // $("#timeBlocks").append(timeSlot);

        // Here a series of <div>s are created, each with an id coresponding to one of the values in the "blocks" variable.
        // It then creates a textfield input & an input button and appends them to the aforementioned <div>s.
        var timeSlot = "<div id = timeSlot" + blocks[i] + " class = 'row hour'></div>";
        $("#timeBlocks").append(timeSlot);

        var time = "<p id = 'time" + blocks[i] + "'class = 'hour col-md-1 col-sm-1'>" + blocks[i] + "</p>"
        $("#timeSlot" + blocks[i]).append(time);

        var textInput = "<input type = 'text' id = 'textInput' class = 'col-md-10 col-sm-10 input" + blocks[i] + "' name = 'textInput'>";
        $("#timeSlot" + blocks[i]).append(textInput);

        var saveBtn = "<input type = 'button' id = 'save" + blocks[i] + "' class = 'saveBtn col-md-1 col-sm-1'>"
        $("#timeSlot" + blocks[i]).append(saveBtn);
  
        // The following will append either "AM" or "PM" to the end of the text within the first <p> child of any element.
        // What will be appended is decided by whether or not it's timeslot is less than or equal to 11 (for "AM") and greater than or equal to 12 (for "PM")
        if(blocks[i] <= 11){
            $("#time" + blocks[i]).append("AM");
        } else if(blocks[i] >= 12){
            $("#time" + blocks[i]).append("PM");
        }

        // The following compares the value of each index from "blocks" (which were previously assigned as classes to each timeslot)
        // with the currentHour. Depending on whether currentHour is greater than, lesser than or equal to the value of each index
        // the background colour of the element will change. This allows the background colour for past, present and future timeslots to be different.
        if(currentHour > blocks[i]){
            $(".input" + blocks[i]).addClass("past");
        } else if(currentHour < blocks[i]){
            $(".input" + blocks[i]).addClass("future");
        } else if(currentHour == blocks[i]){
            $(".input" + blocks[i]).addClass("present");
        }

        // The following saves the user's input into each of the timeslots and stores them in the user's local storage
        $("#save" + blocks[i]).on("click", function(event){
            event.preventDefault();
            for(var i = 0; i < blocks.length; i++){
                localStorage.setItem("inputFromSlot" + blocks[i], $(".input" + blocks[i]).val());
            }
        })

        
        // function getFromStorage(){
        //     for(var i = 0; i < blocks.length; i++){
        //         var itemsInStorage = localStorage.getItem("inputFromSlot" + blocks[i]);
        //         console.log(itemsInStorage);

        //         $(".input" + blocks[i]).append(JSON.stringify(itemsInStorage));
        //     }
        // }

    }
    // getFromStorage();


})



// TO DO:
// FIX IF/ELSE STATEMENT ON LINE 48                                        - FIXED
// STORE TEXT INPUT TO LOCAL MEMORY & ENSURE IT PERSISTS UPON RELOADING
// CLEAR LOCAL STORAGE AT THE BEGINNING OF A NEW DAY
// CLEAN UP THE PRESENTATION