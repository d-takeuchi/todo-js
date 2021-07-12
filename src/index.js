//未完了リストから指定の要素を削除
const deleteFromInCompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divタグの生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = text;
  div.appendChild(li);

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromInCompleteList(completeButton.parentNode);
    //完了リストに要素を追加
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = deleteTarget.firstChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button（削除）タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromInCompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

const onClickAdd = () => {
  // 入力されたテキストを未完了のTODOリストに追加
  const inputElement = document.getElementById("add-text");
  const inputText = inputElement.value;
  inputElement.value = "";
  createIncompleteList(inputText);
};

document.getElementById("add-button").addEventListener("click", () => {
  onClickAdd();
});
