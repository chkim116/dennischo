const openSection = document.querySelector(".footer__nav");
const section = document.querySelector("#section");

function onSection() {
  section.style.display = "block";
}

openSection.addEventListener("click", onSection);

function outSection() {
  section.style.display = "none";
}

section.addEventListener("click", outSection);
