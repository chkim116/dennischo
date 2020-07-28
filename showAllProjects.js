const openSection = document.querySelector(".footer__nav");
const section = document.querySelector("#section");
const sectionTitle = document.querySelector(".section__title");

let isSection = false;
function onSectionBy768() {
  if (768 >= innerWidth && isSection === false) {
    section.style.display = "block";
    isSection = true;
    console.log("onSectionBy768", isSection);
  }
}

window.addEventListener("resize", onSectionBy768);

function onSection() {
  if (isSection === false) {
    section.style.display = "block";
    isSection = true;
    console.log("onSection", isSection);
  }
}

openSection.addEventListener("click", onSection);

function outSection() {
  if (isSection === true && window.innerWidth > 768) {
    section.style.display = "none";
    isSection = false;
    console.log("outsection", isSection);
  }
}

section.addEventListener("click", outSection);
