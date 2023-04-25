
    // 이곳에 코드를 작성합니다
    const formTag = document.querySelector('form')
    const addTodo = function (event) {
        event.preventDefault()
        
        const inputTag = document.querySelector('.inputData')
        const data = inputTag.value

        if (data.trim()) {
            const liTag = document.createElement('li')
            liTag.innerText = data

            const ulTag = document.querySelector('ul')
            ulTag.appendChild(liTag)
            event.target.reset()

        }
        else {
            alter('할 일을 입력하세요')
        }
    }
    
    formTag.addEventListener('submit', addTodo)
