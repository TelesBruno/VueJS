const vm= new Vue({
el:"#app",
data:{
    users:{
        daniel:"admin",
        thiago:"editor",
        joao:"guest"
    },
    todos:[
    {   id:"123",
        title:"Wash my car",
        complete:false,

    },
    {
        id:"321",
    title:"Buy some milk",
    complete: true,
    }
    ]
}
})