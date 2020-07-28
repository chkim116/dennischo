const aboutSlide = document.querySelector("#about__slide");

const aboutBtn = document.querySelector(".about");

aboutBtn.addEventListener("click", () => {
  aboutSlide.classList.toggle("showing");
});
