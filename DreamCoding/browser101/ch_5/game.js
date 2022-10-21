// let hornet = document.getElementsByClassName("hornet");
// let hornet = document.querySelectorAll(".hornet");
// let butterfly = document.querySelectorAll(".butterfly");
let gameZone = document.querySelector("#gameZone");
let startBtn = document.querySelector(".startBtn");
//여기서 getElements~는 HTMLCollection으로 갖고오고 querySelector는 NodeList로 받아오는 걸 확인할 수 있었는데
//HTMLCollection은 map, forEach 둘 다 안먹히고 NodeList는 map은 안먹히지만 forEach는 먹혔다.

// HTMLCollection이라면 아래처럼 for을 사용해도 된다.

// for (let i = 0; i < hornet.length; i++) {
//   hornet[i].style.top = "600px";
// }

function createitems(num) {
  for (let i = 0; i < num; i++) {
    let butterfly = document.createElement("div");
    butterfly.setAttribute("class", "butterfly");
    butterfly.innerHTML = `
    <img src="gameImg/ButterFly.png" alt="나비그림">`;
    gameZone.appendChild(butterfly);

    let hornet = document.createElement("div");
    hornet.setAttribute("class", "hornet");
    hornet.innerHTML = `
    <img src="gameImg/Hornet.png" alt="말벌그림">`;
    gameZone.appendChild(hornet);
    itemsRandomPlacement(butterfly, hornet);
  }
}

function getRandomCoordinate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //최댓값은 제외, 최솟값은 포함됨
}

function itemsRandomPlacement(butterfly, hornet) {
  let coordinate = gameZone.getBoundingClientRect();
  let gameZoneMaxX = coordinate.right - 80;
  let gameZoneMinX = coordinate.left;
  let gameZoneYMaxY = coordinate.bottom - coordinate.top - 80;
  let gameZoneYMinY = coordinate.top;

  hornet.style.top = `${getRandomCoordinate(gameZoneYMinY, gameZoneYMaxY)}px`;
  hornet.style.left = `${getRandomCoordinate(gameZoneMinX, gameZoneMaxX)}px`;
  butterfly.style.top = `${getRandomCoordinate(
    gameZoneYMinY,
    gameZoneYMaxY
  )}px`;
  butterfly.style.left = `${getRandomCoordinate(gameZoneMinX, gameZoneMaxX)}px`;
}

startBtn.addEventListener("click", () => {
  let isExplain = document.querySelector(".explain");
  if (isExplain) {
    isExplain.remove();
  }
  createitems(10);
  startBtn.innerHTML = `<i class="fa-sharp fa-solid fa-stop"></i>`;
  startBtn.addEventListener("change", (e) => {
    console.log("play!->stop!");
  });
});
