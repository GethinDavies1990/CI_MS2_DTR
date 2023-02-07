/* global swal */
/* global emailjs */

(function () {
  emailjs.init("ga5PLTovBmNLpTpJO");
})();

function validate() {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let msg = document.querySelector("#message");
    let btn = document.querySelector(".submit");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == "") {
        emptyError();
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        invalid()
      } else {
        sendmail(name.value, email.value, msg.value);
        success();
      }
    });
  }
  validate();

  function sendmail(name, email, msg) {
    emailjs.send("service_b38lf6p", "template_a8llwvu", {
      name: name,
      email: email,
      message: msg,
    });
  }

// Sweet Alert library used to display feedback on form submission

// Function called if fields are empty and a submit is attempted

  function emptyError() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

//   function called if the submit button is successful 

  function success() {
    swal({
      icon: "success",
      title: "Success...",
      text: "Successfully sent message",
    });
  }

  //   function called if an invalid email address is used 

  function invalid() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Invalid Email Address",
    });
  }
