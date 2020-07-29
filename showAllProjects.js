const openSection = document.querySelector(".footer__nav");
const section = document.querySelector("#section");
const sectionTitle = document.querySelector(".section__title");

const sectionCloseBtn = document.querySelector(".projects__close-btn");

let isSection = false;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop !== 0 || 768 >= innerWidth) {
    return;
  } else section.style.display = "none";
  isSection = false;
});

function onSectionBy768() {
  if (768 >= innerWidth && isSection === false) {
    section.style.display = "block";
    isSection = true;
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

sectionCloseBtn.addEventListener("click", outSection);
