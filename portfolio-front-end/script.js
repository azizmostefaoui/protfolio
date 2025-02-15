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
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Normal smooth scrolling, but not too long
  });
}









document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  const navbarLinks = document.querySelectorAll(".navbar a");
  const sections = document.querySelectorAll("section"); // جميع الأقسام

  // عند النقر على أي رابط، اجعله نشطًا
  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbarLinks.forEach((el) => el.classList.remove("active")); // إزالة `active` من الجميع
      this.classList.add("active"); // إضافة `active` للرابط الحالي

      // إغلاق القائمة بعد النقر (للهواتف)
      navbar.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });

  // تحديث `active` عند التمرير إلى القسم المناسب
  window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
      let sectionTop = section.offsetTop - 100; // تعديل ليكون أكثر دقة
      let sectionHeight = section.clientHeight;
      let sectionId = section.getAttribute("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navbarLinks.forEach((link) => link.classList.remove("active"));
        document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add("active");
      }
    });
  });
});








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
