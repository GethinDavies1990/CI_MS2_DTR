// Adds the toggle effect to the Rules of the quiz container
$(function() {
    $("#quiz-rules-container h2").on("click", function() {
      $(".quiz-rules").slideToggle();
    });
  });

//   Jquery plugin to use a typing effect on the hero box text
  var typed = new Typed(".typing-effect", {
    strings: ["Hey There!<br>Welcome to LoveSports!", 
    "The No.1 place to keep up to date with everything<br>sport's related"],
    typeSpeed: 70,
    backSpeed: 70,
    loop: false,
});