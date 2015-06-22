$(document).ready(function() {
  $("#insert-li").on('click', function(event) {
    $.ajax('/derp-link')
      .then(function(data) {
        $("#list").append(data);
      })
      .fail(function() {
        console.log("Leggo my eggo");
      });
  });

  $("ul").on('click', function(event) {
    event.preventDefault();
    console.log("event bubbling saved the day");
  });
});
