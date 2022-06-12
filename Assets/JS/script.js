$( function() {
    $( ".time-block" ).sortable({
      placeholder: "ui-state-highlight"
    });
    $( ".time-block" ).disableSelection();
  } );


  function disp_day(){
    $( "#currentDay" ).html(moment().format("[Today is ]dddd, [The] DD[th of] MMMM"));
}

disp_day();

