var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

//this for send mail


function SendMail() {
  var submitButton = document.querySelector(".send");
  submitButton.disabled = true; // تعطيل الزر مؤقتًا

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  }

  emailjs.send("service_r7e631e", "template_ggp6etc", params)
    .then(function(res) {
      alert("تم الإرسال بنجاح! الحالة: " + res.status);
      document.getElementById("contactForm").reset();
      submitButton.disabled = false; // تفعيل الزر مرة أخرى
    })
    .catch(function(error) {
      console.error("خطأ في الإرسال: ", error);
      alert("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقًا.");
      submitButton.disabled = false; // تفعيل الزر مرة أخرى
    });
}




//this for button top

// جلب الزر
const topButton = document.querySelector('.top');
// إظهار الزر عند التمرير للأسفل
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) { // عند التمرير لأسفل 100 بكسل
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }
});
// دالة الصعود لأعلى ببطء
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Normal smooth scrolling, but not too long
  });
}








//this for navbar
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navbarLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section");

  if (!menuToggle || !navbar) {
    console.error("❌ menu-toggle أو navbar غير موجود في HTML!");
    return; // إيقاف الكود إذا لم يتم العثور على العنصر
  }

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      let sectionTop = section.offsetTop - 100;
      let sectionHeight = section.clientHeight;
      let sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navbarLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  });
});








//this for progress 

document.addEventListener("DOMContentLoaded", function () {
  const radialBars = document.querySelectorAll(".radial-bars");

  radialBars.forEach((bar) => {
    let percentage = parseInt(bar.querySelector(".percentage").textContent);
    let circle = bar.querySelector(".path");
    let totalLength = circle.getTotalLength(); // اجعل الحساب ديناميكيًا

    let offset = totalLength - (percentage / 100) * totalLength;

    circle.style.strokeDasharray = totalLength;
    circle.style.strokeDashoffset = offset;
  });
});
