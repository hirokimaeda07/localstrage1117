
//1つ目 Todo
//ローカルストレージに、タイトルandテキストをまとめて、jsonにする
$("#save").on("click", function () {
  const title = $("#input").val(); //タイトル
  const text = $('#textarea').val(); //本文
  const data = { title: title, text: text }; //dataに｛｝テキストを入れる
  const jsonData = JSON.stringify(data);
  localStorage.setItem("todo", jsonData);
});

//ローカルストレージ内のデータを削除する
$("#clear").on("click", function () {
  localStorage.removeItem("todo");
  $("#input").val(""); //val("")で””に書かれているものに書き換え＝何もないから削除になる
  $("#textarea").val("");
});

//リロード時にローカルストレージデータを表示
if (localStorage.getItem("todo")) {
  const jsonData = localStorage.getItem("todo");
  console.log(jsonData);
  const data = JSON.parse(jsonData);
  console.log(data);
  $("#input").val(data.title);
  $("#textarea").val(data.text);
}

//2つ目todo
$("#save2").on("click", function () {
  const title = $(".input2").val();
  const text = $(".textarea2").val();
  const data = { yarukoto: title, todo: text };
  const jsonData = JSON.stringify(data);
  localStorage.setItem("todo2", jsonData);
});

$("#clear2").on("click", function () {
  localStorage.removeItem("todo2");
  $(".input2").val("");
  $(".textarea2").val("");
});

if (localStorage.getItem("todo2")) {
  const jsonData = localStorage.getItem("todo2");
  console.log(jsonData);
  const data = JSON.parse(jsonData);
  console.log(data);
  $(".input2").val(data.yarukoto);
  $(".textarea2").val(data.todo);
}


//　2つのデータを同時に消す場合に押す
$("#clearall").on("click", function () {
  localStorage.removeItem("todo");
  localStorage.removeItem("todo2");
  $("#input").val("");
  $(".input2").val("");
  $("#textarea").val("");
  $(".textarea2").val("");
});

//年月日を表示
$(function () {
  const now_date = new Date();
  const now_month = (now_date.getFullYear() + '/' + (now_date.getMonth() + 1) + '/' + now_date.getDate());
  $("#today").append(now_month);
});