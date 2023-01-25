function validate() {
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let msg = document.querySelector("#message");
    let btn = document.querySelector(".submit");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == "") {
        emptyerror();
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

  function emptyerror() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

//  function called if something is wrong, i.e the cdn for the emailjs library doesn't load

  function error() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
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
