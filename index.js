// -- 다음 데니스조사이트 자바스그립트
// 셀렉트메뉴에 마우스를올렸을때
// 필터 메서드를 이용하여
// event.target.dataset == 이미지.target이 맞을때 반환하기.

const active = document.querySelector(".active");
const selectedMenu = document.querySelector(".selected__menu");
const selectedMenuList = document.querySelectorAll(".selected__menu");
const selectedImgList = document.querySelectorAll(".selected__img-list");

const selected = document.querySelector(".selected");

selectedMenuList.forEach((list) => {
  list.addEventListener("mouseover", outActive);
  list.addEventListener("mouseout", onActive);
  list.addEventListener("mouseover", (list) => {
    let filter = list.target.dataset.set;
    selectedImgList.forEach((img) => {
      if (filter === img.dataset.filter) {
        img.classList.add("showing");
      } else {
        img.classList.remove("showing");
      }
    });
  });
});

function outActive() {
  selectedMenu.classList.remove("active");
}

function onActive() {
  selectedMenu.classList.add("active");
}
