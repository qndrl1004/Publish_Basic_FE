$(function () {
  $("#range").bind("input", function () {
    let n = $("#range").val();
    $(".range").html(n);
  }); //click도 가능;
}); //ready
