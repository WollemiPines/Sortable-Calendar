// Create Variables
var textEl = $(".formEl");
var timeColor = $(".time-color");
var timeBlockBtn= $(".time-block button");
var timeBlockColor=$(".time-block input");

// Dynamilly add classes
timeBlockBtn.addClass('saveBtn');
timeBlockColor.addClass('input-class');


var am9 = $("#am9");
var am10 = $("#am10");
var am11 = $("#am11");






// Display current weekday on top of screen
function disp_day(){
    $( "#currentDay" ).html(moment().format("[Today is ]dddd, [The] DD[th of] MMMM"));
}
disp_day();

function createFormEL(){

    $(".am9b .saveBtn").click(saveBtnAm9);
    $(".am10b .saveBtn").click(saveBtnAm10);

    function saveBtnAm9(){
      let am9val = am9.val();
      localStorage.setItem(am9, am9val);
    

    }
    am9val=am9.val(localStorage.am9)


      function saveBtnAm10(){
      let am10val = am10.val();
      localStorage.setItem(am10, am10val);

      }
      am10val=am10.val(localStorage.am10)


      console.log(localStorage.am10, localStorage.am9);





}

createFormEL()


let current_time;
var before = $("");
var current = $("");
var after= $("");

function calc_current_time(){
  current_time = moment().format("ha");
  current_time="11pm";


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

       before.addClass('past');
       current.addClass('present');
       after.addClass('future');
}

calc_current_time();

