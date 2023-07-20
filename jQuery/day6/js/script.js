$(function () {
  $(".ex1 button").click(function () {
    let a = $(".ex1 input").val();
    let result;
    if (a === "1") {
      result = "true";
      //$(".ex1 .result").html("참");
    } else {
      result = "false";
      //$(".ex1 .result").html("거짓");
    }
    $(".ex1 .result").html(result);
  }); //click

  $(".ex2 button").click(function () {
    let a = $(".ex2 input").val();
    let result;
    if (a === "1") {
      result = "true";
    } else if (a === "3") {
      result = "true";
    } else if (a === "9") {
      result = "true";
    } else {
      result = "false";
    }
    $(".ex2 .result").html(result);
  }); //click

  $(".ex3 button").click(function () {
    let a = parseInt($(".ex3 input").val());
    let result;
    if (a < 5 || a > 10) {
      result = "true";
    } else {
      result = "false";
    }
    $(".ex3 .result").html(result);
  }); //click

  $(".ex4 button").click(function () {
    let a = parseInt($(".ex4 input").val());
    let result;
    if (5 <= a && a <= 11) {
      result = "true";
    } else {
      result = "false";
    }
    $(".ex4 .result").html(result);
  }); //click

  $(".ex5 button").click(function () {
    let price = parseInt($(".ex5 select").val());
    let object = $(".ex5 select option:selected").html();
    let quantity = parseInt($(".ex5 input:checked").val());
    let age = parseInt($(".ex5 input[type=number]").val());
    let fullPrice = price * quantity;
    let result;

    if (age > 19 && object === "담배") {
      result = `${object}는 ${fullPrice}입니다.`;
    } else if (age < 19 && object === "담배") {
      result = `연령이${age}입니다. 담배구입이 불가능합니다.`;
    } else {
      result = `${object}는 ${fullPrice}입니다.`;
    }

    $(".ex5 .result").html(result);
  }); //click

  $(".ex6 button").click(function () {
    let a = parseInt($(".ex6 input").val());
    let even = 0;
    let result;
    if (a >= 100 && a <= 200 && even === a % 2) {
      result = "true";
    } else {
      result = "false";
    }
    $(".ex6 .result").html(result);
  }); //click

  $(".ex7 button").click(function () {
    let score = parseInt($(".ex7 input[type=number]").val());
    let age = $(".ex7 input[type=radio]:checked").val();
    let result;
    if (("adult" === age && score >= 80) || ("kid" === age && score >= 60)) {
      result = "합격";
    } else {
      result = "불합격";
    }
    $(".ex7 .result").html(result);
  }); //click

  $(".ex8 button").click(function () {
    let s = $(".ex8 input[type=radio]:checked").val();
    let kg = parseInt($(".ex8 input[name=kg]").val());
    let m = parseInt($(".ex8 input[name=m]").val());
    let bmi = kg / ((m / 100) * (m / 100));
    let result;

    if ("men" === s && bmi < 15) {
      result = "마름";
    } else if ("men" === s && 15 <= bmi && bmi < 20) {
      result = "저체중";
    } else if ("men" === s && 20 <= bmi && bmi < 25) {
      result = "적정";
    } else if ("men" === s && 25 <= bmi && bmi < 30) {
      result = "과체중";
    } else {
      result = "비만";
    }

    if ("fmen" === s && bmi < 20) {
      result = "마름";
    } else if ("fmen" === s && 20 <= bmi && bmi < 25) {
      result = "저체중";
    } else if ("fmen" === s && 25 <= bmi && bmi < 30) {
      result = "적정";
    } else if ("fmen" === s && 30 <= bmi && bmi < 35) {
      result = "과체중";
    } else {
      result = "비만";
    }
    $(".ex8 .result").html(result);
  }); //click
}); //ready
/*
    조건문법
    if(condition){할일} 
    if(){}else{}
    if(){}else if(){}else{}

    비교연산자
    a >,<,>=,<=,===,!==b

    논리연산자
    &&(and),||(or),
    and,or을 한 조건에서 사용할때는 괄호()묶어써야한다.
 */
