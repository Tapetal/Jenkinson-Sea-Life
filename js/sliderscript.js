var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 25,
  sliderPerGroup: 3,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay:  3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    950: {
        slidesPerView: 3,
    },
  },
});
