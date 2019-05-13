
    Vue.component('my-nav',
    {
        props:['message'],
    
        template: `<nav> <button @click="$emit('toggle')" >#</button>{{message}}</nav>`,
    })
    Vue.component('my-main', {
        template: `<main> My Main <my-section></my-section> </main>`
    })
    Vue.component('my-aside', {
        template: `<aside v-html="title"></aside>`,
        data: () => ({
            title: 'My <b>Beauty</b> Aside'
        })
    })
    Vue.component('my-section', {
        template: `<section :style="style"> 
        {{model}}
        My Section
        <input type="text" v-model="model"> </section>`,
        data: () => ({
            style: {
                background: 'yellow'
            },
            model:''
        })
    })
    new Vue({
        el: '#app',
        data: {
            message:"isso foi criado atraves de uma propriedade",
            open: false
        },
        methods: {
            update() {
                this.open = !this.open
            }
        }
    })