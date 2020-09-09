$(document).ready(function () {

// prints current date and time to user
var current = moment().format('MMMM Do YYYY, h:mm:ss a');;
$("#currentDay").text("Today is the " + current);




// dynamically print sections for timeblocks
for(var i = 0 ; i <10 ; i++){
    var row = $('<div>').addClass('row');
    var time = $('<div>').addClass('hour col-md-2').text(moment('9:00am', 'hh:mm A').add(i, 'hours').format('hA'));
    time.attr('data-time', moment('9:00am', 'hh:mm a').add(i, 'hours').format('hA'));

    
    // data input section
    var textData = $('<textarea>').addClass('col-md-9');
    
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('save');

    $('.container').append(row);

    //time of day section (far left)
    $(row).append(time);

    //user text space (middle)
    $(time).after(textData);

    //save button (far right)
    $(textData).after(saveButton);
}


// Retrieves data saved from local storage upon loading
$(document).ready(function(){
        
    hours = $('.hour').toArray();
    for (var i = 0 ; i < hours.length ; i++) {
    
        
    $(hours[i]).siblings('textarea').text(localStorage.getItem($(hours[i]).attr('data-time')));
    }
    })

// Function to save data after save button is pressed
$(".saveBtn").on("click" , function(){localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())})


})







