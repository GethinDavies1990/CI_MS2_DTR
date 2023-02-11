// Adds the toggle effect to the Rules of the quiz container
$(function () {
  $("#quiz-rules-container h1").on("click", function () {
    $(".quiz-rules").slideToggle();
  });
});



