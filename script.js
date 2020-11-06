

// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

function sendEmail() { 
    var email = $("#email");
    var remail = email.val();
    console.log(remail);
    var Subject = $("#subject").val();
    console.log(Subject);
    Email.send({
            Host: "smtp.gmail.com",
            Username: remail,
            Password: "anything",
            To: "raihanakter26@gmail.com",
            From: remail,
            Subject: Subject,
            Body: $("#message").val(),            
        }).then(
            $("#mailStatus").innerHTML = "Email Sent successfully" 
        )
}
