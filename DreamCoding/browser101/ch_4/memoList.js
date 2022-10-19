let memoText = document.querySelector(".memoAddText");
let memoAddButtom = document.querySelector(".memoAddButton");
let memoList = document.querySelector(".memoList");
let html = document.getElementsByTagName("html")[0];
let form = document.querySelector("form");

window.addEventListener("resize", () => {
  html.style.width = window.outerWidth;
  html.style.height = window.outerHeight;
});

// 보통 이벤트 함수들은 이름 앞에 on을 붙여서 사용

const onAdd = () => {
  if (!memoText.value) {
    alert("메모할 내용이 없습니다! 내용을 입력해주세요!");
    memoText.focus();
    return;
  }
  // createItem
  let checkMark = document.createElement("span");
  checkMark.innerHTML = ` ✔ `;
  checkMark.setAttribute("class", "check");
  checkMark.style.fontSize = "25px";
  checkMark.style.cursor = "pointer";
  checkMark.style.color = "green";

  let removeMark = document.createElement("span");
  removeMark.innerHTML = ` X <br>`;
  removeMark.setAttribute("class", "remove");
  removeMark.style.fontSize = "25px";
  removeMark.style.cursor = "pointer";
  removeMark.style.color = "firebrick";

  /*이렇게 일일히 style로 CSS 지정해주지 않아도 check와 remove를 
    setAttribute로 id값을 각각 지정해 css파일에서 해줘도 됨*/

  let memoListText = document.createElement("h2");
  memoListText.innerHTML = memoText.value;
  //아무래도 리스트니까 ul, li태그를 쓰는 것도 좋았을 듯

  memoList.appendChild(memoListText);
  memoListText.appendChild(checkMark);
  memoListText.appendChild(removeMark);

  memoListText.scrollIntoView({ block: "center" });

  memoText.value = "";
  memoText.focus();

  //onMouseHover
  checkMark.onmouseover = function () {
    checkMark.style.color = "rgb(125, 209, 125)";
    checkMark.style.transition = "all 0.1s ease-in";
  };
  checkMark.onmouseout = function () {
    checkMark.style.color = "green";
  };
  removeMark.onmouseover = function () {
    removeMark.style.color = "red";
    removeMark.style.transition = "all 0.1s ease-in";
  };
  removeMark.onmouseout = function () {
    removeMark.style.color = "firebrick";
  };

  memoListText.addEventListener("click", (e) => {
    if (e.target.className == "check") {
      checkMark.parentElement.style.textDecorationLine = "line-through";
      checkMark.parentElement.style.color = "rgba(128, 128, 128, 0.57)";
    } else if (e.target.className == "remove") {
      removeMark.parentElement.remove();
    }
  });
  //위는 이벤트위임을 이용해서 이벤트를 부모 하나에만 달아 자식들에게 적용하는 방법
  //아래는 수정 이전

  // //onCheckedItem
  // checkMark.addEventListener("click", () => {
  // checkMark.parentElement.style.textDecorationLine = "line-through";
  // checkMark.parentElement.style.color = "rgba(128, 128, 128, 0.57)";
  // });

  // //onRemoveItem
  // removeMark.addEventListener("click", () => {
  // removeMark.parentElement.remove();
  // });
};

// memoAddButtom.addEventListener("click", () => {
//   onAdd();
// });

// //keypress는 MDN에서 Deprecated표시가 되어있어 keydown으로 대체
// memoText.addEventListener("keydown", (e) => {
//   if (e.isComposing) {
//     /*글자가 만들어지는 중간에 발생하는 이벤트를 무시하는 것
//     (한글은 여러키를 사용해서 글자를 완성하는 언어라
//       중간에 이벤트가 벌어질 수도 있다! isComposing을 사용하거나 keyup을 사용해보자)*/
//     return;
//   }
//   if (e.key === "Enter") {
//     onAdd();
//   }
// });

//사실 위처럼 click, keydown이 따로 없어도 form태그로 이루어져있으면 따로 없어도 됨
//해보자

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //form으로 submit할때는 새로고침이 발생하는데 이걸 막아주는 역할
  onAdd();
});
