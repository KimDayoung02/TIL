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
let timer = document.querySelector(".timer");
let butterflyCount = document.querySelector(".butterflyCount");

const fixedBtfCount = 15;
//나비 개수 조정
let btfCount = fixedBtfCount;
butterflyCount.innerHTML = `${btfCount}`;

let startAndStop;
//타이머 함수 저장

let time;
//시간으로 점수를 달리하기 위한 변수

let bgm = new Audio("gameSound/bgm.mp3");
bgm.loop = true;
let hornetSound = new Audio("gameSound/badPull.mp3");
let butterflySound = new Audio("gameSound/goodPull.mp3");
let gameWinSound = new Audio("gameSound/gameWin.mp3");
let alertSound = new Audio("gameSound/alert.wav");
//bgm갖고오기

//위의 fixedBtfCount 수만큼 나비 생성, 말벌은 나비의 절반만 생성하기위한 함수
function createitems(num) {
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0) {
      let hornet = document.createElement("div");
      hornet.setAttribute("class", "hornet");
      hornet.innerHTML = `
    <img src="gameImg/Hornet.png" alt="말벌그림">`;
      gameZone.appendChild(hornet);

      //랜덤위치 배치
      itemsRandomPlacement(hornet);
    }
    let butterfly = document.createElement("div");
    butterfly.setAttribute("class", "butterfly");
    butterfly.innerHTML = `
    <img src="gameImg/ButterFly.png" alt="나비그림">`;
    gameZone.appendChild(butterfly);

    //랜덤위치 배치
    itemsRandomPlacement(butterfly);
  }
}

//gameZone div의 크기만큼의 최대최소 값을 가지는 랜덤좌표를 생성하기 위한 함수
function getRandomCoordinate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  //최댓값은 제외, 최솟값은 포함됨
}

//생성한 나비, 말벌 아이템들을 gameZone div안에 랜덤으로 배치하기 위한 함수
function itemsRandomPlacement(item) {
  let coordinate = gameZone.getBoundingClientRect();
  let gameZoneMaxX = coordinate.right - 80;
  let gameZoneMinX = coordinate.left;
  let gameZoneYMaxY = coordinate.bottom - coordinate.top - 80;
  let gameZoneYMinY = coordinate.top;

  item.style.top = `${getRandomCoordinate(gameZoneYMinY, gameZoneYMaxY)}px`;
  item.style.left = `${getRandomCoordinate(gameZoneMinX, gameZoneMaxX)}px`;
}

//게임이 시작될 때 타이머를 시작하기 위한 함수
function timeStart() {
  time = 0;
  let min = "";
  let sec = "";
  let mmsec = "";

  //나비 개수를 늘리면 플레이타임이 늘어날 수 있으니 분 단위까지 늘려보았음
  startAndStop = setInterval(() => {
    mmsec = time % 10;
    sec = parseInt((time / 10) % 60);

    min = parseInt(time / 600);
    timer.innerHTML = `${min < 10 ? `0${min}` : min} : ${
      sec < 10 ? `0${sec}` : sec
    } . ${mmsec}`;

    time++;
  }, 100);
}

//사용자가 나비, 말벌 아이템을 클릭했을 때의 동작을 위한 함수
function catchItem(butterfly, hornet) {
  butterfly.forEach((btf) => {
    btf.addEventListener("click", () => {
      butterflySound.play();
      butterflySound.currentTime = 0;
      btf.remove();
      btfCount--;
      butterflyCount.innerHTML = `${btfCount}`;

      console.log(time);
      if (btfCount == 0) {
        gameWin();
      }
    });
  });

  hornet.forEach((hor) => {
    hor.addEventListener("click", () => {
      hornetSound.play();
      gameOver();
    });
  });
}

//사용자가 나비를 모두 클릭하고 게임에서 이겼을 떄의 동작을 위한 함수
function gameWin() {
  bgm.pause();
  gameWinSound.play();

  clearInterval(startAndStop);
  gameZone.innerHTML = `
  <div class="explain">
  <h2>와! 나비를 다 잡았습니다! <i class="fa-sharp fa-solid fa-thumbs-up"></i><br><br></h2>
  <button id="replay" class="startBtn">
  <i class="fa-sharp fa-solid fa-reply fa-beat"></i>
  </button>        
  </div>`;

  //모두 잡는 데에 걸린 시간 별로 점수를 매기기 위함
  let explain = document.querySelector(".explain");
  let score = document.createElement("span");
  if (time < 80) {
    score.innerHTML = `점수는 <i style="color:#f12d2d"class="fa-sharp fa-solid fa-a"></i>입니다!`;
  } else if (time < 120) {
    score.innerHTML = `점수는 <i style="color:#f69526"class="fa-sharp fa-solid fa-b"></i>입니다!`;
  } else if (time < 160) {
    score.innerHTML = `점수는 <i style="color:#f6e926"class="fa-sharp fa-solid fa-c"></i>입니다!`;
  } else if (time < 200) {
    score.innerHTML = `점수는 <i style="color:#71f626"class="fa-sharp fa-solid fa-d"></i>입니다!`;
  } else {
    score.innerHTML = `점수는 <i style="color:#95ddff"class="fa-sharp fa-solid fa-f"></i>입니다!`;
  }
  explain.appendChild(score);

  let replayBtn = document.querySelector("#replay");
  replayBtn.addEventListener("click", (e) => {
    alertSound.play();
    gameZone.innerHTML = ``;
    gamePlay();
  });
}

//게임시작, 다시시작 버튼을 눌렀을 때 게임이 동작하기 위한 함수(createitems, timeStart, catchItem 함수가 모두 사용됨)
function gamePlay() {
  alertSound.play();
  bgm.load();
  bgm.play();

  createitems(fixedBtfCount);
  btfCount = fixedBtfCount;
  butterflyCount.innerHTML = `${fixedBtfCount}`;
  startBtn.innerHTML = `<p class="fa-sharp fa-solid fa-stop"></p>`;
  startBtn.setAttribute("id", "stop");

  timeStart();

  let butterfly = document.querySelectorAll(`.butterfly`);
  let hornet = document.querySelectorAll(".hornet");
  catchItem(butterfly, hornet);
}

//게임 정지버튼을 눌렀을 때
function gameReset() {
  bgm.pause();
  clearInterval(startAndStop);
  gameZone.innerHTML = `
  <div class="explain">
  <h2>다시 하시겠습니까?<br><br></h2>
  <button id="replay" class="startBtn">
  <i class="fa-sharp fa-solid fa-reply fa-beat"></i>
  </button>        
  </div>`;
  let replayBtn = document.querySelector("#replay");
  replayBtn.addEventListener("click", (e) => {
    alertSound.play();
    gameZone.innerHTML = ``;
    gamePlay();
  });
}

//말벌을 잡아 게임오버 했을 때
function gameOver() {
  bgm.pause();
  clearInterval(startAndStop);
  gameZone.innerHTML = `
  <div class="explain">
  <h2>이런! 말벌을 잡았습니다! <i class="fa-sharp fa-solid fa-face-sad-tear"></i> <br><br></h2>
  <button id="replay" class="startBtn">
  <i class="fa-sharp fa-solid fa-reply fa-beat"></i>
  </button>        
  </div>`;
  let replayBtn = document.querySelector("#replay");
  replayBtn.addEventListener("click", (e) => {
    alertSound.play();
    gameZone.innerHTML = ``;
    gamePlay();
  });
}

//맨 처음 start를 누를 때의 동작
startBtn.addEventListener("click", (e) => {
  let clickId = e.currentTarget.id;
  let isExplain = document.querySelector(".explain");
  if (isExplain) {
    isExplain.remove();
  }
  console.log(clickId);
  if (clickId == "stop" || clickId == false) {
    gameReset();
    return;
  }
  gamePlay();
});
