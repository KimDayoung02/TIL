const box = document.querySelector(".box");
function updateTag() {
  box.innerHTML = `
window.screen : ${window.screen.width}, ${window.screen.height}<br/>
window.outer : ${window.outerWidth}, ${window.outerHeight}<br/>
window.inner : ${window.innerWidth}, ${window.innerHeight}<br/>
documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}<br/>
`;
  console.log(window.outerWidth);
}

window.addEventListener("resize", () => {
  updateTag();
});
updateTag();
