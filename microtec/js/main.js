// Dropdown
const aboutItem = document.querySelector('.has-dropdown');
aboutItem.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.classList.toggle('show-dropdown');
});
document.addEventListener('click', function (e) {
  if (!aboutItem.contains(e.target)) {
    aboutItem.classList.remove('show-dropdown');
  }
});

// Mobile menu
const MobileMenu = document.querySelector(".mobile-menu");
const MainNavbar = document.querySelector(".main-navbar");
MobileMenu.addEventListener("click", () => {
  MobileMenu.classList.toggle("active");
  MainNavbar.classList.toggle("active");
});

// Search toggle
const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});


// slider 

const slides = document.querySelectorAll(".slider-content");
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

setInterval(nextSlide, 2000); // autoplay every 2 seconds


// Scroll to bottom on click
const scrollBtn = document.getElementById("scrollToBottom");

    window.addEventListener("scroll", () => {
      // Hide button if scrolled more than 100px
      if (window.scrollY > 100) {
        scrollBtn.style.display = "none";
      } else {
        scrollBtn.style.display = "block";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    });