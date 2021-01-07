$(document).ready(function() {
  $(".total-jerk").hide();
 // normalHour();
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var what = $(this).siblings(".description").val();
    var when = $(this).parent().attr("id");

    // save in localStorage time and action- then when and the what
    localStorage.setItem(when, what);
 
  });

  onLoadhour();
    //check if your a jerk
    $("#success-btn").on("click", function() {
      $(".total-jerk").hide();
      $(".workday").show();
      $(".jerkChicken").css("background","url('https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2017-10/success.jpg?itok=I-jXswy5')")
  normalHour();
    // set up interval to check if current time needs to be updated
    var interval = setInterval(normalHour, 15000);
  })
  
  $("#total-jerk-btn").on("click", function() {
    $(".total-jerk").show();
    $(".workday").hide();
    $(".jerkChicken").css("background","url('https://hips.hearstapps.com/del.h-cdn.co/assets/17/28/1499895297-jerk-chicken-delish.jpg?crop=1.00xw:0.750xh;0,0.252xh&resize=640:*')")
    // set up interval to check if current time needs to be updated
    var interval = setInterval(jerkTime, 15000);
   
    jerkTime();
  })
    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // display current day on page
    $(".currentDay").text(moment().format("dddd, MMMM Do"));
});

function normalHour() {
    // get current number of hours
 
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("jerkPast")
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("jerkPresent");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("jerkFuture");
        $(this).addClass("future");
      }
    });
}

function onLoadhour() {
  // get current number of hours

  var currentHour = moment().hours();

  // loop over time blocks
  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("jerkPast")
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("jerkPresent");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).removeClass("jerkFuture");
      $(this).addClass("future");
    }
  });
}
//if jerk button is clicked run function
function jerkTime() {
 
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("jerkPast");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("jerkPast");
        $(this).addClass("jerkPresent");
      } 
      else {
        $(this).removeClass("jerkPast");
        $(this).removeClass("jerkPresent");
        $(this).removeClass("future")
        $(this).addClass("jerkFuture");
      }
    })
   
  }






