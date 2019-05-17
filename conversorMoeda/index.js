//Nav
Vue.component('conversor', {
    props:["moedaA", 'moedaB'],
    template:`<div class="conversor">
    <h2>{{moedaA}} Para {{moedaB}}</h2>
    <input type="text" v-model="moedaA_value" :placeholder="moedaA"/>
    <input type="button" @click="converter" value="Converter"/>
    <h2>{{moedaB_value}}</h2></div>`,
    data(){
        return{
            moedaA_value: "",
            moedaB_value: 0
        }
    },
    methods:{
        converter () {
                let de_para = this.moedaA+"_"+this.moedaB;

                let url = 
                    "http://free.currencyconverterapi.com/api/v5/convert?q="+de_para+"&compact=y&apiKey=af285a9098c9614181bd"

            fetch(url)
            .then(res=>{
                return res.json();
            })
                .then(json=> {
                    let cotacao = json[de_para].val;
                    this.moedaB_value = (cotacao*parseFloat(this.moedaA_value)).toFixed(2);
                    });
        }
    }
})

new Vue({
    el: '#app',
    data: {
    },
})
