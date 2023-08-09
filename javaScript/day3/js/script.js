{
  document.getElementById("id1").style.background = "red";
  // document.querySelector('id1')
  Array.from(document.getElementsByTagName("a")).forEach((e) => {
    e.style.textDecoration = "none";
  });

  Array.from(document.getElementsByClassName("a")).forEach((e) => {
    e.style.color = "green";
  });
}

{
  document.querySelector(".ex8 button").addEventListener("click", (e) => {
    document.querySelectorAll(".ex8 .category").forEach((category) => {
      let str = "";
      category.querySelectorAll("input:checked").forEach((checkedInput) => {
        str += checkedInput.value;
      });
      category.querySelector(".result").innerText = str;
    });
  });

  document.querySelectorAll(".ex9 button").forEach((button) => {
    button.addEventListener("click", (e) => {
      Array.from(e.target.parentElement.children).forEach((button) => {
        button.style.color = "black";
      });
      e.target.style.color = "red";
    });
  });
}
{
  document.querySelectorAll(".ex10 input").forEach((input) => {
    input.addEventListener("input", (e) => {
      let str = e.target.value;
      let digit = parseInt(e.target.getAttribute("data-n"));
      if (str.length >= digit && e.target.nextElementSibling)
        e.target.nextElementSibling.focus();
    });
  });
}
{
  document.querySelectorAll(".ex11 button").forEach((button) => {
    button.addEventListener("click", (e) => {
      document.querySelectorAll(".ex11 button").forEach((button) => {
        if (button !== e.target) {
          button.classList.remove("active");
        }
      });
      e.target.classList.toggle("active");
    });
  });
}
