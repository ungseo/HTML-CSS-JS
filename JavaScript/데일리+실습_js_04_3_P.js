const formTag = document.querySelector('#form');

const cardsSection = document.querySelector('#cardsSection');

console.log(cardsSection)
formTag.addEventListener('submit', function (event) {
    event.preventDefault()
    let title = document.querySelector('#title').value;
    let content = document.querySelector('#content'); 
    const article = document.createElement('article');
    article.setAttribute('class', 'col-4')
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'card m-1');
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'card-body');
    const h5Tag = document.createElement('h5');
    h5Tag.setAttribute('class', 'card-title');
    const pTag = document.createElement('p');
    pTag.setAttribute('class', 'card-text');

    h5Tag.innerText = title.value;
    pTag.innerText = content.value;

    article.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(h5Tag);
    div2.appendChild(pTag);
    cardsSection.appendChild(article);

    title = '';
    content.value = '';    
 
})