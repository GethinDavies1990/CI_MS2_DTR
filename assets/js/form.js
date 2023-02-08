/**
 * global swal
 * global emailjs
 * Gobal variables added in comments to top of documents, JShint was showing these as unsued variables.
 */

// function to send email in contact form.
(function () {
  emailjs.init("ga5PLTovBmNLpTpJO");
})();

/** This function checks to make sure the user has input a vlue in the fields.
 * The function also checks for email validation.
 * The validation code was taken from a youtube video by 'webdevsimplified'.
 * if validation and value is input the email will be sent,
 * the user will be presesnted with a feedback prompt of a succesful submission, using the sweetalert library.
 * */
function validate() {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let msg = document.querySelector("#message");
  let btn = document.querySelector(".submit");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyError();
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
      invalid();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}
validate();

// function used to send the email using emailjs
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
