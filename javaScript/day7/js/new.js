{
  let arr = [];
  document.querySelector(".ex1 button").addEventListener("click", (e) => {
    let name = document.querySelector('.ex1 input[type="text"]').value;
    let age = document.querySelector('.ex1 input[type="number"]').value;
    let gender = document.querySelector(".ex1 input:checked").value;

    let obj = { name, age, gender };
    arr.push(obj);
    document.querySelector(".ex1 .result").innerHTML = "";
  });

  document.querySelector(".ex1 .list").addEventListener("click", (e) => {
    arr.forEach((v) => {
      let { name, age, gender } = v;
      document.querySelector(".ex1 .result").insertAdjacentHTML(
        "beforeend",
        `
        <p>
          이름:${name}
          성별:${gender}
          나이:${age}
        </p>
      `
      );
    });
  });
}
