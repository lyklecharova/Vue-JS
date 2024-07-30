const app = Vue.createApp({
    data() {
        return {
            url: 'https://vuejs.org/',
            showBooks: true,
            books:[
                {title: 'name of wind',author: 'patric'},
                {title: 'the way of kings',author: 'brandon'},
                {title: 'the final empire',author: 'brandon'},
            ]
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 35,
            // x:0,
            // y:0
        };
    },
    methods: {
        // changeTitle(title){
        // //    this.title = 'Words of Radiance'
        // this.title = title
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        },
        handleMousemove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
});

app.mount('#app');
