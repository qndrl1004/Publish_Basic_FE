// window.addEventListener("load", function () {});
// document.addEventListener("DOMContentLoaded", function () {
// }); //ready event defer 가 있으면 병렬처리가 가능해서  html 랜더링이 끝나고 script 실행

document.querySelector(".ex1 button").addEventListener("click", function () {
  alert("창윤이 돼지");
});

document.querySelector(".ex2 button").addEventListener("click", () => {
  const a = "창윤이 삼겹살";
  alert(a);
});
