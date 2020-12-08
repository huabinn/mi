var header = new Vue({
    el:"#header",
    data:{
        text:'',
    },
    methods:{
        logo:function(){

        },
        search:function(){
            console.log(this.text);
        }
    },
})

// var headerli = document.getElementsByClassName("header-li");
// var hidden = document.getElementsByClassName("hidden");
// headerli[0].onmousemove = function(){
//     console.log("star");
//     hidden[0].style.display = "block";
// }