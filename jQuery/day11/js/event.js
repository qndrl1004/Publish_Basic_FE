$(function () {
  let sum = 0;
  $(".ex1 button").click(function () {
    clearTimeout(timeoutid); //연타가 가능할때 사용
    let timeoutid = setTimeout(function () {
      $(".ex1 .result").html(++sum);
    }, 2000);
  });
}); //ready1

$(function () {
  $(".ex2 button").click(function () {
    //slideDown
    //slideUp
    $(".ex2 .result").stop().slideToggle();
    $(this).attr("disabled", true);
    setTimeout(function () {
      $(".ex2 button").attr("disabled", false);
    }, 300);
  });
}); //ready2

$(function () {
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  $(".ex3 .num1").val(num1);
  $(".ex3 .num2").val(num2);

  $(".ex3 button").click(function () {
    let num3 = parseInt($(".ex3 .num3").val());
    if (num1 + num2 === num3) {
      $(".ex3").css({ background: "blue" });
    } else {
      $(".ex3").css({ background: "red" });
    }
    setTimeout(function () {
      alert("결과나옴");
    }, 1);
  });
}); //ready3

$(function () {
  $(".ex4 button").click(function () {
    $(".ex4 .box").show();
    setTimeout(function () {
      $(".ex4 .box").css({ background: "red" });
    }, 1);
  });
}); //ready4

$(function () {
  let sum = 0;
  let plus;
  $(".ex5 .increase").click(function () {
    clearInterval(plus); //반복(증가,감소)방지,스캐줄러중복방지
    plus = setInterval(function () {
      $(".ex5 .result").html(++sum);
    }, 1000);
  });
  $(".ex5 .decrease").click(function () {
    clearInterval(plus);
    plus = setInterval(function () {
      $(".ex5 .result").html(--sum);
    }, 1000);
  });
}); //ready5

$(function () {
  let sum = 1;
  let intervel;
  let timeout;
  let fn = function (p) {
    clearTimeout(timeout); //반복(증가,감소)방지,스캐줄러중복방지
    clearInterval(intervel);
    timeout = setTimeout(function () {
      intervel = setInterval(function () {
        $(".ex6 .result").html((sum += p));
      }, 1000);
    }, 4000);
  };
  $(".ex6 .plus").click(function () {
    fn(1);
  });

  $(".ex6 .minus").click(function () {
    fn(-1);
  });
}); //ready6

$(function () {
  let timeStop;
  let isStart = false;

  let resetTimer = function () {
    clearInterval(timeStop);
    time = 0;
    $(".ex7 input").val("").attr("readonly", false);
    isStart = false;
    $(".ex7 button").hide();
    $(".ex7 .result").html(time);
  };

  $(".ex7").submit(function (e) {
    e.preventDefault();
    let time = $(".ex7 input").val();
    if (isStart) return false;
    isStart = true;
    $(".ex7 button").show();
    $(".ex7 input").attr("readonly", true);

    timeStop = setInterval(function () {
      time -= 0.1;
      time = time.toFixed(1);
      if (time <= 0) {
        resetTimer();
      }
      $(".ex7 .result").text(time);
    }, 100);
  });

  $(".ex7 button").click(function () {
    resetTimer();
  });
}); //ready7

$(function () {
  let n;

  setInterval(function () {
    n = Math.ceil(Math.random() * 6);
    $(".ex8 .img1").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 6);
    $(".ex8 .img2").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 6);
    $(".ex8 .img3").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 6);
    $(".ex8 .img4").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 6);
    $(".ex8 .img5").attr("src", `./img/img${n}.jpg`);
    n = Math.ceil(Math.random() * 6);
    $(".ex8 .img6").attr("src", `./img/img${n}.jpg`);
  }, 500);
}); //ready8

$(function () {
  let n = 1;
  let timeoutId;
  let intervelId = setInterval(function () {
    n++;
    canfn();
  }, 2000);

  let autoPlay = function () {
    clearTimeout(timeoutId);
    clearInterval(intervelId);
    timeoutId = setTimeout(function () {
      intervelId = setInterval(function () {
        n++;
        canfn();
      }, 2000);
    }, 5000);
  };

  let canfn = function () {
    if (n > 5) n = 1;
    if (n < 1) n = 5;

    $(".casousel img").stop().fadeOut();
    $(`.casousel .img${n}`).stop().fadeIn();

    $(".btns button").removeClass("active");
    $(`.btns${n}`).addClass("active");

    $(".casousel button").attr("disabled", true);
    setTimeout(function () {
      $(".casousel button").attr("disabled", false);
    }, 400);
  };

  $(".casousel .next").click(function () {
    n++;
    canfn();
    autoPlay();
  });

  $(".casousel .prev").click(function () {
    n--;
    canfn();
    autoPlay();
  });

  $(".btns button").click(function () {
    n = parseInt($(this).val());
    canfn();
    autoPlay();
  });
});
