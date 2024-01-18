document.querySelectorAll(".school-text").forEach((text) => {
  const letters = text.innerText.split("");
  const spacing = 10;

  text.innerHTML = letters
    .map((char, i) =>
      `<span style="transform:rotate(${i * spacing}deg);">${char}</span>`
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
          duration: randomBetween(2, 5),
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
