$(function () {
  let setNum = function (e, num) {
    //let n = e.val();
    let n = e.attr("data-num");
    $(`.ex${num} .result`).html(`선택한 숫자는 ${n}입니다.`);
  };

  let numColor = function (e, num) {
    $(`.ex${num} button`).css({ color: "000", "font-style": "normal" });
    e.css({ color: "#F00", "font-style": "italic" });
  };

  let cImage = function (e, num) {
    let n = e.val();
    $(`.ex${num} img${n}`).show(); //hide()
    $(`.ex${num} button`).css({ color: "000", "font-style": "normal" });
    e.css({ color: "#F00", "font-style": "italic" });
  };

  $(".ex1 button").click(function () {
    setNum($(this), 1);
  });

  $(".ex2 a").click(function (e) {
    e.preventDefault();
    setNum($(e.target), 2);
  });

  $(".ex3 button").click(function () {
    numColor($(this), 3);
  });

  $(".ex4 button").click(function () {
    numColor($(this), 4);
  });

  var fnImage = function (el, n) {
    $(`.ex${n} img`).hide();
    $(`.ex${n} button`).css({ color: "black", "font-weight": "normal" });
    el.css({ color: "red", "font-weight": "bold" });
    var img = el.attr("class");
    $(`.ex${n} .${img}`).show();
  };

  $(".ex5 button").click(function (e) {
    fnImage($(e.target), 5);
  });

  $(".ex6 button").click(function (e) {
    fnImage($(e.target), 6);
  });
}); //ready
//이벤트리스너
//value 속성은 폼요소에만
//data-? 커스텀 속성을 만들수있는 데이터셋
