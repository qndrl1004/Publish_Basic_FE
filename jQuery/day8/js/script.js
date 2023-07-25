$(function () {
  $(".ex1").submit(function (e) {
    e.preventDefault();
    let num = parseInt($(".ex1 .num").val());
    let result = num > 0 ? "true" : "false";
    if (num <= 0) {
      $(".ex1 .num").val("");
    }
    $(".result1").text(result);
  }); //ex1

  $(".ex2").submit(function (e) {
    e.preventDefault();
    let num = parseFloat($(".ex2 .num").val());
    let result = num >= 90 ? "A" : num >= 80 && num < 90 ? "B" : "C";
    $(".ex2 .num").val("");
    $(".result2").text(result);
  }); //ex2

  $(".ex3").submit(function (e) {
    e.preventDefault();
    let num1 = parseFloat($(".ex3 .num1").val());
    let num2 = parseFloat($(".ex3 .num2").val());
    let select = $(".ex3 option:selected").val();
    if (num2 === 0 && select === "/") {
      alert("잘못된 숫자입니다.");
      return;
    }
    let result =
      select === "+"
        ? num1 + num2
        : select === "-"
        ? num1 - num2
        : select === "*"
        ? num1 * num2
        : num1 / num2;

    $(".ex3 .result3").html(result);
  }); //ex3
}); //ready

$(function () {
  let fnSetNum = function (q) {
    let num1 = Math.floor(Math.random() * 10);
    $(`.ex4 .q${q} .num1`).val(num1);
    let num2 = Math.floor(Math.random() * 10);
    $(`.ex4 .q${q} .num2`).val(num2);
  }; //fnsumnum
  fnSetNum(1);
  fnSetNum(2);

  let fncheckResult = function (q) {
    let num1 = parseInt($(`.ex4 .q${q} .num1`).val());
    let num2 = parseInt($(`.ex4 .q${q} .num2`).val());
    let num3 = parseInt($(`.ex4 .q${q} .num3`).val());
    return num1 + num2 === num3 ? true : false;
  };

  $(".ex4").submit(function (e) {
    e.preventDefault();
    let result =
      fncheckResult(1) === true && fncheckResult(2) === true ? true : false;
    $(".ex4 p.result").text(result);
  });
}); //ready2

$(function () {
  let fnSetNum = function (q) {
    let num1 = Math.floor(Math.random() * 10);
    $(`.ex5 form:nth-of-type(${q}) input:nth-child(1)`).val(num1);
    let num2 = Math.floor(Math.random() * 10);
    $(`.ex5 form:nth-of-type(${q}) input:nth-child(2)`).val(num2);
  }; //fnsumnum

  fnSetNum(1);
  fnSetNum(2);

  let fnSubmit = function (evt, el) {
    evt.preventDefault();
    let num1 = parseInt(el.children("input:nth-child(1)").val());
    let num2 = parseInt(el.children("input:nth-child(2)").val());
    let num3 = parseInt(el.children("input:nth-child(3)").val());
    let result = num3 === num1 + num2 ? "정답" : "오답";
    el.children("p").text(result);
  };

  $(".ex5 form").submit(function (e) {
    fnSubmit(e, $(this));
  });
}); //ready3

$(function () {
  //이항연산자
  $(".ex6").submit(function (e) {
    e.preventDefault();
    let str = $(".ex6 input").val();
    $(".ex6 .result").html(str && "<button>버튼</button>");
  });
  /*
  let a =1
  let result = a === &&'a는 1입니다.'
  console.log(result) // false 출력
  */

  /*
  let a = 1
  let result = a && 'a는 1입니다.'
  console.log(result)
  */

  /*
  let a
  let result = a&& 'a는 1입니다.'
  console.log(result)
   */

  /*
  let a = true
  let result = !a && 'a는 1입니다.'
  console.log(result)
   */
}); //ready4
