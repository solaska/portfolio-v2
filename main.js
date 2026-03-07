$(document).ready(function () {
  // TEST ALERT
  alert("JS Loaded");

  // Toggle About
  $("#aboutBtn").click(function (e) {
    e.preventDefault();
    $("#about").slideToggle();
  });

  // Toggle Projects
  $("#projectsBtn").click(function (e) {
    e.preventDefault();
    $("#projects").slideToggle();
  });

  // Toggle Contact
  $("#contactBtn").click(function (e) {
    e.preventDefault();
    $("#contact").slideToggle();
  });

  // Hero button
  $("#projectsLoadBtn").click(function (e) {
    e.preventDefault();
    $("#projects").slideToggle();
  });

  // Card interaction
  $(".card").click(function () {
    $(this).toggleClass("flipped");
  });

  // Hover button
  $("#showContact").hover(
    function () {
      $(this).text("Click to Email Me!");
    },
    function () {
      $(this).text("Show Contact");
    },
  );
});
