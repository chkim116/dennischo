// -- 다음 데니스조사이트 자바스그립트
// 셀렉트메뉴에 마우스를올렸을때
// 필터 메서드를 이용하여
// event.target.dataset == 이미지.target이 맞을때 반환하기.

const active = document.querySelector(".active");
const selectedMenu = document.querySelector(".selected__menu");
const selectedMenuList = document.querySelectorAll(".selected__menu");

const selected = document.querySelector(".selected");

console.log(selectedMenuList);

selectedMenuList.forEach((list) => {
  list.addEventListener("mouseover", () => {
    selectedMenu.classList.remove("active");
  });
  list.addEventListener("mouseout", () => {
    selectedMenu.classList.add("active");
  });
});
