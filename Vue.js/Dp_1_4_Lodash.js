const app = new Vue({
    el: '#app',
    data: {
        menu: ['국밥', '피자', '햄버거', '순대', '치킨', '샐러드', '냉면', '돈까스',],
        picked: '',
        picks: '',
    },
    methods: {
        pickmenu() {
            const idx = Math.floor(Math.random() * (this.menu.length));
            this.picked = this.menu[idx]
        },
        picknumbers() {
            const pickslist = [];
            while (pickslist.length != 6) {
                const number = Math.floor(Math.random() * 45) + 1
                if (pickslist.includes(number) === false) {
                    pickslist.push(number);
                }
            }

            this.picks = pickslist;
            
        }
    }
})