const API_URI = 'https://dog.ceo/api/breeds/image/random'
    
function getDog () {
  // axios를 사용하여 API_URI로 GET 요청을 보낸다.
  axios({
    method: 'get',
    url: API_URI,
  })
  // .then 메서드를 통해 요청이 성공적인 경우의 콜백함수를 정의한다.
  .then(function (response) {
    const dogUri = response.data.message;
  
  // 응답객체의 데이터에서 이미지에 대한 리소스를 img 요소의 src 속성으로 할당한다.
  const dogImg = document.querySelector('img')
  console.log(dogUri)
  dogImg.setAttribute('src', dogUri)
  })
}

const button = document.querySelector('button')
button.addEventListener('click', getDog)