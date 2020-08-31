const openSection = document.querySelector(".footer__nav");
const section = document.querySelector("#section");
const sectionTitle = document.querySelector(".section__title");

const sectionCloseBtn = document.querySelector(".projects__close-btn");

let isSection = false;

if (768 >= window.innerWidth) {
  isSection = true;
  section.style.display = "block";
}

function onSectionBy768() {
  if (768 >= window.innerWidth) {
    isSection = true;
    section.style.display = "block";
  } else {
    isSection = false;
    section.style.display = "none";
  }
}

window.addEventListener("resize", onSectionBy768);

function onSection() {
  if (!isSection) {
    section.style.display = "block";
    isSection = true;
  }
}

openSection.addEventListener("click", onSection);

function outSection() {
  if (isSection) {
    section.style.display = "none";
    isSection = false;
  }
}

sectionCloseBtn.addEventListener("click", outSection);
