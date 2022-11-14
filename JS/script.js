// header section navigation
const navbar = document.querySelector(".navbar");
const searchForm = document.querySelector(".search-form");
const loginForm = document.querySelector(".login-form");
const contactInfo = document.querySelector(".contact-info");

document.getElementById("menu_btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.getElementById("search_btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

document.getElementById("login_btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.getElementById("info_btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.getElementById("contact-close-btn").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

// swiper js slider script
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
