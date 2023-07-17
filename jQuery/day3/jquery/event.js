$(function () {
  function fn(n) {
    let num1 = parseInt($(`.ex${n} input:last-of-type`).val());
    let num2 = parseInt($(`.ex${n} input:first-child`).val());

    let plus = num1 + num2;
    let minus = num1 - num2;
    let multi = num1 * num2;
    let divide = num1 / num2;

    let result = `plus${plus} ,minus${minus}, multi${multi}, divide${divide}`;
    $(`.ex${n} p:last-child`).html(result);
  }
  $(".ex1 button").click(function () {
    fn(1);
  });
  $(".ex2 button").click(function () {
    fn(2);
  });
});
//-----------------------------------------------------------------------------------------------
$(function () {
  let fnSum = function (num1, num2) {
    let result = num1 + num2;
    return result;
  };
  let fnMinus = function (num1, num2) {
    let result = num1 - num2;
    return result;
  };
  $(".ex3 button:nth-of-type(1)").click(function () {
    let num1 = parseInt($(".ex3 input:nth-child(1)").val());
    let num2 = parseInt($(".ex3 input:nth-child(2)").val());
    let sum = fnSum(num1, num2);
    $(`.ex3 p:last-child`).html(sum);
  });

  $(".ex3 button:nth-of-type(2)").click(function () {
    let num1 = parseInt($(".ex3 input:nth-child(1)").val());
    let num2 = parseInt($(".ex3 input:nth-child(2)").val());
    let minus = fnMinus(num1, num2);
    $(`.ex3 p:last-child`).html(minus);
  });
});
//--------------------------------------------------------------------------------------------
$(function () {
  let fn = function (n) {
    let num = parseInt($(`.ex${n} input`).val());
    alert(num * num * num);
  };

  $(".ex4 button").click(function () {
    let n = parseInt($(".ex4 input").val());
    fn(n);
  });

  $(".ex5 button").click(function () {
    let n = parseInt($(".ex5 input").val());
    fn(n);
  });
});
//--------------------------------------------------------------------------------------------
$(function () {
  let sum = function (a, b, c) {
    let sum = a + b + c;
    return sum;
  };

  let avg = function (a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
  };

  $(".ex6 button").click(function () {
    let a = parseInt($(".ex6 input:nth-of-type(1)").val());
    let b = parseInt($(".ex6 input:nth-of-type(2)").val());
    let c = parseInt($(".ex6 input:nth-of-type(3)").val());
    alert(`${sum(a, b, c)}, ${avg(a, b, c).toFixed(2)}`);
  });
});

$(function () {
  let sum = function (a, b, c) {
    let sum = a + b + c;
    return sum;
  };

  let avg = function (a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
  };

  $(".ex7 button").click(function () {
    let a = parseInt($(".ex7 input:nth-of-type(1)").val());
    let b = parseInt($(".ex7 input:nth-of-type(2)").val());
    let c = parseInt($(".ex7 input:nth-of-type(3)").val());
    alert(`${sum(a, b, c)}, ${avg(a, b, c).toFixed(2)}`);
  });
});
/* 
$(document).ready(funtion(){

})
약식전
*/
