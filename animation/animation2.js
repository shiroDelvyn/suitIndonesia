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
  $("#paper").mouseover(function() {
    $("#paper").text("paper");
  });
  $("#paper").mouseout(function() {
    $("#paper").text("");
  });
  $("#scissors").mouseover(function() {
    $("#scissors").text("Scissors");
  });
  $("#scissors").mouseout(function() {
    $("#scissors").text("");
  });
});