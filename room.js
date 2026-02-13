const zones = document.querySelectorAll(".click-zone");
const message = document.getElementById("glowMessage");

zones.forEach(zone => {
  zone.addEventListener("click", () => {

    message.innerText = zone.getAttribute("data-message");
    message.style.opacity = "1";

    zone.style.pointerEvents = "none";

  });
});
