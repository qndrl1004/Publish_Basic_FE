$(function () {
  let x = 0;
  let move = function () {
    x += 1;
    $(`.ex1 .box`).css({ left: x });
    requestAnimationFrame(function () {
      move();
    });
  };
  move();
}); //ready1

$(function () {
  let isStart = true;
  let rfaId;
  let fnScrollMotion = function () {
    if (!isStart) return;
    isStart = false;

    rfaId = requestAnimationFrame(function () {
      console.log(`창윤이 돼지뱃살 160kg`);
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
