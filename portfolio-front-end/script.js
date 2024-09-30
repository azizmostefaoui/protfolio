var typed = new Typed(".text", {
  strings: ["Frontend Developer", "small content creator", "Web Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});



function SendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }

  emailjs.send("service_r7e631e", "template_ggp6etc",params).then(function(res){alert("Success! " +res.status);})
}