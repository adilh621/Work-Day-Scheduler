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

    // save button
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('save');

    $('.container').append(row);

    // time block in row
    $(row).append(time);

    // then data input section
    $(time).after(textData);

    // then save button to submit to local storage 
    $(textData).after(saveButton);

}


    var currentTime = parseInt(moment().format('h:mm:ss a'));
    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
    
    hourArr = $('.hour').toArray();
    console.log(hourArr);
    for (var i of hourArr) {
    $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));

    
    }
    console.log(localStorage.getItem($(hourArr[i]).attr('data-time')));





})



