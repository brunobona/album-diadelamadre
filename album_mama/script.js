const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", () => {
  const opening = surpriseMessage.hidden;
  surpriseMessage.hidden = !opening;
  surpriseButton.innerHTML = opening
    ? 'Cerrar sorpresa <span aria-hidden="true">×</span>'
    : 'Abrí tu sorpresa <span aria-hidden="true">↗</span>';
  if (opening) surpriseMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
