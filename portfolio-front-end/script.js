var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});



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
    const scrollDuration = 1000; // المدة الكلية للتمرير بالمللي ثانية (1 ثانية)
    const scrollStep = -window.scrollY / (scrollDuration / 1); // قيمة الخطوة لكل إطار

    const scrollInterval = setInterval(function() {
        if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval); // إيقاف التمرير عند الوصول للأعلى
        }
    }, 1); // تعيين فترة التمرير
}







// JavaScript to toggle the mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navbarLinks = document.querySelectorAll('.navbar a');

// Toggle navbar visibility when menu icon is clicked
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close the menu when a navbar link is clicked
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  function updateActiveLink() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
});
