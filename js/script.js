var showText = new Vue({
    el:".input-box",
    data:{
        title : "",
    }, methods: {
        showSentence : function(e){
            var input = e.target ;
            var length = e.target.value.length ;
            if(length < 8){
                this.title = "password is too weak !" ;
                input.style.background = "red" ;
            }else if(length < 12){
                this.title = "password is not strong enogh !" ;
                input.style.background = "yellow" ;
            }else{
                this.title = "password is safe and strong !"
                input.style.background = "green" ;
            }
        }
    },
});