$(document).ready(function() {
  $(".total-jerk").hide();
  normalHour();
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var what = $(this).siblings(".description").val();
    var when = $(this).parent().attr("id");

    // save in localStorage time and action- then when and the what
    localStorage.setItem(when, what);
 
  });
    //check if your a jerk
 



//listen for jerkday button
//  var clickJerk = $(".total-jerk-btn").on("click");
//  var clickSuccess = $(".success-btn").on("click");

//     $("workday").hide();
//     $("total-jerk").show();
// })

$("#success-btn").on("click", function() {
    $(".total-jerk").hide();
    $(".workday").show();
normalHour();
})

$("#total-jerk-btn").on("click", function() {
  $(".total-jerk").show();
  $(".workday").hide();
jerkTime();
})

// if (hasBeenClicked) {
//   // The link has been clicked.
// } else {
//   // The link has not been clicked.
// }
//if statement to check if true then run function or no button is clicked
// function jerkCheck(){
//   if(clickJerk('.total-jerk-btn').data('clicked')){
//     jerkTime();
//     $("workday").hide();
//     $("total-jerk").show();
// }
// else if (clickSuccess(".success-btn").data('clicked')){
//     normalHour();
//     $("total-jerk").hide();
//     $("workday").show();
// }
// else {
//     normalHour();
//     $("total-jerk").hide();
//     $("workday").show();
// }

// jerkCheck();
// }

jerkCheck();
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


//if jerk button is clicked run function
function jerkTime() {
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


  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);

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
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
