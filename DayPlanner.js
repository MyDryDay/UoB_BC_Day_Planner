$(document).ready(function(){

    // Displays the current date in the webpage
    // The current date is taken from the user's date/time settings on their computer
    var currentDate = luxon.DateTime.local();
    $("#currentDay").text("Today's date is: " + currentDate.toLocaleString());

    // Adds a new <div> element with the id of "timeBlocks" to the <div> with a class of "container"
    // This will be where all the individual timeblocks will be displayed
    var timeBlocks = "<div id = 'timeBlocks'></div>"
    $(".container").append(timeBlocks); 

    // Each number in the array coresponds to a particular timeslot
    // 7 = 7am - 8am, 13 = 1pm - 2pm, 18 = 6pm - 7pm etc.
    // var timeSlots = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    // for(i = 0; i < timeSlots.length; i++){
    //     var timeSlot = "<div><div>";
    //     $(timeSlot).attr("id", timeSlots[i]);
    //     $("#timeBlocks").append(timeSlot);
    // }
})