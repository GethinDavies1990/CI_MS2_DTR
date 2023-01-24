
function SendMail() {
    var params = {
        from_name: document.getElementById('fullName').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_b38lf6p", "template_a8llwvu", params).then(function(res) {
        alert("Success!" + res.status);
    })
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


