
    /* 
      회원가입시, 서버에 데이터가 전송되기 전에 js로 비밀번호의 유효성 검사를 진행하고자 한다.
      아래의 조건을 만족하지 않으면, 에러메시지를 화면에 출력하도록 코드를 완성하시오.
      1. password1이 8자를 넘지 않으면 span#warning1 에 '비밀번호는 8자 이상이어야 합니다.' 라는 에러메시지 출력
      2. password2가 password1과 같지 않으면 '비밀번호가 일치하지 않습니다.' 라는 에러메시지 출력
      3. 문제가 없을시 에러메시지 삭제
    */
const formTag = document.querySelector('form');


const is_valid = function (event) {

  const inputPassword = document.querySelector('#password1');
  const confirmPassword = document.querySelector('#password2');
  const span1Tag = document.querySelector('#warning1');
  const span2Tag = document.querySelector('#warning2')

  if (inputPassword.value.length < 8) {
    span1Tag.innerText = '비밀번호는 8자 이상이어야 합니다.';
  }
  else {
    span1Tag.innerText = ''
  }
  if (inputPassword.value != confirmPassword.value) {
    span2Tag.innerText = '비밀번호가 일치하지 않습니다.'
  }
  else {
    span2Tag.innerText = ''
  }

}

formTag.addEventListener('input', is_valid);