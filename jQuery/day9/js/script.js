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
}); //ready3
/*
변수의 위치에 따라서 기능이 다 다르다
 */

$(function () {
  let num = 1;
  let add = 1;
  $(".ex4 .btn1").click(function () {
    num += add;
    add++;
    $(".ex4 .result").append(` ${num} `);
  });

  $(".ex4 .btn2").click(function () {
    num = 1;
    add = 1;
    $(".ex4 .result").html("1");
  });
}); //ready4

$(function () {
  let num = 1;

  $(".ex5 .increase").click(function () {
    num++;
    // if (num > 5) {
    //   num = 5;
    // }
    num = num > 5 ? 5 : num++;
    $(".ex5 .result").html(num);
  });

  $(".ex5 .decrease").click(function () {
    num--;
    num = num <= 0 ? 1 : num--;
    $(".ex5 .result").html(num);
  });
}); //ready5

$(function () {
  let num = 1;

  $(".ex6 .increase").click(function () {
    num++;
    num = num > 5 ? 1 : num;
    $(".ex6 .result").html(num);
  });

  $(".ex6 .decrease").click(function () {
    num--;
    num = num <= 0 ? 1 : num;
    $(".ex6 .result").html(num);
  });
}); //ready6

$(function () {
  let num = 1;
  let carousel = function () {
    if (num > 5) num = 1;
    if (num <= 0) num = 5;
    $("img").stop().fadeOut();
    $(`.img${num}`).stop().fadeIn();
    $(".btns button").removeClass("active");
    $(`.btn${num}`).addClass("active");
  };

  $(".carousel .next").click(function () {
    num++;
    carousel();
  });

  $(".carousel .prev").click(function () {
    num--;
    carousel();
  });

  $(".btns button").click(function () {
    num = parseInt($(this).val());
    carousel();
  });
}); //ready carousel

$(function () {
  let sum = 0;
  $(".ex8 button").click(function () {
    num = parseInt($(this).val());
    sum += num;
    $(".result").html(sum);
  });
}); //ready7
