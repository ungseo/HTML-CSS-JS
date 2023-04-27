const app = new Vue({
    el: '#app',
    data: {
      message: '반가워요'
    },
    methods: {
      hello: function () {
        console.log(`hello! ${this.message}`)
      }
    },
  })