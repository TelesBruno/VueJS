
const data = {
    title:"Data and Methods",
    person: {
        name:"Bruno Teles",
        age: 21,
    }
}
const vm = new Vue({
    el: "#app",
    data,
    methods:{
        altertitle (){
            this.title = `batata: ${this.person.name}`
      
    },
    ageSentence(age){
        return `${age} years`
    }
}
})
console.log(vm)