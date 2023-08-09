$(function () {
  let isStart = true;
  let rfaId;
  let fnScrollMotion = function () {
    if (!isStart) return;
    isStart = false;

    rfaId = requestAnimationFrame(function () {
      let scry = $(window).scrollTop();
      let winh = $(window).height();

      let t = $(".door-container").offset().top;
      let h = $(".door-container").innerHeight();
      let deg = 90 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.2;
      if (deg < 0) deg = 0;
      $(".door.left").css({ transform: `rotateY(-${deg}deg)` });
      $(".door.right").css({ transform: `rotateY(${deg}deg)` });

      $(".btns button").click(function () {
        $(".cube").removeClass("front left right top bottom back");
        $(".cube").addClass($(this).val());
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

// $(function () {
//   var isStartMotion = true;
//   var rafid;
//   var scrollMotion = function () {
//     if (!isStartMotion) return;
//     isStartMotion = false;
//     rafid = requestAnimationFrame(function () {
//       var scry = $(window).scrollTop();
//       var winh = $(window).height();
//       var t = $(".door-container").offset().top;
//       var h = $(".door-container").innerHeight();

//       var deg = 90 + Math.abs(scry - (t - winh * 0.5 + h * 0.5)) * -0.2;
//       if (deg < 0) deg = 0;
//       $(".door.left").css({ transform: `rotateY(-${deg}deg)` });
//       $(".door.right").css({ transform: `rotateY(${deg}deg)` });

//       isStartMotion = true;
//     });
//   };
//   scrollMotion();
//   $(window)
//     .scroll(function () {
//       scrollMotion();
//     })
//     .resize(function () {
//       scrollMotion();
//     });
// });
