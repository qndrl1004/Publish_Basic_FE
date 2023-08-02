$(function () {
  let fnScrollMotion = function () {
    let scrolly = $(window).scrollTop();
    let winh = $(window).height();

    $(".ex1").each(function () {
      let exn = $(this).height();
      let offtop = $(this).offset().top;
      console.log($(this));
      if (
        scrolly >= offtop - winh * 0.5 + exn ||
        scrolly <= offtop - winh * 0.5
      ) {
        $(this).removeClass("active");
      } else if (scrolly >= offtop - winh * 0.5) {
        $(this).addClass("active");
      }
    });
  };

  fnScrollMotion();

  $(window).scroll(function () {
    fnScrollMotion();
  }); //scroll은 프로그램에 부하를 준다.

  $(window).resize(function () {
    fnScrollMotion();
  });
}); //ready1
