const hearts = document.querySelectorAll(".heart");
const bubble = document.getElementById("bubble");
const arrow = document.getElementById("nextArrow");

let clickedCount = 0;

const messages = [
  "i love you foreverrrr ",
  "you're my favorite person in everyyyy universee ",
  "you are the cutesttttt everrrr "
];

hearts.forEach((heart, index) => {
  heart.addEventListener("click", () => {
    bubble.innerText = messages[index];
    bubble.style.opacity = "1";
    heart.style.pointerEvents = "none";
    heart.style.opacity = "0.4";
    clickedCount++;

    if (clickedCount === 3) {
      arrow.style.opacity = "1";
    }
  });
});

arrow.addEventListener("click", () => {
  window.location.href = "game.html";
});
