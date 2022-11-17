

// ボタン押したときのアクション
$('#addbtn').click(function () {
  const name = $("#title_name").val();
  const url = $("#url").val();
  //テーブルを追加して、name＋urlを追加する
  $('table tbody').append('<tr><th class="name">' + name + '</th><th class="url">' + url + '</th></tr>');

  const data = { name: name, url: url }
  const jsonData = JSON.stringify(data);
  localStorage.setItem("pro_list", jsonData);
});

$("#clear").on("click", function () {
  localStorage.removeItem("pro_list");
  $("#title_name").val("");
  $("#url").val("");
  $("table tbody tr").remove();
});

// 読み込み
if (localStorage.getItem("pro_list")) {

  const jsonData = localStorage.getItem("pro_list");
  console.log(jsonData);
  const data = JSON.parse(jsonData);
  console.log(data);
  $("#title_name").val(data.name);
  $("#url").val(data.url);

}


// URLを同時に開くscript
// $("opnebtn").on("click", function () {
//   const url = $("url").val("")
//   window.open(url, "_blank");
// })


//以下で、クローン作成は可能
// $(function () {
//   $('#btn').click(function () {
//     const cloneName = $('#name').clone(); //#nameのクローン作成
//     const cloneUrl = $('#url').clone(); //#nameのクローン作成

//     $('#name1').append(cloneName);//#name2にクローン複製
//     $('#url1').append(cloneUrl);//#name2にクローン複製
//   })
// });


// ローカルストレージに,タイトル＋テキストをformにして、Jason形式にして保存
// $("#btn").on("click", function () {

//   const name = $("#name").val(); //名前
//   const url = $("#url").val(); //url
//   const data = {
//     name: name,
//     url: url,

//   }
//   const jsonData = JSON.stringify(data);
//   localStorage.setItem("key", jsonData);
// });

// // ローカルストレージ内のデータを削除する
// $("#clear").on("click", function () {
//   localStorage.removeItem("key");
//   $("#name").val("");
//   $("#url").val("");
// });

// // データ取得
// if (localStorage.getItem("key")) {
//   const jsonData = localStorage.getItem("key");
//   console.log(jsonData);
//   const data = JSON.parse(jsonData);
//   console.log(data);
//   $("#name").val(data.name);
//   $("#url").val(data.kana);
// }

// $("#btn-check").on("click", function () {
//   localStorage.getItem("key");
//   console.log(jsonData);
//   const data = JSON.parse(jsonData);
//   console.log(data);
//   $("#name").val(data.name);
//   $("#url").val(data.kana);
// });