$(function () {}); //ready1

$(function () {
  let isStart = true;
  let rfaId;
  let fnScrollMotion = function () {
    if (!isStart) return;
    isStart = false;

    rfaId = requestAnimationFrame(function () {
      let scry = $(window).scrollTop();
      let winh = $(window).height();
      // ex1
      let h = $(".ex1 div").innerHeight();
      let t = $(".ex1").offset().top;
      let meta = 0 + (scry - (t - winh * 0.5 + h * 0.5)) * -2;
      if (meta > 0) meta = 0;
      $(".ex1 div").css({ transform: `translateX(${meta}px)` });
      // ex2
      let h2 = $(".ex2 div").innerHeight();
      let t2 = $(".ex2").offset().top;
      let meta2 = 0 + Math.abs(scry - (t2 - winh * 0.5 + h2 * 0.5)) * 0.8;

      $(".ex2 div").css({ transform: `translateX(${meta2}px)` });
      //ex3
      let h3 = $(".ex3 div").innerHeight();
      let t3 = $(".ex3").offset().top;
      let meta3 = 0 + Math.abs(scry - (t3 - winh * 0.5 + h3 * 0.5)) * 0.8;
      $(".ex3 div").css({ transform: `translateX(${meta3}px)` });
      //ex4
      let h4 = $(".ex4").innerHeight();
      let t4 = $(".ex4").offset().top;
      let meta4 = 50 + Math.abs(scry - (t4 - winh * 0.5 + h4 * 0.5)) * -0.8;
      $(".ex4").css({ "border-radius": `${meta4}%` });
      //ex5
      let h5 = $(".ex5").innerHeight();
      let t5 = $(".ex5").offset().top;
      let meta5 = 1 + Math.abs(scry - (t5 - winh * 0.5 + h5 * 0.5)) * -0.008;
      $(".ex5").css({ opacity: `${meta5}` });
      //ex6
      let h6 = $(".ex6").innerHeight();
      let t6 = $(".ex6").offset().top;
      let meta6 = 1 + Math.abs(scry - (t6 - winh * 0.5 + h6 * 0.5)) * -0.008;
      $(".ex6").css({ opacity: `${meta6}`, scale: `${meta6}` });
      //ex7
      $(".ex7 div").each(function () {
        let h7 = $(this).innerHeight();
        let t7 = $(this).offset().top;
        let meta7 = 1 + Math.abs(scry - (t7 - winh * 0.5 + h7 * 0.5)) * -0.003;
        let meta8 = 0 + Math.abs(scry - (t7 - winh * 0.5 + h7 * 0.5)) * 1;
        $(this).css({
          opacity: `${meta7}`,
          transform: `scale(${meta7})`,
          "border-radius": `${meta8}%`,
        });
      });
      isStart = true;
    });
  };

  fnScrollMotion();

  $(window)
    .scroll(function () {
      fnScrollMotion();
    })
    .resize(function () {
      fnScrollMotion();
    });
}); //ready2
