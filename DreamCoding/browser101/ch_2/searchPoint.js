//..
let tag = document.getElementsByClassName("tag")[0];
let width = document.getElementsByClassName("width")[0];
let height = document.getElementsByClassName("height")[0];
let target = document.getElementsByTagName("img")[0];
document.addEventListener("mousemove", (e) => {
  tag.innerText = `${e.clientX}px, ${e.clientY}px`;
  width.style.left = `${e.clientX}px`;
  height.style.top = `${e.clientY}px`;
  tag.style.left = `${e.clientX}px`;
  tag.style.top = `${e.clientY}px`;
  target.style.left = `${e.clientX}px`;
  target.style.top = `${e.clientY}px`;
});
