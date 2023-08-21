window.qs = (query) => {
  return document.querySelector(query)
}//qs

window.qsa = (query) => {
  return document.querySelectorAll(query)
}//qs

{/* ex1 */
  /* 
    let arr 
    if( localStorage.getItem('arrStorage') ){
      arr = JSON.parse(localStorage.getItem('arrStorage'))
    }else{
      arr = []
    }
   */

  let arr = (localStorage.getItem('arrStorage'))
    ? JSON.parse(localStorage.getItem('arrStorage'))
    : []

  let print = () => {
    qs('.ex1 .result').innerHTML = ''
    arr.forEach(v => {
      qs('.ex1 .result').insertAdjacentHTML('beforeend', `
        <p>${v}</p>
      `)
    })//forEach
  }//print

  print()

  qs('.ex1').addEventListener('submit', e => {
    e.preventDefault()
    arr.push(qs('.ex1 input').value)

    let arrToJson = JSON.stringify(arr)
    localStorage.setItem('arrStorage', arrToJson)

    print()
  })//submit

}//ex1

{/* ex2 */
  let arr = localStorage.getItem('todoArrLocal')
    ? JSON.parse(localStorage.getItem('todoArrLocal'))
    : []
  let copyArr = [...arr]

  const fnPrint = () => {
    qs('.ex2 .result').innerHTML = ''
    if (copyArr.length === 0) {
      qs('.ex2 .result').innerText = '등록된 일정이 없어요.'
      return
    }//if
    copyArr.forEach(v => {
      let { id, title, date, time } = v
      qs('.ex2 .result').insertAdjacentHTML('beforeend', `
        <p>
          일정 : ${title} <br>
          일자 : ${date} <br>
          시간 : ${time} <br>
          <button value=${id}>삭제</button>
        </p>
        <hr> 
      `)
      qs('.ex2 .result p:last-of-type button').addEventListener('click', e => {
        arr = arr.filter(v => v.id !== parseInt(e.target.value))
        copyArr = [...arr]
        localStorage.setItem('todoArrLocal', JSON.stringify(arr))
        fnPrint()
      })//click
    })//insertHtml
  }//fnPrint

  const fnSortArr = (key) => {
    copyArr.sort((a, b) => {
      if (a[key] > b[key]) return 1
      else if (a[key] < b[key]) return -1
      else return 0
    })
  }//fnSortArr

  fnPrint()

  qs('.ex2 form').addEventListener('submit', e => {
    e.preventDefault()
    let id = Date.now()
    let title = qs('.ex2 .title').value
    let date = qs('.ex2 .date').value
    let time = qs('.ex2 .time').value
    let obj = { id, title, date, time }
    arr.unshift(obj)
    copyArr = [...arr]
    localStorage.setItem('todoArrLocal', JSON.stringify(arr))
    fnPrint()
  })//submit

  qs('.ex2 .search').addEventListener('input', e => {
    copyArr = arr.filter(v => v.title.includes(e.target.value))
    fnPrint()
  })

  qs('.ex2 select').addEventListener('change', e => {
    console.log(e.target.value);
    if (e.target.value === 'latest') {//최신등록순
      copyArr = [...arr]
    } else if (e.target.value === 'reverse') {
      copyArr = [...arr]
      copyArr.reverse()
    } else {
      copyArr = [...arr]
      fnSortArr(e.target.value)
    }
    fnPrint()
  })
}//ex2


{/* ex3 */

  
  if(localStorage.getItem('popup-hide')) {//popup-hide 존재하면
    qs('.ex3').style.display='none'//숨긴다
    let nowSec = Date.now() / 1000 // 사용자가 접속한시간
    let hideSec = parseInt(localStorage.getItem('popup-hide'))/1000 //팝업창 숨기기 체크한 시간
    
    //접속한시간이  팝업숨긴 시간으로부터 하루 지난시간보다 크다라면..
    if(hideSec + 24*60*60 < nowSec){
      qs('.ex3').style.display='block'//보여준다
      localStorage.removeItem('popup-hide')
    }//if
  }else{ //없으면
    qs('.ex3').style.display='block' //보여준다
  }

  qs('.ex3 button').addEventListener('click',e=>{
    qs('.ex3').style.display='none'
    if(qs('.ex3 input[type=checkbox]').checked){
      localStorage.setItem('popup-hide', Date.now())
    }
  })//click

}