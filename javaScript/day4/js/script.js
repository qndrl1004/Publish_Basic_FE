{
  document.querySelector(".ex1 button").addEventListener("click", (e) => {
    document.querySelector(".ex1 .result").innerText = "";
    for (let i = 10; i >= 1; i--) {
      document.querySelector(".ex1 .result").append(`${i},`);
    }
  });
}

{
  document.querySelector(".ex2 button").addEventListener("click", (e) => {
    document.querySelector(".ex2 .result").innerText = "";
    let num1 = parseInt(document.querySelector(".ex2 .num1").value);
    let num2 = parseInt(document.querySelector(".ex2 .num2").value);
    let sum = 0;
    if (num1 > num2) {
      for (let i = num1; i >= num2; i--) {
        sum += i;
      }
      document.querySelector(".ex2 .result").innerHTML = sum;
    } else {
      for (let i = num1; i <= num2; i++) {
        sum += i;
      }
      document.querySelector(".ex2 .result").innerHTML = sum;
    }
  });
}
