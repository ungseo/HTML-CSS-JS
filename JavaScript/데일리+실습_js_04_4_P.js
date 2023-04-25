const form = document.querySelector('form')
const ul = document.querySelector('ul')
function addTodo (event) {
  // 이벤트를 취소한다.
  event.preventDefault();


  // 입력 element를 찾고 해당 입력 element의 value 값을 저장한다.
  inputTag = document.querySelector('input')


  // li element를 생성 후 input element의 value 값을 데이터로 저장한다
  const li = document.createElement('li');
  li.innerText = inputTag.value;

  // ul 태그의 자식 태그로 위에서 생성한 li element를 넣는다.
  ul.appendChild(li);

  // 삭제 버튼을 생성 후 li 태그의 자식 태그로 넣는다.
  delbtn = document.createElement('button');
  delbtn.innerText = 'X';
  li.appendChild(delbtn)

  // 삭제 버튼을 클릭하면 해당 li element를 삭제한다
  delbtn.addEventListener('click', function (event) {
    li.remove();

  })

  // li element를 클릭하면 취소선이 토글된다.
  li.addEventListener('click', function (event) {
    li.classList.toggle('done');
  })

  event.target.reset();
}

form.addEventListener('submit', addTodo)