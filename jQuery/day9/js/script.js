$(function () {
  let n = 0;
  $(".ex1 button").click(function () {
    ++n; //n++//n += 1//n = n+1
    //++n은 바로 n++은 한번돌고 난 후 올라간다
    $(".result").text(n);
  }); //ex1

  $(".ex2 button").click(function () {
    let result = "";
    result += $(".ex2 .chk1:checked").val() ? "사과 ," : "";
    result += $(".ex2 .chk2:checked").val() ? "오렌지 ," : "";
    result += $(".ex2 .chk3:checked").val() ? "바나나 ," : "";
    $(".ex2 .result").text(result);
  }); //ex2

  let fnSetNum = function (t) {
    let num1 = Math.floor(Math.random() * 10);
    $(`.ex3 .q${t} input:nth-of-type(1)`).val(num1);
    let num2 = Math.floor(Math.random() * 10);
    $(`.ex3 .q${t} input:nth-of-type(2)`).val(num2);
  }; //fnsumnum
  fnSetNum(1);
  fnSetNum(2);
  fnSetNum(3);

  $(".ex3 button").click(function (e) {
    e.preventDefault();
    let score = 0;

    let fncheckResult = function (t) {
      let num1 = parseInt($(`.ex3 .q${t} input:nth-of-type(1)`).val());
      let num2 = parseInt($(`.ex3 .q${t} input:nth-of-type(2)`).val());
      let num3 = parseInt($(`.ex3 .q${t} input:nth-of-type(3)`).val());
      return num1 + num2 === num3 ? ++score : (score += 0);
    };

    fncheckResult(1);
    fncheckResult(2);
    fncheckResult(3);

    $(".ex3 .result").text(score);
  });
}); //ready
/*
변수의 위치에 따라서 기능이 다 다르다
 */
