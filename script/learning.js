document.querySelectorAll(".school-text").forEach((text) => {
  const letters = text.innerText.split("");
  const angleGap = 360 / letters.length - 10;

  text.innerHTML = letters
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * angleGap}deg)">${char}</span>`
    )
    .join("");
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("circle");
  const circularDivs = document.querySelectorAll(".circular-desc");

  function randomBetween(min, max) {
      return Math.random() * (max - min) + min;
  }

  function moveRandomly(div) {
      const maxX = container.clientWidth - div.clientWidth;
      const maxY = container.clientHeight - div.clientHeight;

      gsap.to(div, {
          left: randomBetween(0, maxX),
          top: randomBetween(0, maxY),
          duration: 3,
          ease: "power2.out",
          onComplete: function () {
              moveRandomly(div);
          },
      });
  }

  circularDivs.forEach(function (div) {
      moveRandomly(div);
  });
});
