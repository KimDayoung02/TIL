let scroll_by = document.getElementById("scroll_by_100");
let scroll_to = document.getElementById("scroll_to_100");
let scroll_special = document.getElementById("scroll_special");
let special = document.getElementById("special");
let special_position = special.getBoundingClientRect();

//주어진 만큼 잘 이동하는지 확인용
document.addEventListener("click", (event) => {
  console.log(event.pageY);
});

//100px씩 아래로 이동
scroll_by.addEventListener("click", () => {
  window.scrollBy({
    top: 100,
    behavior: "smooth",
  });
});

//100px위치로 무조건 이동
scroll_to.addEventListener("click", () => {
  window.scroll({
    top: 100,
    behavior: "smooth",
  });
});

//special이 있는 위치로 무조건 이동
scroll_special.addEventListener("click", () => {
  //   window.scroll({
  //     top: special_position.top,
  //     behavior: "smooth",
  //   });
  special.scrollIntoView({ behavior: "smooth" });
});
