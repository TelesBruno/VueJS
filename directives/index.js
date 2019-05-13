const vm  = new Vue({
el:"#app",
    data:{
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        showText: true,
        textClass:"red",
        link:"https://google.com",
        attr:'hrefabcd',
        number:"1",
    },
    methods:{
        sayHi(){
            window.alert("hi")
        }

    }
})