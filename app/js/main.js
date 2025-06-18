import {modalQuote} from "./components/modalQuote.js";
import {setupMobileMenu} from "./components/mobileMenu.js";

modalQuote();
setupMobileMenu();

new Swiper('.leading__swiper', {
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 'auto',
  scrollbar: {
    el: '.leading__swiper-scrollbar',
    draggable: true
  }
})