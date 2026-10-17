const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");
const toast = document.getElementById("toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicLabel.textContent = "Pausar música";
    } catch (error) {
      showToast("Para activar la música, agregá el archivo musica.mp3 a la carpeta del álbum.");
    }
  } else {
    music.pause();
    musicToggle.setAttribute("aria-pressed", "false");
    musicLabel.textContent = "Activar música";
  }
});

surpriseButton.addEventListener("click", () => {
  const opening = surpriseMessage.hidden;
  surpriseMessage.hidden = !opening;
  surpriseButton.innerHTML = opening
    ? 'Cerrar sorpresa <span aria-hidden="true">×</span>'
    : 'Abrí tu sorpresa <span aria-hidden="true">↗</span>';
  if (opening) surpriseMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

document.querySelectorAll(".image-button").forEach((button) => {
  button.addEventListener("click", () => {
    const message = button.dataset.message;
    showToast(message);
  });
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}
