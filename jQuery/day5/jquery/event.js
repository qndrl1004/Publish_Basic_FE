$(function () {
  let fnSlider = function (e, num) {
    let n = num.val();
    $(`.ex${e} img`).hide();
    $(`.ex${e} .img${n}`).css({ display: "block" });
    //active구현
    $(`.ex${e} button`).css({ background: "#FFF", width: "10px" });
    num.css({ background: "aqua", width: "30px" });
    //num.addClass('active') 동적으로 클래스변경할때
    //$(`.ex${e} button`).removeClass('active')
  };

  $(".ex1 button").click(function () {
    fnSlider(1, $(this));
  });

  $(".ex2 button").click(function () {
    fnSlider(2, $(this));
  });

  $(".ex3 button").click(function (e) {
    e.stopPropagation(); //버블링을 막는다
    $(this).parent().siblings("div").removeClass("active");
    $(this).parent().addClass("active");
  });

  $(".ex3 div>div").click(function () {
    $(this).siblings("div").children("button").removeClass("active");
    $(this).children("button").addClass("active");
  });

  $(".ex4 button").click(function () {
    $(this).parent().siblings("p").children("button").removeClass("active");
    $(this).toggleClass("active");
  });
}); //ready

//$(".ex1 .img3").show(); display level을 jquery가 조정
//css의 메소드는 여러개의 css속성 변경시 수정보완이 불편함
//이벤트캡쳐링 이벤트순서대로 행해지는것 부모->자식
//이벤트버블링 자식부터 부모에게 이벤트가 행해진것
