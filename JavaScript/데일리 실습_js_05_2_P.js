
// 이곳에 코드를 작성해 주세요 !
const API_URI = 'https://dog.ceo/api/breeds/image/random'
const button = document.querySelector('button')

const addDogImg = function (event) {
    const img = document.querySelector('img');
    axios({
    method: 'get',
    url: API_URI,
    })
    .then(function (request) {
    console.log(request)
    img.setAttribute('src', request.data.message)
    const h2Tag = document.querySelector('h2');
    h2Tag.innerText = ''
    })
}





button.addEventListener('click', addDogImg);