{
  /* */
  // arr.push();//뒤에 추가 arr.unshift();//앞에추가 arr.pop()//뒤에 삭제 arr.shift()//앞에 삭제
  // arr.length 배열의 길이
  let dayStr = "월화수목금";
  let dayArr = dayStr.split("");
  let nameStr = "김,이,박,형,먕";
  let nameArr = nameStr.split(",");

  document.querySelector(".ex1 button").addEventListener("click", (e) => {
    let day = dayArr[0];
    dayArr.shift();
    let ran = Math.floor(Math.random() * nameArr.length);
    let name = nameArr[ran];
    nameArr.splice(ran, 1);
    if (dayArr.length === 0) e.target.disabled = true;
    let li = document.createElement("li");
    li.innerText = `${day}요일 청소: ${name}씨`;
    document.querySelector(".ex1 .result").append(li);
  });
}
{
  let dayStr = "월화수목금";
  let dayArr = dayStr.split("");
  let nameStr = "김,이,박,형,먕";
  let nameArr = nameStr.split(",");

  document.querySelector(".ex2 button").addEventListener("click", (e) => {
    e.target.disabled = true;

    for (let i = 0; i < 5; i++) {
      let day = dayArr[0];
      dayArr.shift();

      let ran = Math.floor(Math.random() * nameArr.length);
      let name = nameArr[ran];
      nameArr.splice(ran, 1);

      let li = document.createElement("li");
      li.innerText = `${day}요일 밥: ${name}씨`;
      document.querySelector(".ex2 .result").append(li);
    }
  });
}
{
  let answerArr = ["2", "5", "1"];
  let score = 0;

  document.querySelector(".ex3 button").addEventListener("click", () => {
    document.querySelectorAll(".ex3 input").forEach((num, value) => {
      if (answerArr[value] === num.value) score++;
    });
    document.querySelector(".ex3 .result").innerText = score;
  });
}

{
  let naverArr = [];

  document.querySelector(".ex4 button.add").addEventListener("click", () => {
    naverArr.push(document.querySelector(".ex4 input").value);
  });

  document.querySelector(".ex4 button.print").addEventListener("click", () => {
    naverArr.forEach((e) => {
      let li = document.createElement("li");
      li.innerText = `${e}씨`;
      document.querySelector(".ex4 .result").append(li);
    });
  });
}
