import "./styles.css";
//////////////////////////////
//追加ボタン押下
//////////////////////////////
const onclickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//////////////////////////////
//未完了リストから指定の要素を削除
//////////////////////////////
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//////////////////////////////
//未完了リストに追加
//////////////////////////////
const createIncompleteList = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //button(戻る)生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻す
      createIncompleteList(text);
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode);
    });
    //divタグの子要素に
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了したリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
