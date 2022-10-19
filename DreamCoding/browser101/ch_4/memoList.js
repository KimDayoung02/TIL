let memoText = document.querySelector(".memoAddText");
let memoAddButtom = document.querySelector(".memoAddButton");
let memoList = document.querySelector(".memoList");
let html = document.getElementsByTagName("html")[0];

window.addEventListener("resize", () => {
  html.style.width = window.outerWidth;
  html.style.height = window.outerHeight;
});

memoAddButtom.addEventListener("click", () => {
  if (!memoText.value) {
    alert("메모할 내용이 없습니다! 내용을 입력해주세요!");
  } else {
    let checkMark = document.createElement("span");
    checkMark.innerHTML = ` ✔ `;
    checkMark.style.fontSize = "25px";
    checkMark.style.cursor = "pointer";
    checkMark.style.color = "green";

    let removeMark = document.createElement("span");
    removeMark.innerHTML = ` X <br>`;
    removeMark.style.fontSize = "25px";
    removeMark.style.cursor = "pointer";
    removeMark.style.color = "firebrick";

    let memoListText = document.createElement("h2");
    memoListText.innerHTML = memoText.value;
    //아무래도 리스트니까 ul, li태그를 쓰는 것도 좋았을 듯

    memoList.appendChild(memoListText);
    memoListText.appendChild(checkMark);
    memoListText.appendChild(removeMark);

    memoText.value = "";
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

    checkMark.addEventListener("click", () => {
      checkMark.parentElement.style.textDecorationLine = "line-through";
      checkMark.parentElement.style.color = "rgba(128, 128, 128, 0.57)";
    });

    removeMark.addEventListener("click", () => {
      removeMark.parentElement.remove();
    });
  }
});
