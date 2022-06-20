// Create Variables
var timeColor = $(".time-color");
var timeBlockBtn= $(".time-block button");
var timeBlockColor=$(".time-block input");

// Dynamicaly add classes
timeBlockBtn.addClass('saveBtn');
timeBlockColor.addClass('input-class');


// Add varable names to input values
var am9 = $("#am9")
var am10 = $("#am10");
var am11 = $("#am11");
var pm12 = $("#pm12")
var pm1 = $("#pm1");
var pm2 = $("#pm2");
var pm3 = $("#pm3")
var pm4 = $("#pm4");
var pm5 = $("#pm5");


// Display current weekday on top of screen
function disp_day(){
    $( "#currentDay" ).html(moment().format("[Today is ]dddd, [The] DD[th of] MMMM"));
}
disp_day();


// Function to update background colors on input elements as var current time changes
let current_time;
var before = $("");
var current = $("");
var after= $("");

function current_time_colors(){
  // get current time
  current_time = moment().format("ha");

// apply conditions current time must meet, and update the value of before, current and after variables
  if(current_time>="12am" && current_time<="8am"){
    after = $("li.time-color");
   }
   if(current_time=="9am"){
    before = $("li.time-color:lt(0)");
    current = $("li.time-color:nth-child(1)");
    after = $("li.time-color:gt(0)");
   }
   if(current_time=="10am"){
     before = $("li.time-color:lt(1)");
    current = $("li.time-color:nth-child(2)");
     after = $("li.time-color:gt(1)");
    }
    if(current_time=="11am"){
        before = $("li.time-color:lt(2)");
       current = $("li.time-color:nth-child(3)");
        after = $("li.time-color:gt(2)");
       }
       if(current_time=="12pm"){
        before = $("li.time-color:lt(3)");
       current = $("li.time-color:nth-child(4)");
        after = $("li.time-color:gt(3)");
       }
       if(current_time=="1pm"){
        before = $("li.time-color:lt(4)");
       current = $("li.time-color:nth-child(5)");
        after = $("li.time-color:gt(4)");
       }
       if(current_time=="2pm"){
        before = $("li.time-color:lt(5)");
       current = $("li.time-color:nth-child(6)");
        after = $("li.time-color:gt(5)");
       }
       if(current_time=="3pm"){
        before = $("li.time-color:lt(6)");
       current = $("li.time-color:nth-child(7)");
        after = $("li.time-color:gt(6)");
       }
       if(current_time=="4pm"){
        before = $("li.time-color:lt(7)");
       current = $("li.time-color:nth-child(8)");
        after = $("li.time-color:gt(7)");
       }
       if(current_time=="5pm"){
        before = $("li.time-color:lt(8)");
       current = $("li.time-color:nth-child(9)");
        after = $("li.time-color:gt(8)");
       }
       if(current_time=="6pm" || current_time=="7pm" || current_time=="8pm" 
       || current_time=="9pm" || current_time=="10pm" || current_time=="11pm"){
        before = $("li.time-color");
       }

      //  add CSS classes to the before, current and after variables
       before.addClass('past');
       current.addClass('present');
       after.addClass('future');
}
current_time_colors();

// Save form ellements to local storage
function saveForm(){

  $(".saveBtn").click(saveBtn);
// On save bttn click, set local storage items
  function saveBtn(){
    localStorage.setItem("am9", am9.val());
    localStorage.setItem("am10", am10.val());
    localStorage.setItem("am11", am11.val());
    localStorage.setItem("pm12", pm12.val());
    localStorage.setItem("pm1", pm1.val());
    localStorage.setItem("pm2", pm2.val());
    localStorage.setItem("pm3", pm3.val());
    localStorage.setItem("pm4", pm4.val());
    localStorage.setItem("pm5", pm5.val());
  }
}
saveForm()

// after saveForm is run, retreive items
var am9val = localStorage.getItem("am9");
var am10val = localStorage.getItem("am10");
var am11val = localStorage.getItem("am11");
var pm12val = localStorage.getItem("pm12");
var pm1val = localStorage.getItem("pm1");
var pm2val = localStorage.getItem("pm2");
var pm3val = localStorage.getItem("pm3");
var pm4val = localStorage.getItem("pm4");
var pm5val = localStorage.getItem("pm5");

// and set them as the new values
$("#am9").val(localStorage.getItem("am9"));
$("#am10").val(localStorage.getItem("am10"));
$("#am11").val(localStorage.getItem("am11"));
$("#pm12").val(localStorage.getItem("pm12"));
$("#pm1").val(localStorage.getItem("pm1"));
$("#pm2").val(localStorage.getItem("pm2"));
$("#pm3").val(localStorage.getItem("pm3"));
$("#pm4").val(localStorage.getItem("pm4"));
$("#pm5").val(localStorage.getItem("pm5"));