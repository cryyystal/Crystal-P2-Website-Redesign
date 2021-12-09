var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); // change slideshow photo change time here
}




// calendar help from https://www.jqueryscript.net/time-clock/powerful-calendar.html
$(function(){
  $('.calendar-container').calendar();
});

$('.calendar-container').calendar({
  date: new Date() // today
});

$('.calendar-container').calendar({
  weekDayLength: 2
});

$('.calendar-container').calendar({
  date: new Date(),
  disable: function (date) { 
    return date < new Date(); 
  }
});

$('.calendar-container').calendar({
  onClickDate: function (date) {
    // do something
  }
});

$('.calendar-container').calendar({

  // text for prev/next buttons
  prevButton: "Prev",
  nextButton: "Next",

  // custom separator between the month and the year in the month view.
  monthYearSeparator: " ",

  // false = 4 months in a row
  showThreeMonthsInARow: true,

  // whether to change either month or year
  enableMonthChange: true,

  // whether to disable year view
  enableYearView: true,

  // shows a Today button on the bottom of the calendar
  showTodayButton: true,
  todayButtonContent: "Today",

  // highlights all other dates with the same week-day
  highlightSelectedWeekday: true,

  // highlights the selected week that contains the selected date
  highlightSelectedWeek: true,

  // whether to enable/disable the year selector
  showYearDropdown: false,

  // min/max dates
  // Date Object or Date String
  min: null,
  max: null,

  // start on Sunday instead
  startOnMonday: false,
});

$('.calendar-container').calendar({

  onChangeMonth: function (date) {},
  onClickToday: function (date) {},
  onClickMonthNext: function (date) {},
  onClickMonthPrev: function (date) {},
  onClickYearNext: function (date) {},
  onClickYearPrev: function (date) {},
  onShowYearView: function (date) {},
  onSelectYear: function (date) {},
  
});

var calendar = $('.calendar-container').calendar();
console.log(calendar.getSelectedDate());






