window.arr = ["일", "월", "화", "수", "목", "금", "토"]; //배열

$(function () {
  let printDate = function () {
    setInterval(function () {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let day = arr[now.getDay()];
      let hour = now.getHours();
      let apm = hour < 12 ? "am" : "pm";
      hour = hour >= 13 ? hour - 1 : hour;
      let min = now.getMinutes();
      let sec = now.getSeconds();
      $(".ex1 .result").html(
        `${year}년도 ${month}월${date}일 ${day}요일<br>
        ${apm} ${hour}시 ${min}분${sec}초`
      );
    }, 1000);
  };

  printDate();
  setInterval(function () {
    printDate();
  });
}); //ready1

$(function () {
  $(".ex2 button").click(function () {
    let year = parseInt($(".ex2 input:nth-child(1)").val());
    let month = parseInt($(".ex2 input:nth-child(2)").val()) - 1;
    let date = parseInt($(".ex2 input:nth-child(3)").val());
    let now = new Date(year, month, date);
    let day = arr[now.getDay()];
    $(".ex2 .result").html(day);
  });
});
