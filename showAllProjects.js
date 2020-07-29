const openSection = document.querySelector(".footer__nav");
const section = document.querySelector("#section");
const sectionTitle = document.querySelector(".section__title");

const sectionCloseBtn = document.querySelector(".projects__close-btn");

let isSection = false;

function onSectionBy768() {
  if (768 >= window.innerWidth && isSection === false) {
    section.style.display = "block";
    isSection = true;
  }
    else {
      section.style.display = "none";
    isSection = false;
    }
  }
}

window.addEventListener("resize", onSectionBy768);

function onSection() {
  if (isSection === false) {
    section.style.display = "block";
    isSection = true;
  }
}

openSection.addEventListener("click", onSection);

function outSection() {
  if (isSection === true && window.innerWidth > 768) {
    section.style.display = "none";
    isSection = false;
  }
}

sectionCloseBtn.addEventListener("click", outSection);
