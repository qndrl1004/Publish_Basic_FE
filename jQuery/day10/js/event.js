$(function () {
  $(".ex1 button").click(function () {
    throw "창윤이뱃살";
  });

  $(".ex2 button").click(function () {
    try {
      alert(a);
    } catch (error) {
      alert("a가없다");
    }
  });

  /*
  let fn = function(){
    alert()
  }
  let fn = new Function('alert()')
  */

  $(".ex3 button").click(function () {
    let num1 = $(".ex3 .num1").val();
    let num2 = $(".ex3 .num2").val();
    let op = $("ex3 select").val();
    let str = num1 + op + num2;

    try {
      let fn = new Function(`return ${str}`);
      result = fn();
    } catch (error) {
      result = "잘못된결과";
    }
    $(".ex3.result").text(result);
  });
});

$(function () {
  let sum = "";
  $(".calc .str").click(function () {
    let click = $(this).text();
    sum += click;
    $(".output").text(sum);
  }); //click

  $(".calc .clear").click(function () {
    sum = "";
    $(".output").text("");
  }); //clear

  $(".calc .del").click(function () {
    sum = sum.slice(0, -1);
    $(".output").text(sum);
  }); //delete

  $(".calc .result").click(function () {
    try {
      let fn = new Function(`return ${sum}`);
      $(".output").text(fn);
    } catch (error) {
      alert("계산식이 잘못되었습니다.");
    }
  }); //result
}); //calc
