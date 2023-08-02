$(function () {
  $(".ex1 button").click(function () {
    $(".ex1 div").each(function () {
      let bg = $(this).attr("data-bg");
      $(this).css({ background: bg }); //순번에 의한 this 클릭과 다르다.
    });
  }); //click
}); //ready1

$(function () {
  let fnSetbg = function (b) {
    let n = b.val();
    $(`.ex2 .group${n} .box`).each(function () {
      let bg = $(this).attr("data-bg");
      $(this).css({ background: bg });
    });
  };
  $(".ex2 button").click(function () {
    fnSetbg($(this));
  }); //click
}); //ready2

$(function () {
  $(".ex3 button").click(function () {
    $(".ex3 button").css({ color: "black" });
    $(this)
      .parent()
      .children("button")
      .each(function () {
        let n = $(this).val();
        $(this).css({ color: n });
      });
  });
}); //ready3

$(function () {
  $(".ex4 .num").each(function () {
    let num = Math.floor(Math.random() * 10);
    $(this).val(num);
  });

  $(".ex4 .input").bind("input", function () {
    let sum = 0;
    let user = parseInt($(this).val());
    $(".ex4 .num").each(function () {
      sum += parseInt($(this).val());
    });
    let result = user === sum ? "결과:정답" : "결과:오답";
    $(".ex4 .result").text(result);
  });
}); //ready4

$(function () {
  let result = 0;
  $(".ex5 .q").click(function () {
    $(".ex5 .num").each(function () {
      let num = parseInt(Math.floor(Math.random() * 10));
      $(this).val(num);
      result += num;
    });
  });

  $(".ex5 .r").click(function () {
    $(".ex5 .result").text(result);
    result = 0;
  });
}); //ready5

$(function () {
  $(".ex6 .q").each(function () {
    $(this).html(`
      <input class="num1" readonly value="${parseInt(
        Math.floor(Math.random() * 10)
      )}"> +
      <input class="num2" readonly value="${parseInt(
        Math.floor(Math.random() * 10)
      )}"> 
      = <input class="sum">
    `);
  });

  $(".ex6 button").click(function () {
    let result = 0;
    $(".ex6 .q").each(function () {
      let num1 = parseInt($(this).children(".num1").val());
      let num2 = parseInt($(this).children(".num2").val());
      let sum = parseInt($(this).children(".sum").val());
      if (num1 + num2 === sum) result++;
    });
    $(".ex6 .result").text(result);
  });
}); //ready6

$(function () {
  $(".ex7 .p").each(function () {
    $(this).html(`
      <button>버튼</button>
      <button>버튼</button>
      <button>버튼</button>
      <button>버튼</button>
      <button>버튼</button>
    `);
  });

  $(".ex7 button").click(function () {
    $(this).siblings("button").css({ color: "black" });
    $(this).css({ color: "red" });
  });
}); //ready7

$(function () {
  $(".ex8 button").click(function () {
    let score = 0;
    let logic = false;
    let num = 1;
    $(`.ex8 input:checked`).each(function () {
      if ($(this).val() === "정답") {
        score += 1;
        logic = true;
      } else {
        logic = false;
      }

      if (logic) {
        $(`.ex8 p.q${num}`).css({ background: "blue" });
        num++;
      } else {
        $(`.ex8 p.q${num}`).css({ background: "red" });
        num++;
      }
    });
    $(".ex8 .result").text(score);
  });
}); //ready8

$(function () {
  $(".ex9 button").click(function () {
    let result = "";
    $(".ex9 input:checked").each(function () {
      result += $(this).val() + ",";
    });
    $(".ex9 .result").text(result);
  });
});

$(function () {
  let point = 0;
  $(".ex10 button").click(function () {
    $(".ex10 .q").each(function () {
      let result = 0;
      $(this)
        .children("input:checked")
        .each(function () {
          if ($(this).val() === "정답") {
            result++;
          } else {
            result--;
          }
        });
      let total = parseInt($(this).attr("data-cnt"));
      if (result === total) {
        point++;
      }
    });
    $(".ex10 .result").text(point);
  });

  $(function () {
    $(".ex11 button").click(function () {
      $(".ex11 .q").each(function () {
        let result = "";
        $(this)
          .children("input:checked")
          .each(function () {
            result += $(this).val();
          });
        $(this).children(".result").text(result);
      });
    });
  }); //ready11

  $(function () {
    $(".ex12 > div").mouseenter(function () {
      $(this)
        .children("div")
        .each(function () {
          let bg = $(this).text();
          $(this).css({ background: bg });
        });
    });

    $(".ex12 > div").mouseleave(function () {
      $(this).children("div").css({ background: "none" });
    });
  }); //ready12
});
