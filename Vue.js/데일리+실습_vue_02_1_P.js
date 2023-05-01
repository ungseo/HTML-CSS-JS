const app = new Vue({
    el: '#app',
    data: {
      colors : ['red', 'orange', 'yellow', 'green', 'blue', 'violet'],
    },
    methods: {
      changecolor() {
        const idx = Math.floor(Math.random() * this.colors.length);
        const box = document.querySelector('.box');
        console.log(box)
        box.setAttribute('style', `background-color: ${this.colors[idx]}`)
      }
    }
  })