const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

// Open sidebar
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
  });
}

// Close sidebar
if (closeSidebar) {
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
}

// Close sidebar automatically when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

// Highlight current page in sidebar
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000); // 5 seconds

  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    // Show after scrolling 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  };

  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };SSS


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#about .about-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Auto change every 4 seconds
    setInterval(nextSlide, 4000);
});



