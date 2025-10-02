const btnElem = document.querySelector(".nav-toggle-button");
const navElem = document.querySelector(".nav__list-menu");

btnElem.onclick = function () {
  const isOpen = navElem.classList.toggle("nav__open");
  if (isOpen === true) {
    document.querySelector("html").style.overflow = "hidden";
  } else {
    document.querySelector("html").style.overflow = "auto";
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  centeredSlides: "true",
  slidesPerView: 3,
  spaceBetween: 2,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
