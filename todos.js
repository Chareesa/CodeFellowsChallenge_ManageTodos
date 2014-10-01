$(document).ready(function() {

  window.onload = function() {
    document.getElementById("textInput").focus();
  };

  $('#inputForm').on("submit", function(y) {
    y.preventDefault();

    var item = $('#textInput').val();
    var date = $('#dateInput').val();

    if (item === '' || item === null) {
      alert("Please enter both an item to-do and a date");
      return false;
    }

    if (date === '' || date === null) {
      alert("Please enter both an item to-do and a date");
      return false;
    }

    $('#list').append("<tr id='newItem'><td>" + item + "</td>" + "<td>" + date + "</td></tr>");
    $('#textInput').val('');
    $('#dateInput').val('');
    $('#textInput').focus();

    $('tr:not(:first)').on("click", function() {
      $(this).remove();
    });
  });
})
