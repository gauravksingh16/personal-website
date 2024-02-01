var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    }
  }
});

var swipeContainer = document.querySelector(".swiper");
var mouseBtn = document.getElementById("mouse-navigator");

swipeContainer.addEventListener("mouseenter", function (event) {
  mouseBtn.style.opacity = 1;
  mouseBtn.style.scale = 1;
  mouseBtn.style.top = event.clientY + "px";
  mouseBtn.style.left = event.clientX + "px";
});

swipeContainer.addEventListener("mouseleave", function () {
  mouseBtn.style.opacity = 0;
  mouseBtn.style.scale = 0;
});

swipeContainer.addEventListener("mousemove", function (event) {
  mouseBtn.style.top = event.clientY + "px";
  mouseBtn.style.left = event.clientX + "px";
});