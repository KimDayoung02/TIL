// let hornet = document.getElementsByClassName("hornet");
let hornet = document.querySelectorAll(".hornet");
let butterfly = document.querySelectorAll(".butterfly");
let gameZone = document.querySelector("#gameZone");
//여기서 getElements~는 HTMLCollection으로 갖고오고 querySelector는 NodeList로 받아오는 걸 확인할 수 있었는데
//HTMLCollection은 map, forEach 둘 다 안먹히고 NodeList는 map은 안먹히지만 forEach는 먹혔다.

// HTMLCollection이라면 아래처럼 for을 사용해도 된다.

// for (let i = 0; i < hornet.length; i++) {
//   hornet[i].style.top = "600px";
// }

function getRandomCoordinate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //최댓값은 제외, 최솟값은 포함됨
}

function itemsRandomPlacement() {
  let coordinate = gameZone.getBoundingClientRect();
  let gameZoneMaxX = coordinate.right - 40;
  let gameZoneMinX = coordinate.left + 40;
  let gameZoneYMaxY = coordinate.bottom - coordinate.top - 40;
  let gameZoneYMinY = coordinate.top + 40;
  console.log(coordinate);
  console.log(gameZoneYMinY, gameZoneYMaxY);
  hornet.forEach((hornet) => {
    hornet.style.top = `${getRandomCoordinate(
      gameZoneYMinY + 40,
      gameZoneYMaxY - 40
    )}px`;
    hornet.style.left = `${getRandomCoordinate(
      gameZoneMinX + 40,
      gameZoneMaxX - 40
    )}px`;
  });
  butterfly.forEach((btf) => {
    btf.style.top = `${getRandomCoordinate(
      gameZoneYMinY + 40,
      gameZoneYMaxY - 40
    )}px`;
    btf.style.left = `${getRandomCoordinate(
      gameZoneMinX + 40,
      gameZoneMaxX - 40
    )}px`;
  });
}

itemsRandomPlacement();
gameZone.addEventListener("click", (e) => {
  console.log(e.clientY);
});
