//Nav
Vue.component('my-nav', {
    mixins:[Mixin],
    props: {
        message: {
            type: String,
            default: ''
        },
    },
    template: `<nav> <button @click="$emit('toggle')">#</button> {{ message }} </nav>`
})

//Main
Vue.component('my-main', {
    props:['value'],
    mixins:[Mixin],
    template: `<main> 
                    <div class ="fill">
                        My Main 
                        <my-section :message="value" @input="$emit('input', $event)"></my-section>
    </div> </main>`
})

//Aside
Vue.component('my-aside', {
    mixins:[Mixin],
    props:['message'],
    template: `<aside v-html="message"></aside>`,
   
})

//Section
Vue.component('my-section', {
    mixins: [ Mixin ],
    props: ['message'],
    template: `<section :style="style">
                    <div class="fill"> 
                        My Section
                        {{ reverse }}
                        <input type="text" v-model="model"> 
                    </div>
                </section>`,
    data: () => ({
        style: {
            background: 'yellow'
        },
        model: ''
    }),
    computed: {
        reverse () {
            return this.model.split('').reverse().join('')
        }
    },
    mounted () {
      this.model = this.message
    },
    watch: {
        model () {
            this.$emit('input', this.model)
        }
    }
})

new Vue({
    el: '#app',
    data: {
        message: 'eae',
        open: false
    },
    methods: {
        update() {
            this.open = !this.open
        }
    }
})