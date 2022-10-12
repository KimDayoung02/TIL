let div = document.querySelector(".special");

// getBoundingClientRect()

div.addEventListener("click", (event) => {
  let rect = div.getBoundingClientRect();
  for (const key in rect) {
    if (typeof rect[key] !== "function") {
      //위 조건문은 쓸데없는 정보까지 보여주지 않기 위함인 듯
      console.log(`${key} : ${rect[key]}`);
    }
  }
  //여기까지 요소의 시작좌표 및 left, right, top, bottom 정보
  //아래부터는 client x, y / page x, y를 비교하는 것

  console.log(`client x : ${event.clientX}, y : ${event.clientY}`);
  console.log(`page x : ${event.pageX}, y : ${event.pageY}`);
  //이건 요소에 상관없이 클릭한 위치의 좌표가 나옴
  //client가 사용자 화면 기준의 좌표, page가 페이지 전체를 기준으로 한 좌표
});
