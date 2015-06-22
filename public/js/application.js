$(document).ready(function() {
  $("#insert-li").on('click', function(event) {
    $("#list").append("<li><a class='derp-link' href='http://iluvisis.com'>derp-element</a></li>");
  });

  $("ul").on('click', function(event) {
    event.preventDefault();
    console.log("event bubbling saved the day");
  });
});
