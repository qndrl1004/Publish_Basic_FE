//콜백함수, 스코프
$(document).ready(function () {
  //예약어 document
  $(".ex1 > button").click(function () {
    let c = parseInt(prompt("나누어질 숫자 뱃살 입력"));
    let d = parseInt(prompt("나눌 숫자 뱃살 입력"));
    let mock = parseInt(c / d);
    let namji = parseInt(c - d * mock);
    alert(`몫은 ${mock} 나머지는 ${namji}`);
  });

  $(".ex2 button").click(function () {
    let a = parseInt($(".ex2 .num1").val());
    let b = parseInt($(".ex2 .num2").val());
    let c = a + b;
    $(".ex2 p").html(`결과:${c}`);
    $(".ex2 .num1").val("");
    $(".ex2 .num2").val("");
  });

  $(".ex3 button")
    .mouseenter(function () {
      $(".ex3 p").html(`창윤이 몸무게 비밀임`);
    })
    .mouseleave(function () {
      $(".ex3 p").html(`창윤이 몸무게 ???`);
    });

  $(".ex4 button").click(function () {
    alert($(".ex4 p").html());
  });

  $(".ex5 button").click(function () {
    let a = $(".ex5 p").html();
    $(".ex5 input").val(a);
  });

  $(".ex6 input").change(function () {
    let a = $(".ex6 input:checked").val();
    $(".ex6 p").html(`성별:${a}`);
  });

  $(".ex7 select").change(function () {
    let a = $(".ex7 select").val();
    $(".ex7 p").html(`${a}`);
  });

  $(".ex8 button").click(function () {
    let a = $(".ex8 .a").val();
    let b = $(".ex8 .b").val();
    let sum1 = parseInt(a + b);

    let c = $(".ex8 .c").val();
    let d = $(".ex8 .d").val();
    let sum2 = parseInt(c + d);

    $(".ex8 div").html(parseInt(sum1 + sum2));
  });

  $(".ex9 button").click(function () {
    let a = parseInt($(".ex9 .container").val());
    let b = parseInt($(".ex9 .grid").val());
    let c = parseInt($(".ex9 .gridn").val());
    let sum = a - b * c;
    let result = sum / (c + 1);
    $(".ex9 div").html(result);
  });

  $(".ex10 button").click(function () {
    var a = $(".ex10 .num1").val();
    var b = $(".ex10 .num2").val();
    var c = $(".ex10 .num3").val();
    var number = parseInt(a) - parseInt(b) * parseInt(c);

    $(".ex10 div").html(`그리드넓이: ${number}`);
  });
});
// 파싱이 끝났을때 렌더링이 시작된다.
// 이벤트는 항상 소문자다.
// 대상이 같을때 이벤트를 이어붙일 수 있다.
// val은 입력값을 가져오고 보낼 수 있다.
// form요소는 바꿀 수 있다(value)가져올 수 있다.
// 못바꾸는 것은 html을 사용한다.
/* 
    ready이벤트는 dom요소에 접속하기 위해서 한다.
    이벤트와 콜백함수는 짝이다.
    스코프는 변수의 범위다.
    메소드는 내장되어 있는 명령어들이다.
*/
