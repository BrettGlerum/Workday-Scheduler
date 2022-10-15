var today = moment();
var timeBlockEl = document.querySelector('.container'); //global variables

$('#currentDay').text(today.format('LLLL')); //sets the format of the date

//adds event to save input after page refresh
$('.saveBtn').on('click', function () { 

  var textValue = $(this).siblings('.description').val();

  var timeKey = $(this).parent().attr('id');


  localStorage.setItem(timeKey, textValue);
});

//grabs the local storage of the hours
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


//function to determine what the current hour is
function auditTask() {
  
  var currentHour = today.hours();

  //parses the hours into numerical data
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

   //conditional statement to determine if hour is past, present, or future
    if (timeId < currentHour) {
      $(this).addClass('past');
    }
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    }
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

//function to refresh page every minute
auditTask();


setTimeout(function () {

  location = ''; 
}, 1000 * 60);
