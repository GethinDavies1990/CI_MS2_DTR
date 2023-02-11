// Adds the toggle effect to the Rules of the quiz container
$(function () {
  $("#quiz-rules-container h1").on("click", function () {
    $(".quiz-rules").slideToggle();
  });
});

/* global Typed */
// Typing effect in homepage
var typeEffect = {};

    $(document).ready(function() {
      typeEffect.typed = new Typed(".typing-effect", {
        strings: [
          "Welcome to LoveSports!",
          "The No.1 place to keep up to date with everything<br>sport's related",
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: false,
      });
    });

