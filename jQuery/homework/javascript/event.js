$(function () {
  $(".app nav button").click(function () {
    $(".app nav button").removeClass("active");
    $(this).addClass("active");

    $(".app section").hide();
    let section = $(this).val();
    $(section).show();
    $(".app form")[0].reset();
    $(".app form")[1].reset();
    $(".result_percent,.result_bmi").hide();
  }); //tap menu

  $(".percent form").submit(function (e) {
    e.preventDefault();
    let num1 = parseInt($(".num1").val());
    let num2 = parseInt($(".num2").val());
    let result = (num2 / num1) * 100;
    $(".result_percent").show();
    $(".result_percent").html(result);
  }); // %계산

  $(".percent button[type=reset]").click(function () {
    $(".result_percent").hide();
  }); // 초기화

  $(".bmi form").submit(function (e) {
    e.preventDefault();
    let gender = $(".bmi form input[type=radio]:checked").val();
    let kg = parseInt($(".bmi .kg").val());
    let cm = parseInt($(".bmi .cm").val());
    let bmi = (kg / ((cm / 100) * (cm / 100))).toFixed(2);
    let result;

    if (("men" === gender && bmi < 15) || ("fmen" === gender && bmi < 20)) {
      result = "red";
    } else if (
      ("men" === gender && 15 <= bmi && bmi < 20) ||
      ("fmen" === gender && 20 <= bmi && bmi < 25)
    ) {
      result = "coral";
    } else if (
      ("men" === gender && 20 <= bmi && bmi < 25) ||
      ("fmen" === gender && 25 <= bmi && bmi < 30)
    ) {
      result = "green";
    } else if (
      ("men" === gender && 25 <= bmi && bmi < 30) ||
      ("fmen" === gender && 30 <= bmi && bmi < 35)
    ) {
      result = "yellow";
    } else {
      result = "blue";
    }
    $(".result_bmi").show();
    $(".result_bmi p").text(`나의 bmi결과 ${bmi}`);
    $(".result_bmi p").css({ color: result });
  }); //click
  $(".bmi button[type=reset]").click(function () {
    $(".result_bmi").hide();
  });
}); //ready
