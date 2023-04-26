axios.get('https://api.example.com/data')
	.then(function (response) {
	console.log((response.data))
})

// JS에서 동기= 작업을 순차적으로 처리함(선행작업이 끝나기 전까지는 다음작업이 실행되지 않음)
// 비동기 = 요청을 보내면 그 요청이 끝날 때 까지 기다리는 것이 아니라, 응답에 관계없이 바로 다음 동작이 실행되는 방식

