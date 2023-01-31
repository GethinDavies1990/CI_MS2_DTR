// Adds the toggle effect to the Rules of the quiz container
$(function() {
    $("#quiz-rules-container h2").on("click", function() {
      $(".quiz-rules").slideToggle();
    });
  });

  var typed = new Typed(".typing-effect", {
    strings: ["Hey There, Welcome to LoveSports", 
    "The No.1 place to keep up to date with everything sport related"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});