{
  const arr = ["창윤이", "돼지", "껍대기"];

  // document.querySelector(".ex1 button").addEventListener("click", () => {
  //   // document.querySelector(".ex1 .result").append(arr[0]);
  //   // document.querySelector(".ex1 .result").append(arr[1]);
  //   // document.querySelector(".ex1 .result").append(arr[2]);

  //   arr.forEach((a) => {
  //     document.querySelector(".ex1 .result").append(a);
  //   });
  // });

  document.querySelector(".ex1 button").addEventListener("click", () => {
    arr.forEach((a) => {
      document.querySelector(".ex1 .result").append(a);
    });
  });
}

{
  const btnArr = document.querySelectorAll(".ex2 button");
  btnArr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelector(".ex2 .result").innerHTML = e.target.value;
    });
  });
}

{
  document.querySelector(".ex3 button").addEventListener("click", (e) => {
    document.querySelectorAll(".ex3 div").forEach((div) => {
      div.style.backgroundColor = "pink";
    });
  });
}

{
  document.querySelectorAll(".ex4 div").forEach((div) => {
    div.addEventListener("click", (e) => {
      document.querySelectorAll(".ex4 div").forEach((div) => {
        div.classList.toggle("active");
      });
    });
  });
}

{
  document.querySelector(".ex5 button").addEventListener("click", () => {
    document.querySelectorAll(".ex5 div").forEach((div) => {
      div.style.backgroundColor = div.getAttribute("data-color");
    });
  });
}

{
  document.querySelectorAll(".ex6 input").forEach((e) => {
    let ren = parseInt(Math.floor(Math.random() * 10));
    e.value = ren;
  });
  document.querySelector(".ex6 button").addEventListener("click", () => {
    let sum = 0;
    document.querySelectorAll(".ex6 input").forEach((e) => {
      sum += parseInt(e.value);
    });
    document.querySelector(".ex6 .result").innerHTML = sum;
  });
}
