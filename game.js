let score = 0;
const maxStars = 10;
const scoreDisplay = document.getElementById("score");
let gameFinished = false;
if (score >= 10) {
  showFinalScene();
}


function createStar() {
  if (gameFinished) return;

  const star = document.createElement("div");
  star.innerText = "⭐";
  star.classList.add("falling-star");

  star.style.left = Math.random() * (window.innerWidth - 40) + "px";
  star.style.top = "-30px";

  document.body.appendChild(star);

  let position = -30;

  const fall = setInterval(() => {
    position += 3;
    star.style.top = position + "px";

    if (position > window.innerHeight) {
      clearInterval(fall);
      star.remove();
      if (!gameFinished) createStar();
    }
  }, 20);

  star.addEventListener("click", () => {
    if (gameFinished) return;

    clearInterval(fall);
    star.remove();

    score++;
    scoreDisplay.innerText = `Stars: ${score} / ${maxStars}`;

    if (score >= maxStars) {
      gameFinished = true;
      console.log("FINAL SCENE TRIGGERED");
      showFinalScene();
    } else {
      createStar();
    }
  });
}

function showFinalScene() {

  gameFinished = true;

  // Hide score
  scoreDisplay.style.display = "none";

  // Hide title
  const title = document.querySelector(".park-title");
  if (title) title.style.display = "none";

  // Create wrapper
  const finalScene = document.createElement("div");
  finalScene.classList.add("final-scene");

  finalScene.innerHTML = `
    <p class="final-message">
      you caught them all babyyyy
    </p>
    <img src="assets/characters/biting.png" class="bite-image">
  `;

  document.body.appendChild(finalScene);

  // Arrow
  const nextArrow = document.createElement("div");
  nextArrow.innerText = "➜";
  nextArrow.classList.add("next-arrow");
  nextArrow.onclick = () => window.location.href = "room.html";

  document.body.appendChild(nextArrow);
}


createStar();


