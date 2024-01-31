var videocon = document.getElementById("video-wrapper");
var playbtn = document.getElementById("play");
var video = document.getElementById("video-player");
const musicBtn = document.getElementById("musicButton");
const audioplay = document.getElementById("background-music");

function setupVideoControls() {
  videocon.addEventListener("mouseenter", function (event) {
    playbtn.style.opacity = 1;
    playbtn.style.scale = 1;
    playbtn.style.top = event.clientY + "px";
    playbtn.style.left = event.clientX + "px";
  });

  videocon.addEventListener("mouseleave", function () {
    playbtn.style.opacity = 0;
    playbtn.style.scale = 0;
  });

  videocon.addEventListener("mousemove", function (event) {
    playbtn.style.top = event.clientY + "px";
    playbtn.style.left = event.clientX + "px";
  });

  videocon.addEventListener("click", function () {
    if (video.paused) {
      musicBtn.classList.toggle("active");
      audioplay.pause();
      video.play();
      video.muted = false;
      playbtn.innerHTML = "PAUSE";
    } else {
      musicBtn.classList.toggle("active");
      video.pause();
      audioplay.play();
      audioplay.volume = 0.25;
      playbtn.innerHTML = "PLAY";
    }
  });
}

function togglePlay() {
  playbtn.addEventListener("click", function () {
    if (video.paused) {
      musicBtn.classList.toggle("active");
      audioplay.pause();
      video.play();
      video.muted = false;
      playbtn.innerHTML = "PAUSE";
      video.style.filter = "none";
    } else {
      musicBtn.classList.toggle("active");
      video.pause();
      audioplay.play();
      audioplay.volume = 0.25;
      playbtn.innerHTML = "PLAY";
      video.style.filter = grayscale(1);
    }
  });
}

if(screen.width > 890) {
  setupVideoControls();
}
else {
  togglePlay();
}
