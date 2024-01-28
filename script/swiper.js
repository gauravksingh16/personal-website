var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 50,
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