let tag = document.getElementsByClassName("tag")[0];
let width = document.getElementsByClassName("width")[0];
let height = document.getElementsByClassName("height")[0];
let target = document.getElementsByTagName("img")[0];
document.addEventListener("mousemove", (e) => {
  tag.innerText = `${e.clientX}px, ${e.clientY}px`;
  width.style.transform = `translateX(${e.clientX}px)`;
  height.style.transform = `translateY(${e.clientY}px)`;
  tag.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  target.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

//top과 left가 아닌 transform, translate로 변화하여 layout층이 아닌 composite층에서 변화하게 함
