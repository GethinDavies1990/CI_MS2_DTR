
function validate() {
        var name = document.querySelector("#name")
        var email = document.querySelector("#email")
        var message = document.querySelector("#message")
        var submit = document.querySelector("#submit")

        submit.addEventListener('click', (e) => {
            e.preventDefault()

            if (name.value == "" || email.value == "" || message.value == "") {
                inputEmpty();
            } else {
                sendMail(name.value, email.value, message.value)
                success();
                console.log('email sent')
                }
            })
        }
    
function sendMail(name, email, message) {
    emailjs.send("service_b38lf6p","template_a8llwvu",{
        from_name: name,
        email_id: email,
        message: message,
        });

}


// Sweet Alert functions

function success() {
    swal({
        title: "Got it!",
        text: "Thanks for your Message",
        icon: "success",
        button: "OK!",
      });
}

function error() {
    swal({
        title: "Hmm",
        text: "Something went wrong, message could not be sent!",
        icon: "error",
        button: "OK!",
      });
}

function inputEmpty() {
    swal({
        title: "oops...!",
        text: "Input fields are required",
        icon: "error",
        button: "OK!",
      });
}


