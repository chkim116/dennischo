const active = document.querySelector(".active");
const selectedMenu = document.querySelector(".selected__menu");
const selectedMenuList = document.querySelectorAll(".selected__menu");
const selectedImgList = document.querySelectorAll(".selected__img-list");

function outActive() {
  selectedMenu.classList.remove("active");
}

function onActive() {
  selectedMenu.classList.add("active");
}

selectedMenuList.forEach((list) => {
  list.addEventListener("mouseenter", outActive);
  list.addEventListener("mouseleave", onActive);

  list.addEventListener("mouseenter", (list) => {
    let filter = list.target.dataset.set;
    selectedImgList.forEach((img) => {
      if (filter === img.dataset.filter) {
        img.classList.add("showing");
      } else {
        img.classList.remove("showing");
      }
    });
  });
  list.addEventListener("mouseleave", () => {
    selectedImgList.forEach((img) => {
      img.classList.remove("showing");
      selectedImgList[0].classList.add("showing");
    });
  });
});
