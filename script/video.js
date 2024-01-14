var videocon = document.getElementById("video-wrapper");
var playbtn = document.getElementById("play");
var video = document.getElementById("video-player");

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

videocon.addEventListener("click", function (event) {
  if (video.paused) {
    video.play();
    playbtn.innerHTML = "PAUSE"
  } else {
    video.pause();
    playbtn.innerHTML = "PLAY"
  }
});
