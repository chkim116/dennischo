const aboutSlide = document.querySelector("#about__slide");
const aboutBtn = document.querySelector(".about");

const navbarRight = document.querySelector(".navbar__right");
aboutBtn.addEventListener("click", () => {
  aboutSlide.classList.add("showing");
  aboutClose.style.display = "block";
});

const aboutClose = document.querySelector("#about__close");

aboutClose.addEventListener("click", () => {
  aboutSlide.classList.remove("showing");
  aboutClose.style.display = "none";
});
