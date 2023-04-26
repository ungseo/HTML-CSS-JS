const movie_URI = 'https://api.themoviedb.org/3/movie/popular?api_key=1364e77848f05634250c844ede074da6&language=en-US&page=1'
const ul = document.querySelector('ul');
axios({
    method: 'get',
    url: movie_URI,
})
.then(function(response) {
    response.data.results.forEach(function (ele) {
        const li = document.createElement('li');
        li.innerText = ele.original_title;
        ul.appendChild(li);
    })
})