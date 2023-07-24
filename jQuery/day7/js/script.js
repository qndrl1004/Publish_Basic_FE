$(function () {
  // $(".ex1 button").click(function (e) {
  //   e.preventDefault();
  //   $(".ex1 .result").text("ddd");
  // });

  $("form.ex1").submit(function (e) {
    e.preventDefault();
    let rsp = parseInt($(".ex1 input[type=radio]:checked").val());
    let com = computer();
    let result;

    if (com === 1) {
      switch (rsp) {
        case 1:
          result = "비겼다";
          break;
        case 2:
          result = "이겼다";
          break;
        case 3:
          result = "졌다";
          break;
      }
    } else if (com === 2) {
      switch (rsp) {
        case 1:
          result = "졌다";
          break;
        case 2:
          result = "비겼다";
          break;
        case 3:
          result = "이겼다";
          break;
      }
    } else if (com === 3) {
      switch (rsp) {
        case 1:
          result = "이겼다";
          break;
        case 2:
          result = "졌다";
          break;
        case 3:
          result = "비겼다";
          break;
      }
    }

    $(".ex1 .result").html(`나:${rsp} 컴:${com} 결과:${result}`);
  });
}); //ready

let computer = function () {
  const rand = Math.ceil(Math.random() * 3);
  //Math.round,floor,ceil
  return rand;
};

$(function () {
  let setNum = function (q) {
    let num1 = Math.floor(Math.random() * 10);
    $(`.ex2 .q${q} .num1`).val(num1);
    let num2 = Math.floor(Math.random() * 10);
    $(`.ex2 .q${q} .num2`).val(num2);
  };

  setNum(1);
  setNum(2);
  setNum(3);

  let fbCheckNum = function (q) {
    let num1 = parseInt($(`.ex2 .q${q} .num1`).val());
    let num2 = parseInt($(`.ex2 .q${q} .num2`).val());
    let userNum = parseInt($(`.ex2 .q${q} .usernum`).val());
    if (num1 + num2 === userNum) {
      return true;
    } else {
      return false;
    }
  };

  $(".ex2").submit(function (e) {
    e.preventDefault();
    let result = "";
    let a = fbCheckNum(1);
    let b = fbCheckNum(2);
    let c = fbCheckNum(3);

    if (a === true && b === true && c === true) {
      result = "정답";
    } else {
      result = "모두 정답이 아닙니다";
    }
    $(".ex2 .result").html(`결과:${result}`);
  });
}); //ready

$(function () {
  /*
  무효한값 : undefined, null, NaN, '', false, 0
  부정값 : !(n)
*/
  let n = 1;
  if (n) {
    //n이 유효한 값인가?
    console.log("참");
  } else {
    console.log("거짓");
  }
}); //ready

$(function () {
  $(".ex3").submit(function (e) {
    e.preventDefault();
    let num1 = parseInt($(".ex3 input[name='num1']").val());
    let num2 = parseInt($(".ex3 input[name='num2']").val());
    let op = $(".ex3 select option:selected").val();
    let result = "";
    if (op === "1") {
      result = num1 + num2;
    } else if (op === "2") {
      result = num1 - num2;
    } else {
      result = num1 * num2;
    }

    $(".ex3 .result").html(result);
  });
}); //ready
