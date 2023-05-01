const app = new Vue({
    el: '#app',
    data: {
    },
    methods: {
      select: function(event) {
        const btn1 = document.querySelector('#btn1');
        const btn2 = document.querySelector('#btn2');
        btn1.setAttribute('class','');
        btn2.setAttribute('class','');
        event.target.setAttribute('class','selected');

      }
    }
  })