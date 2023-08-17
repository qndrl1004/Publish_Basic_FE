{
  let arr = ["가", "나", "다"];
  let arrCopy = [...arr]; //전개연산자
  let obj = { 이름: "홍길동", 나이: "25" };
  let objCopy = { ...obj };
}

{
  let arr = [1, 2, 3];
  let newArr = arr.map((v) => {
    return (v += 1);
  });
  console.log(newArr);
}
