let menu = document.querySelector('#menuIconLink');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('close');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('close');
  navbar.classList.remove('active');
}

document.querySelector("#searchIconLink").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});