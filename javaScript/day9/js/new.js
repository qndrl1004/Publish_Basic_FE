{//ex1
  arr = []
  for (i = 1; i <= 10; i++) { arr.push(i) }

  document.querySelector('.ex1 .even').addEventListener('click', e => {
    let evenArr = arr.filter((v) => {
      return v % 2 === 0
    })
    document.querySelector('.ex1 .result').innerHTML = ''
    evenArr.forEach(v => {
      document.querySelector('.ex1 .result').append(`${v},`)
    })
  })//click

}//ex1

{//ex2
  document.querySelector('.ex2 .asc').addEventListener('click', e => {
    let arr = document.querySelector('.ex2 input').value.split(',')
    arr.sort((a, b) => {
      return a - b
    })
    document.querySelector('.ex2 .result').innerHTML = ''
    arr.forEach((v) => {
      document.querySelector('.ex2 .result').append(`${v},`)
    })//forEach
  })//click

  document.querySelector('.ex2 .desc').addEventListener('click', e => {
    let arr = document.querySelector('.ex2 input').value.split(',')
    arr.sort((a, b) => {
      return b - a
    })
    document.querySelector('.ex2 .result').innerHTML = ''
    arr.forEach((v) => {
      document.querySelector('.ex2 .result').append(`${v},`)
    })//forEach
  })//click

}

{//ex3
  let fnSortArr = (arrName, n1, n2) => {
    arrName.sort((a, b) => {
      if (a > b) return n1;
      else if (a < b) return n2;
      else return 0
    })//sort
  }//fnSortArr

  document.querySelector('.ex3 .asc').addEventListener('click', e => {
    let arr = document.querySelector('.ex3 input').value.split('')
    fnSortArr(arr, 1, -1)
    console.log(arr);
  })//click
}//ex3

{//ex4
  var arr = [
    { id: 1, name: '김', age: 24, gender: '남' },
    { id: 6, name: '김', age: 35, gender: '녀' },
    { id: 2, name: '이', age: 23, gender: '녀' },
    { id: 3, name: '박', age: 35, gender: '남' },
    { id: 4, name: '황', age: 5, gender: '녀' },
    { id: 5, name: '최', age: 13, gender: '남' },
  ]
  var arrCopy = [...arr]

  const fnPushArr = (evt) => {
    evt.preventDefault()
    let name = document.querySelector('.ex4 input[type=text]').value
    let age = document.querySelector('.ex4 input[type=number]').value
    let gender = document.querySelector('.ex4 input:checked').value
    let id = Date.now()
    let obj = { id, name, age, gender }
    arr.push(obj)
    arrCopy = [...arr]
    evt.target.reset()
    document.querySelector('.ex4 input[type=text]').focus()
    console.log(arr)
  }//fnPushArr

  const fnPrintArr = () => {
    document.querySelector('.ex4 .result').innerHTML = ''
    arrCopy.forEach((v) => {
      let { id, name, age, gender } = v
      document.querySelector('.ex4 .result').insertAdjacentHTML('beforeend', `
        <li>
          이름:${name},성별:${age},나이:${gender}, 
          <button value="${id}" type="button">버튼</button>
          ${v.id}
        </li>
      `)
      document.querySelector('.ex4 .result li:last-child button')
        .addEventListener('click', e => {
          let btnId = parseInt(e.target.value)
          arr = arr.filter(v => {
            return btnId !== v.id
          })
          arrCopy = [...arr]
          fnPrintArr()
        })//click
    })//forEach
  }//fnPrintArr

  const fnSortArr = (key) => {
    arrCopy.sort((a, b) => {
      if (a[key] > b[key]) return 1
      else if (a[key] < b[key]) return -1
      else 0
    })//sort
  }//fnSortArr

  fnPrintArr()

  document.querySelector('.ex4').addEventListener('submit', e => {
    fnPushArr(e)
    fnPrintArr()
  })//ex4 submit

  document.querySelector('.ex4 .man').addEventListener('click', e => {
    arrCopy = arr.filter((v) => {
      return v.gender === '남'
    })//filter
    fnPrintArr()
  })//man click

  document.querySelector('.ex4 .woman').addEventListener('click', e => {
    arrCopy = arr.filter((v) => {
      return v.gender === '녀'
    })//filter
    fnPrintArr()
  })//woman click

  document.querySelector('.ex4 .age').addEventListener('click', e => {
    fnSortArr('age')
    fnPrintArr()
  })//age click

  document.querySelector('.ex4 .name').addEventListener('click', e => {
    fnSortArr('name')
    fnPrintArr()
  })//age click

  document.querySelector('.ex4 .search').addEventListener('input', e => {
    arrCopy = arr.filter((v) => {
      return v.name.includes(e.target.value)
    })//filter
    if(arrCopy.length!==0) fnPrintArr()
    else document.querySelector('.ex4 .result').innerText = '검색결과가 존재하지 않습니다'
  })//input

}//ex4


