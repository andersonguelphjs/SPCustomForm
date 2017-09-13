$(document).ready(function() {

  $(this).on("mouseover", ".first", function() {

      $(this).css("color", "red");
    })
    .on("mouseout", ".first", function() {

      $(this).css("color", "black");
    });

  if (!window.FileReader) {
    alert('This browser does not support the FileReader API.');
  }

});
