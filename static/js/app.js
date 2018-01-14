$(document).ready(function () {
  // Accordion
  var button = $(".button");
  button.parent().nextAll("div").toggleClass("hidden");

  button.click(function () {
    var clickedButton = $(this);
    clickedButton.toggleClass("active");
    var args = clickedButton.parent().nextAll("div");
    args.slideToggle(300);
  });

  // API Check
  $.ajax({
    type: "GET",
    url: "https://api.guildwars2.com/v2/quaggans",
    success: function () {$("#apistatus").text("API is Online! ☑")},
    error: function () {$("#apistatus").text("Error reaching API ☒")}
  })
});
