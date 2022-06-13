var dataE =  $('*[data-e]');
var dataESpec = $('[data-e="selector"');



// Display current weekday on top of screen
function disp_day(){
    $( "#currentDay" ).html(moment().format("[Today is ]dddd, [The] DD[th of] MMMM"));
}
disp_day();


let current_time;

var before = $("ul li.ui-state-default:lt(0)");
var current = $("ul li.ui-state-default:nth-child(1)");
var after = $("ul li.ui-state-default:gt(0)");


function calc_current_time(){
  current_time = moment().format("ha");

   if(current_time=="9am"){
   current.addClass('present');
   after.addClass('future');
   }
   if(current_time=="10am"){
     before = $("ul li.ui-state-default:lt(1)");
    current = $("ul li.ui-state-default:nth-child(2)");
     after = $("ul li.ui-state-default:gt(1)");
     before.addClass('past');
    current.addClass('present');
    after.addClass('future');
    }
    if(current_time=="11am"){
        before = $("ul li.ui-state-default:lt(2)");
       current = $("ul li.ui-state-default:nth-child(3)");
        after = $("ul li.ui-state-default:gt(2)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
       if(current_time=="12pm"){
        before = $("ul li.ui-state-default:lt(3)");
       current = $("ul li.ui-state-default:nth-child(4)");
        after = $("ul li.ui-state-default:gt(3)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
       if(current_time=="1pm"){
        before = $("ul li.ui-state-default:lt(4)");
       current = $("ul li.ui-state-default:nth-child(5)");
        after = $("ul li.ui-state-default:gt(4)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
       if(current_time=="2pm"){
        before = $("ul li.ui-state-default:lt(5)");
       current = $("ul li.ui-state-default:nth-child(6)");
        after = $("ul li.ui-state-default:gt(5)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
       if(current_time=="3pm"){
        before = $("ul li.ui-state-default:lt(6)");
       current = $("ul li.ui-state-default:nth-child(7)");
        after = $("ul li.ui-state-default:gt(6)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
       if(current_time=="4pm"){
        before = $("ul li.ui-state-default:lt(7)");
       current = $("ul li.ui-state-default:nth-child(8)");
        after = $("ul li.ui-state-default:gt(7)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
       if(current_time=="5pm"){
        before = $("ul li.ui-state-default:lt(8)");
       current = $("ul li.ui-state-default:nth-child(9)");
        after = $("ul li.ui-state-default:gt(8)");
        before.addClass('past');
       current.addClass('present');
       after.addClass('future');
       }
}

calc_current_time();


console.log(current_time);

// Sortable Function for middle ellements
$( function() {
    $( ".time-block" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( ".time-block" ).disableSelection();
  } );