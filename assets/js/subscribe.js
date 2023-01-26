// Subsribe email function, if a user inputs their email address into the subscribe-box they will get added to our contact list

function validate() {
    let subscribeEmail = document.getElementById("subscribe-email");
    let subscribeSubmit = document.getElementById("subscribe-submit");

    subscribeSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (subscribeEmail.value == "") {
        subEmptyerror();
      } else {
        sendmail(subscribeEmail.value);
        subSuccess();
      }
    });
  }
  validate();

  function sendmail(email) {
    emailjs.send("service_qknmyza", "template_yfl3t0n", {
      "subscribe-email": email,
    });
  }

// Sweet Alert library used to display feedback on form submission

// Function called if fields are empty and a submit is attempted

  function subEmptyerror() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Fields cannot be empty!",
    });
  }

//  function called if something is wrong, i.e the cdn for the emailjs library doesn't load

  function subError() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }

//   function called if the submit button is successful 

  function subSuccess() {
    swal({
      icon: "success",
      title: "Success...",
      text: "You have subscribed!",
    });
  }