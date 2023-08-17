{
  arr = [];
  for (let i = 1; i < 11; i++) {
    arr.push(i);
  }
  document.querySelector(".ex1 .even").addEventListener("click", (e) => {
    let evens = arr.filter((v) => {
      return v % 2 === 0;
    });
    document.querySelector(".ex1 .result").innerHTML = "";
    evens.forEach((v) => {
      document.querySelector(".ex1 .result").append(`${v}`);
    });
  });

  document.querySelector(".ex1 .odd").addEventListener("click", (e) => {
    let odds = arr.filter((v) => {
      return v % 2 != 0;
    });
    document.querySelector(".ex1 .result").innerHTML = "";
    odds.forEach((v) => {
      document.querySelector(".ex1 .result").append(`${v}`);
    });
  });
}

{
  document.querySelector(".ex2 .asc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex2 input").value.split(",");
    arr.sort((a, b) => {
      return a - b;
    });
    document.querySelector(".ex2 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex2 .result").append(`${v},`);
    });
  });

  document.querySelector(".ex2 .desc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex2 input").value.split(",");
    arr.sort((a, b) => {
      return b - a;
    });
    document.querySelector(".ex2 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex2 .result").append(`${v},`);
    });
  });
}

{
  let sortArr = (arr, n1, n2) => {
    arr.sort((a, b) => {
      if (a > b) {
        return n1;
      } else if (a < b) {
        return n2;
      } else return 0;
    });
  };

  document.querySelector(".ex3 .asc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex3 input").value.split("");
    sortArr(arr, 1, -1);
    document.querySelector(".ex3 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex3 .result").append(`${v},`);
    });
  });

  document.querySelector(".ex3 .desc").addEventListener("click", (e) => {
    let arr = document.querySelector(".ex3 input").value.split("");
    sortArr(arr, -1, 1);
    document.querySelector(".ex3 .result").innerHTML = "";
    arr.forEach((v) => {
      document.querySelector(".ex3 .result").append(`${v},`);
    });
  });
}

{
  let arr = [];

  let fnOutput = (arr) => {
    document.querySelector(".ex4 .result").innerHTML = "";
    arr.forEach((v) => {
      let { name, age, gender } = v;
      document.querySelector(".ex4 .result").insertAdjacentHTML(
        "beforeend",
        `
        <li>
          이름:${name},
          나이:${age},
          성별:${gender}
        </li>

      `
      );
    });
  };

  document.querySelector(".ex4").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  document.querySelector(".ex4 .add").addEventListener("click", (e) => {
    e.preventDefault();
    let name = document.querySelector(`.ex4 input[type="text"]`).value;
    let age = document.querySelector(`.ex4 input[type="number"]`).value;
    let gender = document.querySelector(`.ex4 input:checked`).value;
    let obj = { name, age, gender };
    arr.push(obj);

    document.querySelector(".ex4 input[type=text]").focus();
    document.querySelector(".ex4").reset();
    fnOutput(arr);
  });

  document.querySelector(".ex4 .name").addEventListener("click", (e) => {
    e.preventDefault();
    arr.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    document.querySelector(".ex4 input[type=text]").focus();
    document.querySelector(".ex4").reset();
    fnOutput(arr);
  });

  document.querySelector(".ex4 .age").addEventListener("click", (e) => {
    e.preventDefault();
    arr.sort(function (a, b) {
      return a.age > b.age ? -1 : a.age < b.age ? 1 : 0;
    });

    document.querySelector(".ex4 input[type=text]").focus();
    document.querySelector(".ex4").reset();
    fnOutput(arr);
  });

  document.querySelector(".ex4 .men").addEventListener("click", (e) => {
    e.preventDefault();
    let newArr = arr.filter((v) => v.gender === "남");
    fnOutput(newArr);
  });

  document.querySelector(".ex4 .women").addEventListener("click", (e) => {
    e.preventDefault();
    let newArr = arr.filter((v) => v.gender === "여");
    fnOutput(newArr);
  });
}
