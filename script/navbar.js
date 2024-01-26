const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Function to check screen size and update isMobile flag
function checkScreenSize() {
  isMobile = window.innerWidth < 890; // Adjust the breakpoint as needed (e.g., 768 for typical mobile size)
}

// Listen for window resize event
window.addEventListener("resize", () => {
  const wasMobile = isMobile; // Save the previous state
  checkScreenSize(); // Check the current state

  // If the screen was mobile and now is desktop, remove "active" class
  if (wasMobile && !isMobile) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Initial check to set the initial state
checkScreenSize();

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}

const musicButton = document.getElementById("musicButton");
const audio = document.getElementById("background-music");

window.addEventListener("load", function () {
  audio.play();
  audio.volume = 0.25
});

musicButton.addEventListener("click", function () {
  this.classList.toggle("active");

  if (audio.paused) {
    audio.play();
    audio.volume = 0.25 // If paused, play the audio
  } else {
    audio.pause(); // If playing, pause the audio
  }
});

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.add("scroll-up")
    body.classList.remove("scroll-down")
  }

  lastScroll = currentScroll
})
