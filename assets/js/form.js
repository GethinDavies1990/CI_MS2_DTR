
function SendMail() {
    var params = {
        from_name: document.getElementById('fullName').ariaValueMax,
        email_id : document.getElementById('email_id'),
        message : document.getElementById('message').value
    }
    emailjs.send("service_b38lf6p", "template_a8llwvu", params).then(function(res) {
        alert("Success!" + res.status);
    })
}