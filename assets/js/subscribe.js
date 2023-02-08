/**
 * global swal
 * global emailjs
 * Gobal variables added in comments to top of documents, JShint was showing these as unsued variables.
 */

// function to send email in contact form.
(function () {
  emailjs.init("ga5PLTovBmNLpTpJO");
})();

// Subsribe email function, if a user inputs their email address into the subscribe-box they will get added to our contact list
function validate() {
    let subscribeEmail = document.getElementById("subscribe-email");
    let subscribeSubmit = document.getElementById("subscribe-submit");

    subscribeSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      if (subscribeEmail.value == "") {
        subEmptyerror();
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(subscribeEmail.value)) {
        subInvalid()
      } else {
        sendmail(subscribeEmail.value);
        subSuccess();
      }
    });
  }
  validate();

  // function used to send the email using emailjs
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

//   function called if the submit button is successful 
  function subSuccess() {
    swal({
      icon: "success",
      title: "Success...",
      text: "You have subscribed!",
    });
  }

   //   function called if an invalid email address is used 
   function subInvalid() {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Invalid Email Address",
    });
  }