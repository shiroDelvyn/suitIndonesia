$(document).ready(function() {
  $("body").hide();
  $("body").fadeIn(1000);

  $('body').keydown(function(e) {
    if(e.which == 27) {
      window.location.href = "../index.html";
    };
  });

  $("#rock").mouseover(function() {
    $("#rock").text("Rock");
  });
  $("#rock").mouseout(function() {
    $("#rock").text("");
  });
  $("#water").mouseover(function() {
    $("#water").text("water");
  });
  $("#water").mouseout(function() {
    $("#water").text("");
  });
  $("#glass").mouseover(function() {
    $("#glass").text("glass");
  });
  $("#glass").mouseout(function() {
    $("#glass").text("");
  });
});