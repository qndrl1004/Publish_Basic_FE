$(function () {
  let fnFloatBanner = function () {
    let scry = $(window).scrollTop();
    let scrx = $(window).scrollLeft();
    let winh = $(window).height();
    let winw = $(window).width();
    $(".banner1").css({
      top: scry + winh * 0.5 - 100,
      left: scrx + winw - 120,
    });
    $(".banner2").css({
      top: scry + winh * 0.5 - 100,
      left: scrx + 20,
    });
    $(".banner3").css({
      top: scry + winh * 0.5 - 100,
      left: scrx - 60,
    });
  };
  fnFloatBanner();
  $(window)
    .scroll(function () {
      fnFloatBanner();
    })
    .resize(function () {
      fnFloatBanner();
    });
}); //ready1
