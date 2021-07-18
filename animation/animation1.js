$(document).ready(function() {
  $("#content2").click(function() {
    $("body").fadeOut(1000, function() {
      window.location.href = "./type/water.html";
    });
  });

  $("#content1").click(function() {
    $("body").fadeOut(1000, function() {
      window.location.href = "./type/paper.html";
    });
  });
});