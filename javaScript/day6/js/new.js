{
  document.querySelector(".ex1").addEventListener("submit", (e) => {
    e.preventDefault();

    let arr = document.querySelector(".ex1 input").value.split("");
    let obj = {
      a: 1,
    };
    arr.forEach((v) => {
      if (obj[v]) {
        obj[v]++;
      } else {
        obj[v] = 1;
      }
    });
    console.log(obj);
  });
}

{
  let arr = [
    { name: "김", age: 24, gender: "남" },
    { name: "이", age: 24, gender: "남" },
    { name: "박", age: 24, gender: "여" },
  ];
  document.querySelector(".ex2 button").addEventListener("click", (e) => {
    document.querySelector(".ex2 .result").insertAdjacentHTML = "";
    arr.forEach((o) => {
      /*let p = document.createElement("p");
      p.innerText(`성:${o.name} 나이:${o.age} 성별:${o.gender}`);
      document.querySelector(".ex2 .result").append(p);*/
      /*
        afterbegin :prepend
        beforeend :append
     */
      document
        .querySelector(".ex2 .result")
        .insertAdjacentHTML(
          "beforeend",
          `<p>성:${o.name} 나이:${o.age} 성별:${o.gender}</p>`
        );
    });
  });
}

{
  let arr = [
    { name: "김", age: 24, gender: "남" },
    { name: "이", age: 24, gender: "남" },
    { name: "박", age: 24, gender: "여" },
  ];
  document.querySelector(".ex3 button").addEventListener("click", (e) => {
    e.target.disabled = true;
    document.querySelector(".ex3 .result").innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>이름</th><th>나이</th><th>성별</th>
                </tr>
            <thead>    
            <tbody>
            </tbody>
        </table>    
    `;
    arr.forEach((v) => {
      document.querySelector(".ex3 .result tbody").insertAdjacentHTML(
        "beforeend",
        `
            <tr>
                <td>${v.name}</td>
                <td>${v.age}</td>
                <td>${v.gender}</td>
            </tr>
        `
      );
    });
  });
}

{
  let arr = [
    {
      qestion: "one에 해당하는 숫자를 고르세요",
      radios: [
        { number: "1", value: "o", name: "radio1" },
        { number: "2", value: "x", name: "radio1" },
        { number: "3", value: "x", name: "radio1" },
      ],
    },
    {
      qestion: "two에 해당하는 숫자를 고르세요",
      radios: [
        { number: "1", value: "x", name: "radio2" },
        { number: "2", value: "o", name: "radio2" },
        { number: "3", value: "x", name: "radio2" },
      ],
    },
    {
      qestion: "three에 해당하는 숫자를 고르세요",
      radios: [
        { number: "1", value: "x", name: "radio3" },
        { number: "2", value: "x", name: "radio3" },
        { number: "3", value: "o", name: "radio3" },
      ],
    },
  ];
  arr.forEach((q) => {
    document.querySelector(".ex4 .questions").insertAdjacentHTML(
      "beforeend",
      `
            <div>
                <p>
                <p>${q.qestion}</p>
                <p class='radios'></p>
                </p>
            </div>
          `
    );

    q.radios.forEach((radio) => {
      document
        .querySelector(".ex4 .questions div:last-child p.radios")
        .insertAdjacentHTML(
          "beforeend",
          `<input type='radio' value="${radio.value}" name="${radio.name}">${radio.number}`
        );
    });
  });
  document.querySelector(".ex4 button").addEventListener("click", (e) => {
    let point = 0;
    document.querySelectorAll(".ex4 input:checked").forEach((input) => {
      if (input.value === "o") {
        point++;
      }
      document.querySelector(".ex4 .result").innerText = point;
    });
  });
}
