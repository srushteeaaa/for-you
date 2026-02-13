let stopTypewriter = false;

const text = "Something special unlocks at midnight 💗";
const speed = 60; // typing speed (lower = faster)
let i = 0;

function typeWriter() {
  if (stopTypewriter) return;

  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


window.onload = () => {
  setTimeout(typeWriter, 1200);
  startCountdown();
};


function startCountdown() {
  const now = new Date();
  const year = now.getFullYear();

  // Feb 14, 12:00 AM
  const target = new Date(year, 1, 14, 0, 0, 0);

  if (now > target) {
    target.setFullYear(year + 1);
  }

  function updateCountdown() {
    const current = new Date();
    const diff = target - current;

    if (true) {
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";

      triggerMidnight();	
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("hours").innerText =
      String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText =
      String(minutes).padStart(2, "0");
    document.getElementById("seconds").innerText =
      String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
let midnightTriggered = false;

function triggerMidnight() {
  if (midnightTriggered) return;
  midnightTriggered = true;

  // STOP typewriter completely
  stopTypewriter = true;
  i = 0;

  // Fade out countdown
  document.getElementById("countdown").classList.add("fade-out");

  // Change character to holding hands
  document.getElementById("characterSprite").src =
    "assets/characters/hugging.png";

  // Cleanly replace text (NO old teaser)
  const textElement = document.getElementById("typewriter");
  textElement.innerHTML =
    "happy valentines my babyy i love you sooo muchh ";


const openBtn = document.getElementById("openBtn");
openBtn.style.opacity = "1";
openBtn.style.pointerEvents = "auto";

openBtn.addEventListener("click", function() {
  window.location.href = "park.html";
});

 
}



