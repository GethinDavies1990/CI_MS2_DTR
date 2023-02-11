/* global Typed */

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
