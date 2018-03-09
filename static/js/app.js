$(document).ready(function () {
  // Accordion
  var button = $("button");
  button.nextAll("div").toggleClass("hidden");

  button.click(function () {
    var clickedButton = $(this);
    clickedButton.toggleClass("active");
    var args = clickedButton.nextAll("div");
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
