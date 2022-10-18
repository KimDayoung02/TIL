let memoText = document.querySelector(".memoAddText");
let memoAddButtom = document.querySelector(".memoAddButton");
let memoList = document.querySelector(".memoList");

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
    removeMark.style.color = "red";

    let memoListText = document.createElement("h2");
    memoListText.innerHTML = memoText.value;

    memoList.appendChild(memoListText);
    memoListText.appendChild(checkMark);
    memoListText.appendChild(removeMark);

    memoText.value = "";

    checkMark.addEventListener("click", () => {
      checkMark.parentElement.style.textDecorationLine = "line-through";
    });

    removeMark.addEventListener("click", () => {
      removeMark.parentElement.remove();
    });
  }
});
